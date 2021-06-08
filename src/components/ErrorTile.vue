<template>
  <div class="error-tile">Something went wrong please try again</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ErrorTile",
});
</script>

<style lang="scss" scoped>
.error-tile {
  height: 40px;
  padding: 8px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
