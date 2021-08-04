import React from 'react';
import './Home.css';
import Product from './Product';
import "./bootstrap.css"
function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_Prime_Day_2021_858-USEN_D_PDS-HP-Tall-Hero_3000x1200._CB667795178_.jpg"
          alt=""
        />
          
        <div className="home__row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
            <Product
            id="12321341"
            title="Marshall Woburn II Wireless ..."
            price={674}
            rating={5}
            image="https://m.media-amazon.com/images/I/51LVlR42WTL._AC_SY161_.jpg"
          />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
            <Product
            id="49538094"
            title="Epic Racing Professional ..."
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
            <Product
            id="49538094"
            title="SAMSUNG Galaxy Watch Active.."
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51QYH9ttqfL._AC_UL400_SR254,400_.jpg"
          />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
            <Product
            id="49538094"
            title="Google Nest Thermostat ..."
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/311vTzGJpFL._AC_SY161_.jpg"
          />
            </div>
          </div>
        </div>
        </div>




        <div className="home__row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
          />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
            <Product
            id="49538094"
            title="SAMSUNG Galaxy Watch Active 2 ..."
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51QYH9ttqfL._AC_UL400_SR254,400_.jpg"
          />
            </div>
          </div>
        </div>
        </div>





        <div className="home__row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
            <Product
            id="90829332"
            title="ASUS ZenBook Flip S 13 Ultra Slim Laptop, 13.3” 4K UHD OLED Touch Display, Intel Core i7-1165G7 CPU, Intel Iris Xe, 16GB RAM, 1TB SSD"
            price={1497.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41b91Yq-vaS._AC_SY161_.jpg"
          />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
            <Product
            id="90829332"
            title="Samsung Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Mobile Gaming Smartphone Long-Lasting Battery, Mystic Black"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41qzRa85DUL._AC_SY161_.jpg"
          />
            </div>
          </div>
        </div>
        </div> 
          

          
          
        
        <div className="home__row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Product
            id="903850"
            title="Arlo Pro 4 Spotlight Camera - 3 Pack - Wireless Security, 2K Video ..,"
            price={499.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/31yqygTyUZS._AC_SY161_.jpg"
          />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Product
            id="8903851"
            title="Bose Noise Cancelling Headphones 700 — Over Ear, Wireless Bluetooth ..."
            price={329.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/31DQ1NOBi4L._AC_SY161_.jpg"
          />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
            <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
