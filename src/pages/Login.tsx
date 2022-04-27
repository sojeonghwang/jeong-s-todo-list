import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const loginByKakao = () => {
        // #TODO: 카카오 소셜 로그인 연동 필요
        navigate("/")
    };

    return (
        <div className="login-wrapper">
            <div className='login-inner-wrapper'>
                <h1 className="login-title">Jeong's TODO List</h1>
                <p className="login-made-by">made by React with typeScript</p>
                <button onClick={loginByKakao} className='kakao-login'>카카오 로그인</button>
            </div>
        </div>
    );
};

export default Login;