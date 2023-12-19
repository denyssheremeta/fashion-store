import './payday.css';
import paydayImg from './../../img/images/promo-img.jpg';

const Payday = () => {
    return (
        <section className='payday'>
            <div className='container'>
                <div className='payday__content'>
                    <div className='payday__img'>
                        <img src={paydayImg} alt='promo image' />
                    </div>
                    <div className='payday__text'>
                        <h2 className='payday__title'>
                            <span>PAYDAY</span><br/>SALE NOW
                        </h2>
                        <p className='payday__desc'>Spend minimal $100 get 30% off voucher code for your next purchase</p>
                        <p className='payday__date'>1 June - 10 June 2021</p>
                        <p className='payday__terms'>*Terms & Conditions apply</p>
                        <button className='payday__btn-wrapper'>
                            <a href='#!' className='payday__btn'>
                                shop now
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payday;
