<script setup lang="ts"></script>
<template>
<main>
      <container1>
        <div class="headerview">
          <div class="Navigroup">
            <div class="clearbuttonH">
              <button onclick="link('Home')">Home</button>
            </div>
            <div>/</div>
            <div class="clearbuttonH">
              <button onclick="link('Contact')">Contact</button>
            </div>
          </div>
        </div>
      </container1>
      <container2>
        <leftcontact>
          <div>
            <div class="leftDiv">
              <div class="flexCall">
                <div class="imgLeft">
                  <img src="../Asset/RedPhone.png" alt="RPhone" />
                </div>
                <div>Call to Us</div>
              </div>
              <div>We are available 24/7, 7 days a week.</div>
              <div>Phone: +8801611112222</div>
            </div>
            <hr />
            <div class="leftDiv">
              <div class="flexWrite">
                <div class="imgLeft">
                  <img src="../Asset/RedEmail.png" alt="REmail" />
                </div>
                <div>Write to Us</div>
              </div>
              <div>
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div>Emails: customer@exclusive.com</div>
              <div>Emails: support@exclusive.com</div>
            </div>
          </div>
        </leftcontact>
        <rightcontact>
          <div class="flexcontact">
            <div class="InputRight">
              <input type="text" placeholder="Your Name *" id="name" />
            </div>
            <div class="InputRight">
              <input type="text" placeholder="Your Email *" id="email" />
            </div>
            <div class="InputRight">
              <input type="text" placeholder="Your Phone *" id="phone" />
            </div>
          </div>
          <hr />
          <div class="InputMessage">
            <!-- <input type="textarea" placeholder="  Your Message" /> -->
            <textarea
              placeholder="Your Message"
              id="message"
              style="resize: none"
            ></textarea>
          </div>
          <div class="Button-Save">
            <button onclick="Contact()">Send Message</button>
          </div>
        </rightcontact>
      </container2>
    </main>
</template>
<style scoped>
main {
  padding-bottom: 50px;
}
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

container2 {
  display: flex;
  gap: 10px;
  padding-left: 100px;
  padding-right: 100px;
  justify-content: space-between;
  align-items: center;
}

leftcontact {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* border: 1px solid rgb(132, 132, 132); */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 20px;
  width: 300px;
  height: 380px;
}
.leftDiv div {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding-top: 10px;
  font-weight: 500;
}
.flexCall {
  display: flex;
  gap: 5px;
  align-items: center;
}

.flexWrite {
  display: flex;
  gap: 5px;
  align-items: center;
}
.imgLeft img {
  width: 40px;
  height: 40px;
}

rightcontact {
  flex: 2;
  display: flex;
  flex-direction: column;
  /* border: 1px solid rgb(132, 132, 132); */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 20px;
  width: 600px;
  height: 380px;
}

.flexcontact {
  display: flex;
  gap: 20px;
}
.InputRight {
  flex: 1;
}

.InputRight input {
  /* width: 100%; */
  padding: 10px;
  margin-top: 10px;
  border: #f5f5f5;
  background-color: #f5f5f5;
  outline: none;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.InputMessage {
  display: flex;
}
.InputMessage textarea {
  width: 100%;
  height: 190px;
  padding: 10px;
  margin-top: 10px;
  border: #f5f5f5;
  background-color: #f5f5f5;
  outline: none;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.Button-Save {
  display: flex;
  padding-top: 10px;
  justify-content: right;
}

.Button-Save button {
  border: none;
  cursor: pointer;
  color: white;
  background-color: #db4444;
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
  border-radius: 4px;
}

/* .line {
  box-sizing: border-box;
  border-top: 1px 0 black;
} */
</style>