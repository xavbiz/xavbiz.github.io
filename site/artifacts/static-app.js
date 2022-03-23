(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ atoms_Button; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ atoms_Input; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ atoms_Icon; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ atoms_Grid; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ atoms_Card; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ atoms_Title; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ atoms_Paragraph; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ atoms_Section; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ atoms_Hero; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ atoms_Textarea; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Link; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ atoms_Quote; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ atoms_Checkbox; });

// UNUSED EXPORTS: PageContainer, Select, Picture, List, SubTitle, Dropdown, Slider, Animate

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/PageContainer/styles.scss
var styles = __webpack_require__(55);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/PageContainer/index.js



var PageContainer_PageContainer = function PageContainer(_ref) {
  var children = _ref.children,
      col = _ref.col;
  return /*#__PURE__*/external_react_default.a.createElement(atoms_Grid, {
    className: styles["container"],
    col: col
  }, children);
};
/* harmony default export */ var atoms_PageContainer = (PageContainer_PageContainer);
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(12);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(1);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Button/styles.scss
var Button_styles = __webpack_require__(28);
var Button_styles_default = /*#__PURE__*/__webpack_require__.n(Button_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Button/index.jsx





var Button_Button = function Button(_ref) {
  var children = _ref.children,
      to = _ref.to,
      className = _ref.className,
      onClick = _ref.onClick,
      inverse = _ref.inverse;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, to ? /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: to,
    className: external_classnames_default()(Button_styles_default.a.button, className, defineProperty_default()({}, Button_styles_default.a.inverse, inverse)),
    onClick: onClick
  }, children) : /*#__PURE__*/external_react_default.a.createElement("button", {
    className: external_classnames_default()(Button_styles_default.a.button, className, defineProperty_default()({}, Button_styles_default.a.inverse, inverse)),
    onClick: onClick
  }, children));
};
/* harmony default export */ var atoms_Button = (Button_Button);
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(16);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(13);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6);

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Input/styles.scss
var Input_styles = __webpack_require__(9);
var Input_styles_default = /*#__PURE__*/__webpack_require__.n(Input_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Input/index.jsx




var _excluded = ["className", "name", "label", "type", "helperText", "required", "validator", "err"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var Input_Input = function Input(_ref) {
  var _cn;

  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      type = _ref.type,
      helperText = _ref.helperText,
      required = _ref.required,
      validator = _ref.validator,
      err = _ref.err,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(undefined),
      _useState4 = slicedToArray_default()(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      focus = _useState6[0],
      setFocus = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(err),
      _useState8 = slicedToArray_default()(_useState7, 2),
      invalid = _useState8[0],
      setInvalid = _useState8[1];

  var _useState9 = Object(external_react_["useState"])({
    "default": required ? '*Champs requis' : '',
    errors: err || []
  }),
      _useState10 = slicedToArray_default()(_useState9, 2),
      errors = _useState10[0],
      setErrors = _useState10[1];

  var input = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    setErrors({
      "default": required ? '*Champs requis' : '',
      errors: err || []
    });
  }, [err]);
  Object(external_react_["useEffect"])(function () {
    if (err && err.length > 0) {
      setInvalid(true);
    }
  }, [err]);
  var onChange = Object(external_react_["useCallback"])(function (e) {
    setValue(e.target.value);
  }, [value]);

  var onFocus = function onFocus() {
    if (focus && value === '') {
      setFocus(false);
    } else {
      setFocus(true);
      input.current && input.current.focus();
    }
  };

  var onBlur = Object(external_react_["useCallback"])(function (e) {
    var val = e.target.value;
    var err = validator && validator(val);

    if (err || required && val === '') {
      setValid(false);
      setInvalid(true);
      err && setErrors(function (r) {
        return _objectSpread(_objectSpread({}, r), {}, {
          errors: [err]
        });
      });
    } else {
      setInvalid(false);

      if (val !== '') {
        setValid(true);
      } else {
        setValid(false);
      }

      setErrors(function (r) {
        return _objectSpread(_objectSpread({}, r), {}, {
          errors: []
        });
      });
    }
  }, [value]);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Input_styles_default.a.container, className)
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Input_styles_default.a.subContainer, (_cn = {}, defineProperty_default()(_cn, Input_styles_default.a.focus, focus), defineProperty_default()(_cn, Input_styles_default.a.valid, valid), defineProperty_default()(_cn, Input_styles_default.a.invalid, invalid), defineProperty_default()(_cn, Input_styles_default.a.check, type === 'checkbox'), _cn))
  }, type === 'checkbox' ? /*#__PURE__*/external_react_default.a.createElement(atoms_Checkbox, extends_default()({
    name: name,
    value: value,
    onClick: onChange,
    onBlur: onBlur
  }, props)) : /*#__PURE__*/external_react_default.a.createElement("input", extends_default()({
    ref: input,
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    type: type
  }, props)), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: name,
    onClick: onFocus
  }, label), type !== 'checkbox' && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, valid && !invalid && /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faCheck"]
  }), invalid && !valid && /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faTimes"]
  }))), errors.errors.length > 0 ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Input_styles_default.a.helper, defineProperty_default()({}, Input_styles_default.a.red, invalid))
  }, errors.errors.join(', ')) : helperText ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Input_styles_default.a.helper
  }, helperText) : errors["default"] ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Input_styles_default.a.helper, defineProperty_default()({}, Input_styles_default.a.red, invalid))
  }, errors["default"]) : null);
};
/* harmony default export */ var atoms_Input = (Input_Input);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(27);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Icon/index.jsx


var Icon_excluded = ["icon", "className", "onClick"];


var Icon_Icon = function Icon(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      onClick = _ref.onClick,
      props = objectWithoutProperties_default()(_ref, Icon_excluded);

  return /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], extends_default()({
    icon: icon,
    className: className,
    onClick: onClick
  }, props));
};
/* harmony default export */ var atoms_Icon = (Icon_Icon);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Select/styles.scss
var Select_styles = __webpack_require__(8);
var Select_styles_default = /*#__PURE__*/__webpack_require__.n(Select_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Select/index.jsx



var Select_excluded = ["className", "name", "label", "options", "helperText", "required", "validator", "err", "onInput"];

function Select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Select_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Select_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/* TODO: Mega refactor to plan */

var Select_Select = function Select(_ref) {
  var _cn, _cn2;

  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      options = _ref.options,
      helperText = _ref.helperText,
      required = _ref.required,
      validator = _ref.validator,
      err = _ref.err,
      onInput = _ref.onInput,
      props = objectWithoutProperties_default()(_ref, Select_excluded);

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(undefined),
      _useState4 = slicedToArray_default()(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(err),
      _useState6 = slicedToArray_default()(_useState5, 2),
      invalid = _useState6[0],
      setInvalid = _useState6[1];

  var _useState7 = Object(external_react_["useState"])({
    "default": required ? '*Champs requis' : '',
    errors: err || []
  }),
      _useState8 = slicedToArray_default()(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      showOptions = _useState10[0],
      setShowOptions = _useState10[1];

  var _useState11 = Object(external_react_["useState"])(''),
      _useState12 = slicedToArray_default()(_useState11, 2),
      touched = _useState12[0],
      setTouched = _useState12[1];

  var _useState13 = Object(external_react_["useState"])(false),
      _useState14 = slicedToArray_default()(_useState13, 2),
      active = _useState14[0],
      setActive = _useState14[1];

  var selectInput = Object(external_react_["useRef"])(null);
  var container = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    setErrors({
      "default": required ? '*Champs requis' : '',
      errors: err || []
    });
  }, [err]);
  Object(external_react_["useEffect"])(function () {
    setInvalid(err);
  }, [err]);
  var toggle = Object(external_react_["useCallback"])(function (e) {
    e.preventDefault();
    setTouched('touched');
    setShowOptions(true);
    setActive(true);
  }, []);
  var onChange = Object(external_react_["useCallback"])(function (e) {
    setShowOptions(false);

    if (!active) {
      return;
    }

    setActive(false);

    if (container.current.getAttribute('data-status') !== 'touched') {
      return;
    }

    var val = e.target.getAttribute('data-value');
    var oldVal = selectInput.current.getAttribute('data-value');

    if (val && val !== '') {
      setValue(val);
    }

    var err = val && validator && validator(val);

    if (err || required && !val) {
      setValid(false);
      setInvalid(true);
      err && setErrors(function (r) {
        return Select_objectSpread(Select_objectSpread({}, r), {}, {
          errors: [err]
        });
      });
    } else {
      setInvalid(false);
      setValid(true);
      setErrors(function (r) {
        return Select_objectSpread(Select_objectSpread({}, r), {}, {
          errors: []
        });
      });
      onInput && onInput([name, val]);
    }
  }, [active]);
  Object(external_react_["useEffect"])(function () {
    document && document.body.addEventListener('click', onChange);
    return function () {
      document && document.body.removeEventListener('click', onChange);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: container,
    className: external_classnames_default()(Select_styles_default.a.container, className),
    "data-status": touched
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Select_styles_default.a.subContainer, (_cn = {}, defineProperty_default()(_cn, Select_styles_default.a.valid, valid), defineProperty_default()(_cn, Select_styles_default.a.invalid, invalid), _cn))
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: selectInput,
    className: Select_styles_default.a.select,
    onClick: toggle,
    "data-value": value
  }, value), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Select_styles_default.a.options, (_cn2 = {}, defineProperty_default()(_cn2, Select_styles_default.a.show, showOptions), defineProperty_default()(_cn2, Select_styles_default.a["show".concat(options.length)], showOptions), _cn2))
  }, options.map(function (o, i) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      key: i,
      className: Select_styles_default.a.option,
      "data-value": o,
      onClick: onChange
    }, o);
  })), /*#__PURE__*/external_react_default.a.createElement("input", {
    name: name,
    value: value,
    type: "hidden"
  }), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faCaretDown"]
  })), errors.errors.length > 0 ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Select_styles_default.a.helper, defineProperty_default()({}, Select_styles_default.a.red, invalid))
  }, errors.errors.join(', ')) : helperText ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Select_styles_default.a.helper
  }, helperText) : errors["default"] ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Select_styles_default.a.helper, defineProperty_default()({}, Select_styles_default.a.red, invalid))
  }, errors["default"]) : null);
};
/* harmony default export */ var atoms_Select = (Select_Select);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Picture/styles.scss
var Picture_styles = __webpack_require__(38);
var Picture_styles_default = /*#__PURE__*/__webpack_require__.n(Picture_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Picture/index.jsx




var Picture_Picture = function Picture(_ref) {
  var className = _ref.className,
      image = _ref.image,
      mobileImage = _ref.mobileImage,
      alt = _ref.alt,
      display = _ref.display;
  return /*#__PURE__*/external_react_default.a.createElement("picture", {
    className: external_classnames_default()(Picture_styles_default.a.picture, className, defineProperty_default()({}, Picture_styles_default.a.cover, display === 'cover'))
  }, mobileImage && /*#__PURE__*/external_react_default.a.createElement("source", {
    srcSet: mobileImage,
    media: "(max-width: 930px)"
  }), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: image,
    alt: alt
  }));
};
/* harmony default export */ var atoms_Picture = (Picture_Picture);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/List/styles.scss
var List_styles = __webpack_require__(56);
var List_styles_default = /*#__PURE__*/__webpack_require__.n(List_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/List/index.jsx



var List_List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: external_classnames_default()(List_styles_default.a.list, className)
  }, children);
};

List_List.Item = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("span", null, children));
};

/* harmony default export */ var atoms_List = (List_List);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Grid/styles.scss
var Grid_styles = __webpack_require__(23);
var Grid_styles_default = /*#__PURE__*/__webpack_require__.n(Grid_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Grid/index.jsx




var Grid_Grid = function Grid(_ref) {
  var className = _ref.className,
      children = _ref.children,
      col = _ref.col;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Grid_styles_default.a.grid
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(className, Grid_styles_default.a.content, defineProperty_default()({}, Grid_styles_default.a["grid".concat(col)], true))
  }, children));
};

Grid_Grid.Item = function (_ref2) {
  var children = _ref2.children,
      col = _ref2.col,
      className = _ref2.className;
  var cols = col.split('');
  var colStart = cols.findIndex(function (f) {
    return f === '1';
  }) + 1;
  var colSpan = cols.filter(function (f) {
    return f === '1';
  }).length;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Grid_styles_default.a.item, className, defineProperty_default()({}, Grid_styles_default.a["item".concat(colStart).concat(colSpan)], true))
  }, children);
};

/* harmony default export */ var atoms_Grid = (Grid_Grid);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Card/styles.scss
var Card_styles = __webpack_require__(57);
var Card_styles_default = /*#__PURE__*/__webpack_require__.n(Card_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Card/index.jsx



var Card_Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Card_styles_default.a.card, className)
  }, children);
};
/* harmony default export */ var atoms_Card = (Card_Card);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Title/styles.scss
var Title_styles = __webpack_require__(33);
var Title_styles_default = /*#__PURE__*/__webpack_require__.n(Title_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Title/index.jsx




var Title_Title = function Title(_ref) {
  var _cn;

  var className = _ref.className,
      noMargin = _ref.noMargin,
      centered = _ref.centered,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: external_classnames_default()(Title_styles_default.a.title, className, (_cn = {}, defineProperty_default()(_cn, Title_styles_default.a.noMargin, noMargin), defineProperty_default()(_cn, Title_styles_default.a.centered, centered), _cn))
  }, children);
};
/* harmony default export */ var atoms_Title = (Title_Title);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/SubTitle/styles.scss
var SubTitle_styles = __webpack_require__(34);
var SubTitle_styles_default = /*#__PURE__*/__webpack_require__.n(SubTitle_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/SubTitle/index.jsx




var SubTitle_SubTitle = function SubTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      small = _ref.small;
  return /*#__PURE__*/external_react_default.a.createElement("h3", {
    className: external_classnames_default()(SubTitle_styles_default.a.title, className, defineProperty_default()({}, SubTitle_styles_default.a.small, small))
  }, children);
};

SubTitle_SubTitle.Sub = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: external_classnames_default()(SubTitle_styles_default.a.sub, className)
  }, children);
};

/* harmony default export */ var atoms_SubTitle = (SubTitle_SubTitle);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Paragraph/styles.scss
var Paragraph_styles = __webpack_require__(29);
var Paragraph_styles_default = /*#__PURE__*/__webpack_require__.n(Paragraph_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Paragraph/index.jsx




var Paragraph_Paragraph = function Paragraph(_ref) {
  var _cn;

  var className = _ref.className,
      children = _ref.children,
      strong = _ref.strong,
      emphasis = _ref.emphasis,
      noTopMargin = _ref.noTopMargin;
  return /*#__PURE__*/external_react_default.a.createElement("p", {
    className: external_classnames_default()(Paragraph_styles_default.a.p, className, (_cn = {}, defineProperty_default()(_cn, Paragraph_styles_default.a.strong, strong), defineProperty_default()(_cn, Paragraph_styles_default.a.emphasis, emphasis), defineProperty_default()(_cn, Paragraph_styles_default.a.noTopMargin, noTopMargin), _cn))
  }, children);
};
/* harmony default export */ var atoms_Paragraph = (Paragraph_Paragraph);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Dropdown/styles.scss
var Dropdown_styles = __webpack_require__(30);
var Dropdown_styles_default = /*#__PURE__*/__webpack_require__.n(Dropdown_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Dropdown/index.jsx



function Dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Dropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Dropdown_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Dropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var Context = /*#__PURE__*/external_react_default.a.createContext();
var Dropdown_Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var _useState = Object(external_react_["useState"])({
    on: true,
    toggle: toggle
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      context = _useState2[0],
      setContext = _useState2[1];

  var toggle = function toggle() {
    return setContext(function (e) {
      return Dropdown_objectSpread(Dropdown_objectSpread({}, e), {}, {
        on: !e.on
      });
    });
  };

  Object(external_react_["useEffect"])(function () {
    setContext(function (e) {
      return Dropdown_objectSpread(Dropdown_objectSpread({}, e), {}, {
        toggle: toggle
      });
    });
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(Context.Provider, {
    value: context
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Dropdown_styles_default.a.wrapper, className)
  }, children));
};

Dropdown_Dropdown.Trigger = function (_ref2) {
  var children = _ref2.children;
  var context = Object(external_react_["useContext"])(Context);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Dropdown_styles_default.a.trigger,
    onClick: context.toggle
  }, children);
};

Dropdown_Dropdown.Content = function (_ref3) {
  var children = _ref3.children;
  var context = Object(external_react_["useContext"])(Context);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Dropdown_styles_default.a.content, defineProperty_default()({}, Dropdown_styles_default.a.on, context.on))
  }, children);
};

Dropdown_Dropdown.Closed = function (_ref4) {
  var children = _ref4.children;
  var context = Object(external_react_["useContext"])(Context);
  return !context.on ? children : null;
};

Dropdown_Dropdown.Opened = function (_ref5) {
  var children = _ref5.children;
  var context = Object(external_react_["useContext"])(Context);
  return context.on ? children : null;
};

/* harmony default export */ var atoms_Dropdown = (Dropdown_Dropdown);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Section/styles.scss
var Section_styles = __webpack_require__(31);
var Section_styles_default = /*#__PURE__*/__webpack_require__.n(Section_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Section/index.jsx




var Section_Section = function Section(_ref) {
  var _cn;

  var children = _ref.children,
      margin = _ref.margin,
      className = _ref.className,
      noTopMargin = _ref.noTopMargin,
      home = _ref.home;
  return /*#__PURE__*/external_react_default.a.createElement("section", {
    className: external_classnames_default()(Section_styles_default.a.section, className)
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Section_styles_default.a.content, (_cn = {}, defineProperty_default()(_cn, Section_styles_default.a.margin, margin), defineProperty_default()(_cn, Section_styles_default.a.noTopMargin, noTopMargin), _cn))
  }, children));
};
/* harmony default export */ var atoms_Section = (Section_Section);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Hero/styles.scss
var Hero_styles = __webpack_require__(24);
var Hero_styles_default = /*#__PURE__*/__webpack_require__.n(Hero_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Hero/index.jsx





var Hero_Hero = function Hero(_ref) {
  var grey = _ref.grey,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Hero_styles_default.a.hero, defineProperty_default()({}, Hero_styles_default.a.grey, grey))
  }, children);
};

Hero_Hero.Title = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/external_react_default.a.createElement(atoms_Title, {
    className: Hero_styles_default.a.title
  }, children);
};

Hero_Hero.Content = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      horizontal = _ref3.horizontal;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Hero_styles_default.a.content, className, defineProperty_default()({}, Hero_styles_default.a.horizontal, horizontal))
  }, children);
};

/* harmony default export */ var atoms_Hero = (Hero_Hero);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Slider/styles.scss
var Slider_styles = __webpack_require__(10);
var Slider_styles_default = /*#__PURE__*/__webpack_require__.n(Slider_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Slider/index.jsx








var Slider_useSliderControl = function useSliderControl(slideNumber) {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      activeSlide = _useState2[0],
      setActiveSlide = _useState2[1];

  var speed = 10000;

  var previous = function previous() {
    return setActiveSlide(activeSlide <= 0 ? slideNumber - 1 : activeSlide - 1);
  };

  var next = function next() {
    return setActiveSlide((activeSlide + 1) % slideNumber);
  };

  var goTo = function goTo(i) {
    return function () {
      return setActiveSlide(i);
    };
  };

  Object(external_react_["useEffect"])(function () {
    var interval = setInterval(function () {
      setActiveSlide(function (active) {
        return (active + 1) % slideNumber;
      });
    }, speed);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  var controls = {
    previous: previous,
    next: next,
    goTo: goTo
  };
  return [controls, activeSlide];
};

var Slider_Slider = function Slider(_ref) {
  var children = _ref.children;

  var _useSliderControl = Slider_useSliderControl(children.length - 1),
      _useSliderControl2 = slicedToArray_default()(_useSliderControl, 2),
      controls = _useSliderControl2[0],
      activeSlide = _useSliderControl2[1];

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.slider
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.upper
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.prev,
    onClick: controls.previous
  }, /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faChevronLeft"]
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Slider_styles_default.a.wrapper, Slider_styles_default.a["slide".concat(activeSlide + 1)])
  }, children), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.next,
    onClick: controls.next
  }, /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faChevronRight"]
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Slider_styles_default.a.lower
  }, new Array(children.length - 1).fill(1).map(function (_, i) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      key: "slider-".concat(i),
      onClick: controls.goTo(i),
      className: external_classnames_default()(Slider_styles_default.a.quickAccess, defineProperty_default()({}, Slider_styles_default.a.quickAccessActive, i === activeSlide))
    });
  })));
};

Slider_Slider.Item = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Slider_styles_default.a.item, className)
  }, children);
};

/* harmony default export */ var atoms_Slider = (Slider_Slider);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Textarea/styles.scss
var Textarea_styles = __webpack_require__(11);
var Textarea_styles_default = /*#__PURE__*/__webpack_require__.n(Textarea_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Textarea/index.jsx




var Textarea_excluded = ["className", "name", "label", "type", "helperText", "required", "validator", "err"];

function Textarea_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Textarea_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Textarea_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Textarea_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var Textarea_Textarea = function Textarea(_ref) {
  var _cn;

  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      type = _ref.type,
      helperText = _ref.helperText,
      required = _ref.required,
      validator = _ref.validator,
      err = _ref.err,
      props = objectWithoutProperties_default()(_ref, Textarea_excluded);

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(undefined),
      _useState4 = slicedToArray_default()(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(err),
      _useState6 = slicedToArray_default()(_useState5, 2),
      invalid = _useState6[0],
      setInvalid = _useState6[1];

  var _useState7 = Object(external_react_["useState"])({
    "default": required ? '*Champs requis' : '',
    errors: err || []
  }),
      _useState8 = slicedToArray_default()(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  Object(external_react_["useEffect"])(function () {
    setErrors({
      "default": required ? '*Champs requis' : '',
      errors: err || []
    });
  }, [err]);
  Object(external_react_["useEffect"])(function () {
    if (err && err.length > 0) {
      setInvalid(true);
    }
  }, [err]);
  var onChange = Object(external_react_["useCallback"])(function (e) {
    setValue(e.target.value);
  }, [value]);
  var onBlur = Object(external_react_["useCallback"])(function (e) {
    var val = e.target.value;
    var err = validator && validator(val);

    if (err || required && val === '') {
      setValid(false);
      setInvalid(true);
      err && setErrors(function (r) {
        return Textarea_objectSpread(Textarea_objectSpread({}, r), {}, {
          errors: [err]
        });
      });
    } else {
      setInvalid(false);
      setValid(true);
      setErrors(function (r) {
        return Textarea_objectSpread(Textarea_objectSpread({}, r), {}, {
          errors: []
        });
      });
    }
  }, [value]);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Textarea_styles_default.a.container, className)
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Textarea_styles_default.a.subContainer, (_cn = {}, defineProperty_default()(_cn, Textarea_styles_default.a.valid, valid), defineProperty_default()(_cn, Textarea_styles_default.a.invalid, invalid), _cn))
  }, /*#__PURE__*/external_react_default.a.createElement("textarea", extends_default()({
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    type: type
  }, props)), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: name
  }, label), valid && !invalid && /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faCheck"]
  }), invalid && !valid && /*#__PURE__*/external_react_default.a.createElement(atoms_Icon, {
    icon: free_solid_svg_icons_["faTimes"]
  })), errors.errors.length > 0 ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Textarea_styles_default.a.helper, defineProperty_default()({}, Textarea_styles_default.a.red, invalid))
  }, errors.errors.join(', ')) : helperText ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Textarea_styles_default.a.helper
  }, helperText) : errors["default"] ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: external_classnames_default()(Textarea_styles_default.a.helper, defineProperty_default()({}, Textarea_styles_default.a.red, invalid))
  }, errors["default"]) : null);
};
/* harmony default export */ var atoms_Textarea = (Textarea_Textarea);
// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/utils.js
var composeCb = function composeCb(events) {
  return function () {
    return events.flat(2).forEach(function (event) {
      return event && event();
    });
  };
};
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Link/styles.scss
var Link_styles = __webpack_require__(39);
var Link_styles_default = /*#__PURE__*/__webpack_require__.n(Link_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Link/index.jsx





var Link_CustomLink = function CustomLink(_ref) {
  var children = _ref.children,
      to = _ref.to,
      className = _ref.className,
      noStyle = _ref.noStyle,
      cb = _ref.cb,
      external = _ref.external,
      onClick = _ref.onClick;
  return external ? /*#__PURE__*/external_react_default.a.createElement("a", {
    href: to,
    className: external_classnames_default()(!noStyle && Link_styles_default.a.link, className),
    onClick: composeCb([cb, onClick]),
    target: "_blank"
  }, children) : /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: to,
    className: external_classnames_default()(!noStyle && Link_styles_default.a.link, className),
    onClick: composeCb([cb, onClick])
  }, children);
};
/* harmony default export */ var Link = (Link_CustomLink);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Animate/styles.scss
var Animate_styles = __webpack_require__(18);
var Animate_styles_default = /*#__PURE__*/__webpack_require__.n(Animate_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Animate/index.jsx


var Animate_options = {
  root: null,
  rootMargin: '0px',
  treshold: 1
};

var Animate_callback = function callback(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add(Animate_styles_default.a.isVisible);
    } else {
      entry.target.classList.remove(Animate_styles_default.a.isVisible);
    }
  });
};

var observer;
var Animate_Animate = function Animate(_ref) {
  var children = _ref.children;
  observer = window && observer === undefined ? new IntersectionObserver(Animate_callback, Animate_options) : undefined;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Animate_styles_default.a.parent
  }, children);
};

Animate_Animate.FromLeft = function (_ref2) {
  var children = _ref2.children;
  var node = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    observer.observe(node.current);
    return function () {
      observer.unobserve(node.current);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: node,
    className: Animate_styles_default.a.fromLeft
  }, children);
};

Animate_Animate.FromRight = function (_ref3) {
  var children = _ref3.children;
  var node = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    observer.observe(node.current);
    return function () {
      observer.unobserve(node.current);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: node,
    className: Animate_styles_default.a.fromRight
  }, children);
};

Animate_Animate.FromTop = function (_ref4) {
  var children = _ref4.children;
  var node = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    observer.observe(node.current);
    return function () {
      observer.unobserve(node.current);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: node,
    className: Animate_styles_default.a.fromTop
  }, children);
};

/* harmony default export */ var atoms_Animate = (Animate_Animate);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Quote/styles.scss
var Quote_styles = __webpack_require__(40);
var Quote_styles_default = /*#__PURE__*/__webpack_require__.n(Quote_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Quote/index.jsx



var Quote_Quote = function Quote(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: external_classnames_default()(Quote_styles_default.a.p, className)
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Quote_styles_default.a.quote
  }, "\u201C"), children);
};
/* harmony default export */ var atoms_Quote = (Quote_Quote);
// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(58);

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Checkbox/styles.scss
var Checkbox_styles = __webpack_require__(59);
var Checkbox_styles_default = /*#__PURE__*/__webpack_require__.n(Checkbox_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/Checkbox/index.jsx







var Checkbox_Checkbox = function Checkbox(_ref) {
  var onClick = _ref.onClick,
      name = _ref.name,
      value = _ref.value;

  var _useState = Object(external_react_["useState"])(value === '' ? 'off' : 'on'),
      _useState2 = slicedToArray_default()(_useState, 2),
      innerValue = _useState2[0],
      setInnerValue = _useState2[1];

  var toggle = function toggle() {
    setInnerValue(innerValue === 'off' ? 'on' : 'off');
  };

  return /*#__PURE__*/external_react_default.a.createElement("span", {
    className: Checkbox_styles_default.a.box,
    onClick: toggle
  }, /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "hidden",
    name: name,
    onClick: onClick,
    value: innerValue
  }), innerValue === 'on' ? /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCheckSquare"]
  }) : /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_regular_svg_icons_["faSquare"]
  }));
};
/* harmony default export */ var atoms_Checkbox = (Checkbox_Checkbox);
// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/index.js






















/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Imports
var urlEscape = __webpack_require__(49);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(80));

// Module
exports.push([module.i, "._2ll3UahSpwkAJMrnEfufNE{padding-top:80px;position:relative;min-height:95vh}._2ll3UahSpwkAJMrnEfufNE section{padding-bottom:20px}._2-YaKbrqIBJT81Vf3rx94R{width:100%;max-height:75vh;height:100%;background-image:url(" + ___CSS_LOADER_URL___0___ + ");background-size:cover;position:absolute;top:0;left:0}._1RXtskOtDGovGu5WT2kb4q{margin-bottom:80px}._2_JLvKAhSfwbtl2cBPBYZX{position:relative}._2Ggjc7gW1OKJkXjHqI08Pt{display:flex;justify-content:space-between;flex-wrap:wrap}.ZIRZPxniQ-A-fC_97jsFz{display:flex;justify-content:center;margin-top:40px}._3MQ2WdYprGI79WHlnUpclS,._18WUtNVHBgx9jImy-2BMQc,._2FB3uShW62-WdF1JFNO6qX{width:100%;height:100%;position:fixed;top:0;left:0;opacity:1;background-color:#fff;z-index:999;display:flex;justify-content:center;align-items:center}._18WUtNVHBgx9jImy-2BMQc,._2FB3uShW62-WdF1JFNO6qX{flex-direction:column;text-align:center}._18WUtNVHBgx9jImy-2BMQc{color:red}._3LpQ_5apkpWv6NJN8m4RGB path{fill:red}._2FB3uShW62-WdF1JFNO6qX{color:#35858b;font-weight:700}._8Bnk00aM6xI1Kt7ThOENx path{fill:#35858b}.EcoaGMNbrYwoxvblA0Vua{width:100%}._1VFO2H4dxhALay-ZayS3-D{margin:0 1.5rem}._3j91sJiuVN6a7Cz0ixzzp9{display:block}._3WDhdrbxna8TAJOrWJ9ylI{margin-top:2rem;border-top:1px solid #4fbdba}._1CZASeWOKbVBT1_YBeDNf0{padding-top:1rem;font-size:1.5rem;color:#35858b}@media(min-width: 760px){.ZIRZPxniQ-A-fC_97jsFz{display:flex;justify-content:flex-end}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,gBAAgB,CAAC,iBAAiB,CAAC,eAAe,CAAC,iCAAc,mBAAmB,CAAC,yBAAI,UAAU,CAAC,eAAe,CAAC,WAAW,CAAC,8CAAyC,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,yBAAc,kBAAkB,CAAC,yBAAM,iBAAiB,CAAC,yBAAa,YAAY,CAAC,6BAA6B,CAAC,cAAc,CAAC,uBAAa,YAAY,CAAC,sBAAsB,CAAC,eAAe,CAAC,2EAAqC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,SAAS,CAAC,qBAAqB,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,kDAAqB,qBAAqB,CAAC,iBAAiB,CAAC,yBAAW,SAAS,CAAC,8BAAoB,QAAQ,CAAC,yBAAU,aAAa,CAAC,eAAe,CAAC,6BAAmB,YAAY,CAAC,uBAAO,UAAU,CAAC,yBAAS,eAAe,CAAC,yBAAQ,aAAa,CAAC,yBAAS,eAAe,CAAC,4BAA4B,CAAC,yBAAY,gBAAgB,CAAC,gBAAgB,CAAC,aAAa,CAAC,yBAAyB,uBAAa,YAAY,CAAC,wBAAwB,CAAC","file":"styles.scss","sourcesContent":[".page{padding-top:80px;position:relative;min-height:95vh}.page section{padding-bottom:20px}.bg{width:100%;max-height:75vh;height:100%;background-image:url(\"~assets/field.jpg\");background-size:cover;position:absolute;top:0;left:0}.marginBottom{margin-bottom:80px}.form{position:relative}.formWrapper{display:flex;justify-content:space-between;flex-wrap:wrap}.formActions{display:flex;justify-content:center;margin-top:40px}.formSubmitting,.formError,.formSent{width:100%;height:100%;position:fixed;top:0;left:0;opacity:1;background-color:#fff;z-index:999;display:flex;justify-content:center;align-items:center}.formError,.formSent{flex-direction:column;text-align:center}.formError{color:red}.formErrorIcon path{fill:red}.formSent{color:#35858b;font-weight:700}.formSentIcon path{fill:#35858b}.input{width:100%}.telSpan{margin:0 1.5rem}.submit{display:block}.section{margin-top:2rem;border-top:1px solid #4fbdba}.subsection{padding-top:1rem;font-size:1.5rem;color:#35858b}@media(min-width: 760px){.formActions{display:flex;justify-content:flex-end}}"]}]);

// Exports
exports.locals = {
	"page": "_2ll3UahSpwkAJMrnEfufNE",
	"bg": "_2-YaKbrqIBJT81Vf3rx94R",
	"marginBottom": "_1RXtskOtDGovGu5WT2kb4q",
	"form": "_2_JLvKAhSfwbtl2cBPBYZX",
	"formWrapper": "_2Ggjc7gW1OKJkXjHqI08Pt",
	"formActions": "ZIRZPxniQ-A-fC_97jsFz",
	"formSubmitting": "_3MQ2WdYprGI79WHlnUpclS",
	"formError": "_18WUtNVHBgx9jImy-2BMQc",
	"formSent": "_2FB3uShW62-WdF1JFNO6qX",
	"formErrorIcon": "_3LpQ_5apkpWv6NJN8m4RGB",
	"formSentIcon": "_8Bnk00aM6xI1Kt7ThOENx",
	"input": "EcoaGMNbrYwoxvblA0Vua",
	"telSpan": "_1VFO2H4dxhALay-ZayS3-D",
	"submit": "_3j91sJiuVN6a7Cz0ixzzp9",
	"section": "_3WDhdrbxna8TAJOrWJ9ylI",
	"subsection": "_1CZASeWOKbVBT1_YBeDNf0"
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._3iS9MP9fOlOQ4_UpDrYPLm{display:inline-block;margin-top:2rem;width:100%}._2Iag2e7G5vGaw_67ojyS6J{position:relative;border-bottom:1px solid #e3e3e3;padding:.5rem 0}._2Iag2e7G5vGaw_67ojyS6J label{position:absolute;left:0;max-width:calc(100% - 30px)}._2Iag2e7G5vGaw_67ojyS6J input{border:0;box-shadow:none;outline:none;width:100%;height:1.5rem;font-family:\"Poppins\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}._2Iag2e7G5vGaw_67ojyS6J input:invalid{outline:none}._2Iag2e7G5vGaw_67ojyS6J input+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}._2Iag2e7G5vGaw_67ojyS6J input[value=\"\"]+label{bottom:.5rem}._2Iag2e7G5vGaw_67ojyS6J input:not([value=\"\"])+label{bottom:100%;font-size:.875rem}._2Iag2e7G5vGaw_67ojyS6J input:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}._2Iag2e7G5vGaw_67ojyS6J svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}._2Iag2e7G5vGaw_67ojyS6J._1E-elk9mD4fBPONF6IS34N{position:relative;display:flex;flex-direction:row-reverse}._2Iag2e7G5vGaw_67ojyS6J._1E-elk9mD4fBPONF6IS34N label{flex-grow:1}._2Iag2e7G5vGaw_67ojyS6J._1E-elk9mD4fBPONF6IS34N input{width:24px;color:#35858b}._2Iag2e7G5vGaw_67ojyS6J._1E-elk9mD4fBPONF6IS34N input[value=\"\"]+label{bottom:.5rem}._2Iag2e7G5vGaw_67ojyS6J._1E-elk9mD4fBPONF6IS34N input:not([value=\"\"])+label{bottom:.5rem;font-size:initial}._2Iag2e7G5vGaw_67ojyS6J._1E-elk9mD4fBPONF6IS34N input:focus[value=\"\"]+label{bottom:.5rem;font-size:initial}._2Iag2e7G5vGaw_67ojyS6J._3VRaJULWD_Ihp-VKgXR_YX input+label{bottom:100%;font-size:.875rem}._1XhNO_uNdWE_MyQmULvHfh{padding:.5rem 0;font-size:.75rem}.TVe2UUMspunsymywDRO5_{color:red}._3c1KmYMgzk_NOaHx0Ffl9z{border-bottom:1px solid #35858b}._3c1KmYMgzk_NOaHx0Ffl9z svg path{color:#35858b}._22e0rmAOGf5sHrRrqb5oCG{border-bottom:1px solid red}._22e0rmAOGf5sHrRrqb5oCG svg path{color:red}.TRi1xFVJ7fYhAE7wik1sp{width:100%;height:1.5rem;cursor:pointer;min-height:1.5rem}.AVgbVF3thbqZQfZY8IBAI{position:absolute;top:3rem;left:0;width:100%;z-index:100;max-height:0;transition:max-height .3s ease-in;overflow:hidden}._1Ims8M_9-6XGWLb0P-yDLn{cursor:pointer;border-bottom:1px solid #707070;padding:.5rem;background-color:#fff}._1Ims8M_9-6XGWLb0P-yDLn:last-of-type{border:0}._1Ims8M_9-6XGWLb0P-yDLn:hover{background-color:#35858b;color:#fff}.q1_pARF_gCRufCSn1QEb_{max-height:7.5rem}._2t6LzfUmR-k1lMUz2SUtVC{max-height:2.5rem}._3gJMxhbam4Lj3RAwakeNsb{max-height:5rem}.ORfCHMtBkM84xMTxXrUqS{max-height:7.5rem}._3BjcZ3paKqPkf56qeYKMsj{max-height:10rem}._3ZmFtfX0mME5nLdUMo35ps{max-height:12.5rem}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAW,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,yBAAc,iBAAiB,CAAC,+BAA+B,CAAC,eAAe,CAAC,+BAAoB,iBAAiB,CAAC,MAAM,CAAC,2BAA2B,CAAC,+BAAoB,QAAQ,CAAC,eAAe,CAAC,YAAY,CAAC,UAAU,CAAC,aAAa,CAAC,gCAAgC,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,uCAA4B,YAAY,CAAC,qCAA0B,QAAQ,CAAC,mDAAmD,CAAC,+CAAoC,YAAY,CAAC,qDAA0C,WAAW,CAAC,iBAAiB,CAAC,qDAA0C,WAAW,CAAC,iBAAiB,CAAC,6BAAkB,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,WAAW,CAAC,iDAAoB,iBAAiB,CAAC,YAAY,CAAC,0BAA0B,CAAC,uDAA0B,WAAW,CAAC,uDAA0B,UAAU,CAAC,aAAa,CAAC,uEAA0C,YAAY,CAAC,6EAAgD,YAAY,CAAC,iBAAiB,CAAC,6EAAgD,YAAY,CAAC,iBAAiB,CAAC,6DAAgC,WAAW,CAAC,iBAAiB,CAAC,yBAAQ,eAAe,CAAC,gBAAgB,CAAC,uBAAK,SAAS,CAAC,yBAAO,+BAA+B,CAAC,kCAAgB,aAAa,CAAC,yBAAS,2BAA2B,CAAC,kCAAkB,SAAS,CAAC,uBAAQ,UAAU,CAAC,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,uBAAS,iBAAiB,CAAC,QAAQ,CAAC,MAAM,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,iCAAiC,CAAC,eAAe,CAAC,yBAAQ,cAAc,CAAC,+BAA+B,CAAC,aAAa,CAAC,qBAAqB,CAAC,sCAAqB,QAAQ,CAAC,+BAAc,wBAAwB,CAAC,UAAU,CAAC,uBAAM,iBAAiB,CAAC,yBAAO,iBAAiB,CAAC,yBAAO,eAAe,CAAC,uBAAO,iBAAiB,CAAC,yBAAO,gBAAgB,CAAC,yBAAO,kBAAkB","file":"styles.scss","sourcesContent":[".container{display:inline-block;margin-top:2rem;width:100%}.subContainer{position:relative;border-bottom:1px solid #e3e3e3;padding:.5rem 0}.subContainer label{position:absolute;left:0;max-width:calc(100% - 30px)}.subContainer input{border:0;box-shadow:none;outline:none;width:100%;height:1.5rem;font-family:\"Poppins\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}.subContainer input:invalid{outline:none}.subContainer input+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}.subContainer input[value=\"\"]+label{bottom:.5rem}.subContainer input:not([value=\"\"])+label{bottom:100%;font-size:.875rem}.subContainer input:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}.subContainer svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}.subContainer.check{position:relative;display:flex;flex-direction:row-reverse}.subContainer.check label{flex-grow:1}.subContainer.check input{width:24px;color:#35858b}.subContainer.check input[value=\"\"]+label{bottom:.5rem}.subContainer.check input:not([value=\"\"])+label{bottom:.5rem;font-size:initial}.subContainer.check input:focus[value=\"\"]+label{bottom:.5rem;font-size:initial}.subContainer.focus input+label{bottom:100%;font-size:.875rem}.helper{padding:.5rem 0;font-size:.75rem}.red{color:red}.valid{border-bottom:1px solid #35858b}.valid svg path{color:#35858b}.invalid{border-bottom:1px solid red}.invalid svg path{color:red}.select{width:100%;height:1.5rem;cursor:pointer;min-height:1.5rem}.options{position:absolute;top:3rem;left:0;width:100%;z-index:100;max-height:0;transition:max-height .3s ease-in;overflow:hidden}.option{cursor:pointer;border-bottom:1px solid #707070;padding:.5rem;background-color:#fff}.option:last-of-type{border:0}.option:hover{background-color:#35858b;color:#fff}.show{max-height:7.5rem}.show1{max-height:2.5rem}.show2{max-height:5rem}.show3{max-height:7.5rem}.show4{max-height:10rem}.show5{max-height:12.5rem}"]}]);

// Exports
exports.locals = {
	"container": "_3iS9MP9fOlOQ4_UpDrYPLm",
	"subContainer": "_2Iag2e7G5vGaw_67ojyS6J",
	"check": "_1E-elk9mD4fBPONF6IS34N",
	"focus": "_3VRaJULWD_Ihp-VKgXR_YX",
	"helper": "_1XhNO_uNdWE_MyQmULvHfh",
	"red": "TVe2UUMspunsymywDRO5_",
	"valid": "_3c1KmYMgzk_NOaHx0Ffl9z",
	"invalid": "_22e0rmAOGf5sHrRrqb5oCG",
	"select": "TRi1xFVJ7fYhAE7wik1sp",
	"options": "AVgbVF3thbqZQfZY8IBAI",
	"option": "_1Ims8M_9-6XGWLb0P-yDLn",
	"show": "q1_pARF_gCRufCSn1QEb_",
	"show1": "_2t6LzfUmR-k1lMUz2SUtVC",
	"show2": "_3gJMxhbam4Lj3RAwakeNsb",
	"show3": "ORfCHMtBkM84xMTxXrUqS",
	"show4": "_3BjcZ3paKqPkf56qeYKMsj",
	"show5": "_3ZmFtfX0mME5nLdUMo35ps"
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._14n2uQza4SyeqMyBSk1BJ4{display:inline-block;margin-top:2rem;width:100%}._8a5c5O6SQUDItb0PSvPiA{position:relative;border-bottom:1px solid #e3e3e3;padding:.5rem 0}._8a5c5O6SQUDItb0PSvPiA label{position:absolute;left:0;max-width:calc(100% - 30px)}._8a5c5O6SQUDItb0PSvPiA input{border:0;box-shadow:none;outline:none;width:100%;height:1.5rem;font-family:\"Poppins\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}._8a5c5O6SQUDItb0PSvPiA input:invalid{outline:none}._8a5c5O6SQUDItb0PSvPiA input+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}._8a5c5O6SQUDItb0PSvPiA input[value=\"\"]+label{bottom:.5rem}._8a5c5O6SQUDItb0PSvPiA input:not([value=\"\"])+label{bottom:100%;font-size:.875rem}._8a5c5O6SQUDItb0PSvPiA input:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}._8a5c5O6SQUDItb0PSvPiA svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}._8a5c5O6SQUDItb0PSvPiA._1T2mKPqUpvecMit-EX_GF8{position:relative;display:flex;flex-direction:row-reverse}._8a5c5O6SQUDItb0PSvPiA._1T2mKPqUpvecMit-EX_GF8 label{flex-grow:1}._8a5c5O6SQUDItb0PSvPiA._1T2mKPqUpvecMit-EX_GF8 input{width:24px;color:#35858b}._8a5c5O6SQUDItb0PSvPiA._1T2mKPqUpvecMit-EX_GF8 input[value=\"\"]+label{bottom:.5rem}._8a5c5O6SQUDItb0PSvPiA._1T2mKPqUpvecMit-EX_GF8 input:not([value=\"\"])+label{bottom:.5rem;font-size:initial}._8a5c5O6SQUDItb0PSvPiA._1T2mKPqUpvecMit-EX_GF8 input:focus[value=\"\"]+label{bottom:.5rem;font-size:initial}._8a5c5O6SQUDItb0PSvPiA._17yBsw8OMJxTyDrYKlu4y4 input+label{bottom:100%;font-size:.875rem}._3C8tM9wWxf1AavaZ1mOHtS{padding:.5rem 0;font-size:.75rem}._5kSWS-1c53mOnXyDNJF66{color:red}._1oKkUb05eNm86Kq00fuVMd{border-bottom:1px solid #35858b}._1oKkUb05eNm86Kq00fuVMd svg path{color:#35858b}._2L_JgaA9I4GEUqFgPN9XgW{border-bottom:1px solid red}._2L_JgaA9I4GEUqFgPN9XgW svg path{color:red}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAW,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,wBAAc,iBAAiB,CAAC,+BAA+B,CAAC,eAAe,CAAC,8BAAoB,iBAAiB,CAAC,MAAM,CAAC,2BAA2B,CAAC,8BAAoB,QAAQ,CAAC,eAAe,CAAC,YAAY,CAAC,UAAU,CAAC,aAAa,CAAC,gCAAgC,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,sCAA4B,YAAY,CAAC,oCAA0B,QAAQ,CAAC,mDAAmD,CAAC,8CAAoC,YAAY,CAAC,oDAA0C,WAAW,CAAC,iBAAiB,CAAC,oDAA0C,WAAW,CAAC,iBAAiB,CAAC,4BAAkB,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,WAAW,CAAC,gDAAoB,iBAAiB,CAAC,YAAY,CAAC,0BAA0B,CAAC,sDAA0B,WAAW,CAAC,sDAA0B,UAAU,CAAC,aAAa,CAAC,sEAA0C,YAAY,CAAC,4EAAgD,YAAY,CAAC,iBAAiB,CAAC,4EAAgD,YAAY,CAAC,iBAAiB,CAAC,4DAAgC,WAAW,CAAC,iBAAiB,CAAC,yBAAQ,eAAe,CAAC,gBAAgB,CAAC,wBAAK,SAAS,CAAC,yBAAO,+BAA+B,CAAC,kCAAgB,aAAa,CAAC,yBAAS,2BAA2B,CAAC,kCAAkB,SAAS","file":"styles.scss","sourcesContent":[".container{display:inline-block;margin-top:2rem;width:100%}.subContainer{position:relative;border-bottom:1px solid #e3e3e3;padding:.5rem 0}.subContainer label{position:absolute;left:0;max-width:calc(100% - 30px)}.subContainer input{border:0;box-shadow:none;outline:none;width:100%;height:1.5rem;font-family:\"Poppins\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}.subContainer input:invalid{outline:none}.subContainer input+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}.subContainer input[value=\"\"]+label{bottom:.5rem}.subContainer input:not([value=\"\"])+label{bottom:100%;font-size:.875rem}.subContainer input:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}.subContainer svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}.subContainer.check{position:relative;display:flex;flex-direction:row-reverse}.subContainer.check label{flex-grow:1}.subContainer.check input{width:24px;color:#35858b}.subContainer.check input[value=\"\"]+label{bottom:.5rem}.subContainer.check input:not([value=\"\"])+label{bottom:.5rem;font-size:initial}.subContainer.check input:focus[value=\"\"]+label{bottom:.5rem;font-size:initial}.subContainer.focus input+label{bottom:100%;font-size:.875rem}.helper{padding:.5rem 0;font-size:.75rem}.red{color:red}.valid{border-bottom:1px solid #35858b}.valid svg path{color:#35858b}.invalid{border-bottom:1px solid red}.invalid svg path{color:red}"]}]);

// Exports
exports.locals = {
	"container": "_14n2uQza4SyeqMyBSk1BJ4",
	"subContainer": "_8a5c5O6SQUDItb0PSvPiA",
	"check": "_1T2mKPqUpvecMit-EX_GF8",
	"focus": "_17yBsw8OMJxTyDrYKlu4y4",
	"helper": "_3C8tM9wWxf1AavaZ1mOHtS",
	"red": "_5kSWS-1c53mOnXyDNJF66",
	"valid": "_1oKkUb05eNm86Kq00fuVMd",
	"invalid": "_2L_JgaA9I4GEUqFgPN9XgW"
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._2vRwDXngLiKgarBQ0_awM9{width:100%;max-width:960px;margin:0 auto;display:flex;flex-direction:column;align-items:center}.RCXt_B5pNELaFP66aQnYs{width:100%;display:flex;flex-direction:row;align-items:stretch}._1Q2sQKsNa45fOGRvkYrQSt{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:10px}._2M-leRrbn-7xg8uhKxgJ_U,.t4oGHsPViM5gyoap-rAVQ{width:50px;font-size:40px;font-weight:100;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer}._2M-leRrbn-7xg8uhKxgJ_U svg path,.t4oGHsPViM5gyoap-rAVQ svg path{fill:#fff}._2M-leRrbn-7xg8uhKxgJ_U:hover svg path,.t4oGHsPViM5gyoap-rAVQ:hover svg path{fill:#707070}._1l4oLhEgt-Kh2jNpI0JtTu{width:10px;height:10px;cursor:pointer;border-radius:100%;background-color:#fff;margin:0 5px}._1l4oLhEgt-Kh2jNpI0JtTu:hover{background-color:#707070}._1xyx64UzS8d6lRbZgu6F6k{background-color:#707070}._2VbOrE7pSdqSZUbfAeHK3w{width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;overflow:hidden}._2VbOrE7pSdqSZUbfAeHK3w.qgpe-w8PhkcDRSx3PMABb .tb869PdAONQrW2gfVAa7C{transform:translateX(0%)}._2VbOrE7pSdqSZUbfAeHK3w._10EJzpA4rHKqQNhkINISYU .tb869PdAONQrW2gfVAa7C{transform:translateX(-100%)}._2VbOrE7pSdqSZUbfAeHK3w._2wAqwuQl5e_M8kKcJiFDZ .tb869PdAONQrW2gfVAa7C{transform:translateX(-200%)}._2VbOrE7pSdqSZUbfAeHK3w._1LwRM32MGKDew5v0gWrKBj .tb869PdAONQrW2gfVAa7C{transform:translateX(-300%)}._2VbOrE7pSdqSZUbfAeHK3w.MYtYzIb0wck9vpgl6oWJw .tb869PdAONQrW2gfVAa7C{transform:translateX(-400%)}._2VbOrE7pSdqSZUbfAeHK3w._78dsDoFa9twDUGYKpOfqG .tb869PdAONQrW2gfVAa7C{transform:translateX(-500%)}._2VbOrE7pSdqSZUbfAeHK3w.Y2_6O5zgCrj0pDwvk_Xqt .tb869PdAONQrW2gfVAa7C{transform:translateX(-600%)}._2VbOrE7pSdqSZUbfAeHK3w.SpNMeI7bu4tSLQYL8gyi8 .tb869PdAONQrW2gfVAa7C{transform:translateX(-700%)}._2VbOrE7pSdqSZUbfAeHK3w._126HSxynvQGjWeDHHs7lrH .tb869PdAONQrW2gfVAa7C{transform:translateX(-800%)}._2VbOrE7pSdqSZUbfAeHK3w._2BgXVSoy_F0289wSvJKBn- .tb869PdAONQrW2gfVAa7C{transform:translateX(-900%)}._2VbOrE7pSdqSZUbfAeHK3w._2A1Hln0xsFagD0wYh8IP0J .tb869PdAONQrW2gfVAa7C{transform:translateX(-1000%)}._2VbOrE7pSdqSZUbfAeHK3w._1z1vggP4O8kpkxc2oCMzXO .tb869PdAONQrW2gfVAa7C{transform:translateX(-1100%)}._2VbOrE7pSdqSZUbfAeHK3w._3g3QsE5bABfNNDTgAAegTh .tb869PdAONQrW2gfVAa7C{transform:translateX(-1200%)}._2VbOrE7pSdqSZUbfAeHK3w._3j5XlDnXcFV6xiCO2s0eBt .tb869PdAONQrW2gfVAa7C{transform:translateX(-1300%)}._2VbOrE7pSdqSZUbfAeHK3w._22nQMWRLyiM6dXQDndKAn0 .tb869PdAONQrW2gfVAa7C{transform:translateX(-1400%)}._2VbOrE7pSdqSZUbfAeHK3w._2mFfqwhLCxUAydYjtjhFUX .tb869PdAONQrW2gfVAa7C{transform:translateX(-1500%)}.tb869PdAONQrW2gfVAa7C{min-width:100%;text-align:center;padding:0 1rem;display:flex;flex-direction:column;transition:transform .5s ease-in-out}@media(min-width: 760px){.tb869PdAONQrW2gfVAa7C{padding:0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAQ,UAAU,CAAC,eAAe,CAAC,aAAa,CAAC,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,uBAAO,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,yBAAO,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,eAAe,CAAC,gDAAY,UAAU,CAAC,cAAc,CAAC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,cAAc,CAAC,kEAA8B,SAAS,CAAC,8EAA0C,YAAY,CAAC,yBAAa,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,YAAY,CAAC,+BAAmB,wBAAwB,CAAC,yBAAmB,wBAAwB,CAAC,yBAAS,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sEAAsB,wBAAwB,CAAC,wEAAsB,2BAA2B,CAAC,uEAAsB,2BAA2B,CAAC,wEAAsB,2BAA2B,CAAC,sEAAsB,2BAA2B,CAAC,uEAAsB,2BAA2B,CAAC,sEAAsB,2BAA2B,CAAC,sEAAsB,2BAA2B,CAAC,wEAAsB,2BAA2B,CAAC,wEAAsB,2BAA2B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,wEAAuB,4BAA4B,CAAC,uBAAM,cAAc,CAAC,iBAAiB,CAAC,cAAc,CAAC,YAAY,CAAC,qBAAqB,CAAC,oCAAoC,CAAC,yBAAyB,uBAAM,SAAS,CAAC","file":"styles.scss","sourcesContent":[".slider{width:100%;max-width:960px;margin:0 auto;display:flex;flex-direction:column;align-items:center}.upper{width:100%;display:flex;flex-direction:row;align-items:stretch}.lower{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:10px}.prev,.next{width:50px;font-size:40px;font-weight:100;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer}.prev svg path,.next svg path{fill:#fff}.prev:hover svg path,.next:hover svg path{fill:#707070}.quickAccess{width:10px;height:10px;cursor:pointer;border-radius:100%;background-color:#fff;margin:0 5px}.quickAccess:hover{background-color:#707070}.quickAccessActive{background-color:#707070}.wrapper{width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;overflow:hidden}.wrapper.slide0 .item{transform:translateX(0%)}.wrapper.slide1 .item{transform:translateX(-100%)}.wrapper.slide2 .item{transform:translateX(-200%)}.wrapper.slide3 .item{transform:translateX(-300%)}.wrapper.slide4 .item{transform:translateX(-400%)}.wrapper.slide5 .item{transform:translateX(-500%)}.wrapper.slide6 .item{transform:translateX(-600%)}.wrapper.slide7 .item{transform:translateX(-700%)}.wrapper.slide8 .item{transform:translateX(-800%)}.wrapper.slide9 .item{transform:translateX(-900%)}.wrapper.slide10 .item{transform:translateX(-1000%)}.wrapper.slide11 .item{transform:translateX(-1100%)}.wrapper.slide12 .item{transform:translateX(-1200%)}.wrapper.slide13 .item{transform:translateX(-1300%)}.wrapper.slide14 .item{transform:translateX(-1400%)}.wrapper.slide15 .item{transform:translateX(-1500%)}.item{min-width:100%;text-align:center;padding:0 1rem;display:flex;flex-direction:column;transition:transform .5s ease-in-out}@media(min-width: 760px){.item{padding:0}}"]}]);

// Exports
exports.locals = {
	"slider": "_2vRwDXngLiKgarBQ0_awM9",
	"upper": "RCXt_B5pNELaFP66aQnYs",
	"lower": "_1Q2sQKsNa45fOGRvkYrQSt",
	"prev": "_2M-leRrbn-7xg8uhKxgJ_U",
	"next": "t4oGHsPViM5gyoap-rAVQ",
	"quickAccess": "_1l4oLhEgt-Kh2jNpI0JtTu",
	"quickAccessActive": "_1xyx64UzS8d6lRbZgu6F6k",
	"wrapper": "_2VbOrE7pSdqSZUbfAeHK3w",
	"slide0": "qgpe-w8PhkcDRSx3PMABb",
	"item": "tb869PdAONQrW2gfVAa7C",
	"slide1": "_10EJzpA4rHKqQNhkINISYU",
	"slide2": "_2wAqwuQl5e_M8kKcJiFDZ",
	"slide3": "_1LwRM32MGKDew5v0gWrKBj",
	"slide4": "MYtYzIb0wck9vpgl6oWJw",
	"slide5": "_78dsDoFa9twDUGYKpOfqG",
	"slide6": "Y2_6O5zgCrj0pDwvk_Xqt",
	"slide7": "SpNMeI7bu4tSLQYL8gyi8",
	"slide8": "_126HSxynvQGjWeDHHs7lrH",
	"slide9": "_2BgXVSoy_F0289wSvJKBn-",
	"slide10": "_2A1Hln0xsFagD0wYh8IP0J",
	"slide11": "_1z1vggP4O8kpkxc2oCMzXO",
	"slide12": "_3g3QsE5bABfNNDTgAAegTh",
	"slide13": "_3j5XlDnXcFV6xiCO2s0eBt",
	"slide14": "_22nQMWRLyiM6dXQDndKAn0",
	"slide15": "_2mFfqwhLCxUAydYjtjhFUX"
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, ".XszRy0pA2_nlH1riMA0VQ{display:inline-block;margin-top:2rem;width:100%}._1DMCe2ka2LTC_Ee-SyIH0p{position:relative;border-bottom:1px solid #4fbdba;padding:.5rem 0}._1DMCe2ka2LTC_Ee-SyIH0p label{position:absolute;left:0}._1DMCe2ka2LTC_Ee-SyIH0p textarea{border:0;box-shadow:none;outline:none;width:100%;max-width:100%;min-width:100%;height:1.5rem;font-family:\"Poppins\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}._1DMCe2ka2LTC_Ee-SyIH0p textarea:invalid{outline:none}._1DMCe2ka2LTC_Ee-SyIH0p textarea+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}._1DMCe2ka2LTC_Ee-SyIH0p textarea[value=\"\"]+label{bottom:.5rem}._1DMCe2ka2LTC_Ee-SyIH0p textarea:not([value=\"\"])+label{bottom:100%;font-size:.875rem}._1DMCe2ka2LTC_Ee-SyIH0p textarea:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}._1DMCe2ka2LTC_Ee-SyIH0p svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}._3UEJOJc2Mi0hv54ko3r4MS{padding:.5rem 0;font-size:.75rem}.EaQgUbMoCyqQc0cV-5r_f{color:red}._1w2JRD1aVFcyl84YKu5JAV{border-bottom:1px solid #35858b}._1w2JRD1aVFcyl84YKu5JAV svg path{color:#35858b}._1316aXAA0HDe7xOfnoGtKw{border-bottom:1px solid red}._1316aXAA0HDe7xOfnoGtKw svg path{color:red}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,uBAAW,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,yBAAc,iBAAiB,CAAC,+BAA+B,CAAC,eAAe,CAAC,+BAAoB,iBAAiB,CAAC,MAAM,CAAC,kCAAuB,QAAQ,CAAC,eAAe,CAAC,YAAY,CAAC,UAAU,CAAC,cAAc,CAAC,cAAc,CAAC,aAAa,CAAC,gCAAgC,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,0CAA+B,YAAY,CAAC,wCAA6B,QAAQ,CAAC,mDAAmD,CAAC,kDAAuC,YAAY,CAAC,wDAA6C,WAAW,CAAC,iBAAiB,CAAC,wDAA6C,WAAW,CAAC,iBAAiB,CAAC,6BAAkB,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,WAAW,CAAC,yBAAQ,eAAe,CAAC,gBAAgB,CAAC,uBAAK,SAAS,CAAC,yBAAO,+BAA+B,CAAC,kCAAgB,aAAa,CAAC,yBAAS,2BAA2B,CAAC,kCAAkB,SAAS","file":"styles.scss","sourcesContent":[".container{display:inline-block;margin-top:2rem;width:100%}.subContainer{position:relative;border-bottom:1px solid #4fbdba;padding:.5rem 0}.subContainer label{position:absolute;left:0}.subContainer textarea{border:0;box-shadow:none;outline:none;width:100%;max-width:100%;min-width:100%;height:1.5rem;font-family:\"Poppins\",sans-serif;font-size:initial;background-color:initial;padding-right:1rem}.subContainer textarea:invalid{outline:none}.subContainer textarea+label{bottom:0;transition:bottom .2s ease-in,font-size .2s ease-in}.subContainer textarea[value=\"\"]+label{bottom:.5rem}.subContainer textarea:not([value=\"\"])+label{bottom:100%;font-size:.875rem}.subContainer textarea:focus[value=\"\"]+label{bottom:100%;font-size:.875rem}.subContainer svg{position:absolute;bottom:.5rem;right:0;width:1rem;height:1rem}.helper{padding:.5rem 0;font-size:.75rem}.red{color:red}.valid{border-bottom:1px solid #35858b}.valid svg path{color:#35858b}.invalid{border-bottom:1px solid red}.invalid svg path{color:red}"]}]);

// Exports
exports.locals = {
	"container": "XszRy0pA2_nlH1riMA0VQ",
	"subContainer": "_1DMCe2ka2LTC_Ee-SyIH0p",
	"helper": "_3UEJOJc2Mi0hv54ko3r4MS",
	"red": "EaQgUbMoCyqQc0cV-5r_f",
	"valid": "_1w2JRD1aVFcyl84YKu5JAV",
	"invalid": "_1316aXAA0HDe7xOfnoGtKw"
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return homePage; });
/* unused harmony export routes */
var contactPage = {
  path: '/contact',
  template: 'src/pages/Contact',
  title: 'Get in touch'
};
var homePage = {
  path: '/',
  template: 'src/pages/Home'
};
var routes = [homePage, contactPage, {
  path: '404',
  template: 'src/pages/404'
}];
/* harmony default export */ __webpack_exports__["b"] = (routes);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._2PZJrW-6Wtn7XQLZbhlKf5{position:fixed;top:0;left:0;background-color:#fff;width:100%;overflow:hidden;z-index:1000;box-shadow:0 2px 2px rgba(0,0,0,.2)}.RuZ5o2hZ_Cty0ghSGOIBU{display:grid;grid-template-columns:auto 48px;grid-template-rows:80px auto;grid-template-areas:\"logo icon\" \"nav nav\";justify-items:stretch;align-items:center}._2-5E9vr1ekF-AbwqJUum8Q{grid-area:logo}.yQCHkFqPFgvvSjMOHnsBn{grid-area:nav;max-height:0;transition:max-height .3s ease-in;display:block}._3G4Ouo_3oXKBjxKO-Z2pKd{max-height:80px}.j0un8IbS9jSvKT0_Z06fo{max-height:160px}._1QjMTilJpipjWGvKxR4CRr{max-height:240px}._2DCG_ArOg2hNGnElMWSjUs{max-height:320px}.IYj_jwspV5XdmNz_23FpE{max-height:400px}._3F-uXzlV3vfORScK4-eKIB{border-top:1px solid #707070;display:block;width:100%}._3F-uXzlV3vfORScK4-eKIB a{display:block;width:100%;color:inherit;padding:1rem}._3F-uXzlV3vfORScK4-eKIB:hover{color:#fff;background-color:#35858b}._3xrB4DvVNvQClRV2YZXT1Z{color:#072227;background-color:#35858b}.o0830Ujb4euKR6vIDUNoI{display:none;background-color:#fff;transition:max-height .3s ease-in}._2OZ4YPmccjiUAGEngBlRYB{width:-webkit-max-content;width:-moz-max-content;width:max-content}.PXhebmVipa5O8_vxPKfiU{cursor:pointer;grid-area:icon;justify-self:center;align-self:center;width:100%;height:100%;display:flex;justify-content:center;align-items:center}@media(min-width: 760px){.RuZ5o2hZ_Cty0ghSGOIBU{grid-template-columns:auto 1fr;grid-template-areas:\"logo nav\";overflow:initial;max-width:960px;margin:0 auto}._2-5E9vr1ekF-AbwqJUum8Q{justify-self:left;padding:0 1.5rem;padding-left:0;margin-left:1.25rem}.yQCHkFqPFgvvSjMOHnsBn{height:80px;max-height:80px;justify-self:right;margin-right:1.25rem}.Z7nVYRMAmNJtnh-WnBfmQ{right:calc((100% - 960px)/2 - (48px / 4))}._3F-uXzlV3vfORScK4-eKIB{border:0;display:inline-block;width:initial;align-self:stretch;position:relative}._3F-uXzlV3vfORScK4-eKIB:last-of-type a{padding-right:0}._3F-uXzlV3vfORScK4-eKIB a{padding:0 1.5rem;line-height:80px;vertical-align:middle}._3F-uXzlV3vfORScK4-eKIB:hover{background-color:#fff;color:#35858b}._3F-uXzlV3vfORScK4-eKIB:hover ._2rN9C_1Nm_ozNcG7UOROpr{max-height:80px}._3F-uXzlV3vfORScK4-eKIB:hover .Bi7lQ815FOUcAnqFgYgSj{max-height:160px}._3xrB4DvVNvQClRV2YZXT1Z{background-color:#fff;color:#35858b}.o0830Ujb4euKR6vIDUNoI{display:block;max-height:0;position:absolute;overflow:hidden}.PXhebmVipa5O8_vxPKfiU{display:none}}", "",{"version":3,"sources":["style.scss"],"names":[],"mappings":"AAAA,yBAAW,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,qBAAqB,CAAC,UAAU,CAAC,eAAe,CAAC,YAAY,CAAC,mCAAmC,CAAC,uBAAQ,YAAY,CAAC,+BAA+B,CAAC,4BAA4B,CAAC,yCAAyC,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,yBAAM,cAAc,CAAC,uBAAK,aAAa,CAAC,YAAY,CAAC,iCAAiC,CAAC,aAAa,CAAC,yBAAM,eAAe,CAAC,uBAAM,gBAAgB,CAAC,yBAAM,gBAAgB,CAAC,yBAAM,gBAAgB,CAAC,uBAAM,gBAAgB,CAAC,yBAAS,4BAA4B,CAAC,aAAa,CAAC,UAAU,CAAC,2BAAW,aAAa,CAAC,UAAU,CAAC,aAAa,CAAC,YAAY,CAAC,+BAAe,UAAU,CAAC,wBAAwB,CAAC,yBAAQ,aAAa,CAAC,wBAAwB,CAAC,uBAAQ,YAAY,CAAC,qBAAqB,CAAC,iCAAiC,CAAC,yBAAY,yBAAgB,CAAhB,sBAAgB,CAAhB,iBAAiB,CAAC,uBAAU,cAAc,CAAC,cAAc,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,yBAAyB,uBAAQ,8BAA8B,CAAC,8BAA8B,CAAC,gBAAgB,CAAC,eAAe,CAAC,aAAa,CAAC,yBAAM,iBAAiB,CAAC,gBAAgB,CAAC,cAAc,CAAC,mBAAmB,CAAC,uBAAK,WAAW,CAAC,eAAe,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,uBAAS,yCAAyC,CAAC,yBAAS,QAAQ,CAAC,oBAAoB,CAAC,aAAa,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wCAAwB,eAAe,CAAC,2BAAW,gBAAgB,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,+BAAe,qBAAqB,CAAC,aAAa,CAAC,wDAAwB,eAAe,CAAC,sDAAwB,gBAAgB,CAAC,yBAAQ,qBAAqB,CAAC,aAAa,CAAC,uBAAQ,aAAa,CAAC,YAAY,CAAC,iBAAiB,CAAC,eAAe,CAAC,uBAAU,YAAY,CAAC","file":"style.scss","sourcesContent":[".container{position:fixed;top:0;left:0;background-color:#fff;width:100%;overflow:hidden;z-index:1000;box-shadow:0 2px 2px rgba(0,0,0,.2)}.header{display:grid;grid-template-columns:auto 48px;grid-template-rows:80px auto;grid-template-areas:\"logo icon\" \"nav nav\";justify-items:stretch;align-items:center}.logo{grid-area:logo}.nav{grid-area:nav;max-height:0;transition:max-height .3s ease-in;display:block}.nav1{max-height:80px}.nav2{max-height:160px}.nav3{max-height:240px}.nav4{max-height:320px}.nav5{max-height:400px}.navItem{border-top:1px solid #707070;display:block;width:100%}.navItem a{display:block;width:100%;color:inherit;padding:1rem}.navItem:hover{color:#fff;background-color:#35858b}.active{color:#072227;background-color:#35858b}.subnav{display:none;background-color:#fff;transition:max-height .3s ease-in}.subnavItem{width:max-content}.menuIcon{cursor:pointer;grid-area:icon;justify-self:center;align-self:center;width:100%;height:100%;display:flex;justify-content:center;align-items:center}@media(min-width: 760px){.header{grid-template-columns:auto 1fr;grid-template-areas:\"logo nav\";overflow:initial;max-width:960px;margin:0 auto}.logo{justify-self:left;padding:0 1.5rem;padding-left:0;margin-left:1.25rem}.nav{height:80px;max-height:80px;justify-self:right;margin-right:1.25rem}.langNav{right:calc((100% - 960px)/2 - (48px / 4))}.navItem{border:0;display:inline-block;width:initial;align-self:stretch;position:relative}.navItem:last-of-type a{padding-right:0}.navItem a{padding:0 1.5rem;line-height:80px;vertical-align:middle}.navItem:hover{background-color:#fff;color:#35858b}.navItem:hover .subnav1{max-height:80px}.navItem:hover .subnav2{max-height:160px}.active{background-color:#fff;color:#35858b}.subnav{display:block;max-height:0;position:absolute;overflow:hidden}.menuIcon{display:none}}"]}]);

// Exports
exports.locals = {
	"container": "_2PZJrW-6Wtn7XQLZbhlKf5",
	"header": "RuZ5o2hZ_Cty0ghSGOIBU",
	"logo": "_2-5E9vr1ekF-AbwqJUum8Q",
	"nav": "yQCHkFqPFgvvSjMOHnsBn",
	"nav1": "_3G4Ouo_3oXKBjxKO-Z2pKd",
	"nav2": "j0un8IbS9jSvKT0_Z06fo",
	"nav3": "_1QjMTilJpipjWGvKxR4CRr",
	"nav4": "_2DCG_ArOg2hNGnElMWSjUs",
	"nav5": "IYj_jwspV5XdmNz_23FpE",
	"navItem": "_3F-uXzlV3vfORScK4-eKIB",
	"active": "_3xrB4DvVNvQClRV2YZXT1Z",
	"subnav": "o0830Ujb4euKR6vIDUNoI",
	"subnavItem": "_2OZ4YPmccjiUAGEngBlRYB",
	"menuIcon": "PXhebmVipa5O8_vxPKfiU",
	"langNav": "Z7nVYRMAmNJtnh-WnBfmQ",
	"subnav1": "_2rN9C_1Nm_ozNcG7UOROpr",
	"subnav2": "Bi7lQ815FOUcAnqFgYgSj"
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ components_Header; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ components_Footer; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ components_Home; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Contact; });

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(1);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/routes/index.js
var routes = __webpack_require__(14);

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/atoms/index.js + 22 modules
var atoms = __webpack_require__(3);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/hooks.jsx


var hooks_usePageNavigation = function usePageNavigation() {
  var browserWindow = typeof window !== 'undefined' ? window : undefined;

  var _useState = Object(external_react_["useState"])(),
      _useState2 = slicedToArray_default()(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var ref = Object(external_react_["useRef"])(currentPage);

  function handlePageNavigation() {
    if (browserWindow && browserWindow.location.pathname !== ref.current) {
      setCurrentPage(browserWindow.location.pathname);
      setTimeout(function () {
        return browserWindow.scrollTo(0, 0);
      }, 50);
    }
  }

  Object(external_react_["useEffect"])(function () {
    ref.current = currentPage;
  });
  Object(external_react_["useEffect"])(function () {
    var checker;

    if (browserWindow) {
      setCurrentPage(browserWindow.location.pathname);
      checker = setInterval(handlePageNavigation, 200);
    }

    return function () {
      clearInterval(checker);
    };
  }, []);
  return [currentPage];
};
// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(12);

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Header/components/styles.scss
var styles = __webpack_require__(60);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Header/components/Logo.jsx




var Logo_Logo = function Logo(_ref) {
  var cb = _ref.cb;
  return /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/",
    className: styles["logo"],
    onClick: cb
  }, "Carbon Free Planet");
};

/* harmony default export */ var components_Logo = (Logo_Logo);
// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Header/components/index.js

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Header/style.scss
var style = __webpack_require__(15);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Header/index.jsx










var Header_routes = routes["b" /* default */].filter(function (r) {
  return r.title;
});

var Header_Header = function Header(props) {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _usePageNavigation = hooks_usePageNavigation(),
      _usePageNavigation2 = slicedToArray_default()(_usePageNavigation, 1),
      currentPage = _usePageNavigation2[0];

  var toggle = Object(external_react_["useCallback"])(function () {
    setActive(!active);
  }, [active]);
  var hide = Object(external_react_["useCallback"])(function () {
    setActive(false);
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: style_default.a.container
  }, /*#__PURE__*/external_react_default.a.createElement("header", {
    className: style_default.a.header
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: style_default.a.logo
  }, /*#__PURE__*/external_react_default.a.createElement(components_Logo, null)), /*#__PURE__*/external_react_default.a.createElement("nav", {
    className: external_classnames_default()(style_default.a.nav, defineProperty_default()({}, style_default.a["nav".concat(Header_routes.length)], active))
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, Header_routes.map(function (route, i) {
    return /*#__PURE__*/external_react_default.a.createElement("li", {
      className: external_classnames_default()(style_default.a.navItem, defineProperty_default()({}, style_default.a.active, route.path === currentPage)),
      key: "".concat(route.path).concat(i),
      onClick: hide
    }, /*#__PURE__*/external_react_default.a.createElement(atoms["h" /* Link */], {
      to: route.path,
      noStyle: true
    }, route.title));
  }))), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: style_default.a.menuIcon,
    onClick: toggle
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Icon */], {
    icon: active ? free_solid_svg_icons_["faTimes"] : free_solid_svg_icons_["faBars"]
  }))));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Footer/styles.scss
var Footer_styles = __webpack_require__(61);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Footer/index.jsx


var Footer_Footer = function Footer() {
  return /*#__PURE__*/external_react_default.a.createElement("footer", {
    className: Footer_styles["footer"]
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, "\xA9 Carbon Free Planet - ", new Date().getFullYear())));
};
/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Home/styles.scss
var Home_styles = __webpack_require__(19);
var Home_styles_default = /*#__PURE__*/__webpack_require__.n(Home_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Home/index.jsx





var Home_Home = function Home() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Section */], {
    className: Home_styles_default.a.bg
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Home_styles_default.a.titleWrapper
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Home_styles_default.a.titleText
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: Home_styles_default.a.title
  }, /*#__PURE__*/external_react_default.a.createElement("span", null, "Are you a farmer?"), /*#__PURE__*/external_react_default.a.createElement("span", null, "Willing to go into farming?"))))), /*#__PURE__*/external_react_default.a.createElement(atoms["d" /* Grid */], {
    col: "1"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["d" /* Grid */].Item, {
    col: "1"
  }, /*#__PURE__*/external_react_default.a.createElement("p", {
    className: external_classnames_default()(Home_styles_default.a.wrapper, Home_styles_default.a.hero)
  }, "We may help you to finance your project"))), /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Section */], {
    noTopMargin: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["d" /* Grid */], {
    col: "1"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["d" /* Grid */].Item, {
    col: "1"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Title */], {
    noMargin: true
  }, "Who we are"), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Paragraph */], null, "Xavier Richard and Pierre Saint-Arroman set up ", /*#__PURE__*/external_react_default.a.createElement("strong", null, "Amazon Caribbean Guyana Ltd"), " in 1986, ", /*#__PURE__*/external_react_default.a.createElement("strong", null, "built 3 canning factories"), " for the processing of manicole palms and pineapple in Region 1,2 and 5.. Since then, the company has been taken over by ", /*#__PURE__*/external_react_default.a.createElement("strong", null, "local entrepreneurs who have further expanded"), ", providing revenue to thousands of households."), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Paragraph */], null, "Xavier Guy Richard leads due diligences on behalf Swiss institutions which invest into agroforestry projects in Africa (Mango, Moringa, Pecan nuts trees), Brazil (Bactris, Acai palm trees), Suriname (Cherry and Moringa tress), French Guyana, Peru and Nicaragua (Cocoa and Coffee trees)."), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Paragraph */], null, "Today, we congratulate young Guyanese entrepreneurs developing cutting edge farming projects such as the ", /*#__PURE__*/external_react_default.a.createElement("strong", null, "Plymton farm, the Caribbean Coconuts & Spices estate"), ", and others."), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Paragraph */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["j" /* Quote */], null, "Hundreds of such projects can blossom in Guyana through innovative co-financing mechanism.")), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Paragraph */], null, /*#__PURE__*/external_react_default.a.createElement("strong", null, "We deal with international institutions"), " looking for agriculture development opportunities, particularly in agro-forestry (coffee, cocoa, coconut, cherry trees, papaya, golden apple, breadfruit, jackfruit trees, brazil nut trees, manicole palm, etc. ) in any Region of Guyana.")))), /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Section */], {
    margin: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["e" /* Hero */], {
    grey: true
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["e" /* Hero */].Title, null, "Let us know about your project: we could find financing solutions for its feasibility study, emergence and expansion."), /*#__PURE__*/external_react_default.a.createElement(atoms["e" /* Hero */].Content, null, /*#__PURE__*/external_react_default.a.createElement(atoms["a" /* Button */], {
    to: routes["a" /* contactPage */].path
  }, "Get in touch")))));
};
/* harmony default export */ var components_Home = (Home_Home);
// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(62);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(41);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(42);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Contact/styles.scss
var Contact_styles = __webpack_require__(7);
var Contact_styles_default = /*#__PURE__*/__webpack_require__.n(Contact_styles);

// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/Contact/index.jsx






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var email = function email(val) {
  if (!/\S+@\S+\.\S+/.test(val)) {
    return 'Please provide a valid email address';
  }

  return false;
};

var phone = function phone(val) {
  if (!/(\d{10}|(\d\d\s?){5})/g.test(val)) {
    return 'Please provide a valid phone number (xxxxxxxxxx, xx xx xx xx xx)';
  }

  return false;
};

var groups = [{
  title: 'Are you already farming?',
  name: 'farmer',
  inputs: [{
    type: 'text',
    name: '$isFarmerCropsType',
    label: 'Which type of crops?'
  }, {
    type: 'text',
    name: '$isFarmerSurface',
    label: 'On which surface (acres)?'
  }, {
    type: 'text',
    name: '$isFarmerRegion',
    label: 'Which Region?'
  }, {
    type: 'checkbox',
    name: '$isFarmerPlanToExpand',
    label: 'Do you plan to expand your actual farm?'
  }, {
    type: 'checkbox',
    name: '$isFarmerPlanToDiversify',
    label: 'Do you plan to diversify your crops?'
  }, {
    type: 'text',
    name: '$isFarmerCropsToPlant',
    label: 'Which types of crops would you like to plant?'
  }, {
    type: 'checkbox',
    name: '$isFarmerTypeOfOwnership',
    label: 'Do you own your land, rent to private owner, lease to the government?'
  }, {
    type: 'checkbox',
    name: '$isFarmerInAssociation',
    label: 'Are you in cooperative, member of an association?'
  }, {
    type: 'checkbox',
    name: '$isFarmerLookingForFinancing',
    label: 'Are you looking for financing?'
  }, {
    type: 'checkbox',
    name: '$isFarmerLookingForAssistance',
    label: 'Are you looking for technical assistance?'
  }]
}, {
  title: 'If you are not a farmer and if you plan to go farming',
  name: 'nofarmer',
  inputs: [{
    type: 'text',
    name: '$notFarmerCropsType',
    label: 'Which type of crops are you thinking of planting?'
  }, {
    type: 'text',
    name: '$notFarmerSurface',
    label: 'On which surface (acres)?'
  }, {
    type: 'text',
    name: '$notFarmerRegion',
    label: 'Which Region?'
  }, {
    type: 'checkbox',
    name: '$notFarmerTypeOfOwnership',
    label: 'Will it be on your own land, rent to private owner, lease to the government?'
  }, {
    type: 'checkbox',
    name: '$notFarmerLookingForFinancing',
    label: 'Will you look for financing?'
  }, {
    type: 'checkbox',
    name: '$notFarmerLookingForAssistance',
    label: 'Will you look for technical assistance?'
  }]
}, {
  title: 'Leave us your contact informations',
  name: 'contact',
  inputs: [{
    type: 'email',
    name: 'email',
    label: 'Your email'
  }, {
    type: 'tel',
    name: 'phone',
    label: 'Your cell phone number'
  }]
}];
var URL = 'https://api.staticforms.xyz/submit';
var ACCESS_KEY = 'ac2af8ed-4440-408b-9685-2323cf8a69a7';
var Contact_Contact = function Contact() {
  var _useState = Object(external_react_["useState"])(groups.reduce(function (i, j) {
    return [].concat(toConsumableArray_default()(j.inputs), toConsumableArray_default()(i));
  }, [])),
      _useState2 = slicedToArray_default()(_useState, 2),
      inputList = _useState2[0],
      setInputList = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      formSent = _useState4[0],
      setFormSent = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      formSubmissionError = _useState6[0],
      setFormSubmissionError = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      submitting = _useState8[0],
      setSubmitting = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(false),
      _useState10 = slicedToArray_default()(_useState9, 2),
      formValues = _useState10[0],
      setFormValues = _useState10[1];

  var formElement = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    if (!submitting) {
      return;
    }

    function send() {
      return _send.apply(this, arguments);
    }

    function _send() {
      _send = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var response;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch(URL, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(_objectSpread(_objectSpread({}, formValues), {}, {
                    accessKey: ACCESS_KEY
                  }))
                });

              case 3:
                response = _context.sent;

                if (response.ok) {
                  _context.next = 6;
                  break;
                }

                throw Error('error');

              case 6:
                setFormSent(true);
                setSubmitting(false);
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                setFormSubmissionError(true);
                setSubmitting(false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));
      return _send.apply(this, arguments);
    }

    send();
  }, [submitting, formValues]);

  var submit = function submit(e) {
    e.preventDefault();
    var newInputList = inputList.map(function (i) {
      return _objectSpread(_objectSpread({}, i), {}, {
        errors: i.type === 'textarea' ? [] : i.validator ? [i.validator(formElement.current[i.name].value)] : []
      });
    });
    var hasNoErrors = newInputList.every(function (i) {
      return i.errors[0] === false || i.errors.length === 0;
    });
    var hasAtLeastOneValue = newInputList.some(function (i) {
      if (i.type === 'checkbox') {
        return formElement.current[i.name].value === 'on';
      } else {
        return formElement.current[i.name].value !== '';
      }
    });
    var isFormValid = hasNoErrors && hasAtLeastOneValue;

    if (!isFormValid) {
      setInputList(newInputList.map(function (i) {
        return _objectSpread(_objectSpread({}, i), {}, {
          errors: i.errors[0] === false ? [] : i.errors
        });
      }));
      return;
    }

    setFormValues(inputList.reduce(function (a, i) {
      return _objectSpread(_objectSpread({}, a), {}, defineProperty_default()({}, i.name, formElement.current[i.name].value));
    }, {}));
    setSubmitting(true);
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.page
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.bg
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["k" /* Section */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["d" /* Grid */], {
    col: "5"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["d" /* Grid */].Item, {
    col: "01110"
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["b" /* Card */], null, /*#__PURE__*/external_react_default.a.createElement(atoms["m" /* Title */], null, "Let us know about your project:"), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Paragraph */], null, "We could find financing solutions for its feasibility study, emergence and expansion."), /*#__PURE__*/external_react_default.a.createElement("form", {
    ref: formElement,
    action: "",
    mehtod: "post",
    className: external_classnames_default()(Contact_styles_default.a.form)
  }, submitting && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formSubmitting
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Icon */], {
    icon: free_solid_svg_icons_["faSpinner"],
    className: Contact_styles_default.a.spinner,
    size: "3x",
    spin: true
  })), formSubmissionError && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formError
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Icon */], {
    icon: free_solid_svg_icons_["faTimes"],
    className: Contact_styles_default.a.formErrorIcon,
    size: "3x"
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Paragraph */], null, "Oups, we're having difficulties submitting your responses. Please try again later."), /*#__PURE__*/external_react_default.a.createElement(atoms["a" /* Button */], {
    to: routes["c" /* homePage */].path
  }, "Back to Home")), formSent && !formSubmissionError && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formSent
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["f" /* Icon */], {
    icon: free_solid_svg_icons_["faCheck"],
    className: Contact_styles_default.a.formSentIcon,
    size: "3x"
  }), /*#__PURE__*/external_react_default.a.createElement(atoms["i" /* Paragraph */], null, "Your responses have been successfuly submitted"), /*#__PURE__*/external_react_default.a.createElement(atoms["a" /* Button */], {
    to: routes["c" /* homePage */].path
  }, "Back to Home")), groups.map(function (j) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      key: j.name,
      className: Contact_styles_default.a.section
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: Contact_styles_default.a.subsection
    }, j.title), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: Contact_styles_default.a.formWrapper
    }, j.inputs.map(function (i) {
      return i.type === 'textarea' ? /*#__PURE__*/external_react_default.a.createElement(atoms["l" /* Textarea */], {
        key: i.name,
        className: Contact_styles_default.a.input,
        name: i.name,
        label: i.label,
        type: i.type,
        validator: i.validator,
        err: i.errors
      }) : /*#__PURE__*/external_react_default.a.createElement(atoms["g" /* Input */], {
        key: i.name,
        className: Contact_styles_default.a.input,
        name: i.name,
        label: i.label,
        type: i.type,
        validator: i.validator,
        err: i.errors
      });
    })));
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Contact_styles_default.a.formActions
  }, /*#__PURE__*/external_react_default.a.createElement(atoms["a" /* Button */], {
    className: Contact_styles_default.a.submit,
    onClick: submit
  }, "Send"))))))));
};
/* harmony default export */ var components_Contact = (Contact_Contact);
// CONCATENATED MODULE: /home/runner/work/xavbiz.github.io/xavbiz.github.io/site/src/components/index.js





/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._3jtk2BAZcP7zTii3yoswA1{overflow:hidden}._3FkQdeobiaqkagaGzRLWjv._3jX_TIpOeIKSFvK-18QF2C{-webkit-animation:_3FkQdeobiaqkagaGzRLWjv .5s ease-in-out;animation:_3FkQdeobiaqkagaGzRLWjv .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}._1cJAiNoVelaWgZmiq-j-pv._3jX_TIpOeIKSFvK-18QF2C{-webkit-animation:_1cJAiNoVelaWgZmiq-j-pv .5s ease-in-out;animation:_1cJAiNoVelaWgZmiq-j-pv .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}._3sKI-yX12FryJKf_kvPsVA._3jX_TIpOeIKSFvK-18QF2C{-webkit-animation:_3sKI-yX12FryJKf_kvPsVA .5s ease-in-out;animation:_3sKI-yX12FryJKf_kvPsVA .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}@-webkit-keyframes _3FkQdeobiaqkagaGzRLWjv{0%{transform:translateX(-100%);opacity:0}}@keyframes _3FkQdeobiaqkagaGzRLWjv{0%{transform:translateX(-100%);opacity:0}}@-webkit-keyframes _1cJAiNoVelaWgZmiq-j-pv{0%{transform:translateX(100%);opacity:0}}@keyframes _1cJAiNoVelaWgZmiq-j-pv{0%{transform:translateX(100%);opacity:0}}@-webkit-keyframes _3sKI-yX12FryJKf_kvPsVA{0%{transform:translateY(-100%);opacity:0}}@keyframes _3sKI-yX12FryJKf_kvPsVA{0%{transform:translateY(-100%);opacity:0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAQ,eAAe,CAAC,iDAAoB,yDAAkC,CAAlC,iDAAkC,CAAC,oCAAoC,CAAC,SAAS,CAAC,iDAAqB,yDAAmC,CAAnC,iDAAmC,CAAC,oCAAoC,CAAC,SAAS,CAAC,iDAAmB,yDAAiC,CAAjC,iDAAiC,CAAC,oCAAoC,CAAC,SAAS,CAAC,2CAAoB,GAAG,2BAA2B,CAAC,SAAS,CAAC,CAA7D,mCAAoB,GAAG,2BAA2B,CAAC,SAAS,CAAC,CAAC,2CAAqB,GAAG,0BAA0B,CAAC,SAAS,CAAC,CAA7D,mCAAqB,GAAG,0BAA0B,CAAC,SAAS,CAAC,CAAC,2CAAmB,GAAG,2BAA2B,CAAC,SAAS,CAAC,CAA5D,mCAAmB,GAAG,2BAA2B,CAAC,SAAS,CAAC","file":"styles.scss","sourcesContent":[".parent{overflow:hidden}.fromLeft.isVisible{animation:fromLeft .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}.fromRight.isVisible{animation:fromRight .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}.fromTop.isVisible{animation:fromTop .5s ease-in-out;transition:transform .5s ease-in-out;opacity:1}@keyframes fromLeft{0%{transform:translateX(-100%);opacity:0}}@keyframes fromRight{0%{transform:translateX(100%);opacity:0}}@keyframes fromTop{0%{transform:translateY(-100%);opacity:0}}"]}]);

// Exports
exports.locals = {
	"parent": "_3jtk2BAZcP7zTii3yoswA1",
	"fromLeft": "_3FkQdeobiaqkagaGzRLWjv",
	"isVisible": "_3jX_TIpOeIKSFvK-18QF2C",
	"fromRight": "_1cJAiNoVelaWgZmiq-j-pv",
	"fromTop": "_3sKI-yX12FryJKf_kvPsVA"
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Imports
var urlEscape = __webpack_require__(49);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(79));

// Module
exports.push([module.i, "._2NSeQ-e7-w_CH_TQzO-Mwo{background-image:url(" + ___CSS_LOADER_URL___0___ + ");background-position:center;background-size:cover}._1a-Lx8kMpAvFSc0nDZkcBb{margin-bottom:0}._7MnmtNpqZzTJ7RabFYsGg{margin:80px auto 0;padding:100px 0}._2G2emDnU5WgQE9xHogQ15H{background-color:rgba(255,255,255,.5);position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem}._21huClXiSzV8JPjECbdPqq{color:#072227;text-align:left;font-size:2rem;display:block;padding-bottom:.5rem}._21huClXiSzV8JPjECbdPqq span{display:block;font-weight:400;line-height:1.2}._PcfCbcy0B9_K2m4I7gMs{margin-top:60px;margin:36px 0 18px}._3k6K6dsbp3A3PlbFhlj6bU{text-align:center;font-size:1.75rem;line-height:1.3;color:#707070;padding:3rem 0}._3k6K6dsbp3A3PlbFhlj6bU strong{color:#35858b}.yJTYHzRpZRS1ad1UI-8jv{margin-bottom:1.25rem}._dl5C1Ywx2i4Y70-rpOg7{font-size:3rem;font-weight:600;color:#35858b}._CKMjQ1wTnUJlXxCBB5Fg{font-size:1.75rem;font-style:italic;color:#fff}._2PhqtO6-ACT6R8SzH9fZIr{display:flex;justify-content:center}._2PhqtO6-ACT6R8SzH9fZIr>a:first-of-type{margin-right:1.25rem}.YYdrIfQcaIh5Pq08_-O39{display:flex;flex-direction:column;justify-content:center;text-align:center}._1WFHozQcUdJzkwc-AfNYkj{color:#707070;font-size:1rem;display:block;padding-top:1.5rem}._36viGxH5TQvHT4bnsfYWz2{display:flex;justify-content:center;margin-bottom:1.25rem}._36viGxH5TQvHT4bnsfYWz2>button{margin-right:1.25rem}._36viGxH5TQvHT4bnsfYWz2>button:last-of-type{margin-right:0}._19f6DYZCjcWN068aLVXirX{text-align:left}._1IxnxAH4v_1yptr2Y-BThP{padding-left:3rem}._3S_0IFX509EMzwfXoE3WO{font-size:1.1rem;line-height:0;font-weight:500}._2Ga6pG2T5dX8gEdmoELIYr{color:#35858b;font-weight:600}@media(min-width: 760px){._7MnmtNpqZzTJ7RabFYsGg{max-width:960px}._2G2emDnU5WgQE9xHogQ15H{padding:0 50px;background:0}._21huClXiSzV8JPjECbdPqq span{color:#fff;font-size:50px;font-weight:700;text-shadow:1px 1px #707070}._3k6K6dsbp3A3PlbFhlj6bU{font-size:2.2rem;padding:4.5rem 0;font-weight:300}.YYdrIfQcaIh5Pq08_-O39{padding-top:0}._36viGxH5TQvHT4bnsfYWz2{margin-bottom:0}.B_JTQTtc3nUy-3SNetWxF{margin-top:calc(2 * 1.25rem)}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAI,8CAAoD,CAAC,0BAA0B,CAAC,qBAAqB,CAAC,yBAA8B,eAAe,CAAC,wBAAc,kBAAkB,CAAC,eAAe,CAAC,yBAAW,qCAAqC,CAAC,iBAAiB,CAAC,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,YAAY,CAAC,yBAAO,aAAa,CAAC,eAAe,CAAC,cAAc,CAAC,aAAa,CAAC,oBAAoB,CAAC,8BAAY,aAAa,CAAC,eAAe,CAAC,eAAe,CAAC,uBAAc,eAAe,CAAC,kBAAkB,CAAC,yBAAM,iBAAiB,CAAC,iBAAiB,CAAC,eAAe,CAAC,aAAa,CAAC,cAAc,CAAC,gCAAa,aAAa,CAAC,uBAAU,qBAAqB,CAAC,uBAAM,cAAc,CAAC,eAAe,CAAC,aAAa,CAAC,uBAAO,iBAAiB,CAAC,iBAAiB,CAAC,UAAU,CAAC,yBAAK,YAAY,CAAC,sBAAsB,CAAC,yCAAqB,oBAAoB,CAAC,uBAAW,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,yBAAe,aAAa,CAAC,cAAc,CAAC,aAAa,CAAC,kBAAkB,CAAC,yBAAc,YAAY,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,gCAAqB,oBAAoB,CAAC,6CAAkC,cAAc,CAAC,yBAAM,eAAe,CAAC,yBAAM,iBAAiB,CAAC,wBAAmB,gBAAgB,CAAC,aAAa,CAAC,eAAe,CAAC,yBAAW,aAAa,CAAC,eAAe,CAAC,yBAAyB,wBAAc,eAAe,CAAC,yBAAW,cAAc,CAAC,YAAY,CAAC,8BAAY,UAAU,CAAC,cAAc,CAAC,eAAe,CAAC,2BAA2B,CAAC,yBAAM,gBAAgB,CAAC,gBAAgB,CAAC,eAAe,CAAC,uBAAW,aAAa,CAAC,yBAAc,eAAe,CAAC,uBAAW,4BAA4B,CAAC","file":"styles.scss","sourcesContent":[".bg{background-image:url(\"~assets/coconuts-nursery.jpg\");background-position:center;background-size:cover}.paragraphWithoutBottomMargin{margin-bottom:0}.titleWrapper{margin:80px auto 0;padding:100px 0}.titleText{background-color:rgba(255,255,255,.5);position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem}.title{color:#072227;text-align:left;font-size:2rem;display:block;padding-bottom:.5rem}.title span{display:block;font-weight:400;line-height:1.2}.titleButtons{margin-top:60px;margin:36px 0 18px}.hero{text-align:center;font-size:1.75rem;line-height:1.3;color:#707070;padding:3rem 0}.hero strong{color:#35858b}.dropdown{margin-bottom:1.25rem}.step{font-size:3rem;font-weight:600;color:#35858b}.quote{font-size:1.75rem;font-style:italic;color:#fff}.cta{display:flex;justify-content:center}.cta>a:first-of-type{margin-right:1.25rem}.container{display:flex;flex-direction:column;justify-content:center;text-align:center}.containerSpan{color:#707070;font-size:1rem;display:block;padding-top:1.5rem}.containerCta{display:flex;justify-content:center;margin-bottom:1.25rem}.containerCta>button{margin-right:1.25rem}.containerCta>button:last-of-type{margin-right:0}.left{text-align:left}.list{padding-left:3rem}.exceptionSubtitle{font-size:1.1rem;line-height:0;font-weight:500}.important{color:#35858b;font-weight:600}@media(min-width: 760px){.titleWrapper{max-width:960px}.titleText{padding:0 50px;background:0}.title span{color:#fff;font-size:50px;font-weight:700;text-shadow:1px 1px #707070}.hero{font-size:2.2rem;padding:4.5rem 0;font-weight:300}.container{padding-top:0}.containerCta{margin-bottom:0}.marginTop{margin-top:calc(2 * 1.25rem)}}"]}]);

// Exports
exports.locals = {
	"bg": "_2NSeQ-e7-w_CH_TQzO-Mwo",
	"paragraphWithoutBottomMargin": "_1a-Lx8kMpAvFSc0nDZkcBb",
	"titleWrapper": "_7MnmtNpqZzTJ7RabFYsGg",
	"titleText": "_2G2emDnU5WgQE9xHogQ15H",
	"title": "_21huClXiSzV8JPjECbdPqq",
	"titleButtons": "_PcfCbcy0B9_K2m4I7gMs",
	"hero": "_3k6K6dsbp3A3PlbFhlj6bU",
	"dropdown": "yJTYHzRpZRS1ad1UI-8jv",
	"step": "_dl5C1Ywx2i4Y70-rpOg7",
	"quote": "_CKMjQ1wTnUJlXxCBB5Fg",
	"cta": "_2PhqtO6-ACT6R8SzH9fZIr",
	"container": "YYdrIfQcaIh5Pq08_-O39",
	"containerSpan": "_1WFHozQcUdJzkwc-AfNYkj",
	"containerCta": "_36viGxH5TQvHT4bnsfYWz2",
	"left": "_19f6DYZCjcWN068aLVXirX",
	"list": "_1IxnxAH4v_1yptr2Y-BThP",
	"exceptionSubtitle": "_3S_0IFX509EMzwfXoE3WO",
	"important": "_2Ga6pG2T5dX8gEdmoELIYr",
	"marginTop": "B_JTQTtc3nUy-3SNetWxF"
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(35);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(70);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(72);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(44);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(46);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(45);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(36);

var _helpers = __webpack_require__(73);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(69)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._2xqDeAvlJc1JTqGgXo54Vq{width:100%;max-width:calc(100% - 1.75rem);margin:0 auto}._2lG3osT9eqsJWSSRxpKqdu{width:100%;max-width:100%;padding:0;display:grid;grid-template-rows:auto}._3FrrlGAuICnkqvW5cw9QQ6,._3AEoXTJOB7A0sGLlxL-aQl,._-5O5cq6ieRLaghItPxH9A,.zy2zTRKKL2s-Z4tI_JhqE,._1VqCKrehYXutUX-Qx5Q6iD{grid-template-columns:100%;-moz-column-gap:0;column-gap:0}@media(min-width: 760px){._2xqDeAvlJc1JTqGgXo54Vq{max-width:960px}._2lG3osT9eqsJWSSRxpKqdu{padding:0 1.25rem;-moz-column-gap:1.5rem;column-gap:1.5rem}._3FrrlGAuICnkqvW5cw9QQ6{grid-template-columns:100%;-moz-column-gap:0;column-gap:0}._3AEoXTJOB7A0sGLlxL-aQl{grid-template-columns:50% 50%}._-5O5cq6ieRLaghItPxH9A{grid-template-columns:33.33% 33.33% 33.33%}.zy2zTRKKL2s-Z4tI_JhqE{grid-template-columns:minmax(20%, 25%) minmax(20%, 25%) minmax(20%, 25%) minmax(20%, 25%)}._1VqCKrehYXutUX-Qx5Q6iD{grid-template-columns:20% 20% 20% 20% 20%}._2CLm4bZ1laA-JMQ9UEUTMK{grid-area:auto/1/auto/span 1}._1dbG1yfyMWwjDbslurhnW_{grid-area:auto/1/auto/span 2}._2bC34Gbvu-UqJEJamGwObh{grid-area:auto/1/auto/span 3}._3UVmgH7WTEkhbesgZIqEjO{grid-area:auto/1/auto/span 4}.fbmXJR4ry7Jxse2JM9r6x{grid-area:auto/1/auto/span 5}._2skhCxy29wj10riHe1ZxMI{grid-area:auto/2/auto/span 1}.Ii9mKEPNBNX1QGnHCnZtL{grid-area:auto/2/auto/span 2}._2Lf9ZaSv7JWWZHmebPFv9_{grid-area:auto/2/auto/span 3}._3hOHPFecxPTwfMv55s07fL{grid-area:auto/2/auto/span 4}._3VuBs51rLrVu-FUdEsOAYs{grid-area:auto/3/auto/span 1}._2YkK3io9jCXBt4dFIKHZNv{grid-area:auto/3/auto/span 2}.V2cW8u_8JStIyCGBuS-pp{grid-area:auto/3/auto/span 3}.jNmxNVWMLWeoa3YtcOXvI{grid-area:auto/4/auto/span 1}._2PKgcvf-2DDA30T8TrP8hF{grid-area:auto/4/auto/span 2}._1lnAgL3dRCRGdSEClZCykg{grid-area:auto/5/auto/span 1}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,UAAU,CAAC,8BAA8B,CAAC,aAAa,CAAC,yBAAS,UAAU,CAAC,cAAc,CAAC,SAAS,CAAC,YAAY,CAAC,uBAAuB,CAAC,0HAAmC,0BAA0B,CAAC,iBAAW,CAAX,YAAY,CAAC,yBAAyB,yBAAM,eAAe,CAAC,yBAAS,iBAAiB,CAAC,sBAAgB,CAAhB,iBAAiB,CAAC,yBAAO,0BAA0B,CAAC,iBAAW,CAAX,YAAY,CAAC,yBAAO,6BAA6B,CAAC,wBAAO,0CAA0C,CAAC,uBAAO,yFAAyF,CAAC,yBAAO,yCAAyC,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,uBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,uBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,uBAAQ,4BAA4B,CAAC,uBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC,yBAAQ,4BAA4B,CAAC","file":"styles.scss","sourcesContent":[".grid{width:100%;max-width:calc(100% - 1.75rem);margin:0 auto}.content{width:100%;max-width:100%;padding:0;display:grid;grid-template-rows:auto}.grid1,.grid2,.grid3,.grid4,.grid5{grid-template-columns:100%;column-gap:0}@media(min-width: 760px){.grid{max-width:960px}.content{padding:0 1.25rem;column-gap:1.5rem}.grid1{grid-template-columns:100%;column-gap:0}.grid2{grid-template-columns:50% 50%}.grid3{grid-template-columns:33.33% 33.33% 33.33%}.grid4{grid-template-columns:minmax(20%, 25%) minmax(20%, 25%) minmax(20%, 25%) minmax(20%, 25%)}.grid5{grid-template-columns:20% 20% 20% 20% 20%}.item11{grid-area:auto/1/auto/span 1}.item12{grid-area:auto/1/auto/span 2}.item13{grid-area:auto/1/auto/span 3}.item14{grid-area:auto/1/auto/span 4}.item15{grid-area:auto/1/auto/span 5}.item21{grid-area:auto/2/auto/span 1}.item22{grid-area:auto/2/auto/span 2}.item23{grid-area:auto/2/auto/span 3}.item24{grid-area:auto/2/auto/span 4}.item31{grid-area:auto/3/auto/span 1}.item32{grid-area:auto/3/auto/span 2}.item33{grid-area:auto/3/auto/span 3}.item41{grid-area:auto/4/auto/span 1}.item42{grid-area:auto/4/auto/span 2}.item51{grid-area:auto/5/auto/span 1}}"]}]);

// Exports
exports.locals = {
	"grid": "_2xqDeAvlJc1JTqGgXo54Vq",
	"content": "_2lG3osT9eqsJWSSRxpKqdu",
	"grid1": "_3FrrlGAuICnkqvW5cw9QQ6",
	"grid2": "_3AEoXTJOB7A0sGLlxL-aQl",
	"grid3": "_-5O5cq6ieRLaghItPxH9A",
	"grid4": "zy2zTRKKL2s-Z4tI_JhqE",
	"grid5": "_1VqCKrehYXutUX-Qx5Q6iD",
	"item11": "_2CLm4bZ1laA-JMQ9UEUTMK",
	"item12": "_1dbG1yfyMWwjDbslurhnW_",
	"item13": "_2bC34Gbvu-UqJEJamGwObh",
	"item14": "_3UVmgH7WTEkhbesgZIqEjO",
	"item15": "fbmXJR4ry7Jxse2JM9r6x",
	"item21": "_2skhCxy29wj10riHe1ZxMI",
	"item22": "Ii9mKEPNBNX1QGnHCnZtL",
	"item23": "_2Lf9ZaSv7JWWZHmebPFv9_",
	"item24": "_3hOHPFecxPTwfMv55s07fL",
	"item31": "_3VuBs51rLrVu-FUdEsOAYs",
	"item32": "_2YkK3io9jCXBt4dFIKHZNv",
	"item33": "V2cW8u_8JStIyCGBuS-pp",
	"item41": "jNmxNVWMLWeoa3YtcOXvI",
	"item42": "_2PKgcvf-2DDA30T8TrP8hF",
	"item51": "_1lnAgL3dRCRGdSEClZCykg"
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._2tNxd4O7KHO6bItyDBhQ0d{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2.25rem 0;background-color:#35858b}._3_hTn0sKicA2TFY8qK7Ixo{background-color:#e3e3e3}._2IDxAPIhkEz-3lUzpw1Orl{text-align:center;font-weight:600;font-size:1.5rem}._2BYyCNvfFv20TYZl07X88R{display:flex;flex-direction:column;align-items:center;color:#fff;max-width:960px;margin:0 auto;text-align:center}._2BYyCNvfFv20TYZl07X88R>button,._2BYyCNvfFv20TYZl07X88R>a{margin-top:1.25rem}._2BYyCNvfFv20TYZl07X88R>button:first-of-type,._2BYyCNvfFv20TYZl07X88R>a:first-of-type{margin-top:0}._2IDxAPIhkEz-3lUzpw1Orl,._2BYyCNvfFv20TYZl07X88R{width:100%;max-width:calc(100% - 1.75rem)}@media(min-width: 760px){._2IDxAPIhkEz-3lUzpw1Orl{font-size:2rem}._2IDxAPIhkEz-3lUzpw1Orl,._2BYyCNvfFv20TYZl07X88R{flex-direction:row;max-width:960px;justify-content:center}._2IDxAPIhkEz-3lUzpw1Orl>button,._2IDxAPIhkEz-3lUzpw1Orl>a,._2BYyCNvfFv20TYZl07X88R>button,._2BYyCNvfFv20TYZl07X88R>a{margin:0 15px}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,yBAAM,wBAAwB,CAAC,yBAAO,iBAAiB,CAAC,eAAe,CAAC,gBAAgB,CAAC,yBAAS,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,UAAU,CAAC,eAAe,CAAC,aAAa,CAAC,iBAAiB,CAAC,2DAA2B,kBAAkB,CAAC,uFAAuD,YAAY,CAAC,kDAAgB,UAAU,CAAC,8BAA8B,CAAC,yBAAyB,yBAAO,cAAc,CAAC,kDAAgB,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,sHAAkD,aAAa,CAAC","file":"styles.scss","sourcesContent":[".hero{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2.25rem 0;background-color:#35858b}.grey{background-color:#e3e3e3}.title{text-align:center;font-weight:600;font-size:1.5rem}.content{display:flex;flex-direction:column;align-items:center;color:#fff;max-width:960px;margin:0 auto;text-align:center}.content>button,.content>a{margin-top:1.25rem}.content>button:first-of-type,.content>a:first-of-type{margin-top:0}.title,.content{width:100%;max-width:calc(100% - 1.75rem)}@media(min-width: 760px){.title{font-size:2rem}.title,.content{flex-direction:row;max-width:960px;justify-content:center}.title>button,.title>a,.content>button,.content>a{margin:0 15px}}"]}]);

// Exports
exports.locals = {
	"hero": "_2tNxd4O7KHO6bItyDBhQ0d",
	"grey": "_3_hTn0sKicA2TFY8qK7Ixo",
	"title": "_2IDxAPIhkEz-3lUzpw1Orl",
	"content": "_2BYyCNvfFv20TYZl07X88R"
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(36);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(71)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._3VR8Rb7f38n7Hd0YVwrkHy{border:2px solid #35858b;color:#fff;display:inline-block;background-color:#35858b;padding:1rem 1.5rem;cursor:pointer;font-weight:600;text-align:center;display:flex;align-items:center;justify-content:center}._3VR8Rb7f38n7Hd0YVwrkHy:hover{background-color:#fff;color:#35858b}._14wbftlkNtATnwoI-UcI6-{background-color:#fff;color:#35858b}._14wbftlkNtATnwoI-UcI6-:hover{background-color:#35858b;color:#fff}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAQ,wBAAwB,CAAC,UAAU,CAAC,oBAAoB,CAAC,wBAAwB,CAAC,mBAAmB,CAAC,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,+BAAc,qBAAqB,CAAC,aAAa,CAAC,yBAAS,qBAAqB,CAAC,aAAa,CAAC,+BAAe,wBAAwB,CAAC,UAAU","file":"styles.scss","sourcesContent":[".button{border:2px solid #35858b;color:#fff;display:inline-block;background-color:#35858b;padding:1rem 1.5rem;cursor:pointer;font-weight:600;text-align:center;display:flex;align-items:center;justify-content:center}.button:hover{background-color:#fff;color:#35858b}.inverse{background-color:#fff;color:#35858b}.inverse:hover{background-color:#35858b;color:#fff}"]}]);

// Exports
exports.locals = {
	"button": "_3VR8Rb7f38n7Hd0YVwrkHy",
	"inverse": "_14wbftlkNtATnwoI-UcI6-"
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._5syOO1mI1C35KaKUGKTbG{margin:1.75rem 0;color:inherit;line-height:1.6;text-align:justify}._5syOO1mI1C35KaKUGKTbG b,._5syOO1mI1C35KaKUGKTbG strong{font-weight:500}._3HOKTcQSRSpfw1Mciv8_as{font-weight:500}._2_qOV5iS-xx5Fn6tHE9C2O{font-size:1.25rem}._3XAR85sEmByq6z0RdAzL5q{margin-top:0}@media(min-width: 760px){._7Q8E056kjU-DW23-QYVrw{margin:2.5rem 0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,wBAAG,gBAAgB,CAAC,aAAa,CAAC,eAAe,CAAC,kBAAkB,CAAC,yDAAe,eAAe,CAAC,yBAAQ,eAAe,CAAC,yBAAU,iBAAiB,CAAC,yBAAa,YAAY,CAAC,yBAAyB,wBAAO,eAAe,CAAC","file":"styles.scss","sourcesContent":[".p{margin:1.75rem 0;color:inherit;line-height:1.6;text-align:justify}.p b,.p strong{font-weight:500}.strong{font-weight:500}.emphasis{font-size:1.25rem}.noTopMargin{margin-top:0}@media(min-width: 760px){.title{margin:2.5rem 0}}"]}]);

// Exports
exports.locals = {
	"p": "_5syOO1mI1C35KaKUGKTbG",
	"strong": "_3HOKTcQSRSpfw1Mciv8_as",
	"emphasis": "_2_qOV5iS-xx5Fn6tHE9C2O",
	"noTopMargin": "_3XAR85sEmByq6z0RdAzL5q",
	"title": "_7Q8E056kjU-DW23-QYVrw"
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._3tos4RnxitHp2uUGnGEW3t{display:flex;flex-wrap:wrap;flex-direction:column;overflow:hidden}.JtO4RvpSv9G4JT9zAA3pn{display:flex;max-height:0;transition:max-height .5s ease-in-out}._1WywFi8Imyzjk22d3Pw5X4{max-height:1000px}._3Nn8C8W9bvzD9nbFOK_1gM{cursor:pointer}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAS,YAAY,CAAC,cAAc,CAAC,qBAAqB,CAAC,eAAe,CAAC,uBAAS,YAAY,CAAC,YAAY,CAAC,qCAAqC,CAAC,yBAAI,iBAAiB,CAAC,yBAAS,cAAc","file":"styles.scss","sourcesContent":[".wrapper{display:flex;flex-wrap:wrap;flex-direction:column;overflow:hidden}.content{display:flex;max-height:0;transition:max-height .5s ease-in-out}.on{max-height:1000px}.trigger{cursor:pointer}"]}]);

// Exports
exports.locals = {
	"wrapper": "_3tos4RnxitHp2uUGnGEW3t",
	"content": "JtO4RvpSv9G4JT9zAA3pn",
	"on": "_1WywFi8Imyzjk22d3Pw5X4",
	"trigger": "_3Nn8C8W9bvzD9nbFOK_1gM"
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._1Gw2TeAL9u86EF9o8WhtGx{overflow:hidden}._2n8DeO3fO1TrjBYx8IcCar{position:relative}._tegdV_glQWYEGWdyKtad{position:absolute;top:0;left:50%;transform:translate(-50%);width:100%;min-width:600px;max-width:calc(calc(100% - 1.75rem) - 0.875rem);margin:0 auto}._3BWNNIiTP64_e5Z7XcGW7O{position:relative;margin:80px 0 0}._1BYi9lncL1ghQaRnMPNebw{margin:0 0 80px}._2Gs5LzAWp_RXoRRjpHyj8L{margin:0 0 80px}._2oZpcFzTOqHF63peawPIWQ{margin-top:0}._2j6khUnfjb2-TB7Y2kGbKA+div,._3CZTQXLIcqca9KxNas-SF8+div{margin-top:80px}._2yZ7I0oQSfWBYuNejOwH8Z+div{margin-top:80px}._1ZVOe3Rcj2dIehrcOypjfp{min-width:200%;top:50%;transform:translate(-50%, -50%)}._11A2H8FDKvUYP_DkMj8e4H{width:300%}._11A2H8FDKvUYP_DkMj8e4H+div{margin-top:400px}@media(min-width: 760px){._tegdV_glQWYEGWdyKtad{max-width:960px}._2j6khUnfjb2-TB7Y2kGbKA+div,._3CZTQXLIcqca9KxNas-SF8+div,._11A2H8FDKvUYP_DkMj8e4H+div{margin-top:0}._1ZVOe3Rcj2dIehrcOypjfp{min-width:960px;max-width:960px;top:0%;transform:translate(-50%, 0)}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAS,eAAe,CAAC,yBAAS,iBAAiB,CAAC,uBAAI,iBAAiB,CAAC,KAAK,CAAC,QAAQ,CAAC,yBAAyB,CAAC,UAAU,CAAC,eAAe,CAAC,+CAA+C,CAAC,aAAa,CAAC,yBAAS,iBAAiB,CAAC,eAAe,CAAC,yBAAQ,eAAe,CAAC,yBAAc,eAAe,CAAC,yBAAa,YAAY,CAAC,0DAAqB,eAAe,CAAC,6BAAS,eAAe,CAAC,yBAAM,cAAc,CAAC,OAAO,CAAC,+BAA+B,CAAC,yBAAO,UAAU,CAAC,6BAAW,gBAAgB,CAAC,yBAAyB,uBAAI,eAAe,CAAC,uFAAgC,YAAY,CAAC,yBAAM,eAAe,CAAC,eAAe,CAAC,MAAM,CAAC,4BAA4B,CAAC","file":"styles.scss","sourcesContent":[".section{overflow:hidden}.wrapper{position:relative}.bg{position:absolute;top:0;left:50%;transform:translate(-50%);width:100%;min-width:600px;max-width:calc(calc(100% - 1.75rem) - 0.875rem);margin:0 auto}.content{position:relative;margin:80px 0 0}.margin{margin:0 0 80px}.marginBottom{margin:0 0 80px}.noTopMargin{margin-top:0}.right+div,.left+div{margin-top:80px}.top+div{margin-top:80px}.home{min-width:200%;top:50%;transform:translate(-50%, -50%)}.marie{width:300%}.marie+div{margin-top:400px}@media(min-width: 760px){.bg{max-width:960px}.right+div,.left+div,.marie+div{margin-top:0}.home{min-width:960px;max-width:960px;top:0%;transform:translate(-50%, 0)}}"]}]);

// Exports
exports.locals = {
	"section": "_1Gw2TeAL9u86EF9o8WhtGx",
	"wrapper": "_2n8DeO3fO1TrjBYx8IcCar",
	"bg": "_tegdV_glQWYEGWdyKtad",
	"content": "_3BWNNIiTP64_e5Z7XcGW7O",
	"margin": "_1BYi9lncL1ghQaRnMPNebw",
	"marginBottom": "_2Gs5LzAWp_RXoRRjpHyj8L",
	"noTopMargin": "_2oZpcFzTOqHF63peawPIWQ",
	"right": "_2j6khUnfjb2-TB7Y2kGbKA",
	"left": "_3CZTQXLIcqca9KxNas-SF8",
	"top": "_2yZ7I0oQSfWBYuNejOwH8Z",
	"home": "_1ZVOe3Rcj2dIehrcOypjfp",
	"marie": "_11A2H8FDKvUYP_DkMj8e4H"
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_4__);






function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Root"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Carbon Free Planet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#5bbad5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#da532c"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ffffff"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* Header */ "c"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Router"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    path: "*"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* Footer */ "b"], null)));
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._6H4_LoO3R9l-B_XhD85E-{font-size:1.75rem;font-weight:700;letter-spacing:.1;margin-bottom:.875rem;color:#4fbdba}.PHn7MK9t_MzTnZeWDNYkp{margin:0}._32FpEo3_gKdGts7WyLrDbr{text-align:center}@media(min-width: 760px){._6H4_LoO3R9l-B_XhD85E-{font-size:2.2rem;margin-bottom:1.25rem}.PHn7MK9t_MzTnZeWDNYkp{margin:0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,wBAAO,iBAAiB,CAAC,eAAe,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,aAAa,CAAC,uBAAU,QAAQ,CAAC,yBAAU,iBAAiB,CAAC,yBAAyB,wBAAO,gBAAgB,CAAC,qBAAqB,CAAC,uBAAU,QAAQ,CAAC","file":"styles.scss","sourcesContent":[".title{font-size:1.75rem;font-weight:700;letter-spacing:.1;margin-bottom:.875rem;color:#4fbdba}.noMargin{margin:0}.centered{text-align:center}@media(min-width: 760px){.title{font-size:2.2rem;margin-bottom:1.25rem}.noMargin{margin:0}}"]}]);

// Exports
exports.locals = {
	"title": "_6H4_LoO3R9l-B_XhD85E-",
	"noMargin": "PHn7MK9t_MzTnZeWDNYkp",
	"centered": "_32FpEo3_gKdGts7WyLrDbr"
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._1sOx5UaK4nXS1xUVskijxw{font-size:1.75rem;font-weight:500;letter-spacing:.1;margin-bottom:.875rem;color:#35858b}._3mQ4FijufuiSERJd_VEQZr{font-size:1.2rem;margin-bottom:0;color:#35858b;text-transform:uppercase;text-align:left}.KIe49P6q--N1JRU0rpswA{margin-top:.875rem;font-size:1.3rem;font-weight:500;display:inline-block}@media(min-width: 760px){._1sOx5UaK4nXS1xUVskijxw{font-size:2.2rem;margin-bottom:1.25rem}.KIe49P6q--N1JRU0rpswA{margin-top:1.25rem}._3mQ4FijufuiSERJd_VEQZr{font-size:1.2rem;margin-bottom:0}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAO,iBAAiB,CAAC,eAAe,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,aAAa,CAAC,yBAAO,gBAAgB,CAAC,eAAe,CAAC,aAAa,CAAC,wBAAwB,CAAC,eAAe,CAAC,uBAAK,kBAAkB,CAAC,gBAAgB,CAAC,eAAe,CAAC,oBAAoB,CAAC,yBAAyB,yBAAO,gBAAgB,CAAC,qBAAqB,CAAC,uBAAK,kBAAkB,CAAC,yBAAO,gBAAgB,CAAC,eAAe,CAAC","file":"styles.scss","sourcesContent":[".title{font-size:1.75rem;font-weight:500;letter-spacing:.1;margin-bottom:.875rem;color:#35858b}.small{font-size:1.2rem;margin-bottom:0;color:#35858b;text-transform:uppercase;text-align:left}.sub{margin-top:.875rem;font-size:1.3rem;font-weight:500;display:inline-block}@media(min-width: 760px){.title{font-size:2.2rem;margin-bottom:1.25rem}.sub{margin-top:1.25rem}.small{font-size:1.2rem;margin-bottom:0}}"]}]);

// Exports
exports.locals = {
	"title": "_1sOx5UaK4nXS1xUVskijxw",
	"small": "_3mQ4FijufuiSERJd_VEQZr",
	"sub": "KIe49P6q--N1JRU0rpswA"
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(35);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(25);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._2yPsAG5vu06G2FTNy6H1Kj{width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}._2yPsAG5vu06G2FTNy6H1Kj img{width:100%;height:auto}._1SMf3ov8_6Y_MWo0zR7HUT img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAS,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,CAAC,6BAAa,UAAU,CAAC,WAAW,CAAC,6BAAW,UAAU,CAAC,WAAW,CAAC,mBAAe,CAAf,gBAAgB","file":"styles.scss","sourcesContent":[".picture{width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.picture img{width:100%;height:auto}.cover img{width:100%;height:100%;object-fit:cover}"]}]);

// Exports
exports.locals = {
	"picture": "_2yPsAG5vu06G2FTNy6H1Kj",
	"cover": "_1SMf3ov8_6Y_MWo0zR7HUT"
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._1R6K-clUTQcWxo93MMeOP4{text-decoration:underline;-webkit-text-decoration-color:#35858b;text-decoration-color:#35858b;text-decoration-thickness:3px}._1R6K-clUTQcWxo93MMeOP4:hover{background-color:#35858b}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,yBAAyB,CAAC,qCAA6B,CAA7B,6BAA6B,CAAC,6BAA6B,CAAC,+BAAY,wBAAwB","file":"styles.scss","sourcesContent":[".link{text-decoration:underline;text-decoration-color:#35858b;text-decoration-thickness:3px}.link:hover{background-color:#35858b}"]}]);

// Exports
exports.locals = {
	"link": "_1R6K-clUTQcWxo93MMeOP4"
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._3sj7jcocXPQHrhhrY9YdSS{margin:0;font-weight:500;display:flex;font-size:1.2rem;align-items:flex-start;border-left:5px solid #35858b;padding-left:15px}._1VToAE7Zt1AtJzPeg4MfsH{display:none;font-size:3rem;line-height:1;color:#35858b;font-weight:900;margin:0 1.6rem 0 0}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAG,QAAQ,CAAC,eAAe,CAAC,YAAY,CAAC,gBAAgB,CAAC,sBAAsB,CAAC,6BAA6B,CAAC,iBAAiB,CAAC,yBAAO,YAAY,CAAC,cAAc,CAAC,aAAa,CAAC,aAAa,CAAC,eAAe,CAAC,mBAAmB","file":"styles.scss","sourcesContent":[".p{margin:0;font-weight:500;display:flex;font-size:1.2rem;align-items:flex-start;border-left:5px solid #35858b;padding-left:15px}.quote{display:none;font-size:3rem;line-height:1;color:#35858b;font-weight:900;margin:0 1.6rem 0 0}"]}]);

// Exports
exports.locals = {
	"p": "_3sj7jcocXPQHrhhrY9YdSS",
	"quote": "_1VToAE7Zt1AtJzPeg4MfsH"
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("/home/runner/work/xavbiz.github.io/xavbiz.github.io/site/node_modules/react-static/lib/browser");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_1__[/* Title */ "m"], null, "Oups, this page doesn't exist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], {
    to: _routes__WEBPACK_IMPORTED_MODULE_2__[/* homePage */ "c"].path
  }, "Back to Home"));
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Home */ "d"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



var Contact = function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Contact */ "a"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(26);

var _router = __webpack_require__(12);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._6fmH0Z9RqE8w9Cle39SRt{margin-top:80px;min-height:calc(100vh - 80px - 20px);position:relative}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,wBAAW,eAAe,CAAC,oCAAoC,CAAC,iBAAiB","file":"styles.scss","sourcesContent":[".container{margin-top:80px;min-height:calc(100vh - 80px - 20px);position:relative}"]}]);

// Exports
exports.locals = {
	"container": "_6fmH0Z9RqE8w9Cle39SRt"
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._2zdV98WE3wMcnmkFqcpRI7{list-style-type:none;line-height:1.6;margin:.875rem 0}._2zdV98WE3wMcnmkFqcpRI7 li{display:flex;align-items:flex-start}._2zdV98WE3wMcnmkFqcpRI7 li:before{content:\"•\";font-size:2rem;line-height:1.6;padding:0 1rem;max-height:1.6rem;display:flex;align-items:center}._2zdV98WE3wMcnmkFqcpRI7 i{color:#35858b}._2zdV98WE3wMcnmkFqcpRI7 b,._2zdV98WE3wMcnmkFqcpRI7 strong{font-weight:500}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,oBAAoB,CAAC,eAAe,CAAC,gBAAgB,CAAC,4BAAS,YAAY,CAAC,sBAAsB,CAAC,mCAAgB,WAAW,CAAC,cAAc,CAAC,eAAe,CAAC,cAAc,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,2BAAQ,aAAa,CAAC,2DAAqB,eAAe","file":"styles.scss","sourcesContent":[".list{list-style-type:none;line-height:1.6;margin:.875rem 0}.list li{display:flex;align-items:flex-start}.list li:before{content:\"•\";font-size:2rem;line-height:1.6;padding:0 1rem;max-height:1.6rem;display:flex;align-items:center}.list i{color:#35858b}.list b,.list strong{font-weight:500}"]}]);

// Exports
exports.locals = {
	"list": "_2zdV98WE3wMcnmkFqcpRI7"
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._1bbDNGd2_d2JQ2MJ5SAmT8{background-color:#fff;box-shadow:2px 2px 3px 0px #707070;padding:calc(2 * 1rem)}@media(min-width: 760px){._1bbDNGd2_d2JQ2MJ5SAmT8{padding:1.5rem}}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAM,qBAAqB,CAAC,kCAAkC,CAAC,sBAAsB,CAAC,yBAAyB,yBAAM,cAAc,CAAC","file":"styles.scss","sourcesContent":[".card{background-color:#fff;box-shadow:2px 2px 3px 0px #707070;padding:calc(2 * 1rem)}@media(min-width: 760px){.card{padding:1.5rem}}"]}]);

// Exports
exports.locals = {
	"card": "_1bbDNGd2_d2JQ2MJ5SAmT8"
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, ".YBV3WdPn1lbsTuEKqDUHz{cursor:pointer;width:24px;height:24px}.YBV3WdPn1lbsTuEKqDUHz svg{width:24px !important;height:24px !important}.YBV3WdPn1lbsTuEKqDUHz svg path{color:#35858b}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,uBAAK,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,2BAAS,qBAAqB,CAAC,sBAAsB,CAAC,gCAAc,aAAa","file":"styles.scss","sourcesContent":[".box{cursor:pointer;width:24px;height:24px}.box svg{width:24px !important;height:24px !important}.box svg path{color:#35858b}"]}]);

// Exports
exports.locals = {
	"box": "YBV3WdPn1lbsTuEKqDUHz"
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, ".F-zj_cTDpf7aGO7CGSoJA{font-size:25px;font-weight:900;color:#35858b;width:100%;text-align:center;display:block}.F-zj_cTDpf7aGO7CGSoJA:hover{color:#072227}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,uBAAM,cAAc,CAAC,eAAe,CAAC,aAAa,CAAC,UAAU,CAAC,iBAAiB,CAAC,aAAa,CAAC,6BAAY,aAAa","file":"styles.scss","sourcesContent":[".logo{font-size:25px;font-weight:900;color:#35858b;width:100%;text-align:center;display:block}.logo:hover{color:#072227}"]}]);

// Exports
exports.locals = {
	"logo": "F-zj_cTDpf7aGO7CGSoJA"
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._3gkvqWrKofkjy1DPCJhvqv{height:20px;max-height:20px;line-height:20px;width:100%;text-align:center;font-size:.875rem}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAQ,WAAW,CAAC,eAAe,CAAC,gBAAgB,CAAC,UAAU,CAAC,iBAAiB,CAAC,iBAAiB","file":"styles.scss","sourcesContent":[".footer{height:20px;max-height:20px;line-height:20px;width:100%;text-align:center;font-size:.875rem}"]}]);

// Exports
exports.locals = {
	"footer": "_3gkvqWrKofkjy1DPCJhvqv"
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "._3o7_5mvaPibnhwLQct-Ldl{width:100%;height:100%;min-width:90vw;min-height:calc(100vh - 30px);display:flex;justify-content:center;align-items:center;flex-direction:column}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,yBAAS,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,6BAA6B,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,qBAAqB","file":"styles.scss","sourcesContent":[".wrapper{width:100%;height:100%;min-width:90vw;min-height:calc(100vh - 30px);display:flex;justify-content:center;align-items:center;flex-direction:column}"]}]);

// Exports
exports.locals = {
	"wrapper": "_3o7_5mvaPibnhwLQct-Ldl"
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
__webpack_require__(67);
module.exports = __webpack_require__(74);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(66)["default"];

var _require = __webpack_require__(43),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-css-modules",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(43),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(68),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);








Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 50))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(50);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Home",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/Home */).then(__webpack_require__.bind(null, 51))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(51);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Home";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/Home';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Contact",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/Contact */).then(__webpack_require__.bind(null, 52))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(52);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Contact";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/Contact'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404': t_0,
  '__react_static_root__/src/pages/Home': t_1,
  '__react_static_root__/src/pages/Contact': t_2
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(36);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 25,
	"./": 25,
	"./index": 25,
	"./index.js": 25
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 71;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(35);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(44);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(45);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(46);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(22);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(47);

var _interopRequireWildcard = __webpack_require__(48);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(75);

var _Suspense = _interopRequireDefault(__webpack_require__(76));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(77)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("/home/runner/work/xavbiz.github.io/xavbiz.github.io/site/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(48);

var _interopRequireDefault = __webpack_require__(47);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(16));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(13));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);




/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  };

  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(78)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/coconuts-nursery.67c82fbb.jpg";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/field.c8f9bcf2.jpg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// Module
exports.push([module.i, "html{background-color:#fff}*{font-family:\"Poppins\",sans-serif;padding:0;margin:0;text-decoration:none;box-sizing:border-box;color:#072227;font-weight:300}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}", "",{"version":3,"sources":["main.scss"],"names":[],"mappings":"AAAA,KAAK,qBAAqB,CAAC,EAAE,gCAAgC,CAAC,SAAS,CAAC,QAAQ,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,aAAa,CAAC,eAAe,CAAC,MAAM,eAAe,CAAC,aAAa,WAAW,CAAC,oDAAoD,UAAU,CAAC,YAAY","file":"main.scss","sourcesContent":["html{background-color:#fff}*{font-family:\"Poppins\",sans-serif;padding:0;margin:0;text-decoration:none;box-sizing:border-box;color:#072227;font-weight:300}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}"]}]);



/***/ })
/******/ ]);
});