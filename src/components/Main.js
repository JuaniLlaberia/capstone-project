import React from 'react'
import Screen from './Screen'
import './Main.css';
import { Link } from 'react-router-dom';
import Dish from './Dish';
import dish2 from '../img/dish2.svg'
import Testimonies from './Testimonies';

const specialDishes = [
  {
    name:'Greek Salad',
    price:'$12.95',
    description:'Traditional salad greek salad.',
    img: require('../img/dish1.jpg')
  },
  {
    name:'Bruschetta',
    price:'$8.95',
    description:'Fresh and tasty.',
    img: dish2
  },
  {
    name:'Lemon Mousse',
    price:'$5.00',
    description:'Explotion of flavours.',
    img: require('../img/dish3.jpg')
  }
];

const dishes = specialDishes.map((dish, i) => {
  return <Dish imgSrc={dish.img} name={dish.name} description={dish.description} price={dish.price}/>
})

export default function Main() {

  return (
    <main>
      <Screen  color='#495E57' id='main' height='60vh'>
        <div className='info-header'>
          <h2>Little Lemon</h2>
          <h6>Chicago, Illinois</h6>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...
          </p>
          <Link to='/reservations' className='btn-book-head' aria-label="On Click">Book Now</Link>
        </div>
        <div className='img-header'>
          <img src={require('../img/restauranfood.jpg')} className='imgage-hed' alt='dish'/>
        </div>
      </Screen>
      <Screen color='#495E57' id='aboutus-section' height='60vh'>
        <div className='image-container'>
          <img className='img-history hist1' src={require('../img/history1.jpg')} alt='two chefs talking'/>
          <img className='img-history hist2' src={require('../img/history2.jpg')} alt='one chef preparing a salad'/>
        </div>
        <div className='history'>
          <h3>About Us</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </Screen>
      <Screen color='#495E57' id='menu-section' height={window.innerWidth < 900 ? '155vh' : '60vh'}>
        <div className='specials-head'>
          <h3 className='specials'>This Week Specials</h3>
          <Link to='/' className='specials-btn'>See Menu</Link>
        </div>
        <div className='dishes'>
          {dishes}
        </div>
      </Screen>
      <Screen color='#495E57' id='testimonial-section' height={window.innerWidth < 900 ? '250vh' : '60vh'}>
        <div className='title-testimony'>Client's Reviews</div>
          <Testimonies row={window.innerWidth < 900 ? false  : true} />
      </Screen>
    </main>
  )
}
