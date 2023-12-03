// import Logo from '../../assets/icons/logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            {/* <h6><Logo /> <span>E</span>-Shop</h6> */}
            <Link href="/">
              <h6 className="site-logo"><img src='/images/logo.png' width={"80px"} /></h6>
            </Link>
            <p>مرسوم اسم ملكي يحمل دلالة المراسيم الملكية
              مرسوم يحمل خريطة المملكة العربية السعودية مرسومة على نسيجه
              مرسوم يضيف الفخامة لزيك الرسمي</p>
            <ul className="site-footer__social-networks">
              {/* <li><a href="#"><i className="icon-facebook"></i></a></li> */}
              <li><a href="https://x.com/mrsoowm"><i className="icon-xtwitter"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></i></a></li>
              {/* <li><a href="#"><i className="icon-linkedin"></i></a></li> */}
              <li><a href="https://instagram.com/mrsoowm"><i className="icon-instagram"></i></a></li>
              {/* <li><a href="#"><i className="icon-youtube-play"></i></a></li> */}
            </ul>
          </div>

          <div className="site-footer__links">
            {/* <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul> */}
            {/* <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul> */}
            <ul>
              <li>الشروط والأحكام</li>
              <li><a href="#">سياسة الخصوصية</a></li>
              <li><a href="#">سياسة الاستبدال والاسترجاع</a></li>
              <li><a href="#">خيارات الشحن والتوصيل</a></li>

            </ul>
            <ul>
              <li>اتصال</li>
              <li><a href="#">mrsoowm@gmail.com</a></li>
              <li><a href="tel:0534828530">2561 180 055</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2023 مرسوم. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer
