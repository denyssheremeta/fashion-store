import './email.css';

const Email = () => {
    return (
        <section className='email'>
            <div className='container'>
                <div className='email__content'>
                    <h2 className='email__header'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
                    <p className='email__text'>Type your email down below and be young wild generation</p>
                    <form action='#!' className='email__form'>
                        <input type='mail' className='email__form-input' name='email' defaultValue='Add your email here' />
                        <button type='submit' className='email__form-btn'>
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Email;
