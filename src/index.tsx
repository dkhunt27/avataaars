import * as React from 'react'

import AvatarComponent from './avatar'
import { AvatarContext } from './options'
import PieceComponent from './avatar/piece'
export { Option, allOptions } from './options'
import { AvataaarProps, PieceProps } from './types'

export function Avatar(props: AvataaarProps) {
  const { avatarStyle, style, className } = props
  return (
    <AvatarContext.Provider value={props}>
      <AvatarComponent
        avatarStyle={avatarStyle}
        style={style}
        className={className}
      />
    </AvatarContext.Provider>
  )
}

export function Piece(props: PieceProps) {
  const { style, pieceType, pieceHeight, pieceWidth, viewBox } = props
  return (
    <AvatarContext.Provider value={props}>
      <PieceComponent
        style={style}
        pieceType={pieceType}
        pieceHeight={pieceHeight}
        pieceWidth={pieceWidth}
        viewBox={viewBox}
      />
    </AvatarContext.Provider>
  )
}

export * from './config';
export * from './types';