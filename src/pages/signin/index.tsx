import '../../index.css';
import './index.css';

export const SignInPage = () => {
    return (
        <div className="background">
            <div className="background-container img-container">
                <div className="background-overlay">
                    <div className="box">
                        <div className="box-title">
                            <h1>Login to your account</h1>
                            <p>Enter your email below to login to your account.</p>
                        </div>

                        <form action="">
                            <div className="inputs">
                                <label htmlFor="email">Email</label>
                                <input id='email' type="email" placeholder="john@example.com" />
                            </div>

                            <div className="inputs">
                                <label htmlFor="password">Password</label>
                                <input id='password' type="password" placeholder="****" />
                            </div>

                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}