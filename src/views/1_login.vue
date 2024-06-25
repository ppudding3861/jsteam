<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<body>
        <div class="login__wrapper">
            <header>
                <div class="title">Good Morning <span>Welcome back!</span></div>
                <div class="btn--back__container">
                    <button class="btn--back">
                        <img src="../data/back.svg" alt="뒤로가기 아이콘" />
                        <span class="blind">뒤로가기</span>
                    </button>
                </div>
            </header>
            <div class="login__content">
                <h1 class="login__title">Log in</h1>
                <!-- 0. form -->
                <form class="form-login">
                    <!-- 1. email -->
                    <div class="email__container">
                        <label for="user-email" class="input__title">Email</label>
                        <div id="email-box" class="input__container">
                            <span><img id="email-icon" src="../data/login.svg" alt="로그인" style="height: 20px; width: 20px;"></span>
                            <input id="user-email" type="text" placeholder="Enter your Email" onkeypress="emailKeyEvent()" />
    
                        </div>
                        <div id="email-error" class="error-message"></div>
                    </div>
                    <!-- 2. password -->
                    <div class="password__container">
                        <label for="user-password" class="input__title">Password</label>
                        <div id="pw-box" class="input__container">
                            <span><img id="pw-icon" src="../data/lock.svg" alt="패스워드 아이콘" style="height: 20px; width: 20px;"/></span>
                            <input id="user-password" type="password" placeholder="Enter your Password" onkeypress="pwKeyEvent()" />
                        </div>
                        <div id="pw-error" class="error-message"></div>
                    </div>
                    <!-- 3. remember ID -->
                    <div class="check-id__container">
                        <input id="check-id" type="checkbox" />
                        <label for="check-id"><span class="check-id__checkbox"></span>Remember ID</label>
                    </div>
                    <!-- 4. submit button -->
                    <div class="login__btn__container">
                        <RouterLink to="/home">
                        <button class="login__btn" onclick="login()">Log in</button>
                    </RouterLink>
                    </div>
                </form>
                <!-- 5. direction -->
                <div class="direction__container">
                    <p class="forgot-pw">Forgot <a href="#none">Password?</a></p>
                    <p class="sign-up">Don't have an account? <a href="#none">Sign up</a></p>
                </div>
            </div>
        </div>
    </body>


</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    
    width: 100%;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    background-color: #429c45;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(./img/background.png);
    background-position: center;
    background-size: cover;
}
a {
    text-decoration: none;
    color: #054909;
    font-weight: 700;
}
img {
    vertical-align: middle;
}
button {
    cursor: pointer;
}
.blind {
    display: none;
}

/* ================== login wrapper ================== */
.login__wrapper {
    width: 360px;
    height: 640px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
    filter: drop-shadow(0px 20px 30px #45a049);
    backdrop-filter: blur(25px);
    border-radius: 30px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    position: relative;
}
header {
    width: 100%;
    height: 110px;
    padding: 40px 30px 0px 40px;
}
.title {
    font-size: 24px;
    font-weight: 500;
}
.title span {
    display: block;
    font-size: 16px;
    font-weight: 400;
}
.btn--back__container {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 34px;
    height: 34px;
    padding: 5px;
    background: #45a049;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.btn--back {
    width: 24px;
    height: 24px;
    background: linear-gradient(154.48deg, #ffe347 27.32%, #fc7100 95.74%);
    border: 1px solid #45a049;
    border-radius: 4px;
    border: 1px solid #45a049;
}

/* ================== login content ================== */
.login__content {
    width: 360px;
    height: 530px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 60px 60px 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: -2px;
    left: -2px;
}
.login__title {
    font-size: 24px;
    color: #ffffff;
    padding-bottom: 30px;
}
/* ###### 1. email ###### */
.form-login {
    width: 100%;
}
.email__container,
.password__container {
    margin-bottom: 16px;
}
.input__title {
    display: block;
    margin-bottom: 10px;
}
.input__container {
    width: 100%;
    height: 44px;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: relative;
    transition: all 0.2s ease-in-out;
}
.input__container.active {
    border: 1px solid #ffffff;
}
.input__container > span {
    margin-right: 6px;
}
.input__container input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    padding-right: 18px;
    color: #444444;
}
.input__container input::placeholder {
    font-size: 12px;
    color: #ffffff;
}
.input__container input:focus {
    outline: none;
}
.btn--delete {
    width: 18px;
    height: 18px;
    background: rgba(175, 175, 175, 0.7);
    border-radius: 4px;
    border: none;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
.btn--delete.active {
    display: flex;
}
.error-message {
    font-size: 12px;
    color: #ff0000;
    margin-top: 6px;
}
/* ###### 3. remember ID ###### */
.check-id__container {
    margin-bottom: 20px;
}
.check-id__container input[type='checkbox'] {
    display: none;
}
.check-id__container input[type='checkbox'] + label span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(./img/icon_check-id--default.svg);
    cursor: pointer;
    margin-right: 6px;
}
.check-id__container input[type='checkbox']:checked + label span {
    background-color: #45a049;
    background: url(./img/icon_check-id--checked.svg);
}
.check-id__container label {
    display: flex;
    flex-direction: row;
    align-items: center;
}

/* ###### 4. submit button ###### */
.login__btn__container {
    width: 100%;
    height: 68px;
    background: #45a049;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.login__btn {
    width: 220px;
    height: 48px;
    background: linear-gradient(154.48deg, #05a80d 27.32%, #044007 95.74%);
    border: 1px solid #45a049;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
}

/* ###### 5. direction ###### */
.direction__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.direction__container p {
    text-align: center;
    margin-top: 10px;
}

</style>