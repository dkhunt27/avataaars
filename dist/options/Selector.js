"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var OptionContext_1 = require("./OptionContext");
function getComponentOptionValue(component) {
    var optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error("optionValue should be provided for ".concat(component));
    }
    return optionValue;
}
var Selector = /** @class */ (function (_super) {
    __extends(Selector, _super);
    function Selector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Selector.prototype.render = function () {
        var _this = this;
        return (React.createElement(OptionContext_1.AvatarContext.Consumer, null, function (optionContext) { return (React.createElement(SelectorContent, __assign({ optionContext: optionContext }, _this.props))); }));
    };
    return Selector;
}(React.Component));
exports.default = Selector;
var SelectorContent = /** @class */ (function (_super) {
    __extends(SelectorContent, _super);
    function SelectorContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContextUpdate = function () {
            _this.forceUpdate();
        };
        return _this;
    }
    SelectorContent.prototype.componentDidMount = function () {
        this.setDefaultValues();
    };
    SelectorContent.prototype.setDefaultValues = function () {
        var _a = this.props, option = _a.option, defaultOption = _a.defaultOption, optionContext = _a.optionContext;
        // const { optionContext } = this
        var defaultValue = typeof defaultOption === 'string'
            ? defaultOption
            : getComponentOptionValue(defaultOption);
        optionContext.addStateChangeListener(this.optionContextUpdate);
        optionContext.optionEnter(option.key);
        var optionState = optionContext.getOptionState(option.key);
        this.updateOptionValues();
        if (optionState) {
            optionContext.setDefaultValue(option.key, defaultValue);
        }
    };
    SelectorContent.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.children !== prevProps.children) {
            this.updateOptionValues();
        }
    };
    SelectorContent.prototype.componentWillUnmount = function () {
        var optionContext = this.props.optionContext;
        optionContext.removeStateChangeListener(this.optionContextUpdate);
        optionContext.optionExit(this.props.option.key);
    };
    SelectorContent.prototype.render = function () {
        this.setDefaultValues();
        var optionContext = this.props.optionContext;
        var result = null;
        var _a = this.props, option = _a.option, children = _a.children;
        var value = optionContext.getValue(option.key);
        React.Children.forEach(children, function (child) {
            if (getComponentOptionValue(child.type) === value) {
                result = child;
            }
        });
        return result;
    };
    SelectorContent.prototype.updateOptionValues = function () {
        var _a = this.props, option = _a.option, children = _a.children;
        var values = React.Children.map(children, function (child) {
            return getComponentOptionValue(child.type);
        });
        if (new Set(values).size !== (values === null || values === void 0 ? void 0 : values.length)) {
            throw new Error('Duplicate values');
        }
        this.props.optionContext.setOptions(option.key, values);
    };
    return SelectorContent;
}(React.Component));
