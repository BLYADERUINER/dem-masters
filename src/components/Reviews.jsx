import { reviewsList } from "../utils/reviews-list";

// Компонент Отзывы
function Reviews () {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы клиентов</h2>
      <div className="reviews__container">
        {
          reviewsList.map((item) => {
            return(
              <div className="reviews__item" key={item.id}>
                <h3 className="reviews__name">{item.name}</h3>
                <p className="reviews__text">{item.review}</p>
                <p className="reviews__date">{item.date}</p>
                <div className="reviews__rating">
                  <img src="./favorite.png" width={16} height={16} alt="star" />
                  <img src="./favorite.png" width={16} height={16} alt="star" />
                  <img src="./favorite.png" width={16} height={16} alt="star" />
                  <img src="./favorite.png" width={16} height={16} alt="star" />
                  <img src="./favorite.png" width={16} height={16} alt="star" />
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

export default Reviews;
