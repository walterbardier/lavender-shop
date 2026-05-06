import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Home.css";

export default function Home() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide) => {
      slide.addEventListener("mousemove", (e) => {
        const text = slide.querySelector("h2");
        const rect = slide.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        text.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
      });

      slide.addEventListener("mouseleave", () => {
        const text = slide.querySelector("h2");
        text.style.transform = "translate(0,0)";
      });
    });

    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        circle.style.width = circle.style.height = `${size}px`;
        circle.style.left = `${e.clientX - rect.left - size / 2}px`;
        circle.style.top = `${e.clientY - rect.top - size / 2}px`;

        button.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
      });
    });
  }, []);

  return (
    <div className="home-container">

      <div className="swiper-wrapper-custom">

        {/* CUSTOM NAV */}
        <button
          className="nav-btn left"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="prev"
        >
          ‹
        </button>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide slide1">
              <img src="/images/collection.png" alt="New Collection" />
              <h2>New Collection</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide slide2">
              <img src="/images/discounts.png" alt="Summer Discounts" />
              <h2>Summer Discounts</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide slide3">
              <img src="/images/drops.png" alt="Exclusive Drops" />
              <h2>Exclusive Drops</h2>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* CUSTOM NAV */}
        <button
          className="nav-btn right"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="next"
        >
          ›
        </button>

      </div>

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

      <div className="why-choose-section">
        <h3>Why Choose Lavender Shop?</h3>
        <p>
          We bring you carefully curated, minimalist fashion that combines style, quality, and sustainability.
        </p>
        <button className="explore-button">Explore Collection</button>
      </div>

    </div>
  );
}