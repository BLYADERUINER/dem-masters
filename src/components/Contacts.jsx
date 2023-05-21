import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

// Компонент контактов
function Contacts () {
  return(
    <section className="contacts">
      <h2 className='contacts__title'>Связаться с нами</h2>
      <div className='contacts__container'>
        <form
          className='contacts__form'
          onSubmit={(evt) => {
            evt.preventDefault();
            alert('Мы с вами свяжемся!');
          }}
        >
          <h3 className='contacts__text'>Отправить свои контакты</h3>
          <input className='contacts__input' placeholder='Ваше имя' type='text'  />
          <input className='contacts__input' placeholder='Номер телефона' type='text' />
          <input className='contacts__input' placeholder='Электронная почта' type='email' />
          <p className='contacts__info'>
            <input className='contacts__radio' type='checkbox' />
            Отправляя свои контакты, Вы разрешаете сбор и обработку персональных данных.
          </p>
          <button className='contacts__button' type='submit'>Отправить</button>
        </form>
        <YMaps>
          {/* Карта, ее координаты и зум карты */}
          <Map className='contacts__map' defaultState={{ center: [53.213, 50.217], zoom: 15 }}>
            {/* Метка на карте и ее координаты */}
            <Placemark defaultGeometry={[53.213, 50.216]} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
}

export default Contacts;
