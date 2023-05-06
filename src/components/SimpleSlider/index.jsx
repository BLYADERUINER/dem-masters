import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import images from "./images";

function SimpleSlider() {
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
      <span className="slider__span" />
      <Slider {...settings}>
        {images.map((img, index) => <img key={index} src={img.link} alt='Фото примера наших работ' />)}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
