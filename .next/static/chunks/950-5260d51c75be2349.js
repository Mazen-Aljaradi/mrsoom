"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{4953:function(e,s,c){var i=c(5893),r=c(2375),n=c.n(r);s.Z=()=>(0,i.jsxs)("footer",{className:"site-footer",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"site-footer__top",children:[(0,i.jsxs)("div",{className:"site-footer__description",children:[(0,i.jsx)(n(),{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsxs)("h6",{className:"site-logo",children:["مرسوم",(0,i.jsx)("img",{src:"/images/logo.png",width:"50px"})]})})}),(0,i.jsx)("p",{children:"مرسوم اسم ملكي يحمل دلالة المراسيم الملكية مرسوم يحمل خريطة المملكة العربية السعودية مرسومة على نسيجه مرسوم يضيف الفخامة لزيك الرسمي"}),(0,i.jsxs)("ul",{className:"site-footer__social-networks",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"icon-twitter"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"icon-instagram"})})})]})]}),(0,i.jsxs)("div",{className:"site-footer__links",children:[(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"الشروط والأحكام"}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:"سياسة الخصوصية"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:"سياسة الاستبدال والاسترجاع"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:"خيارات الشحن والتوصيل"})})]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"اتصال"}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:"mrsoowm@gmail.com"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"tel:0534828530",children:"2561 180 055"})})]})]})]})}),(0,i.jsx)("div",{className:"site-footer__bottom",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("p",{children:"\xa9 2023 مرسوم. جميع الحقوق محفوظة."})})})]})},8371:function(e,s,c){var i=c(5893),r=c(7294),n=c(1043),a=c(5815),l=c(2375),t=c.n(l),d=c(3169);s.Z=e=>{let{isErrorPage:s}=e,c=(0,d.useRouter)(),{cartItems:l}=(0,n.v9)(e=>e.cart),h=["/"],[o,x]=(0,r.useState)(!!h.includes(c.pathname)&&!s),[j,m]=(0,r.useState)(!1),[u,p]=(0,r.useState)(!1),f=(0,r.useRef)(null),N=(0,r.useRef)(null),_=()=>{0===window.pageYOffset?x(!0):x(!1)};return(0,r.useEffect)(()=>{h.includes(c.pathname)&&!s&&(_(),window.onscroll=function(){_()})},[]),(0,a.Z)(f,()=>{m(!1)}),(0,a.Z)(N,()=>{p(!1)}),(0,i.jsx)("header",{className:"site-header ".concat(o?"":"site-header--fixed"),children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(t(),{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsxs)("h1",{className:"site-logo",children:["مرسوم",(0,i.jsx)("img",{src:"/images/logo.png",width:"50px"})]})})}),(0,i.jsxs)("nav",{ref:f,className:"site-nav ".concat(j?"site-nav--open":""),children:[(0,i.jsx)(t(),{href:"/",children:(0,i.jsx)("a",{children:"الرئيسية"})}),(0,i.jsx)(t(),{href:"#",children:(0,i.jsx)("a",{children:"تواصل معنا"})}),(0,i.jsx)(t(),{href:"#",children:(0,i.jsx)("a",{children:"من نحن"})})]}),(0,i.jsxs)("div",{className:"site-header__actions",children:[(0,i.jsxs)("button",{ref:N,className:"search-form-wrapper ".concat(u?"search-form--active":""),children:[(0,i.jsxs)("form",{className:"search-form",children:[(0,i.jsx)("i",{className:"icon-cancel",onClick:()=>p(!u)}),(0,i.jsx)("input",{type:"text",name:"search",placeholder:"أدخل الوصف الذي تبحث عنه"})]}),(0,i.jsx)("i",{onClick:()=>p(!u),className:"icon-search"})]}),(0,i.jsx)(t(),{href:"/cart",children:(0,i.jsxs)("button",{className:"btn-cart",children:[(0,i.jsx)("i",{className:"icon-cart"}),l.length>0&&(0,i.jsx)("span",{className:"btn-cart__count",children:l.length})]})}),(0,i.jsx)("button",{onClick:()=>m(!0),className:"site-header__btn-menu",children:(0,i.jsx)("i",{className:"btn-hamburger",children:(0,i.jsx)("span",{})})})]})]})})}},9781:function(e,s,c){var i=c(5893),r=c(2375),n=c.n(r),a=c(6486),l=c(1043),t=c(3124);s.Z=e=>{let{discount:s,images:c,id:r,name:d,price:h,currentPrice:o}=e,x=(0,l.I0)(),{favProducts:j}=(0,l.v9)(e=>e.user),m=(0,a.some)(j,e=>e===r);return(0,i.jsxs)("div",{className:"product-item",children:[(0,i.jsxs)("div",{className:"product__image",children:[(0,i.jsx)("button",{type:"button",onClick:()=>{x((0,t._m)({id:r}))},className:"btn-heart ".concat(m?"btn-heart--active":""),children:(0,i.jsx)("i",{className:"icon-heart"})}),(0,i.jsx)(n(),{href:"/product/".concat(r),children:(0,i.jsxs)("a",{children:[(0,i.jsx)("img",{src:c?c[0]:"",alt:"product"}),s&&(0,i.jsxs)("span",{className:"product__discount",children:[s,"%"]})]})})]}),(0,i.jsxs)("div",{className:"product__description",children:[(0,i.jsx)("h3",{children:d}),(0,i.jsxs)("div",{className:"product__price "+(s?"product__price--discount":""),children:[(0,i.jsxs)("h4",{children:[o," ",(0,i.jsx)("sup",{children:"ر.س"})]}),s&&(0,i.jsxs)("span",{className:"textdecoration",children:[h," ",(0,i.jsx)("sup",{children:"ر.س"})]})]})]})]})}},9843:function(e,s,c){c.d(s,{Z:function(){return x}});var i=c(5893),r=c(9781),n=c(9447),a=c(4002);let l=1.3,t=!0,d=30;window.innerWidth>768&&(l=3,d=35,t=!1),window.innerWidth>1024&&(l=4,d=65,t=!1);var h=e=>{let{products:s}=e;return s?(0,i.jsx)("div",{className:"products-carousel",children:(0,i.jsx)(n.t,{spaceBetween:d,loop:!0,centeredSlides:t,watchOverflow:!0,slidesPerView:l,className:"swiper-wrapper",children:s.map(e=>(0,i.jsx)(a.o,{children:(0,i.jsx)(r.Z,{id:e.id,name:e.name,price:e.price,color:e.color,discount:e.discount,currentPrice:e.currentPrice,images:e.images},e.id)},e.id))})}):(0,i.jsx)("div",{children:"Loading"})},o=c(5522),x=()=>{let{data:e}=(0,o.ZP)("/api/products",e=>fetch(e).then(e=>e.json()));return(0,i.jsx)("section",{className:"section section-products-featured",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("header",{className:"section-products-featured__header",children:[(0,i.jsx)("h3",{children:"شماغات مختارة فقط لأجلك"}),(0,i.jsx)("a",{href:"/products",className:"btn btn--rounded btn--border",children:"عرض الكل"})]}),(0,i.jsx)(h,{products:e})]})})}},5731:function(e,s,c){var i=c(5893),r=c(89),n=c.n(r),a=c(8371),l=c(3169);s.Z=e=>{let{children:s,title:c="Next.js Ecommerce"}=e,r=(0,l.useRouter)(),t=r.pathname;return(0,i.jsxs)("div",{className:"app-main",children:[(0,i.jsx)(n(),{children:(0,i.jsx)("title",{children:c})}),(0,i.jsx)(a.Z,{}),(0,i.jsx)("main",{className:"/"!==t?"main-page":"",children:s})]})}}}]);