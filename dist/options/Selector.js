"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var avatarContext_1 = require("./avatarContext");
function getComponentOptionValue(component) {
    var optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error("optionValue should be provided for ".concat(component));
    }
    return optionValue;
}
function Selector(props) {
    var avatarContext = (0, react_1.useContext)(avatarContext_1.AvatarContext);
    function getSelectedOption() {
        var selectedOptionType = avatarContext[props.option.key];
        var result;
        react_1.default.Children.forEach(props.children, function (child) {
            if (getComponentOptionValue(child.type) === selectedOptionType) {
                result = child;
            }
        });
        if (result === undefined) {
            return props.defaultOption;
        }
        else {
            return result;
        }
    }
    var selectedOption = (0, react_1.useMemo)(function () { return getSelectedOption(); }, [avatarContext]);
    return selectedOption;
}
exports.default = Selector;
