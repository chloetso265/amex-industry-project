import header_img from '../../assets/screenshots/login-header.jpg'
import footer_img from '../../assets/screenshots/login-footer.jpg'
import './Login.scss'

function Login({handleClick}) {

    return (

        <div className="login-page">
            <img src={header_img} alt="header" className="login-page__header" />
            <form action="" className="login-page__form" >
                <h1 className="login-page__heading">Log In to My Account</h1>
                <label htmlFor="user" className="login-page__label">USER ID</label>
                <input type="text" name='user' className='login-page__input' />
                <label htmlFor="password" className="login-page__label">PASSWORD</label>
                <input type="text" name='password' className='login-page__input'/>
                <select name="select" className='login-page__input'>
                    <option value="">Cards and Banking</option>
                </select>
                <div className="login-page__remember">
                    <input type="checkbox" name='remember' />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className="login-page__button" onClick={()=>{handleClick()}}>LOGIN</button>
                <p className="login-page__blue">Forgot User ID or Password?</p>
                <p className="login-page__blue">Create New Online Account</p>
                <p className="login-page__blue">Confirm Card Received</p>
                <p className="login-page__blue">Visit Our Security Center</p>
            </form>
            <img src={footer_img} alt="footer" className="login-page__footer" />
        </div>
    )

}

export default Login;