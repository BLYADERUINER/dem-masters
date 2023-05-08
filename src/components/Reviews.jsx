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
              <div className="reviews__item" key={item.id} id="review">
                <h3 className="reviews__name">{item.name}</h3>
                <p className="reviews__text">{item.review}</p>
                <p className="reviews__date">{item.date}</p>
                <div className="reviews__rating">
                  <img className="reviews__star" src="./favorite.png" alt="star" />
                  <img className="reviews__star" src="./favorite.png" alt="star" />
                  <img className="reviews__star" src="./favorite.png" alt="star" />
                  <img className="reviews__star" src="./favorite.png" alt="star" />
                  <img className="reviews__star" src="./favorite.png" alt="star" />
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
