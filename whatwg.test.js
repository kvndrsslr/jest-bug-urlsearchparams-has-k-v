// we must make these globally available for whatwg-url
const { TextEncoder, TextDecoder } = require("util");
globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;

const { URL } = require("whatwg-url");

const testUrl = "https://example.com?foo=bar"

it("whatwg should implement has(k,v) correctly", () => {
  const { searchParams } = new URL(testUrl);
  expect(searchParams.has("foo", "bar")).toBe(true);
  expect(searchParams.has("foo", "baz")).toBe(false);
})
