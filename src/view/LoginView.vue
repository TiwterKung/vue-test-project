<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter'

    const counter = useCounterStore()
</script>
<template>
    <div class="body-container">
      <img src="../Asset/authen-image.png" alt="auth-image" />
      <form>
        <div style="font-size: 44px; text-align: justify">
          Log in to Exclusive
        </div>
        <p style="font-size: 14px">Enter your details below.</p>
        <input type="text" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 40px;
            margin-top: 40px;
            width: 100%;
          "
        >
          <button type="button" onclick="onClickLoginButton()">Log In</button>
          <a href="#" style="color: red; text-decoration: none; font-size: 14px"
            >Frogot your password?</a
          >
        </div>
      </form>
    </div>
</template>

<style>
.body-container {
  display: flex;
  align-items: center;
  padding: 50px 100px 50px 0px;
}

.body-container img {
  width: 60%;
  object-fit: cover;
  height: 600px;
}

.body-container form {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0px 0px 0px 100px;
  flex-direction: column;
  width: 100%;
}

.body-container form input {
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0px 0px 6px 6px;
  margin-top: 40px;
  font-size: 14px;
  border-bottom: solid black 1px;
  width: 100%;
}

.body-container button {
  background-color: red;
  padding: 14px 32px 14px 32px;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

</style>