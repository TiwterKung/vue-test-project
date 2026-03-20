<script setup lang="ts"></script>
<template>
    <header>
      <div class="headerview">
        <div class="Navigroup">
          <div class="clearbuttonH">
            <button onclick="link('Home')">Home</button>
          </div>
          <div>/</div>
          <div class="clearbuttonH">
            <button onclick="link('About')">About</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="firstcontent">
        <div class="ourstory">
          <div class="storyfont">Our Story</div>
          <hr />
          <div>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </div>
          <hr />
          <div>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
        <div class="ourpic">
          <img src="..//Asset/About.png" alt="AboutP" />
        </div>
      </div>
      <!-- <hr /> -->
      <div class="category">
        <div class="categorybox">
          <img
            src="../Asset/Seller.png"
            alt="Seller"
            width="40%"
            height="40%"
          />
          <span class="boxfontH">10.5K</span>
          <span class="boxfont">Sallers active our site</span>
        </div>
        <div class="categorybox">
          <img
            src="../Asset/Seller.png"
            alt="Seller"
            width="40%"
            height="40%"
          />
          <span class="boxfontH">33K</span>
          <span class="boxfont">Mopnthly Produduct Sale</span>
        </div>
        <div class="categorybox">
          <img
            src="../Asset/Customer.png"
            alt="Customer"
            width="40%"
            height="40%"
          />
          <span class="boxfontH">45.5K</span>
          <span class="boxfont">Customer active in our site</span>
        </div>
        <div class="categorybox">
          <img src="../Asset/Sell.png" alt="Sell" width="40%" height="40%" />
          <span class="boxfontH">25K</span>
          <span class="boxfont">Anual gross sale in our site</span>
        </div>
      </div>
      <!-- <v-container id="team-list"><script src="About.js"></script></v-container> -->
      <v-container>
        <div class="containerbox">
          <img src="../Asset/Tom.png" alt="Tom" width="247px" height="287px" />
          <span class="boxfontH">Tom Cruise</span>
          <span class="boxfont">Founder & Chairman</span>
          <div class="logobox">
            <div>
              <img
                src="..//Asset/twitter B.png"
                alt="Twitter"
                width="24px"
                height="24px"
              />
            </div>
            <div>
              <img
                src="..//Asset/ig B.png"
                alt="instagram"
                width="24px"
                height="24px"
              />
            </div>
            <div>
              <img
                src="..//Asset/in B.png"
                alt="Linkedin"
                width="24px"
                height="24px"
              />
            </div>
          </div>
        </div>
        <div class="containerbox">
          <img
            src="../Asset/Emma.png"
            alt="Emma"
            width="247px"
            height="287px"
          />
          <span class="boxfontH">Emma Watson</span>
          <span class="boxfont">Managing Director</span>
          <div class="logobox">
            <div>
              <img
                src="..//Asset/twitter B.png"
                alt="Twitter"
                width="24px"
                height="24px"
              />
            </div>
            <div>
              <img
                src="..//Asset/ig B.png"
                alt="instagram"
                width="24px"
                height="24px"
              />
            </div>
            <div>
              <img
                src="..//Asset/in B.png"
                alt="Linkedin"
                width="24px"
                height="24px"
              />
            </div>
          </div>
        </div>
        <div class="containerbox">
          <img
            src="../Asset/Will.png"
            alt="Will"
            width="247px"
            height="287px"
          />
          <span class="boxfontH">Will Smith</span>
          <span class="boxfont">Product Designer</span>
          <div class="logobox">
            <div>
              <img
                src="..//Asset/twitter B.png"
                alt="Twitter"
                width="24px"
                height="24px"
              />
            </div>
            <div>
              <img
                src="..//Asset/ig B.png"
                alt="instagram"
                width="24px"
                height="24px"
              />
            </div>
            <div>
              <img
                src="..//Asset/in B.png"
                alt="Linkedin"
                width="24px"
                height="24px"
              />
            </div>
          </div>
        </div>
      </v-container>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <container4 class="container4">
        <div class="containerbox4">
          <img
            src="../Asset/DELIVERY.png"
            alt="DELIVERY"
            width="80px"
            height="80px"
          />
          <span class="boxfontH">FREE AND FAST DELIVERY</span>
          <span class="boxfont">Free delivery for all orders over $140</span>
        </div>
        <div class="containerbox4">
          <img
            src="../Asset/SERVICE.png"
            alt="SERVICE"
            width="80px"
            height="80px"
          />
          <span class="boxfontH">24/7 CUSTOMER SERVICE</span>
          <span class="boxfont">Friendly 24/7 customer support</span>
        </div>
        <div class="containerbox4">
          <img
            src="../Asset/GUARD.png"
            alt="GUARD"
            width="80px"
            height="80px"
          />
          <span class="boxfontH">MONEY BACK GUARANTEE</span>
          <span class="boxfont">We reurn money within 30 days</span>
        </div>
      </container4>
    </main>
</template>
<style scoped>
.headerview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  padding-top: 30px;
}

.Navigroup {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 100px;
}

.clearbuttonH button {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  color: black;
  padding: 5px 0;
}

.firstcontent {
  display: flex;
  gap: 50px;
}

.seccondContent {
  /* display: flex; */
  padding-left: 100px;
}

.ourstory {
  flex: 1;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
}

.storyfont {
  font-size: 32px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.ourpic {
  flex: 1;
}

.ourpic img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.category {
  display: flex;
  gap: 60px;
  justify-content: center;
  padding-top: 50px;
}

.categorybox {
  background-color: rgb(255, 255, 255);
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #00000030;
  box-sizing: border-box;
}

.categorybox:hover {
  background-color: #db4444;
  cursor: pointer;
  color: white;
}
.categorybox:hover img {
  fill: white;
  width: 30%;
  height: 30%;
}

.categorybox img {
  padding-top: 5px;
}

.boxfont {
  font-size: 14px;
  padding-top: 3px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.boxfontH {
  font-size: 20px;
  padding-top: 5px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

v-container {
  display: flex;
  gap: 60px;
  justify-content: center;
  padding-top: 50px;
}

.containerbox {
  background-color: rgb(255, 255, 255);
  /* width: 200px;
  height: 200px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  box-sizing: border-box;
}

.logobox {
  display: flex;
  gap: 2px;
  padding-top: 2px;
}

.container4 {
  display: flex;
  gap: 60px;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

.containerbox4 {
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.dots {
  text-align: center;
  margin-top: 20px;
}

.dots span {
  height: 10px;
  width: 10px;
  background: #ccc;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
}
</style>