"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 2794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcart_absolutePagePath_private_next_pages_2Fcart_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/cart.tsx
var cart_namespaceObject = {};
__webpack_require__.r(cart_namespaceObject);
__webpack_require__.d(cart_namespaceObject, {
  "default": () => (pages_cart)
});

// EXTERNAL MODULE: ../../../../../../usr/local/lib/node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(103);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ../../../../../../usr/local/lib/node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(771);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./layouts/Main.tsx
var Main = __webpack_require__(5731);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/checkout-status/index.tsx
var checkout_status = __webpack_require__(1158);
// EXTERNAL MODULE: ./store/reducers/cart.ts
var cart = __webpack_require__(3308);
;// CONCATENATED MODULE: ./components/shopping-cart/item/index.tsx



const ShoppingCart = ({ thumb, name, id, color, size, count, price })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const removeFromCart = ()=>{
        dispatch((0,cart/* removeProduct */.kh)({
            thumb,
            name,
            id,
            color,
            size,
            count,
            price
        }));
    };
    const setProductCount = (count)=>{
        if (count <= 0) {
            return;
        }
        const payload = {
            product: {
                thumb,
                name,
                id,
                color,
                size,
                count,
                price
            },
            count
        };
        dispatch((0,cart/* setCount */.kM)(payload));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "cart-product",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "cart-product__img",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: thumb,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "cart-product__content",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "#",
                                        id
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: "cart-item-before",
                "data-label": "اللون",
                children: color
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: "cart-item-before",
                "data-label": "الحجم",
                children: size
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "quantity-button",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "button",
                            onClick: ()=>setProductCount(count - 1),
                            className: "quantity-button__btn",
                            children: "-"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: count
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "button",
                            onClick: ()=>setProductCount(count + 1),
                            className: "quantity-button__btn",
                            children: "+"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                children: [
                    price,
                    " ر.س"
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("td", {
                className: "cart-item-cancel",
                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "icon-cancel",
                    onClick: ()=>removeFromCart()
                })
            })
        ]
    });
};
/* harmony default export */ const shopping_cart_item = (ShoppingCart);

;// CONCATENATED MODULE: ./components/shopping-cart/index.tsx




const shopping_cart_ShoppingCart = ()=>{
    const { cartItems } = (0,external_react_redux_.useSelector)((state)=>state.cart);
    const priceTotal = ()=>{
        let totalPrice = 0;
        if (cartItems.length > 0) {
            cartItems.map((item)=>totalPrice += item.price * item.count);
        }
        return totalPrice;
    };
    let title = {
        name: "(منتج)\n",
        color: "(اللون)\n",
        price: "(السعر)\n",
        size: "(الحجم)\n",
        count: "(العدد)\n"
    };
    let info = "";
    const myfunction = ()=>{
        cartItems.map((item)=>(info += title.name + " : " + item.name + "%0a", info += "	" + title.color + " : " + item.color + "%0a", info += "	" + title.price + " : " + item.price + "%0a", info += "	" + title.size + " : " + item.size + "%0a", info += "	" + title.count + " : " + item.count + "%0a", info += "_____________%0a"));
        console.log(info);
        return info;
    };
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "cart",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "cart__intro",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "cart__title",
                            children: "عربة التسوق"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(checkout_status/* default */.Z, {
                            step: "cart"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "cart-list",
                    children: [
                        cartItems.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("table", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: "منتج"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                children: "اللون"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                children: "الحجم"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                children: "العدد"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                children: "السعر"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("th", {})
                                        ]
                                    }),
                                    cartItems.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(shopping_cart_item, {
                                            id: item.id,
                                            thumb: item.thumb,
                                            name: item.name,
                                            color: item.color,
                                            price: item.price,
                                            size: item.size,
                                            count: item.count
                                        }, item.id))
                                ]
                            })
                        }),
                        cartItems.length === 0 && /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "لا شيء في العربة"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "cart-actions",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            href: "/products",
                            className: "cart__btn-back",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "icon-right"
                                }),
                                "مواصلة التسوق"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "cart-actions__items-wrapper",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: "cart-actions__total",
                                    children: [
                                        "التكلفة الإجمالية ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                            children: [
                                                priceTotal().toFixed(2),
                                                " ر.س"
                                            ]
                                        })
                                    ]
                                }),
                                cartItems.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: `whatsapp://send?phone=966534828530&text=${myfunction()}`,
                                    className: "btn btn--rounded btn--yellow",
                                    children: "شراء"
                                }) : /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "#",
                                    className: "btn btn--rounded btn--yellow",
                                    children: "شراء"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const shopping_cart = (shopping_cart_ShoppingCart);

;// CONCATENATED MODULE: ./pages/cart.tsx



const Products = ()=>/*#__PURE__*/ jsx_runtime.jsx(Main/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime.jsx(shopping_cart, {})
    });
/* harmony default export */ const pages_cart = (Products);

;// CONCATENATED MODULE: ../../../../../../usr/local/lib/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcart&absolutePagePath=private-next-pages%2Fcart.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcart_absolutePagePath_private_next_pages_2Fcart_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(cart_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(cart_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(cart_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(cart_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/cart","pathname":"/cart","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: cart_namespaceObject })
        
        
    

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5830:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/bloom-filter.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1668:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 3773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/interpolate-as.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 4639:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/omit.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 6135:
/***/ ((module) => {

module.exports = require("use-onclickoutside");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [761,576,468,169,686,572,371,308,521], () => (__webpack_exec__(2794)));
module.exports = __webpack_exports__;

})();