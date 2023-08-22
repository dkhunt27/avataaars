import React, { useContext, useEffect, useMemo, useState } from 'react'

import Option from './Option'
import { AvatarContext } from './OptionContext'

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

export default function Selector(props: Props) {
  const avatarContext = useContext(AvatarContext)

  function getSelectedOption() {
    const selectedOptionType = avatarContext[props.option.key]
    let result
    React.Children.forEach(props.children, (child) => {
      if (getComponentOptionValue((child as any).type) === selectedOptionType) {
        result = child
      }
    })
    if (result === undefined) {
      return props.defaultOption
    } else {
      return result
    }
  }

  const selectedOption = useMemo(() => getSelectedOption(), [avatarContext])

  return selectedOption
}
