const assert = require("node:assert");
const { it } = require("node:test");

const testUrl = "https://example.com?foo=bar"

it("node should implement has(k,v) correctly", async () => {
  const { searchParams } = new URL(testUrl);
  assert.strictEqual(searchParams.has("foo", "bar"), true);
  assert.strictEqual(searchParams.has("foo", "baz"), false);
})