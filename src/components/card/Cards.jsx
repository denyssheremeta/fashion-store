import './cards.css';
import arrowImg from './../../img/icons/arrow.svg';

const Cards = (props) => {
    console.log(props);
    return (
        <div className='card'>
            <a href='#!' className='card__link'></a>
            <img src={props.cardImg} className='card__img' alt='cat-01' />
            <div className='card__desc'>
                <div className='card__text'>
                    <h2>{props.title}</h2>
                    <span>Explore Now!</span>
                </div>
                <div className='card__icon'>
                    <img src={arrowImg} alt='arrow' />
                </div>
            </div>
        </div>
    );
};

export default Cards;
