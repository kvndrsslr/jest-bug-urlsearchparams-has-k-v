// we must make these globally available for whatwg-url
const { TextEncoder, TextDecoder } = require("util");
globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;

const { JSDOM } = require("jsdom");

const testUrl = "https://example.com?foo=bar"

it("jsdom should implement has(k,v) correctly", async () => {
  const { window } = await JSDOM.fromURL(testUrl);
  const { searchParams } = new window.URL(testUrl);
  expect(searchParams.has("foo", "bar")).toBe(true);
  expect(searchParams.has("foo", "baz")).toBe(false);
})
