"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var clothes_1 = require("./clothes");
var Graphics_1 = require("./clothes/Graphics");
var Colors_1 = require("./clothes/Colors");
var accessories_1 = require("./top/accessories");
var facialHair_1 = require("./top/facialHair");
var Colors_2 = require("./top/facialHair/Colors");
var top_1 = require("./top");
var HairColor_1 = require("./top/HairColor");
var HatColor_1 = require("./top/HatColor");
var eyes_1 = require("./face/eyes");
var eyebrow_1 = require("./face/eyebrow");
var mouth_1 = require("./face/mouth");
var nose_1 = require("./face/nose");
var Skin_1 = require("./Skin");
function PieceComponent(props) {
    var style = props.style, _a = props.pieceWidth, pieceWidth = _a === void 0 ? 264 : _a, _b = props.pieceHeight, pieceHeight = _b === void 0 ? 280 : _b, viewBox = props.viewBox, pieceType = props.pieceType;
    return (React.createElement("svg", { style: style, width: "".concat(pieceWidth.toString(), "px"), height: "".concat(pieceHeight.toString(), "px"), viewBox: viewBox || "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        pieceType === 'accessories' && React.createElement(accessories_1.default, null),
        pieceType === 'clothe' && React.createElement(clothes_1.default, null),
        pieceType === 'clotheColor' && React.createElement(Colors_1.default, { maskID: "0001" }),
        pieceType === 'eyebrows' && React.createElement(eyebrow_1.default, null),
        pieceType === 'eyes' && React.createElement(eyes_1.default, null),
        pieceType === 'facialHairColor' && React.createElement(Colors_2.default, { maskID: "0002" }),
        pieceType === 'facialHair' && React.createElement(facialHair_1.default, null),
        pieceType === 'graphics' && React.createElement(Graphics_1.default, { maskID: "0003" }),
        pieceType === 'hairColor' && React.createElement(HairColor_1.default, { maskID: "0004" }),
        pieceType === 'hatColor' && React.createElement(HatColor_1.default, { maskID: "0005" }),
        pieceType === 'mouth' && React.createElement(mouth_1.default, null),
        pieceType === 'nose' && React.createElement(nose_1.default, null),
        pieceType === 'skin' && React.createElement(Skin_1.default, { maskID: "5678" }),
        pieceType === 'top' && React.createElement(top_1.default, null)));
}
exports.default = PieceComponent;
