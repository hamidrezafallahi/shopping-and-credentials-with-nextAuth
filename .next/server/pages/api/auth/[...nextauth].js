"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsVUFBVSxHQUFHLElBQUlELHdEQUFlLENBQUM7SUFDckNHLElBQUksRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN0Q0MsS0FBSyxFQUFFO1FBQUVILElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQ3ZDRSxRQUFRLEVBQUU7UUFBRUosSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDMUNHLE9BQU8sRUFBRTtRQUFFTCxJQUFJLEVBQUVNLE9BQU87UUFBRUosUUFBUSxFQUFFLElBQUk7UUFBRUssT0FBTyxFQUFFLEtBQUs7S0FBRTtDQUMzRCxDQUFDO0FBRUYsTUFBTUMsSUFBSSxHQUFHWiw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxNQUFNLEVBQUVDLFVBQVUsQ0FBQztBQUV2RSxpRUFBZVcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BwaW5nLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBpc0FkbWluOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxufSlcblxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgVXNlclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNBZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user */ \"(api)/./models/user.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user?._id) token._id = user._id;\n            if (user?.isAdmin) token.isAdmin = user.isAdmin;\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token?._id) session.user._id = token._id;\n            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;\n            return session;\n        }\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n                const user = await _models_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (user) {\n                    return {\n                        _id: user._id,\n                        name: user.name,\n                        email: user.email,\n                        // image: 'f',\n                        isAdmin: user.isAdmin\n                    };\n                }\n                throw new Error(\"invalid email or password\");\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUU0QjtBQUVwQztBQUVLO0FBQ0s7QUFFdkMsaUVBQWVBLHFEQUFRLENBQUM7SUFDdEJLLE9BQU8sRUFBRTtRQUNQQyxRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsRUFBRTtZQUN6QixJQUFJQSxJQUFJLEVBQUVDLEdBQUcsRUFBRUYsS0FBSyxDQUFDRSxHQUFHLEdBQUdELElBQUksQ0FBQ0MsR0FBRztZQUVuQyxJQUFJRCxJQUFJLEVBQUVFLE9BQU8sRUFBRUgsS0FBSyxDQUFDRyxPQUFPLEdBQUdGLElBQUksQ0FBQ0UsT0FBTztZQUUvQyxPQUFPSCxLQUFLO1NBQ2I7UUFFRCxNQUFNSixPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFSSxLQUFLLEdBQUUsRUFBRTtZQUNoQyxJQUFJQSxLQUFLLEVBQUVFLEdBQUcsRUFBRU4sT0FBTyxDQUFDSyxJQUFJLENBQUNDLEdBQUcsR0FBR0YsS0FBSyxDQUFDRSxHQUFHO1lBRTVDLElBQUlGLEtBQUssRUFBRUcsT0FBTyxFQUFFUCxPQUFPLENBQUNLLElBQUksQ0FBQ0UsT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU87WUFFeEQsT0FBT1AsT0FBTztTQUNmO0tBQ0Y7SUFFRFEsU0FBUyxFQUFFO1FBQ1RaLHNFQUFtQixDQUFDO1lBQ2xCLE1BQU1hLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixNQUFNWix5REFBVSxFQUFFO2dCQUVsQixNQUFNTyxJQUFJLEdBQUcsTUFBTU4sNERBQVksQ0FBQztvQkFDOUJjLEtBQUssRUFBRUgsV0FBVyxDQUFDRyxLQUFLO2lCQUN6QixDQUFDO2dCQUVGLElBQUlSLElBQUksRUFBRTtvQkFDUixPQUFPO3dCQUNMQyxHQUFHLEVBQUVELElBQUksQ0FBQ0MsR0FBRzt3QkFDYlEsSUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUk7d0JBQ2ZELEtBQUssRUFBRVIsSUFBSSxDQUFDUSxLQUFLO3dCQUNqQixjQUFjO3dCQUNkTixPQUFPLEVBQUVGLElBQUksQ0FBQ0UsT0FBTztxQkFDdEI7aUJBQ0Y7Z0JBRUQsTUFBTSxJQUFJUSxLQUFLLENBQUMsMkJBQTJCLENBQUM7YUFDN0M7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmcvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aC9uZXh0J1xuXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGInXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcj8uX2lkKSB0b2tlbi5faWQgPSB1c2VyLl9pZFxuXG4gICAgICBpZiAodXNlcj8uaXNBZG1pbikgdG9rZW4uaXNBZG1pbiA9IHVzZXIuaXNBZG1pblxuXG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbj8uX2lkKSBzZXNzaW9uLnVzZXIuX2lkID0gdG9rZW4uX2lkXG5cbiAgICAgIGlmICh0b2tlbj8uaXNBZG1pbikgc2Vzc2lvbi51c2VyLmlzQWRtaW4gPSB0b2tlbi5pc0FkbWluXG5cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgfSxcblxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBhd2FpdCBkYi5jb25uZWN0KClcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcbiAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgX2lkOiB1c2VyLl9pZCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgLy8gaW1hZ2U6ICdmJyxcbiAgICAgICAgICAgIGlzQWRtaW46IHVzZXIuaXNBZG1pbixcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiZGIiLCJVc2VyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiX2lkIiwiaXNBZG1pbiIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiY29ubmVjdCIsImZpbmRPbmUiLCJlbWFpbCIsIm5hbWUiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://127.0.0.1:27017/shopping\");\n    console.log(\"Connected.\");\n}\nfunction convertToObj(doc) {\n    doc._id = doc._id.toString();\n    return doc;\n}\nconst db = {\n    connect,\n    convertToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsZUFBZUMsT0FBTyxHQUFHO0lBQ3ZCLE1BQU1ELHVEQUFnQixDQUFDLG9DQUFvQyxDQUFDO0lBRTVERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Q0FDMUI7QUFFRCxTQUFTQyxZQUFZLENBQUNDLEdBQUcsRUFBRTtJQUN6QkEsR0FBRyxDQUFDQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEVBQUU7SUFFNUIsT0FBT0YsR0FBRztDQUNYO0FBRUQsTUFBTUcsRUFBRSxHQUFHO0lBQUVQLE9BQU87SUFBRUcsWUFBWTtDQUFFO0FBQ3BDLGlFQUFlSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmcvLi91dGlscy9kYi5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy9zaG9wcGluZycpXG5cbiAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZC4nKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9PYmooZG9jKSB7XG4gIGRvYy5faWQgPSBkb2MuX2lkLnRvU3RyaW5nKClcblxuICByZXR1cm4gZG9jXG59XG5cbmNvbnN0IGRiID0geyBjb25uZWN0LCBjb252ZXJ0VG9PYmogfVxuZXhwb3J0IGRlZmF1bHQgZGJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiY29udmVydFRvT2JqIiwiZG9jIiwiX2lkIiwidG9TdHJpbmciLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();