import classnames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginService } from '~/services/authService';
import { EyeBlockIcon, EyeIcon } from '~/components/Icon';
import Input from '~/components/Input';
import styles from './LoginPage.module.css';
const cx = classnames.bind(styles);

function LoginPage() {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [verifyEmailValue, setVerifyEmailValue] = useState(false);
    const [verifyPasswordValue, setVerifyPasswordValue] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailFieldRef = useRef(null);
    const passwordFieldRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!verifyEmailValue) {
            let inputEmail = emailFieldRef.current.querySelector('#input-email');
            let elementError = emailFieldRef.current.querySelector(`.${cx('message-error')}`);

            inputEmail.classList.add('error');
            elementError.innerText = 'Không được để trống trường này!';
        }

        if (!verifyPasswordValue) {
            let inputPassword = passwordFieldRef.current.querySelector('#input-password');
            let elementError = passwordFieldRef.current.querySelector(`.${cx('message-error')}`);

            inputPassword.classList.add('error');
            elementError.innerText = 'Không được để trống trường này!';
        }

        if (verifyEmailValue && verifyPasswordValue) {
            const user = {
                email: emailValue,
                password: passwordValue,
            };
            const login = await loginService(user, dispatch, navigate);
            let inputPassword = passwordFieldRef.current.querySelector('#input-password');
            let elementError = passwordFieldRef.current.querySelector(`.${cx('message-error')}`);
            inputPassword.classList.add('error');
            elementError.innerText = login;
        } else console.log('submit failed');
    }
    function handleValidationEmail(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;

        if (!value.length) {
            setVerifyEmailValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Không được để trống trường này!';
            return;
        }

        let regx = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}\.*[a-z]*$/;
        if (regx.test(value)) {
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
            setVerifyEmailValue(true);
        } else {
            setVerifyEmailValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Email không hợp lệ!';
        }
    }
    function handleOnChangeEmail(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;
        const regx = /^[A-Za-z0-9]/; // using match first character;
        if (value.length && !regx.test(value)) {
            e.target.value = '';
            return;
        } else {
            setEmailValue(value);
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
        }
    }
    function handleOnFocus(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        e.target.classList.remove(cx('error'));
        elementError.innerText = ' ';
    }
    function handleChangePassword(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;
        const regx = /^[A-Za-z0-9]/; // using match first character;
        if (value.length && !regx.test(value)) {
            e.target.value = '';
            return;
        } else {
            setPasswordValue(value);
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
        }
    }
    function handleValidationPassword(e) {
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains('form-group')) {
            elementParent = elementParent.parentNode;
        }
        let elementError = elementParent.querySelector(`.${cx('message-error')}`);
        let value = e.target.value;

        if (!value.length) {
            setVerifyPasswordValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Không được để trống trường này!';
            return;
        }

        if (value.length < 8) {
            setVerifyPasswordValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Độ dài của password phải lớn hơn 8 ký tự!';
            return;
        }

        let regx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]).{8,}$/;

        if (regx.test(value)) {
            setVerifyPasswordValue(true);
            e.target.classList.remove(cx('error'));
            elementError.innerText = ' ';
        } else {
            setVerifyPasswordValue(false);
            e.target.classList.add(cx('error'));
            elementError.innerText = 'Password phải bao gồm 1 ký tự viết hoa, viết thường và 1 ký tự đặc biệt!';
        }
    }
    function handleShowPassWord(e) {
        e.stopPropagation();
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains(cx('form-group'))) {
            elementParent = elementParent.parentNode;
        }
        let elementShowPassword = elementParent.querySelector(`.${cx('form-login-icon-show')}`);
        let inputPassword = elementParent.querySelector('#input-password');
        inputPassword.type = 'text';
        e.target.classList.add(cx('hidden'));
        elementShowPassword.classList.remove(cx('hidden'));
    }
    function handleHiddenPassWord(e) {
        e.stopPropagation();
        let elementParent = e.target.parentNode;
        while (!elementParent.classList.contains(cx('form-group'))) {
            elementParent = elementParent.parentNode;
        }
        let elementHiddenPassword = elementParent.querySelector(`.${cx('form-login-icon-hidden')}`);
        let inputPassword = elementParent.querySelector('#input-password');
        inputPassword.type = 'password';
        e.target.classList.add(cx('hidden'));
        elementHiddenPassword.classList.remove(cx('hidden'));
    }

    return (
        <div className={cx('login')}>
            <div className={cx('overlay')}></div>
            <form className={cx('form-login', 'form')} onSubmit={handleSubmit}>
                <span className={cx('logo-nike')}>
                    <svg
                        aria-hidden="true"
                        className="pre-logo-svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="24px"
                        height="24px"
                        fill="none"
                    >
                        <path
                            fill="currentColor"
                            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                        ></path>
                    </svg>
                </span>
                <h2 className={cx('login-title')}>Login</h2>
                <div className={cx('form-group')} ref={emailFieldRef}>
                    <Input
                        name="email"
                        placeholder="Email address"
                        value={emailValue}
                        id="input-email"
                        type="text"
                        classNameAdd={cx('form-login-control', 'input-email')}
                        onBlur={handleValidationEmail}
                        onFocus={handleOnFocus}
                        onChange={handleOnChangeEmail}
                    />
                    <span className={cx('message-error')}></span>
                </div>
                <div className={cx('form-group')} ref={passwordFieldRef}>
                    <Input
                        name="password"
                        placeholder="Password"
                        value={passwordValue}
                        id="input-password"
                        type="password"
                        classNameAdd={cx('form-login-control')}
                        onChange={handleChangePassword}
                        onFocus={handleOnFocus}
                        onBlur={handleValidationPassword}
                    />
                    <EyeBlockIcon
                        className={cx('form-login-icon', 'form-login-icon-hidden', 'show')}
                        onClick={handleShowPassWord}
                        width="16px"
                        height="16px"
                    />
                    <EyeIcon
                        className={cx('form-login-icon', 'form-login-icon-show', 'hidden')}
                        onClick={handleHiddenPassWord}
                        width="16px"
                        height="16px"
                    />
                    <span className={cx('message-error')}></span>
                </div>
                <button type="submit" className={cx('form-login-submit')}>
                    Login
                </button>
                <p className={cx('form-redirect')}>
                    Do not have an account ?
                    <Link to="/signup" className={cx('form-redirect-link')}>
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
