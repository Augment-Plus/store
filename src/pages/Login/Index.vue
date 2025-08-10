<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    style="font-family: Inter, 'Noto Sans', sans-serif"
  >
    <div class="layout-container flex h-full grow flex-col">
      <header
        class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3"
      >
        <div class="flex items-center gap-4 text-[#111418]">
          <div class="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2
            class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]"
          >
            App Name
          </h2>
        </div>
      </header>
      <div class="flex flex-1 items-center justify-center">
        <div
          class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px]"
        >
          <h2
            class="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5"
          >
            Welcome back
          </h2>

          <!-- Username -->
          <div class="w-full max-w-[480px] px-4 py-3">
            <label class="flex flex-col w-full">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Username
              </p>
              <input
                placeholder="Enter your username"
                class="w-full resize-none overflow-hidden rounded-lg text-[#111418] border border-[#dbe0e6] bg-white focus:border-[#dbe0e6] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal focus:outline-0 focus:ring-0"
                v-model="user.username"
              />
            </label>
          </div>

          <!-- Password -->
          <div class="w-full max-w-[480px] px-4 py-3">
            <label class="flex flex-col w-full">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Password
              </p>
              <input
                placeholder="Enter your password"
                class="w-full resize-none overflow-hidden rounded-lg text-[#111418] border border-[#dbe0e6] bg-white focus:border-[#dbe0e6] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal focus:outline-0 focus:ring-0"
                v-model="user.password"
              />
            </label>
          </div>

          <!-- Forgot Password -->
          <p
            class="text-[#60758a] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline"
          >
            Forgot Password?
          </p>

          <!-- Button -->
          <div class="w-full max-w-[480px] px-4 py-3">
            <button
              class="w-full h-14 flex items-center justify-center rounded-lg bg-[#0d80f2] text-white text-base font-bold leading-normal tracking-[0.015em]"
              @click="login"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const user = reactive({
  username: `admin@${window.location.hostname}`,
  password: "12345ABCDE",
});

function login() {
  console.log("Logging In", user);
}
</script>
