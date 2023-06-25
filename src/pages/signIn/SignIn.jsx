import { socialLogo } from "../../assest";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useGoogleLogin } from '@react-oauth/google';

const SignIn = () => {

  const navigate = useNavigate();

  // add google auth only show purpose
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse)
      navigate('/dashboard');
    },
  });

  return (
    <div className="auth flex">
      {/* left section */}
      <section className="auth__left">
        <p className="auth__lefth">Board.</p>
      </section>
      {/* End left section */}

      {/* right section */}
      <section className="auth__right flex">
        <div className="auth__rightwrapper">
          <h1 className="auth__title">Sign In</h1>

          <p className="auth__subhead">Sign in to your account</p>

          {/* auth ways */}
          <div className="auth__ways flex">
            <div className="auth__social flex" onClick={() => login()}>
              <img src={socialLogo.google} alt="google" />
              Sign in with Google
            </div>
            <div className="auth__social flex">
              <img src={socialLogo.apple} alt="apple" />
              Sign in with Apple
            </div>
          </div>
          {/* End auth ways */}

          {/* auth form */}
          <div className="auth__form flex">
            <div className="auth__inp">
              <label htmlFor="email" className="auth__lable">
                Email address
              </label>
              <input type="email" name="email" id="email" className="auth__i" />
            </div>

            <div className="auth__inp">
              <label htmlFor="password" className="auth__lable">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="auth__i"
              />
            </div>

            <p className="auth__link">Forgot password?</p>

            <button className="auth__btn">
              <a href="/dashboard">Sign In</a>
            </button>
          </div>
          {/* End auth form */}

          <p className="auth__acc">
            Don`t have an account?{" "}
            <span className="auth__link">Register here</span>
          </p>
        </div>
      </section>
      {/* End right section */}
    </div>
  );
};

export default SignIn;
