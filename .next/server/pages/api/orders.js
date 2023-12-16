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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./models/order.js":
/*!*************************!*\
  !*** ./models/order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n        ref: \"User\",\n        required: true\n    },\n    orderItems: [\n        {\n            title: {\n                type: String,\n                required: true\n            },\n            price: {\n                type: Number,\n                required: true\n            },\n            count: {\n                type: Number,\n                required: true\n            }\n        }, \n    ],\n    shippingData: {\n        name: {\n            type: String,\n            required: true\n        },\n        address: {\n            type: String,\n            required: true\n        },\n        postalCode: {\n            type: String,\n            required: true\n        }\n    },\n    paymentMethod: {\n        type: String,\n        required: true\n    },\n    totalPrice: {\n        type: Number,\n        required: true\n    }\n});\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", orderSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCx3REFBZSxDQUFDO0lBQ3RDRyxJQUFJLEVBQUU7UUFBRUMsSUFBSSxFQUFFSix1RUFBOEI7UUFBRU8sR0FBRyxFQUFFLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUUzRUMsVUFBVSxFQUFFO1FBQ1Y7WUFDRUMsS0FBSyxFQUFFO2dCQUFFTixJQUFJLEVBQUVPLE1BQU07Z0JBQUVILFFBQVEsRUFBRSxJQUFJO2FBQUU7WUFDdkNJLEtBQUssRUFBRTtnQkFBRVIsSUFBSSxFQUFFUyxNQUFNO2dCQUFFTCxRQUFRLEVBQUUsSUFBSTthQUFFO1lBQ3ZDTSxLQUFLLEVBQUU7Z0JBQUVWLElBQUksRUFBRVMsTUFBTTtnQkFBQ0wsUUFBUSxFQUFFLElBQUk7YUFBRztTQUN4QztLQUNGO0lBRURPLFlBQVksRUFBRTtRQUNaQyxJQUFJLEVBQUU7WUFBRVosSUFBSSxFQUFFTyxNQUFNO1lBQUVILFFBQVEsRUFBRSxJQUFJO1NBQUU7UUFDdENTLE9BQU8sRUFBRTtZQUFFYixJQUFJLEVBQUVPLE1BQU07WUFBRUgsUUFBUSxFQUFFLElBQUk7U0FBRTtRQUN6Q1UsVUFBVSxFQUFFO1lBQUVkLElBQUksRUFBRU8sTUFBTTtZQUFFSCxRQUFRLEVBQUUsSUFBSTtTQUFFO0tBQzdDO0lBRURXLGFBQWEsRUFBRTtRQUFFZixJQUFJLEVBQUVPLE1BQU07UUFBRUgsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUUvQ1ksVUFBVSxFQUFFO1FBQUVoQixJQUFJLEVBQUVTLE1BQU07UUFBRUwsUUFBUSxFQUFFLElBQUk7S0FBRTtDQUM3QyxDQUFDO0FBRUYsTUFBTWEsS0FBSyxHQUFHckIsOERBQXFCLElBQUlBLHFEQUFjLENBQUMsT0FBTyxFQUFFQyxXQUFXLENBQUM7QUFFM0UsaUVBQWVvQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmcvLi9tb2RlbHMvb3JkZXIuanM/ZWY5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcblxuICBvcmRlckl0ZW1zOiBbXG4gICAge1xuICAgICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgcHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgY291bnQ6IHsgdHlwZTogTnVtYmVyLHJlcXVpcmVkOiB0cnVlICB9LFxuICAgIH0sXG4gIF0sXG5cbiAgc2hpcHBpbmdEYXRhOiB7XG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgYWRkcmVzczogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcG9zdGFsQ29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIH0sXG5cbiAgcGF5bWVudE1ldGhvZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cbiAgdG90YWxQcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG59KVxuXG5jb25zdCBPcmRlciA9IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbCgnT3JkZXInLCBvcmRlclNjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm9yZGVyU2NoZW1hIiwiU2NoZW1hIiwidXNlciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJvcmRlckl0ZW1zIiwidGl0bGUiLCJTdHJpbmciLCJwcmljZSIsIk51bWJlciIsImNvdW50Iiwic2hpcHBpbmdEYXRhIiwibmFtZSIsImFkZHJlc3MiLCJwb3N0YWxDb2RlIiwicGF5bWVudE1ldGhvZCIsInRvdGFsUHJpY2UiLCJPcmRlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/index.js":
/*!***********************************!*\
  !*** ./pages/api/orders/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/order */ \"(api)/./models/order.js\");\n\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session) {\n        return res.send(\"Sing in required\");\n    }\n    const { user  } = session;\n    await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\n    const newOrder = new _models_order__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        ...req.body,\n        user: user._id\n    });\n    const order = await newOrder.save();\n    res.status(201).send(order);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBRVY7QUFDTztBQUV6QyxlQUFlRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLE1BQU1DLE9BQU8sR0FBRyxNQUFNTiwyREFBVSxDQUFDO1FBQUVJLEdBQUc7S0FBRSxDQUFDO0lBQ3pDLElBQUksQ0FBQ0UsT0FBTyxFQUFFO1FBQ1osT0FBT0QsR0FBRyxDQUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUM7S0FDcEM7SUFFRCxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHRixPQUFPO0lBRXhCLE1BQU1MLHlEQUFVLEVBQUU7SUFFbEIsTUFBTVMsUUFBUSxHQUFHLElBQUlSLHFEQUFLLENBQUM7UUFDekIsR0FBR0UsR0FBRyxDQUFDTyxJQUFJO1FBQ1hILElBQUksRUFBRUEsSUFBSSxDQUFDSSxHQUFHO0tBQ2YsQ0FBQztJQUVGLE1BQU1DLEtBQUssR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksRUFBRTtJQUVuQ1QsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNSLElBQUksQ0FBQ00sS0FBSyxDQUFDO0NBQzVCO0FBRUQsaUVBQWVWLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy8uL3BhZ2VzL2FwaS9vcmRlcnMvaW5kZXguanM/YzU5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGInXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL29yZGVyJ1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiByZXMuc2VuZCgnU2luZyBpbiByZXF1aXJlZCcpXG4gIH1cblxuICBjb25zdCB7IHVzZXIgfSA9IHNlc3Npb25cblxuICBhd2FpdCBkYi5jb25uZWN0KClcblxuICBjb25zdCBuZXdPcmRlciA9IG5ldyBPcmRlcih7XG4gICAgLi4ucmVxLmJvZHksXG4gICAgdXNlcjogdXNlci5faWQsXG4gIH0pXG5cbiAgY29uc3Qgb3JkZXIgPSBhd2FpdCBuZXdPcmRlci5zYXZlKClcblxuICByZXMuc3RhdHVzKDIwMSkuc2VuZChvcmRlcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJkYiIsIk9yZGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJzZW5kIiwidXNlciIsImNvbm5lY3QiLCJuZXdPcmRlciIsImJvZHkiLCJfaWQiLCJvcmRlciIsInNhdmUiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/index.js\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/index.js"));
module.exports = __webpack_exports__;

})();