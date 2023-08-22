"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allOptions = exports.Option = exports.AvatarStyle = exports.Avatar = void 0;
var React = require("react");
var avatar_1 = require("./avatar");
var options_1 = require("./options");
var avatar_2 = require("./avatar");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return avatar_2.default; } });
Object.defineProperty(exports, "AvatarStyle", { enumerable: true, get: function () { return avatar_2.AvatarStyle; } });
var options_2 = require("./options");
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return options_2.Option; } });
Object.defineProperty(exports, "allOptions", { enumerable: true, get: function () { return options_2.allOptions; } });
function AvatarComponent(props) {
    var avatarStyle = props.avatarStyle, style = props.style, className = props.className;
    return (React.createElement(options_1.AvatarContext.Provider, { value: props },
        React.createElement(avatar_1.default, { avatarStyle: avatarStyle, style: style, className: className })));
}
exports.default = React.memo(AvatarComponent);
// export class Piece extends React.Component<Props> {
//   private optionContext: OptionContext = new OptionContext(allOptions)
//   UNSAFE_componentWillMount() {
//     this.updateOptionContext(this.props)
//   }
//   UNSAFE_componentWillReceiveProps(nextProps: Props) {
//     this.updateOptionContext(nextProps)
//   }
//   render() {
//     const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
//     return (
//       <PieceComponent
//         avatarStyle={avatarStyle as AvatarStyle}
//         style={style}
//         pieceType={pieceType}
//         pieceSize={pieceSize}
//         viewBox={viewBox}
//       />
//     )
//   }
//   private updateOptionContext(props: Props) {
//     const data: { [index: string]: string } = {}
//     for (const option of allOptions) {
//       const value = props[option.key]
//       if (!value) {
//         continue
//       }
//       data[option.key] = value
//     }
//     this.optionContext.setData(data)
//   }
// }
