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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/Cart.js":
/*!*************************!*\
  !*** ./context/Cart.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingData: {}\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"ADD_TO_CART\":\n            {\n                const newItem = action.payload;\n                const existingItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existingItem ? state.cart.cartItems.map((item)=>item.title === existingItem.title ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"REMOVE_ITEM\":\n            {\n                const cartItems1 = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems: cartItems1\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems: cartItems1\n                    }\n                };\n            }\n        case \"SAVE_SHIPPING_DATA\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    shippingData: {\n                        ...state.cart.shippingData,\n                        ...action.payload\n                    }\n                }\n            };\n        case \"SAVE_PAYMENT_METHOD\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    paymentMethod: action.payload\n                }\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children  }) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\fallahi\\\\front end practice\\\\next.js learning\\\\project-save-order - Copy v 12\\\\context\\\\Cart.js\",\n        lineNumber: 74,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIsS0FBSyxNQUFFaUIsUUFBUSxNQUFJNUIsaURBQVUsQ0FBQ1UsT0FBTyxFQUFFUCxZQUFZLENBQUM7SUFFM0QsTUFBTTBCLEtBQUssR0FBRztRQUFFbEIsS0FBSztRQUFFaUIsUUFBUTtLQUFFO0lBRWpDLHFCQUFPLDhEQUFDMUIsS0FBSyxDQUFDNEIsUUFBUTtRQUFDRCxLQUFLLEVBQUVBLEtBQUs7a0JBQUdGLFFBQVE7Ozs7O1lBQWtCO0NBQ2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmcvLi9jb250ZXh0L0NhcnQuanM/NDg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY2FydDogQ29va2llcy5nZXQoJ2NhcnQnKVxuICAgID8gSlNPTi5wYXJzZShDb29raWVzLmdldCgnY2FydCcpKVxuICAgIDogeyBjYXJ0SXRlbXM6IFtdLCBzaGlwcGluZ0RhdGE6IHt9IH0sXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1RPX0NBUlQnOiB7XG4gICAgICBjb25zdCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWRcblxuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gbmV3SXRlbS5zbHVnXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGV4aXN0aW5nSXRlbVxuICAgICAgICA/IHN0YXRlLmNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW0udGl0bGUgPT09IGV4aXN0aW5nSXRlbS50aXRsZSA/IG5ld0l0ZW0gOiBpdGVtXG4gICAgICAgICAgKVxuICAgICAgICA6IFsuLi5zdGF0ZS5jYXJ0LmNhcnRJdGVtcywgbmV3SXRlbV1cblxuICAgICAgQ29va2llcy5zZXQoJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSlcblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfVxuICAgIH1cblxuICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzoge1xuICAgICAgY29uc3QgY2FydEl0ZW1zID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnICE9PSBhY3Rpb24ucGF5bG9hZC5zbHVnXG4gICAgICApXG5cbiAgICAgIENvb2tpZXMuc2V0KCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSkpXG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH1cbiAgICB9XG5cbiAgICBjYXNlICdTQVZFX1NISVBQSU5HX0RBVEEnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LFxuICAgICAgICAgIHNoaXBwaW5nRGF0YToge1xuICAgICAgICAgICAgLi4uc3RhdGUuY2FydC5zaGlwcGluZ0RhdGEsXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgY2FzZSAnU0FWRV9QQVlNRU5UX01FVEhPRCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG5cbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9XG5cbiAgcmV0dXJuIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1N0b3JlLlByb3ZpZGVyPlxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiQ29va2llcyIsIlN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY2FydCIsImdldCIsIkpTT04iLCJwYXJzZSIsImNhcnRJdGVtcyIsInNoaXBwaW5nRGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0aW5nSXRlbSIsImZpbmQiLCJpdGVtIiwic2x1ZyIsIm1hcCIsInRpdGxlIiwic2V0Iiwic3RyaW5naWZ5IiwiZmlsdGVyIiwicGF5bWVudE1ldGhvZCIsIlN0b3JlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/Cart.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Cart */ \"./context/Cart.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Cart__WEBPACK_IMPORTED_MODULE_4__]);\n_context_Cart__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Cart__WEBPACK_IMPORTED_MODULE_4__.StoreProvider, {\n                children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                    adminOnly: Component.auth.adminOnly,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fallahi\\\\front end practice\\\\next.js learning\\\\project-save-order - Copy v 12\\\\pages\\\\_app.js\",\n                        lineNumber: 15,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\fallahi\\\\front end practice\\\\next.js learning\\\\project-save-order - Copy v 12\\\\pages\\\\_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\fallahi\\\\front end practice\\\\next.js learning\\\\project-save-order - Copy v 12\\\\pages\\\\_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\fallahi\\\\front end practice\\\\next.js learning\\\\project-save-order - Copy v 12\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\fallahi\\\\front end practice\\\\next.js learning\\\\project-save-order - Copy v 12\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\fallahi\\\\front end practice\\\\next.js learning\\\\project-save-order - Copy v 12\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children , adminOnly  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized\");\n        }\n    });\n    if (status === \"loading\") {\n        return \"Loading\";\n    }\n    if (adminOnly && !session.user.isAdmin) {\n        router.push(\"/unauthorized\");\n    }\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUUrQjtBQUN0QjtBQUVRO0FBRS9DLFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsRUFBRSxFQUFFQyxPQUFPLEdBQUUsR0FBR0QsU0FBUyxFQUFFLEdBQUUsRUFBRTtJQUNsRSxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsYUFBYTtrQkFDMUIsNEVBQUNULDREQUFlO1lBQUNPLE9BQU8sRUFBRUEsT0FBTztzQkFDL0IsNEVBQUNKLHdEQUFhOzBCQUNYRSxTQUFTLENBQUNLLElBQUksaUJBQ2IsOERBQUNDLElBQUk7b0JBQUNDLFNBQVMsRUFBRVAsU0FBUyxDQUFDSyxJQUFJLENBQUNFLFNBQVM7OEJBQ3ZDLDRFQUFDUCxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozt3QkFDdkIsaUJBRVAsOERBQUNELFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUVoQjs7Ozs7Z0JBQ0E7Ozs7O1lBQ2QsQ0FDUDtDQUNGO0FBRUQsU0FBU0ssSUFBSSxDQUFDLEVBQUVFLFFBQVEsR0FBRUQsU0FBUyxHQUFDLEVBQUU7SUFDcEMsTUFBTUUsTUFBTSxHQUFHWixzREFBUyxFQUFFO0lBRTFCLE1BQU0sRUFBRWEsTUFBTSxHQUFDQyxJQUFJLEVBQUNULE9BQU8sR0FBRSxHQUFHTiwyREFBVSxDQUFDO1FBQ3pDZ0IsUUFBUSxFQUFFLElBQUk7UUFDZEMsaUJBQWlCLElBQUc7WUFDbEJKLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM3QjtLQUNGLENBQUM7SUFFRixJQUFJSixNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE9BQU8sU0FBUztLQUNqQjtJQUNELElBQUdILFNBQVMsSUFBSSxDQUFDTCxPQUFPLENBQUNhLElBQUksQ0FBQ0MsT0FBTyxFQUFDO1FBQ3BDUCxNQUFNLENBQUNLLElBQUksQ0FBQyxlQUFlLENBQUM7S0FDN0I7SUFDRCxPQUFPTixRQUFRO0NBQ2hCO0FBRUQsaUVBQWVULEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IFN0b3JlUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0NhcnQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCc+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgICA8U3RvcmVQcm92aWRlcj5cbiAgICAgICAgICB7Q29tcG9uZW50LmF1dGggPyAoXG4gICAgICAgICAgICA8QXV0aCBhZG1pbk9ubHk9e0NvbXBvbmVudC5hdXRoLmFkbWluT25seX0+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXV0aD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RvcmVQcm92aWRlcj5cbiAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEF1dGgoeyBjaGlsZHJlbiwgYWRtaW5Pbmx5fSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHsgc3RhdHVzLGRhdGE6c2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbih7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgb25VbmF1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL3VuYXV0aG9yaXplZCcpXG4gICAgfSxcbiAgfSlcblxuICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gJ0xvYWRpbmcnXG4gIH1cbiAgaWYoYWRtaW5Pbmx5ICYmICFzZXNzaW9uLnVzZXIuaXNBZG1pbil7XG4gICAgcm91dGVyLnB1c2goJy91bmF1dGhvcml6ZWQnKVxuICB9XG4gIHJldHVybiBjaGlsZHJlblxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJTdG9yZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXV0aCIsIkF1dGgiLCJhZG1pbk9ubHkiLCJjaGlsZHJlbiIsInJvdXRlciIsInN0YXR1cyIsImRhdGEiLCJyZXF1aXJlZCIsIm9uVW5hdXRoZW50aWNhdGVkIiwicHVzaCIsInVzZXIiLCJpc0FkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();