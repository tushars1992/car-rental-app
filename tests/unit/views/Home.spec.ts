import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import SeachForm from "@/components/SearchForm.vue";

const wrapper = shallowMount(Home);

describe("Home.vue", () => {
  it("Should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("Should Contain h1 tag and text", () => {
    const heading = wrapper.find("h1");
    expect(heading.exists()).toBeTruthy();
    expect(heading.text()).toBe("Car Rental – Search, Compare and Save");
  });

  it("Should contain SearchForm Component", () => {
    const form = wrapper.findComponent(SeachForm);
    expect(form.exists()).toBeTruthy();
  });
});
