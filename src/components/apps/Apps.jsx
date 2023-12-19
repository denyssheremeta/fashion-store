import './apps.css';
import appStore from './../../img/icons/app-store.png';
import googlePlay from './../../img/icons/google-play.png';
import voucher from './../../img/images/vouchers-img.png';

const Apps = () => {
    return (
        <section className='apps'>
            <div className='container'>
                <div className='apps__content'>
                    <div className='apps__desc'>
                        <h2 className='apps__header'>DOWNLOAD APP & GET THE VOUCHER!</h2>
                        <p className='apps__text'>Get 30% off for first transaction using Rondovision mobile app for now.</p>
                        <div className='apps__btn'>
                            <a href='#!'>
                                <img src={appStore} alt='app store' />
                            </a>
                            <a href='#!'>
                                <img src={googlePlay} alt='google play' />
                            </a>
                        </div>
                    </div>
                    <div className='apps__img'>
                        <img src={voucher} alt='voucher image' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apps;
