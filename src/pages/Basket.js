import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { database } from '../firebase';
import './Basket.scss';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import TrashIcon from '../assets/icons/TrashIcon';
import { Link, useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import DiscountBanner from '../components/DiscountBanner';
import CustomFooter from '../components/CustomFooter';
import { Helmet } from 'react-helmet';

export default function Basket() {
  let [localStorageInfo, setLocalStorageInfo] = useState();
  const [empty, setEmpty] = useState(true);
  const [basket, setBasket] = useState([]);
  const [products, setproducts] = useState([]);
  const [totalprice, setTotalprice] = useState(0);
  const navigate = useNavigate();

  function handleCheckOut() {
    navigate('/checkout');
  }

  useEffect(() => {
    const newTotalPrice = basket.reduce((total, item) => {
      return total + parseInt(item.qauntity) * parseFloat(item.productPrice);
    }, 0);
    setTotalprice(newTotalPrice);

    let finalBasket = {
      totalprice: totalprice,
      basket: basket,
    };

    localStorage.setItem('finalBasket', JSON.stringify(finalBasket));

    console.log(finalBasket);
  }, [basket, totalprice]);

  useEffect(() => {
    setLocalStorageInfo(localStorage.getItem('basket'));

    if (localStorageInfo) {
      if (JSON.parse(localStorageInfo).length === 0) {
        setEmpty(true);
        setBasket([]);
        return;
      }
      setEmpty(false);
      setBasket(JSON.parse(localStorageInfo));

      database
        .collection('products')
        .get()
        .then((e) => {
          setproducts(e.docs);
        });
    } else {
      setEmpty(true);
    }
  }, [basket.length, localStorageInfo]);

  console.log(localStorageInfo);

  function removeItem(e) {
    const newBasket = basket.filter((item) => item.product !== e);

    setBasket(newBasket);

    localStorage.setItem('basket', JSON.stringify(newBasket));
  }

  function handleChangeInput(e, id) {
    console.log(e.target.value, id);
    const newValue = parseInt(e.target.value);

    setBasket((prevBasket) =>
      prevBasket.map((item) => {
        if (item.product === id) {
          return {
            ...item,
            qauntity:
              !isNaN(newValue) && newValue >= 1 ? newValue : item.qauntity,
          };
        }
        return item;
      })
    );

    localStorage.setItem('basket', JSON.stringify(basket));
  }

  console.log(basket);
  return (
    <>
      <Helmet>
        <title>Kurv</title>
        <meta name='description' content='Denne side viser kurven' />
      </Helmet>
      <Navigation />
      <div className='max-content'>
        <div className='breadcrumb'>
          <Link className='webshop-crumb' to='/webshop'>
            Webshop <ArrowLeftIcon width='30px' />
          </Link>
          <p className='active-crumb'>Kurv</p>
        </div>
        <div className='basket-container'>
          <div className='product-column'>
            {empty ? (
              <h1>Du har ikke tilføjet til kurv endnu</h1>
            ) : (
              <>
                {basket?.map((product) => {
                  const productFind = products.find(
                    (e) => e.id === product.product
                  );
                  let pricetot = Math.floor(
                    parseFloat(product.qauntity) *
                      parseFloat(productFind?.data().productPrice)
                  );
                  console.log(pricetot);
                  // setTotalprice((prev) => prev + pricetot);
                  return (
                    <div className='product-container'>
                      <div className='image-container'>
                        <img
                          alt={productFind?.data().productName}
                          src={productFind?.data().imagePath}
                          height={'205px'}
                        />
                      </div>
                      <div>
                        <div className='delete-product'>
                          <TrashIcon
                            onClick={(e) => removeItem(product.product)}
                            width='40px'
                            height='40px'
                            fill='white'
                          />
                        </div>
                        <h4>{productFind?.data().productName}</h4>
                        <h5>
                          {parseFloat(productFind?.data().productPrice)} DKK
                        </h5>
                        <div className='number-of-product'>
                          <p>Antal: {product.qauntity}</p>
                          <input
                            type='number'
                            onClick={(e) =>
                              handleChangeInput(e, product?.product)
                            }
                            onChange={(e) =>
                              handleChangeInput(e, product?.product)
                            }
                            defaultValue={product?.qauntity}
                            min={1}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <div className='total-column'>
            <h2>Oversigt</h2>
            <div className='total-price'>
              <h5>Subtotal</h5>
              <h5> {totalprice + ' DKK'}</h5>
            </div>
            <div className='delivery'>
              <h5>Levering</h5>
              <h5>Beregnes i checkout</h5>
            </div>
            <div className='add-discount'>
              <div>
                <label className='discount'>Rabatkode</label>
                <input type='text' />
              </div>
              <div className='add-discount-btn'>
                <SecondaryButton text='Tilføj' />
              </div>
            </div>
            <div className='delivery'>
              <h3>Total eksl. levering</h3>
              <h3>{totalprice + ' DKK'}</h3>
            </div>
            <p>Inkl. moms</p>
            <div className='checkout-btn'>
              <PrimaryButton
                text='Checkout'
                onClick={handleCheckOut}
                disabled={empty}
              />
            </div>
          </div>
        </div>
      </div>
      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
