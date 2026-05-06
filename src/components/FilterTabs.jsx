import { useEffect, useRef, useState } from "react";
import {
  FiGrid,
  FiStar,
  FiTag
} from "react-icons/fi";

import { GiTShirt, GiTrousers } from "react-icons/gi";
import { TbSunglasses } from "react-icons/tb";

import "./FilterTabs.css";

export default function FilterTabs({ selected, setSelected }) {

  const iconSize = 22;

  const filters = [
    { name: "All", icon: <FiGrid size={iconSize} /> },
    { name: "New", icon: <FiStar size={iconSize} /> },
    { name: "Promotions", icon: <FiTag size={iconSize} /> },
    { name: "T-shirts", icon: <GiTShirt size={iconSize} /> },
    { name: "Jeans", icon: <GiTrousers size={iconSize} /> },
    { name: "Sunglasses", icon: <TbSunglasses size={iconSize} /> }
  ];

  const containerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});
  const [prevLeft, setPrevLeft] = useState(0);

  useEffect(() => {
    const activeIndex = filters.findIndex(f => f.name === selected);
    const container = containerRef.current;
    const activeBtn = container.children[activeIndex];

    if (activeBtn) {
      const newLeft = activeBtn.offsetLeft;
      const newWidth = activeBtn.offsetWidth;

      const distance = Math.abs(newLeft - prevLeft);

      setSliderStyle({
        width: `${newWidth + distance * 0.15}px`,
        transform: `translateX(${newLeft}px)`
      });

      setTimeout(() => {
        setSliderStyle({
          width: `${newWidth}px`,
          transform: `translateX(${newLeft}px)`
        });
      }, 180);

      setPrevLeft(newLeft);
    }
  }, [selected]);

  return (
    <div className="tabs" ref={containerRef}>
      {filters.map((filter) => (
        <button
          key={filter.name}
          className={`tab ${selected === filter.name ? "active" : ""}`}
          onClick={() => setSelected(filter.name)}
          aria-label={filter.name}
          title={filter.name}
        >
          {filter.icon}
        </button>
      ))}

      <div className="slider" style={sliderStyle} />
    </div>
  );
}