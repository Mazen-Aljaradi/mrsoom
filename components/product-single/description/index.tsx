type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>التفاصيل ووصف المنتج</h4>
        <p>شماغ مرسوم منسوج من أقمشة عالية الجودة، ويتم صباغتها بألوان زاهية تدوم طويلاً. ويُصمم الشماغ بأشكال وأحجام مختلفة، بما يتناسب مع رغبات واحتياجات الرجال
        <br/><br/>يُعد مرسوم إضافة أنيقة إلى الزي الرجالي، ويمنح الرجل مظهرًا مميزًا. كما أنه يُعد تعبيرًا عن حب الوطن وتقديره</p>
      </div>
      {/* <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>White Summer Vibes T-shirt in the uiKit line with a colorful print. <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.</p>
      </div> */}
    </section>
  );
};

export default Description;
