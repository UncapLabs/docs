---
slug: wbtc-yield-vault-ethereum-mainnet
title: Uncap announces the launch of a WBTC yield vault on Ethereum Mainnet
authors: [usamaro]
tags: [bitcoin, btcfi, starknet]
description: A new WBTC vault leverages Lagoon Finance, 9Summits, and Uncap Protocol to streamline Bitcoin yield generation on Starknet through a simple Ethereum Mainnet deposit.
---

![WBTC Yield Vault](/img/BTC%20vault.png)

This vault leverages the infrastructure of Lagoon Finance, 9Summits, and Uncap Protocol to streamline Bitcoin yield generation. It enables users to deposit WBTC on Ethereum Mainnet and access curated strategies on Starknet through a single interface.

<!--truncate-->

## Active management is a barrier

For many holders, the friction of chasing yield is too high. Moving capital to high-performance Layer 2s like Starknet offers superior capital efficiency, but it requires manual bridging, constant monitoring, and active position management.

Until now, accessing these opportunities meant navigating fragmented liquidity and complex execution.

## A hassle-free vault

The WBTC vault abstracts these complexities. It offers a simple experience where a Mainnet deposit unlocks sophisticated L2 strategies. Users deposit WBTC, and the vault handles the bridging and strategy deployment transparently in the background. It allows for high-performance yield without the operational headache.

## The strategy

**Deposit:** Users deposit WBTC into the Lagoon vault on Ethereum Mainnet.

**Bridge & deploy:** The curator (9Summits) manages the bridging of assets to Starknet.

**Yield generation:** The strategy mints USDU (Uncap's stablecoin) against the WBTC collateral. This capital is deployed into a delta-neutral loop using ZeroDelta (0D) and the Market Making (MM) vaults of Extended.

## Yield composition

The vault targets a sustainable APY derived from three sources:

**Organic yield:** Generated via ZeroDelta and the Market Making vaults on Extended.

**Liquidation revenue:** Profits generated from Uncap Stability Pools where collateral is acquired at a discount during liquidation events, and yield originating from borrowers' interest payments.

**Incentives:** Direct participation in Starknet's DeFi Spring including STRK rewards.

## Transparency

Visibility is standard. Uncap provides a live dashboard where users can verify exactly where funds are allocated in real-time. This allows you to monitor the strategy's health and position breakdown at any moment, ensuring complete clarity on how yield is generated.

[View the dashboard](https://uncap.finance/vault)

## Built on robust infrastructure

The WBTC yield vault utilizes Lagoon Finance's implementation of the ERC-7540 asynchronous vault standard. This structure separates user requests from settlement, allowing the curator to manage liquidity and bridging securely without exposing the vault to atomic arbitrage or sandwich attacks.

The vault integrates leading ecosystem infrastructure:

- **Platform:** Lagoon Finance
- **Curator:** 9Summits
- **Asset:** WBTC
- **Strategy Components:** Uncap Protocol, Extended, ZeroDelta

## Getting started

The WBTC yield vault is open for deposits on Ethereum Mainnet.

[Deposit WBTC on Lagoon Finance](https://app.lagoon.finance/vault/1/0xeff2c1cc0e3bbb6bedc9622a309ed75eab730521)
