<script setup lang="ts"></script>
<template>
    <footer class="bottom-menu">
      <div class="footer-container">
        <div class="box">
          <strong style="font-size: 24px">Exclusive</strong>
          <div style="font-size: 20px">Subscribe</div>
          <div style="font-size: 16px">Get 10% off your first order</div>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div class="box">
          <strong style="font-size: 20px">Support</strong>
          <div style="font-size: 16px">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </div>
          <div style="font-size: 16px">exclusive@gmail.com</div>
          <div style="font-size: 16px">+88015-88888-9999</div>
        </div>
        <div class="box">
          <strong style="font-size: 20px">Account</strong>
          <div style="font-size: 16px">My Account</div>
          <div style="font-size: 16px">Login / Register</div>
          <div style="font-size: 16px">Cart</div>
          <div style="font-size: 16px">Wishlist</div>
          <div style="font-size: 16px">Shop</div>
        </div>
        <div class="box">
          <strong style="font-size: 20px">Quick link</strong>
          <div style="font-size: 16px">Privacy Policy</div>
          <div style="font-size: 16px">Terms Of Use</div>
          <div style="font-size: 16px">FAQ</div>
          <div style="font-size: 16px">Contact</div>
        </div>
        <div class="box">
          <strong style="font-size: 20px">Download App</strong>
          <div style="font-size: 12px; color: lightgray">
            Save $3 with App New User Only
          </div>
          <div>
            <div class="img-app">
              <img
                src="../Asset/Qr Code.png"
                alt="Download App"
                style="width: 80px; height: 80px"
              />
              <div class="img-storeapp">
                <img
                  src="../Asset/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                  alt="Google Play Store"
                />
                <img src="../Asset/download-appstore.png" alt="App Store" />
              </div>
            </div>
          </div>
          <div class="img-social">
            <img src="../Asset/Icon-Facebook.png" alt="Facebook" />
            <img src="../Asset/Icon-Twitter.png" alt="Twitter" />
            <img src="../Asset/icon-instagram.png" alt="Instagram" />
            <img src="../Asset/Icon-Linkedin.png" alt="LinkedIn" />
          </div>
        </div>
      </div>
      <div class="copyright">© Copyright Rimel 2022. All right reserved</div>
    </footer>
</template>

<style>
body,
html {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-sizing: border-box !important;
    width: 100%;
}

.Top-menu {
    height: 60px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #a2a2a2;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: border-box;
}

.Top-menu ul {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 40px;
    width: 400px;
    list-style-type: none;
    color: #000000
}


.Top-menu ul li:hover {
    text-decoration: underline;
    cursor: pointer;
}

.announcement {
    background-color: #000000;
    color: #ffffff;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 100px;
    padding-left: 100px;
}

.announcement a {
    color: #ffffff;
    text-decoration: underline;
    margin-left: 10px;
}

.announcement button {
    background-color: transparent;
    border: none;
    color: #ffffff;
    padding-left: 80px;
    cursor: pointer;
}

.search-input {
    background-color: #F5F5F5;
    padding: 2px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
}

.search-input input[type=search] {
    width: 200px;
    font-size: 14px;
    background-color: transparent;
    padding: 6px 0px 6px 6px;
    outline: none;
    border: none;
}

.search-input img {
    padding-left: 4px;
}


/* Bottom Menu */
.bottom-menu {
    background-color: #000000;
    color: #ffffff;
    height: 440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 100px 0px 20px 0px;
    box-sizing: border-box;
}


.bottom-menu .footer-container {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: border-box;
    width: 100%;
}

.bottom-menu .box {
    max-width: 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.footer-container input[type=text] {
    width: 200px;
    height: 48px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: white;
    background-color: #000000;
    background-image: url('../Asset/send.svg');
    background-size: 16px;
    background-position: right 10px center;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 12px;
}

.img-app {
    display: flex;
    gap: 10px;
}

.img-app .img-storeapp {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
}

.img-social {
    display: flex;
    gap: 30px;
}

.copyright {
    display: flex;
    gap: 10px;
    color: rgba(254, 254, 254, 0.304);
}

.text-desc {
    font-size: 14px !important;
    color: #FAFAFA;
}
</style>