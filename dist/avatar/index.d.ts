import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface Props {
    avatarStyle: AvatarStyle;
    className?: string;
    style?: React.CSSProperties;
}
export default function Avatar(props: Props): React.JSX.Element;
