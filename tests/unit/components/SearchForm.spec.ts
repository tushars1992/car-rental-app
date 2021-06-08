import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import SeachForm from "@/components/SearchForm.vue";
import SeachList from "@/components/SearchList.vue";
import ErrorTile from "@/components/ErrorTile.vue";
import locationResponse from "../mocks/locationList.json";
import { LocationResult } from "@/types";
const globalRef: any = window;
const wrapper = shallowMount(SeachForm);

const mockFetch = (res: LocationResult) => {
  const mockJsonPromise = Promise.resolve(res);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  globalRef.fetch = jest.fn().mockImplementation((req) => {
    return mockFetchPromise;
  });
};

mockFetch(locationResponse);
describe("SeachForm.vue", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("Should Contain h2 tag, text and image", () => {
    const heading = wrapper.find("h2");
    expect(heading.exists()).toBeTruthy();
    expect(heading.text()).toBe("Find the right car for you");

    const imageTag = wrapper.find("img");
    expect(imageTag.exists()).toBeTruthy();
  });

  it("Should contain SeachList Component", async () => {
    const listComponent = wrapper.findComponent(SeachList);
    expect(listComponent.exists()).toBeTruthy();
  });

  it("validate SearchList props when response is empty", async () => {
    const listComponent = wrapper.findComponent(SeachList);
    expect(listComponent.exists()).toBeTruthy();

    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("ams");
    await flushPromises();

    expect(listComponent.props().list.length).toBe(6);
    expect(listComponent.props().count).toBe(140);
    expect(listComponent.isVisible()).toBe(true);
  });

  it("validate SearchList props when response is empty", async () => {
    const mockEmptyResponse = {
      results: {
        docs: [],
        isGooglePowered: false,
        numFound: 0,
      },
    };
    mockFetch(mockEmptyResponse);
    const listComponent = wrapper.findComponent(SeachList);

    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("abcd1234");
    await flushPromises();

    expect(listComponent.props().list.length).toBe(0);
    expect(listComponent.props().count).toBe(0);
    expect(listComponent.isVisible()).toBe(true);
  });

  it("SearchList should not be visible for one character", async () => {
    const listComponent = wrapper.findComponent(SeachList);

    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("a");
    await flushPromises();

    expect(listComponent.isVisible()).toBe(false);
  });

  it("SearchList should not be visible for empty spaces", async () => {
    const listComponent = wrapper.findComponent(SeachList);
    const spy = jest.spyOn(globalRef, "fetch");
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("   ");
    await flushPromises();

    expect(spy).toHaveBeenCalledTimes(0);
    expect(listComponent.isVisible()).toBe(false);
  });

  it("ErrorTile should be present when service fails", async () => {
    const mockJsonPromise = Promise.reject();
    // const globalRef: any = window;
    globalRef.fetch = jest.fn().mockImplementation(() => mockJsonPromise);

    const listComponent = wrapper.findComponent(SeachList);
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("ams");
    await flushPromises();
    const errorComponent = wrapper.findComponent(ErrorTile);
    expect(errorComponent.exists()).toBeTruthy();
    expect(listComponent.isVisible()).toBeFalsy();
  });
});
