import { shallowMount } from "@vue/test-utils";
import ErrorTile from "@/components/ErrorTile.vue";

const wrapper = shallowMount(ErrorTile);

describe("ErrorTile.vue", () => {
  it("Should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("validate content", () => {
    const errorBlock = wrapper.find(".error-tile");
    expect(errorBlock.exists()).toBeTruthy();
    expect(errorBlock.text()).toBe("Something went wrong please try again");
  });
});
