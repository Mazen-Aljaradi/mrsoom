import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      {/* <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>كل ما تحتاجة لمظهر فخم ومتكامل</h3>
             //<a href="#" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>توصيل سريع لكل مناطق المملكة</h3>
             // <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>الاصالة والفخامة</h3>
             // <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section> */}

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>لماذا يجب عليك إختيارنا؟</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>ًالشحن مجانا</h4>
                <p>جميع المشتريات التي تزيد قيمتها عن 199 ريال سعودي مؤهلة للشحن المجاني</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>مدفوعات سهلة</h4>
                <p>تتم معالجة جميع المدفوعات على الفور عبر بروتوكول دفع آمن.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>ضمان استعادة الاموال</h4>
                <p>إذا وصل أحد العناصر تالفًا أو غيرت رأيك، فيمكنك إعادته واسترداد أموالك بالكامل.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>أفضل نوعية</h4>
                <p>تم تصميم كل منتج من منتجاتنا ليدوم طويلاً باستخدام أجود المواد.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage