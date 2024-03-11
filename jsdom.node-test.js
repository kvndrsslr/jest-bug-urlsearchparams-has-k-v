const { JSDOM } = require("jsdom");
const assert = require("node:assert");
const { it } = require("node:test");

const testUrl = "https://example.com?foo=bar"

it("jsdom should implement has(k,v) correctly", async () => {
  const { window } = await JSDOM.fromURL(testUrl);
  const { searchParams } = new window.URL(testUrl);
  assert.strictEqual(searchParams.has("foo", "bar"), true);
  assert.strictEqual(searchParams.has("foo", "baz"), false);
})