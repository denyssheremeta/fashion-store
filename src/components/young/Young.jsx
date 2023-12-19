import Cards from '../card/Cards';
import './young.css';
import promo01 from './../../img/images/promo-01.jpg';
import promo02 from './../../img/images/promo-02.jpg';

const Young = () => {
    return (
        <section className='young'>
            <div className='container'>
                <div className='young__header'>
                    <h2 className='title-2'>Young’s Favourite</h2>
                </div>
                <div className='young__cards'>
                    <Cards title='Trending on instagram' cardImg={promo01}/>
                    <Cards title='All Under $40' cardImg={promo02}/>
                </div>
            </div>
        </section>
    );
};

export default Young;
