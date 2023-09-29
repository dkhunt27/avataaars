"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
__exportStar(require("./config"), exports);
__exportStar(require("./types"), exports);
