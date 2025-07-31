<template>
  <div>You are viewing {{ domain }}</div>
</template>

<script setup>
const domain = window.location.hostname;
</script>
