import * as React from 'react'

import Avatar, { AvatarStyle } from './avatar'
import { OptionContext, allOptions, AvatarContext } from './options'
import PieceComponent from './avatar/piece'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, OptionContext, allOptions } from './options'

export interface Props {
  avatarStyle: string
  className?: string
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

class AvatarComponent extends React.Component<Props> {
  private optionContext: OptionContext = new OptionContext(allOptions)

  constructor(props: Props) {
    super(props)
    this.updateOptionContext(props)
  }

  render() {
    const { avatarStyle, style, className } = this.props
    return (
      <AvatarContext.Provider value={this.optionContext}>
        <Avatar
          avatarStyle={avatarStyle as AvatarStyle}
          style={style}
          className={className}
        />
      </AvatarContext.Provider>
    )
  }

  private updateOptionContext(props: Props) {
    console.log('Avataaars: updating option context')
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}

export default React.memo(AvatarComponent)

export class Piece extends React.Component<Props> {
  private optionContext: OptionContext = new OptionContext(allOptions)

  UNSAFE_componentWillMount() {
    this.updateOptionContext(this.props)
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  render() {
    const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
    return (
      <PieceComponent
        avatarStyle={avatarStyle as AvatarStyle}
        style={style}
        pieceType={pieceType}
        pieceSize={pieceSize}
        viewBox={viewBox}
      />
    )
  }

  private updateOptionContext(props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}
