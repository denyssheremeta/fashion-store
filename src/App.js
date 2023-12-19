import Apps from './components/apps/Apps';
import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Email from './components/email/Email';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Payday from './components/payday/Payday';
import Promo from './components/promo/Promo';
import Young from './components/young/Young';

function App() {
    return (
        <div className='App'>
            <Header />
            <Promo />
            <Brands />
            <Arrivals />
            <Payday />
            <Young />
            <Apps />
            <Email />
            <Footer />
        </div>
    );
}

export default App;