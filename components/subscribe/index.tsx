const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{ backgroundImage: 'url(/images/subscribe.png)' }} className="subscribe__content">
          <h4>هل لديك استفسار يمكنك التواصل معنا</h4>

          <form className="subscribe__form">
            <button type="submit" className="btn  btn--whatsapp">
              <a href={`whatsapp://send?phone=966551802561&text=السلام عليكم، وصلت إليكم من خلال متجر مرسوم وأريد الاستفسار ..`}> تواصل معنا</a>
            </button>

          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe

