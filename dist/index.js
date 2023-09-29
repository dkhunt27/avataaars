"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = exports.Avatar = exports.allOptions = exports.Option = void 0;
var React = require("react");
var avatar_1 = require("./avatar");
var options_1 = require("./options");
var piece_1 = require("./avatar/piece");
var options_2 = require("./options");
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return options_2.Option; } });
Object.defineProperty(exports, "allOptions", { enumerable: true, get: function () { return options_2.allOptions; } });
function Avatar(props) {
    var avatarStyle = props.avatarStyle, style = props.style, className = props.className;
    return (React.createElement(options_1.AvatarContext.Provider, { value: props },
        React.createElement(avatar_1.default, { avatarStyle: avatarStyle, style: style, className: className })));
}
exports.Avatar = Avatar;
function Piece(props) {
    var style = props.style, pieceType = props.pieceType, pieceHeight = props.pieceHeight, pieceWidth = props.pieceWidth, viewBox = props.viewBox;
    return (React.createElement(options_1.AvatarContext.Provider, { value: props },
        React.createElement(piece_1.default, { style: style, pieceType: pieceType, pieceHeight: pieceHeight, pieceWidth: pieceWidth, viewBox: viewBox })));
}
exports.Piece = Piece;
