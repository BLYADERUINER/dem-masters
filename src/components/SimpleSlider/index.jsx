import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import images from "./images";

// Компонент слайдера
function SimpleSlider() {
  // Настройка слайдера
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <h2 className="slider__title">Примеры наших работ</h2>
      <Slider {...settings}>
        {images.map((img, index) => <img key={index} src={img.link} alt='Фото примера наших работ' />)}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
