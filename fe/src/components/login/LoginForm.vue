<template>
  <div class="home-form">
    <div class="hf-head">
      <div class="hf-toggle flex-box">
        <div class="slide-card" id="slideAnim"></div>
        <button
          @mouseover="hoveredId(0)"
          @mouseleave="hoveredId(selectedId)"
          @click="selectId(0)"
          :class="{ 'hf-card-active': selectedId === 0 }"
          class="toggle-item"
        >
          <span>Sign in</span>
        </button>
        <button
          @mouseover="hoveredId(1)"
          @mouseleave="hoveredId(selectedId)"
          @click="selectId(1)"
          :class="{ 'hf-card-active': selectedId === 1 }"
          class="toggle-item"
        >
          <span>Sign up</span>
        </button>
      </div>
    </div>
    <div class="hf-body">
      <div class="hf-card" :class="{ 'hf-card-active': selectedId === 0 }">
        <div class="input-box" id="logUser">
          <input
            v-model="newUser.email"
            type="text"
            name="user"
            placeholder="Email"
          />
        </div>
        <div class="input-box" id="logPass">
          <input
            v-model="newUser.password"
            type="text"
            name="user"
            placeholder="Password"
          />
        </div>
        <button class="btn-confirm" @click="handleSignIn">Sign in</button>
      </div>
      <div class="hf-card" :class="{ 'hf-card-active': selectedId === 1 }">
        <div class="input-box">
          <input
            v-model="newUser.fullName"
            type="text"
            name="fullname"
            placeholder="Full name"
          />
        </div>
        <div class="input-box" id="regMail">
          <input
            @blur="
              validateInput(
                newUser.email,
                /^([\w-\.]+@([\w-]+\.)+[\w-]{2,10})?$/i,
                'regMail'
              )
            "
            v-model="newUser.email"
            type="email"
            name="email"
            placeholder="Type email"
          />
        </div>
        <div class="input-box" id="regPass">
          <input
            @blur="validateInput(newUser.password, /[\d]{1}/g, 'regPass')"
            v-model="newUser.password"
            type="password"
            name="user"
            placeholder="Password (at least one digit)"
          />
        </div>
        <div class="input-box" id="regGender">
          <label for="gender">Gender:</label>
          <select id="gender" v-model="newUser.gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button @click="handleSignUp" class="btn-confirm">Sign up</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

interface IUser {
  username: string,
  email: string,
  password: string,
  fullName: string,
  gender: string,
}

const newUser: IUser = {
  email: '',
  fullName: '',
  gender: '',
  password: '',
  username: '',
};

let selectedId = null;

const backendUrl = "http://172.25.0.10:9090";

 const handleSignUp = async () => {
   try {
     const response = await fetch(
         backendUrl + "/api" + "/signUp",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(newUser),
         }
     );

     if (!response.ok) {
       throw new Error("Sign up failed");
     }

     const data = await response.json();
     // Handle the sign-up response data here
     console.log(data);
   } catch (error) {
     console.error("Error during sign up:", error.message);
   }
 }

 const handleSignIn = async () => {

  try {
    const response = await fetch(backendUrl + "/api" + "/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: newUser.email, password: newUser.password}),
        }
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    // Handle the login response data here
    console.log(data);
  } catch (error) {
    console.error("Error during login:", error.message);
  }
}
//GUI part
const hoveredId = (id) => {
  this.hoverId = id;
  document.getElementById("slideAnim").style.transform =
      "translateX(" + id * 100 + "%)";
}

const selectId = (id) => {
  selectedId = id;
}

const validateInput = (value, regData, elemId) => {
  if (value !== "") {
    let regPattern = new RegExp(regData);
    if (regPattern.test(value)) {
      document.getElementById(elemId).classList.add("input-ok");
    } else {
      document.getElementById(elemId).classList.remove("input-ok");
    }
  } else {
    document.getElementById(elemId).classList.remove("input-ok");
  }
}
</script>

<style lang="scss"></style>
