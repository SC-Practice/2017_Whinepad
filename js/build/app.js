'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if (!deaders) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

_reactDom2.default.render(_react2.default.createElement(
    'h1',
    null,
    _react2.default.createElement(_Logo2.default, null),
    ' Welcome to The App!',
    _react2.default.createElement(Excel, { headers: headers, initialData: data })
), document.getElementById('app'));