<template>
  <form class="search-form">
    <h2 class="text-left">Find the right car for you</h2>
    <div class="search-field p-relative text-center d-flex align-center">
      <span class="p-absolute">
        <img
          class="search-svg"
          importance="low"
          src="../assets/images/navigation.svg"
          alt="navigation-icon"
        />
      </span>
      <input
        type="text"
        placeholder="Pick-up location"
        aria-describedby="Pick-up location"
        v-model="searchText"
      />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SearchForm",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.search-form {
  background-color: $yellow-10;
  max-width: 100%;
  border-radius: 8px;
  padding: 16px;
  color: $black;

  .search-svg {
    height: 16px;
    width: 16px;
    margin-left: 8px;
  }

  .search-field {
    width: 100%;
    input {
      width: 100%;
      height: 44px;
      border-radius: 4px;
      border: 1px solid $gray-10;
      line-height: 24px;
      padding: 8px 8px 8px 32px;

      &:focus {
        box-shadow: 0 0 0 3px rgb(18 115 196 / 24%);
        outline: none;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .search-form {
    max-width: 1124px;
    padding: 16px;

    .search-field {
      width: 37.5%;
    }
  }
}
</style>
