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
        var selectedOptionType = avatarContext[props.option.key];
        var result;
        React.Children.forEach(props.children, function (child) {
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
    var selectedOption = React.useMemo(function () { return getSelectedOption(); }, [avatarContext]);
    return selectedOption;
}
exports.default = Selector;
