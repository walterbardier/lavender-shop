import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  FiTag,
  FiPercent,
  FiPackage,
  FiSend,
  FiStar,
  FiAward,
  FiZap,
  FiTrendingUp,
  FiHeart,
  FiBookmark
} from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "./Home.css";

export default function Home() {
  const swiperRef = useRef(null);

  useEffect(() => {
    
  }, []);

  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero-landing">
        <div className="hero-left">
          <h1>
            NEW <br />
            COLLECTION
          </h1>

          <div className="hero-product">
            <div className="product-image">
              <div className="product-image-inner">
                <img src="../images/hero1.png" alt="" />
              </div>
            </div>

            <div className="product-info">
              <h3>DISCOVER YOUR STYLE</h3>
              <p>
                Minimal garments designed for everyday comfort,
                premium fabrics and timeless aesthetics.
              </p>

              <Link to="/shop" className="hero-button">
                View Collection →
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="../images/model.png" alt="Model" />
        </div>
      </section>


      <section className="product-showcase">

        {/* HEADER */}
        <div className="ps-header">
          <div>
            <h2>Recommended
              <br/>
              Products</h2>
            <p>Carefully selected essentials for your daily routine</p>
          </div>

          <Link to="/shop" className="ps-viewall">
            View All
          </Link>
      
        </div>

        {/* PRODUCTS GRID */}
        <div className="ps-grid">

          {/* CARD LEFT 1 */}
          <div className="ps-feature-card">
            <img src="/images/collec2.png" alt="" />
            <div className="ps-badge primary"><FiTag/> Featured</div>
          </div>

          {/* CARD RIGH 1 */}
          <div className="ps-card">

            <div className="ps-card-top">
              <img src="../images/product1.png" alt="Lavender Button-Down Shirt" />
            </div>

            <div className="ps-card-bottom">
              <h3>Lavender Button-Down Shirt</h3>
              <span>$72.00</span>
            </div>

          </div>

          {/* CARD RIGHT 2 */}
          <div className="ps-card">

            <div className="ps-card-top">
              <img src="../images/product2.png" alt="Lavender Button-Down Shirt" />
            </div>

            <div className="ps-card-bottom">
              <h3>Lavender Jeans</h3>
              <span>$32.00</span>
            </div>

          </div>

          {/* CARD RIGH 3 */}
          <div className="ps-card">

            <div className="ps-card-top">
              <img src="../images/product3.png" alt="Lavender Button-Down Shirt" />
            </div>

            <div className="ps-card-bottom">
              <h3>Elegant Lavender Shoes</h3>
              <span>$72.00</span>
            </div>

          </div>

        </div>

        {/* CLOTHING COLLECTION SECTION */}
        <div className="clothing-section">

          <div className="ps-header">
            <div>
              <h2>LORA Essentials</h2>
              <p>Timeless pieces crafted for comfort and mindful living</p>
            </div>

            <Link to="/shop" className="ps-viewall">
              View Collection
            </Link>
          </div>

          <div className="formula-grid">

            <div className="formula-card">
              
              <img src="/images/collection1.png" alt="Lavender Linen-Blend Shirt" />
              <span className="tag">Lavender Linen-Blend Shirt</span>
            
            </div>

            <div className="formula-card text">

              <div className="formula-card">
                <img src="/images/collection2.png" alt="Lavender Signature Jeans" />
              </div>

              <p>
                Embrace tranquility with our lavender-toned collection. 
                Designed for those who seek the perfect balance between 
                minimalist elegance and everyday ease.
              </p>

            </div>

            {/* EMAIL CTA */}
            <div className="email-cta">
              <input
                type="email"
                placeholder="Join the waitlist for early access"
              />

              <button className="email-submit">
                <FiSend/>
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* SWIPER */}
      <div className="swiper-wrapper-custom">

        {/* NAV */}
        <div className="swiper-nav">
          <button
            className="nav-btn prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ←
          </button>

          <button
            className="nav-btn next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            →
          </button>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >

          {/* SLIDE 1 */}
          <SwiperSlide>
            <section className="slide">

              <img
                src="/images/collection1.png"
                className="slide-image"
              />

              <div className="slide-content">
                <div className="hero-copy">
                  <span className="tag">New Season</span>
                  <h22>New Collection</h22>
                  <p>Premium essentials designed for everyday comfort.</p>

                  <Link to="/shop" className="cta-btn">
                    Shop Now →
                  </Link>
                </div>

                <div className="hero-glass">
                  <div className="hero-glass-icon">
                    <FiPackage /> 
                  </div>

                  <h3>Lavender Collection</h3>
                  <p><FiPercent /> Up to 21% off selected items</p>
                  <span><FiTag /> Limited time only</span>
                </div>
              </div>
              
            </section>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <section className="slide">

              <img
                src="/images/collection2.png"
                className="slide-image"
              />

              <div className="slide-content">

                <div className="hero-copy">
                  <span className="tag">Discounts</span>
                  <h22>Summer Sale</h22>
                  <p>Minimal pieces with maximum style.</p>

                  <Link to="/shop" className="cta-btn">
                    Explore →
                  </Link>
                </div>

                <div className="hero-glass">
                  <div className="hero-glass-icon">
                    <FiPercent />
                  </div>

                  <h3>-25% Off</h3>
                  <p>On sunglasses & T-shirts</p>
                  <span><FiTag /> Ends soon</span>
                </div>

              </div>
            </section>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <section className="slide">

              <img
                src="/images/collection3.png"
                className="slide-image"
              />

              <div className="slide-content">

                <div className="hero-copy">
                  <span className="tag">Essentials</span>
                  <h22>Everyday Wear</h22>
                  <p>Soft fabrics, clean silhouettes.</p>

                  <Link to="/shop" className="cta-btn">
                    Discover →
                  </Link>
                </div>

                <div className="hero-glass">
                  <div className="hero-glass-icon">
                    <FiPackage />
                  </div>

                  <h3>New Drop</h3>
                  <p>Basic essentials collection</p>
                  <span><FiTag /> Just arrived</span>
                </div>

              </div>
            </section>
          </SwiperSlide>

        </Swiper>
      </div>

      {/* INFO SECTION */}
      <div className="info-section">
        <div className="shipping-text">
          <h3>Nationwide Shipping</h3>
          <p>
            We deliver to every corner of the country. Fast, reliable, and secure shipping on all orders.
          </p>
        </div>

        <div className="cards-container">
          <div className="info-card">
            <div className="icon">🚚</div>
            <h4>Free Shipping</h4>
            <p>On orders over $50</p>
          </div>

          <div className="info-card">
            <div className="icon">🔒</div>
            <h4>Secure Payment</h4>
            <p>100% protected checkout</p>
          </div>

          <div className="info-card">
            <div className="icon">💬</div>
            <h4>24/7 Support</h4>
            <p>Always here to help</p>
          </div>
        </div>

        <button className="buy-button">
          Buy Now <span className="arrow">→</span>
        </button>
      </div>

    </div>
  );
}