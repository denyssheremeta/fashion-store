import './brands.css';
import amazon from './../../img/brands/Amazon.png';
import hm from './../../img/brands/HM.png';
import lacoste from './../../img/brands/Lacoste.png';
import levis from './../../img/brands/Levis.png';
import obey from './../../img/brands/Obey.png';
import shopify from './../../img/brands/Shopify.png';

const Brands = () => {
    return (
        <section className='brands'>
            <div className='container'>
                <ul className='brands__list'>
                    <li>
                        <img src={hm} alt='HM' />
                    </li>
                    <li>
                        <img src={obey} alt='Obey' />
                    </li>
                    <li>
                        <img src={shopify} alt='Shopify' />
                    </li>
                    <li>
                        <img src={lacoste} alt='Lacoste' />
                    </li>
                    <li>
                        <img src={levis} alt='Levis' />
                    </li>
                    <li>
                        <img src={amazon} alt='Amazon' />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Brands;
