import * as React from 'react';
export { default as Avatar, AvatarStyle } from './avatar';
export { Option, allOptions } from './options';
import { Props } from './options/avatarContext';
declare function AvatarComponent(props: Props): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof AvatarComponent>;
export default _default;
