webpackHotUpdate(0,{

/***/ 299:
/*!********************************************!*\
  !*** ./containers/EditedUserContainer.jsx ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _profile = __webpack_require__(/*! ../profile/profile */ 224);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 247);
	
	var _user = __webpack_require__(/*! ../action/user */ 226);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _error = __webpack_require__(/*! ../action/error */ 287);
	
	var _error2 = _interopRequireDefault(_error);
	
	var _authService = __webpack_require__(/*! ../authenticate/auth-service */ 286);
	
	var _authService2 = _interopRequireDefault(_authService);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 160);
	
	var _loader = __webpack_require__(/*! ../core/loader */ 246);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EditedUserContainer = function (_Component) {
	    _inherits(EditedUserContainer, _Component);
	
	    function EditedUserContainer(props) {
	        _classCallCheck(this, EditedUserContainer);
	
	        return _possibleConstructorReturn(this, (EditedUserContainer.__proto__ || Object.getPrototypeOf(EditedUserContainer)).call(this, props));
	    }
	
	    _createClass(EditedUserContainer, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //here we get user by id from server
	            if (!this.props.editedUser) {
	                this.props.getById(this.props.params.userid);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            //get user from server after creation or update
	            if (!this.props.editedUser) {
	                this.props.getById(this.props.params.userid);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.props.editedUser) {
	                return _react2.default.createElement(_profile2.default, { user: this.props.editedUser,
	                    updateClientUser: this.props.updateClientUser,
	                    updateUser: this.props.updateUser,
	                    errors: this.props.errors,
	                    canSubmit: this.props.clienterrors,
	                    setClientErrors: this.props.setClientErrors,
	                    clearAll: this.props.clearAll,
	                    showLoader: this.props.showLoader });
	            } else {
	                return _react2.default.createElement(_loader2.default, null);
	            }
	        }
	    }]);
	
	    return EditedUserContainer;
	}(_react.Component);
	
	exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(function (state) {
	    return {
	        users: state.users.usersList,
	        editedUser: state.users.editedUser,
	        showLoader: state.users.showReload,
	        errors: state.errors.errorsList
	    };
	}, function (dispatch) {
	    return {
	        getAll: function getAll() {
	            dispatch(_user2.default.RECEIVE_ALL());
	        },
	        getById: function getById(id) {
	            dispatch(_user2.default.GET_USER_BY_ID(id));
	        },
	        updateUser: function updateUser(user) {
	            dispatch(_user2.default.UPDATE_USER(user));
	        },
	        createUser: function createUser(user) {
	            dispatch(_user2.default.CREATE_USER(user));
	        },
	        setClientErrors: function setClientErrors() {
	            dispatch(_error2.default.SET_CLIENT_VALIDATION_ERRORS());
	        },
	        updateClientUser: function updateClientUser(user) {
	            dispatch(_user2.default.UPDATE_CLIENT_USER(user));
	        }
	
	    };
	})(EditedUserContainer));

/***/ })

})
//# sourceMappingURL=0.67aa32f0335d24b66523.hot-update.js.map