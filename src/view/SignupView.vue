<script setup lang="ts"></script>
<template>
    <main class="SignContainer">
    <div class="left"><img src="../Asset/Sign-up.png" alt="Sign-up" /></div>
    <div class="right">
      <h1 class="font">Create an account</h1>
      <p class="font">Enter your details below</p>
      <div class="input1">
        <input type="text" id="userName" placeholder="Name" />
      </div>
      <div class="input1">
        <input type="text" id="userEmail" placeholder="Email or Phone Number" />
      </div>
      <div class="input1 password-field">
        <input type="password" id="userPassword" placeholder="Password" />
        <i class="fa-solid fa-eye" id="togglePassword" onclick="togglePass()"></i>
      </div>
      <button class="buttoncreate" onclick="signUp()">Create Account</button>
      <button class="buttongoogle">
        <img src="../Asset/Google-Icon.png" alt="Icon Google" />
        Sign up with Google
      </button>
      <div class="bottom">
        Already have account?
        <RouterLink to="login"><button class="buttonlogin">Login</button></RouterLink>
      </div>
      <!-- <div class="row">
          <div class="box1"></div>
          <div>Smart</div>
        </div> -->
    </div>
  </main>
</template>
<style scoped>
.font {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.SignContainer {
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.left {
  flex: 1.4;
  display: flex;
  /* justify-content: center;
      align-items: center; */
}
.left img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
.right {
  flex: 1;
  display: flex;
  padding: 0 10%;
  flex-direction: column;
  justify-content: center;
}

.input1 {
  margin-bottom: 25px;
  border-bottom: 1px solid #ccc;
}
.input1 input {
  width: 100%;
  padding: 10px 0;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.buttoncreate {
  border: none;
  background-color: red;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 25px;
}
/* 1. สร้างการวนลูปให้ครบ 7 สี (ม่วง คราม น้ำเงิน เขียว เหลือง แสด แดง) */
@keyframes rainbow-7-colors {
  0% {
    background-color: #ff0000;
  } /* แดง */
  14% {
    background-color: #ff7f00;
  } /* แสด (ส้ม) */
  28% {
    background-color: #ffff00;
  } /* เหลือง */
  42% {
    background-color: #00ff00;
  } /* เขียว */
  56% {
    background-color: #0000ff;
  } /* น้ำเงิน */
  70% {
    background-color: #4b0082;
  } /* คราม (Indigo) */
  84% {
    background-color: #9400d3;
  } /* ม่วง (Violet) */
  100% {
    background-color: #ff0000;
  } /* กลับมาแดงเพื่อให้ลูปเนียน */
}

.buttoncreate:active {
  animation: rainbow-7-colors 0.7s infinite linear;
  transform: scale(0.95);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  outline: none;
}
.buttongoogle {
  display: flex;
  gap: 5px;
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
}

.buttongoogle:active {
  transform: scale(0.95);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  outline: none;
}

.buttongoogle img {
  width: 20px;
  height: 20px;
}
.buttonlogin {
  width: 10%;
  padding: 10px 0;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: black;
  background-color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.password-field {
  position: relative;
  display: flex;
  align-items: center;
}

.password-field i {
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #777;
  padding: 5px;
}

.password-field i:hover {
  color: #000;
}
</style>