"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconBarCode = (0, _createIconComponent["default"])({
  width: 24,
  height: 25,
  innerContent: '<path d="M21.75 5.03894V8.78894C21.75 8.98785 21.671 9.17862 21.5303 9.31927C21.3897 9.45992 21.1989 9.53894 21 9.53894C20.8011 9.53894 20.6103 9.45992 20.4697 9.31927C20.329 9.17862 20.25 8.98785 20.25 8.78894V5.78894H17.25C17.0511 5.78894 16.8603 5.70992 16.7197 5.56927C16.579 5.42862 16.5 5.23785 16.5 5.03894C16.5 4.84003 16.579 4.64926 16.7197 4.50861C16.8603 4.36796 17.0511 4.28894 17.25 4.28894H21C21.1989 4.28894 21.3897 4.36796 21.5303 4.50861C21.671 4.64926 21.75 4.84003 21.75 5.03894ZM6.75 19.2889H3.75V16.2889C3.75 16.09 3.67098 15.8993 3.53033 15.7586C3.38968 15.618 3.19891 15.5389 3 15.5389C2.80109 15.5389 2.61032 15.618 2.46967 15.7586C2.32902 15.8993 2.25 16.09 2.25 16.2889V20.0389C2.25 20.2379 2.32902 20.4286 2.46967 20.5693C2.61032 20.7099 2.80109 20.7889 3 20.7889H6.75C6.94891 20.7889 7.13968 20.7099 7.28033 20.5693C7.42098 20.4286 7.5 20.2379 7.5 20.0389C7.5 19.84 7.42098 19.6493 7.28033 19.5086C7.13968 19.368 6.94891 19.2889 6.75 19.2889ZM21 15.5389C20.8011 15.5389 20.6103 15.618 20.4697 15.7586C20.329 15.8993 20.25 16.09 20.25 16.2889V19.2889H17.25C17.0511 19.2889 16.8603 19.368 16.7197 19.5086C16.579 19.6493 16.5 19.84 16.5 20.0389C16.5 20.2379 16.579 20.4286 16.7197 20.5693C16.8603 20.7099 17.0511 20.7889 17.25 20.7889H21C21.1989 20.7889 21.3897 20.7099 21.5303 20.5693C21.671 20.4286 21.75 20.2379 21.75 20.0389V16.2889C21.75 16.09 21.671 15.8993 21.5303 15.7586C21.3897 15.618 21.1989 15.5389 21 15.5389ZM3 9.53894C3.19891 9.53894 3.38968 9.45992 3.53033 9.31927C3.67098 9.17862 3.75 8.98785 3.75 8.78894V5.78894H6.75C6.94891 5.78894 7.13968 5.70992 7.28033 5.56927C7.42098 5.42862 7.5 5.23785 7.5 5.03894C7.5 4.84003 7.42098 4.64926 7.28033 4.50861C7.13968 4.36796 6.94891 4.28894 6.75 4.28894H3C2.80109 4.28894 2.61032 4.36796 2.46967 4.50861C2.32902 4.64926 2.25 4.84003 2.25 5.03894V8.78894C2.25 8.98785 2.32902 9.17862 2.46967 9.31927C2.61032 9.45992 2.80109 9.53894 3 9.53894ZM7.5 8.03894C7.30109 8.03894 7.11032 8.11796 6.96967 8.25861C6.82902 8.39926 6.75 8.59003 6.75 8.78894V16.2889C6.75 16.4879 6.82902 16.6786 6.96967 16.8193C7.11032 16.9599 7.30109 17.0389 7.5 17.0389C7.69891 17.0389 7.88968 16.9599 8.03033 16.8193C8.17098 16.6786 8.25 16.4879 8.25 16.2889V8.78894C8.25 8.59003 8.17098 8.39926 8.03033 8.25861C7.88968 8.11796 7.69891 8.03894 7.5 8.03894ZM17.25 16.2889V8.78894C17.25 8.59003 17.171 8.39926 17.0303 8.25861C16.8897 8.11796 16.6989 8.03894 16.5 8.03894C16.3011 8.03894 16.1103 8.11796 15.9697 8.25861C15.829 8.39926 15.75 8.59003 15.75 8.78894V16.2889C15.75 16.4879 15.829 16.6786 15.9697 16.8193C16.1103 16.9599 16.3011 17.0389 16.5 17.0389C16.6989 17.0389 16.8897 16.9599 17.0303 16.8193C17.171 16.6786 17.25 16.4879 17.25 16.2889ZM13.5 8.03894C13.3011 8.03894 13.1103 8.11796 12.9697 8.25861C12.829 8.39926 12.75 8.59003 12.75 8.78894V16.2889C12.75 16.4879 12.829 16.6786 12.9697 16.8193C13.1103 16.9599 13.3011 17.0389 13.5 17.0389C13.6989 17.0389 13.8897 16.9599 14.0303 16.8193C14.171 16.6786 14.25 16.4879 14.25 16.2889V8.78894C14.25 8.59003 14.171 8.39926 14.0303 8.25861C13.8897 8.11796 13.6989 8.03894 13.5 8.03894ZM10.5 8.03894C10.3011 8.03894 10.1103 8.11796 9.96967 8.25861C9.82902 8.39926 9.75 8.59003 9.75 8.78894V16.2889C9.75 16.4879 9.82902 16.6786 9.96967 16.8193C10.1103 16.9599 10.3011 17.0389 10.5 17.0389C10.6989 17.0389 10.8897 16.9599 11.0303 16.8193C11.171 16.6786 11.25 16.4879 11.25 16.2889V8.78894C11.25 8.59003 11.171 8.39926 11.0303 8.25861C10.8897 8.11796 10.6989 8.03894 10.5 8.03894Z" fill="white"/>'
});
var _default = IconBarCode;
exports["default"] = _default;