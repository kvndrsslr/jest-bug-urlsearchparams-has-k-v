# Problem Description

`URLSearchParams#has(k,v)` seems to be not correctly implemented in jest when using `testEnvironment: 'jsdom'`.
I have no idea where this goes wrong, as it works in `node` by default and it works when testing `jsdom` and `whatwg-url` in isolation too.
All the tests were implemented using jest and node native testing.

## Prepare

```bash
git clone https://github.com/kvndrsslr/jest-bug-urlsearchparams-has-k-v.git
cd jest-bug-urlsearchparams-has-k-v
npm ci
```

## Test

```bash
npm run test
```

This fails only on `./jsdom-test-env.test.js`.
Now try to comment out line 3 in `./jest.config.js` and run again:

```bash
npm run test
```

This time all the tests pass.