<template>
  <div>You are viewing {{ hostname }}</div>
  <router-view></router-view>
</template>

<script setup>
import { useTitle } from "@vueuse/core";
import config from "./config";

useTitle(config.appName);

const hostname = window.location.hostname;
</script>