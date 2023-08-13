import * as React from 'react';
import Option from './Option';
export interface Props {
    option: Option;
    defaultOption: React.ComponentClass | string;
    children: React.ReactNode;
}
export default class Selector extends React.Component<Props> {
    render(): React.JSX.Element;
}
