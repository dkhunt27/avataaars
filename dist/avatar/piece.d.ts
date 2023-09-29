import * as React from 'react';
import { PieceType } from '../types';
export interface Props {
    pieceWidth?: number;
    pieceHeight?: number;
    pieceType?: PieceType;
    style?: React.CSSProperties;
    viewBox?: string;
}
export default function PieceComponent(props: Props): React.JSX.Element;
