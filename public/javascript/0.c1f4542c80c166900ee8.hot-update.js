webpackHotUpdate(0,{

/***/ 284:
/*!*******************************!*\
  !*** ./roles/chooseRoles.jsx ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChooseRoles = function (_Component) {
	    _inherits(ChooseRoles, _Component);
	
	    function ChooseRoles(props) {
	        _classCallCheck(this, ChooseRoles);
	
	        var _this = _possibleConstructorReturn(this, (ChooseRoles.__proto__ || Object.getPrototypeOf(ChooseRoles)).call(this, props));
	
	        debugger;
	        return _this;
	    }
	
	    _createClass(ChooseRoles, [{
	        key: "selectRole",
	        value: function selectRole(role) {
	            if (!role.name) return;
	            var Roles = this.props.user.Roles.length !== 0 ? this.checkRoles(this.props.user.Roles, role) : [role];
	
	            this.props.user.Roles = Roles;
	
	            if (this.props.user._id) this.props.updateClientUser(this.props.user);
	            // else
	            //     this.props.createUser(this.props.user)
	        }
	    }, {
	        key: "checkRoles",
	        value: function checkRoles(roles, role) {
	            var newRoles = [];
	            var index = -1;
	            var count = roles.filter(function (ur, ind) {
	                if (ur.name !== role.name) {
	                    return ur;
	                } else {
	                    index = ind;
	                }
	            });
	
	            if (count.length > 0) {
	                roles.push(role);
	            } else {
	                roles.splice(index, 1);
	            }
	
	            return newRoles.concat(roles);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return this.props.roles != undefined && this.props.userRoles != undefined && this.props.user._id ? _react2.default.createElement(
	                "div",
	                { className: "user-roles-container" },
	                _react2.default.createElement(
	                    "p",
	                    null,
	                    "List of user's roles"
	                ),
	                _react2.default.createElement(
	                    "form",
	                    null,
	                    this.props.roles.map(function (role) {
	                        var checked = _this2.props.userRoles.filter(function (urole) {
	                            return urole.name === role.name;
	                        }).length > 0;
	                        //here we should check does role contain in user roles and then check or uncheck it  
	                        return _react2.default.createElement(
	                            "div",
	                            { className: "row", key: role._id },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col s12" },
	                                _react2.default.createElement("input", { type: "checkbox", id: role.name, checked: checked, onChange: _this2.selectRole.bind(_this2, { name: role.name, Permissions: role.Permissions }) }),
	                                _react2.default.createElement(
	                                    "label",
	                                    { htmlFor: role.name },
	                                    role.name
	                                )
	                            )
	                        );
	                    })
	                )
	            ) : _react2.default.createElement("div", { className: "empty" });
	        }
	    }]);
	
	    return ChooseRoles;
	}(_react.Component);
	
	exports.default = ChooseRoles;

/***/ })

})
//# sourceMappingURL=0.c1f4542c80c166900ee8.hot-update.js.map