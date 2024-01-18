"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconUiCompose = (0, _createIconComponent["default"])({
  width: 40,
  height: 40,
  innerContent: '<path fill="#9EFFED" d="M30.813 4.662l2.925 2.926-17.777 17.777a.802.802 0 01-.566.235H12.8v1.6h4.194a.798.798 0 00.566-.235L35.338 9.188l-4.526-4.526zm7.353.565l-1.6-1.6a.8.8 0 010 1.13l-1.697 1.698 1.6 1.6 1.697-1.697a.8.8 0 000-1.131z"/><path fill="#fff" d="M31.2 24a.8.8 0 00-.8.8v12.8a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V10.4a.8.8 0 01.8-.8h12.8a.8.8 0 100-1.6H2.4A2.4 2.4 0 000 10.4v27.2A2.4 2.4 0 002.4 40h27.2a2.4 2.4 0 002.4-2.4V24.8a.8.8 0 00-.8-.8z"/><path fill="#fff" fill-rule="evenodd" d="M39.296 4.096L35.902.703a2.4 2.4 0 00-3.394 0L11.902 21.308a2.402 2.402 0 00-.703 1.698V27.2a1.6 1.6 0 001.6 1.6h4.194c.637 0 1.247-.253 1.697-.704L39.296 7.491a2.4 2.4 0 000-3.395zM17.56 26.966a.8.8 0 01-.566.234H12.8v-4.194c0-.213.084-.417.235-.567L30.81 4.662l4.526 4.526-17.778 17.777zm18.909-18.91l1.697-1.697a.8.8 0 000-1.131L34.77 1.834a.802.802 0 00-1.132 0l-1.697 1.697 4.526 4.526z" clip-rule="evenodd"/>'
});
var _default = IconUiCompose;
exports["default"] = _default;