<template>
  <div class="container">
    <h1 class="text-center">Car Rental – Search, Compare and Save</h1>
    <SearchForm class="search-form-wrapper" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchForm from "@/components/SearchForm.vue";

export default Vue.extend({
  name: "Header",
  components: { SearchForm },
});
</script>

<style lang="scss" scoped>
.container {
  padding: 40px 16px;
  background-color: $blue-10;
  color: $white;

  .search-form-wrapper {
    margin: 0 auto;
    max-width: 100%;
    padding: 16px;
  }

  @media screen and (min-width: 1024px) {
    .search-form-wrapper {
      max-width: 1124px;
    }
  }
}
</style>
