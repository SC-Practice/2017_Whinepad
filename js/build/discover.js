'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'div',
    { style: { padding: '20px' } },
    _react2.default.createElement(
        'h1',
        null,
        'Component discover'
    ),
    _react2.default.createElement(
        'h2',
        null,
        'Logo'
    ),
    _react2.default.createElement(
        'div',
        { style: { display: 'inline-block', background: 'purple' } },
        _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
        'h2',
        null,
        'Buttons'
    ),
    _react2.default.createElement(
        'div',
        null,
        'Button with onClick: ',
        _react2.default.createElement(
            _Button2.default,
            { onClick: function onClick() {
                    return alert('ouch');
                } },
            'Click me'
        )
    ),
    _react2.default.createElement(
        'div',
        null,
        'A link: ',
        _react2.default.createElement(
            _Button2.default,
            { href: 'http://react.js.com' },
            'Follow me'
        )
    ),
    _react2.default.createElement(
        'div',
        null,
        'Customer class name: ',
        _react2.default.createElement(
            _Button2.default,
            { className: 'custom' },
            'I do nothing'
        )
    )
), document.getElementById('pad'));