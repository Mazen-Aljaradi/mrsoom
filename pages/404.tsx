import LayoutError from '../layouts/404';

const ErrorPage = () => (
  <LayoutError>
    <section className="error-page">
      <div className="container">
        <h1>Error 404</h1>
        <p>عفوًا. يبدو أن هذه الصفحة غير موجودة</p>
        <a href="#" className="btn btn--rounded btn--yellow">اذهب إلى الصفحة الرئيسية</a>
      </div>
    </section>
  </LayoutError>
)

export default ErrorPage