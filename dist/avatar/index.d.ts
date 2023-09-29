import * as React from 'react';
import { AvatarStyleOptions } from '../config';
export interface Props {
    avatarStyle: typeof AvatarStyleOptions[number];
    className?: string;
    style?: React.CSSProperties;
}
export default function Avatar(props: Props): React.JSX.Element;
