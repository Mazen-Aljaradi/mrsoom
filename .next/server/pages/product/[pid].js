"use strict";
(() => {
var exports = {};
exports.id = 260;
exports.ids = [260];
exports.modules = {

/***/ 2418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

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
                        children: "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A"
                    })
                ]
            })
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 3453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ content)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./utils/data/products-colors.ts
const productsColors = [
    {
        id: "1",
        label: "\u0627\u062D\u0645\u0631",
        color: "#d10230"
    }, 
];
/* harmony default export */ const products_colors = (productsColors);

;// CONCATENATED MODULE: ./utils/data/products-sizes.ts
const productsSizes = [
    {
        id: "1",
        // label: 'XS',
        label: "52"
    },
    {
        id: "2",
        // label: 'S',
        label: "55"
    },
    {
        id: "3",
        // label: 'M',
        label: "58"
    },
    {
        id: "4",
        // label: 'L',
        label: "60"
    },
    {
        id: "5",
        // label: 'XL',
        label: "62"
    }, 
];
/* harmony default export */ const products_sizes = (productsSizes);

;// CONCATENATED MODULE: ./components/products-filter/form-builder/checkbox-color/index.tsx

const CheckboxColor = ({ color , name , type ="checkbox" , onChange , valueName  })=>{
    const onSelect = (e)=>{
        if (onChange) {
            onChange(e.target.getAttribute("data-name"));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        htmlFor: color + "-" + name,
        className: `checkbox-color`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                onChange: onSelect,
                value: color,
                "data-name": valueName,
                name: name,
                type: type,
                id: color + "-" + name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "checkbox__check",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "checkbox__color",
                    style: {
                        backgroundColor: color
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const checkbox_color = (CheckboxColor);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./store/reducers/cart.ts
var cart = __webpack_require__(1502);
// EXTERNAL MODULE: ./store/reducers/user.ts
var user = __webpack_require__(4912);
;// CONCATENATED MODULE: ./components/product-single/content/index.tsx









const Content = ({ product  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: count , 1: setCount  } = (0,external_react_.useState)(1);
    const { 0: color , 1: setColor  } = (0,external_react_.useState)("");
    const { 0: itemSize , 1: setItemSize  } = (0,external_react_.useState)("");
    const onColorSet = (e)=>setColor(e)
    ;
    const onSelectChange = (e)=>setItemSize(e.target.value)
    ;
    const { favProducts  } = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const isFavourite = (0,external_lodash_.some)(favProducts, (productId)=>productId === product.id
    );
    const toggleFav = ()=>{
        dispatch((0,user/* toggleFavProduct */._m)({
            id: product.id
        }));
    };
    const addToCart = ()=>{
        const productToSave = {
            id: product.id,
            name: product.name,
            thumb: product.images ? product.images[0] : "",
            price: product.currentPrice,
            count: count,
            color: color,
            size: itemSize
        };
        const productStore = {
            count,
            product: productToSave
        };
        dispatch((0,cart/* addProduct */.gK)(productStore));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "product-content",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-content__intro",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "product__id",
                        children: [
                            "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0646\u062A\u062C:",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            product.id
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "product__name",
                        children: product.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product__prices",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                children: [
                                    product.currentPrice,
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                                        children: "\u0631.\u0633"
                                    })
                                ]
                            }),
                            product.discount && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "textdecoration",
                                children: [
                                    product.price,
                                    " \u0631.\u0633"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-content__filters",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-filter-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "\u0627\u0644\u0644\u0648\u0646:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "checkbox-color-wrapper",
                                children: products_colors.map((type)=>/*#__PURE__*/ jsx_runtime_.jsx(checkbox_color, {
                                        type: "radio",
                                        name: "product-color",
                                        color: type.color,
                                        valueName: type.label,
                                        onChange: onColorSet
                                    }, type.id)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-filter-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                children: [
                                    "\u0627\u0644\u062D\u062C\u0645: ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: " \u0627\u0646\u0638\u0631 \u062C\u062F\u0648\u0644 \u0627\u0644\u0645\u0642\u0627\u0633\u0627\u062A"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "checkbox-color-wrapper",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "select-wrapper",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        onChange: onSelectChange,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                children: "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u062C\u0645"
                                            }),
                                            products_sizes.map((type)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: type.label,
                                                    children: type.label
                                                })
                                            )
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-filter-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "\u0627\u0644\u0643\u0645\u064A\u0629:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "quantity-buttons",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "quantity-button",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                onClick: ()=>setCount(count - 1)
                                                ,
                                                className: "quantity-button__btn",
                                                children: "-"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: count
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                onClick: ()=>setCount(count + 1)
                                                ,
                                                className: "quantity-button__btn",
                                                children: "+"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        onClick: ()=>addToCart()
                                        ,
                                        className: "btn btn--rounded btn--yellow",
                                        children: "\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: toggleFav,
                                        className: `btn-heart ${isFavourite ? "btn-heart--active" : ""}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-heart"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const content = (Content);


/***/ }),

/***/ 7614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Description = ({ show  })=>{
    const style = {
        display: show ? "flex" : "none"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        style: style,
        className: "product-single__description",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product-description-block",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "icon-cart"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    children: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "\u0634\u0645\u0627\u063A \u0645\u0631\u0633\u0648\u0645 \u0645\u0646\u0633\u0648\u062C \u0645\u0646 \u0623\u0642\u0645\u0634\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0648\u062F\u0629\u060C \u0648\u064A\u062A\u0645 \u0635\u0628\u0627\u063A\u062A\u0647\u0627 \u0628\u0623\u0644\u0648\u0627\u0646 \u0632\u0627\u0647\u064A\u0629 \u062A\u062F\u0648\u0645 \u0637\u0648\u064A\u0644\u0627\u064B. \u0648\u064A\u064F\u0635\u0645\u0645 \u0627\u0644\u0634\u0645\u0627\u063A \u0628\u0623\u0634\u0643\u0627\u0644 \u0648\u0623\u062D\u062C\u0627\u0645 \u0645\u062E\u062A\u0644\u0641\u0629\u060C \u0628\u0645\u0627 \u064A\u062A\u0646\u0627\u0633\u0628 \u0645\u0639 \u0631\u063A\u0628\u0627\u062A \u0648\u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0631\u062C\u0627\u0644",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "\u064A\u064F\u0639\u062F \u0645\u0631\u0633\u0648\u0645 \u0625\u0636\u0627\u0641\u0629 \u0623\u0646\u064A\u0642\u0629 \u0625\u0644\u0649 \u0627\u0644\u0632\u064A \u0627\u0644\u0631\u062C\u0627\u0644\u064A\u060C \u0648\u064A\u0645\u0646\u062D \u0627\u0644\u0631\u062C\u0644 \u0645\u0638\u0647\u0631\u064B\u0627 \u0645\u0645\u064A\u0632\u064B\u0627. \u0643\u0645\u0627 \u0623\u0646\u0647 \u064A\u064F\u0639\u062F \u062A\u0639\u0628\u064A\u0631\u064B\u0627 \u0639\u0646 \u062D\u0628\xa0\u0627\u0644\u0648\u0637\u0646\xa0\u0648\u062A\u0642\u062F\u064A\u0631\u0647"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);


/***/ }),

/***/ 1357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Gallery = ({ images  })=>{
    const featImage = images[0];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "product-gallery",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-gallery__thumbs",
                children: images.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-gallery__thumb",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: image,
                            alt: ""
                        })
                    }, image)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-gallery__image",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: featImage,
                    alt: ""
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);


/***/ }),

/***/ 3512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reviews_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6189);
/* harmony import */ var _punctuation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_punctuation__WEBPACK_IMPORTED_MODULE_2__]);
_punctuation__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Reviews = ({ show , product  })=>{
    const style = {
        display: show ? "flex" : "none"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            style: style,
            className: "product-single__reviews",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_punctuation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    punctuation: product.punctuation.punctuation,
                    countOpinions: product.punctuation.countOpinions,
                    votes: product.punctuation.votes
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reviews_list__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    reviews: product.reviews
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9272:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8405);
/* harmony import */ var react_rater__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rater__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2406);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__]);
_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Punctuation = ({ votes , punctuation , countOpinions  })=>{
    const percentageBar = (count)=>{
        return count * 100 / countOpinions;
    };
    const { isOpen , onOpen , onOpenChange  } = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "product-punctuation",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-punctuation__values",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: punctuation
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_rater__WEBPACK_IMPORTED_MODULE_1___default()), {
                        total: 5,
                        interactive: false,
                        rating: punctuation
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "icon-avatar"
                            }),
                            countOpinions,
                            " all opinions"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-punctuation__rates",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "punctuations-lists",
                    children: votes.map((vote)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "punctuation-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_rater__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    total: 1,
                                    interactive: false,
                                    rating: 1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: vote.value
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "punctuation-item__bar",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            width: percentageBar(vote.count) + "%"
                                        },
                                        className: "punctuation-item__bar__current"
                                    })
                                })
                            ]
                        }, vote.count)
                    )
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "punctuation-btn-wrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: "btn btn--rounded btn--yellow",
                    children: "Add opinion"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        onPress: onOpen,
                        children: "Open Modal"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                        isOpen: isOpen,
                        onOpenChange: onOpenChange,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                            children: (onClose)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                                            className: "flex flex-col gap-1",
                                            children: "Modal Title"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                    color: "danger",
                                                    variant: "light",
                                                    onPress: onClose,
                                                    children: "Close"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                    color: "primary",
                                                    onPress: onClose,
                                                    children: "Action"
                                                })
                                            ]
                                        })
                                    ]
                                })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Punctuation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ reviews_list)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-rater"
var external_react_rater_ = __webpack_require__(8405);
var external_react_rater_default = /*#__PURE__*/__webpack_require__.n(external_react_rater_);
;// CONCATENATED MODULE: ./utils/markup.ts
const createMarkup = (content)=>{
    return {
        __html: content
    };
};
/* harmony default export */ const markup = (createMarkup);

;// CONCATENATED MODULE: ./components/product-single/reviews/reviews-list/index.tsx



const ReviewsList = ({ reviews  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "reviews-list",
        children: reviews.map((review, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "review-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "review__avatar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: review.avatar,
                            alt: "avatar"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "review__content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: review.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_rater_default()), {
                                total: 5,
                                interactive: false,
                                rating: review.punctuation
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "review__comment",
                                dangerouslySetInnerHTML: markup(review.description)
                            })
                        ]
                    })
                ]
            }, index)
        )
    });
};
/* harmony default export */ const reviews_list = (ReviewsList);


/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8173);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1659);
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2418);
/* harmony import */ var _components_products_featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9952);
/* harmony import */ var _components_product_single_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1357);
/* harmony import */ var _components_product_single_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3453);
/* harmony import */ var _components_product_single_description__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7614);
/* harmony import */ var _components_product_single_reviews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3512);
/* harmony import */ var _utils_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product_single_reviews__WEBPACK_IMPORTED_MODULE_9__]);
_components_product_single_reviews__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const getServerSideProps = async ({ query  })=>{
    const pid = query.pid;
    const res = await fetch(`${_utils_server__WEBPACK_IMPORTED_MODULE_10__/* .server */ .f}/api/product/${pid}`);
    const product = await res.json();
    return {
        props: {
            product
        }
    };
};
const Product = ({ product  })=>{
    const { 0: showBlock , 1: setShowBlock  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("description");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Main__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "product-single",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-single__content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_single_gallery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    images: product.images
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_single_content__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    product: product
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-single__info",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product-single__info-btns",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: ()=>setShowBlock("description")
                                            ,
                                            className: `btn btn--rounded btn-to ${showBlock === "description" ? "btn--active" : ""}`,
                                            children: "\u0627\u0644\u0648\u0635\u0641"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: ()=>setShowBlock("reviews")
                                            ,
                                            className: `btn btn--rounded btn-to ${showBlock === "reviews" ? "btn--active" : ""}`,
                                            children: "\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_single_description__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    show: showBlock === "description"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_single_reviews__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    product: product,
                                    show: showBlock === "reviews"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-single-page",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_featured__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ server)
/* harmony export */ });
const dev = "production" !== "production";
const server = dev ? "http://localhost:3000" : "mrsoom-72g7w2rn1-mazen-aljaradi.vercel.app";


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

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

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8405:
/***/ ((module) => {

module.exports = require("react-rater");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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

/***/ }),

/***/ 2406:
/***/ ((module) => {

module.exports = import("@nextui-org/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,778,912,66,502,952], () => (__webpack_exec__(2551)));
module.exports = __webpack_exports__;

})();