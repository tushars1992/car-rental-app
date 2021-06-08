<template>
  <div class="search-list p-absolute">
    <ul role="list" v-if="count">
      <li
        class="d-flex"
        v-for="item in list"
        :key="item.index"
        role="listitem"
        tabindex="0"
      >
        <div>
          <span
            :data-testid="`location-type-${item.index}`"
            :class="`type d-inline-block text-center font-small type--${item.placeType}`"
            >{{ getPlaceType(item.placeType) }}</span
          >
        </div>
        <div class="right-blk text-left">
          <div class="line-1">
            <span :data-testid="`location-name-${item.index}`" v-if="item.name">
              {{ item.name }}</span
            >
            <span v-if="item.iata"> ( {{ item.iata }} )</span>
          </div>
          <div class="font-small line-2">
            <span v-if="item.city"> {{ item.city }},</span>
            <span v-if="item.region"> {{ item.region }},</span>
            <span v-if="item.country"> {{ item.country }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="no-records d-flex align-center text-left">
      No results found
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { LocationItem } from "@/types";

export default Vue.extend({
  name: "SearchList",
  props: {
    list: {
      type: Array as PropType<LocationItem[]>,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getPlaceType(item: string): string {
      switch (item) {
        case "A":
          return "Airport";
        case "C":
          return "City";
        case "D":
          return "Region";
        case "F":
          return "Region";
        case "T":
          return "Station";
        default:
          return "Other";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.search-list {
  top: 43px;
  width: 100%;
  font-weight: 600;
  min-height: 40px;
  background-color: $white;
  border: 1px solid $black;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  .no-records {
    padding: 8px;
  }

  ul {
    padding: 0;
    margin: 0;
    overflow: auto;

    li {
      padding: 8px;
      cursor: pointer;
      border-bottom: 1px solid $red-10;

      &:focus,
      &:hover {
        background-color: $blue-20;
      }

      &:last-child {
        border: 0;
      }

      .type {
        color: $white;
        min-width: 5rem;
        border-radius: 4px;
        padding: 2px 4px;
        background-color: $gray;

        &--A {
          background-color: $red;
        }
        &--C {
          background-color: $blue;
        }
        &--D {
          background-color: $green;
        }
        &--F {
          background-color: $yellow;
        }
      }
      .right-blk {
        padding-left: 8px;

        .line-1 {
          line-height: 20px;
        }

        .line-2 {
          line-height: 18px;
        }
      }
    }
  }
}
</style>
