---
id: redemptions-and-delegations
sidebar_position: 5
slug: /how-to/redemptions-and-delegations
title: Redemptions and Delegations
description: Understanding redemptions, delegation mechanisms, and how they work on Uncap
---

# 🔄 Redemptions and Delegation

## What are redemptions?

Redemptions maintain USDU's USD peg by creating a decentralized price floor around $1, without relying on centralized assets or third parties.

A redemption involves swapping USDU for Bitcoin at face value (treating 1 USDU as exactly $1). Anyone can initiate redemptions, but they're typically only profitable when USDU trades below $1.

The redeemer exchanges USDU for a mix of collaterals minus redemption fees. The redemption amount gets split among different collateral assets based on their current Stability Pool backing, starting with borrowers paying the lowest interest rates.

![What are redemptions](/img/what_are_redemptions.svg)

## When can redemptions occur?

Redemptions can happen anytime but usually only occur when profitable - typically when USDU price drops below $1 minus the current redemption fee.

## Who can initiate redemptions?

Any Starknet address can initiate redemptions with sufficient USDU amounts. However, we expect professional arbitrage bots to handle most redemption activity rather than individual users.

## What happens if my Position gets redeemed?

Think of redemption as someone else repaying your debt and taking equivalent collateral in return.

During redemption, your debt decreases by the USD value of redeemed collateral. The redeemer receives your collateral minus the redemption fee, which remains in your Position. At redemption time, you typically experience minimal USD-denominated loss.

Example (with BTC at $100,000):

- **Before redemption**: 1 BTC collateral, 75,000 USDU debt
- **After redemption**: 0.5025 BTC collateral, 25,000 USDU debt

Your collateral and debt reduce equally in USD terms, while the redemption fee (0.0025 BTC) gets added to your collateral value.

Partially redeemed Positions with debt above 200 USDU continue operating normally, while Positions reduced below this threshold enter dormant (or zombie) mode.

## How do redemptions work across multiple collaterals?

Rather than letting redeemers choose collaterals, Uncap optimizes the process for economic safety by providing a collateral mix that enhances overall USDU backing.

Redemptions target Positions with the lowest interest rates in each collateral market and continue until the full USDU amount gets exchanged. Redemptions can be partial or complete.

![Redemptions across multiple collaterals](/img/redemptions_across_multiple_collaterals.svg)

## How is the collateral split determined?

The split dynamically optimizes for system economic safety. The logic prioritizes riskier collaterals by directing more redemption volume toward markets with relatively small Stability Pools compared to total debt.

To mitigate this risk, the system redeems proportionally to each collateral type's "outside debt" (total debt minus Stability Pool size for that market).

Example: With outside debt amounts of 100 USDU, 50 USDU, and 100 USDU respectively, redemptions would split 40% (WBTC), 20% (xBTC), and 40% (TBTC).

## What happens when multiple Positions have identical rates?

When rates match, the protocol uses "last-in-first-redeemed" ordering. The most recent Position to set that rate (either through opening or adjustment) gets redeemed first.

Example redemption order:

- Position A - 3%
- Position B - 4% (adjusted earlier)
- Position C - 4% (adjusted later)

Redemption sequence: A, C, B

## Is there a redemption fee?

Yes, redemption fees represent a percentage of total collateral drawn from the system. The fee stays with affected borrowers as additional collateral.

Fees depend on the dynamic `baseRate` variable, which increases with each redemption and exponentially decays over time (6-hour half-life).

Each redemption of x USDU: decays `baseRate` based on time since the last fee event, then increments by an amount proportional to `x/total_USDU_supply`.

The redemption fee percentage equals `min(0.5% + baseRate, 100%)`.

## How can I protect against redemptions?

Redemption risk depends on two factors: your interest rate and USDU's market price.

**Your interest rate** determines how much USDU must be redeemed before reaching your Position. Higher rates provide more protection, while lower rates increase exposure.

The frontend shows your redemption buffer - the amount of USDU that must be removed before affecting your Position. Consider this alongside recent redemption activity to assess your risk level.

**USDU's price** is equally crucial. When USDU trades above $1, redemptions become unprofitable and should cease. Strong USDU demand can maintain above-$1 pricing for extended periods, allowing you to safely reduce rates without increasing redemption risk.

## What is interest rate delegation?

Interest rate delegation allows borrowers to assign rate management to third parties, enabling passive Position management while maintaining competitive rates and low redemption risk.

Delegates can only adjust interest rates within predetermined ranges, significantly limiting risks for borrowers. Monitor the preset interest rate range and maximum update frequency (relevant for premature adjustment scenarios) when choosing delegation managers.

## What happens if delegation smart contracts malfunction?

Position safety remains intact - only the interest rate setting capability would be affected if delegation contracts encounter issues.

## Why do redemptions only consider interest rates, not LTV?

Since redemptions aim to reduce USDU supply in response to decreased demand, and interest rates drive USDU demand, rate-based redemption processing provides more sustainable and effective market equilibrium.

Managing both interest rates and LTV would weaken the system's ability to enforce market-level rates and deposit yields while unnecessarily complicating the process.

## What happens when redemptions reduce debt below the minimum?

If redemption fully eliminates a Position's debt, it remains open with 0 USDU debt and remaining collateral. The owner can either close by withdrawing remaining collateral or borrow again to exceed the 200 USDU minimum.

If redemption reduces debt below 200 USDU without reaching zero, the Position stays open with remaining debt and collateral. The owner can close by repaying remaining debt and withdrawing collateral, or borrow additional amounts as described above.
