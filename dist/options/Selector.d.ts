import * as React from 'react';
import Option from './Option';
export interface Props {
    option: Option;
    defaultOption: React.ComponentClass;
    children: React.ReactNode;
}
export default function Selector(props: Props): React.ReactNode;
