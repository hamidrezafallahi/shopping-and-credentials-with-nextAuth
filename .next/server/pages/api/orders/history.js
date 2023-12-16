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
exports.id = "pages/api/orders/history";
exports.ids = ["pages/api/orders/history"];
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

/***/ "(api)/./pages/api/orders/history.js":
/*!*************************************!*\
  !*** ./pages/api/orders/history.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/order */ \"(api)/./models/order.js\");\n// import { getSession } from 'next-auth/react'\n// import db from '../../../utils/db'\n// import Order from '../../../models/order'\n// async function handler(req, res) {\n//   const session = await getSession({ req })\n//   const { user } = session\n//   await db.connect()\n//   const orders = await Order.find({ user: user._id })\n//   res.send(orders)\n// }\n// export default handler\n\n\n\nasync function Handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    const { user  } = session;\n    await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\n    const orders = await _models_order__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n        user: user._id\n    });\n    res.send(orders);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2hpc3RvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFFL0MscUNBQXFDO0FBQ3JDLDRDQUE0QztBQUU1QyxxQ0FBcUM7QUFDckMsOENBQThDO0FBRTlDLDZCQUE2QjtBQUU3Qix1QkFBdUI7QUFFdkIsd0RBQXdEO0FBRXhELHFCQUFxQjtBQUNyQixJQUFJO0FBRUoseUJBQXlCO0FBQ29CO0FBQ1g7QUFDTztBQUMxQixlQUFlRyxPQUFPLENBQUNDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDO0lBQzlDLE1BQU1DLE9BQU8sR0FBRyxNQUFPTiwyREFBVSxDQUFDO1FBQUNJLEdBQUc7S0FBQyxDQUFDO0lBQ3hDLE1BQU0sRUFBQ0csSUFBSSxHQUFDLEdBQUNELE9BQU87SUFDcEIsTUFBTUwseURBQVUsRUFBRTtJQUNsQixNQUFNUSxNQUFNLEdBQUcsTUFBTVAsMERBQVUsQ0FBQztRQUFDSyxJQUFJLEVBQUNBLElBQUksQ0FBQ0ksR0FBRztLQUFDLENBQUM7SUFDaEROLEdBQUcsQ0FBQ08sSUFBSSxDQUFDSCxNQUFNLENBQUM7Q0FDZiIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BwaW5nLy4vcGFnZXMvYXBpL29yZGVycy9oaXN0b3J5LmpzPzRmODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuLy8gaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiJ1xuLy8gaW1wb3J0IE9yZGVyIGZyb20gJy4uLy4uLy4uL21vZGVscy9vcmRlcidcblxuLy8gYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuLy8gICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KVxuXG4vLyAgIGNvbnN0IHsgdXNlciB9ID0gc2Vzc2lvblxuXG4vLyAgIGF3YWl0IGRiLmNvbm5lY3QoKVxuXG4vLyAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IE9yZGVyLmZpbmQoeyB1c2VyOiB1c2VyLl9pZCB9KVxuXG4vLyAgIHJlcy5zZW5kKG9yZGVycylcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi91dGlscy9kYidcbmltcG9ydCBPcmRlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvb3JkZXInXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBIYW5kbGVyKHJlcSxyZXMpe1xuY29uc3Qgc2Vzc2lvbiAgPWF3YWl0ICBnZXRTZXNzaW9uKHtyZXF9KVxuY29uc3Qge3VzZXJ9PXNlc3Npb25cbmF3YWl0IGRiLmNvbm5lY3QoKVxuY29uc3Qgb3JkZXJzID0gYXdhaXQgT3JkZXIuZmluZCh7dXNlcjp1c2VyLl9pZH0pXG5yZXMuc2VuZChvcmRlcnMpXG59Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJkYiIsIk9yZGVyIiwiSGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJ1c2VyIiwiY29ubmVjdCIsIm9yZGVycyIsImZpbmQiLCJfaWQiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/history.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/history.js"));
module.exports = __webpack_exports__;

})();