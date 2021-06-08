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
        v-model.trim="searchText"
        @input="searchLocation()"
      />
      <span class="loader d-inline-block p-absolute" v-show="isLoading"></span>
      <SearchList
        v-show="showList && !isError"
        :list="resultList"
        :count="resultCount"
      />
    </div>
    <ErrorTile v-if="isError" />
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { getData } from "@/services";
import { LocationResult, LocationItem } from "@/types";
import SearchList from "@/components/SearchList.vue";
import ErrorTile from "@/components/ErrorTile.vue";
export default Vue.extend({
  name: "SearchForm",
  components: {
    SearchList,
    ErrorTile,
  },
  data() {
    return {
      searchText: "",
      resultList: [] as Array<LocationItem>,
      resultCount: 0,
      showList: false,
      isError: false,
      isLoading: false,
    };
  },
  methods: {
    async searchLocation() {
      if (this.searchText.length >= 2) {
        this.isLoading = true;
        try {
          const { results }: LocationResult = await getData(this.searchText);
          this.resultList = results.docs;
          this.resultCount = results.numFound;
          this.showList = true;
          this.isError = false;
        } catch (_) {
          this.isError = true;
          this.resultList = [] as Array<LocationItem>;
        } finally {
          this.isLoading = false;
        }
      } else {
        this.showList = false;
        this.resultList = [] as Array<LocationItem>;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_loader.scss";

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
