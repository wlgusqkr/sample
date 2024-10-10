"use strict";
(() => {
var exports = {};
exports.id = "pages/api/login/[...path]";
exports.ids = ["pages/api/login/[...path]"];
exports.modules = {

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

/***/ "./src/pages/api/login/[...path].ts":
/*!******************************************!*\
  !*** ./src/pages/api/login/[...path].ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.ts");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/env */ "./src/constants/env.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies */ "cookies");
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const pathname = url__WEBPACK_IMPORTED_MODULE_4___default().pathToFileURL(req.url).pathname;
  let isLogin = pathname === '/api/login/user-service/login';
  req.url = req.url.replace(/^\/api\/login/, '');

  if (pathname.indexOf('undefined') > -1) {
    res.status(500).json({
      message: _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ERROR_MESSAGE
    });
    res.end();
    return;
  }

  let headers = {
    'Content-Type': 'application/json'
  };
  headers[_constants__WEBPACK_IMPORTED_MODULE_0__.CUSTOM_HEADER_SITE_ID_KEY] = _constants_env__WEBPACK_IMPORTED_MODULE_1__.SITE_ID; //silent refresh

  if (pathname.indexOf('/refresh') > -1) {
    isLogin = true;
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_3___default())(req, res);
    headers[_constants_env__WEBPACK_IMPORTED_MODULE_1__.CLAIM_NAME] = cookies.get(_constants_env__WEBPACK_IMPORTED_MODULE_1__.REFRESH_TOKEN);

    if (!headers[_constants_env__WEBPACK_IMPORTED_MODULE_1__.CLAIM_NAME] || headers[_constants_env__WEBPACK_IMPORTED_MODULE_1__.CLAIM_NAME] === '') {
      console.warn(`can't refresh`);
      res.status(401).json({
        message: 'Invalid Credentials 🥺'
      });
      return;
    }
  }

  try {
    const result = await fetch(`${_constants_env__WEBPACK_IMPORTED_MODULE_1__.SERVER_API_URL}${req.url}`, {
      method: req.method,
      headers,
      body: req.body
    });

    if (result) {
      const refreshToken = result.headers.get(_constants_env__WEBPACK_IMPORTED_MODULE_1__.REFRESH_TOKEN);
      const accessToken = result.headers.get(_constants_env__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN);
      const userId = result.headers.get(_constants_env__WEBPACK_IMPORTED_MODULE_1__.AUTH_USER_ID);
      const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_3___default())(req, res);
      cookies.set(_constants_env__WEBPACK_IMPORTED_MODULE_1__.REFRESH_TOKEN, refreshToken, {
        httpOnly: true,
        sameSite: 'lax' //CSRF protection

      });

      if (accessToken) {
        let payload = {};
        payload[_constants_env__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN] = accessToken;
        payload[_constants_env__WEBPACK_IMPORTED_MODULE_1__.AUTH_USER_ID] = userId;
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common)[_constants_env__WEBPACK_IMPORTED_MODULE_1__.CLAIM_NAME] = accessToken;
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common)[_constants_env__WEBPACK_IMPORTED_MODULE_1__.AUTH_USER_ID] = userId;
        res.status(200).json(payload);
      } else {
        res.status(result.status).json({
          message: 'Invalid Credentials 🥺'
        });
      }
    } else {
      res.status(401).json({
        message: 'Invalid Credentials 🥺'
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/login/[...path].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDVCxNQUFsQixFQUEwQkMsSUFBMUIsQ0FBK0I7QUFBRUMsVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FBL0I7QUFDRDtBQUNGLEtBdkJELE1BdUJPO0FBQ0xSLE1BQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0Q7QUFDRixHQWpDRCxDQWlDRSxPQUFPb0IsS0FBUCxFQUFjO0FBQ2RmLElBQUFBLE9BQU8sQ0FBQ2UsS0FBUixDQUFjQSxLQUFkO0FBQ0E1QixJQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQnFCLEtBQXJCO0FBQ0Q7QUFDRixDQW5FRDs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21zYS10ZW1wbGF0ZS1wb3J0YWwvLi9zcmMvY29uc3RhbnRzL2Vudi50cyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsLy4vc3JjL3BhZ2VzL2FwaS9sb2dpbi9bLi4ucGF0aF0udHMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLXBvcnRhbC9leHRlcm5hbCBcImNvb2tpZXNcIiIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtcG9ydGFsL2V4dGVybmFsIFwidXJsXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERFViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcclxuXHJcbmV4cG9ydCBjb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVFxyXG5leHBvcnQgY29uc3QgUFJPWFlfSE9TVCA9IHByb2Nlc3MuZW52LlBST1hZX0hPU1QgfHwgYGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWBcclxuXHJcbmV4cG9ydCBjb25zdCBUWiA9IHByb2Nlc3MuZW52LlRaIHx8ICdBc2lhL1Nlb3VsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREUgPSBwcm9jZXNzLmVudi5NT0RFXHJcbmV4cG9ydCBjb25zdCBBU1NFVF9QQVRIID0gYC9zdHlsZXMvJHtNT0RFfWBcclxuXHJcbmV4cG9ydCBjb25zdCBTRVJWRVJfQVBJX1VSTCA9IHByb2Nlc3MuZW52LlNFUlZFUl9BUElfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgQ0xBSU1fTkFNRSA9IHByb2Nlc3MuZW52LkNMQUlNX05BTUUgfHwgJ0F1dGhvcml6YXRpb24nXHJcbmV4cG9ydCBjb25zdCBBVVRIX1VTRVJfSUQgPSBwcm9jZXNzLmVudi5BVVRIX1VTRVJfSUQgfHwgJ3Rva2VuLWlkJ1xyXG5leHBvcnQgY29uc3QgUkVGUkVTSF9UT0tFTiA9IHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU4gfHwgJ3JlZnJlc2gtdG9rZW4nXHJcbmV4cG9ydCBjb25zdCBBQ0NFU1NfVE9LRU4gPSBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU4gfHwgJ2FjY2Vzcy10b2tlbidcclxuXHJcbmV4cG9ydCBjb25zdCBTSVRFX0lEID0gcHJvY2Vzcy5lbnYuU0lURV9JRFxyXG5cclxuZXhwb3J0IGNvbnN0IEdPT0dMRV9DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQ0xJRU5UX0lEXHJcbmV4cG9ydCBjb25zdCBLQUtBT19KQVZBU0NSSVBUX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0tBS0FPX0pBVkFTQ1JJUFRfS0VZXHJcbmV4cG9ydCBjb25zdCBOQVZFUl9DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OQVZFUl9DTElFTlRfSURcclxuZXhwb3J0IGNvbnN0IE5BVkVSX0NBTExCQUNLX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05BVkVSX0NBTExCQUNLX1VSTFxyXG5cclxuZXhwb3J0IGNvbnN0IFNPQ0lBTF9MT0dJTl9FTkFCTEVEID0gcHJvY2Vzcy5lbnYuU09DSUFMX0xPR0lOX0VOQUJMRURcclxuIiwiaW1wb3J0IHsgUFJPWFlfSE9TVCB9IGZyb20gJy4vZW52J1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQVBQX05BTUUgPSAn7KCE7J6Q7KCV67aAIO2RnOykgO2UhOugiOyehOybjO2BrCDtj6ztg4gnXHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBgJHtQUk9YWV9IT1NUfS9zZXJ2ZXJgXHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9FUlJPUl9NRVNTQUdFID0gJ1NvcnJ5Li4gU29tZXRoaW5nIFdyb25nLi4u8J+YsSdcclxuXHJcbmV4cG9ydCBjb25zdCBERUZVQUxUX0dSSURfUEFHRV9TSVpFID0gMTBcclxuXHJcbmV4cG9ydCBjb25zdCBHUklEX1JPV1NfUEVSX1BBR0VfT1BUSU9OID0gWzEwLCAyMCwgNTAsIDEwMF1cclxuXHJcbmV4cG9ydCBjb25zdCBDT01NRU5UU19NQVhfTEVOR1RIID0gMzAwXHJcblxyXG5leHBvcnQgY29uc3QgQ09NTUVOVFNfUEFHRV9TSVpFID0gNVxyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUl9MT0FEX0lNQUdFX1VSTCA9ICcvcG9ydGFsLXNlcnZpY2UvYXBpL3YxL2ltYWdlcy9lZGl0b3IvJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9JTUFHRV9VUkwgPSAnL3BvcnRhbC1zZXJ2aWNlL2FwaS92MS9pbWFnZXMvJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUl9NQVhfTEVOR1RIID0gMjAwMFxyXG5cclxuLy8gLmh0bSwgLmh0bWwsIC50eHQsIC5wbmcvLmpwZy9ldGMsIC5wZGYsIC54bHN4LiAueGxzXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0FDQ0VQVF9GSUxFX0VYVCA9XHJcbiAgJ3RleHQvaHRtbCwgdGV4dC9wbGFpbiwgaW1hZ2UvKiwgLnBkZiwgYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQsIGFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCdcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0FDQ0VQVF9GSUxFX0VYVF9URVhUID1cclxuICAnLmh0bSwgLmh0bWwsIC50eHQsIC5wbmcvLmpwZy9ldGMsIC5wZGYsIC54bHN4LiAueGxzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENVU1RPTV9IRUFERVJfU0lURV9JRF9LRVkgPSAnWC1TaXRlLUlkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDQ0VTU19MT0dfVElNRU9VVCA9IDMwICogNjAgKiAxMDAwXHJcblxyXG5leHBvcnQgY29uc3QgQUNDRVNTX0xPR19JRCA9ICdhY2Nlc3NMb2dJZCdcclxuXHJcbmV4cG9ydCBjb25zdCBQVUJMSUNfUEFHRVMgPSBbXHJcbiAgJy80MDQnLFxyXG4gICcvJyxcclxuICAnJyxcclxuICAnL3JlbG9hZCcsXHJcbiAgJy9fZXJyb3InLFxyXG4gICcvdXNlci9sZWF2ZS9ieWUnLFxyXG4gICcjJyxcclxuICAnL2F1dGgvbG9naW4vbmF2ZXInLFxyXG5dXHJcbiIsImltcG9ydCB7IENVU1RPTV9IRUFERVJfU0lURV9JRF9LRVksIERFRkFVTFRfRVJST1JfTUVTU0FHRSB9IGZyb20gJ0Bjb25zdGFudHMnXHJcbmltcG9ydCB7XHJcbiAgQUNDRVNTX1RPS0VOLFxyXG4gIEFVVEhfVVNFUl9JRCxcclxuICBDTEFJTV9OQU1FLFxyXG4gIFJFRlJFU0hfVE9LRU4sXHJcbiAgU0VSVkVSX0FQSV9VUkwsXHJcbiAgU0lURV9JRCxcclxufSBmcm9tICdAY29uc3RhbnRzL2VudidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdjb29raWVzJ1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHVybCBmcm9tICd1cmwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVybC5wYXRoVG9GaWxlVVJMKHJlcS51cmwpLnBhdGhuYW1lXHJcbiAgbGV0IGlzTG9naW4gPSBwYXRobmFtZSA9PT0gJy9hcGkvbG9naW4vdXNlci1zZXJ2aWNlL2xvZ2luJ1xyXG5cclxuICByZXEudXJsID0gcmVxLnVybC5yZXBsYWNlKC9eXFwvYXBpXFwvbG9naW4vLCAnJylcclxuXHJcbiAgaWYgKHBhdGhuYW1lLmluZGV4T2YoJ3VuZGVmaW5lZCcpID4gLTEpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFIH0pXHJcbiAgICByZXMuZW5kKClcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gIH1cclxuICBoZWFkZXJzW0NVU1RPTV9IRUFERVJfU0lURV9JRF9LRVldID0gU0lURV9JRFxyXG5cclxuICAvL3NpbGVudCByZWZyZXNoXHJcbiAgaWYgKHBhdGhuYW1lLmluZGV4T2YoJy9yZWZyZXNoJykgPiAtMSkge1xyXG4gICAgaXNMb2dpbiA9IHRydWVcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEsIHJlcylcclxuICAgIGhlYWRlcnNbQ0xBSU1fTkFNRV0gPSBjb29raWVzLmdldChSRUZSRVNIX1RPS0VOKVxyXG5cclxuICAgIGlmICghaGVhZGVyc1tDTEFJTV9OQU1FXSB8fCBoZWFkZXJzW0NMQUlNX05BTUVdID09PSAnJykge1xyXG4gICAgICBjb25zb2xlLndhcm4oYGNhbid0IHJlZnJlc2hgKVxyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIENyZWRlbnRpYWxzIPCfpbonIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke1NFUlZFUl9BUElfVVJMfSR7cmVxLnVybH1gLCB7XHJcbiAgICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcclxuICAgICAgaGVhZGVycyxcclxuICAgICAgYm9keTogcmVxLmJvZHksXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFJFRlJFU0hfVE9LRU4pXHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzdWx0LmhlYWRlcnMuZ2V0KEFDQ0VTU19UT0tFTilcclxuICAgICAgY29uc3QgdXNlcklkID0gcmVzdWx0LmhlYWRlcnMuZ2V0KEFVVEhfVVNFUl9JRClcclxuXHJcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEsIHJlcylcclxuXHJcbiAgICAgIGNvb2tpZXMuc2V0KFJFRlJFU0hfVE9LRU4sIHJlZnJlc2hUb2tlbiwge1xyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIHNhbWVTaXRlOiAnbGF4JywgLy9DU1JGIHByb3RlY3Rpb25cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgICAgIGxldCBwYXlsb2FkID0ge31cclxuICAgICAgICBwYXlsb2FkW0FDQ0VTU19UT0tFTl0gPSBhY2Nlc3NUb2tlblxyXG4gICAgICAgIHBheWxvYWRbQVVUSF9VU0VSX0lEXSA9IHVzZXJJZFxyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW0NMQUlNX05BTUVdID0gYWNjZXNzVG9rZW5cclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltBVVRIX1VTRVJfSURdID0gdXNlcklkXHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBheWxvYWQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhyZXN1bHQuc3RhdHVzKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgQ3JlZGVudGlhbHMg8J+luicgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBDcmVkZW50aWFscyDwn6W6JyB9KVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJuYW1lcyI6WyJERVYiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsIlBST1hZX0hPU1QiLCJUWiIsIk1PREUiLCJBU1NFVF9QQVRIIiwiU0VSVkVSX0FQSV9VUkwiLCJDTEFJTV9OQU1FIiwiQVVUSF9VU0VSX0lEIiwiUkVGUkVTSF9UT0tFTiIsIkFDQ0VTU19UT0tFTiIsIlNJVEVfSUQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRCIsIktBS0FPX0pBVkFTQ1JJUFRfS0VZIiwiTkVYVF9QVUJMSUNfS0FLQU9fSkFWQVNDUklQVF9LRVkiLCJOQVZFUl9DTElFTlRfSUQiLCJORVhUX1BVQkxJQ19OQVZFUl9DTElFTlRfSUQiLCJOQVZFUl9DQUxMQkFDS19VUkwiLCJORVhUX1BVQkxJQ19OQVZFUl9DQUxMQkFDS19VUkwiLCJTT0NJQUxfTE9HSU5fRU5BQkxFRCIsIkRFRkFVTFRfQVBQX05BTUUiLCJCQVNFX1VSTCIsIkRFRkFVTFRfRVJST1JfTUVTU0FHRSIsIkRFRlVBTFRfR1JJRF9QQUdFX1NJWkUiLCJHUklEX1JPV1NfUEVSX1BBR0VfT1BUSU9OIiwiQ09NTUVOVFNfTUFYX0xFTkdUSCIsIkNPTU1FTlRTX1BBR0VfU0laRSIsIkVESVRPUl9MT0FEX0lNQUdFX1VSTCIsIkxPQURfSU1BR0VfVVJMIiwiRURJVE9SX01BWF9MRU5HVEgiLCJERUZBVUxUX0FDQ0VQVF9GSUxFX0VYVCIsIkRFRkFVTFRfQUNDRVBUX0ZJTEVfRVhUX1RFWFQiLCJDVVNUT01fSEVBREVSX1NJVEVfSURfS0VZIiwiQUNDRVNTX0xPR19USU1FT1VUIiwiQUNDRVNTX0xPR19JRCIsIlBVQkxJQ19QQUdFUyIsImF4aW9zIiwiQ29va2llcyIsInVybCIsInJlcSIsInJlcyIsInBhdGhuYW1lIiwicGF0aFRvRmlsZVVSTCIsImlzTG9naW4iLCJyZXBsYWNlIiwiaW5kZXhPZiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZW5kIiwiaGVhZGVycyIsImNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwid2FybiIsInJlc3VsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlZnJlc2hUb2tlbiIsImFjY2Vzc1Rva2VuIiwidXNlcklkIiwic2V0IiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInBheWxvYWQiLCJkZWZhdWx0cyIsImNvbW1vbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==