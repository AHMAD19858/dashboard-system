<script setup>
// validation
import { Field, Form, defineRule, ErrorMessage, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

// validaiton vee-validate
defineRule("required", required);
defineRule("email", email);

configure({
  // create and set a localization handler
  generateMessage: localize("en", {
    messages: {
      // interpolates the field name
      required: "The {field} is required",
      // interpolates the min, max params
      between: "The {field} value must be between 0:{min}, 1:{max}",
      // Interpolates another field value in the form
      confirmed: "The {field} value must match {age}",
    },
  }),
});
const showPw = ref(false);
const logins = reactive({
  email: "",
  password: "",
  remember: false,
});

function loginHandler() {
  console.log("first");
}
</script>

<template>
  <div class="screen-container">
    <div class="right-side">
      <Form
        class="form-section"
        @submit.prevent="loginHandler"
        v-slot="{ errors }"
      >
        <!--    <img
          src="~/assets/images/logo.png"
          alt=""
          class="absolute top-[20px] lef-[60px]"
        /> -->
        <h1 class="welcome">Hi, Welcome back!!</h1>
        <p class="sub-text">
          Access Your Restaurant Dashboard and Take Control of Your Operations
        </p>

        <p class="label">Email</p>
        <div
          class="input-div"
          :class="{ '!border-red-500 !mb-0': errors.email }"
        >
          <Field
            type="text"
            class="login-input"
            placeholder="Enter your email address"
            v-model.trim="logins.email"
            rules="required|email"
            name="email"
          />
        </div>
        <ErrorMessage class="text-sm text-red-600 capitalize" name="email" />
        <p class="label">Password</p>
        <div
          class="input-div relative"
          :class="{ '!border-red-500 !mb-0': errors.password }"
        >
          <Field
            class="login-input"
            autocomplete="off"
            :type="showPw ? 'text' : 'password'"
            placeholder="Enter your password"
            name="password"
            rules="required"
          />
          <div class="mb-6">
            <button
              class="absolute top-0 bottom-0 right-4"
              type="button"
              @click="showPw = !showPw"
            >
              <svg
                v-if="showPw"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_357_398)">
                  <path
                    d="M15.514 6.27935C14.48 4.59535 12.128 1.77002 8.00003 1.77002C3.87203 1.77002 1.52003 4.59535 0.486034 6.27935C0.166386 6.79636 -0.00292969 7.39218 -0.00292969 8.00002C-0.00292969 8.60786 0.166386 9.20368 0.486034 9.72069C1.52003 11.4047 3.87203 14.23 8.00003 14.23C12.128 14.23 14.48 11.4047 15.514 9.72069C15.8337 9.20368 16.003 8.60786 16.003 8.00002C16.003 7.39218 15.8337 6.79636 15.514 6.27935ZM14.3774 9.02269C13.4894 10.4667 11.4794 12.8967 8.00003 12.8967C4.5207 12.8967 2.5107 10.4667 1.6227 9.02269C1.43279 8.71538 1.3322 8.36127 1.3322 8.00002C1.3322 7.63877 1.43279 7.28466 1.6227 6.97735C2.5107 5.53335 4.5207 3.10335 8.00003 3.10335C11.4794 3.10335 13.4894 5.53069 14.3774 6.97735C14.5673 7.28466 14.6679 7.63877 14.6679 8.00002C14.6679 8.36127 14.5673 8.71538 14.3774 9.02269Z"
                    fill="#93A3B0"
                  />
                  <path
                    d="M7.99984 4.6665C7.34057 4.6665 6.6961 4.862 6.14794 5.22827C5.59977 5.59454 5.17253 6.11514 4.92024 6.72423C4.66795 7.33331 4.60194 8.00354 4.73055 8.65014C4.85917 9.29674 5.17664 9.89069 5.64282 10.3569C6.10899 10.823 6.70293 11.1405 7.34954 11.2691C7.99614 11.3977 8.66636 11.3317 9.27545 11.0794C9.88454 10.8271 10.4051 10.3999 10.7714 9.85174C11.1377 9.30357 11.3332 8.65911 11.3332 7.99984C11.3321 7.11611 10.9806 6.26888 10.3557 5.64398C9.7308 5.01909 8.88357 4.66756 7.99984 4.6665ZM7.99984 9.99984C7.60428 9.99984 7.2176 9.88254 6.8887 9.66278C6.5598 9.44301 6.30345 9.13066 6.15208 8.7652C6.0007 8.39975 5.9611 7.99762 6.03827 7.60966C6.11544 7.22169 6.30592 6.86533 6.58562 6.58562C6.86533 6.30592 7.2217 6.11544 7.60966 6.03827C7.99762 5.9611 8.39975 6.0007 8.76521 6.15208C9.13066 6.30345 9.44302 6.5598 9.66278 6.8887C9.88254 7.2176 9.99984 7.60427 9.99984 7.99984C9.99984 8.53027 9.78913 9.03898 9.41405 9.41405C9.03898 9.78912 8.53027 9.99984 7.99984 9.99984Z"
                    fill="#93A3B0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_357_398">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                v-else
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.514 6.27923C14.9122 5.29372 14.153 4.4134 13.2667 3.67323L15.1333 1.80657C15.2548 1.68083 15.322 1.51243 15.3205 1.33763C15.3189 1.16283 15.2488 0.995625 15.1252 0.87202C15.0016 0.748415 14.8344 0.678302 14.6596 0.676783C14.4848 0.675264 14.3164 0.74246 14.1907 0.863899L12.1607 2.89657C10.9023 2.14911 9.46362 1.75954 8 1.7699C3.87267 1.7699 1.52067 4.59523 0.486004 6.27923C0.166356 6.79624 -0.00296021 7.39206 -0.00296021 7.9999C-0.00296021 8.60774 0.166356 9.20356 0.486004 9.72057C1.08784 10.7061 1.847 11.5864 2.73334 12.3266L0.86667 14.1932C0.802997 14.2547 0.752209 14.3283 0.717269 14.4096C0.68233 14.491 0.663939 14.5784 0.66317 14.667C0.662401 14.7555 0.679269 14.8433 0.712789 14.9252C0.74631 15.0071 0.795812 15.0816 0.858407 15.1442C0.921002 15.2068 0.995437 15.2563 1.07737 15.2898C1.1593 15.3233 1.24708 15.3402 1.3356 15.3394C1.42412 15.3386 1.5116 15.3202 1.59294 15.2853C1.67428 15.2504 1.74784 15.1996 1.80934 15.1359L3.844 13.1012C5.10085 13.8486 6.53778 14.2388 8 14.2299C12.1273 14.2299 14.4793 11.4046 15.514 9.72057C15.8337 9.20356 16.003 8.60774 16.003 7.9999C16.003 7.39206 15.8337 6.79624 15.514 6.27923ZM1.622 9.02257C1.43209 8.71526 1.3315 8.36115 1.3315 7.9999C1.3315 7.63865 1.43209 7.28454 1.622 6.97723C2.51134 5.53323 4.52134 3.10323 8 3.10323C9.10685 3.09703 10.1982 3.36379 11.1773 3.8799L9.83534 5.2219C9.19529 4.79697 8.42794 4.60656 7.66349 4.683C6.89904 4.75943 6.18458 5.09799 5.64134 5.64123C5.0981 6.18448 4.75953 6.89894 4.6831 7.66339C4.60667 8.42784 4.79707 9.19519 5.222 9.83523L3.682 11.3752C2.86541 10.715 2.16856 9.9192 1.622 9.02257ZM10 7.9999C10 8.53033 9.78929 9.03904 9.41422 9.41411C9.03915 9.78919 8.53044 9.9999 8 9.9999C7.70301 9.99875 7.41014 9.93037 7.14334 9.7999L9.8 7.14323C9.93048 7.41003 9.99885 7.70291 10 7.9999ZM6 7.9999C6 7.46947 6.21072 6.96076 6.58579 6.58569C6.96086 6.21061 7.46957 5.9999 8 5.9999C8.297 6.00105 8.58987 6.06943 8.85667 6.1999L6.2 8.85657C6.06953 8.58977 6.00115 8.29689 6 7.9999ZM14.378 9.02257C13.4887 10.4666 11.4787 12.8966 8 12.8966C6.89316 12.9028 5.80185 12.636 4.82267 12.1199L6.16467 10.7779C6.80472 11.2028 7.57207 11.3932 8.33652 11.3168C9.10097 11.2404 9.81543 10.9018 10.3587 10.3586C10.9019 9.81532 11.2405 9.10086 11.3169 8.33641C11.3933 7.57196 11.2029 6.80461 10.778 6.16457L12.318 4.62457C13.1346 5.28475 13.8314 6.0806 14.378 6.97723C14.5679 7.28454 14.6685 7.63865 14.6685 7.9999C14.6685 8.36115 14.5679 8.71526 14.378 9.02257Z"
                  fill="#93A3B0"
                />
              </svg>
            </button>
          </div>
        </div>
        <ErrorMessage class="text-sm text-red-600 capitalize" name="password" />
        <div class="flex justify-between my-3 items-center">
          <label class="text-sm cursor-pointer" for="myCheckbox">
            <input
              type="checkbox"
              class="text-sm ml-2 cursor-pointer"
              id="myCheckbox"
            />
            <span class="ml-2 text-gray-700 font-primary dark:text-white"
              >Remember me</span
            >
          </label>

          <NuxtLink to="/forgot-password">
            <span class="forgot-text">Forgot Password ?</span>
          </NuxtLink>
        </div>
        <NuxtLink to="/app">
          <button class="login-btn">Login</button>
        </NuxtLink>
        <div class="flex gap-1 mt-7">
          <p class="text-zinc-600 font-primary font-normal text-base">
            Not registered yet?
          </p>
          <NuxtLink to="/signup">
            <p
              class="text-primary font-primary font-normal text-base underline cursor-pointer"
            >
              Create an account
            </p>
          </NuxtLink>
        </div>
      </Form>
    </div>
    <div class="left-side">
      <div class="text-center">
        <div class="flex justify-center relative z-10 bottom-10 mb-24">
          <img src="~/assets/images/card.svg" alt="" class="w-[375px]" />
          <div
            class="shadow-xl transition-all bg-white w-[300px] h-[180px] absolute z-10 right-[100px] rounded-[10px] -bottom-[100px]"
          >
            <svg
              width="77"
              height="77"
              viewBox="0 0 77 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="m-4"
            >
              <rect
                x="0.760254"
                y="0.759766"
                width="76.16"
                height="76.16"
                rx="10.88"
                fill="#FAEDEF"
              />
              <g clip-path="url(#clip0_55_5107)">
                <path
                  d="M42.4412 29.9905C43.6284 29.0371 44.8511 27.756 45.4712 26.1975C45.7949 25.3842 45.6902 24.4607 45.1924 23.7277C44.6797 22.9715 43.8297 22.52 42.9199 22.52H34.7599C33.85 22.52 33 22.9715 32.4873 23.7277C31.9896 24.4607 31.8862 25.3842 32.2085 26.1975C32.8287 27.7547 34.0513 29.0371 35.2386 29.9905C28.9064 32.3406 23.8799 40.4163 23.8799 47C23.8799 51.5003 27.5396 55.16 32.0399 55.16H45.6399C50.1401 55.16 53.7999 51.5003 53.7999 47C53.7999 40.4163 48.7733 32.3406 42.4412 29.9905ZM42.943 25.1924C42.2412 26.9563 40.0952 28.4469 38.8372 29.15C37.5819 28.4523 35.444 26.974 34.7585 25.24L42.943 25.1924ZM45.6385 52.44H32.0399C29.0397 52.44 26.5999 50.0002 26.5999 47C26.5999 39.8695 33.0055 32.04 38.8399 32.04C44.6743 32.04 51.0799 39.8695 51.0799 47C51.0799 50.0002 48.6387 52.44 45.6385 52.44ZM38.8385 52.44C38.0878 52.44 37.4785 51.8307 37.4785 51.08V49.72H37.114C35.6616 49.72 34.3084 48.9394 33.5808 47.6814C33.2054 47.0313 33.4271 46.2003 34.0772 45.8236C34.7245 45.4469 35.5582 45.6686 35.9349 46.32C36.177 46.7389 36.6299 47 37.114 47H40.1985C40.9479 47 41.5585 46.3894 41.5585 45.64C41.5585 45.1259 41.19 44.6907 40.6827 44.6064L36.5456 43.9169C34.7218 43.6136 33.3972 42.0496 33.3972 40.2C33.3972 37.9506 35.2277 36.12 37.4772 36.12V34.76C37.4772 34.0093 38.0864 33.4 38.8372 33.4C39.5879 33.4 40.1972 34.0093 40.1972 34.76V36.12H40.5616C42.0128 36.12 43.3673 36.902 44.0949 38.16C44.4703 38.8101 44.2486 39.6411 43.5985 40.0178C42.9498 40.3945 42.1175 40.1728 41.7408 39.5214C41.4973 39.1011 41.0458 38.8414 40.5616 38.8414H37.4772C36.7278 38.8414 36.1172 39.452 36.1172 40.2014C36.1172 40.7155 36.4857 41.1507 36.993 41.235L41.1301 41.9245C42.9539 42.2278 44.2785 43.7918 44.2785 45.6414C44.2785 47.8908 42.448 49.7214 40.1985 49.7214V51.0814C40.1985 51.8321 39.5892 52.44 38.8385 52.44Z"
                  fill="#D14663"
                />
              </g>
              <defs>
                <clipPath id="clip0_55_5107">
                  <rect
                    width="32.64"
                    height="32.64"
                    fill="white"
                    transform="translate(22.52 22.52)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p
              class="mb-1 font-primary text-left pl-4 text-base text-zinc-400 font-medium"
            >
              Total Revenus
            </p>
            <div class="flex align-middle items-center">
              <p
                class="font-primary text-left pl-4 text-2xl text-primary font-bold"
              >
                $2,737K
              </p>
              <div class="flex items-baseline gap-1">
                <p
                  class="font-primary text-left pl-4 text-base text-[#00C853] font-medium"
                >
                  + 36%
                </p>
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.53027 5.63172L5.40857 1.75342M5.40857 1.75342L9.28687 5.63172M5.40857 1.75342V11.7262"
                    stroke="#00C853"
                    stroke-width="1.59564"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="relative z-10 mt-10">
          <h1 class="slogan">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          </h1>
          <p class="sub-slogan">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, hic!"
          </p>
        </div>
      </div>
      <svg
        class="circle-top"
        width="573"
        height="604"
        viewBox="0 0 573 604"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="480" cy="124" r="480" fill="white" fill-opacity="0.08" />
      </svg>

      <svg
        class="circle-bottom"
        width="197"
        height="197"
        viewBox="0 0 197 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cy="197"
          r="169"
          stroke="white"
          stroke-opacity="0.08"
          stroke-width="56"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.screen-container {
  @apply h-screen md:flex bg-[#F5F6FA];
}
.left-side {
  @apply relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-primary to-[#D14663]  justify-around items-center hidden;
}
.slogan {
  @apply text-white font-bold text-xl;
}

.sub-slogan {
  @apply text-white mt-1 font-medium text-base;
}

.circle-top {
  @apply absolute -top-[80] right-0 w-[278px];
}

.circle-bottom {
  @apply absolute bottom-0 left-0;
}

.right-side {
  @apply flex md:w-1/2 justify-center py-10 items-center  bg-slate-100;
}

.form-section {
  margin: 0 auto;
  @apply w-[100%] bg-slate-100 mt-[70px] max-w-[570px];
}

.welcome {
  @apply font-primary  mb-1 text-center  font-black text-5xl w-max;
}

.sub-text {
  @apply mb-[60px] text-lg font-normal text-left mt-2 font-primary text-[#6E7A84];
}

.label {
  @apply font-primary text-[#93A3B0CC] text-base my-1;
}

.input-div {
  @apply bg-white  flex items-center border-2 py-2 px-3 rounded-lg mb-4;
}

.login-input {
  @apply w-full bg-transparent pl-2 outline-none border-none h-7;
}

.forgot-text {
  @apply text-sm ml-2 cursor-pointer text-primary font-normal font-primary;
}

.login-btn {
  @apply font-primary  text-lg flex w-full bg-primary mt-4 py-2 rounded-[10px] text-white font-semibold items-center h-12 justify-center gap-7;
}

@media (max-width: 992px) {
  .left-side {
    @apply hidden;
  }
  .right-side {
    @apply w-full px-5;
  }
  .form-section {
    @apply mt-[180px];
  }
  .screen-container {
    height: unset;
  }
}

@media (max-width: 667px) {
  .screen-container {
    @apply h-screen;
  }
  .welcome {
    @apply text-3xl;
  }

  .form-section {
    margin-top: 100px;
  }
}
</style>
