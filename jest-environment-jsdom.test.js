const testUrl = "https://example.com?foo=bar"

it("jest using jest-environment-jsdom should implement has(k,v) correctly", () => {
  const { searchParams } = new URL(testUrl);
  expect(searchParams.has("foo", "bar")).toBe(true);
  expect(searchParams.has("foo", "baz")).toBe(false);
})
