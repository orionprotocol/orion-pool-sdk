# OrionPool SDK

Warning: only Binance Smart Chain is supported now. Ethereum will be added in few days

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Actions Status](https://github.com/orionprotocol/orion-pool-sdk/workflows/CI/badge.svg)](https://github.com/orionprotocol/orion-pool-sdk)
[![npm version](https://img.shields.io/npm/v/@orionprotocol/orion-pool-sdk/latest.svg)](https://www.npmjs.com/package/@orionprotocol/orion-pool-sdk/v/latest)

In-depth documentation on this SDK is available at [here](https://uniswap.org/docs/v2/SDK/getting-started/).
(see test/bsc.trade.test.ts for BSC-network example)

## Running tests

To run the tests, follow these steps. You must have at least node v10 and [yarn](https://yarnpkg.com/) installed.

First clone the repository:

```sh
git clone https://github.com/orionprotocol/orion-pool-sdk.git
```

Move into the orion-pool-sdk working directory

```sh
cd orion-pool-sdk/
```

Install dependencies

```sh
yarn install
```

Run tests

```sh
yarn test
```

You should see output like the following:

```sh
yarn run v1.22.10
$ tsdx test
 PASS  test/bsc.pair.test.ts
 PASS  test/bsc.trade.test.ts
 PASS  test/bsc.fetch.token.test.ts
 PASS  test/bsc.fetch.pair.test.ts (5.815s)

Test Suites: 4 passed, 4 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        8.269s
Ran all test suites.
Done in 10.94s.
```
