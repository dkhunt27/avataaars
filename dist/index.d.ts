import * as React from 'react';
export { default as Avatar, AvatarStyle } from './avatar';
export { Option, OptionContext, allOptions } from './options';
export interface Props {
    avatarStyle: string;
    className?: string;
    style?: React.CSSProperties;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
}
declare class AvatarComponent extends React.Component<Props> {
    private optionContext;
    constructor(props: Props);
    render(): React.JSX.Element;
    private updateOptionContext;
}
declare const _default: React.MemoExoticComponent<typeof AvatarComponent>;
export default _default;
export declare class Piece extends React.Component<Props> {
    private optionContext;
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    render(): React.JSX.Element;
    private updateOptionContext;
}
