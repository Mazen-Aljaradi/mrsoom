"use strict";
exports.id = 952;
exports.ids = [952];
exports.modules = {

/***/ 9952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_featured)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/product-item/index.tsx
var product_item = __webpack_require__(8362);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
;// CONCATENATED MODULE: ./components/products-featured/carousel/index.tsx


// import Swiper core and required components

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (false) {}
const ProductsCarousel = ({ products  })=>{
    if (!products) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "products-carousel",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
            spaceBetween: spaceBetween,
            loop: true,
            centeredSlides: centeredSlides,
            watchOverflow: true,
            slidesPerView: slidesPerView,
            className: "swiper-wrapper",
            children: products.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(product_item/* default */.Z, {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        color: item.color,
                        discount: item.discount,
                        currentPrice: item.currentPrice,
                        images: item.images
                    }, item.id)
                }, item.id)
            )
        })
    });
};
/* harmony default export */ const carousel = (ProductsCarousel);

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./components/products-featured/index.tsx



const ProductsFeatured = ()=>{
    const fetcher = (url)=>fetch(url).then((res)=>res.json()
        )
    ;
    const { data  } = external_swr_default()("/api/products", fetcher);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section section-products-featured",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "section-products-featured__header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "\u0634\u0645\u0627\u063A\u0627\u062A \u0645\u062E\u062A\u0627\u0631\u0629 \u0641\u0642\u0637 \u0644\u0623\u062C\u0644\u0643"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/products",
                            className: "btn btn--rounded btn--border",
                            children: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(carousel, {
                    products: data
                })
            ]
        })
    });
};
/* harmony default export */ const products_featured = (ProductsFeatured);


/***/ })

};
;