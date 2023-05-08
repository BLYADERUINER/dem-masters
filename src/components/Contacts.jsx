import { YMaps, Map } from '@pbe/react-yandex-maps';

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
          <Map className='contacts__map' defaultState={{ center: [53.212, 50.217], zoom: 15 }} />
        </YMaps>
      </div>
    </section>
  );
}



export default Contacts;
