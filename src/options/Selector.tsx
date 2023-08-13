import * as React from 'react'

import Option from './Option'
import OptionContext,{AvatarContext} from './OptionContext'

function getComponentOptionValue(component: React.ComponentClass) {
  const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface Props {
  option: Option
  defaultOption: React.ComponentClass | string
  children: React.ReactNode
}

export default class Selector extends React.Component<Props> {
  render() {
    return (
      <AvatarContext.Consumer>
        {(optionContext) => (
          <SelectorContent optionContext={optionContext} {...this.props} />
        )}
      </AvatarContext.Consumer>
    );
  }
}

class SelectorContent extends React.Component<Props & { optionContext: OptionContext }> {
  componentDidMount() {
    this.setDefaultValues()
  }

  private setDefaultValues(){
    const { option, defaultOption, optionContext } = this.props
    // const { optionContext } = this
    const defaultValue =
      typeof defaultOption === 'string'
        ? defaultOption
        : getComponentOptionValue(defaultOption)
    optionContext.addStateChangeListener(this.optionContextUpdate)
    optionContext.optionEnter(option.key)
    const optionState = optionContext.getOptionState(option.key)
    this.updateOptionValues()
    if (optionState) {
      optionContext.setDefaultValue(option.key, defaultValue)
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.children !== prevProps.children) {
      this.updateOptionValues()
    }
  }

  componentWillUnmount() {
    const { optionContext } = this.props
    optionContext.removeStateChangeListener(this.optionContextUpdate)
    optionContext.optionExit(this.props.option.key)
  }

  render() {
    this.setDefaultValues();
    const { optionContext } = this.props
    let result: React.ReactNode | null = null
    const { option, children } = this.props
    const value = optionContext.getValue(option.key)! 
    React.Children.forEach(children, (child) => {
      if (getComponentOptionValue((child as any).type) === value) {
        result = child
      }
    })
    return result
  }

  private optionContextUpdate = () => {
    this.forceUpdate()
  }

  private updateOptionValues() {
    const { option, children } = this.props
    const values = React.Children.map(children, (child) =>
      getComponentOptionValue((child as any).type)
    )
    if (new Set(values).size !== values?.length) {
      throw new Error('Duplicate values')
    }
    this.props.optionContext.setOptions(option.key, values)
  }
}
