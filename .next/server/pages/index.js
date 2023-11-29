"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/index.tsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages)
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
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
;// CONCATENATED MODULE: external "swiper"
const external_swiper_namespaceObject = require("swiper");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_namespaceObject);
;// CONCATENATED MODULE: ./components/page-intro/index.tsx



external_swiper_default().use([
    external_swiper_namespaceObject.EffectFade,
    external_swiper_namespaceObject.Navigation
]);
const PageIntro = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "page-intro",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Swiper, {
            navigation: true,
            effect: "fade",
            className: "swiper-wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(react_.SwiperSlide, {
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "page-intro__slide",
                        style: {
                            backgroundImage: "url('/images/slide-1.png')"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "page-intro__slide__content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: "مرسوم الأصالة والفخامة تكمل حضورك "
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(react_.SwiperSlide, {
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "page-intro__slide",
                        style: {
                            backgroundImage: "url('/images/slide-2.png')"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "page-intro__slide__content",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: "كل ما تحتاجة لمضهر فخم ومتكامل"
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const page_intro = (PageIntro);

// EXTERNAL MODULE: ./components/products-featured/index.tsx + 1 modules
var products_featured = __webpack_require__(9843);
// EXTERNAL MODULE: ./components/footer/index.tsx
var footer = __webpack_require__(4953);
;// CONCATENATED MODULE: ./components/subscribe/index.tsx

const Subscribe = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "subscribe",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    backgroundImage: "url(/images/subscribe.png)"
                },
                className: "subscribe__content",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        children: "هل لديك استفسار يمكنك التواصل معنا"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("form", {
                        className: "subscribe__form",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "submit",
                            className: "btn  btn--whatsapp",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: `whatsapp://send?phone=966534828530&text=السلام عليكم، وصلت إليكم من خلال متجر مرسوم وأريد الاستفسار ..`,
                                children: " تواصل معنا"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const subscribe = (Subscribe);

;// CONCATENATED MODULE: ./pages/index.tsx






const IndexPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Main/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(page_intro, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "section",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("header", {
                            className: "section__intro",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                children: "لماذا يجب عليك إختيارنا؟"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "shop-data-items",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-shipping"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "data-item__content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    children: "ًالشحن مجانا"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "جميع المشتريات التي تزيد قيمتها عن 199 ريال سعودي مؤهلة للشحن المجاني"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-payment"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "data-item__content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    children: "مدفوعات سهلة"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "تتم معالجة جميع المدفوعات على الفور عبر بروتوكول دفع آمن."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-cash"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "data-item__content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    children: "ضمان استعادة الاموال"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "إذا وصل أحد العناصر تالفًا أو غيرت رأيك، فيمكنك إعادته واسترداد أموالك بالكامل."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-materials"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "data-item__content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    children: "أفضل نوعية"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "تم تصميم كل منتج من منتجاتنا ليدوم طويلاً باستخدام أجود المواد."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(products_featured/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(subscribe, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const pages = (IndexPage);

;// CONCATENATED MODULE: ../../../../../../usr/local/lib/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pages_namespaceObject })
        
        
    

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

/***/ 3630:
/***/ ((module) => {

module.exports = require("swiper/react");

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
var __webpack_exports__ = __webpack_require__.X(0, [761,576,468,169,686,572,371,124,290,843], () => (__webpack_exec__(9480)));
module.exports = __webpack_exports__;

})();