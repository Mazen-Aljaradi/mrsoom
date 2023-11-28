import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import Item from './item';
import { RootState } from 'store';



const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const priceTotal = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  }

  let title = { name: '(منتج)\n', color: '(اللون)\n', price: '(السعر)\n', size: '(الحجم)\n', count: '(العدد)\n' }
  let info = "";




  const myfunction = () => {
    cartItems.map((item) => (

      info += title.name + ' : ' + item.name + '%0a',
      info += '\t' + title.color + ' : ' + item.color + '%0a',
      info += '\t' + title.price + ' : ' + item.price + '%0a',
      info += '\t' + title.size + ' : ' + item.size + '%0a',
      info += '\t' + title.count + ' : ' + item.count + '%0a',
      info += "_____________%0a"
    ));
   

    console.log(info)

    return info;
  }



  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">عربة التسوق</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 &&
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: 'center' }}>منتج</th>
                  <th>اللون</th>
                  <th>الحجم</th>
                  <th>العدد</th>
                  <th>السعر</th>
                  <th></th>
                </tr>

                {cartItems.map(item => (
                  <Item
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    size={item.size}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          }

          {cartItems.length === 0 &&
            <p>لا شيء في العربة</p>
          }
        </div>

        <div className="cart-actions">
          <a href="/products" className="cart__btn-back"><i className="icon-right"></i>مواصلة التسوق</a>
          {/* <input type="text" placeholder="كود خصم" className="cart__promo-code" /> */}

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">التكلفة الإجمالية <strong>{priceTotal().toFixed(2)} ر.س</strong></p>
            {/* <a href="/cart/checkout" className="btn btn--rounded btn--yellow">شراء</a> */}

            {cartItems.length > 0
              ? <a href={`whatsapp://send?phone=966534828530&text=${myfunction()}`}

                className="btn btn--rounded btn--yellow" >شراء</a>
              : <a href="#" className="btn btn--rounded btn--yellow">شراء</a>
            }

          </div>
        </div>
      </div>
    </section >
  )
};


export default ShoppingCart