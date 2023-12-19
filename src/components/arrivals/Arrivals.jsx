import Cards from '../card/Cards';
import cat01Img from './../../img/categories/cat-01.jpg';
import cat02Img from './../../img/categories/cat-02.jpg';
import cat03Img from './../../img/categories/cat-03.jpg';
import './arrivals.css';

const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className='container'>
                <div className='arrivals__header'>
                    <h2 className='title-2'>new arrivals</h2>
                </div>
                <div className='arrivals__cards'>
                    <Cards title='Hoodies & Sweetshirt' cardImg={cat01Img} />
                    <Cards title='Coats & Parkas' cardImg={cat02Img} />
                    <Cards title='Tees & T-Shirt' cardImg={cat03Img} />
                </div>
            </div>
        </section>
    );
};

export default Arrivals;
