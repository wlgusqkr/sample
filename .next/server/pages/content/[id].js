"use strict";
(() => {
var exports = {};
exports.id = "pages/content/[id]";
exports.ids = ["pages/content/[id]"];
exports.modules = {

/***/ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");








var SIZE = 44;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-block'
    },

    /* Styles applied to the root element if `variant="static"`. */
    static: {
      transition: theme.transitions.create('transform')
    },

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {
      animation: '$circular-rotate 1.4s linear infinite'
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {
      transition: theme.transitions.create('transform')
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the `svg` element. */
    svg: {
      display: 'block' // Keeps the progress centered

    },

    /* Styles applied to the `circle` svg path. */
    circle: {
      stroke: 'currentColor' // Use butt to follow the specification, by chance, it's already the default CSS value.
      // strokeLinecap: 'butt',

    },

    /* Styles applied to the `circle` svg path if `variant="static"`. */
    circleStatic: {
      transition: theme.transitions.create('stroke-dashoffset')
    },

    /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
    circleIndeterminate: {
      animation: '$circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.

    },

    /* Styles applied to the `circle` svg path if `variant="determinate"`. */
    circleDeterminate: {
      transition: theme.transitions.create('stroke-dashoffset')
    },
    '@keyframes circular-rotate': {
      '0%': {
        // Fix IE 11 wobbly
        transformOrigin: '50% 50%'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px'
      },
      '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px'
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-125px'
      }
    },

    /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
    circleDisableShrink: {
      animation: 'none'
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var CircularProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CircularProgress(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$disableShrink = props.disableShrink,
      disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink,
      _props$size = props.size,
      size = _props$size === void 0 ? 40 : _props$size,
      style = props.style,
      _props$thickness = props.thickness,
      thickness = _props$thickness === void 0 ? 3.6 : _props$thickness,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);

  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};

  if (variant === 'determinate' || variant === 'static') {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
    rootStyle.transform = 'rotate(-90deg)';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, color !== 'inherit' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(color))], {
      'determinate': classes.determinate,
      'indeterminate': classes.indeterminate,
      'static': classes.static
    }[variant]),
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      width: size,
      height: size
    }, rootStyle, style),
    ref: ref,
    role: "progressbar"
  }, rootProps, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", {
    className: classes.svg,
    viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("circle", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.circle, disableShrink && classes.circleDisableShrink, {
      'determinate': classes.circleDeterminate,
      'indeterminate': classes.circleIndeterminate,
      'static': classes.circleStatic
    }[variant]),
    style: circleStyle,
    cx: SIZE,
    cy: SIZE,
    r: (SIZE - thickness) / 2,
    fill: "none",
    strokeWidth: thickness
  })));
});
 true ? CircularProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['inherit', 'primary', 'secondary']),

  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   */
  disableShrink: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), function (props) {
    if (props.disableShrink && props.variant && props.variant !== 'indeterminate') {
      return new Error('Material-UI: You have provided the `disableShrink` prop ' + 'with a variant other than `indeterminate`. This will have no effect.');
    }

    return null;
  }),

  /**
   * The size of the circle.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The thickness of the circle.
   */
  thickness: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['determinate', 'indeterminate', 'static']), function (props) {
    var variant = props.variant;

    if (variant === 'static') {
      throw new Error('Material-UI: `variant="static"` was deprecated. Use `variant="determinate"` instead.');
    }

    return null;
  })
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiCircularProgress',
  flip: false
})(CircularProgress));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CircularProgress/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CircularProgress/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CircularProgress__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Container/Container.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Container/Container.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({
      width: '100%',
      marginLeft: 'auto',
      boxSizing: 'border-box',
      marginRight: 'auto',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `disableGutters={true}`. */
    disableGutters: {
      paddingLeft: 0,
      paddingRight: 0
    },

    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
      var value = theme.breakpoints.values[breakpoint];

      if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
          maxWidth: value
        };
      }

      return acc;
    }, {}),

    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.up('xs'), {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }),

    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.up('sm'), {
      maxWidth: theme.breakpoints.values.sm
    }),

    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.up('md'), {
      maxWidth: theme.breakpoints.values.md
    }),

    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.up('lg'), {
      maxWidth: theme.breakpoints.values.lg
    }),

    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.up('xl'), {
      maxWidth: theme.breakpoints.values.xl
    })
  };
};
var Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Container(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(String(maxWidth)))]),
    ref: ref
  }, other));
});
 true ? Container.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   */
  fixed: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['lg', 'md', 'sm', 'xl', 'xs', false])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiContainer'
})(Container));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Container/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Container/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./node_modules/@material-ui/core/esm/Container/Container.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "decomposeColor": () => (/* binding */ decomposeColor),
/* harmony export */   "recomposeColor": () => (/* binding */ recomposeColor),
/* harmony export */   "getContrastRatio": () => (/* binding */ getContrastRatio),
/* harmony export */   "getLuminance": () => (/* binding */ getLuminance),
/* harmony export */   "emphasize": () => (/* binding */ emphasize),
/* harmony export */   "fade": () => (/* binding */ fade),
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "darken": () => (/* binding */ darken),
/* harmony export */   "lighten": () => (/* binding */ lighten)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "default": () => (/* binding */ createBreakpoints)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMixins)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMuiStrictModeTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createTheme__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, [(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": () => (/* binding */ light),
/* harmony export */   "dark": () => (/* binding */ dark),
/* harmony export */   "default": () => (/* binding */ createPalette)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSpacing)
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": () => (/* binding */ createMuiTheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTypography)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": () => (/* binding */ isUnitless),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "toUnitless": () => (/* binding */ toUnitless),
/* harmony export */   "convertLength": () => (/* binding */ convertLength),
/* harmony export */   "alignProperty": () => (/* binding */ alignProperty),
/* harmony export */   "fontGrid": () => (/* binding */ fontGrid),
/* harmony export */   "responsiveProperty": () => (/* binding */ responsiveProperty)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "createMuiTheme": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.createMuiTheme),
/* harmony export */   "unstable_createMuiStrictModeTheme": () => (/* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "createStyles": () => (/* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "makeStyles": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "responsiveFontSizes": () => (/* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "styled": () => (/* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "useTheme": () => (/* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "withStyles": () => (/* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "withTheme": () => (/* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "createGenerateClassName": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.createGenerateClassName),
/* harmony export */   "jssPreset": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.jssPreset),
/* harmony export */   "ServerStyleSheets": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ServerStyleSheets),
/* harmony export */   "StylesProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.StylesProvider),
/* harmony export */   "MuiThemeProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider),
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider)
/* harmony export */ });
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _colorManipulator__WEBPACK_IMPORTED_MODULE_0__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _colorManipulator__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _transitions__WEBPACK_IMPORTED_MODULE_7__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _transitions__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);

 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ responsiveFontSizes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.convertLength)(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.alignProperty)({
          size: value,
          grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.fontGrid)({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shape = {
  borderRadius: 4
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(Component);
  return function (style, options) {
    return componentCreator(style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
    }, options));
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withThemeCreator)({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capitalize)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : 0);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./src/components/Editor/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Editor/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loader */ "./src/components/Loader/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\user\\workspace.edu\\egovframe-msa-edu\\frontend\\portal\\src\\components\\Editor\\index.tsx";



const Editor = props => {
  const {
    contents,
    setContents,
    readonly = false
  } = props;
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const {
    0: editorLoaded,
    1: setEditorLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic")
    };
    setEditorLoaded(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: editorLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "editor",
        className: readonly ? 'editor-readonly' : '',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CKEditor, {
          editor: ClassicEditor,
          data: contents,
          disabled: readonly,
          config: {
            ckfinder: {
              uploadUrl: `/api/editor`
            },
            isReadOnly: readonly
          },
          onReady: editor => {
            console.info('editor is ready to use', editor);
          },
          onChange: (event, editor) => {
            let chanagedata = editor.getData();
            setContents(chanagedata);
          },
          onBlur: (event, editor) => {
            console.info('Blur.', editor);
          },
          onFocus: (event, editor) => {
            console.info('Focus.', editor);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./src/components/Loader/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Loader/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\workspace.edu\\egovframe-msa-edu\\frontend\\portal\\src\\components\\Loader\\index.tsx";




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(10)
  }
}));

const Loader = () => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: classes.container,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__.default, {
      size: 40
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./src/constants/env.ts":
/*!******************************!*\
  !*** ./src/constants/env.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEV": () => (/* binding */ DEV),
/* harmony export */   "PORT": () => (/* binding */ PORT),
/* harmony export */   "PROXY_HOST": () => (/* binding */ PROXY_HOST),
/* harmony export */   "TZ": () => (/* binding */ TZ),
/* harmony export */   "MODE": () => (/* binding */ MODE),
/* harmony export */   "ASSET_PATH": () => (/* binding */ ASSET_PATH),
/* harmony export */   "SERVER_API_URL": () => (/* binding */ SERVER_API_URL),
/* harmony export */   "CLAIM_NAME": () => (/* binding */ CLAIM_NAME),
/* harmony export */   "AUTH_USER_ID": () => (/* binding */ AUTH_USER_ID),
/* harmony export */   "REFRESH_TOKEN": () => (/* binding */ REFRESH_TOKEN),
/* harmony export */   "ACCESS_TOKEN": () => (/* binding */ ACCESS_TOKEN),
/* harmony export */   "SITE_ID": () => (/* binding */ SITE_ID),
/* harmony export */   "GOOGLE_CLIENT_ID": () => (/* binding */ GOOGLE_CLIENT_ID),
/* harmony export */   "KAKAO_JAVASCRIPT_KEY": () => (/* binding */ KAKAO_JAVASCRIPT_KEY),
/* harmony export */   "NAVER_CLIENT_ID": () => (/* binding */ NAVER_CLIENT_ID),
/* harmony export */   "NAVER_CALLBACK_URL": () => (/* binding */ NAVER_CALLBACK_URL),
/* harmony export */   "SOCIAL_LOGIN_ENABLED": () => (/* binding */ SOCIAL_LOGIN_ENABLED)
/* harmony export */ });
const DEV = true;
const PORT = 3001;
const PROXY_HOST = "http://localhost:3001" || 0;
const TZ = process.env.TZ || 'Asia/Seoul';
const MODE = "sm";
const ASSET_PATH = `/styles/${MODE}`;
const SERVER_API_URL = "http://localhost:8000";
const CLAIM_NAME = process.env.CLAIM_NAME || 'Authorization';
const AUTH_USER_ID = process.env.AUTH_USER_ID || 'token-id';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN || 'refresh-token';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'access-token';
const SITE_ID = "3";
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const KAKAO_JAVASCRIPT_KEY = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;
const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const NAVER_CALLBACK_URL = process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL;
const SOCIAL_LOGIN_ENABLED = "false";

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_APP_NAME": () => (/* binding */ DEFAULT_APP_NAME),
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "DEFAULT_ERROR_MESSAGE": () => (/* binding */ DEFAULT_ERROR_MESSAGE),
/* harmony export */   "DEFUALT_GRID_PAGE_SIZE": () => (/* binding */ DEFUALT_GRID_PAGE_SIZE),
/* harmony export */   "GRID_ROWS_PER_PAGE_OPTION": () => (/* binding */ GRID_ROWS_PER_PAGE_OPTION),
/* harmony export */   "COMMENTS_MAX_LENGTH": () => (/* binding */ COMMENTS_MAX_LENGTH),
/* harmony export */   "COMMENTS_PAGE_SIZE": () => (/* binding */ COMMENTS_PAGE_SIZE),
/* harmony export */   "EDITOR_LOAD_IMAGE_URL": () => (/* binding */ EDITOR_LOAD_IMAGE_URL),
/* harmony export */   "LOAD_IMAGE_URL": () => (/* binding */ LOAD_IMAGE_URL),
/* harmony export */   "EDITOR_MAX_LENGTH": () => (/* binding */ EDITOR_MAX_LENGTH),
/* harmony export */   "DEFAULT_ACCEPT_FILE_EXT": () => (/* binding */ DEFAULT_ACCEPT_FILE_EXT),
/* harmony export */   "DEFAULT_ACCEPT_FILE_EXT_TEXT": () => (/* binding */ DEFAULT_ACCEPT_FILE_EXT_TEXT),
/* harmony export */   "CUSTOM_HEADER_SITE_ID_KEY": () => (/* binding */ CUSTOM_HEADER_SITE_ID_KEY),
/* harmony export */   "ACCESS_LOG_TIMEOUT": () => (/* binding */ ACCESS_LOG_TIMEOUT),
/* harmony export */   "ACCESS_LOG_ID": () => (/* binding */ ACCESS_LOG_ID),
/* harmony export */   "PUBLIC_PAGES": () => (/* binding */ PUBLIC_PAGES)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./src/constants/env.ts");

const DEFAULT_APP_NAME = '전자정부 표준프레임워크 포탈';
const BASE_URL = `${_env__WEBPACK_IMPORTED_MODULE_0__.PROXY_HOST}/server`;
const DEFAULT_ERROR_MESSAGE = 'Sorry.. Something Wrong...😱';
const DEFUALT_GRID_PAGE_SIZE = 10;
const GRID_ROWS_PER_PAGE_OPTION = [10, 20, 50, 100];
const COMMENTS_MAX_LENGTH = 300;
const COMMENTS_PAGE_SIZE = 5;
const EDITOR_LOAD_IMAGE_URL = '/portal-service/api/v1/images/editor/';
const LOAD_IMAGE_URL = '/portal-service/api/v1/images/';
const EDITOR_MAX_LENGTH = 2000; // .htm, .html, .txt, .png/.jpg/etc, .pdf, .xlsx. .xls

const DEFAULT_ACCEPT_FILE_EXT = 'text/html, text/plain, image/*, .pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
const DEFAULT_ACCEPT_FILE_EXT_TEXT = '.htm, .html, .txt, .png/.jpg/etc, .pdf, .xlsx. .xls';
const CUSTOM_HEADER_SITE_ID_KEY = 'X-Site-Id';
const ACCESS_LOG_TIMEOUT = 30 * 60 * 1000;
const ACCESS_LOG_ID = 'accessLogId';
const PUBLIC_PAGES = ['/404', '/', '', '/reload', '/_error', '/user/leave/bye', '#', '/auth/login/naver'];

/***/ }),

/***/ "./src/pages/content/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/content/[id].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Editor */ "./src/components/Editor/index.tsx");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service */ "./src/service/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\workspace.edu\\egovframe-msa-edu\\frontend\\portal\\src\\pages\\content\\[id].tsx";




const Content = ({
  content
}) => {
  const {
    0: contents,
    1: setContents
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (content) {
      setContents(content.contentValue);
    }
  }, [content]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_1__.default, {
    contents: contents,
    setContents: setContents,
    readonly: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined); // return (
  //   <article className="intro">
  //     <div dangerouslySetInnerHTML={{ __html: content.contentValue }} />
  //   </article>
  // )
};

const getServerSideProps = async context => {
  const {
    query
  } = context;
  const contentNo = Number(query.id);
  let content = {};

  try {
    const result = await _service__WEBPACK_IMPORTED_MODULE_2__.contentService.get(contentNo);

    if (result) {
      content = await result.data;
    }
  } catch (error) {
    var _error$response, _error$response$data;

    console.error(`content item query error ${error.message}`);

    if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.code) === 'E003') {
      return {
        notFound: true
      };
    }
  }

  return {
    props: {
      content
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/service/Banner.ts":
/*!*******************************!*\
  !*** ./src/service/Banner.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bannerService": () => (/* binding */ bannerService)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/env */ "./src/constants/env.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


/**
 * 포털 서비스 배너 API URL
 */

const BANNER_URL = `/portal-service/api/v1/${_constants_env__WEBPACK_IMPORTED_MODULE_0__.SITE_ID}/banners`;

/**
 * 배너 관리 서비스
 */
const bannerService = {
  getBanners: (bannerTypeCodes, bannerCount) => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${BANNER_URL}/${bannerTypeCodes}/${bannerCount}`);
  }
};

/***/ }),

/***/ "./src/service/Board.ts":
/*!******************************!*\
  !*** ./src/service/Board.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SKINT_TYPE_CODE_NORMAL": () => (/* binding */ SKINT_TYPE_CODE_NORMAL),
/* harmony export */   "SKINT_TYPE_CODE_FAQ": () => (/* binding */ SKINT_TYPE_CODE_FAQ),
/* harmony export */   "SKINT_TYPE_CODE_QNA": () => (/* binding */ SKINT_TYPE_CODE_QNA),
/* harmony export */   "boardService": () => (/* binding */ boardService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/service/common.ts");



/**
 * 게시판 스킨 유형
 */

const SKINT_TYPE_CODE_NORMAL = 'normal';
const SKINT_TYPE_CODE_FAQ = 'faq';
const SKINT_TYPE_CODE_QNA = 'qna';
const BOARD_URL = '/board-service/api/v1/boards';
const POSTS_URL = '/board-service/api/v1/posts';
const COMMENT_URL = '/board-service/api/v1/comments';
const boardService = {
  getBoardById: boardNo => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BOARD_URL}/${boardNo}`);
  },
  getMainPosts: (boardNos, count) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${POSTS_URL}/newest/${boardNos}/${count}`);
  },
  search: (boardNo, {
    keywordType,
    keyword,
    size,
    page
  }) => swr__WEBPACK_IMPORTED_MODULE_1___default()(() => typeof boardNo === 'number' && boardNo > -1 ? [`${POSTS_URL}/list/${boardNo}?size=${size}&page=${page}`, keywordType, keyword] : null, url => _common__WEBPACK_IMPORTED_MODULE_2__.common.fetcher(url, {
    keywordType,
    keyword
  }), {
    revalidateOnFocus: false,
    errorRetryCount: 0
  }),
  getPostById: ({
    boardNo,
    postsNo,
    keywordType,
    keyword
  }) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${POSTS_URL}/view/${boardNo}/${postsNo}?keywordType=${keywordType}&keyword=${keyword}`);
  },
  savePost: async ({
    boardNo,
    callback,
    errorCallback,
    data
  }) => {
    try {
      const result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${POSTS_URL}/save/${boardNo}`, data, {
        headers: _common__WEBPACK_IMPORTED_MODULE_2__.common.headers
      });

      if (result) {
        callback();
      }
    } catch (error) {
      errorCallback(error);
    }
  },
  updatePost: async ({
    boardNo,
    postsNo,
    callback,
    errorCallback,
    data
  }) => {
    try {
      const result = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${POSTS_URL}/update/${boardNo}/${postsNo}`, data, {
        headers: _common__WEBPACK_IMPORTED_MODULE_2__.common.headers
      });

      if (result) {
        callback();
      }
    } catch (error) {
      errorCallback(error);
    }
  },
  removePost: async ({
    callback,
    errorCallback,
    data
  }) => {
    try {
      const result = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${POSTS_URL}/remove`, data, {
        headers: _common__WEBPACK_IMPORTED_MODULE_2__.common.headers
      });

      if (result) {
        callback();
      }
    } catch (error) {
      errorCallback(error);
    }
  },
  getComments: (boardNo, postsNo, size, page) => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${COMMENT_URL}/list/${boardNo}/${postsNo}?size=${size}&page=${page}`).then(result => {
      resolve(result.data);
    }).catch(e => rejects(e));
  }),
  getAllComments: (boardNo, postsNo) => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${COMMENT_URL}/all/${boardNo}/${postsNo}`).then(result => {
      resolve(result.data);
    }).catch(e => rejects(e));
  }),
  saveComment: comment => {
    return new Promise((resolve, rejects) => {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${COMMENT_URL}`, comment).then(result => {
        resolve(result.data);
      }).catch(e => rejects(e));
    });
  },
  updateComment: comment => {
    return new Promise((resolve, rejects) => {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${COMMENT_URL}/update`, comment).then(result => {
        resolve(result.data);
      }).catch(e => rejects(e));
    });
  },
  deleteComment: ({
    boardNo,
    postsNo,
    commentNo
  }) => {
    return new Promise((resolve, rejects) => {
      axios__WEBPACK_IMPORTED_MODULE_0___default().delete(`${COMMENT_URL}/delete/${boardNo}/${postsNo}/${commentNo}`).then(result => {
        resolve(result.data);
      }).catch(e => rejects(e));
    });
  }
};

/***/ }),

/***/ "./src/service/Content.ts":
/*!********************************!*\
  !*** ./src/service/Content.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentService": () => (/* binding */ contentService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 컨텐츠 데이터 타입
 */

/**
 * 포털 서비스 컨텐츠 API URL
 */
const CONTENT_URL = '/portal-service/api/v1/contents';
/**
 * 컨텐츠 관리 서비스
 */

const contentService = {
  get: async contentNo => axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${CONTENT_URL}/${contentNo}`)
};

/***/ }),

/***/ "./src/service/File.ts":
/*!*****************************!*\
  !*** ./src/service/File.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fileService": () => (/* binding */ fileService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const UPLOAD_API = '/portal-service/api/v1/attachments';
const DOWNLOAD_API = `/server/portal-service/api/v1/download`;
let fileHeader = {
  'Content-Type': 'multipart/form-data'
};
/**
 * 파일 업로드 서비스
 */

const fileService = {
  url: UPLOAD_API,
  downloadUrl: DOWNLOAD_API,
  upload: async ({
    fileList,
    attachmentCode,
    info,
    list
  }) => {
    let formData = new FormData();
    fileList.map(item => {
      formData.append('files', item.file);
    });

    if (info) {
      formData.append('info', new Blob([JSON.stringify(info)], {
        type: 'application/json'
      }));
    }

    if (list) {
      formData.append('list', new Blob([JSON.stringify(list)], {
        type: 'application/json'
      }));
    } // attachmentCode가 있는 경우 update라고 본다


    if (attachmentCode) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().put(`/server${UPLOAD_API}/upload/${attachmentCode}`, formData, {
        headers: fileHeader
      });
    } // attachmentCode가 없는 경우 신규 저장


    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/server${UPLOAD_API}/upload`, formData, {
      headers: fileHeader
    });
  },
  save: async ({
    attachmentCode,
    info,
    list
  }) => {
    let formData = new FormData();
    formData.append('info', new Blob([JSON.stringify(info)], {
      type: 'application/json'
    }));
    formData.append('list', new Blob([JSON.stringify(list)], {
      type: 'application/json'
    }));
    return axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${UPLOAD_API}/${attachmentCode}`, formData, {
      headers: fileHeader
    });
  },
  getAttachmentList: attachmentCode => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${UPLOAD_API}/${attachmentCode}`);
  },
  deleteAll: attachmentCode => axios__WEBPACK_IMPORTED_MODULE_0___default().delete(`${UPLOAD_API}/${attachmentCode}/children`)
};

/***/ }),

/***/ "./src/service/Login.ts":
/*!******************************!*\
  !*** ./src/service/Login.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginSerivce": () => (/* binding */ loginSerivce)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/env */ "./src/constants/env.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const JWT_EXPIRED_TIME = 1800000;
const LOGIN_SERVICE_URL = `/api/login/user-service`;
const LOGIN_URL = `/login`;
const CLIENT_REFRESH_URL = '/api/login/user-service/api/v1/users/token/refresh';

const onSuccessLogin = result => {
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common)[_constants_env__WEBPACK_IMPORTED_MODULE_0__.CLAIM_NAME] = result[_constants_env__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN];
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common)[_constants_env__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER_ID] = result[_constants_env__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER_ID]; // access-token 만료 1분 전에 로그인 연장

  setTimeout(loginSerivce.silentRefresh, JWT_EXPIRED_TIME - 60000);
};

const loginSerivce = {
  login: data => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await fetch(LOGIN_SERVICE_URL + LOGIN_URL, {
          method: 'POST',
          body: JSON.stringify(data)
        });

        if (result.status === 200) {
          onSuccessLogin(await result.json());
          resolve('success');
        }

        if (result.status === 412) {
          reject('join');
        } else {
          reject('noAuth');
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  silentRefresh: async () => {
    try {
      const result = await fetch(CLIENT_REFRESH_URL, {
        method: 'PUT'
      });

      if (result) {
        onSuccessLogin(await result.json());
      }
    } catch (error) {
      console.warn('refresh token 만료로 인한 로그아웃!!!!');
      fetch('/api/v1/token').then(res => {
        console.warn('fetch', res);
      }).catch(error => {
        console.warn('fetch error', error);
      });
    }
  }
};

/***/ }),

/***/ "./src/service/Menu.ts":
/*!*****************************!*\
  !*** ./src/service/Menu.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuService": () => (/* binding */ menuService)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/env */ "./src/constants/env.ts");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/service/common.ts");



const siteId = _constants_env__WEBPACK_IMPORTED_MODULE_0__.MODE === 'sm' ? '3' : '2';
const MENU_API = `/portal-service/api/v1/menu-roles/${siteId}`;
const CODE_API = `/portal-service/api/v1/code-details/skin_type_code/codes`;
const menuService = {
  getMenus: () => {
    return swr__WEBPACK_IMPORTED_MODULE_1___default()(MENU_API, _common__WEBPACK_IMPORTED_MODULE_2__.common.fetcher, {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    });
  }
};

/***/ }),

/***/ "./src/service/Policy.ts":
/*!*******************************!*\
  !*** ./src/service/Policy.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "policyService": () => (/* binding */ policyService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const POLICY_API = '/portal-service/api/v1/policies';
/**
 * 이용약관 관리 서비스
 */

const policyService = {
  url: POLICY_API,
  getLatest: type => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${POLICY_API}/latest/${type}`);
  }
};

/***/ }),

/***/ "./src/service/Privacy.ts":
/*!********************************!*\
  !*** ./src/service/Privacy.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "privacyService": () => (/* binding */ privacyService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 개인정보처리방침 데이터 타입
 */

/**
 * 포털 서비스 개인정보처리방침 API URL
 */
const PRIVACY_URL = '/portal-service/api/v1/privacies';
/**
 * 개인정보처리방침 관리 서비스
 */

const privacyService = {
  alluse: async () => axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${PRIVACY_URL}/all/use`)
};

/***/ }),

/***/ "./src/service/Reserve.ts":
/*!********************************!*\
  !*** ./src/service/Reserve.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reserveService": () => (/* binding */ reserveService)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/service/index.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);




const LIST_API_URL = categoryId => `/reserve-item-service/api/v1/${categoryId}/reserve-items`;

const ITEM_API_URL = `/reserve-item-service/api/v1/reserve-items`;
const REQUEST_API_URL = '/reserve-request-service/api/v1/requests';
const CODE_API_URL = `/portal-service/api/v1/code-details`;
const LOCATION_API_URL = '/reserve-item-service/api/v1/locations';
const RESERVE_API_URL = '/reserve-check-service/api/v1';
const reserveService = {
  requestApiUrl: REQUEST_API_URL,
  search: ({
    keywordType,
    keyword,
    size,
    page,
    categoryId,
    locationId
  }) => swr__WEBPACK_IMPORTED_MODULE_2___default()([`${LIST_API_URL(categoryId)}?size=${size}&page=${page}`, keywordType, keyword, locationId, categoryId], url => ___WEBPACK_IMPORTED_MODULE_0__.common.fetcher(url, {
    keywordType,
    keyword,
    locationId,
    categoryId,
    isUse: true,
    isPopup: false
  }), {
    revalidateOnFocus: false,
    errorRetryCount: 0
  }),
  getCode: codeId => axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${CODE_API_URL}/${codeId}/codes`, {
    headers: ___WEBPACK_IMPORTED_MODULE_0__.common.headers
  }),
  getLocation: () => axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${LOCATION_API_URL}/combo`, {
    headers: ___WEBPACK_IMPORTED_MODULE_0__.common.headers
  }),
  getItem: reserveItemId => axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${ITEM_API_URL}/relations/${reserveItemId}`),
  getCountInventory: (reserveItemId, startDate, endDate) => axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${RESERVE_API_URL}/reserves/${reserveItemId}/inventories?startDate=${startDate}&endDate=${endDate}`, {
    data: {
      startDate,
      endDate
    }
  }),
  createAudit: data => axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${REQUEST_API_URL}/evaluates`, data),
  create: data => axios__WEBPACK_IMPORTED_MODULE_1___default().post(REQUEST_API_URL, data),
  getMainItems: count => axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${ITEM_API_URL}/latest/${count}`),
  searchUserReserve: ({
    userId,
    size,
    page,
    keywordType,
    keyword,
    locationId,
    categoryId
  }) => swr__WEBPACK_IMPORTED_MODULE_2___default()([`${RESERVE_API_URL}/${userId}/reserves?size=${size}&page=${page}`, keywordType, keyword, locationId, categoryId], url => ___WEBPACK_IMPORTED_MODULE_0__.common.fetcher(url, {
    keywordType,
    keyword,
    locationId,
    categoryId
  }), {
    revalidateOnFocus: false,
    errorRetryCount: 0
  }),
  getReserve: reserveId => axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${RESERVE_API_URL}/reserves/${reserveId}`),
  cancel: (reserveId, reason) => axios__WEBPACK_IMPORTED_MODULE_1___default().put(`${RESERVE_API_URL}/reserves/cancel/${reserveId}`, {
    reasonCancelContent: reason
  })
};

/***/ }),

/***/ "./src/service/Statistics.ts":
/*!***********************************!*\
  !*** ./src/service/Statistics.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statisticsService": () => (/* binding */ statisticsService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/service/common.ts");


const STATISTICS_API = `/portal-service/api/v1/statistics`;
const statisticsService = {
  save: uuid => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${STATISTICS_API}/${uuid}`, {
      Headers: _common__WEBPACK_IMPORTED_MODULE_1__.common.headers
    });
  }
};

/***/ }),

/***/ "./src/service/User.ts":
/*!*****************************!*\
  !*** ./src/service/User.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userService": () => (/* binding */ userService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 사용자 서비스 사용자 API URL
 */

const USER_URL = '/user-service/api/v1/users';

/**
 * 사용자 관리 서비스
 */
const userService = {
  social: (provider, token) => axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${USER_URL}/social`, {
    provider,
    token
  }),
  existsEmail: (email, userId) => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${USER_URL}/exists`, {
      email,
      userId
    }).then(result => {
      resolve(result.data);
    }).catch(e => {
      rejects(e);
    });
  }),
  join: user => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${USER_URL}/join`, user).then(result => {
      resolve(result.data);
    }).catch(e => {
      rejects(e);
    });
  }),
  findPassword: userFindPassword => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${USER_URL}/password/find`, userFindPassword).then(result => {
      resolve(result.data);
    }).catch(e => {
      rejects(e);
    });
  }),
  getFindPassword: token => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${USER_URL}/password/valid/${token}`);
  },
  changePassword: userFindPassword => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${USER_URL}/password/change`, userFindPassword).then(result => {
      resolve(result.data);
    }).catch(e => {
      rejects(e);
    });
  }),
  updatePassword: userUpdatePassword => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${USER_URL}/password/update`, userUpdatePassword).then(result => {
      resolve(result.data);
    }).catch(e => {
      rejects(e);
    });
  }),
  matchPassword: password => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${USER_URL}/password/match`, {
      password
    }).then(result => {
      resolve(result.data);
    }).catch(e => {
      rejects(e);
    });
  }),
  updateInfo: (userId, userUpdate) => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${USER_URL}/info/${userId}`, userUpdate).then(result => {
      resolve(result.data);
    }).catch(e => {
      rejects(e);
    });
  }),
  leave: userLeave => new Promise((resolve, rejects) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${USER_URL}/leave`, userLeave).then(result => {
      resolve(result.data);
    }).catch(e => {
      rejects(e);
    });
  })
};

/***/ }),

/***/ "./src/service/common.ts":
/*!*******************************!*\
  !*** ./src/service/common.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "common": () => (/* binding */ common)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.ts");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/env */ "./src/constants/env.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



let headers = {
  'Content-Type': 'application/json'
};
headers[_constants__WEBPACK_IMPORTED_MODULE_0__.CUSTOM_HEADER_SITE_ID_KEY] = _constants_env__WEBPACK_IMPORTED_MODULE_1__.SITE_ID;

const fetcher = async (url, param) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {
    params: param,
    headers
  });
  return res.data;
};

const common = {
  headers,
  fetcher
};

/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/service/common.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _common__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _common__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./src/service/Menu.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Menu__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Menu__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Banner */ "./src/service/Banner.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Banner__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Banner__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Board */ "./src/service/Board.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Board__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Board__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/service/Content.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Content__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Content__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./File */ "./src/service/File.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _File__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _File__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login */ "./src/service/Login.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Login__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Login__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Statistics */ "./src/service/Statistics.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Statistics__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Statistics__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Privacy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Privacy */ "./src/service/Privacy.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Privacy__WEBPACK_IMPORTED_MODULE_8__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Privacy__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Policy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Policy */ "./src/service/Policy.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Policy__WEBPACK_IMPORTED_MODULE_9__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Policy__WEBPACK_IMPORTED_MODULE_9__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ "./src/service/User.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _User__WEBPACK_IMPORTED_MODULE_10__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _User__WEBPACK_IMPORTED_MODULE_10__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Reserve__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reserve */ "./src/service/Reserve.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Reserve__WEBPACK_IMPORTED_MODULE_11__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Reserve__WEBPACK_IMPORTED_MODULE_11__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);













/***/ }),

/***/ "@ckeditor/ckeditor5-build-classic":
/*!****************************************************!*\
  !*** external "@ckeditor/ckeditor5-build-classic" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@ckeditor/ckeditor5-build-classic");

/***/ }),

/***/ "@ckeditor/ckeditor5-react":
/*!********************************************!*\
  !*** external "@ckeditor/ckeditor5-react" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@ckeditor/ckeditor5-react");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/content/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7QUNBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCNkU7QUFDOUQ7QUFDZjtBQUNBLGVBQWUseUVBQTRCO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2lyY3VsYXJQcm9ncmVzcy9DaXJjdWxhclByb2dyZXNzLmpzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0NvbnRhaW5lci9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2dyZXkuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2luZGlnby5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvb3JhbmdlLmpzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9waW5rLmpzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9yZWQuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVNaXhpbnMuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlUGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlU3BhY2luZy5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlU3R5bGVzLmpzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3NzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2RlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL21ha2VTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYWRvd3MuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYXBlLmpzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3RyYW5zaXRpb25zLmpzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFRoZW1lLmpzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy96SW5kZXguanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vc3JjL2NvbnN0YW50cy9lbnYudHMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL3NyYy9wYWdlcy9jb250ZW50L1tpZF0udHN4Iiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9CYW5uZXIudHMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL3NyYy9zZXJ2aWNlL0JvYXJkLnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9Db250ZW50LnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9GaWxlLnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9Mb2dpbi50cyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vc3JjL3NlcnZpY2UvTWVudS50cyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vc3JjL3NlcnZpY2UvUG9saWN5LnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9Qcml2YWN5LnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9SZXNlcnZlLnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9TdGF0aXN0aWNzLnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9Vc2VyLnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvc2VydmljZS9jb21tb24udHMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL3NyYy9zZXJ2aWNlL2luZGV4LnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvZXh0ZXJuYWwgXCJAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWNcIiIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsL2V4dGVybmFsIFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdFwiIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG52YXIgU0laRSA9IDQ0O1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdGF0aWNcImAuICovXG4gICAgc3RhdGljOiB7XG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJgLiAqL1xuICAgIGluZGV0ZXJtaW5hdGU6IHtcbiAgICAgIGFuaW1hdGlvbjogJyRjaXJjdWxhci1yb3RhdGUgMS40cyBsaW5lYXIgaW5maW5pdGUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiYC4gKi9cbiAgICBkZXRlcm1pbmF0ZToge1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgc3ZnYCBlbGVtZW50LiAqL1xuICAgIHN2Zzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyAvLyBLZWVwcyB0aGUgcHJvZ3Jlc3MgY2VudGVyZWRcblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGNpcmNsZWAgc3ZnIHBhdGguICovXG4gICAgY2lyY2xlOiB7XG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InIC8vIFVzZSBidXR0IHRvIGZvbGxvdyB0aGUgc3BlY2lmaWNhdGlvbiwgYnkgY2hhbmNlLCBpdCdzIGFscmVhZHkgdGhlIGRlZmF1bHQgQ1NTIHZhbHVlLlxuICAgICAgLy8gc3Ryb2tlTGluZWNhcDogJ2J1dHQnLFxuXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aCBpZiBgdmFyaWFudD1cInN0YXRpY1wiYC4gKi9cbiAgICBjaXJjbGVTdGF0aWM6IHtcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGNpcmNsZWAgc3ZnIHBhdGggaWYgYHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJgLiAqL1xuICAgIGNpcmNsZUluZGV0ZXJtaW5hdGU6IHtcbiAgICAgIGFuaW1hdGlvbjogJyRjaXJjdWxhci1kYXNoIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUnLFxuICAgICAgLy8gU29tZSBkZWZhdWx0IHZhbHVlIHRoYXQgbG9va3MgZmluZSB3YWl0aW5nIGZvciB0aGUgYW5pbWF0aW9uIHRvIGtpY2tzIGluLlxuICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnODBweCwgMjAwcHgnLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJzBweCcgLy8gQWRkIHRoZSB1bml0IHRvIGZpeCBhIEVkZ2UgMTYgYW5kIGJlbG93IGJ1Zy5cblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGNpcmNsZWAgc3ZnIHBhdGggaWYgYHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiYC4gKi9cbiAgICBjaXJjbGVEZXRlcm1pbmF0ZToge1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdzdHJva2UtZGFzaG9mZnNldCcpXG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBjaXJjdWxhci1yb3RhdGUnOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIC8vIEZpeCBJRSAxMSB3b2JibHlcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSdcbiAgICAgIH0sXG4gICAgICAnMTAwJSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknXG4gICAgICB9XG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBjaXJjdWxhci1kYXNoJzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxcHgsIDIwMHB4JyxcbiAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJzBweCdcbiAgICAgIH0sXG4gICAgICAnNTAlJzoge1xuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxMDBweCwgMjAwcHgnLFxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAnLTE1cHgnXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzEwMHB4LCAyMDBweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICctMTI1cHgnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aCBpZiBgZGlzYWJsZVNocmluaz17dHJ1ZX1gLiAqL1xuICAgIGNpcmNsZURpc2FibGVTaHJpbms6IHtcbiAgICAgIGFuaW1hdGlvbjogJ25vbmUnXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogIyMgQVJJQVxuICpcbiAqIElmIHRoZSBwcm9ncmVzcyBiYXIgaXMgZGVzY3JpYmluZyB0aGUgbG9hZGluZyBwcm9ncmVzcyBvZiBhIHBhcnRpY3VsYXIgcmVnaW9uIG9mIGEgcGFnZSxcbiAqIHlvdSBzaG91bGQgdXNlIGBhcmlhLWRlc2NyaWJlZGJ5YCB0byBwb2ludCB0byB0aGUgcHJvZ3Jlc3MgYmFyLCBhbmQgc2V0IHRoZSBgYXJpYS1idXN5YFxuICogYXR0cmlidXRlIHRvIGB0cnVlYCBvbiB0aGF0IHJlZ2lvbiB1bnRpbCBpdCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAqL1xuXG52YXIgQ2lyY3VsYXJQcm9ncmVzcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIENpcmN1bGFyUHJvZ3Jlc3MocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAncHJpbWFyeScgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkZGlzYWJsZVNocmluayA9IHByb3BzLmRpc2FibGVTaHJpbmssXG4gICAgICBkaXNhYmxlU2hyaW5rID0gX3Byb3BzJGRpc2FibGVTaHJpbmsgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTaHJpbmssXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/IDQwIDogX3Byb3BzJHNpemUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgX3Byb3BzJHRoaWNrbmVzcyA9IHByb3BzLnRoaWNrbmVzcyxcbiAgICAgIHRoaWNrbmVzcyA9IF9wcm9wcyR0aGlja25lc3MgPT09IHZvaWQgMCA/IDMuNiA6IF9wcm9wcyR0aGlja25lc3MsXG4gICAgICBfcHJvcHMkdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZhbHVlID0gX3Byb3BzJHZhbHVlID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJHZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnaW5kZXRlcm1pbmF0ZScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlU2hyaW5rXCIsIFwic2l6ZVwiLCBcInN0eWxlXCIsIFwidGhpY2tuZXNzXCIsIFwidmFsdWVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgY2lyY2xlU3R5bGUgPSB7fTtcbiAgdmFyIHJvb3RTdHlsZSA9IHt9O1xuICB2YXIgcm9vdFByb3BzID0ge307XG5cbiAgaWYgKHZhcmlhbnQgPT09ICdkZXRlcm1pbmF0ZScgfHwgdmFyaWFudCA9PT0gJ3N0YXRpYycpIHtcbiAgICB2YXIgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogKChTSVpFIC0gdGhpY2tuZXNzKSAvIDIpO1xuICAgIGNpcmNsZVN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGNpcmN1bWZlcmVuY2UudG9GaXhlZCgzKTtcbiAgICByb290UHJvcHNbJ2FyaWEtdmFsdWVub3cnXSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgIGNpcmNsZVN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBcIlwiLmNvbmNhdCgoKDEwMCAtIHZhbHVlKSAvIDEwMCAqIGNpcmN1bWZlcmVuY2UpLnRvRml4ZWQoMyksIFwicHhcIik7XG4gICAgcm9vdFN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY29sb3IgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwge1xuICAgICAgJ2RldGVybWluYXRlJzogY2xhc3Nlcy5kZXRlcm1pbmF0ZSxcbiAgICAgICdpbmRldGVybWluYXRlJzogY2xhc3Nlcy5pbmRldGVybWluYXRlLFxuICAgICAgJ3N0YXRpYyc6IGNsYXNzZXMuc3RhdGljXG4gICAgfVt2YXJpYW50XSksXG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgaGVpZ2h0OiBzaXplXG4gICAgfSwgcm9vdFN0eWxlLCBzdHlsZSksXG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogXCJwcm9ncmVzc2JhclwiXG4gIH0sIHJvb3RQcm9wcywgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnN2ZyxcbiAgICB2aWV3Qm94OiBcIlwiLmNvbmNhdChTSVpFIC8gMiwgXCIgXCIpLmNvbmNhdChTSVpFIC8gMiwgXCIgXCIpLmNvbmNhdChTSVpFLCBcIiBcIikuY29uY2F0KFNJWkUpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5jaXJjbGUsIGRpc2FibGVTaHJpbmsgJiYgY2xhc3Nlcy5jaXJjbGVEaXNhYmxlU2hyaW5rLCB7XG4gICAgICAnZGV0ZXJtaW5hdGUnOiBjbGFzc2VzLmNpcmNsZURldGVybWluYXRlLFxuICAgICAgJ2luZGV0ZXJtaW5hdGUnOiBjbGFzc2VzLmNpcmNsZUluZGV0ZXJtaW5hdGUsXG4gICAgICAnc3RhdGljJzogY2xhc3Nlcy5jaXJjbGVTdGF0aWNcbiAgICB9W3ZhcmlhbnRdKSxcbiAgICBzdHlsZTogY2lyY2xlU3R5bGUsXG4gICAgY3g6IFNJWkUsXG4gICAgY3k6IFNJWkUsXG4gICAgcjogKFNJWkUgLSB0aGlja25lc3MpIC8gMixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2VXaWR0aDogdGhpY2tuZXNzXG4gIH0pKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENpcmN1bGFyUHJvZ3Jlc3MucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydpbmhlcml0JywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzaHJpbmsgYW5pbWF0aW9uIGlzIGRpc2FibGVkLlxuICAgKiBUaGlzIG9ubHkgd29ya3MgaWYgdmFyaWFudCBpcyBgaW5kZXRlcm1pbmF0ZWAuXG4gICAqL1xuICBkaXNhYmxlU2hyaW5rOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMuYm9vbCwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGVTaHJpbmsgJiYgcHJvcHMudmFyaWFudCAmJiBwcm9wcy52YXJpYW50ICE9PSAnaW5kZXRlcm1pbmF0ZScpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgaGF2ZSBwcm92aWRlZCB0aGUgYGRpc2FibGVTaHJpbmtgIHByb3AgJyArICd3aXRoIGEgdmFyaWFudCBvdGhlciB0aGFuIGBpbmRldGVybWluYXRlYC4gVGhpcyB3aWxsIGhhdmUgbm8gZWZmZWN0LicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KSxcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGNpcmNsZS5cbiAgICogSWYgdXNpbmcgYSBudW1iZXIsIHRoZSBwaXhlbCB1bml0IGlzIGFzc3VtZWQuXG4gICAqIElmIHVzaW5nIGEgc3RyaW5nLCB5b3UgbmVlZCB0byBwcm92aWRlIHRoZSBDU1MgdW5pdCwgZS5nICczcmVtJy5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSB0aGlja25lc3Mgb2YgdGhlIGNpcmNsZS5cbiAgICovXG4gIHRoaWNrbmVzczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IgZm9yIHRoZSBkZXRlcm1pbmF0ZSB2YXJpYW50LlxuICAgKiBWYWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqIFVzZSBpbmRldGVybWluYXRlIHdoZW4gdGhlcmUgaXMgbm8gcHJvZ3Jlc3MgdmFsdWUuXG4gICAqL1xuICB2YXJpYW50OiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMub25lT2YoWydkZXRlcm1pbmF0ZScsICdpbmRldGVybWluYXRlJywgJ3N0YXRpYyddKSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50O1xuXG4gICAgaWYgKHZhcmlhbnQgPT09ICdzdGF0aWMnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdGVyaWFsLVVJOiBgdmFyaWFudD1cInN0YXRpY1wiYCB3YXMgZGVwcmVjYXRlZC4gVXNlIGB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcImAgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpQ2lyY3VsYXJQcm9ncmVzcycsXG4gIGZsaXA6IGZhbHNlXG59KShDaXJjdWxhclByb2dyZXNzKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2RlZmluZVByb3BlcnR5KHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LCB0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMylcbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVHdXR0ZXJzPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZUd1dHRlcnM6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZpeGVkPXt0cnVlfWAuICovXG4gICAgZml4ZWQ6IE9iamVjdC5rZXlzKHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGJyZWFrcG9pbnQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1ticmVha3BvaW50XTtcblxuICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgIGFjY1t0aGVtZS5icmVha3BvaW50cy51cChicmVha3BvaW50KV0gPSB7XG4gICAgICAgICAgbWF4V2lkdGg6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbWF4V2lkdGg9XCJ4c1wiYC4gKi9cbiAgICBtYXhXaWR0aFhzOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpLCB7XG4gICAgICBtYXhXaWR0aDogTWF0aC5tYXgodGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhzLCA0NDQpXG4gICAgfSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXhXaWR0aD1cInNtXCJgLiAqL1xuICAgIG1heFdpZHRoU206IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMuc21cbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1heFdpZHRoPVwibWRcImAuICovXG4gICAgbWF4V2lkdGhNZDogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSwge1xuICAgICAgbWF4V2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5tZFxuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbWF4V2lkdGg9XCJsZ1wiYC4gKi9cbiAgICBtYXhXaWR0aExnOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpLCB7XG4gICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLmxnXG4gICAgfSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXhXaWR0aD1cInhsXCJgLiAqL1xuICAgIG1heFdpZHRoWGw6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyksIHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueGxcbiAgICB9KVxuICB9O1xufTtcbnZhciBDb250YWluZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBDb250YWluZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc2FibGVHdXR0ZXJzID0gcHJvcHMuZGlzYWJsZUd1dHRlcnMsXG4gICAgICBkaXNhYmxlR3V0dGVycyA9IF9wcm9wcyRkaXNhYmxlR3V0dGVycyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUd1dHRlcnMsXG4gICAgICBfcHJvcHMkZml4ZWQgPSBwcm9wcy5maXhlZCxcbiAgICAgIGZpeGVkID0gX3Byb3BzJGZpeGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmaXhlZCxcbiAgICAgIF9wcm9wcyRtYXhXaWR0aCA9IHByb3BzLm1heFdpZHRoLFxuICAgICAgbWF4V2lkdGggPSBfcHJvcHMkbWF4V2lkdGggPT09IHZvaWQgMCA/ICdsZycgOiBfcHJvcHMkbWF4V2lkdGgsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVHdXR0ZXJzXCIsIFwiZml4ZWRcIiwgXCJtYXhXaWR0aFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgZml4ZWQgJiYgY2xhc3Nlcy5maXhlZCwgZGlzYWJsZUd1dHRlcnMgJiYgY2xhc3Nlcy5kaXNhYmxlR3V0dGVycywgbWF4V2lkdGggIT09IGZhbHNlICYmIGNsYXNzZXNbXCJtYXhXaWR0aFwiLmNvbmNhdChjYXBpdGFsaXplKFN0cmluZyhtYXhXaWR0aCkpKV0pLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsZWZ0IGFuZCByaWdodCBwYWRkaW5nIGlzIHJlbW92ZWQuXG4gICAqL1xuICBkaXNhYmxlR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWF4LXdpZHRoIHRvIG1hdGNoIHRoZSBtaW4td2lkdGggb2YgdGhlIGN1cnJlbnQgYnJlYWtwb2ludC5cbiAgICogVGhpcyBpcyB1c2VmdWwgaWYgeW91J2QgcHJlZmVyIHRvIGRlc2lnbiBmb3IgYSBmaXhlZCBzZXQgb2Ygc2l6ZXNcbiAgICogaW5zdGVhZCBvZiB0cnlpbmcgdG8gYWNjb21tb2RhdGUgYSBmdWxseSBmbHVpZCB2aWV3cG9ydC5cbiAgICogSXQncyBmbHVpZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIG1heC13aWR0aCBvZiB0aGUgY29udGFpbmVyLlxuICAgKiBUaGUgY29udGFpbmVyIHdpZHRoIGdyb3dzIHdpdGggdGhlIHNpemUgb2YgdGhlIHNjcmVlbi5cbiAgICogU2V0IHRvIGBmYWxzZWAgdG8gZGlzYWJsZSBgbWF4V2lkdGhgLlxuICAgKi9cbiAgbWF4V2lkdGg6IFByb3BUeXBlcy5vbmVPZihbJ2xnJywgJ21kJywgJ3NtJywgJ3hsJywgJ3hzJywgZmFsc2VdKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlDb250YWluZXInXG59KShDb250YWluZXIpOyIsInZhciBibHVlID0ge1xuICA1MDogJyNlM2YyZmQnLFxuICAxMDA6ICcjYmJkZWZiJyxcbiAgMjAwOiAnIzkwY2FmOScsXG4gIDMwMDogJyM2NGI1ZjYnLFxuICA0MDA6ICcjNDJhNWY1JyxcbiAgNTAwOiAnIzIxOTZmMycsXG4gIDYwMDogJyMxZTg4ZTUnLFxuICA3MDA6ICcjMTk3NmQyJyxcbiAgODAwOiAnIzE1NjVjMCcsXG4gIDkwMDogJyMwZDQ3YTEnLFxuICBBMTAwOiAnIzgyYjFmZicsXG4gIEEyMDA6ICcjNDQ4YWZmJyxcbiAgQTQwMDogJyMyOTc5ZmYnLFxuICBBNzAwOiAnIzI5NjJmZidcbn07XG5leHBvcnQgZGVmYXVsdCBibHVlOyIsInZhciBjb21tb24gPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI2ZmZidcbn07XG5leHBvcnQgZGVmYXVsdCBjb21tb247IiwidmFyIGdyZWVuID0ge1xuICA1MDogJyNlOGY1ZTknLFxuICAxMDA6ICcjYzhlNmM5JyxcbiAgMjAwOiAnI2E1ZDZhNycsXG4gIDMwMDogJyM4MWM3ODQnLFxuICA0MDA6ICcjNjZiYjZhJyxcbiAgNTAwOiAnIzRjYWY1MCcsXG4gIDYwMDogJyM0M2EwNDcnLFxuICA3MDA6ICcjMzg4ZTNjJyxcbiAgODAwOiAnIzJlN2QzMicsXG4gIDkwMDogJyMxYjVlMjAnLFxuICBBMTAwOiAnI2I5ZjZjYScsXG4gIEEyMDA6ICcjNjlmMGFlJyxcbiAgQTQwMDogJyMwMGU2NzYnLFxuICBBNzAwOiAnIzAwYzg1Mydcbn07XG5leHBvcnQgZGVmYXVsdCBncmVlbjsiLCJ2YXIgZ3JleSA9IHtcbiAgNTA6ICcjZmFmYWZhJyxcbiAgMTAwOiAnI2Y1ZjVmNScsXG4gIDIwMDogJyNlZWVlZWUnLFxuICAzMDA6ICcjZTBlMGUwJyxcbiAgNDAwOiAnI2JkYmRiZCcsXG4gIDUwMDogJyM5ZTllOWUnLFxuICA2MDA6ICcjNzU3NTc1JyxcbiAgNzAwOiAnIzYxNjE2MScsXG4gIDgwMDogJyM0MjQyNDInLFxuICA5MDA6ICcjMjEyMTIxJyxcbiAgQTEwMDogJyNkNWQ1ZDUnLFxuICBBMjAwOiAnI2FhYWFhYScsXG4gIEE0MDA6ICcjMzAzMDMwJyxcbiAgQTcwMDogJyM2MTYxNjEnXG59O1xuZXhwb3J0IGRlZmF1bHQgZ3JleTsiLCJ2YXIgaW5kaWdvID0ge1xuICA1MDogJyNlOGVhZjYnLFxuICAxMDA6ICcjYzVjYWU5JyxcbiAgMjAwOiAnIzlmYThkYScsXG4gIDMwMDogJyM3OTg2Y2InLFxuICA0MDA6ICcjNWM2YmMwJyxcbiAgNTAwOiAnIzNmNTFiNScsXG4gIDYwMDogJyMzOTQ5YWInLFxuICA3MDA6ICcjMzAzZjlmJyxcbiAgODAwOiAnIzI4MzU5MycsXG4gIDkwMDogJyMxYTIzN2UnLFxuICBBMTAwOiAnIzhjOWVmZicsXG4gIEEyMDA6ICcjNTM2ZGZlJyxcbiAgQTQwMDogJyMzZDVhZmUnLFxuICBBNzAwOiAnIzMwNGZmZSdcbn07XG5leHBvcnQgZGVmYXVsdCBpbmRpZ287IiwidmFyIG9yYW5nZSA9IHtcbiAgNTA6ICcjZmZmM2UwJyxcbiAgMTAwOiAnI2ZmZTBiMicsXG4gIDIwMDogJyNmZmNjODAnLFxuICAzMDA6ICcjZmZiNzRkJyxcbiAgNDAwOiAnI2ZmYTcyNicsXG4gIDUwMDogJyNmZjk4MDAnLFxuICA2MDA6ICcjZmI4YzAwJyxcbiAgNzAwOiAnI2Y1N2MwMCcsXG4gIDgwMDogJyNlZjZjMDAnLFxuICA5MDA6ICcjZTY1MTAwJyxcbiAgQTEwMDogJyNmZmQxODAnLFxuICBBMjAwOiAnI2ZmYWI0MCcsXG4gIEE0MDA6ICcjZmY5MTAwJyxcbiAgQTcwMDogJyNmZjZkMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgb3JhbmdlOyIsInZhciBwaW5rID0ge1xuICA1MDogJyNmY2U0ZWMnLFxuICAxMDA6ICcjZjhiYmQwJyxcbiAgMjAwOiAnI2Y0OGZiMScsXG4gIDMwMDogJyNmMDYyOTInLFxuICA0MDA6ICcjZWM0MDdhJyxcbiAgNTAwOiAnI2U5MWU2MycsXG4gIDYwMDogJyNkODFiNjAnLFxuICA3MDA6ICcjYzIxODViJyxcbiAgODAwOiAnI2FkMTQ1NycsXG4gIDkwMDogJyM4ODBlNGYnLFxuICBBMTAwOiAnI2ZmODBhYicsXG4gIEEyMDA6ICcjZmY0MDgxJyxcbiAgQTQwMDogJyNmNTAwNTcnLFxuICBBNzAwOiAnI2M1MTE2Midcbn07XG5leHBvcnQgZGVmYXVsdCBwaW5rOyIsInZhciByZWQgPSB7XG4gIDUwOiAnI2ZmZWJlZScsXG4gIDEwMDogJyNmZmNkZDInLFxuICAyMDA6ICcjZWY5YTlhJyxcbiAgMzAwOiAnI2U1NzM3MycsXG4gIDQwMDogJyNlZjUzNTAnLFxuICA1MDA6ICcjZjQ0MzM2JyxcbiAgNjAwOiAnI2U1MzkzNScsXG4gIDcwMDogJyNkMzJmMmYnLFxuICA4MDA6ICcjYzYyODI4JyxcbiAgOTAwOiAnI2I3MWMxYycsXG4gIEExMDA6ICcjZmY4YTgwJyxcbiAgQTIwMDogJyNmZjUyNTInLFxuICBBNDAwOiAnI2ZmMTc0NCcsXG4gIEE3MDA6ICcjZDUwMDAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlZDsiLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIHdob3NlIHZhbHVlIGlzIGxpbWl0ZWQgdG8gdGhlIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2xhbXBlZFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBUaGUgbG93ZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBUaGUgdXBwZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxuICogQHJldHVybnMge251bWJlcn0gQSBudW1iZXIgaW4gdGhlIHJhbmdlIFttaW4sIG1heF1cbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgXCIuY29uY2F0KHZhbHVlLCBcIiBpcyBvdXQgb2YgcmFuZ2UgW1wiKS5jb25jYXQobWluLCBcIiwgXCIpLmNvbmNhdChtYXgsIFwiXS5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyBoZXggZm9ybWF0IHRvIENTUyByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhleCBjb2xvciwgaS5lLiAjbm5uIG9yICNubm5ubm5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmdcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihjb2xvcikge1xuICBjb2xvciA9IGNvbG9yLnN1YnN0cigxKTtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIi57MSxcIi5jb25jYXQoY29sb3IubGVuZ3RoID49IDYgPyAyIDogMSwgXCJ9XCIpLCAnZycpO1xuICB2YXIgY29sb3JzID0gY29sb3IubWF0Y2gocmUpO1xuXG4gIGlmIChjb2xvcnMgJiYgY29sb3JzWzBdLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBuICsgbjtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb2xvcnMgPyBcInJnYlwiLmNvbmNhdChjb2xvcnMubGVuZ3RoID09PSA0ID8gJ2EnIDogJycsIFwiKFwiKS5jb25jYXQoY29sb3JzLm1hcChmdW5jdGlvbiAobiwgaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPCAzID8gcGFyc2VJbnQobiwgMTYpIDogTWF0aC5yb3VuZChwYXJzZUludChuLCAxNikgLyAyNTUgKiAxMDAwKSAvIDEwMDA7XG4gIH0pLmpvaW4oJywgJyksIFwiKVwiKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBpbnRUb0hleChpbnQpIHtcbiAgdmFyIGhleCA9IGludC50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIuY29uY2F0KGhleCkgOiBoZXg7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBDU1MgcmdiIGZvcm1hdCB0byBDU1MgaGV4IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBSR0IgY29sb3IsIGkuZS4gcmdiKG4sIG4sIG4pXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyByZ2IgY29sb3Igc3RyaW5nLCBpLmUuICNubm5ubm5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICB2YXIgX2RlY29tcG9zZUNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpLFxuICAgICAgdmFsdWVzID0gX2RlY29tcG9zZUNvbG9yLnZhbHVlcztcblxuICByZXR1cm4gXCIjXCIuY29uY2F0KHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gaW50VG9IZXgobik7XG4gIH0pLmpvaW4oJycpKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIGhzbCBmb3JtYXQgdG8gcmdiIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIU0wgY29sb3IgdmFsdWVzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZ2IgY29sb3IgdmFsdWVzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgX2NvbG9yID0gY29sb3IsXG4gICAgICB2YWx1ZXMgPSBfY29sb3IudmFsdWVzO1xuICB2YXIgaCA9IHZhbHVlc1swXTtcbiAgdmFyIHMgPSB2YWx1ZXNbMV0gLyAxMDA7XG4gIHZhciBsID0gdmFsdWVzWzJdIC8gMTAwO1xuICB2YXIgYSA9IHMgKiBNYXRoLm1pbihsLCAxIC0gbCk7XG5cbiAgdmFyIGYgPSBmdW5jdGlvbiBmKG4pIHtcbiAgICB2YXIgayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogKG4gKyBoIC8gMzApICUgMTI7XG4gICAgcmV0dXJuIGwgLSBhICogTWF0aC5tYXgoTWF0aC5taW4oayAtIDMsIDkgLSBrLCAxKSwgLTEpO1xuICB9O1xuXG4gIHZhciB0eXBlID0gJ3JnYic7XG4gIHZhciByZ2IgPSBbTWF0aC5yb3VuZChmKDApICogMjU1KSwgTWF0aC5yb3VuZChmKDgpICogMjU1KSwgTWF0aC5yb3VuZChmKDQpICogMjU1KV07XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdoc2xhJykge1xuICAgIHR5cGUgKz0gJ2EnO1xuICAgIHJnYi5wdXNoKHZhbHVlc1szXSk7XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3Ioe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiByZ2JcbiAgfSk7XG59XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgYW5kIHZhbHVlcyBvZiBhIGNvbG9yLlxuICpcbiAqIE5vdGU6IERvZXMgbm90IHN1cHBvcnQgcmdiICUgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBNVUkgY29sb3Igb2JqZWN0OiB7dHlwZTogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci50eXBlKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgaWYgKGNvbG9yLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGRlY29tcG9zZUNvbG9yKGhleFRvUmdiKGNvbG9yKSk7XG4gIH1cblxuICB2YXIgbWFya2VyID0gY29sb3IuaW5kZXhPZignKCcpO1xuICB2YXIgdHlwZSA9IGNvbG9yLnN1YnN0cmluZygwLCBtYXJrZXIpO1xuXG4gIGlmIChbJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ10uaW5kZXhPZih0eXBlKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgYFwiLmNvbmNhdChjb2xvciwgXCJgIGNvbG9yLlxcbldlIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpLlwiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMywgY29sb3IpKTtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSBjb2xvci5zdWJzdHJpbmcobWFya2VyICsgMSwgY29sb3IubGVuZ3RoIC0gMSkuc3BsaXQoJywnKTtcbiAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiB2YWx1ZXNcbiAgfTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBvYmplY3Qgd2l0aCB0eXBlIGFuZCB2YWx1ZXMgdG8gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbG9yIC0gRGVjb21wb3NlZCBjb2xvclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yLnR5cGUgLSBPbmUgb2Y6ICdyZ2InLCAncmdiYScsICdoc2wnLCAnaHNsYSdcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbG9yLnZhbHVlcyAtIFtuLG4sbl0gb3IgW24sbixuLG5dXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmdcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjb21wb3NlQ29sb3IoY29sb3IpIHtcbiAgdmFyIHR5cGUgPSBjb2xvci50eXBlO1xuICB2YXIgdmFsdWVzID0gY29sb3IudmFsdWVzO1xuXG4gIGlmICh0eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIC8vIE9ubHkgY29udmVydCB0aGUgZmlyc3QgMyB2YWx1ZXMgdG8gaW50IChpLmUuIG5vdCBhbHBoYSlcbiAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICByZXR1cm4gaSA8IDMgPyBwYXJzZUludChuLCAxMCkgOiBuO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgdmFsdWVzWzFdID0gXCJcIi5jb25jYXQodmFsdWVzWzFdLCBcIiVcIik7XG4gICAgdmFsdWVzWzJdID0gXCJcIi5jb25jYXQodmFsdWVzWzJdLCBcIiVcIik7XG4gIH1cblxuICByZXR1cm4gXCJcIi5jb25jYXQodHlwZSwgXCIoXCIpLmNvbmNhdCh2YWx1ZXMuam9pbignLCAnKSwgXCIpXCIpO1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHR3byBjb2xvcnMuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yZWdyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gQSBjb250cmFzdCByYXRpbyB2YWx1ZSBpbiB0aGUgcmFuZ2UgMCAtIDIxLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGZvcmVncm91bmQsIGJhY2tncm91bmQpIHtcbiAgdmFyIGx1bUEgPSBnZXRMdW1pbmFuY2UoZm9yZWdyb3VuZCk7XG4gIHZhciBsdW1CID0gZ2V0THVtaW5hbmNlKGJhY2tncm91bmQpO1xuICByZXR1cm4gKE1hdGgubWF4KGx1bUEsIGx1bUIpICsgMC4wNSkgLyAoTWF0aC5taW4obHVtQSwgbHVtQikgKyAwLjA1KTtcbn1cbi8qKlxuICogVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgYW55IHBvaW50IGluIGEgY29sb3Igc3BhY2UsXG4gKiBub3JtYWxpemVkIHRvIDAgZm9yIGRhcmtlc3QgYmxhY2sgYW5kIDEgZm9yIGxpZ2h0ZXN0IHdoaXRlLlxuICpcbiAqIEZvcm11bGE6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE3Lmh0bWwjRzE3LXRlc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgdGhlIGNvbG9yIGluIHRoZSByYW5nZSAwIC0gMVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciByZ2IgPSBjb2xvci50eXBlID09PSAnaHNsJyA/IGRlY29tcG9zZUNvbG9yKGhzbFRvUmdiKGNvbG9yKSkudmFsdWVzIDogY29sb3IudmFsdWVzO1xuICByZ2IgPSByZ2IubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YWwgLz0gMjU1OyAvLyBub3JtYWxpemVkXG5cbiAgICByZXR1cm4gdmFsIDw9IDAuMDM5MjggPyB2YWwgLyAxMi45MiA6IE1hdGgucG93KCh2YWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfSk7IC8vIFRydW5jYXRlIGF0IDMgZGlnaXRzXG5cbiAgcmV0dXJuIE51bWJlcigoMC4yMTI2ICogcmdiWzBdICsgMC43MTUyICogcmdiWzFdICsgMC4wNzIyICogcmdiWzJdKS50b0ZpeGVkKDMpKTtcbn1cbi8qKlxuICogRGFya2VuIG9yIGxpZ2h0ZW4gYSBjb2xvciwgZGVwZW5kaW5nIG9uIGl0cyBsdW1pbmFuY2UuXG4gKiBMaWdodCBjb2xvcnMgYXJlIGRhcmtlbmVkLCBkYXJrIGNvbG9ycyBhcmUgbGlnaHRlbmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudD0wLjE1IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtcGhhc2l6ZShjb2xvcikge1xuICB2YXIgY29lZmZpY2llbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuMTU7XG4gIHJldHVybiBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC41ID8gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkgOiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCk7XG59XG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlcyBhcmUgb3ZlcndyaXR0ZW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwIC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKiBVc2UgYGltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2AgaW5zdGVhZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmFkZShjb2xvciwgdmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGZhZGVgIGNvbG9yIHV0aWxpdHkgd2FzIHJlbmFtZWQgdG8gYGFscGhhYCB0byBiZXR0ZXIgZGVzY3JpYmUgaXRzIGZ1bmN0aW9uYWxpdHkuJywgJycsIFwiWW91IHNob3VsZCB1c2UgYGltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2BcIl0uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbHBoYShjb2xvciwgdmFsdWUpO1xufVxuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlIGlzIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbHBoYShjb2xvciwgdmFsdWUpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhbHVlID0gY2xhbXAodmFsdWUpO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAncmdiJyB8fCBjb2xvci50eXBlID09PSAnaHNsJykge1xuICAgIGNvbG9yLnR5cGUgKz0gJ2EnO1xuICB9XG5cbiAgY29sb3IudmFsdWVzWzNdID0gdmFsdWU7XG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIERhcmtlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICo9IDEgLSBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIExpZ2h0ZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKz0gKDEwMCAtIGNvbG9yLnZhbHVlc1syXSkgKiBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKz0gKDI1NSAtIGNvbG9yLnZhbHVlc1tpXSkgKiBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIFNvcnRlZCBBU0MgYnkgc2l6ZS4gVGhhdCdzIGltcG9ydGFudC5cbi8vIEl0IGNhbid0IGJlIGNvbmZpZ3VyZWQgYXMgaXQncyB1c2VkIHN0YXRpY2FsbHkgZm9yIHByb3BUeXBlcy5cbmV4cG9ydCB2YXIga2V5cyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXTsgLy8gS2VlcCBpbiBtaW5kIHRoYXQgQG1lZGlhIGlzIGluY2x1c2l2ZSBieSB0aGUgQ1NTIHNwZWNpZmljYXRpb24uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzKSB7XG4gIHZhciBfYnJlYWtwb2ludHMkdmFsdWVzID0gYnJlYWtwb2ludHMudmFsdWVzLFxuICAgICAgdmFsdWVzID0gX2JyZWFrcG9pbnRzJHZhbHVlcyA9PT0gdm9pZCAwID8ge1xuICAgIHhzOiAwLFxuICAgIHNtOiA2MDAsXG4gICAgbWQ6IDk2MCxcbiAgICBsZzogMTI4MCxcbiAgICB4bDogMTkyMFxuICB9IDogX2JyZWFrcG9pbnRzJHZhbHVlcyxcbiAgICAgIF9icmVha3BvaW50cyR1bml0ID0gYnJlYWtwb2ludHMudW5pdCxcbiAgICAgIHVuaXQgPSBfYnJlYWtwb2ludHMkdW5pdCA9PT0gdm9pZCAwID8gJ3B4JyA6IF9icmVha3BvaW50cyR1bml0LFxuICAgICAgX2JyZWFrcG9pbnRzJHN0ZXAgPSBicmVha3BvaW50cy5zdGVwLFxuICAgICAgc3RlcCA9IF9icmVha3BvaW50cyRzdGVwID09PSB2b2lkIDAgPyA1IDogX2JyZWFrcG9pbnRzJHN0ZXAsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhicmVha3BvaW50cywgW1widmFsdWVzXCIsIFwidW5pdFwiLCBcInN0ZXBcIl0pO1xuXG4gIGZ1bmN0aW9uIHVwKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB2YWx1ZXNba2V5XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5XSA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodmFsdWUpLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duKGtleSkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpICsgMTtcbiAgICB2YXIgdXBwZXJib3VuZCA9IHZhbHVlc1trZXlzW2VuZEluZGV4XV07XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAvLyB4bCBkb3duIGFwcGxpZXMgdG8gYWxsIHNpemVzXG4gICAgICByZXR1cm4gdXAoJ3hzJyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHVwcGVyYm91bmQgPT09ICdudW1iZXInICYmIGVuZEluZGV4ID4gMCA/IHVwcGVyYm91bmQgOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtYXgtd2lkdGg6XCIuY29uY2F0KHZhbHVlIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJldHdlZW4oc3RhcnQsIGVuZCkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihlbmQpO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB1cChzdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHR5cGVvZiB2YWx1ZXNbc3RhcnRdID09PSAnbnVtYmVyJyA/IHZhbHVlc1tzdGFydF0gOiBzdGFydCkuY29uY2F0KHVuaXQsIFwiKSBhbmQgXCIpICsgXCIobWF4LXdpZHRoOlwiLmNvbmNhdCgoZW5kSW5kZXggIT09IC0xICYmIHR5cGVvZiB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA6IGVuZCkgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25seShrZXkpIHtcbiAgICByZXR1cm4gYmV0d2VlbihrZXksIGtleSk7XG4gIH1cblxuICB2YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHdpZHRoKGtleSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS5icmVha3BvaW50cy53aWR0aGAgdXRpbGl0eSBpcyBkZXByZWNhdGVkIGJlY2F1c2UgaXQncyByZWR1bmRhbnQuXCIsICdVc2UgdGhlIGB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNgIGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNba2V5XTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAga2V5czoga2V5cyxcbiAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICB1cDogdXAsXG4gICAgZG93bjogZG93bixcbiAgICBiZXR3ZWVuOiBiZXR3ZWVuLFxuICAgIG9ubHk6IG9ubHksXG4gICAgd2lkdGg6IHdpZHRoXG4gIH0sIG90aGVyKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNaXhpbnMoYnJlYWtwb2ludHMsIHNwYWNpbmcsIG1peGlucykge1xuICB2YXIgX3Rvb2xiYXI7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBndXR0ZXJzOiBmdW5jdGlvbiBndXR0ZXJzKCkge1xuICAgICAgdmFyIHN0eWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogdGhlbWUubWl4aW5zLmd1dHRlcnMoKSBpcyBkZXByZWNhdGVkLicsICdZb3UgY2FuIHVzZSB0aGUgc291cmNlIG9mIHRoZSBtaXhpbiBkaXJlY3RseTonLCBcIlxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XFxuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygzKSxcXG4gICAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygzKSxcXG4gICAgICB9LFxcbiAgICAgIFwiXS5qb2luKCdcXG4nKSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygyKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDIpXG4gICAgICB9LCBzdHlsZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYnJlYWtwb2ludHMudXAoJ3NtJyksIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKVxuICAgICAgfSwgc3R5bGVzW2JyZWFrcG9pbnRzLnVwKCdzbScpXSkpKTtcbiAgICB9LFxuICAgIHRvb2xiYXI6IChfdG9vbGJhciA9IHtcbiAgICAgIG1pbkhlaWdodDogNTZcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIFwiXCIuY29uY2F0KGJyZWFrcG9pbnRzLnVwKCd4cycpLCBcIiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4XG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIG1pbkhlaWdodDogNjRcbiAgICB9KSwgX3Rvb2xiYXIpXG4gIH0sIG1peGlucyk7XG59IiwiaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVUaGVtZSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU11aVN0cmljdE1vZGVUaGVtZShvcHRpb25zKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUaGVtZS5hcHBseSh2b2lkIDAsIFtkZWVwbWVyZ2Uoe1xuICAgIHVuc3RhYmxlX3N0cmljdE1vZGU6IHRydWVcbiAgfSwgb3B0aW9ucyldLmNvbmNhdChhcmdzKSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb2xvcnMvY29tbW9uJztcbmltcG9ydCBncmV5IGZyb20gJy4uL2NvbG9ycy9ncmV5JztcbmltcG9ydCBpbmRpZ28gZnJvbSAnLi4vY29sb3JzL2luZGlnbyc7XG5pbXBvcnQgcGluayBmcm9tICcuLi9jb2xvcnMvcGluayc7XG5pbXBvcnQgcmVkIGZyb20gJy4uL2NvbG9ycy9yZWQnO1xuaW1wb3J0IG9yYW5nZSBmcm9tICcuLi9jb2xvcnMvb3JhbmdlJztcbmltcG9ydCBibHVlIGZyb20gJy4uL2NvbG9ycy9ibHVlJztcbmltcG9ydCBncmVlbiBmcm9tICcuLi9jb2xvcnMvZ3JlZW4nO1xuaW1wb3J0IHsgZGFya2VuLCBnZXRDb250cmFzdFJhdGlvLCBsaWdodGVuIH0gZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB2YXIgbGlnaHQgPSB7XG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgdGV4dC5cbiAgdGV4dDoge1xuICAgIC8vIFRoZSBtb3N0IGltcG9ydGFudCB0ZXh0LlxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICAvLyBTZWNvbmRhcnkgdGV4dC5cbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBEaXNhYmxlZCB0ZXh0IGhhdmUgZXZlbiBsb3dlciB2aXN1YWwgcHJvbWluZW5jZS5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIC8vIFRleHQgaGludHMuXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH0sXG4gIC8vIFRoZSBjb2xvciB1c2VkIHRvIGRpdmlkZSBkaWZmZXJlbnQgZWxlbWVudHMuXG4gIGRpdmlkZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHN1cmZhY2VzLlxuICAvLyBDb25zaXN0ZW5jeSBiZXR3ZWVuIHRoZXNlIHZhbHVlcyBpcyBpbXBvcnRhbnQuXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogY29tbW9uLndoaXRlLFxuICAgIGRlZmF1bHQ6IGdyZXlbNTBdXG4gIH0sXG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgYWN0aW9uIGVsZW1lbnRzLlxuICBhY3Rpb246IHtcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gYWN0aXZlIGFjdGlvbiBsaWtlIGFuIGljb24gYnV0dG9uLlxuICAgIGFjdGl2ZTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBob3ZlcmVkIGFjdGlvbi5cbiAgICBob3ZlcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wNCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBzZWxlY3RlZCBhY3Rpb24uXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMDgsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gICAgLy8gVGhlIGJhY2tncm91bmQgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMTJcbiAgfVxufTtcbmV4cG9ydCB2YXIgZGFyayA9IHtcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6IGNvbW1vbi53aGl0ZSxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBpY29uOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9LFxuICBkaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogZ3JleVs4MDBdLFxuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJ1xuICB9LFxuICBhY3Rpb246IHtcbiAgICBhY3RpdmU6IGNvbW1vbi53aGl0ZSxcbiAgICBob3ZlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wOCxcbiAgICBzZWxlY3RlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4xNixcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMjRcbiAgfVxufTtcblxuZnVuY3Rpb24gYWRkTGlnaHRPckRhcmsoaW50ZW50LCBkaXJlY3Rpb24sIHNoYWRlLCB0b25hbE9mZnNldCkge1xuICB2YXIgdG9uYWxPZmZzZXRMaWdodCA9IHRvbmFsT2Zmc2V0LmxpZ2h0IHx8IHRvbmFsT2Zmc2V0O1xuICB2YXIgdG9uYWxPZmZzZXREYXJrID0gdG9uYWxPZmZzZXQuZGFyayB8fCB0b25hbE9mZnNldCAqIDEuNTtcblxuICBpZiAoIWludGVudFtkaXJlY3Rpb25dKSB7XG4gICAgaWYgKGludGVudC5oYXNPd25Qcm9wZXJ0eShzaGFkZSkpIHtcbiAgICAgIGludGVudFtkaXJlY3Rpb25dID0gaW50ZW50W3NoYWRlXTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xpZ2h0Jykge1xuICAgICAgaW50ZW50LmxpZ2h0ID0gbGlnaHRlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXRMaWdodCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkYXJrJykge1xuICAgICAgaW50ZW50LmRhcmsgPSBkYXJrZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0RGFyayk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUocGFsZXR0ZSkge1xuICB2YXIgX3BhbGV0dGUkcHJpbWFyeSA9IHBhbGV0dGUucHJpbWFyeSxcbiAgICAgIHByaW1hcnkgPSBfcGFsZXR0ZSRwcmltYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGluZGlnb1szMDBdLFxuICAgIG1haW46IGluZGlnb1s1MDBdLFxuICAgIGRhcms6IGluZGlnb1s3MDBdXG4gIH0gOiBfcGFsZXR0ZSRwcmltYXJ5LFxuICAgICAgX3BhbGV0dGUkc2Vjb25kYXJ5ID0gcGFsZXR0ZS5zZWNvbmRhcnksXG4gICAgICBzZWNvbmRhcnkgPSBfcGFsZXR0ZSRzZWNvbmRhcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcGluay5BMjAwLFxuICAgIG1haW46IHBpbmsuQTQwMCxcbiAgICBkYXJrOiBwaW5rLkE3MDBcbiAgfSA6IF9wYWxldHRlJHNlY29uZGFyeSxcbiAgICAgIF9wYWxldHRlJGVycm9yID0gcGFsZXR0ZS5lcnJvcixcbiAgICAgIGVycm9yID0gX3BhbGV0dGUkZXJyb3IgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcmVkWzMwMF0sXG4gICAgbWFpbjogcmVkWzUwMF0sXG4gICAgZGFyazogcmVkWzcwMF1cbiAgfSA6IF9wYWxldHRlJGVycm9yLFxuICAgICAgX3BhbGV0dGUkd2FybmluZyA9IHBhbGV0dGUud2FybmluZyxcbiAgICAgIHdhcm5pbmcgPSBfcGFsZXR0ZSR3YXJuaW5nID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IG9yYW5nZVszMDBdLFxuICAgIG1haW46IG9yYW5nZVs1MDBdLFxuICAgIGRhcms6IG9yYW5nZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSR3YXJuaW5nLFxuICAgICAgX3BhbGV0dGUkaW5mbyA9IHBhbGV0dGUuaW5mbyxcbiAgICAgIGluZm8gPSBfcGFsZXR0ZSRpbmZvID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGJsdWVbMzAwXSxcbiAgICBtYWluOiBibHVlWzUwMF0sXG4gICAgZGFyazogYmx1ZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRpbmZvLFxuICAgICAgX3BhbGV0dGUkc3VjY2VzcyA9IHBhbGV0dGUuc3VjY2VzcyxcbiAgICAgIHN1Y2Nlc3MgPSBfcGFsZXR0ZSRzdWNjZXNzID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGdyZWVuWzMwMF0sXG4gICAgbWFpbjogZ3JlZW5bNTAwXSxcbiAgICBkYXJrOiBncmVlbls3MDBdXG4gIH0gOiBfcGFsZXR0ZSRzdWNjZXNzLFxuICAgICAgX3BhbGV0dGUkdHlwZSA9IHBhbGV0dGUudHlwZSxcbiAgICAgIHR5cGUgPSBfcGFsZXR0ZSR0eXBlID09PSB2b2lkIDAgPyAnbGlnaHQnIDogX3BhbGV0dGUkdHlwZSxcbiAgICAgIF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9IHBhbGV0dGUuY29udHJhc3RUaHJlc2hvbGQsXG4gICAgICBjb250cmFzdFRocmVzaG9sZCA9IF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9PT0gdm9pZCAwID8gMyA6IF9wYWxldHRlJGNvbnRyYXN0VGhyZSxcbiAgICAgIF9wYWxldHRlJHRvbmFsT2Zmc2V0ID0gcGFsZXR0ZS50b25hbE9mZnNldCxcbiAgICAgIHRvbmFsT2Zmc2V0ID0gX3BhbGV0dGUkdG9uYWxPZmZzZXQgPT09IHZvaWQgMCA/IDAuMiA6IF9wYWxldHRlJHRvbmFsT2Zmc2V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocGFsZXR0ZSwgW1wicHJpbWFyeVwiLCBcInNlY29uZGFyeVwiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwidHlwZVwiLCBcImNvbnRyYXN0VGhyZXNob2xkXCIsIFwidG9uYWxPZmZzZXRcIl0pOyAvLyBVc2UgdGhlIHNhbWUgbG9naWMgYXNcbiAgLy8gQm9vdHN0cmFwOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi8xZDZlMzcxMGRkNDQ3ZGUxYTIwMGYyOWU4ZmE1MjFmOGEwOTA4ZjcwL3Njc3MvX2Z1bmN0aW9ucy5zY3NzI0w1OVxuICAvLyBhbmQgbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIgaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9hYzQ2Yjg4NjNjNGRhYjlmYzIyYzRjNjYyZGM2YmQxYjY1ZGQ2NTJmL3BhY2thZ2VzL21kYy10aGVtZS9fZnVuY3Rpb25zLnNjc3MjTDU0XG5cblxuICBmdW5jdGlvbiBnZXRDb250cmFzdFRleHQoYmFja2dyb3VuZCkge1xuICAgIHZhciBjb250cmFzdFRleHQgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGRhcmsudGV4dC5wcmltYXJ5KSA+PSBjb250cmFzdFRocmVzaG9sZCA/IGRhcmsudGV4dC5wcmltYXJ5IDogbGlnaHQudGV4dC5wcmltYXJ5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBjb250cmFzdCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgY29udHJhc3RUZXh0KTtcblxuICAgICAgaWYgKGNvbnRyYXN0IDwgMykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgY29udHJhc3QgcmF0aW8gb2YgXCIuY29uY2F0KGNvbnRyYXN0LCBcIjoxIGZvciBcIikuY29uY2F0KGNvbnRyYXN0VGV4dCwgXCIgb24gXCIpLmNvbmNhdChiYWNrZ3JvdW5kKSwgJ2ZhbGxzIGJlbG93IHRoZSBXQ0FHIHJlY29tbWVuZGVkIGFic29sdXRlIG1pbmltdW0gY29udHJhc3QgcmF0aW8gb2YgMzoxLicsICdodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3QnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyYXN0VGV4dDtcbiAgfVxuXG4gIHZhciBhdWdtZW50Q29sb3IgPSBmdW5jdGlvbiBhdWdtZW50Q29sb3IoY29sb3IpIHtcbiAgICB2YXIgbWFpblNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA1MDA7XG4gICAgdmFyIGxpZ2h0U2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDMwMDtcbiAgICB2YXIgZGFya1NoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiA3MDA7XG4gICAgY29sb3IgPSBfZXh0ZW5kcyh7fSwgY29sb3IpO1xuXG4gICAgaWYgKCFjb2xvci5tYWluICYmIGNvbG9yW21haW5TaGFkZV0pIHtcbiAgICAgIGNvbG9yLm1haW4gPSBjb2xvclttYWluU2hhZGVdO1xuICAgIH1cblxuICAgIGlmICghY29sb3IubWFpbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuVGhlIGNvbG9yIG9iamVjdCBuZWVkcyB0byBoYXZlIGEgYG1haW5gIHByb3BlcnR5IG9yIGEgYFwiLmNvbmNhdChtYWluU2hhZGUsIFwiYCBwcm9wZXJ0eS5cIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDQsIG1haW5TaGFkZSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IubWFpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcbmBjb2xvci5tYWluYCBzaG91bGQgYmUgYSBzdHJpbmcsIGJ1dCBgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pLCBcImAgd2FzIHByb3ZpZGVkIGluc3RlYWQuXFxuXFxuRGlkIHlvdSBpbnRlbmQgdG8gdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFwcHJvYWNoZXM/XFxuXFxuaW1wb3J0IHtcXHhBMGdyZWVuIH0gZnJvbSBcXFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXFxcIjtcXG5cXG5jb25zdCB0aGVtZTEgPSBjcmVhdGVUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IGdyZWVuLFxcbn0gfSk7XFxuXFxuY29uc3QgdGhlbWUyID0gY3JlYXRlVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiB7IG1haW46IGdyZWVuWzUwMF0gfSxcXG59IH0pO1wiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNSwgSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbikpKTtcbiAgICB9XG5cbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2xpZ2h0JywgbGlnaHRTaGFkZSwgdG9uYWxPZmZzZXQpO1xuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnZGFyaycsIGRhcmtTaGFkZSwgdG9uYWxPZmZzZXQpO1xuXG4gICAgaWYgKCFjb2xvci5jb250cmFzdFRleHQpIHtcbiAgICAgIGNvbG9yLmNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0VGV4dChjb2xvci5tYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH07XG5cbiAgdmFyIHR5cGVzID0ge1xuICAgIGRhcms6IGRhcmssXG4gICAgbGlnaHQ6IGxpZ2h0XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXR5cGVzW3R5cGVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSBwYWxldHRlIHR5cGUgYFwiLmNvbmNhdCh0eXBlLCBcImAgaXMgbm90IHN1cHBvcnRlZC5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYWxldHRlT3V0cHV0ID0gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgY29tbW9uIGNvbG9ycy5cbiAgICBjb21tb246IGNvbW1vbixcbiAgICAvLyBUaGUgcGFsZXR0ZSB0eXBlLCBjYW4gYmUgbGlnaHQgb3IgZGFyay5cbiAgICB0eXBlOiB0eXBlLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcHJpbWFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBwcmltYXJ5OiBhdWdtZW50Q29sb3IocHJpbWFyeSksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBzZWNvbmRhcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgc2Vjb25kYXJ5OiBhdWdtZW50Q29sb3Ioc2Vjb25kYXJ5LCAnQTQwMCcsICdBMjAwJywgJ0E3MDAnKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IGludGVyZmFjZSBlbGVtZW50cyB0aGF0IHRoZSB1c2VyIHNob3VsZCBiZSBtYWRlIGF3YXJlIG9mLlxuICAgIGVycm9yOiBhdWdtZW50Q29sb3IoZXJyb3IpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGFjdGlvbnMgb3IgaW1wb3J0YW50IG1lc3NhZ2VzLlxuICAgIHdhcm5pbmc6IGF1Z21lbnRDb2xvcih3YXJuaW5nKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcHJlc2VudCBpbmZvcm1hdGlvbiB0byB0aGUgdXNlciB0aGF0IGlzIG5ldXRyYWwgYW5kIG5vdCBuZWNlc3NhcmlseSBpbXBvcnRhbnQuXG4gICAgaW5mbzogYXVnbWVudENvbG9yKGluZm8pLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9mIGFuIGFjdGlvbiB0aGF0IHVzZXIgdHJpZ2dlcmVkLlxuICAgIHN1Y2Nlc3M6IGF1Z21lbnRDb2xvcihzdWNjZXNzKSxcbiAgICAvLyBUaGUgZ3JleSBjb2xvcnMuXG4gICAgZ3JleTogZ3JleSxcbiAgICAvLyBVc2VkIGJ5IGBnZXRDb250cmFzdFRleHQoKWAgdG8gbWF4aW1pemUgdGhlIGNvbnRyYXN0IGJldHdlZW5cbiAgICAvLyB0aGUgYmFja2dyb3VuZCBhbmQgdGhlIHRleHQuXG4gICAgY29udHJhc3RUaHJlc2hvbGQ6IGNvbnRyYXN0VGhyZXNob2xkLFxuICAgIC8vIFRha2VzIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgcmV0dXJucyB0aGUgdGV4dCBjb2xvciB0aGF0IG1heGltaXplcyB0aGUgY29udHJhc3QuXG4gICAgZ2V0Q29udHJhc3RUZXh0OiBnZXRDb250cmFzdFRleHQsXG4gICAgLy8gR2VuZXJhdGUgYSByaWNoIGNvbG9yIG9iamVjdC5cbiAgICBhdWdtZW50Q29sb3I6IGF1Z21lbnRDb2xvcixcbiAgICAvLyBVc2VkIGJ5IHRoZSBmdW5jdGlvbnMgYmVsb3cgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XG4gICAgLy8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxuICAgIC8vIEUuZy4sIHNoaWZ0IGZyb20gUmVkIDUwMCB0byBSZWQgMzAwIG9yIFJlZCA3MDAuXG4gICAgdG9uYWxPZmZzZXQ6IHRvbmFsT2Zmc2V0XG4gIH0sIHR5cGVzW3R5cGVdKSwgb3RoZXIpO1xuICByZXR1cm4gcGFsZXR0ZU91dHB1dDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVbmFyeVNwYWNpbmcgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJztcbnZhciB3YXJuT25jZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNpbmcoKSB7XG4gIHZhciBzcGFjaW5nSW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDg7XG5cbiAgLy8gQWxyZWFkeSB0cmFuc2Zvcm1lZC5cbiAgaWYgKHNwYWNpbmdJbnB1dC5tdWkpIHtcbiAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICB9IC8vIE1hdGVyaWFsIERlc2lnbiBsYXlvdXRzIGFyZSB2aXN1YWxseSBiYWxhbmNlZC4gTW9zdCBtZWFzdXJlbWVudHMgYWxpZ24gdG8gYW4gOGRwIGdyaWQgYXBwbGllZCwgd2hpY2ggYWxpZ25zIGJvdGggc3BhY2luZyBhbmQgdGhlIG92ZXJhbGwgbGF5b3V0LlxuICAvLyBTbWFsbGVyIGNvbXBvbmVudHMsIHN1Y2ggYXMgaWNvbnMgYW5kIHR5cGUsIGNhbiBhbGlnbiB0byBhIDRkcCBncmlkLlxuICAvLyBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9sYXlvdXQvdW5kZXJzdGFuZGluZy1sYXlvdXQuaHRtbCN1c2FnZVxuXG5cbiAgdmFyIHRyYW5zZm9ybSA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh7XG4gICAgc3BhY2luZzogc3BhY2luZ0lucHV0XG4gIH0pO1xuXG4gIHZhciBzcGFjaW5nID0gZnVuY3Rpb24gc3BhY2luZygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGFyZ3MubGVuZ3RoIDw9IDQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLCBleHBlY3RlZCBiZXR3ZWVuIDAgYW5kIDQsIGdvdCBcIi5jb25jYXQoYXJncy5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oMSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGFyZ3NbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dHB1dCA9IHRyYW5zZm9ybShhcmd1bWVudCk7XG4gICAgICByZXR1cm4gdHlwZW9mIG91dHB1dCA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChvdXRwdXQsIFwicHhcIikgOiBvdXRwdXQ7XG4gICAgfSkuam9pbignICcpO1xuICB9OyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0byByZW1vdmUgaW4gdjUuXG5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3BhY2luZywgJ3VuaXQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXdhcm5PbmNlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLnNwYWNpbmcudW5pdCB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLicsICdJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuJywgJ1lvdSBjYW4gcmVwbGFjZSBgdGhlbWUuc3BhY2luZy51bml0ICogeWAgd2l0aCBgdGhlbWUuc3BhY2luZyh5KWAuJywgJycsICdZb3UgY2FuIHVzZSB0aGUgYGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21hdGVyaWFsLXVpLWNvZGVtb2QvUkVBRE1FLm1kI3RoZW1lLXNwYWNpbmctYXBpYCBtaWdyYXRpb24gaGVscGVyIHRvIG1ha2UgdGhlIHByb2Nlc3Mgc21vb3RoZXIuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fybk9uY2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICAgIH1cbiAgfSk7XG4gIHNwYWNpbmcubXVpID0gdHJ1ZTtcbiAgcmV0dXJuIHNwYWNpbmc7XG59IiwiaW1wb3J0IHsgY3JlYXRlU3R5bGVzIGFzIGNyZWF0ZVN0eWxlc09yaWdpbmFsIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7IC8vIGxldCB3YXJuT25jZSA9IGZhbHNlO1xuLy8gVG8gcmVtb3ZlIGluIHY1XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgLy8gd2FybmluZyhcbiAgLy8gICB3YXJuT25jZSxcbiAgLy8gICBbXG4gIC8vICAgICAnTWF0ZXJpYWwtVUk6IGNyZWF0ZVN0eWxlcyBmcm9tIEBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyBpcyBkZXByZWNhdGVkLicsXG4gIC8vICAgICAnUGxlYXNlIHVzZSBAbWF0ZXJpYWwtdWkvc3R5bGVzL2NyZWF0ZVN0eWxlcycsXG4gIC8vICAgXS5qb2luKCdcXG4nKSxcbiAgLy8gKTtcbiAgLy8gd2Fybk9uY2UgPSB0cnVlO1xuICByZXR1cm4gY3JlYXRlU3R5bGVzT3JpZ2luYWwoc3R5bGVzKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlQnJlYWtwb2ludHMgZnJvbSAnLi9jcmVhdGVCcmVha3BvaW50cyc7XG5pbXBvcnQgY3JlYXRlTWl4aW5zIGZyb20gJy4vY3JlYXRlTWl4aW5zJztcbmltcG9ydCBjcmVhdGVQYWxldHRlIGZyb20gJy4vY3JlYXRlUGFsZXR0ZSc7XG5pbXBvcnQgY3JlYXRlVHlwb2dyYXBoeSBmcm9tICcuL2NyZWF0ZVR5cG9ncmFwaHknO1xuaW1wb3J0IHNoYWRvd3MgZnJvbSAnLi9zaGFkb3dzJztcbmltcG9ydCBzaGFwZSBmcm9tICcuL3NoYXBlJztcbmltcG9ydCBjcmVhdGVTcGFjaW5nIGZyb20gJy4vY3JlYXRlU3BhY2luZyc7XG5pbXBvcnQgdHJhbnNpdGlvbnMgZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5pbXBvcnQgekluZGV4IGZyb20gJy4vekluZGV4JztcblxuZnVuY3Rpb24gY3JlYXRlVGhlbWUoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHNJbnB1dCA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkbWl4aW5zID0gb3B0aW9ucy5taXhpbnMsXG4gICAgICBtaXhpbnNJbnB1dCA9IF9vcHRpb25zJG1peGlucyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRtaXhpbnMsXG4gICAgICBfb3B0aW9ucyRwYWxldHRlID0gb3B0aW9ucy5wYWxldHRlLFxuICAgICAgcGFsZXR0ZUlucHV0ID0gX29wdGlvbnMkcGFsZXR0ZSA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRwYWxldHRlLFxuICAgICAgc3BhY2luZ0lucHV0ID0gb3B0aW9ucy5zcGFjaW5nLFxuICAgICAgX29wdGlvbnMkdHlwb2dyYXBoeSA9IG9wdGlvbnMudHlwb2dyYXBoeSxcbiAgICAgIHR5cG9ncmFwaHlJbnB1dCA9IF9vcHRpb25zJHR5cG9ncmFwaHkgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkdHlwb2dyYXBoeSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImJyZWFrcG9pbnRzXCIsIFwibWl4aW5zXCIsIFwicGFsZXR0ZVwiLCBcInNwYWNpbmdcIiwgXCJ0eXBvZ3JhcGh5XCJdKTtcblxuICB2YXIgcGFsZXR0ZSA9IGNyZWF0ZVBhbGV0dGUocGFsZXR0ZUlucHV0KTtcbiAgdmFyIGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoYnJlYWtwb2ludHNJbnB1dCk7XG4gIHZhciBzcGFjaW5nID0gY3JlYXRlU3BhY2luZyhzcGFjaW5nSW5wdXQpO1xuICB2YXIgbXVpVGhlbWUgPSBkZWVwbWVyZ2Uoe1xuICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIG1peGluczogY3JlYXRlTWl4aW5zKGJyZWFrcG9pbnRzLCBzcGFjaW5nLCBtaXhpbnNJbnB1dCksXG4gICAgb3ZlcnJpZGVzOiB7fSxcbiAgICAvLyBJbmplY3QgY3VzdG9tIHN0eWxlc1xuICAgIHBhbGV0dGU6IHBhbGV0dGUsXG4gICAgcHJvcHM6IHt9LFxuICAgIC8vIFByb3ZpZGUgZGVmYXVsdCBwcm9wc1xuICAgIHNoYWRvd3M6IHNoYWRvd3MsXG4gICAgdHlwb2dyYXBoeTogY3JlYXRlVHlwb2dyYXBoeShwYWxldHRlLCB0eXBvZ3JhcGh5SW5wdXQpLFxuICAgIHNwYWNpbmc6IHNwYWNpbmcsXG4gICAgc2hhcGU6IHNoYXBlLFxuICAgIHRyYW5zaXRpb25zOiB0cmFuc2l0aW9ucyxcbiAgICB6SW5kZXg6IHpJbmRleFxuICB9LCBvdGhlcik7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgbXVpVGhlbWUgPSBhcmdzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhcmd1bWVudCkge1xuICAgIHJldHVybiBkZWVwbWVyZ2UoYWNjLCBhcmd1bWVudCk7XG4gIH0sIG11aVRoZW1lKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBwc2V1ZG9DbGFzc2VzID0gWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2ZvY3VzZWQnLCAnZm9jdXNWaXNpYmxlJywgJ3JlcXVpcmVkJywgJ2V4cGFuZGVkJywgJ3NlbGVjdGVkJ107XG5cbiAgICB2YXIgdHJhdmVyc2UgPSBmdW5jdGlvbiB0cmF2ZXJzZShub2RlLCBwYXJlbnRLZXkpIHtcbiAgICAgIHZhciBkZXB0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcbiAgICAgIHZhciBrZXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cbiAgICAgIGZvciAoa2V5IGluIG5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtrZXldO1xuXG4gICAgICAgIGlmIChkZXB0aCA9PT0gMSkge1xuICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignTXVpJykgPT09IDAgJiYgY2hpbGQpIHtcbiAgICAgICAgICAgIHRyYXZlcnNlKGNoaWxkLCBrZXksIGRlcHRoICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBzZXVkb0NsYXNzZXMuaW5kZXhPZihrZXkpICE9PSAtMSAmJiBPYmplY3Qua2V5cyhjaGlsZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgYFwiLmNvbmNhdChwYXJlbnRLZXksIFwiYCBjb21wb25lbnQgaW5jcmVhc2VzIFwiKSArIFwidGhlIENTUyBzcGVjaWZpY2l0eSBvZiB0aGUgYFwiLmNvbmNhdChrZXksIFwiYCBpbnRlcm5hbCBzdGF0ZS5cIiksICdZb3UgY2FuIG5vdCBvdmVycmlkZSBpdCBsaWtlIHRoaXM6ICcsIEpTT04uc3RyaW5naWZ5KG5vZGUsIG51bGwsIDIpLCAnJywgJ0luc3RlYWQsIHlvdSBuZWVkIHRvIHVzZSB0aGUgJHJ1bGVOYW1lIHN5bnRheDonLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHJvb3Q6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCImJFwiLmNvbmNhdChrZXkpLCBjaGlsZClcbiAgICAgICAgICAgIH0sIG51bGwsIDIpLCAnJywgJ2h0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvcHNldWRvLWNsYXNzZXMtZ3VpZGUnXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfSAvLyBSZW1vdmUgdGhlIHN0eWxlIHRvIHByZXZlbnQgZ2xvYmFsIGNvbmZsaWN0cy5cblxuXG4gICAgICAgICAgbm9kZVtrZXldID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJhdmVyc2UobXVpVGhlbWUub3ZlcnJpZGVzKTtcbiAgfVxuXG4gIHJldHVybiBtdWlUaGVtZTtcbn1cblxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdWlUaGVtZSgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiB0aGUgY3JlYXRlTXVpVGhlbWUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgdG8gY3JlYXRlVGhlbWUuJywgJycsIFwiWW91IHNob3VsZCB1c2UgYGltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2BcIl0uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUaGVtZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaGVtZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuXG5mdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDFlNSkgLyAxZTU7XG59XG5cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHJvdW5kV2l0aERlcHJlY2F0aW9uV2FybmluZyh2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghd2FybmVkT25jZSkge1xuICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IFRoZSBgdGhlbWUudHlwb2dyYXBoeS5yb3VuZGAgaGVscGVyIGlzIGRlcHJlY2F0ZWQuJywgJ0hlYWQgdG8gaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9taWdyYXRpb24tdjQvI3RoZW1lIGZvciBhIG1pZ3JhdGlvbiBwYXRoLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb3VuZCh2YWx1ZSk7XG59XG5cbnZhciBjYXNlQWxsQ2FwcyA9IHtcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbn07XG52YXIgZGVmYXVsdEZvbnRGYW1pbHkgPSAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJztcbi8qKlxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3RoZS10eXBlLXN5c3RlbS5odG1sfVxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3VuZGVyc3RhbmRpbmctdHlwb2dyYXBoeS5odG1sfVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeSkge1xuICB2YXIgX3JlZiA9IHR5cGVvZiB0eXBvZ3JhcGh5ID09PSAnZnVuY3Rpb24nID8gdHlwb2dyYXBoeShwYWxldHRlKSA6IHR5cG9ncmFwaHksXG4gICAgICBfcmVmJGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmFtaWx5ID0gX3JlZiRmb250RmFtaWx5ID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9udEZhbWlseSA6IF9yZWYkZm9udEZhbWlseSxcbiAgICAgIF9yZWYkZm9udFNpemUgPSBfcmVmLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcmVmJGZvbnRTaXplID09PSB2b2lkIDAgPyAxNCA6IF9yZWYkZm9udFNpemUsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRMaWdodCA9IF9yZWYuZm9udFdlaWdodExpZ2h0LFxuICAgICAgZm9udFdlaWdodExpZ2h0ID0gX3JlZiRmb250V2VpZ2h0TGlnaHQgPT09IHZvaWQgMCA/IDMwMCA6IF9yZWYkZm9udFdlaWdodExpZ2h0LFxuICAgICAgX3JlZiRmb250V2VpZ2h0UmVndWxhID0gX3JlZi5mb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRXZWlnaHRSZWd1bGFyID0gX3JlZiRmb250V2VpZ2h0UmVndWxhID09PSB2b2lkIDAgPyA0MDAgOiBfcmVmJGZvbnRXZWlnaHRSZWd1bGEsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmLmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBmb250V2VpZ2h0TWVkaXVtID0gX3JlZiRmb250V2VpZ2h0TWVkaXVtID09PSB2b2lkIDAgPyA1MDAgOiBfcmVmJGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBfcmVmJGZvbnRXZWlnaHRCb2xkID0gX3JlZi5mb250V2VpZ2h0Qm9sZCxcbiAgICAgIGZvbnRXZWlnaHRCb2xkID0gX3JlZiRmb250V2VpZ2h0Qm9sZCA9PT0gdm9pZCAwID8gNzAwIDogX3JlZiRmb250V2VpZ2h0Qm9sZCxcbiAgICAgIF9yZWYkaHRtbEZvbnRTaXplID0gX3JlZi5odG1sRm9udFNpemUsXG4gICAgICBodG1sRm9udFNpemUgPSBfcmVmJGh0bWxGb250U2l6ZSA9PT0gdm9pZCAwID8gMTYgOiBfcmVmJGh0bWxGb250U2l6ZSxcbiAgICAgIGFsbFZhcmlhbnRzID0gX3JlZi5hbGxWYXJpYW50cyxcbiAgICAgIHB4VG9SZW0yID0gX3JlZi5weFRvUmVtLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwiZm9udFdlaWdodExpZ2h0XCIsIFwiZm9udFdlaWdodFJlZ3VsYXJcIiwgXCJmb250V2VpZ2h0TWVkaXVtXCIsIFwiZm9udFdlaWdodEJvbGRcIiwgXCJodG1sRm9udFNpemVcIiwgXCJhbGxWYXJpYW50c1wiLCBcInB4VG9SZW1cIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBmb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgZm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaHRtbEZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBodG1sRm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb2VmID0gZm9udFNpemUgLyAxNDtcblxuICB2YXIgcHhUb1JlbSA9IHB4VG9SZW0yIHx8IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNpemUgLyBodG1sRm9udFNpemUgKiBjb2VmLCBcInJlbVwiKTtcbiAgfTtcblxuICB2YXIgYnVpbGRWYXJpYW50ID0gZnVuY3Rpb24gYnVpbGRWYXJpYW50KGZvbnRXZWlnaHQsIHNpemUsIGxpbmVIZWlnaHQsIGxldHRlclNwYWNpbmcsIGNhc2luZykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCxcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKHNpemUpLFxuICAgICAgLy8gVW5pdGxlc3MgZm9sbG93aW5nIGh0dHBzOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdGhvdWdodHMvMjAwNi8wMi8wOC91bml0bGVzcy1saW5lLWhlaWdodHMvXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0XG4gICAgfSwgZm9udEZhbWlseSA9PT0gZGVmYXVsdEZvbnRGYW1pbHkgPyB7XG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIlwiLmNvbmNhdChyb3VuZChsZXR0ZXJTcGFjaW5nIC8gc2l6ZSksIFwiZW1cIilcbiAgICB9IDoge30sIGNhc2luZywgYWxsVmFyaWFudHMpO1xuICB9O1xuXG4gIHZhciB2YXJpYW50cyA9IHtcbiAgICBoMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgOTYsIDEuMTY3LCAtMS41KSxcbiAgICBoMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgNjAsIDEuMiwgLTAuNSksXG4gICAgaDM6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgNDgsIDEuMTY3LCAwKSxcbiAgICBoNDogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAzNCwgMS4yMzUsIDAuMjUpLFxuICAgIGg1OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDI0LCAxLjMzNCwgMCksXG4gICAgaDY6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAyMCwgMS42LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNzUsIDAuMTUpLFxuICAgIHN1YnRpdGxlMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjU3LCAwLjEpLFxuICAgIGJvZHkxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjUsIDAuMTUpLFxuICAgIGJvZHkyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE0LCAxLjQzLCAwLjE1KSxcbiAgICBidXR0b246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS43NSwgMC40LCBjYXNlQWxsQ2FwcyksXG4gICAgY2FwdGlvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMS42NiwgMC40KSxcbiAgICBvdmVybGluZTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMi42NiwgMSwgY2FzZUFsbENhcHMpXG4gIH07XG4gIHJldHVybiBkZWVwbWVyZ2UoX2V4dGVuZHMoe1xuICAgIGh0bWxGb250U2l6ZTogaHRtbEZvbnRTaXplLFxuICAgIHB4VG9SZW06IHB4VG9SZW0sXG4gICAgcm91bmQ6IHJvdW5kV2l0aERlcHJlY2F0aW9uV2FybmluZyxcbiAgICAvLyBUT0RPIHY1OiByZW1vdmVcbiAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IGZvbnRXZWlnaHRMaWdodCxcbiAgICBmb250V2VpZ2h0UmVndWxhcjogZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFdlaWdodE1lZGl1bTogZm9udFdlaWdodE1lZGl1bSxcbiAgICBmb250V2VpZ2h0Qm9sZDogZm9udFdlaWdodEJvbGRcbiAgfSwgdmFyaWFudHMpLCBvdGhlciwge1xuICAgIGNsb25lOiBmYWxzZSAvLyBObyBuZWVkIHRvIGNsb25lIGRlZXBcblxuICB9KTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5pdGxlc3ModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKSkubGVuZ3RoID09PSBTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn0gLy8gUG9ydGVkIGZyb20gQ29tcGFzc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0NvbXBhc3MvY29tcGFzcy9ibG9iL21hc3Rlci9jb3JlL3N0eWxlc2hlZXRzL2NvbXBhc3MvdHlwb2dyYXBoeS9fdW5pdHMuc2Nzc1xuLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdChpbnB1dCkge1xuICByZXR1cm4gU3RyaW5nKGlucHV0KS5tYXRjaCgvW1xcZC5cXC0rXSpcXHMqKC4qKS8pWzFdIHx8ICcnO1xufSAvLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdGxlc3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml0bGVzcyhsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobGVuZ3RoKTtcbn0gLy8gQ29udmVydCBhbnkgQ1NTIDxsZW5ndGg+IG9yIDxwZXJjZW50YWdlPiB2YWx1ZSB0byBhbnkgYW5vdGhlci5cbi8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0t5bGVBTWF0aGV3cy9jb252ZXJ0LWNzcy1sZW5ndGhcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZW5ndGgoYmFzZUZvbnRTaXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobGVuZ3RoLCB0b1VuaXQpIHtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGxlbmd0aCk7IC8vIE9wdGltaXplIGZvciBjYXNlcyB3aGVyZSBgZnJvbWAgYW5kIGB0b2AgdW5pdHMgYXJlIGFjY2lkZW50YWxseSB0aGUgc2FtZS5cblxuICAgIGlmIChmcm9tVW5pdCA9PT0gdG9Vbml0KSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0gLy8gQ29udmVydCBpbnB1dCBsZW5ndGggdG8gcGl4ZWxzLlxuXG5cbiAgICB2YXIgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCk7XG5cbiAgICBpZiAoZnJvbVVuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmIChmcm9tVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAoZnJvbVVuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH0gLy8gQ29udmVydCBsZW5ndGggaW4gcGl4ZWxzIHRvIHRoZSBvdXRwdXQgdW5pdFxuXG5cbiAgICB2YXIgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGg7XG5cbiAgICBpZiAodG9Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAodG9Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmICh0b1VuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChvdXRwdXRMZW5ndGgudG9GaXhlZCg1KSkgKyB0b1VuaXQ7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gYWxpZ25Qcm9wZXJ0eShfcmVmKSB7XG4gIHZhciBzaXplID0gX3JlZi5zaXplLFxuICAgICAgZ3JpZCA9IF9yZWYuZ3JpZDtcbiAgdmFyIHNpemVCZWxvdyA9IHNpemUgLSBzaXplICUgZ3JpZDtcbiAgdmFyIHNpemVBYm92ZSA9IHNpemVCZWxvdyArIGdyaWQ7XG4gIHJldHVybiBzaXplIC0gc2l6ZUJlbG93IDwgc2l6ZUFib3ZlIC0gc2l6ZSA/IHNpemVCZWxvdyA6IHNpemVBYm92ZTtcbn0gLy8gZm9udEdyaWQgZmluZHMgYSBtaW5pbWFsIGdyaWQgKGluIHJlbSkgZm9yIHRoZSBmb250U2l6ZSB2YWx1ZXMgc28gdGhhdCB0aGVcbi8vIGxpbmVIZWlnaHQgZmFsbHMgdW5kZXIgYSB4IHBpeGVscyBncmlkLCA0cHggaW4gdGhlIGNhc2Ugb2YgTWF0ZXJpYWwgRGVzaWduLFxuLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgcmVsYXRpdmUgbGluZSBoZWlnaHRcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRHcmlkKF9yZWYyKSB7XG4gIHZhciBsaW5lSGVpZ2h0ID0gX3JlZjIubGluZUhlaWdodCxcbiAgICAgIHBpeGVscyA9IF9yZWYyLnBpeGVscyxcbiAgICAgIGh0bWxGb250U2l6ZSA9IF9yZWYyLmh0bWxGb250U2l6ZTtcbiAgcmV0dXJuIHBpeGVscyAvIChsaW5lSGVpZ2h0ICogaHRtbEZvbnRTaXplKTtcbn1cbi8qKlxuICogZ2VuZXJhdGUgYSByZXNwb25zaXZlIHZlcnNpb24gb2YgYSBnaXZlbiBDU1MgcHJvcGVydHlcbiAqIEBleGFtcGxlXG4gKiByZXNwb25zaXZlUHJvcGVydHkoe1xuICogICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAqICAgbWluOiAxNSxcbiAqICAgbWF4OiAyMCxcbiAqICAgdW5pdDogJ3B4JyxcbiAqICAgYnJlYWtwb2ludHM6IFszMDAsIDYwMF0sXG4gKiB9KVxuICpcbiAqIC8vIHRoaXMgcmV0dXJuc1xuICpcbiAqIHtcbiAqICAgZm9udFNpemU6ICcxNXB4JyxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjMwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzE3LjVweCcsXG4gKiAgIH0sXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDo2MDBweCknOiB7XG4gKiAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAqICAgfSxcbiAqIH1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNzc1Byb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSB0byBiZSBtYWRlIHJlc3BvbnNpdmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWluIC0gVGhlIHNtYWxsZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWF4IC0gVGhlIGxhcmdlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMudW5pdF0gLSBUaGUgdW5pdCB0byBiZSB1c2VkIGZvciB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge0FycmF5Lm51bWJlcn0gW3BhcmFtcy5icmVha3BvaW50c10gIC0gQW4gYXJyYXkgb2YgYnJlYWtwb2ludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLmFsaWduU3RlcF0gLSBSb3VuZCBzY2FsZWQgdmFsdWUgdG8gZmFsbCB1bmRlciB0aGlzIGdyaWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IHJlc3BvbnNpdmUgc3R5bGVzIGZvciB7cGFyYW1zLmNzc1Byb3BlcnR5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvcGVydHkoX3JlZjMpIHtcbiAgdmFyIGNzc1Byb3BlcnR5ID0gX3JlZjMuY3NzUHJvcGVydHksXG4gICAgICBtaW4gPSBfcmVmMy5taW4sXG4gICAgICBtYXggPSBfcmVmMy5tYXgsXG4gICAgICBfcmVmMyR1bml0ID0gX3JlZjMudW5pdCxcbiAgICAgIHVuaXQgPSBfcmVmMyR1bml0ID09PSB2b2lkIDAgPyAncmVtJyA6IF9yZWYzJHVuaXQsXG4gICAgICBfcmVmMyRicmVha3BvaW50cyA9IF9yZWYzLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHMgPSBfcmVmMyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8gWzYwMCwgOTYwLCAxMjgwXSA6IF9yZWYzJGJyZWFrcG9pbnRzLFxuICAgICAgX3JlZjMkdHJhbnNmb3JtID0gX3JlZjMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZjMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjMkdHJhbnNmb3JtO1xuXG4gIHZhciBvdXRwdXQgPSBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCBcIlwiLmNvbmNhdChtaW4pLmNvbmNhdCh1bml0KSk7XG5cbiAgdmFyIGZhY3RvciA9IChtYXggLSBtaW4pIC8gYnJlYWtwb2ludHNbYnJlYWtwb2ludHMubGVuZ3RoIC0gMV07XG4gIGJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBtaW4gKyBmYWN0b3IgKiBicmVha3BvaW50O1xuXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIG91dHB1dFtcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdChicmVha3BvaW50LCBcInB4KVwiKV0gPSBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKHZhbHVlICogMTAwMDApIC8gMTAwMDApLmNvbmNhdCh1bml0KSk7XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufSIsImltcG9ydCBjcmVhdGVUaGVtZSBmcm9tICcuL2NyZWF0ZVRoZW1lJztcbnZhciBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFRoZW1lOyIsImV4cG9ydCAqIGZyb20gJy4vY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVRoZW1lLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJy4vY3JlYXRlVGhlbWUnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVTdHlsZXMgfSBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ha2VTdHlsZXMgfSBmcm9tICcuL21ha2VTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnLi9yZXNwb25zaXZlRm9udFNpemVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVkIH0gZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lIH0gZnJvbSAnLi91c2VUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhTdHlsZXMgfSBmcm9tICcuL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL3dpdGhUaGVtZSc7XG5leHBvcnQgeyBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSwganNzUHJlc2V0LCBTZXJ2ZXJTdHlsZVNoZWV0cywgU3R5bGVzUHJvdmlkZXIsIFRoZW1lUHJvdmlkZXIgYXMgTXVpVGhlbWVQcm92aWRlciwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyBhcyBtYWtlU3R5bGVzV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG5mdW5jdGlvbiBtYWtlU3R5bGVzKHN0eWxlc09yQ3JlYXRvcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBtYWtlU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBpc1VuaXRsZXNzLCBjb252ZXJ0TGVuZ3RoLCByZXNwb25zaXZlUHJvcGVydHksIGFsaWduUHJvcGVydHksIGZvbnRHcmlkIH0gZnJvbSAnLi9jc3NVdGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNwb25zaXZlRm9udFNpemVzKHRoZW1lSW5wdXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHMgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8gWydzbScsICdtZCcsICdsZyddIDogX29wdGlvbnMkYnJlYWtwb2ludHMsXG4gICAgICBfb3B0aW9ucyRkaXNhYmxlQWxpZ24gPSBvcHRpb25zLmRpc2FibGVBbGlnbixcbiAgICAgIGRpc2FibGVBbGlnbiA9IF9vcHRpb25zJGRpc2FibGVBbGlnbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRkaXNhYmxlQWxpZ24sXG4gICAgICBfb3B0aW9ucyRmYWN0b3IgPSBvcHRpb25zLmZhY3RvcixcbiAgICAgIGZhY3RvciA9IF9vcHRpb25zJGZhY3RvciA9PT0gdm9pZCAwID8gMiA6IF9vcHRpb25zJGZhY3RvcixcbiAgICAgIF9vcHRpb25zJHZhcmlhbnRzID0gb3B0aW9ucy52YXJpYW50cyxcbiAgICAgIHZhcmlhbnRzID0gX29wdGlvbnMkdmFyaWFudHMgPT09IHZvaWQgMCA/IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MicsICdjYXB0aW9uJywgJ2J1dHRvbicsICdvdmVybGluZSddIDogX29wdGlvbnMkdmFyaWFudHM7XG5cbiAgdmFyIHRoZW1lID0gX2V4dGVuZHMoe30sIHRoZW1lSW5wdXQpO1xuXG4gIHRoZW1lLnR5cG9ncmFwaHkgPSBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeSk7XG4gIHZhciB0eXBvZ3JhcGh5ID0gdGhlbWUudHlwb2dyYXBoeTsgLy8gQ29udmVydCBiZXR3ZWVuIGNzcyBsZW5ndGhzIGUuZy4gZW0tPnB4IG9yIHB4LT5yZW1cbiAgLy8gU2V0IHRoZSBiYXNlRm9udFNpemUgZm9yIHlvdXIgcHJvamVjdC4gRGVmYXVsdHMgdG8gMTZweCAoYWxzbyB0aGUgYnJvd3NlciBkZWZhdWx0KS5cblxuICB2YXIgY29udmVydCA9IGNvbnZlcnRMZW5ndGgodHlwb2dyYXBoeS5odG1sRm9udFNpemUpO1xuICB2YXIgYnJlYWtwb2ludFZhbHVlcyA9IGJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNbeF07XG4gIH0pO1xuICB2YXJpYW50cy5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYW50KSB7XG4gICAgdmFyIHN0eWxlID0gdHlwb2dyYXBoeVt2YXJpYW50XTtcbiAgICB2YXIgcmVtRm9udFNpemUgPSBwYXJzZUZsb2F0KGNvbnZlcnQoc3R5bGUuZm9udFNpemUsICdyZW0nKSk7XG5cbiAgICBpZiAocmVtRm9udFNpemUgPD0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXhGb250U2l6ZSA9IHJlbUZvbnRTaXplO1xuICAgIHZhciBtaW5Gb250U2l6ZSA9IDEgKyAobWF4Rm9udFNpemUgLSAxKSAvIGZhY3RvcjtcbiAgICB2YXIgbGluZUhlaWdodCA9IHN0eWxlLmxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkgJiYgIWRpc2FibGVBbGlnbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFVuc3VwcG9ydGVkIG5vbi11bml0bGVzcyBsaW5lIGhlaWdodCB3aXRoIGdyaWQgYWxpZ25tZW50LlxcblVzZSB1bml0bGVzcyBsaW5lIGhlaWdodHMgaW5zdGVhZC5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNikpO1xuICAgIH1cblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSkge1xuICAgICAgLy8gbWFrZSBpdCB1bml0bGVzc1xuICAgICAgbGluZUhlaWdodCA9IHBhcnNlRmxvYXQoY29udmVydChsaW5lSGVpZ2h0LCAncmVtJykpIC8gcGFyc2VGbG9hdChyZW1Gb250U2l6ZSk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBpZiAoIWRpc2FibGVBbGlnbikge1xuICAgICAgdHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhbGlnblByb3BlcnR5KHtcbiAgICAgICAgICBzaXplOiB2YWx1ZSxcbiAgICAgICAgICBncmlkOiBmb250R3JpZCh7XG4gICAgICAgICAgICBwaXhlbHM6IDQsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0LFxuICAgICAgICAgICAgaHRtbEZvbnRTaXplOiB0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0eXBvZ3JhcGh5W3ZhcmlhbnRdID0gX2V4dGVuZHMoe30sIHN0eWxlLCByZXNwb25zaXZlUHJvcGVydHkoe1xuICAgICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXG4gICAgICBtaW46IG1pbkZvbnRTaXplLFxuICAgICAgbWF4OiBtYXhGb250U2l6ZSxcbiAgICAgIHVuaXQ6ICdyZW0nLFxuICAgICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRWYWx1ZXMsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiB0aGVtZTtcbn0iLCJ2YXIgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xudmFyIHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG52YXIgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkb3coKSB7XG4gIHJldHVybiBbXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzJdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAzID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzNdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dLZXlVbWJyYU9wYWNpdHksIFwiKVwiKSwgXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA0ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzRdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA1ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzVdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA2ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzZdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA3ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzddLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHksIFwiKVwiKSwgXCJcIi5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA4ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzhdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSA5ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzldLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDExID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzExXSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHksIFwiKVwiKV0uam9pbignLCcpO1xufSAvLyBWYWx1ZXMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL2JlODc0N2Y5NDU3NDY2OWNiNWU3YWRkMWE3YzU0ZmE0MWE4OWNlYzcvcGFja2FnZXMvbWRjLWVsZXZhdGlvbi9fdmFyaWFibGVzLnNjc3NcblxuXG52YXIgc2hhZG93cyA9IFsnbm9uZScsIGNyZWF0ZVNoYWRvdygwLCAyLCAxLCAtMSwgMCwgMSwgMSwgMCwgMCwgMSwgMywgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCAxLCAtMiwgMCwgMiwgMiwgMCwgMCwgMSwgNSwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCAzLCAtMiwgMCwgMywgNCwgMCwgMCwgMSwgOCwgMCksIGNyZWF0ZVNoYWRvdygwLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDApLCBjcmVhdGVTaGFkb3coMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMSksIGNyZWF0ZVNoYWRvdygwLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyKSwgY3JlYXRlU2hhZG93KDAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDIpLCBjcmVhdGVTaGFkb3coMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDMpLCBjcmVhdGVTaGFkb3coMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDMpLCBjcmVhdGVTaGFkb3coMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDQpLCBjcmVhdGVTaGFkb3coMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDQpLCBjcmVhdGVTaGFkb3coMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDQpLCBjcmVhdGVTaGFkb3coMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1KSwgY3JlYXRlU2hhZG93KDAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNSksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDYpLCBjcmVhdGVTaGFkb3coMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3KSwgY3JlYXRlU2hhZG93KDAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDgpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOCldO1xuZXhwb3J0IGRlZmF1bHQgc2hhZG93czsiLCJ2YXIgc2hhcGUgPSB7XG4gIGJvcmRlclJhZGl1czogNFxufTtcbmV4cG9ydCBkZWZhdWx0IHNoYXBlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgc3R5bGVkIGFzIHN0eWxlZFdpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxudmFyIHN0eWxlZCA9IGZ1bmN0aW9uIHN0eWxlZChDb21wb25lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENyZWF0b3IgPSBzdHlsZWRXaXRob3V0RGVmYXVsdChDb21wb25lbnQpO1xuICByZXR1cm4gZnVuY3Rpb24gKHN0eWxlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudENyZWF0b3Ioc3R5bGUsIF9leHRlbmRzKHtcbiAgICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG4gICAgfSwgb3B0aW9ucykpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG4vLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5nb29nbGUuY29tL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctbmF0dXJhbC1lYXNpbmctY3VydmVzXG4vLyB0byBsZWFybiB0aGUgY29udGV4dCBpbiB3aGljaCBlYWNoIGVhc2luZyBzaG91bGQgYmUgdXNlZC5cbmV4cG9ydCB2YXIgZWFzaW5nID0ge1xuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGNvbW1vbiBlYXNpbmcgY3VydmUuXG4gIGVhc2VJbk91dDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSknLFxuICAvLyBPYmplY3RzIGVudGVyIHRoZSBzY3JlZW4gYXQgZnVsbCB2ZWxvY2l0eSBmcm9tIG9mZi1zY3JlZW4gYW5kXG4gIC8vIHNsb3dseSBkZWNlbGVyYXRlIHRvIGEgcmVzdGluZyBwb2ludC5cbiAgZWFzZU91dDogJ2N1YmljLWJlemllcigwLjAsIDAsIDAuMiwgMSknLFxuICAvLyBPYmplY3RzIGxlYXZlIHRoZSBzY3JlZW4gYXQgZnVsbCB2ZWxvY2l0eS4gVGhleSBkbyBub3QgZGVjZWxlcmF0ZSB3aGVuIG9mZi1zY3JlZW4uXG4gIGVhc2VJbjogJ2N1YmljLWJlemllcigwLjQsIDAsIDEsIDEpJyxcbiAgLy8gVGhlIHNoYXJwIGN1cnZlIGlzIHVzZWQgYnkgb2JqZWN0cyB0aGF0IG1heSByZXR1cm4gdG8gdGhlIHNjcmVlbiBhdCBhbnkgdGltZS5cbiAgc2hhcnA6ICdjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpJ1xufTsgLy8gRm9sbG93IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vZHVyYXRpb24tZWFzaW5nLmh0bWwjZHVyYXRpb24tZWFzaW5nLWNvbW1vbi1kdXJhdGlvbnNcbi8vIHRvIGxlYXJuIHdoZW4gdXNlIHdoYXQgdGltaW5nXG5cbmV4cG9ydCB2YXIgZHVyYXRpb24gPSB7XG4gIHNob3J0ZXN0OiAxNTAsXG4gIHNob3J0ZXI6IDIwMCxcbiAgc2hvcnQ6IDI1MCxcbiAgLy8gbW9zdCBiYXNpYyByZWNvbW1lbmRlZCB0aW1pbmdcbiAgc3RhbmRhcmQ6IDMwMCxcbiAgLy8gdGhpcyBpcyB0byBiZSB1c2VkIGluIGNvbXBsZXggYW5pbWF0aW9uc1xuICBjb21wbGV4OiAzNzUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGVudGVyaW5nIHNjcmVlblxuICBlbnRlcmluZ1NjcmVlbjogMjI1LFxuICAvLyByZWNvbW1lbmRlZCB3aGVuIHNvbWV0aGluZyBpcyBsZWF2aW5nIHNjcmVlblxuICBsZWF2aW5nU2NyZWVuOiAxOTVcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdE1zKG1pbGxpc2Vjb25kcykge1xuICByZXR1cm4gXCJcIi5jb25jYXQoTWF0aC5yb3VuZChtaWxsaXNlY29uZHMpLCBcIm1zXCIpO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLnByb3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbS5kdXJhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLmVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmRlbGF5XG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVhc2luZzogZWFzaW5nLFxuICBkdXJhdGlvbjogZHVyYXRpb24sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydhbGwnXTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgX29wdGlvbnMkZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICBkdXJhdGlvbk9wdGlvbiA9IF9vcHRpb25zJGR1cmF0aW9uID09PSB2b2lkIDAgPyBkdXJhdGlvbi5zdGFuZGFyZCA6IF9vcHRpb25zJGR1cmF0aW9uLFxuICAgICAgICBfb3B0aW9ucyRlYXNpbmcgPSBvcHRpb25zLmVhc2luZyxcbiAgICAgICAgZWFzaW5nT3B0aW9uID0gX29wdGlvbnMkZWFzaW5nID09PSB2b2lkIDAgPyBlYXNpbmcuZWFzZUluT3V0IDogX29wdGlvbnMkZWFzaW5nLFxuICAgICAgICBfb3B0aW9ucyRkZWxheSA9IG9wdGlvbnMuZGVsYXksXG4gICAgICAgIGRlbGF5ID0gX29wdGlvbnMkZGVsYXkgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRkZWxheSxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wiZHVyYXRpb25cIiwgXCJlYXNpbmdcIiwgXCJkZWxheVwiXSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghaXNTdHJpbmcocHJvcHMpICYmICFBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJwcm9wc1wiIG11c3QgYmUgYSBzdHJpbmcgb3IgQXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOdW1iZXIoZHVyYXRpb25PcHRpb24pICYmICFpc1N0cmluZyhkdXJhdGlvbk9wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBBcmd1bWVudCBcXFwiZHVyYXRpb25cXFwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcgYnV0IGZvdW5kIFwiLmNvbmNhdChkdXJhdGlvbk9wdGlvbiwgXCIuXCIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1N0cmluZyhlYXNpbmdPcHRpb24pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcImVhc2luZ1wiIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOdW1iZXIoZGVsYXkpICYmICFpc1N0cmluZyhkZWxheSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZGVsYXlcIiBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXIpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFVucmVjb2duaXplZCBhcmd1bWVudChzKSBbXCIuY29uY2F0KE9iamVjdC5rZXlzKG90aGVyKS5qb2luKCcsJyksIFwiXS5cIikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheShwcm9wcykgPyBwcm9wcyA6IFtwcm9wc10pLm1hcChmdW5jdGlvbiAoYW5pbWF0ZWRQcm9wKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoYW5pbWF0ZWRQcm9wLCBcIiBcIikuY29uY2F0KHR5cGVvZiBkdXJhdGlvbk9wdGlvbiA9PT0gJ3N0cmluZycgPyBkdXJhdGlvbk9wdGlvbiA6IGZvcm1hdE1zKGR1cmF0aW9uT3B0aW9uKSwgXCIgXCIpLmNvbmNhdChlYXNpbmdPcHRpb24sIFwiIFwiKS5jb25jYXQodHlwZW9mIGRlbGF5ID09PSAnc3RyaW5nJyA/IGRlbGF5IDogZm9ybWF0TXMoZGVsYXkpKTtcbiAgICB9KS5qb2luKCcsJyk7XG4gIH0sXG4gIGdldEF1dG9IZWlnaHREdXJhdGlvbjogZnVuY3Rpb24gZ2V0QXV0b0hlaWdodER1cmF0aW9uKGhlaWdodCkge1xuICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgY29uc3RhbnQgPSBoZWlnaHQgLyAzNjsgLy8gaHR0cHM6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT0oNCslMkIrMTUrKisoeCslMkYrMzYrKSsqKiswLjI1KyUyQisoeCslMkYrMzYpKyUyRis1KSsqKzEwXG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoNCArIDE1ICogTWF0aC5wb3coY29uc3RhbnQsIDAuMjUpICsgY29uc3RhbnQgLyA1KSAqIDEwKTtcbiAgfVxufTsiLCJpbXBvcnQgeyB1c2VUaGVtZSBhcyB1c2VUaGVtZVdpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWVXaXRob3V0RGVmYXVsdCgpIHx8IGRlZmF1bHRUaGVtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUodGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW1lO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyBhcyB3aXRoU3R5bGVzV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGVzKHN0eWxlc09yQ3JlYXRvciwgb3B0aW9ucykge1xuICByZXR1cm4gd2l0aFN0eWxlc1dpdGhvdXREZWZhdWx0KHN0eWxlc09yQ3JlYXRvciwgX2V4dGVuZHMoe1xuICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlczsiLCJpbXBvcnQgeyB3aXRoVGhlbWVDcmVhdG9yIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbnZhciB3aXRoVGhlbWUgPSB3aXRoVGhlbWVDcmVhdG9yKHtcbiAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lOyIsIi8vIFdlIG5lZWQgdG8gY2VudHJhbGl6ZSB0aGUgekluZGV4IGRlZmluaXRpb25zIGFzIHRoZXkgd29ya1xuLy8gbGlrZSBnbG9iYWwgdmFsdWVzIGluIHRoZSBicm93c2VyLlxudmFyIHpJbmRleCA9IHtcbiAgbW9iaWxlU3RlcHBlcjogMTAwMCxcbiAgc3BlZWREaWFsOiAxMDUwLFxuICBhcHBCYXI6IDExMDAsXG4gIGRyYXdlcjogMTIwMCxcbiAgbW9kYWw6IDEzMDAsXG4gIHNuYWNrYmFyOiAxNDAwLFxuICB0b29sdGlwOiAxNTAwXG59O1xuZXhwb3J0IGRlZmF1bHQgekluZGV4OyIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuLy8gSXQgc2hvdWxkIHRvIGJlIG5vdGVkIHRoYXQgdGhpcyBmdW5jdGlvbiBpc24ndCBlcXVpdmFsZW50IHRvIGB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZWAuXG4vL1xuLy8gQSBzdHJpY3QgY2FwaXRhbGl6YXRpb24gc2hvdWxkIHVwcGVyY2FzZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggd29yZCBhIHRoZSBzZW50ZW5jZS5cbi8vIFdlIG9ubHkgaGFuZGxlIHRoZSBmaXJzdCB3b3JkLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IGNhcGl0YWxpemUoc3RyaW5nKSBleHBlY3RzIGEgc3RyaW5nIGFyZ3VtZW50LlwiIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg3KSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufSIsImltcG9ydCBMb2FkZXIgZnJvbSAnQGNvbXBvbmVudHMvTG9hZGVyJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFZGl0b3Ige1xyXG4gIGNvbnRlbnRzOiBzdHJpbmdcclxuICBzZXRDb250ZW50czogKGRhdGE6IHN0cmluZykgPT4gdm9pZFxyXG4gIHJlYWRvbmx5PzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBFZGl0b3IgPSAocHJvcHM6IElFZGl0b3IpID0+IHtcclxuICBjb25zdCB7IGNvbnRlbnRzLCBzZXRDb250ZW50cywgcmVhZG9ubHkgPSBmYWxzZSB9ID0gcHJvcHNcclxuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWY8YW55PigpXHJcbiAgY29uc3QgW2VkaXRvckxvYWRlZCwgc2V0RWRpdG9yTG9hZGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IHsgQ0tFZGl0b3IsIENsYXNzaWNFZGl0b3IgfSA9IGVkaXRvclJlZi5jdXJyZW50IHx8IHt9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBlZGl0b3JSZWYuY3VycmVudCA9IHtcclxuICAgICAgQ0tFZGl0b3I6IHJlcXVpcmUoJ0Bja2VkaXRvci9ja2VkaXRvcjUtcmVhY3QnKS5DS0VkaXRvcixcclxuICAgICAgQ2xhc3NpY0VkaXRvcjogcmVxdWlyZSgnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJyksXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWRpdG9yTG9hZGVkKHRydWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZWRpdG9yTG9hZGVkID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZWRpdG9yXCIgY2xhc3NOYW1lPXtyZWFkb25seSA/ICdlZGl0b3ItcmVhZG9ubHknIDogJyd9PlxyXG4gICAgICAgICAgICA8Q0tFZGl0b3JcclxuICAgICAgICAgICAgICBlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcbiAgICAgICAgICAgICAgZGF0YT17Y29udGVudHN9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRvbmx5fVxyXG4gICAgICAgICAgICAgIGNvbmZpZz17e1xyXG4gICAgICAgICAgICAgICAgY2tmaW5kZXI6IHtcclxuICAgICAgICAgICAgICAgICAgdXBsb2FkVXJsOiBgL2FwaS9lZGl0b3JgLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlzUmVhZE9ubHk6IHJlYWRvbmx5LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25SZWFkeT17KGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ2VkaXRvciBpcyByZWFkeSB0byB1c2UnLCBlZGl0b3IpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBhbnksIGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhbmFnZWRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpXHJcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50cyhjaGFuYWdlZGF0YSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50OiBhbnksIGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0JsdXIuJywgZWRpdG9yKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KGV2ZW50OiBhbnksIGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0ZvY3VzLicsIGVkaXRvcilcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcclxuIiwiaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgTG9hZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17NDB9IC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlclxyXG4iLCJleHBvcnQgY29uc3QgREVWID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUXHJcbmV4cG9ydCBjb25zdCBQUk9YWV9IT1NUID0gcHJvY2Vzcy5lbnYuUFJPWFlfSE9TVCB8fCBgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YFxyXG5cclxuZXhwb3J0IGNvbnN0IFRaID0gcHJvY2Vzcy5lbnYuVFogfHwgJ0FzaWEvU2VvdWwnXHJcblxyXG5leHBvcnQgY29uc3QgTU9ERSA9IHByb2Nlc3MuZW52Lk1PREVcclxuZXhwb3J0IGNvbnN0IEFTU0VUX1BBVEggPSBgL3N0eWxlcy8ke01PREV9YFxyXG5cclxuZXhwb3J0IGNvbnN0IFNFUlZFUl9BUElfVVJMID0gcHJvY2Vzcy5lbnYuU0VSVkVSX0FQSV9VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBDTEFJTV9OQU1FID0gcHJvY2Vzcy5lbnYuQ0xBSU1fTkFNRSB8fCAnQXV0aG9yaXphdGlvbidcclxuZXhwb3J0IGNvbnN0IEFVVEhfVVNFUl9JRCA9IHByb2Nlc3MuZW52LkFVVEhfVVNFUl9JRCB8fCAndG9rZW4taWQnXHJcbmV4cG9ydCBjb25zdCBSRUZSRVNIX1RPS0VOID0gcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTiB8fCAncmVmcmVzaC10b2tlbidcclxuZXhwb3J0IGNvbnN0IEFDQ0VTU19UT0tFTiA9IHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTiB8fCAnYWNjZXNzLXRva2VuJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJVEVfSUQgPSBwcm9jZXNzLmVudi5TSVRFX0lEXHJcblxyXG5leHBvcnQgY29uc3QgR09PR0xFX0NMSUVOVF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfSURcclxuZXhwb3J0IGNvbnN0IEtBS0FPX0pBVkFTQ1JJUFRfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfS0FLQU9fSkFWQVNDUklQVF9LRVlcclxuZXhwb3J0IGNvbnN0IE5BVkVSX0NMSUVOVF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05BVkVSX0NMSUVOVF9JRFxyXG5leHBvcnQgY29uc3QgTkFWRVJfQ0FMTEJBQ0tfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkFWRVJfQ0FMTEJBQ0tfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgU09DSUFMX0xPR0lOX0VOQUJMRUQgPSBwcm9jZXNzLmVudi5TT0NJQUxfTE9HSU5fRU5BQkxFRFxyXG4iLCJpbXBvcnQgeyBQUk9YWV9IT1NUIH0gZnJvbSAnLi9lbnYnXHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9BUFBfTkFNRSA9ICfsoITsnpDsoJXrtoAg7ZGc7KSA7ZSE66CI7J6E7JuM7YGsIO2PrO2DiCdcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IGAke1BST1hZX0hPU1R9L3NlcnZlcmBcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0VSUk9SX01FU1NBR0UgPSAnU29ycnkuLiBTb21ldGhpbmcgV3JvbmcuLi7wn5ixJ1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRlVBTFRfR1JJRF9QQUdFX1NJWkUgPSAxMFxyXG5cclxuZXhwb3J0IGNvbnN0IEdSSURfUk9XU19QRVJfUEFHRV9PUFRJT04gPSBbMTAsIDIwLCA1MCwgMTAwXVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1FTlRTX01BWF9MRU5HVEggPSAzMDBcclxuXHJcbmV4cG9ydCBjb25zdCBDT01NRU5UU19QQUdFX1NJWkUgPSA1XHJcblxyXG5leHBvcnQgY29uc3QgRURJVE9SX0xPQURfSU1BR0VfVVJMID0gJy9wb3J0YWwtc2VydmljZS9hcGkvdjEvaW1hZ2VzL2VkaXRvci8nXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lNQUdFX1VSTCA9ICcvcG9ydGFsLXNlcnZpY2UvYXBpL3YxL2ltYWdlcy8nXHJcblxyXG5leHBvcnQgY29uc3QgRURJVE9SX01BWF9MRU5HVEggPSAyMDAwXHJcblxyXG4vLyAuaHRtLCAuaHRtbCwgLnR4dCwgLnBuZy8uanBnL2V0YywgLnBkZiwgLnhsc3guIC54bHNcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUNDRVBUX0ZJTEVfRVhUID1cclxuICAndGV4dC9odG1sLCB0ZXh0L3BsYWluLCBpbWFnZS8qLCAucGRmLCBhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCwgYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUNDRVBUX0ZJTEVfRVhUX1RFWFQgPVxyXG4gICcuaHRtLCAuaHRtbCwgLnR4dCwgLnBuZy8uanBnL2V0YywgLnBkZiwgLnhsc3guIC54bHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ1VTVE9NX0hFQURFUl9TSVRFX0lEX0tFWSA9ICdYLVNpdGUtSWQnXHJcblxyXG5leHBvcnQgY29uc3QgQUNDRVNTX0xPR19USU1FT1VUID0gMzAgKiA2MCAqIDEwMDBcclxuXHJcbmV4cG9ydCBjb25zdCBBQ0NFU1NfTE9HX0lEID0gJ2FjY2Vzc0xvZ0lkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBVQkxJQ19QQUdFUyA9IFtcclxuICAnLzQwNCcsXHJcbiAgJy8nLFxyXG4gICcnLFxyXG4gICcvcmVsb2FkJyxcclxuICAnL19lcnJvcicsXHJcbiAgJy91c2VyL2xlYXZlL2J5ZScsXHJcbiAgJyMnLFxyXG4gICcvYXV0aC9sb2dpbi9uYXZlcicsXHJcbl1cclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICdAY29tcG9uZW50cy9FZGl0b3InXHJcbmltcG9ydCB7IGNvbnRlbnRTZXJ2aWNlLCBJQ29udGVudCB9IGZyb20gJ0BzZXJ2aWNlJ1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGVudEl0ZW1zUHJvcHMge1xyXG4gIGNvbnRlbnQ6IElDb250ZW50IHwgbnVsbFxyXG59XHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgY29udGVudCB9OiBJQ29udGVudEl0ZW1zUHJvcHMpID0+IHtcclxuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICBzZXRDb250ZW50cyhjb250ZW50LmNvbnRlbnRWYWx1ZSlcclxuICAgIH1cclxuICB9LCBbY29udGVudF0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxFZGl0b3IgY29udGVudHM9e2NvbnRlbnRzfSBzZXRDb250ZW50cz17c2V0Q29udGVudHN9IHJlYWRvbmx5PXt0cnVlfSAvPlxyXG4gIClcclxuICAvLyByZXR1cm4gKFxyXG4gIC8vICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaW50cm9cIj5cclxuICAvLyAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQuY29udGVudFZhbHVlIH19IC8+XHJcbiAgLy8gICA8L2FydGljbGU+XHJcbiAgLy8gKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSBjb250ZXh0XHJcbiAgY29uc3QgY29udGVudE5vID0gTnVtYmVyKHF1ZXJ5LmlkKVxyXG5cclxuICBsZXQgY29udGVudCA9IHt9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250ZW50U2VydmljZS5nZXQoY29udGVudE5vKVxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBjb250ZW50ID0gKGF3YWl0IHJlc3VsdC5kYXRhKSBhcyBJQ29udGVudFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBjb250ZW50IGl0ZW0gcXVlcnkgZXJyb3IgJHtlcnJvci5tZXNzYWdlfWApXHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2U/LmRhdGE/LmNvZGUgPT09ICdFMDAzJykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY29udGVudCxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50XHJcbiIsImltcG9ydCB7IFNJVEVfSUQgfSBmcm9tICdAY29uc3RhbnRzL2VudidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLyoqXHJcbiAqIO2PrO2EuCDshJzruYTsiqQg67Cw64SIIEFQSSBVUkxcclxuICovXHJcbmNvbnN0IEJBTk5FUl9VUkwgPSBgL3BvcnRhbC1zZXJ2aWNlL2FwaS92MS8ke1NJVEVfSUR9L2Jhbm5lcnNgXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYWluQmFubmVyIHtcclxuICBba2V5OiBzdHJpbmddOiBJQmFubmVyW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQmFubmVyIHtcclxuICBhdHRhY2htZW50Q29kZTogc3RyaW5nXHJcbiAgYmFubmVyQ29udGVudDogc3RyaW5nXHJcbiAgYmFubmVyTm86IG51bWJlclxyXG4gIGJhbm5lclRpdGxlOiBzdHJpbmdcclxuICBiYW5uZXJUeXBlQ29kZTogc3RyaW5nXHJcbiAgdW5pcXVlSWQ6IHN0cmluZ1xyXG4gIG5ld1dpbmRvd0F0OiBib29sZWFuXHJcbiAgdXJsQWRkcjogc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDrsLDrhIgg6rSA66asIOyEnOu5hOyKpFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJhbm5lclNlcnZpY2UgPSB7XHJcbiAgZ2V0QmFubmVyczogKGJhbm5lclR5cGVDb2Rlczogc3RyaW5nW10sIGJhbm5lckNvdW50OiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7QkFOTkVSX1VSTH0vJHtiYW5uZXJUeXBlQ29kZXN9LyR7YmFubmVyQ291bnR9YClcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgeyBjb21tb24sIFBhZ2UsIFBhZ2VhYmxlLCBTZWFyY2hQYXlsb2FkLCBTb3J0IH0gZnJvbSAnLi9jb21tb24nXHJcblxyXG4vKipcclxuICog6rKM7Iuc7YyQIOyKpO2CqCDsnKDtmJVcclxuICovXHJcbmV4cG9ydCBjb25zdCBTS0lOVF9UWVBFX0NPREVfTk9STUFMID0gJ25vcm1hbCdcclxuZXhwb3J0IGNvbnN0IFNLSU5UX1RZUEVfQ09ERV9GQVEgPSAnZmFxJ1xyXG5leHBvcnQgY29uc3QgU0tJTlRfVFlQRV9DT0RFX1FOQSA9ICdxbmEnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYWluQm9hcmQge1xyXG4gIFtrZXk6IG51bWJlcl06IElCb2FyZFxyXG59XHJcblxyXG4vKipcclxuICog6rKM7Iuc7YyQIO2DgOyehVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQm9hcmQge1xyXG4gIGJvYXJkTm86IG51bWJlclxyXG4gIGJvYXJkTmFtZTogc3RyaW5nXHJcbiAgc2tpblR5cGVDb2RlOiBzdHJpbmdcclxuICB0aXRsZURpc3BsYXlMZW5ndGg6IG51bWJlclxyXG4gIHBvc3REaXNwbGF5Q291bnQ6IG51bWJlclxyXG4gIHBhZ2VEaXNwbGF5Q291bnQ6IG51bWJlclxyXG4gIG5ld0Rpc3BsYXlEYXlDb3VudDogbnVtYmVyXHJcbiAgZWRpdG9yVXNlQXQ6IGJvb2xlYW5cclxuICB1c2VyV3JpdGVBdDogYm9vbGVhblxyXG4gIGNvbW1lbnRVc2VBdDogYm9vbGVhblxyXG4gIHVwbG9hZFVzZUF0OiBib29sZWFuXHJcbiAgdXBsb2FkTGltaXRDb3VudDogbnVtYmVyXHJcbiAgdXBsb2FkTGltaXRTaXplOiBudW1iZXJcclxuICBwb3N0czogSVBvc3RzW11cclxufVxyXG5cclxuLyoqXHJcbiAqIOyggOyepSDsi5wg642w7J207YSwIO2DgOyehVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUG9zdHNGb3JtIHtcclxuICBwb3N0c1RpdGxlOiBzdHJpbmdcclxuICBwb3N0c0NvbnRlbnQ6IHN0cmluZ1xyXG4gIGF0dGFjaG1lbnRDb2RlPzogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJUG9zdHMgZXh0ZW5kcyBJUG9zdHNGb3JtIHtcclxuICBib2FyZE5vOiBudW1iZXJcclxuICBwb3N0c05vPzogbnVtYmVyXHJcbiAgbm90aWNlQXQ/OiBib29sZWFuXHJcbiAgcG9zdHNUaXRsZTogc3RyaW5nXHJcbiAgcG9zdHNDb250ZW50OiBzdHJpbmdcclxuICBwb3N0c0Fuc3dlckNvbnRlbnQ/OiBzdHJpbmdcclxuICBhdHRhY2htZW50Q29kZT86IHN0cmluZ1xyXG4gIGNyZWF0ZWRCeT86IHN0cmluZ1xyXG4gIGNyZWF0ZWROYW1lPzogc3RyaW5nXHJcbiAgY3JlYXRlZERhdGU/OiBzdHJpbmdcclxuICByZWFkQ291bnQ/OiBudW1iZXJcclxuICBkZWxldGVBdD86IG51bWJlclxyXG4gIGlzTmV3PzogYm9vbGVhblxyXG4gIGNvbW1lbnRDb3VudD86IG51bWJlclxyXG4gIHByZXZQb3N0cz86IElQb3N0c0Zvcm1bXVxyXG4gIG5leHRQb3N0cz86IElQb3N0c0Zvcm1bXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RzUGF5bG9hZCB7XHJcbiAgY2FsbGJhY2s6ICgpID0+IGFueVxyXG4gIGVycm9yQ2FsbGJhY2s6IChlcnJvcjogQXhpb3NFcnJvcikgPT4gdm9pZFxyXG4gIGJvYXJkTm8/OiBudW1iZXJcclxuICBwb3N0c05vPzogbnVtYmVyXHJcbiAgZGF0YT86IElQb3N0c0Zvcm1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3N0c1JlcVBheWxvYWQgZXh0ZW5kcyBTZWFyY2hQYXlsb2FkIHtcclxuICBib2FyZE5vOiBudW1iZXJcclxuICBwb3N0c05vOiBudW1iZXJcclxuICBoZWFkZXJzPzogYW55XHJcbiAga2V5d29yZFR5cGU/OiBzdHJpbmdcclxuICBrZXl3b3JkPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1lbnRTZWFyY2hQcm9wcyB7XHJcbiAgYm9hcmRObzogbnVtYmVyXHJcbiAgcG9zdHNObzogbnVtYmVyXHJcbiAgX3BhZ2U6IG51bWJlclxyXG4gIF9tb2RlOiAncmVwbGFjZScgfCAnYXBwZW5kJyB8ICd1bnRpbCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tbWVudFBhZ2Uge1xyXG4gIGVtcHR5OiBib29sZWFuXHJcbiAgZmlyc3Q6IGJvb2xlYW5cclxuICBsYXN0OiBib29sZWFuXHJcbiAgbnVtYmVyOiBudW1iZXJcclxuICBudW1iZXJPZkVsZW1lbnRzOiBudW1iZXJcclxuICBwYWdlYWJsZTogUGFnZWFibGVcclxuICBzaXplOiBudW1iZXJcclxuICBzb3J0OiBTb3J0XHJcbiAgdG90YWxFbGVtZW50czogbnVtYmVyXHJcbiAgZ3JvdXBFbGVtZW50czogbnVtYmVyXHJcbiAgdG90YWxQYWdlczogbnVtYmVyXHJcbiAgY29udGVudDogQ29tbWVudFNhdmVQYXlsb2FkW10gfCBbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lbnRTYXZlUGF5bG9hZCB7XHJcbiAgYm9hcmRObzogbnVtYmVyXHJcbiAgcG9zdHNObzogbnVtYmVyXHJcbiAgY29tbWVudE5vPzogbnVtYmVyXHJcbiAgY29tbWVudENvbnRlbnQ6IHN0cmluZ1xyXG4gIGNvbW1lbnRBbnN3ZXJDb250ZW50Pzogc3RyaW5nXHJcbiAgZ3JvdXBObz86IG51bWJlclxyXG4gIHBhcmVudENvbW1lbnRObz86IG51bWJlclxyXG4gIGRlcHRoU2VxOiBudW1iZXJcclxuICBzb3J0U2VxPzogbnVtYmVyXHJcbiAgZGVsZXRlQXQ/OiBudW1iZXJcclxuICBjcmVhdGVkQnk/OiBzdHJpbmdcclxuICBjcmVhdGVkTmFtZT86IHN0cmluZ1xyXG4gIGNyZWF0ZWREYXRlPzogc3RyaW5nXHJcbiAgbW9kZT86ICdub25lJyB8ICdlZGl0JyB8ICdyZXBseSdcclxufVxyXG5cclxuY29uc3QgQk9BUkRfVVJMID0gJy9ib2FyZC1zZXJ2aWNlL2FwaS92MS9ib2FyZHMnXHJcbmNvbnN0IFBPU1RTX1VSTCA9ICcvYm9hcmQtc2VydmljZS9hcGkvdjEvcG9zdHMnXHJcbmNvbnN0IENPTU1FTlRfVVJMID0gJy9ib2FyZC1zZXJ2aWNlL2FwaS92MS9jb21tZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBib2FyZFNlcnZpY2UgPSB7XHJcbiAgZ2V0Qm9hcmRCeUlkOiAoYm9hcmRObzogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0JPQVJEX1VSTH0vJHtib2FyZE5vfWApXHJcbiAgfSxcclxuICBnZXRNYWluUG9zdHM6IChib2FyZE5vczogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7UE9TVFNfVVJMfS9uZXdlc3QvJHtib2FyZE5vc30vJHtjb3VudH1gKVxyXG4gIH0sXHJcbiAgc2VhcmNoOiAoXHJcbiAgICBib2FyZE5vOiBudW1iZXIsXHJcbiAgICB7IGtleXdvcmRUeXBlLCBrZXl3b3JkLCBzaXplLCBwYWdlIH06IFNlYXJjaFBheWxvYWQsXHJcbiAgKSA9PlxyXG4gICAgdXNlU1dSPFBhZ2UsIEF4aW9zRXJyb3I+KFxyXG4gICAgICAoKSA9PlxyXG4gICAgICAgIHR5cGVvZiBib2FyZE5vID09PSAnbnVtYmVyJyAmJiBib2FyZE5vID4gLTFcclxuICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgIGAke1BPU1RTX1VSTH0vbGlzdC8ke2JvYXJkTm99P3NpemU9JHtzaXplfSZwYWdlPSR7cGFnZX1gLFxyXG4gICAgICAgICAgICAgIGtleXdvcmRUeXBlLFxyXG4gICAgICAgICAgICAgIGtleXdvcmQsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIDogbnVsbCxcclxuICAgICAgdXJsID0+IGNvbW1vbi5mZXRjaGVyKHVybCwgeyBrZXl3b3JkVHlwZSwga2V5d29yZCB9KSxcclxuICAgICAgeyByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UsIGVycm9yUmV0cnlDb3VudDogMCB9LFxyXG4gICAgKSxcclxuICBnZXRQb3N0QnlJZDogKHtcclxuICAgIGJvYXJkTm8sXHJcbiAgICBwb3N0c05vLFxyXG4gICAga2V5d29yZFR5cGUsXHJcbiAgICBrZXl3b3JkLFxyXG4gIH06IFBvc3RzUmVxUGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChcclxuICAgICAgYCR7UE9TVFNfVVJMfS92aWV3LyR7Ym9hcmROb30vJHtwb3N0c05vfT9rZXl3b3JkVHlwZT0ke2tleXdvcmRUeXBlfSZrZXl3b3JkPSR7a2V5d29yZH1gLFxyXG4gICAgKVxyXG4gIH0sXHJcbiAgc2F2ZVBvc3Q6IGFzeW5jICh7XHJcbiAgICBib2FyZE5vLFxyXG4gICAgY2FsbGJhY2ssXHJcbiAgICBlcnJvckNhbGxiYWNrLFxyXG4gICAgZGF0YSxcclxuICB9OiBQb3N0c1BheWxvYWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7UE9TVFNfVVJMfS9zYXZlLyR7Ym9hcmROb31gLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczogY29tbW9uLmhlYWRlcnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGVycm9yQ2FsbGJhY2soZXJyb3IpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVQb3N0OiBhc3luYyAoe1xyXG4gICAgYm9hcmRObyxcclxuICAgIHBvc3RzTm8sXHJcbiAgICBjYWxsYmFjayxcclxuICAgIGVycm9yQ2FsbGJhY2ssXHJcbiAgICBkYXRhLFxyXG4gIH06IFBvc3RzUGF5bG9hZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgICAgIGAke1BPU1RTX1VSTH0vdXBkYXRlLyR7Ym9hcmROb30vJHtwb3N0c05vfWAsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBjb21tb24uaGVhZGVycyxcclxuICAgICAgICB9LFxyXG4gICAgICApXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGVycm9yQ2FsbGJhY2soZXJyb3IpXHJcbiAgICB9XHJcbiAgfSxcclxuICByZW1vdmVQb3N0OiBhc3luYyAoeyBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgZGF0YSB9OiBQb3N0c1BheWxvYWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dChgJHtQT1NUU19VUkx9L3JlbW92ZWAsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiBjb21tb24uaGVhZGVycyxcclxuICAgICAgfSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZXJyb3JDYWxsYmFjayhlcnJvcilcclxuICAgIH1cclxuICB9LFxyXG4gIGdldENvbW1lbnRzOiAoYm9hcmRObzogbnVtYmVyLCBwb3N0c05vOiBudW1iZXIsIHNpemU6IG51bWJlciwgcGFnZTogbnVtYmVyKSA9PlxyXG4gICAgbmV3IFByb21pc2U8SUNvbW1lbnRQYWdlPigocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoXHJcbiAgICAgICAgICBgJHtDT01NRU5UX1VSTH0vbGlzdC8ke2JvYXJkTm99LyR7cG9zdHNOb30/c2l6ZT0ke3NpemV9JnBhZ2U9JHtwYWdlfWAsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4gcmVqZWN0cyhlKSlcclxuICAgIH0pLFxyXG4gIGdldEFsbENvbW1lbnRzOiAoYm9hcmRObzogbnVtYmVyLCBwb3N0c05vOiBudW1iZXIpID0+XHJcbiAgICBuZXcgUHJvbWlzZTxQYWdlPigocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYCR7Q09NTUVOVF9VUkx9L2FsbC8ke2JvYXJkTm99LyR7cG9zdHNOb31gKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4gcmVqZWN0cyhlKSlcclxuICAgIH0pLFxyXG4gIHNhdmVDb21tZW50OiAoY29tbWVudDogQ29tbWVudFNhdmVQYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UGFnZT4oKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChgJHtDT01NRU5UX1VSTH1gLCBjb21tZW50KVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4gcmVqZWN0cyhlKSlcclxuICAgIH0pXHJcbiAgfSxcclxuICB1cGRhdGVDb21tZW50OiAoY29tbWVudDogQ29tbWVudFNhdmVQYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UGFnZT4oKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChgJHtDT01NRU5UX1VSTH0vdXBkYXRlYCwgY29tbWVudClcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHJlamVjdHMoZSkpXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZGVsZXRlQ29tbWVudDogKHsgYm9hcmRObywgcG9zdHNObywgY29tbWVudE5vIH06IENvbW1lbnRTYXZlUGF5bG9hZCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFBhZ2U+KChyZXNvbHZlLCByZWplY3RzKSA9PiB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmRlbGV0ZShgJHtDT01NRU5UX1VSTH0vZGVsZXRlLyR7Ym9hcmROb30vJHtwb3N0c05vfS8ke2NvbW1lbnROb31gKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4gcmVqZWN0cyhlKSlcclxuICAgIH0pXHJcbiAgfSxcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vKipcclxuICog7Luo7YWQ7LigIOuNsOydtO2EsCDtg4DsnoVcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRlbnQge1xyXG4gIGNvbnRlbnROYW1lOiBzdHJpbmdcclxuICBjb250ZW50UmVtYXJrOiBzdHJpbmdcclxuICBjb250ZW50VmFsdWU6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICog7Y+s7YS4IOyEnOu5hOyKpCDsu6jthZDsuKAgQVBJIFVSTFxyXG4gKi9cclxuY29uc3QgQ09OVEVOVF9VUkwgPSAnL3BvcnRhbC1zZXJ2aWNlL2FwaS92MS9jb250ZW50cydcclxuXHJcbi8qKlxyXG4gKiDsu6jthZDsuKAg6rSA66asIOyEnOu5hOyKpFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnRlbnRTZXJ2aWNlID0ge1xyXG4gIGdldDogYXN5bmMgKGNvbnRlbnRObzogbnVtYmVyKSA9PiBheGlvcy5nZXQoYCR7Q09OVEVOVF9VUkx9LyR7Y29udGVudE5vfWApLFxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGUge1xyXG4gIGtleTogc3RyaW5nXHJcbiAgZmlsZTogRmlsZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZEluZm9SZXFldXN0IHtcclxuICBlbnRpdHlOYW1lPzogc3RyaW5nXHJcbiAgZW50aXR5SWQ/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXR0YWNobWVudFJlc3BvbnNlIHtcclxuICBjb2RlOiBzdHJpbmdcclxuICBzZXE6IG51bWJlclxyXG4gIGlkOiBzdHJpbmdcclxuICBvcmlnaW5hbEZpbGVOYW1lOiBzdHJpbmdcclxuICBwaHlzaWNhbEZpbGVOYW1lOiBzdHJpbmdcclxuICBzaXplOiBudW1iZXJcclxuICBmaWxlVHlwZTogc3RyaW5nXHJcbiAgaXNEZWxldGU6IGJvb2xlYW5cclxuICBjcmVhdGVEYXRlOiBEYXRlXHJcbiAgZG93bmxvYWRDbnQ6IG51bWJlclxyXG4gIGVudGl0eUlkOiBzdHJpbmdcclxuICBlbnRpdHlOYW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdHRhY2htZW50U2F2ZVBheWxvYWQge1xyXG4gIHVuaXF1ZUlkOiBzdHJpbmdcclxuICBpc0RlbGV0ZTogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcGxvYWRQYXlsb2FkID0ge1xyXG4gIGZpbGVMaXN0PzogSUZpbGVbXVxyXG4gIGF0dGFjaG1lbnRDb2RlPzogc3RyaW5nXHJcbiAgaW5mbz86IFVwbG9hZEluZm9SZXFldXN0XHJcbiAgbGlzdD86IEF0dGFjaG1lbnRTYXZlUGF5bG9hZFtdXHJcbn1cclxuXHJcbmNvbnN0IFVQTE9BRF9BUEkgPSAnL3BvcnRhbC1zZXJ2aWNlL2FwaS92MS9hdHRhY2htZW50cydcclxuY29uc3QgRE9XTkxPQURfQVBJID0gYC9zZXJ2ZXIvcG9ydGFsLXNlcnZpY2UvYXBpL3YxL2Rvd25sb2FkYFxyXG5cclxubGV0IGZpbGVIZWFkZXIgPSB7XHJcbiAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIO2MjOydvCDsl4XroZzrk5wg7ISc67mE7IqkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmlsZVNlcnZpY2UgPSB7XHJcbiAgdXJsOiBVUExPQURfQVBJLFxyXG4gIGRvd25sb2FkVXJsOiBET1dOTE9BRF9BUEksXHJcbiAgdXBsb2FkOiBhc3luYyAoeyBmaWxlTGlzdCwgYXR0YWNobWVudENvZGUsIGluZm8sIGxpc3QgfTogVXBsb2FkUGF5bG9hZCkgPT4ge1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuXHJcbiAgICBmaWxlTGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXMnLCBpdGVtLmZpbGUpXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChpbmZvKSB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcclxuICAgICAgICAnaW5mbycsXHJcbiAgICAgICAgbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGluZm8pXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGlzdCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXHJcbiAgICAgICAgJ2xpc3QnLFxyXG4gICAgICAgIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShsaXN0KV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXR0YWNobWVudENvZGXqsIAg7J6I64qUIOqyveyasCB1cGRhdGXrnbzqs6Ag67O464ukXHJcbiAgICBpZiAoYXR0YWNobWVudENvZGUpIHtcclxuICAgICAgcmV0dXJuIGF4aW9zLnB1dChcclxuICAgICAgICBgL3NlcnZlciR7VVBMT0FEX0FQSX0vdXBsb2FkLyR7YXR0YWNobWVudENvZGV9YCxcclxuICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBmaWxlSGVhZGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdHRhY2htZW50Q29kZeqwgCDsl4bripQg6rK97JqwIOyLoOq3nCDsoIDsnqVcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvc2VydmVyJHtVUExPQURfQVBJfS91cGxvYWRgLCBmb3JtRGF0YSwge1xyXG4gICAgICBoZWFkZXJzOiBmaWxlSGVhZGVyLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHNhdmU6IGFzeW5jICh7IGF0dGFjaG1lbnRDb2RlLCBpbmZvLCBsaXN0IH06IFVwbG9hZFBheWxvYWQpID0+IHtcclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFxyXG4gICAgICAnaW5mbycsXHJcbiAgICAgIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShpbmZvKV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgKVxyXG5cclxuICAgIGZvcm1EYXRhLmFwcGVuZChcclxuICAgICAgJ2xpc3QnLFxyXG4gICAgICBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkobGlzdCldLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gYXhpb3MucHV0KGAke1VQTE9BRF9BUEl9LyR7YXR0YWNobWVudENvZGV9YCwgZm9ybURhdGEsIHtcclxuICAgICAgaGVhZGVyczogZmlsZUhlYWRlcixcclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXRBdHRhY2htZW50TGlzdDogKGF0dGFjaG1lbnRDb2RlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7VVBMT0FEX0FQSX0vJHthdHRhY2htZW50Q29kZX1gKVxyXG4gIH0sXHJcbiAgZGVsZXRlQWxsOiAoYXR0YWNobWVudENvZGU6IHN0cmluZykgPT5cclxuICAgIGF4aW9zLmRlbGV0ZShgJHtVUExPQURfQVBJfS8ke2F0dGFjaG1lbnRDb2RlfS9jaGlsZHJlbmApLFxyXG59XHJcbiIsImltcG9ydCB7IEFDQ0VTU19UT0tFTiwgQVVUSF9VU0VSX0lELCBDTEFJTV9OQU1FIH0gZnJvbSAnQGNvbnN0YW50cy9lbnYnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IEpXVF9FWFBJUkVEX1RJTUUgPSAxODAwMDAwXHJcbmNvbnN0IExPR0lOX1NFUlZJQ0VfVVJMID0gYC9hcGkvbG9naW4vdXNlci1zZXJ2aWNlYFxyXG5jb25zdCBMT0dJTl9VUkwgPSBgL2xvZ2luYFxyXG5jb25zdCBDTElFTlRfUkVGUkVTSF9VUkwgPSAnL2FwaS9sb2dpbi91c2VyLXNlcnZpY2UvYXBpL3YxL3VzZXJzL3Rva2VuL3JlZnJlc2gnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb2dpbiB7XHJcbiAgZW1haWw/OiBzdHJpbmdcclxuICBwYXNzd29yZD86IHN0cmluZ1xyXG4gIGlzUmVtZW1iZXI/OiBib29sZWFuXHJcbiAgcHJvdmlkZXI6ICdlbWFpbCcgfCAnZ29vZ2xlJyB8ICduYXZlcicgfCAna2FrYW8nXHJcbiAgdG9rZW4/OiBzdHJpbmdcclxuICBuYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IG9uU3VjY2Vzc0xvZ2luID0gKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bQ0xBSU1fTkFNRV0gPSByZXN1bHRbQUNDRVNTX1RPS0VOXVxyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW0FVVEhfVVNFUl9JRF0gPSByZXN1bHRbQVVUSF9VU0VSX0lEXVxyXG4gIC8vIGFjY2Vzcy10b2tlbiDrp4zro4wgMeu2hCDsoITsl5Ag66Gc6re47J24IOyXsOyepVxyXG4gIHNldFRpbWVvdXQobG9naW5TZXJpdmNlLnNpbGVudFJlZnJlc2gsIEpXVF9FWFBJUkVEX1RJTUUgLSA2MDAwMClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luU2VyaXZjZSA9IHtcclxuICBsb2dpbjogKGRhdGE6IElMb2dpbikgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKExPR0lOX1NFUlZJQ0VfVVJMICsgTE9HSU5fVVJMLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIG9uU3VjY2Vzc0xvZ2luKGF3YWl0IHJlc3VsdC5qc29uKCkpXHJcbiAgICAgICAgICByZXNvbHZlKCdzdWNjZXNzJylcclxuICAgICAgICB9IGlmIChyZXN1bHQuc3RhdHVzID09PSA0MTIpIHtcclxuICAgICAgICAgIHJlamVjdCgnam9pbicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdCgnbm9BdXRoJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgc2lsZW50UmVmcmVzaDogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goQ0xJRU5UX1JFRlJFU0hfVVJMLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgfSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIG9uU3VjY2Vzc0xvZ2luKGF3YWl0IHJlc3VsdC5qc29uKCkpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybigncmVmcmVzaCB0b2tlbiDrp4zro4zroZwg7J247ZWcIOuhnOq3uOyVhOybgyEhISEnKVxyXG4gICAgICBmZXRjaCgnL2FwaS92MS90b2tlbicpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignZmV0Y2gnLCByZXMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdmZXRjaCBlcnJvcicsIGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxufVxyXG4iLCJpbXBvcnQgeyBNT0RFIH0gZnJvbSAnQGNvbnN0YW50cy9lbnYnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgeyBjb21tb24gfSBmcm9tICcuL2NvbW1vbidcclxuXHJcbmNvbnN0IHNpdGVJZCA9IE1PREUgPT09ICdzbScgPyAnMycgOiAnMidcclxuXHJcbmNvbnN0IE1FTlVfQVBJID0gYC9wb3J0YWwtc2VydmljZS9hcGkvdjEvbWVudS1yb2xlcy8ke3NpdGVJZH1gXHJcbmNvbnN0IENPREVfQVBJID0gYC9wb3J0YWwtc2VydmljZS9hcGkvdjEvY29kZS1kZXRhaWxzL3NraW5fdHlwZV9jb2RlL2NvZGVzYFxyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVTZXJ2aWNlID0ge1xyXG4gIGdldE1lbnVzOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gdXNlU1dSKE1FTlVfQVBJLCBjb21tb24uZmV0Y2hlciwge1xyXG4gICAgICByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UsXHJcbiAgICAgIHJldmFsaWRhdGVPblJlY29ubmVjdDogZmFsc2UsXHJcbiAgICB9KVxyXG4gIH0sXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9saWN5IHtcclxuICBpZDogbnVtYmVyXHJcbiAgdHlwZTogc3RyaW5nXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIGlzVXNlOiBib29sZWFuXHJcbiAgcmVnRGF0ZTogRGF0ZVxyXG4gIGNvbnRlbnRzOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgUE9MSUNZX0FQSSA9ICcvcG9ydGFsLXNlcnZpY2UvYXBpL3YxL3BvbGljaWVzJ1xyXG5cclxuLyoqXHJcbiAqIOydtOyaqeyVveq0gCDqtIDrpqwg7ISc67mE7IqkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcG9saWN5U2VydmljZSA9IHtcclxuICB1cmw6IFBPTElDWV9BUEksXHJcbiAgZ2V0TGF0ZXN0OiAodHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke1BPTElDWV9BUEl9L2xhdGVzdC8ke3R5cGV9YClcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8qKlxyXG4gKiDqsJzsnbjsoJXrs7TsspjrpqzrsKnsuagg642w7J207YSwIO2DgOyehVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUHJpdmFjeSB7XHJcbiAgcHJpdmFjeU5vOiBudW1iZXJcclxuICBwcml2YWN5VGl0bGU6IHN0cmluZ1xyXG4gIHByaXZhY3lDb250ZW50OiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIO2PrO2EuCDshJzruYTsiqQg6rCc7J247KCV67O07LKY66as67Cp7LmoIEFQSSBVUkxcclxuICovXHJcbmNvbnN0IFBSSVZBQ1lfVVJMID0gJy9wb3J0YWwtc2VydmljZS9hcGkvdjEvcHJpdmFjaWVzJ1xyXG5cclxuLyoqXHJcbiAqIOqwnOyduOygleuztOyymOumrOuwqey5qCDqtIDrpqwg7ISc67mE7IqkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcHJpdmFjeVNlcnZpY2UgPSB7XHJcbiAgYWxsdXNlOiBhc3luYyAoKSA9PiBheGlvcy5nZXQoYCR7UFJJVkFDWV9VUkx9L2FsbC91c2VgKSxcclxufVxyXG4iLCJpbXBvcnQgeyBjb21tb24sIFBhZ2UsIFNlYXJjaFBheWxvYWQgfSBmcm9tICdAc2VydmljZSdcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5jb25zdCBMSVNUX0FQSV9VUkwgPSAoY2F0ZWdvcnlJZDogVmFsdWVUeXBlKSA9PlxyXG4gIGAvcmVzZXJ2ZS1pdGVtLXNlcnZpY2UvYXBpL3YxLyR7Y2F0ZWdvcnlJZH0vcmVzZXJ2ZS1pdGVtc2BcclxuY29uc3QgSVRFTV9BUElfVVJMID0gYC9yZXNlcnZlLWl0ZW0tc2VydmljZS9hcGkvdjEvcmVzZXJ2ZS1pdGVtc2BcclxuY29uc3QgUkVRVUVTVF9BUElfVVJMID0gJy9yZXNlcnZlLXJlcXVlc3Qtc2VydmljZS9hcGkvdjEvcmVxdWVzdHMnXHJcbmNvbnN0IENPREVfQVBJX1VSTCA9IGAvcG9ydGFsLXNlcnZpY2UvYXBpL3YxL2NvZGUtZGV0YWlsc2BcclxuY29uc3QgTE9DQVRJT05fQVBJX1VSTCA9ICcvcmVzZXJ2ZS1pdGVtLXNlcnZpY2UvYXBpL3YxL2xvY2F0aW9ucydcclxuY29uc3QgUkVTRVJWRV9BUElfVVJMID0gJy9yZXNlcnZlLWNoZWNrLXNlcnZpY2UvYXBpL3YxJ1xyXG5cclxuaW50ZXJmYWNlIFJlc2VydmVTZWFyY2hQYXlsb2FkIGV4dGVuZHMgU2VhcmNoUGF5bG9hZCB7XHJcbiAgY2F0ZWdvcnlJZD86IFZhbHVlVHlwZVxyXG4gIGxvY2F0aW9uSWQ/OiBWYWx1ZVR5cGVcclxuICB1c2VySWQ/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFpbkl0ZW0ge1xyXG4gIFtrZXk6IHN0cmluZ106IElSZXNlcnZlSXRlbU1haW5bXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXNlcnZlSXRlbU1haW4ge1xyXG4gIHJlc2VydmVJdGVtSWQ6IG51bWJlclxyXG4gIHJlc2VydmVJdGVtTmFtZTogc3RyaW5nXHJcbiAgY2F0ZWdvcnlJZDogc3RyaW5nXHJcbiAgY2F0ZWdvcnlOYW1lOiBzdHJpbmdcclxuICBzdGFydERhdGU6IHN0cmluZ1xyXG4gIGVuZERhdGU6IHN0cmluZ1xyXG4gIGlzUG9zc2libGU6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYXRpb24ge1xyXG4gIGxvY2F0aW9uSWQ/OiBudW1iZXJcclxuICBsb2NhdGlvbk5hbWU6IHN0cmluZ1xyXG4gIHNvcnRTZXE6IG51bWJlclxyXG4gIGlzVXNlOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvZGUge1xyXG4gIGNvZGVJZDogc3RyaW5nXHJcbiAgY29kZU5hbWU6IHN0cmluZ1xyXG4gIHNvcnRTZXE6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXNlcnZlSXRlbSB7XHJcbiAgcmVzZXJ2ZUl0ZW1JZDogbnVtYmVyXHJcbiAgcmVzZXJ2ZUl0ZW1OYW1lOiBzdHJpbmdcclxuICBsb2NhdGlvbklkOiBudW1iZXJcclxuICBsb2NhdGlvbjogSUxvY2F0aW9uXHJcbiAgY2F0ZWdvcnlJZDogc3RyaW5nXHJcbiAgY2F0ZWdvcnlOYW1lOiBzdHJpbmdcclxuICB0b3RhbFF0eTogbnVtYmVyXHJcbiAgaW52ZW50b3J5UXR5OiBudW1iZXJcclxuICBvcGVyYXRpb25TdGFydERhdGU6IHN0cmluZ1xyXG4gIG9wZXJhdGlvbkVuZERhdGU6IHN0cmluZ1xyXG4gIHJlc2VydmVNZXRob2RJZDogc3RyaW5nXHJcbiAgcmVzZXJ2ZU1ldGhvZE5hbWU6IHN0cmluZ1xyXG4gIHJlc2VydmVNZWFuc0lkOiBzdHJpbmdcclxuICByZXNlcnZlTWVhbnNOYW1lOiBzdHJpbmdcclxuICByZXF1ZXN0U3RhcnREYXRlOiBzdHJpbmdcclxuICByZXF1ZXN0RW5kRGF0ZTogc3RyaW5nXHJcbiAgaXNQZXJpb2Q6IHRydWVcclxuICBwZXJpb2RNYXhDb3VudDogbnVtYmVyXHJcbiAgZXh0ZXJuYWxVcmw6IHN0cmluZ1xyXG4gIHNlbGVjdGlvbk1lYW5zSWQ6IHN0cmluZ1xyXG4gIHNlbGVjdGlvbk1lYW5zTmFtZTogc3RyaW5nXHJcbiAgaXNQYWlkOiB0cnVlXHJcbiAgdXNhZ2VDb3N0OiBudW1iZXJcclxuICBpc1VzZTogdHJ1ZVxyXG4gIHB1cnBvc2U6IHN0cmluZ1xyXG4gIGFkZHJlc3M6IHN0cmluZ1xyXG4gIHRhcmdldElkOiBzdHJpbmdcclxuICB0YXJnZXROYW1lOiBzdHJpbmdcclxuICBleGNsdWRlZDogc3RyaW5nXHJcbiAgaG9tZXBhZ2U6IHN0cmluZ1xyXG4gIGNvbnRhY3Q6IHN0cmluZ1xyXG4gIG1hbmFnZXJEZXB0OiBzdHJpbmdcclxuICBtYW5hZ2VyTmFtZTogc3RyaW5nXHJcbiAgbWFuYWdlckNvbnRhY3Q6IHN0cmluZ1xyXG4gIGlzUG9zc2libGU6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXNlcnZlU2F2ZVBheWxvYWQge1xyXG4gIHJlc2VydmVJZDogc3RyaW5nXHJcbiAgcmVzZXJ2ZUl0ZW1JZDogbnVtYmVyXHJcbiAgbG9jYXRpb25JZDogbnVtYmVyXHJcbiAgY2F0ZWdvcnlJZDogc3RyaW5nXHJcbiAgdG90YWxRdHk6IG51bWJlclxyXG4gIHJlc2VydmVNZXRob2RJZDogc3RyaW5nXHJcbiAgcmVzZXJ2ZU1lYW5zSWQ6IHN0cmluZ1xyXG4gIG9wZXJhdGlvblN0YXJ0RGF0ZTogc3RyaW5nXHJcbiAgb3BlcmF0aW9uRW5kRGF0ZTogc3RyaW5nXHJcbiAgcmVxdWVzdFN0YXJ0RGF0ZTogc3RyaW5nXHJcbiAgcmVxdWVzdEVuZERhdGU6IHN0cmluZ1xyXG4gIGlzUGVyaW9kOiBib29sZWFuXHJcbiAgcGVyaW9kTWF4Q291bnQ6IG51bWJlclxyXG4gIHJlc2VydmVRdHk6IG51bWJlclxyXG4gIHJlc2VydmVQdXJwb3NlQ29udGVudDogc3RyaW5nXHJcbiAgYXR0YWNobWVudENvZGU6IHN0cmluZ1xyXG4gIHJlc2VydmVTdGFydERhdGU6IHN0cmluZ1xyXG4gIHJlc2VydmVFbmREYXRlOiBzdHJpbmdcclxuICByZXNlcnZlU3RhdHVzSWQ6IHN0cmluZ1xyXG4gIHVzZXJJZDogc3RyaW5nXHJcbiAgdXNlckNvbnRhY3RObzogc3RyaW5nXHJcbiAgdXNlckVtYWlsOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVzZXJ2ZSB7XHJcbiAgcmVzZXJ2ZUlkOiBzdHJpbmdcclxuICByZXNlcnZlSXRlbUlkOiBudW1iZXJcclxuICByZXNlcnZlSXRlbTogSVJlc2VydmVJdGVtXHJcbiAgcmVzZXJ2ZVF0eTogbnVtYmVyXHJcbiAgcmVzZXJ2ZVN0YXJ0RGF0ZTogc3RyaW5nXHJcbiAgcmVzZXJ2ZUVuZERhdGU6IHN0cmluZ1xyXG4gIHJlc2VydmVQdXJwb3NlQ29udGVudDogc3RyaW5nXHJcbiAgYXR0YWNobWVudENvZGU6IHN0cmluZ1xyXG4gIHJlc2VydmVTdGF0dXNJZDogc3RyaW5nXHJcbiAgdXNlcklkOiBzdHJpbmdcclxuICB1c2VyTmFtZTogc3RyaW5nXHJcbiAgdXNlckNvbnRhY3RObzogc3RyaW5nXHJcbiAgdXNlckVtYWlsOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2VydmVTZXJ2aWNlID0ge1xyXG4gIHJlcXVlc3RBcGlVcmw6IFJFUVVFU1RfQVBJX1VSTCxcclxuICBzZWFyY2g6ICh7XHJcbiAgICBrZXl3b3JkVHlwZSxcclxuICAgIGtleXdvcmQsXHJcbiAgICBzaXplLFxyXG4gICAgcGFnZSxcclxuICAgIGNhdGVnb3J5SWQsXHJcbiAgICBsb2NhdGlvbklkLFxyXG4gIH06IFJlc2VydmVTZWFyY2hQYXlsb2FkKSA9PlxyXG4gICAgdXNlU1dSPFBhZ2UsIEF4aW9zRXJyb3I+KFxyXG4gICAgICBbXHJcbiAgICAgICAgYCR7TElTVF9BUElfVVJMKGNhdGVnb3J5SWQpfT9zaXplPSR7c2l6ZX0mcGFnZT0ke3BhZ2V9YCxcclxuICAgICAgICBrZXl3b3JkVHlwZSxcclxuICAgICAgICBrZXl3b3JkLFxyXG4gICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgXSxcclxuICAgICAgdXJsID0+XHJcbiAgICAgICAgY29tbW9uLmZldGNoZXIodXJsLCB7XHJcbiAgICAgICAgICBrZXl3b3JkVHlwZSxcclxuICAgICAgICAgIGtleXdvcmQsXHJcbiAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgICAgIGlzVXNlOiB0cnVlLFxyXG4gICAgICAgICAgaXNQb3B1cDogZmFsc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIHsgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlLCBlcnJvclJldHJ5Q291bnQ6IDAgfSxcclxuICAgICksXHJcbiAgZ2V0Q29kZTogKGNvZGVJZDogc3RyaW5nKSA9PlxyXG4gICAgYXhpb3MuZ2V0KGAke0NPREVfQVBJX1VSTH0vJHtjb2RlSWR9L2NvZGVzYCwge1xyXG4gICAgICBoZWFkZXJzOiBjb21tb24uaGVhZGVycyxcclxuICAgIH0pLFxyXG4gIGdldExvY2F0aW9uOiAoKSA9PlxyXG4gICAgYXhpb3MuZ2V0KGAke0xPQ0FUSU9OX0FQSV9VUkx9L2NvbWJvYCwge1xyXG4gICAgICBoZWFkZXJzOiBjb21tb24uaGVhZGVycyxcclxuICAgIH0pLFxyXG4gIGdldEl0ZW06IChyZXNlcnZlSXRlbUlkOiBudW1iZXIpID0+XHJcbiAgICBheGlvcy5nZXQoYCR7SVRFTV9BUElfVVJMfS9yZWxhdGlvbnMvJHtyZXNlcnZlSXRlbUlkfWApLFxyXG4gIGdldENvdW50SW52ZW50b3J5OiAoXHJcbiAgICByZXNlcnZlSXRlbUlkOiBudW1iZXIsXHJcbiAgICBzdGFydERhdGU6IHN0cmluZyxcclxuICAgIGVuZERhdGU6IHN0cmluZyxcclxuICApID0+XHJcbiAgICBheGlvcy5nZXQoXHJcbiAgICAgIGAke1JFU0VSVkVfQVBJX1VSTH0vcmVzZXJ2ZXMvJHtyZXNlcnZlSXRlbUlkfS9pbnZlbnRvcmllcz9zdGFydERhdGU9JHtzdGFydERhdGV9JmVuZERhdGU9JHtlbmREYXRlfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgICBlbmREYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApLFxyXG4gIGNyZWF0ZUF1ZGl0OiAoZGF0YTogUmVzZXJ2ZVNhdmVQYXlsb2FkKSA9PlxyXG4gICAgYXhpb3MucG9zdChgJHtSRVFVRVNUX0FQSV9VUkx9L2V2YWx1YXRlc2AsIGRhdGEpLFxyXG4gIGNyZWF0ZTogKGRhdGE6IFJlc2VydmVTYXZlUGF5bG9hZCkgPT4gYXhpb3MucG9zdChSRVFVRVNUX0FQSV9VUkwsIGRhdGEpLFxyXG4gIGdldE1haW5JdGVtczogKGNvdW50OiBudW1iZXIpID0+IGF4aW9zLmdldChgJHtJVEVNX0FQSV9VUkx9L2xhdGVzdC8ke2NvdW50fWApLFxyXG4gIHNlYXJjaFVzZXJSZXNlcnZlOiAoe1xyXG4gICAgdXNlcklkLFxyXG4gICAgc2l6ZSxcclxuICAgIHBhZ2UsXHJcbiAgICBrZXl3b3JkVHlwZSxcclxuICAgIGtleXdvcmQsXHJcbiAgICBsb2NhdGlvbklkLFxyXG4gICAgY2F0ZWdvcnlJZCxcclxuICB9OiBSZXNlcnZlU2VhcmNoUGF5bG9hZCkgPT5cclxuICAgIHVzZVNXUihcclxuICAgICAgW1xyXG4gICAgICAgIGAke1JFU0VSVkVfQVBJX1VSTH0vJHt1c2VySWR9L3Jlc2VydmVzP3NpemU9JHtzaXplfSZwYWdlPSR7cGFnZX1gLFxyXG4gICAgICAgIGtleXdvcmRUeXBlLFxyXG4gICAgICAgIGtleXdvcmQsXHJcbiAgICAgICAgbG9jYXRpb25JZCxcclxuICAgICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICBdLFxyXG4gICAgICB1cmwgPT5cclxuICAgICAgICBjb21tb24uZmV0Y2hlcih1cmwsIHtcclxuICAgICAgICAgIGtleXdvcmRUeXBlLFxyXG4gICAgICAgICAga2V5d29yZCxcclxuICAgICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB7IHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSwgZXJyb3JSZXRyeUNvdW50OiAwIH0sXHJcbiAgICApLFxyXG4gIGdldFJlc2VydmU6IChyZXNlcnZlSWQ6IHN0cmluZykgPT5cclxuICAgIGF4aW9zLmdldChgJHtSRVNFUlZFX0FQSV9VUkx9L3Jlc2VydmVzLyR7cmVzZXJ2ZUlkfWApLFxyXG4gIGNhbmNlbDogKHJlc2VydmVJZDogc3RyaW5nLCByZWFzb246IFZhbHVlVHlwZSkgPT5cclxuICAgIGF4aW9zLnB1dChgJHtSRVNFUlZFX0FQSV9VUkx9L3Jlc2VydmVzL2NhbmNlbC8ke3Jlc2VydmVJZH1gLCB7XHJcbiAgICAgIHJlYXNvbkNhbmNlbENvbnRlbnQ6IHJlYXNvbixcclxuICAgIH0pLFxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgY29tbW9uIH0gZnJvbSAnLi9jb21tb24nXHJcblxyXG5jb25zdCBTVEFUSVNUSUNTX0FQSSA9IGAvcG9ydGFsLXNlcnZpY2UvYXBpL3YxL3N0YXRpc3RpY3NgXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhdGlzdGljc1NlcnZpY2UgPSB7XHJcbiAgc2F2ZTogKHV1aWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7U1RBVElTVElDU19BUEl9LyR7dXVpZH1gLCB7XHJcbiAgICAgIEhlYWRlcnM6IGNvbW1vbi5oZWFkZXJzLFxyXG4gICAgfSlcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8qKlxyXG4gKiDsgqzsmqnsnpAg7ISc67mE7IqkIOyCrOyaqeyekCBBUEkgVVJMXHJcbiAqL1xyXG5jb25zdCBVU0VSX1VSTCA9ICcvdXNlci1zZXJ2aWNlL2FwaS92MS91c2VycydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwYXNzd29yZD86IHN0cmluZ1xyXG4gIHVzZXJOYW1lOiBzdHJpbmdcclxuICB0b2tlbj86IHN0cmluZ1xyXG59XHJcblxyXG4vLyDruYTrsIDrsojtmLgg7LC+6riw66GcIOuzgOqyvVxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyRmluZFBhc3N3b3JkIHtcclxuICBlbWFpbEFkZHI/OiBzdHJpbmdcclxuICB1c2VyTmFtZT86IHN0cmluZ1xyXG4gIHBhc3N3b3JkPzogc3RyaW5nXHJcbiAgdG9rZW5WYWx1ZT86IHN0cmluZ1xyXG59XHJcblxyXG4vLyDsgqzsmqnsnpAg6rKA7KadXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZlcmlmaWNhdGlvbiB7XHJcbiAgcHJvdmlkZXI6IHN0cmluZ1xyXG4gIHBhc3N3b3JkPzogc3RyaW5nXHJcbiAgdG9rZW4/OiBzdHJpbmdcclxufVxyXG5cclxuLy8g66eI7J207Y6Y7J207KeAIOu5hOuwgOuyiO2YuCDrs4Dqsr1cclxuaW50ZXJmYWNlIElVc2VyVXBkYXRlUGFzc3dvcmQgZXh0ZW5kcyBJVmVyaWZpY2F0aW9uIHtcclxuICBuZXdQYXNzd29yZDogc3RyaW5nXHJcbn1cclxuXHJcbi8vIOuniOydtO2OmOydtOyngCDtmozsm5DsoJXrs7Qg67OA6rK9XHJcbmludGVyZmFjZSBJVXNlclVwZGF0ZSBleHRlbmRzIElWZXJpZmljYXRpb24ge1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICB1c2VyTmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbi8vIOyGjOyFnCDsoJXrs7RcclxuZXhwb3J0IGludGVyZmFjZSBJU29jaWFsVXNlciB7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIOyCrOyaqeyekCDqtIDrpqwg7ISc67mE7IqkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSB7XHJcbiAgc29jaWFsOiAocHJvdmlkZXI6IHN0cmluZywgdG9rZW46IHN0cmluZykgPT5cclxuICAgIGF4aW9zLnBvc3QoYCR7VVNFUl9VUkx9L3NvY2lhbGAsIHsgcHJvdmlkZXIsIHRva2VuIH0pLFxyXG4gIGV4aXN0c0VtYWlsOiAoZW1haWw6IHN0cmluZywgdXNlcklkPzogc3RyaW5nKSA9PlxyXG4gICAgbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAvLyAuZ2V0KGAke1VTRVJfVVJMfS9leGlzdHM/ZW1haWw9JHtlbWFpbH1gKVxyXG4gICAgICAgIC5wb3N0KGAke1VTRVJfVVJMfS9leGlzdHNgLCB7IGVtYWlsLCB1c2VySWQgfSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIHJlamVjdHMoZSlcclxuICAgICAgICB9KVxyXG4gICAgfSksXHJcbiAgam9pbjogKHVzZXI6IElVc2VyKSA9PlxyXG4gICAgbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChgJHtVU0VSX1VSTH0vam9pbmAsIHVzZXIpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICByZWplY3RzKGUpXHJcbiAgICAgICAgfSlcclxuICAgIH0pLFxyXG4gIGZpbmRQYXNzd29yZDogKHVzZXJGaW5kUGFzc3dvcmQ6IElVc2VyRmluZFBhc3N3b3JkKSA9PlxyXG4gICAgbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChgJHtVU0VSX1VSTH0vcGFzc3dvcmQvZmluZGAsIHVzZXJGaW5kUGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICByZWplY3RzKGUpXHJcbiAgICAgICAgfSlcclxuICAgIH0pLFxyXG4gIGdldEZpbmRQYXNzd29yZDogKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7VVNFUl9VUkx9L3Bhc3N3b3JkL3ZhbGlkLyR7dG9rZW59YClcclxuICB9LFxyXG4gIGNoYW5nZVBhc3N3b3JkOiAodXNlckZpbmRQYXNzd29yZDogSVVzZXJGaW5kUGFzc3dvcmQpID0+XHJcbiAgICBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wdXQoYCR7VVNFUl9VUkx9L3Bhc3N3b3JkL2NoYW5nZWAsIHVzZXJGaW5kUGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICByZWplY3RzKGUpXHJcbiAgICAgICAgfSlcclxuICAgIH0pLFxyXG4gIHVwZGF0ZVBhc3N3b3JkOiAodXNlclVwZGF0ZVBhc3N3b3JkOiBJVXNlclVwZGF0ZVBhc3N3b3JkKSA9PlxyXG4gICAgbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucHV0KGAke1VTRVJfVVJMfS9wYXNzd29yZC91cGRhdGVgLCB1c2VyVXBkYXRlUGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICByZWplY3RzKGUpXHJcbiAgICAgICAgfSlcclxuICAgIH0pLFxyXG4gIG1hdGNoUGFzc3dvcmQ6IChwYXNzd29yZDogc3RyaW5nKSA9PlxyXG4gICAgbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdHMpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChgJHtVU0VSX1VSTH0vcGFzc3dvcmQvbWF0Y2hgLCB7IHBhc3N3b3JkIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICByZWplY3RzKGUpXHJcbiAgICAgICAgfSlcclxuICAgIH0pLFxyXG4gIHVwZGF0ZUluZm86ICh1c2VySWQ6IHN0cmluZywgdXNlclVwZGF0ZTogSVVzZXJVcGRhdGUpID0+XHJcbiAgICBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wdXQoYCR7VVNFUl9VUkx9L2luZm8vJHt1c2VySWR9YCwgdXNlclVwZGF0ZSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIHJlamVjdHMoZSlcclxuICAgICAgICB9KVxyXG4gICAgfSksXHJcbiAgbGVhdmU6ICh1c2VyTGVhdmU6IElWZXJpZmljYXRpb24pID0+XHJcbiAgICBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGAke1VTRVJfVVJMfS9sZWF2ZWAsIHVzZXJMZWF2ZSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIHJlamVjdHMoZSlcclxuICAgICAgICB9KVxyXG4gICAgfSksXHJcbn1cclxuIiwiaW1wb3J0IHsgQ1VTVE9NX0hFQURFUl9TSVRFX0lEX0tFWSB9IGZyb20gJ0Bjb25zdGFudHMnXHJcbmltcG9ydCB7IFNJVEVfSUQgfSBmcm9tICdAY29uc3RhbnRzL2VudidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxubGV0IGhlYWRlcnMgPSB7XHJcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxufVxyXG5oZWFkZXJzW0NVU1RPTV9IRUFERVJfU0lURV9JRF9LRVldID0gU0lURV9JRFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3J0IHtcclxuICBlbXB0eTogYm9vbGVhblxyXG4gIHNvcnRlZDogYm9vbGVhblxyXG4gIHVuc29ydGVkOiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZWFibGUge1xyXG4gIG9mZnNldDogbnVtYmVyXHJcbiAgcGFnZU51bWJlcjogbnVtYmVyXHJcbiAgcGFnZVNpemU6IG51bWJlclxyXG4gIHBhZ2VkOiBib29sZWFuXHJcbiAgdW5wYWdlZDogYm9vbGVhblxyXG4gIHNvcnQ6IFNvcnRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlIHtcclxuICBlbXB0eTogYm9vbGVhblxyXG4gIGZpcnN0OiBib29sZWFuXHJcbiAgbGFzdDogYm9vbGVhblxyXG4gIG51bWJlcjogbnVtYmVyXHJcbiAgbnVtYmVyT2ZFbGVtZW50czogbnVtYmVyXHJcbiAgcGFnZWFibGU6IFBhZ2VhYmxlXHJcbiAgc2l6ZTogbnVtYmVyXHJcbiAgc29ydDogU29ydFxyXG4gIHRvdGFsRWxlbWVudHM6IG51bWJlclxyXG4gIHRvdGFsUGFnZXM6IG51bWJlclxyXG4gIGNvbnRlbnQ6IGFueVtdIHwgW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hQYXlsb2FkIHtcclxuICBrZXl3b3JkVHlwZT86IFZhbHVlVHlwZVxyXG4gIGtleXdvcmQ/OiBWYWx1ZVR5cGVcclxuICBzaXplPzogbnVtYmVyXHJcbiAgcGFnZT86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybDogc3RyaW5nLCBwYXJhbToge30pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XHJcbiAgICBwYXJhbXM6IHBhcmFtLFxyXG4gICAgaGVhZGVycyxcclxuICB9KVxyXG5cclxuICByZXR1cm4gcmVzLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vbiA9IHtcclxuICBoZWFkZXJzLFxyXG4gIGZldGNoZXIsXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21tb24nXHJcbmV4cG9ydCAqIGZyb20gJy4vTWVudSdcclxuZXhwb3J0ICogZnJvbSAnLi9CYW5uZXInXHJcbmV4cG9ydCAqIGZyb20gJy4vQm9hcmQnXHJcbmV4cG9ydCAqIGZyb20gJy4vQ29udGVudCdcclxuZXhwb3J0ICogZnJvbSAnLi9GaWxlJ1xyXG5leHBvcnQgKiBmcm9tICcuL0xvZ2luJ1xyXG5leHBvcnQgKiBmcm9tICcuL1N0YXRpc3RpY3MnXHJcbmV4cG9ydCAqIGZyb20gJy4vUHJpdmFjeSdcclxuZXhwb3J0ICogZnJvbSAnLi9Qb2xpY3knXHJcbmV4cG9ydCAqIGZyb20gJy4vVXNlcidcclxuZXhwb3J0ICogZnJvbSAnLi9SZXNlcnZlJ1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRWRpdG9yIiwicHJvcHMiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwicmVhZG9ubHkiLCJlZGl0b3JSZWYiLCJlZGl0b3JMb2FkZWQiLCJzZXRFZGl0b3JMb2FkZWQiLCJDS0VkaXRvciIsIkNsYXNzaWNFZGl0b3IiLCJjdXJyZW50IiwicmVxdWlyZSIsImNrZmluZGVyIiwidXBsb2FkVXJsIiwiaXNSZWFkT25seSIsImVkaXRvciIsImNvbnNvbGUiLCJpbmZvIiwiZXZlbnQiLCJjaGFuYWdlZGF0YSIsImdldERhdGEiLCJDaXJjdWxhclByb2dyZXNzIiwiQ29udGFpbmVyIiwibWFrZVN0eWxlcyIsInVzZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJjbGFzc2VzIiwiREVWIiwiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJQUk9YWV9IT1NUIiwiVFoiLCJNT0RFIiwiQVNTRVRfUEFUSCIsIlNFUlZFUl9BUElfVVJMIiwiQ0xBSU1fTkFNRSIsIkFVVEhfVVNFUl9JRCIsIlJFRlJFU0hfVE9LRU4iLCJBQ0NFU1NfVE9LRU4iLCJTSVRFX0lEIiwiR09PR0xFX0NMSUVOVF9JRCIsIk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfSUQiLCJLQUtBT19KQVZBU0NSSVBUX0tFWSIsIk5FWFRfUFVCTElDX0tBS0FPX0pBVkFTQ1JJUFRfS0VZIiwiTkFWRVJfQ0xJRU5UX0lEIiwiTkVYVF9QVUJMSUNfTkFWRVJfQ0xJRU5UX0lEIiwiTkFWRVJfQ0FMTEJBQ0tfVVJMIiwiTkVYVF9QVUJMSUNfTkFWRVJfQ0FMTEJBQ0tfVVJMIiwiU09DSUFMX0xPR0lOX0VOQUJMRUQiLCJERUZBVUxUX0FQUF9OQU1FIiwiQkFTRV9VUkwiLCJERUZBVUxUX0VSUk9SX01FU1NBR0UiLCJERUZVQUxUX0dSSURfUEFHRV9TSVpFIiwiR1JJRF9ST1dTX1BFUl9QQUdFX09QVElPTiIsIkNPTU1FTlRTX01BWF9MRU5HVEgiLCJDT01NRU5UU19QQUdFX1NJWkUiLCJFRElUT1JfTE9BRF9JTUFHRV9VUkwiLCJMT0FEX0lNQUdFX1VSTCIsIkVESVRPUl9NQVhfTEVOR1RIIiwiREVGQVVMVF9BQ0NFUFRfRklMRV9FWFQiLCJERUZBVUxUX0FDQ0VQVF9GSUxFX0VYVF9URVhUIiwiQ1VTVE9NX0hFQURFUl9TSVRFX0lEX0tFWSIsIkFDQ0VTU19MT0dfVElNRU9VVCIsIkFDQ0VTU19MT0dfSUQiLCJQVUJMSUNfUEFHRVMiLCJjb250ZW50U2VydmljZSIsIkNvbnRlbnQiLCJjb250ZW50IiwiY29udGVudFZhbHVlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiY29udGVudE5vIiwiTnVtYmVyIiwiaWQiLCJyZXN1bHQiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJjb2RlIiwibm90Rm91bmQiLCJheGlvcyIsIkJBTk5FUl9VUkwiLCJiYW5uZXJTZXJ2aWNlIiwiZ2V0QmFubmVycyIsImJhbm5lclR5cGVDb2RlcyIsImJhbm5lckNvdW50IiwidXNlU1dSIiwiY29tbW9uIiwiU0tJTlRfVFlQRV9DT0RFX05PUk1BTCIsIlNLSU5UX1RZUEVfQ09ERV9GQVEiLCJTS0lOVF9UWVBFX0NPREVfUU5BIiwiQk9BUkRfVVJMIiwiUE9TVFNfVVJMIiwiQ09NTUVOVF9VUkwiLCJib2FyZFNlcnZpY2UiLCJnZXRCb2FyZEJ5SWQiLCJib2FyZE5vIiwiZ2V0TWFpblBvc3RzIiwiYm9hcmROb3MiLCJjb3VudCIsInNlYXJjaCIsImtleXdvcmRUeXBlIiwia2V5d29yZCIsInNpemUiLCJwYWdlIiwidXJsIiwiZmV0Y2hlciIsInJldmFsaWRhdGVPbkZvY3VzIiwiZXJyb3JSZXRyeUNvdW50IiwiZ2V0UG9zdEJ5SWQiLCJwb3N0c05vIiwic2F2ZVBvc3QiLCJjYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJwb3N0IiwiaGVhZGVycyIsInVwZGF0ZVBvc3QiLCJwdXQiLCJyZW1vdmVQb3N0IiwiZ2V0Q29tbWVudHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdHMiLCJ0aGVuIiwiY2F0Y2giLCJlIiwiZ2V0QWxsQ29tbWVudHMiLCJzYXZlQ29tbWVudCIsImNvbW1lbnQiLCJ1cGRhdGVDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImNvbW1lbnRObyIsImRlbGV0ZSIsIkNPTlRFTlRfVVJMIiwiVVBMT0FEX0FQSSIsIkRPV05MT0FEX0FQSSIsImZpbGVIZWFkZXIiLCJmaWxlU2VydmljZSIsImRvd25sb2FkVXJsIiwidXBsb2FkIiwiZmlsZUxpc3QiLCJhdHRhY2htZW50Q29kZSIsImxpc3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibWFwIiwiaXRlbSIsImFwcGVuZCIsImZpbGUiLCJCbG9iIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJzYXZlIiwiZ2V0QXR0YWNobWVudExpc3QiLCJkZWxldGVBbGwiLCJKV1RfRVhQSVJFRF9USU1FIiwiTE9HSU5fU0VSVklDRV9VUkwiLCJMT0dJTl9VUkwiLCJDTElFTlRfUkVGUkVTSF9VUkwiLCJvblN1Y2Nlc3NMb2dpbiIsImRlZmF1bHRzIiwic2V0VGltZW91dCIsImxvZ2luU2VyaXZjZSIsInNpbGVudFJlZnJlc2giLCJsb2dpbiIsInJlamVjdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJ3YXJuIiwicmVzIiwic2l0ZUlkIiwiTUVOVV9BUEkiLCJDT0RFX0FQSSIsIm1lbnVTZXJ2aWNlIiwiZ2V0TWVudXMiLCJyZXZhbGlkYXRlT25SZWNvbm5lY3QiLCJQT0xJQ1lfQVBJIiwicG9saWN5U2VydmljZSIsImdldExhdGVzdCIsIlBSSVZBQ1lfVVJMIiwicHJpdmFjeVNlcnZpY2UiLCJhbGx1c2UiLCJMSVNUX0FQSV9VUkwiLCJjYXRlZ29yeUlkIiwiSVRFTV9BUElfVVJMIiwiUkVRVUVTVF9BUElfVVJMIiwiQ09ERV9BUElfVVJMIiwiTE9DQVRJT05fQVBJX1VSTCIsIlJFU0VSVkVfQVBJX1VSTCIsInJlc2VydmVTZXJ2aWNlIiwicmVxdWVzdEFwaVVybCIsImxvY2F0aW9uSWQiLCJpc1VzZSIsImlzUG9wdXAiLCJnZXRDb2RlIiwiY29kZUlkIiwiZ2V0TG9jYXRpb24iLCJnZXRJdGVtIiwicmVzZXJ2ZUl0ZW1JZCIsImdldENvdW50SW52ZW50b3J5Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNyZWF0ZUF1ZGl0IiwiY3JlYXRlIiwiZ2V0TWFpbkl0ZW1zIiwic2VhcmNoVXNlclJlc2VydmUiLCJ1c2VySWQiLCJnZXRSZXNlcnZlIiwicmVzZXJ2ZUlkIiwiY2FuY2VsIiwicmVhc29uIiwicmVhc29uQ2FuY2VsQ29udGVudCIsIlNUQVRJU1RJQ1NfQVBJIiwic3RhdGlzdGljc1NlcnZpY2UiLCJ1dWlkIiwiSGVhZGVycyIsIlVTRVJfVVJMIiwidXNlclNlcnZpY2UiLCJzb2NpYWwiLCJwcm92aWRlciIsInRva2VuIiwiZXhpc3RzRW1haWwiLCJlbWFpbCIsImpvaW4iLCJ1c2VyIiwiZmluZFBhc3N3b3JkIiwidXNlckZpbmRQYXNzd29yZCIsImdldEZpbmRQYXNzd29yZCIsImNoYW5nZVBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmQiLCJ1c2VyVXBkYXRlUGFzc3dvcmQiLCJtYXRjaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJ1cGRhdGVJbmZvIiwidXNlclVwZGF0ZSIsImxlYXZlIiwidXNlckxlYXZlIiwicGFyYW0iLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9