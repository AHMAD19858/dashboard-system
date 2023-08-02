<script setup>
import { Field, Form, defineRule, ErrorMessage, configure } from "vee-validate";
import { required, email, confirmed } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

// validaiton vee-validate
defineRule("required", required);
defineRule("email", email);
defineRule("confirmed", confirmed);

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
const request = reactive({
  email: "",
});

function requestHandler() {
  console.log("first");
}
</script>

<template>
  <div class="bg-slate-100 h-screen">
    <div class="nav-container">
      <div>
       <p>her's a logo</p>
      </div>
      <div class="right-side">
        <p class="font-normal font-primary text-slate-400">
          Already have an account?
        </p>
        <NuxtLink to="/login">
          <div
            class="bg-[#FAEDEF] outline-none rounded-lg p-2 px-4 cursor-pointer"
          >
            <p
              class="underline text-primary text-base font-semibold font-primary"
            >
              Sign in
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="card-container">
      <p class="font-primary font-black text-4xl text-center">
        Forgot your password?
      </p>
      <Form
        class="form-section"
        @submit.prevent="requestHandler"
        v-slot="{ errors }"
      >
        <div class="my-14">
          <p class="label">Email</p>
          <div
            class="input-div"
            :class="{ '!border-red-500 !mb-0': errors.email }"
          >
            <Field
              type="text"
              class="email-input"
              placeholder="Enter your email"
              v-model.trim="request.email"
              rules="required|email"
              name="email"
            />
          </div>
          <ErrorMessage class="text-sm text-red-600 capitalize" name="email" />
        </div>
        <NuxtLink to="/reset-password">
        <button class="send-btn">Request new password</button>
      </NuxtLink>
      </Form>
      <div class="flex gap-1 mt-12 justify-center">
        <p class="text-zinc-400 font-primary font-normal text-base">
          Didn’t receive link?
        </p>
       <!--  <NuxtLink to="/signup"> -->
          <p
            class="text-primary font-primary font-normal text-base underline cursor-pointer"
          >
            Resend
          </p>
    <!--     </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-img {
  @apply absolute top-[20px];
}
.nav-container {
  @apply bg-white flex justify-between p-8 items-center;
}
.right-side {
  @apply flex gap-3 items-center;
}
.card-container {
  margin: 0 auto;
  height: 410px;
  margin-top: 80px;
  @apply bg-white outline-none rounded-lg  max-w-xl overflow-hidden shadow-lg p-10;
}
.label {
  @apply font-primary text-[#93A3B0CC] text-base my-1;
}

.input-div {
  @apply bg-white  flex items-center border-2 py-2 px-3 rounded-lg mb-4 outline-none focus:outline-none;
}

.email-input {
  @apply w-full bg-transparent pl-2 outline-none border-none h-7;
}

.send-btn {
  @apply font-primary  text-base flex w-full bg-[#FF0000] mt-4 py-2 rounded-[10px] text-white font-medium items-center h-12 justify-center gap-7;
}

@media (max-width: 992px) {
}

@media (max-width: 667px) {
  .nav-container {
    @apply !block;
  }

  .right-side {
    margin-top: 50px;
  }
  .logo-img {
    left: 25%;
  }
  .card-container {
    margin: 20px;
    height: 450px;
    margin-top: 100px !important;
  }
}
</style>
