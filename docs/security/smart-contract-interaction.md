---
id: smart-contract-interaction
sidebar_position: 4
slug: /security/smart-contract-interaction
title: Smart Contract Interaction
description: How to interact directly with Uncap smart contracts when the front-end is unavailable
---

# 🔧 Smart Contract Interaction

This guide explains how to interact directly with Uncap smart contracts in case the front-end is down. Follow these steps to close your positions and recover your collateral.

## 1. Retrieve your position ID

Go check your account address on [Voyager](https://voyager.online/). In the NFT section, look for your Uncap position and copy the token ID.

![Position ID on Voyager](/img/position_id.png)

## 2. Close a position

Go to the borrower_operation contract of your collateral:

- [WBTC](https://voyager.online/contract/0x07346E65e80eB61CDfCc56F6F21dE07B312e93fE770Fb17A6E43c1950acFdBAB)

Click **Write Contract** and look for the `close_position` function.

Paste your position ID and click **transact**.

![Close position function](/img/Close_position.png)

:::warning Important
Prior to doing this, make sure to own enough USDU to be able to repay your debt or the wallet will throw an error.
:::

## 3. Unwrap collateral

You now have closed your position but you own a wrapped version of your BTC collateral.

### Convert the amount

Copy the amount of wrapped collateral that you have received and head to [Ethereum Unit Converter](https://www.ethereum-ecosystem.com/unit-converter). Paste the amount in "Ether" and copy the output of the "Wei" field.

![Unit converter](/img/unit_converter.png)

### Execute the unwrap

Head to the collateral contract:

- [WBTC](https://voyager.online/contract/0x075d9e518F46a9CA0404Fb0a7D386ce056dAdF57Fd9A0e8659772cb517bE4A18)

Click **Write Contract** and look for the `unwrap` function. Paste the amount you wish to unwrap and click **transact**.

You have now recovered your BTC collateral.

![Unwrapped collateral](/img/unwrapped_collateral.png)
