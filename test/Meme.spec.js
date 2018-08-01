import Vue from "vue/dist/vue.common";
import Meme from "../src/components/Meme";
import * as copyToClipboard from "../src/copyToClipboard";

const Constructor = Vue.extend(Meme);

describe("Meme", () => {
  it("renders an image", () => {
    const vm = new Constructor({ propsData: { url: "https://example.com" } }).$mount();

    expect(vm.$el.outerHTML).toBe([
      "<div class=\"meme-container\">",
      "<div class=\"meme\" style=\"background-image: url(https://example.com);\"></div></div>"
    ].join(""));
  });

  it("renders an embed", () => {
    const vm = new Constructor({ propsData: { url: "https://youtu.be/Mem3b0x" } }).$mount();

    expect(vm.$el.outerHTML).toBe([
      "<div class=\"meme-container\">",
      "<iframe src=\"https://www.youtube.com/embed/Mem3b0x\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"meme\">",
      "</iframe></div>"
    ].join(""));
  });

  it("copies its URL to clipboard when clicked", done => {
    const vm = new Constructor({ propsData: { url: "https://example.com" } }).$mount();
    copyToClipboard.default = jest.fn();

    vm.$el.dispatchEvent(new window.Event("click"));
    expect(copyToClipboard.default).toHaveBeenCalledWith("https://example.com");

    vm.$nextTick(() => {
      expect(vm.$el.classList.contains("meme-container-clicked")).toBe(true);
      done();
    });
  });
});
