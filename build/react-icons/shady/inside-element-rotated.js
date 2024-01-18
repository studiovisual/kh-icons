"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconInsideElementRotated = (0, _createIconComponent["default"])({
  width: 32,
  height: 32,
  innerContent: '<rect x="10.24" y="30.72" width="8.96" height="8.96" rx=".5" transform="rotate(-180 10.24 30.72)" fill="#D2B6F1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.92 32H9.6c1.06 0 1.92-.86 1.92-1.92v-3.2H28.8c1.06 0 1.92-.86 1.92-1.92V3.2c0-1.06-.86-1.92-1.92-1.92H7.04c-1.06 0-1.92.86-1.92 1.92v17.28h-3.2C.86 20.48 0 21.34 0 22.4v7.68C0 31.14.86 32 1.92 32zM6.4 3.2a.64.64 0 01.64-.64H28.8a.64.64 0 01.64.64v21.76a.64.64 0 01-.64.64H11.52v-3.2a1.904 1.904 0 00-.192-.824l.005-.003 7.867-7.868v3.575a.64.64 0 101.28 0v-5.12a.64.64 0 00-.64-.64h-5.12a.64.64 0 100 1.28h3.575l-7.868 7.867-.003.005a1.9 1.9 0 00-.824-.192H6.4V3.2zM1.92 21.76a.64.64 0 00-.64.64v7.68c0 .354.287.64.64.64H9.6a.64.64 0 00.64-.64V22.4a.64.64 0 00-.64-.64H1.92z" fill="#5F259F"/>'
});
var _default = IconInsideElementRotated;
exports["default"] = _default;