import React from 'react';

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, sethasAccount, emailError, passwordError} = props;
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button className="btn_button" onClick={handleLogin}>Sign In</button>
                        <p>Don't have any account? <span onClick={() => sethasAccount(!hasAccount)}>Sign Up</span></p>
                        </>

                    ) : (
                        <>
                        <button className="btn_button" onClick={handleSignup}>Sign UP</button>
                        <p>Have an account ? <span onClick={() => sethasAccount(!hasAccount)}>Sign In</span></p>
                        </>

                    )}
                </div>
            </div>
        </section>
    );
};

export default Login;