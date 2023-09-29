import * as React from 'react'

import Clothe from './clothes'
import Graphics from './clothes/Graphics'
import ClotheColors from './clothes/Colors';
import Accessories from './top/accessories'
import FacialHair from './top/facialHair'
import FacialHairColors from './top/facialHair/Colors'
import Top from './top'
import HairColors from './top/HairColor'
import HatColors from './top/HatColor'

import Eyes from './face/eyes'
import Eyebrows from './face/eyebrow'
import Mouth from './face/mouth'
import Nose from './face/nose'
import Skin from './Skin'
import { PieceType } from '../types'

export interface Props {
  pieceWidth?: number
  pieceHeight?: number
  pieceType?: PieceType
  style?: React.CSSProperties
  viewBox?: string
}

export default function PieceComponent(props: Props) {
  const {style, pieceWidth = 264, pieceHeight = 280, viewBox = "0 0 264 280", pieceType} = props;
  return (
    <svg
      style={style}
      width={`${pieceWidth.toString()}px`}
      height={`${pieceHeight.toString()}px`}
      viewBox={viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      {pieceType === 'accessories' && <Accessories />}
      {pieceType === 'clothe' && <Clothe />}
      {pieceType === 'clotheColor' && <ClotheColors maskID="0001" />}
      {pieceType === 'eyebrows' && <Eyebrows />}
      {pieceType === 'eyes' && <Eyes />}
      {pieceType === 'facialHairColor' && <FacialHairColors maskID="0002" />}
      {pieceType === 'facialHair' && <FacialHair />}
      {pieceType === 'graphics' && <Graphics maskID="0003" />}
      {pieceType === 'hairColor' && <HairColors maskID="0004" />}
      {pieceType === 'hatColor' && <HatColors maskID="0005" />}
      {pieceType === 'mouth' && <Mouth />}
      {pieceType === 'nose' && <Nose />}
      {pieceType === 'skin' && <Skin maskID="5678" />}
      {pieceType === 'top' && <Top />}
    </svg>
  )
}
