import { shallowMount } from "@vue/test-utils";
import SeachList from "@/components/SearchList.vue";
import locationResponse from "../mocks/locationList.json";

const wrapper = shallowMount(SeachList, {
  propsData: {
    count: 140,
    list: locationResponse.results.docs,
  },
});

describe("SeachList.vue", () => {
  it("Should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("Should Contain li tags based on prop", () => {
    const listItems = wrapper.findAll("li");
    expect(listItems.length).toBe(6);
  });

  it("validate list item data", () => {
    const name1 = wrapper.find('[data-testid="location-name-1"]');
    const type1 = wrapper.find('[data-testid="location-type-1"]');
    expect(name1.text()).toBe("Amsterdam Schiphol Airport");
    expect(type1.text()).toBe("Airport");

    const name2 = wrapper.find('[data-testid="location-name-2"]');
    const type2 = wrapper.find('[data-testid="location-type-2"]');
    expect(name2.text()).toBe("Amsterdam");
    expect(type2.text()).toBe("City");
  });

  it("no records block should be present when count is 0", async () => {
    await wrapper.setProps({
      count: 0,
      list: [],
    });
    const noRecords = wrapper.find(".no-records");
    expect(noRecords.exists()).toBeTruthy();
    expect(noRecords.text()).toBe("No results found");
  });
});
