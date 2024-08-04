import Button from '../../components/Button/Button';
import './Login.css'

const Login: React.FC = () => {
    return (
        <div className='login'>
            <div className='login__logo'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
            </div>
            <div className="login__right">
                <div className='login__signin'>
                    <h1>Happening now</h1>
                    <h2>Join today.</h2>
                    <div className="login__signin__cluster">
                        <Button variant='accent'>Create account</Button>
                        <p>By signing up, you agree to the <a href='https://x.com/en/tos'>Terms of Service</a> and <a href='https://x.com/en/privacy'>Privacy Policy</a>, including <a href='https://help.x.com/en/rules-and-policies/x-cookies'>Cookie Use</a>.</p>
                        <h3>Already have an account?</h3>
                        <Button variant='outlined'>Sign in</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
