import getEmbedUrl from "../src/getEmbedUrl";

describe("getEmbedUrl", () => {
  it("returns null for an incompatible URL", () => {
    expect(getEmbedUrl("whatever")).toBe(null);
  });

  it("correctly formats a youtu.be URL", () => {
    expect(getEmbedUrl("https://youtu.be/Mem3b0x")).toBe("https://www.youtube.com/embed/Mem3b0x");
  });

  it("correctly formats a youtube.com URL", () => {
    expect(getEmbedUrl("https://youtube.com/watch?v=Mem3b0x")).toBe("https://www.youtube.com/embed/Mem3b0x");
  });

  it("leaves a youtube.com/embed URL untouched", () => {
    const url = "https://www.youtube.com/embed/Mem3b0x";
    expect(getEmbedUrl(url)).toBe(url);
  });
});
