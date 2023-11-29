"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 2341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fproducts_absolutePagePath_private_next_pages_2Fproducts_tsx_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/products.tsx
var products_namespaceObject = {};
__webpack_require__.r(products_namespaceObject);
__webpack_require__.d(products_namespaceObject, {
  "default": () => (products)
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
// EXTERNAL MODULE: ./components/footer/index.tsx
var footer = __webpack_require__(4953);
// EXTERNAL MODULE: ./components/breadcrumb/index.tsx
var breadcrumb = __webpack_require__(821);
;// CONCATENATED MODULE: ./components/products-filter/index.tsx
// import { useState } from 'react';
// import Checkbox from './form-builder/checkbox';
// import CheckboxColor from './form-builder/checkbox-color';
// import Slider from 'rc-slider';
// data
// import productsTypes from './../../utils/data/products-types';
// import productsColors from './../../utils/data/products-colors';
// import productsSizes from './../../utils/data/products-sizes';
// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = ()=>{
    // const [filtersOpen, setFiltersOpen] = useState(false);
    const addQueryParams = ()=>{
    // query params changes
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("form", {
            className: "products-filter",
            onChange: addQueryParams,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `products-filter__wrapper`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "products-filter__block",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                type: "button",
                                children: [
                                    "شماغ مرسوم منسوج من أقمشة عالية الجودة، ويتم صباغتها بألوان زاهية تدوم طويلاً. ويُصمم الشماغ بأشكال وأحجام مختلفة، بما يتناسب مع رغبات واحتياجات الرجال.",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    "يُعد مرسوم إضافة أنيقة إلى الزي الرجالي، ويمنح الرجل مظهرًا مميزًا. كما أنه يُعد تعبيرًا عن حب\xa0الوطن\xa0وتقديره."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "products-filter__block__content"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        type: "submit",
                        className: "btn btn-submit btn--rounded btn--yellow",
                        children: "Apply"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const products_filter = (ProductsFilter);

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./components/product-item/index.tsx
var product_item = __webpack_require__(9781);
;// CONCATENATED MODULE: ./components/product-item/loading/index.tsx

const ProductItemLoading = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
        href: "#",
        className: "product-item product-item--loading",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "product__image"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "product__description",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {}),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product__price",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h4", {})
                    })
                ]
            })
        ]
    });
/* harmony default export */ const loading = (ProductItemLoading);

;// CONCATENATED MODULE: ./components/products-content/list/loading/index.js


const ProductsLoading = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "products-list",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(loading, {}),
            /*#__PURE__*/ jsx_runtime.jsx(loading, {}),
            /*#__PURE__*/ jsx_runtime.jsx(loading, {})
        ]
    });
};
/* harmony default export */ const list_loading = (ProductsLoading);

;// CONCATENATED MODULE: ./components/products-content/list/index.tsx




const ProductsContent = ()=>{
    const fetcher = (url)=>fetch(url).then((res)=>res.json());
    const { data, error } = external_swr_default()("/api/products", fetcher);
    if (error) return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: "Failed to load users"
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !data && /*#__PURE__*/ jsx_runtime.jsx(list_loading, {}),
            data && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "products-list",
                children: data.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(product_item/* default */.Z, {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        color: item.color,
                        currentPrice: item.currentPrice,
                        images: item.images
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const list = (ProductsContent);

;// CONCATENATED MODULE: ./components/products-content/index.tsx
// import { useState } from 'react';


const products_content_ProductsContent = ()=>{
    // const [orderProductsOpen, setOrderProductsOpen] = useState(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "products-content",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "products-content__intro",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                    className: "",
                    children: [
                        "جميع الشماغات",
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: "(6)"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(list, {})
        ]
    });
};
/* harmony default export */ const products_content = (products_content_ProductsContent);

;// CONCATENATED MODULE: ./pages/products.tsx






const Products = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Main/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(breadcrumb/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "products-page",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(products_filter, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(products_content, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
/* harmony default export */ const products = (Products);

;// CONCATENATED MODULE: ../../../../../../usr/local/lib/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fproducts&absolutePagePath=private-next-pages%2Fproducts.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fproducts_absolutePagePath_private_next_pages_2Fproducts_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(products_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(products_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(products_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(products_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(products_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(products_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/products","pathname":"/products","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: products_namespaceObject })
        
        
    

/***/ }),

/***/ 821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Breadcrumb = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "breadcrumb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "breadcrumb-list",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "icon-home"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "جميع المنتجات"
                    })
                ]
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

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
var __webpack_exports__ = __webpack_require__.X(0, [761,576,468,169,686,572,371,124,290], () => (__webpack_exec__(2341)));
module.exports = __webpack_exports__;

})();