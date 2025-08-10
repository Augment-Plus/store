<template>
  <router-view></router-view>
</template>

<script setup>
import { useTitle } from "@vueuse/core";
import config from "./config";

useTitle(config.appName);
</script>