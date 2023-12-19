import './footer.css';
import fb from './../../img/socials/fb.svg';
import inst from './../../img/socials/inst.svg';
import ln from './../../img/socials/ln.svg';
import tw from './../../img/socials/tw.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__content'>
                    <div className='footer__social'>
                        <h2>FASHION</h2>
                        <p>Complete your style with awesome clothes from us.</p>
                        <ul>
                            <li>
                                <a href='#!'>
                                    <img src={fb} alt='facebook' />
                                </a>
                            </li>
                            <li>
                                <a href='#!'>
                                    <img src={inst} alt='instagram' />
                                </a>
                            </li>
                            <li>
                                <a href='#!'>
                                    <img src={tw} alt='twitter' />
                                </a>
                            </li>
                            <li>
                                <a href='#!'>
                                    <img src={ln} alt='linkedin' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__menu'>
                        <div className='footer__menu-company'>
                            <ul className='list'>
                                <li className='footer__menu-header'><a href="#!">Company</a></li>
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Contact us</a></li>
                                <li><a href="#!">Support</a></li>
                                <li><a href="#!">Careers</a></li>
                            </ul>
                        </div>
                        <div className='footer__menu-link'>
                            <ul>
                                <li className='footer__menu-header'><a href="#!">Quick Link</a></li>
                                <li><a href="#!">Share Location</a></li>
                                <li><a href="#!">Orders Tracking</a></li>
                                <li><a href="#!">Size Guide</a></li>
                                <li><a href="#!">FAQs</a></li>
                            </ul>
                        </div>
                        <div className='footer__menu-legal'>
                            <ul>
                                <li className='footer__menu-header'><a href="#!">Legal</a></li>
                                <li><a href="#!">Terms & conditions</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
