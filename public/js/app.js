(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/actions/collections.js":
/*!*********************************************!*\
  !*** ./resources/js/actions/collections.js ***!
  \*********************************************/
/*! exports provided: getAllCollections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCollections", function() { return getAllCollections; });
function getAllCollections() {
  return {
    type: 'GET_ALL_COLLECTIONS_START'
  };
}
;

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


__webpack_require__(/*! ./components/App */ "./resources/js/components/App.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/App.js":
/*!****************************************!*\
  !*** ./resources/js/components/App.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./resources/js/components/Home.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/pink */ "./node_modules/@material-ui/core/colors/pink.js");
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Collection */ "./resources/js/components/Collection.js");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Book */ "./resources/js/components/Book.js");
/* harmony import */ var _Lesson__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Lesson */ "./resources/js/components/Lesson.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
















var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  palette: {
    primary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5___default.a,
    secondary: _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_6___default.a
  }
});

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_15__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disableGutters: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Router"], {
    history: Object(history__WEBPACK_IMPORTED_MODULE_10__["createBrowserHistory"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
    path: "/",
    exact: true,
    component: _Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
    path: "/collection/:collection/book/:book/lesson/:lesson",
    component: _Lesson__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
    path: "/collection/:collection/book/:book",
    component: _Book__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
    path: "/collection/:collection",
    component: _Collection__WEBPACK_IMPORTED_MODULE_11__["default"]
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

if (document.getElementById('app')) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));
}

/***/ }),

/***/ "./resources/js/components/Book.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Book.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    cover: {
      paddingTop: '20px !important',
      '& .image': {
        width: '365px',
        height: '525px',
        background: "url('/images/book1.jpg') no-repeat center"
      }
    }
  };
};

var Book = /*#__PURE__*/function (_React$Component) {
  _inherits(Book, _React$Component);

  var _super = _createSuper(Book);

  function Book(props) {
    var _this;

    _classCallCheck(this, Book);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Book, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          history = _this$props.history,
          match = _this$props.match;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        spacing: 3,
        justify: 'center',
        alignItems: 'stretch'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: true,
        className: classes.cover
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
        elevation: 4,
        className: 'image'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: true,
        className: classes.lessonList
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
        "aria-label": "secondary mailbox folders"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson1"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "01: Meet Maanee"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson2"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "02: Maanee goes to the ricefield"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson3"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "03: little creature in the ricefield"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson4"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "04: Meet Maanee\u2019s best friend and her cat"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson5"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "05: Meet Dto"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson6"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "06: Maanee looks after her dog \u201CDto\u201D"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson7"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "07: Guess what\u2019s in Chuujai\u2019s hands?"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson8"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "08: Pretty little hair ribbon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson9"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "09: The cat and the frog"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson10"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "10: Petting little pet\u2019s friend"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson11"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "11: Meet \u201Cbpi-dti\u201D and his horse"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson12"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "12: Scolding the pets"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        button: true,
        onClick: function onClick() {
          return history.push("".concat(match.url, "/lesson/lesson13"));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        primary: "13: Wild animals"
      }))))));
    }
  }]);

  return Book;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Book.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Book)));

/***/ }),

/***/ "./resources/js/components/Card.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Card.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./resources/js/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var styles = function styles(theme) {
  return {
    card: {
      width: "230px",
      height: "330px",
      'background-repeat': 'no-repeat',
      'background-position': "center" // "background-size": "cover !important"

    },
    cardHover: {
      position: "absolute",
      width: "230px",
      height: "330px",
      opacity: 0,
      '&:hover': {
        opacity: 1,
        "background": "rgba(0, 0, 0, 0.2)"
      }
    },
    grid: {
      height: "100%"
    }
  };
};

var Card = /*#__PURE__*/function (_React$Component) {
  _inherits(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card(props) {
    var _this;

    _classCallCheck(this, Card);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          title = _this$props.title,
          image = _this$props.image,
          onClick = _this$props.onClick;
      var imageCss = 'url("' + _config__WEBPACK_IMPORTED_MODULE_7__["default"].host + image + '")';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.card,
        elevation: 4,
        style: {
          backgroundImage: imageCss
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: title,
        open: true,
        PopperProps: {
          popperOptions: {
            modifiers: {
              offset: {
                enabled: true,
                offset: "0%, -102%"
              }
            }
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.cardHover
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.grid,
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center"
      }))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Card.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Card));

/***/ }),

/***/ "./resources/js/components/Collection.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Collection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _GridViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridViewer */ "./resources/js/components/GridViewer.js");




function Collection() {
  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])();
  var params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  var collection = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.collections.find(function (c) {
      return c.slug == params.collection;
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, collection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GridViewer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: collection.books,
    baseUrl: match.url,
    urlResource: 'book'
  }));
}

/***/ }),

/***/ "./resources/js/components/Definition.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Definition.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Definition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_sticky_el__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-sticky-el */ "./node_modules/react-sticky-el/lib/index.js");
/* harmony import */ var react_sticky_el__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sticky_el__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    container: {
      width: '300px',
      top: '20px',
      right: '-85px',
      position: 'absolute',
      '& .MuiGrid-root': {
        padding: '10px 10px 10px 15px'
      }
    },
    paper: {
      position: 'absolute',
      zIndex: '-1',
      width: '100%',
      height: '100%'
    }
  });
});
function Definition(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sticky_el__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClickAway: props.onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    direction: 'column'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Definition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.word.word)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, props.word.transcription, " - ", props.word.transliteration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, props.word.translation)))));
}

/***/ }),

/***/ "./resources/js/components/Drawer.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Drawer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _createStyles;

  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])((_createStyles = {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    },
    container: {
      height: '100%',
      position: 'absolute',
      right: '-10px'
    },
    paper: {
      width: '100%',
      height: '100%'
    }
  }, _defineProperty(_createStyles, theme.breakpoints.down('s'), {
    container: {
      width: '330px'
    }
  }), _defineProperty(_createStyles, theme.breakpoints.up('s'), {
    container: {
      width: '400px'
    }
  }), _createStyles));
});
function Drawer(props) {
  var classes = useStyles();
  var rows = [{
    word: 'กล่าวถึง1',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง2',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง3',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง4',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง5',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง6',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง7',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง8',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง9',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง10',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง11',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง12',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง13',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง14',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง15',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง16',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง17',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }, {
    word: 'กล่าวถึง18',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.backdrop,
    open: props.open,
    onClick: props.handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"],
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.table,
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Word"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    align: "right"
  }, "Pronounce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    align: "right"
  }, "Translation"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__["default"], null, rows.map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: row.word
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      scope: "row"
    }, row.word), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      align: "right"
    }, row.transcription, " - ", row.transliteration), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      align: "right"
    }, row.translation));
  }))))));
}

/***/ }),

/***/ "./resources/js/components/GridViewer.js":
/*!***********************************************!*\
  !*** ./resources/js/components/GridViewer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./resources/js/components/Card.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




function GridViewer(props) {
  var baseUrl = props.baseUrl,
      urlResource = props.urlResource,
      items = props.items;
  var url = baseUrl;

  if (url === '/') {
    url = '';
  }

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    container: true,
    spacing: 3,
    justify: 'center'
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: true,
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: item.title,
      image: item.img,
      onClick: function onClick() {
        return history.push("".concat(url, "/").concat(urlResource, "/").concat(item.slug));
      }
    }));
  }));
}

/***/ }),

/***/ "./resources/js/components/Home.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card */ "./resources/js/components/Card.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/collections */ "./resources/js/actions/collections.js");
/* harmony import */ var _GridViewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GridViewer */ "./resources/js/components/GridViewer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var styles = function styles(theme) {
  return {};
};

var Home = /*#__PURE__*/function (_React$Component) {
  _inherits(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, props);

    _this.props.getAllCollections();

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          match = _this$props.match,
          collections = _this$props.collections;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, collections && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GridViewer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        items: collections,
        baseUrl: match.url,
        urlResource: 'collection'
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Home.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getAllCollections: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  collections: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};

var mapState = function mapState(state) {
  return {
    collections: state.collections
  };
};

var mapDispatch = {
  getAllCollections: _actions_collections__WEBPACK_IMPORTED_MODULE_7__["getAllCollections"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Home))));

/***/ }),

/***/ "./resources/js/components/Lesson.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Lesson.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Word */ "./resources/js/components/Word.js");
/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Space */ "./resources/js/components/Space.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/withWidth */ "./node_modules/@material-ui/core/esm/withWidth/index.js");
/* harmony import */ var _TranslationRoot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TranslationRoot */ "./resources/js/components/TranslationRoot.js");
/* harmony import */ var _Translation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Translation */ "./resources/js/components/Translation.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Drawer */ "./resources/js/components/Drawer.js");
/* harmony import */ var _Definition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Definition */ "./resources/js/components/Definition.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {},
    lessonText: {
      fontSize: '2em',
      lineHeight: '1.6em'
    },
    image: {
      width: '100%',
      height: '300px',
      background: 'aquamarine',
      margin: '20px 0 20px 0'
    },
    menu: {
      width: '0px',
      position: 'fixed',
      bottom: '10px',
      right: '75px',
      zIndex: 999999999
    },
    showTranslation: {
      marginTop: '-30px',
      lineHeight: '3em'
    },
    translation: {
      position: 'relative'
    },
    displayBlock: {
      display: 'block'
    },
    inlineTranslation: {
      display: 'none'
    }
  };
});

function Lesson(props) {
  var mdDown = !Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__["isWidthUp"])('md', props.width);
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showTranslation = _useState2[0],
      setShowTranslation = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showNewVocab = _useState4[0],
      setShowNewVocab = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      showDefinition = _useState6[0],
      setShowDefinition = _useState6[1];

  var translationRoot = {
    'trans_id': react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null),
    'trans_id2': react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null)
  };
  var word = {
    word: 'กล่าวถึง1',
    transcription: ' [กล่าว-ถึง]',
    transliteration: '<glaao;tʉngx>',
    translation: '[V] to mention, tell about, relate'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Drawer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: showNewVocab,
    handleClose: function handleClose() {
      return setShowNewVocab(false);
    }
  }), showDefinition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Definition__WEBPACK_IMPORTED_MODULE_11__["default"], {
    word: showDefinition,
    onClose: function onClose() {
      return setShowDefinition(null);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 1,
    direction: 'column',
    className: classes.menu,
    alignItems: 'flex-end'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "like",
    onClick: function onClick() {
      return setShowNewVocab(!showNewVocab);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["LocalLibrary"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "like",
    onClick: function onClick() {
      return setShowTranslation(!showTranslation);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Translate"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 3,
    justify: 'center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    md: 6,
    sm: 9,
    xs: 10,
    className: classes.lessonText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Space__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 35
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E23\u0E34\u0E48\u0E21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E15\u0E01\u0E25\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E21\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2D\u0E35\u0E01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E21\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E19\u0E35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2B\u0E19\u0E49\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E2A\u0E35\u0E22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E1E\u0E23\u0E32\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1A\u0E49\u0E32\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E21\u0E48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E14\u0E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E36\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1B\u0E25\u0E2D\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E27\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TranslationRoot__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: translationRoot['trans_id']
  }, showTranslation && mdDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Translation__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "The rain started raingin this day and blablabla and they went home because they dont like this shit."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Space__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u201C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E15\u0E2D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1A\u0E49\u0E32\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E16\u0E49\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E31\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E21\u0E48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2B\u0E22\u0E38\u0E14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E43\u0E2B\u0E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2D\u0E32\u0E01\u0E32\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Space__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 35
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E23\u0E48\u0E21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E1B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2A\u0E48\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E24\u0E14\u0E39\u0E1D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E47\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49\u0E41\u0E2B\u0E25\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1D\u0E19\u0E15\u0E01\u0E25\u0E07\u0E21\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E23\u0E34\u0E48\u0E21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E15\u0E01\u0E25\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E21\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2D\u0E35\u0E01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E21\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E19\u0E35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2B\u0E19\u0E49\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E2A\u0E35\u0E22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TranslationRoot__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: translationRoot['trans_id2']
  }, showTranslation && mdDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Translation__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "The rain started raingin this day and blablabla and they went home because they dont like this shit."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E1E\u0E23\u0E32\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1A\u0E49\u0E32\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E21\u0E48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E14\u0E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E36\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1B\u0E25\u0E2D\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E27\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Space__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u201C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E15\u0E2D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1A\u0E49\u0E32\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E16\u0E49\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E31\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E21\u0E48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2B\u0E22\u0E38\u0E14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E43\u0E2B\u0E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2D\u0E32\u0E01\u0E32\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E23\u0E34\u0E48\u0E21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E15\u0E01\u0E25\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E21\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2D\u0E35\u0E01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E21\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E19\u0E35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2B\u0E19\u0E49\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E2A\u0E35\u0E22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E40\u0E1E\u0E23\u0E32\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1A\u0E49\u0E32\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E21\u0E48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E14\u0E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E36\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1B\u0E25\u0E2D\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E27\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Space__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u201C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E15\u0E2D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E01\u0E25\u0E31\u0E1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1A\u0E49\u0E32\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E16\u0E49\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E1D\u0E19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E31\u0E07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E44\u0E21\u0E48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E2B\u0E22\u0E38\u0E14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E22\u0E48\u0E32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E08\u0E30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setShowDefinition(word);
    }
  }, "\u0E43\u0E2B\u0E49")), showTranslation && !mdDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    md: 3,
    sm: 9,
    xs: 10,
    className: classes.translation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Translation__WEBPACK_IMPORTED_MODULE_9__["default"], {
    root: translationRoot['trans_id'],
    text: "The rain started raingin this day and blablabla and they went home because they dont like this shit."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Translation__WEBPACK_IMPORTED_MODULE_9__["default"], {
    root: translationRoot['trans_id2'],
    text: "The rain started raingin this day and blablabla and they went home because they dont like this shit."
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__["default"])()(Lesson));

/***/ }),

/***/ "./resources/js/components/Space.js":
/*!******************************************!*\
  !*** ./resources/js/components/Space.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var styles = function styles(theme) {
  return {
    root: {
      width: '10px',
      display: 'inline-block'
    }
  };
};

var Space = /*#__PURE__*/function (_React$Component) {
  _inherits(Space, _React$Component);

  var _super = _createSuper(Space);

  function Space() {
    _classCallCheck(this, Space);

    return _super.apply(this, arguments);
  }

  _createClass(Space, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          width = _this$props.width;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classes.root,
        style: {
          width: width + 'px'
        }
      }));
    }
  }]);

  return Space;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Space.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Space));

/***/ }),

/***/ "./resources/js/components/Translation.js":
/*!************************************************!*\
  !*** ./resources/js/components/Translation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {}
  };
});

var Translation = function Translation(props) {
  var offsetTop = 0;

  if (props.root && props.root.current) {
    offsetTop = props.root.current.offsetTop;
  }

  var style = {
    fontSize: 'initial',
    marginTop: offsetTop + 'px'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Translation);

/***/ }),

/***/ "./resources/js/components/TranslationRoot.js":
/*!****************************************************!*\
  !*** ./resources/js/components/TranslationRoot.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      position: 'relative',
      display: 'none'
    }
  };
});
var TranslationRoot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    ref: ref
  }, props.children);
});
/* harmony default export */ __webpack_exports__["default"] = (TranslationRoot);

/***/ }),

/***/ "./resources/js/components/Word.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Word.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var styles = function styles(theme) {
  return {
    root: {
      '&:hover': {
        backgroundColor: 'yellow',
        cursor: 'pointer'
      },
      '&::selection': {
        background: 'cyan'
      }
    }
  };
};

var Word = /*#__PURE__*/function (_React$Component) {
  _inherits(Word, _React$Component);

  var _super = _createSuper(Word);

  function Word() {
    _classCallCheck(this, Word);

    return _super.apply(this, arguments);
  }

  _createClass(Word, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classes.root,
        onClick: this.props.onClick
      }, this.props.children));
    }
  }]);

  return Word;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Word.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Word));

/***/ }),

/***/ "./resources/js/config.js":
/*!********************************!*\
  !*** ./resources/js/config.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "host": "http://localhost:81/"
});

/***/ }),

/***/ "./resources/js/logger.js":
/*!********************************!*\
  !*** ./resources/js/logger.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_logger_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-logger/src */ "./node_modules/redux-logger/src/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_logger_src__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
  collapsed: true
}));

/***/ }),

/***/ "./resources/js/reducers/collections.js":
/*!**********************************************!*\
  !*** ./resources/js/reducers/collections.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var collections = function collections() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_ALL_COLLECTIONS_DONE':
      var _collections = action.collections;
      return _collections;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (collections);

/***/ }),

/***/ "./resources/js/reducers/index.js":
/*!****************************************!*\
  !*** ./resources/js/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections */ "./resources/js/reducers/collections.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  collections: _collections__WEBPACK_IMPORTED_MODULE_0__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./resources/js/sagas/collections.js":
/*!*******************************************!*\
  !*** ./resources/js/sagas/collections.js ***!
  \*******************************************/
/*! exports provided: fetchCollections, watchFetchCollections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCollections", function() { return fetchCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchFetchCollections", function() { return watchFetchCollections; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchCollections),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFetchCollections);




function fetchCollections(api) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchCollections$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get, api.url + 'collections');

        case 3:
          data = _context.sent;
          _context.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "GET_ALL_COLLECTIONS_DONE",
            collections: data.data
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "GET_ALL_COLLECTIONS_FAIL",
            message: _context.t0
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}
function watchFetchCollections(api) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFetchCollections$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])('GET_ALL_COLLECTIONS_START', fetchCollections, api);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./resources/js/reducers/index.js");
/* harmony import */ var _sagas_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas/collections */ "./resources/js/sagas/collections.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "./resources/js/logger.js");





var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(_logger__WEBPACK_IMPORTED_MODULE_4__["default"], sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
  return f;
}));
sagaMiddleware.run(_sagas_collections__WEBPACK_IMPORTED_MODULE_3__["watchFetchCollections"], {
  url: 'http://localhost:81/api/'
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/apo/code/learn/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/apo/code/learn/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);