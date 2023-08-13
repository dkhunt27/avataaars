import * as React from 'react';
import Option from './Option';
import OptionContext from './OptionContext';
export interface Props {
    option: Option;
    defaultOption: React.ComponentClass | string;
    children: React.ReactNode;
}
export default class Selector extends React.Component<Props> {
    static contextType: typeof OptionContext;
    private get optionContext();
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    render(): null;
    private updateOptionValues;
}
