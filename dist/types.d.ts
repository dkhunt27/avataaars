/// <reference types="react" />
import { AccessoriesTypeOptions, AvatarStyleOptions, ClotheColorOptions, ClotheTypeOptions, EyeTypeOptions, EyebrowTypeOptions, FacialHairColorOptions, FacialHairTypeOptions, GraphicTypeOptions, HairColorOptions, HatColorOptions, MouthTypeOptions, SkinColorOptions, TopTypeOptions } from "./config";
export type PieceType = 'top' | 'clothe' | 'graphics' | 'accessories' | 'facialHair' | 'eyes' | 'eyebrows' | 'mouth' | 'nose' | 'skin';
export interface Categories {
    accessoriesType?: typeof AccessoriesTypeOptions[number];
    clotheColor?: typeof ClotheColorOptions[number];
    clotheType?: typeof ClotheTypeOptions[number];
    eyebrowType?: typeof EyebrowTypeOptions[number];
    eyeType?: typeof EyeTypeOptions[number];
    facialHairColor?: typeof FacialHairColorOptions[number];
    facialHairType?: typeof FacialHairTypeOptions[number];
    graphicType?: typeof GraphicTypeOptions[number];
    hairColor?: typeof HairColorOptions[number];
    hatColor?: typeof HatColorOptions[number];
    mouthType?: typeof MouthTypeOptions[number];
    skinColor?: typeof SkinColorOptions[number];
    topType?: typeof TopTypeOptions[number];
}
export interface Settings {
    avatarStyle: typeof AvatarStyleOptions[number];
    className?: string;
    style?: React.CSSProperties;
    pieceType?: PieceType;
    pieceHeight?: number;
    pieceWidth?: number;
    viewBox?: string;
}
export type Props = Categories & Settings;
