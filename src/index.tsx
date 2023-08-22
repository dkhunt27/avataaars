import * as React from 'react'

import Avatar, { AvatarStyle } from './avatar'
import { AvatarContext } from './options'
import PieceComponent from './avatar/piece'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, allOptions } from './options'

import { Props } from './options/avatarContext'

function AvatarComponent(props: Props) {
  const { avatarStyle, style, className } = props
  return (
    <AvatarContext.Provider value={props}>
      <Avatar
        avatarStyle={avatarStyle as AvatarStyle}
        style={style}
        className={className}
      />
    </AvatarContext.Provider>
  )
}

export default React.memo(AvatarComponent)

// export class Piece extends React.Component<Props> {
//   private optionContext: OptionContext = new OptionContext(allOptions)

//   UNSAFE_componentWillMount() {
//     this.updateOptionContext(this.props)
//   }

//   UNSAFE_componentWillReceiveProps(nextProps: Props) {
//     this.updateOptionContext(nextProps)
//   }

//   render() {
//     const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
//     return (
//       <PieceComponent
//         avatarStyle={avatarStyle as AvatarStyle}
//         style={style}
//         pieceType={pieceType}
//         pieceSize={pieceSize}
//         viewBox={viewBox}
//       />
//     )
//   }

//   private updateOptionContext(props: Props) {
//     const data: { [index: string]: string } = {}
//     for (const option of allOptions) {
//       const value = props[option.key]
//       if (!value) {
//         continue
//       }
//       data[option.key] = value
//     }
//     this.optionContext.setData(data)
//   }
// }
