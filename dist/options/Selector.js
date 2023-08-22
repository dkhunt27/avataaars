"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var avatarContext_1 = require("./avatarContext");
function getComponentOptionValue(component) {
    var optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error("optionValue should be provided for ".concat(component));
    }
    return optionValue;
}
function Selector(props) {
    var avatarContext = React.useContext(avatarContext_1.AvatarContext);
    function getSelectedOption() {
        var _a;
        var selectedOptionType = (_a = avatarContext[props.option.key]) !== null && _a !== void 0 ? _a : props.defaultOption.name;
        var result;
        React.Children.forEach(props.children, function (child) {
            if (getComponentOptionValue(child.type) === selectedOptionType) {
                result = child;
            }
        });
        if (result) {
            return result;
        }
        else {
            return React.createElement(React.Fragment, null);
        }
    }
    var selectedOption = React.useMemo(function () { return getSelectedOption(); }, [avatarContext]);
    return selectedOption;
}
exports.default = Selector;
