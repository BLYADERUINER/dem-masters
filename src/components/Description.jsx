// Компонент Description
function Description() {
  return (
    <section className="description">
      <div className="description__container">
        <h1 className="description__title">
          Добро пожаловать в&nbsp;ООО &laquo;Dem-Masters&raquo;
        </h1>
        <p className="description__paragraph">
          Компания Dem-Masters является надежным партнером в&nbsp;сфере
          ликвидации объектов промышленного и&nbsp;гражданского строительства.
        </p>
        <p className="description__paragraph">
          Мы&nbsp;ликвидируем самые сложные и&nbsp;нестандартные проекты для
          реализации новых проектов бизнеса и&nbsp;государственных структур,
          с&nbsp;уверенностью в&nbsp;их&nbsp;успешном выполнении!
        </p>
        <button className="description__button">узнать больше</button>
      </div>
      <img
        className="description__image"
        src="./description.jpg"
        alt="Фото о компании"
      />
    </section>
  );
}

export default Description;
