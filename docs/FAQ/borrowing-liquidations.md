---
sidebar_position: 3
title: Borrowing & Liquidations
description: Complete guide to borrowing USDU, managing positions, and understanding liquidations on Uncap
---

# Borrowing & Liquidations

## What makes borrowing on Uncap different?

Uncap puts borrowers in complete control of their loan terms. You set your own interest rate rather than accepting rates determined by algorithms or governance votes. This creates a truly market-driven lending environment where rates reflect actual supply and demand dynamics.

Each Bitcoin collateral type operates its own independent collateral market, allowing diverse rate structures to emerge across different assets.

## What is a Position?

A Position functions as your personal loan management vault. Through each Position, you can:

- Adjust your collateral and debt amounts
- Set and modify your preferred interest rate
- Monitor your loan health

Each Starknet address can maintain multiple Positions, giving you flexibility to manage different risk strategies simultaneously.

## What collateral can I use?

Currently, you can use WBTC as collateral.

Additional BTC-derived assets will be supported in the future.

## Is there a minimum debt requirement?

Yes, each Position requires a minimum debt of 200 USDU.

## When do I need to repay my loan?

Uncap loans have no fixed repayment schedule. You can maintain your Position indefinitely and repay your debt whenever you choose, provided you keep your loan-to-value ratio within safe limits.

## Is there a lockup period?

No lockup periods apply to your deposits. You can withdraw collateral at any time, with one exception: withdrawals are temporarily restricted when a collateral market's total LTV exceeds 75%.

## How do I determine the right LTV for my Position?

Your LTV choice depends on your risk tolerance and how actively you want to manage your Position. Higher LTVs increase liquidation risk but maximize capital efficiency, while lower LTVs provide safety buffers.

You can create multiple Positions with different LTV strategies to diversify your approach.

## How does liquidation work?

Positions get liquidated when their LTV exceeds the maximum threshold (90.91% for WBTC).

Uncap primarily uses Stability Pools to handle liquidations. Each collateral market maintains its own Stability Pool that absorbs liquidated debt and collateral. When the Stability Pool lacks sufficient funds, the protocol employs Just-In-Time liquidations or redistributes debt and collateral across other borrowers in that market.

Liquidated borrowers typically face a 5% penalty and can claim any remaining collateral afterward. In redistribution scenarios, the maximum loss reaches 10% of debt (equivalent to 9.09% of collateral value).

## What compensation do liquidators receive?

The protocol compensates liquidators for gas costs using this formula:

`10 STRK + min(0.5% position_collateral, 0.1_units_of_collateral)`

The 10 STRK comes from your refundable gas deposit, while the variable portion comes from the liquidated collateral, slightly reducing gains for Stability Pool participants.

## What is the maximum Loan-To-Value ratio?

WBTC positions can reach a maximum LTV of 90.91%.

## What is the refundable gas deposit?

Opening any Position requires a 10 STRK liquidation reserve, regardless of collateral type. This deposit covers potential liquidation gas costs and gets returned when you close your Position voluntarily or through redemption.

In most cases, Uncap Labs will sponsor the gas deposit.

## How much will my loan cost?

Uncap charges interest continuously, making it suitable for both short-term and long-term borrowing strategies.

Your total borrowing costs include:

- **Ongoing interest**: Based on your self-set rate (e.g., 5% annual rate on 10,000 USDU = ~500 USDU yearly interest)
- **Upfront fee**: Equivalent to 7 days of average interest for that collateral market, charged when opening positions or increasing debt

## What are user-set rates?

User-set rates give you complete control over your borrowing costs and risk profile. This system enables capital-efficient equilibrium between USDU borrowers and holders through pure market forces.

These rates serve as the primary revenue source for USDU holders, creating sustainable real yield for depositors and liquidity providers. Your rate choice should reflect your tolerance for redemption risk.

Positions with delegated interest rates face additional initial collateral requirements, limiting maximum LTV when opening or borrowing more, though the liquidation threshold remains unchanged.

## Can I adjust my rate?

Yes, you can modify your interest rate at any time, giving you full autonomy over borrowing costs.

However, rate changes within 7 days of the last adjustment incur a premature adjustment fee equal to 7 days of average market interest. This prevents borrowers from manipulating rates to avoid redemption priority.

## How should I choose my interest rate?

Your rate selection should align with your goals and management style. The rate determines both your borrowing costs and your position in the redemption queue.

For active management, you might choose lower rates while carefully monitoring redemption risk and market conditions. For passive positions, higher rates provide greater security against unexpected redemptions.

Since redemptions target the lowest rates first, you typically want a buffer of borrowers with lower rates ahead of you. Consider both potential cost savings and the increased monitoring required for aggressive rate strategies.

## What might average interest rates look like?

Market forces will continuously set these rates, and they'll fluctuate over time. We expect rates to generally align with borrowing costs on other Bitcoin-collateralized lending platforms.

However, the flexibility of user-set rates may enable significantly lower costs during certain market periods.

Given that 75% of interest revenue flows directly to USDU depositors, we anticipate deposit yields that match or exceed those offered by competing CDP protocols and collateral markets. The attractiveness of USDU and potential external adoption could drive overall borrowing rates lower than other platforms.

## What determines my Position's risk level?

Two primary factors control your risk:

- **Loan-to-value ratio**: Affects liquidation probability based on your debt-to-collateral ratio
- **Interest rate**: Influences redemption risk based on your rate relative to other borrowers

You have complete flexibility to set these parameters according to your preferences, enabling different risk profiles across multiple Positions under the same address.

## Are there additional borrowing fees?

To prevent unfair redemption avoidance strategies, the protocol charges a "premature adjustment fee" for interest rate changes made within 7 days of the last adjustment or Position opening.

This fee equals 7 days of average interest for the relevant collateral market (note: this differs from your personal rate). The fee gets added to your Position's debt in USDU form. The same fee applies when opening new Positions or increasing existing debt.

## How many Positions can I open?

You can maintain multiple open Positions per address, either using the same collateral type or diversifying across different collateral assets. Each Position exists as a separate NFT for easy management.

## Are Positions transferable?

Yes, each Position exists as an ERC-721 NFT, making them fully transferable between wallets. Transferring the NFT grants complete access to the Position and all associated funds.

## How do I create leveraged exposure?

You can manually loop your exposure by borrowing USDU against your collateral, using those funds to purchase more collateral, and repeating the process to amplify your Bitcoin exposure.

Automated looping functionality is currently in development.

## How does the protocol manage collateral risks?

At launch, the only collateral type available is WBTC.

However, Uncap can operate separate collateral markets for different collateral types, each with dedicated Stability Pools, independent user-set interest rates, and specific LTV parameters.

Risk mitigation includes temporary borrowing restrictions during low collateralization periods, redemption logic that prioritizes collaterals with weaker Stability Pool backing, and emergency collateral shutdown capabilities to preserve system balance.

Despite these safeguards, USDU remains dependent on all supported collateral assets, and the protocol cannot guarantee overcollateralization if a collateral asset experiences sudden collapse.

## How does risk compartmentalization work across collaterals?

Risk exposure varies by participant type:

- **Borrowers**: Risk exposure limited to their chosen collateral asset. Other collateral failures don't directly impact individual borrowers.
- **USDU Holders**: Exposed to risks across all supported collateral assets, as USDU relies on effective liquidation across all markets to maintain overcollateralization.
- **Stability Pool Participants**: Direct exposure only to their selected asset, though they remain subject to overall USDU depegging risks as token holders.

## What happens when the Stability Pool is depleted?

If liquidations exceed Stability Pool capacity, the system provides two fallback options for liquidators:

1. **Just-in-time liquidation**: Liquidators provide USDU equal to remaining debt and receive 105% of equivalent value in Bitcoin
2. **Redistribution**: Triggers redistribution of the Position's entire debt and collateral among all borrowers in that collateral market, proportional to their collateral amounts

Liquidators can choose their preferred approach for handling debt beyond Stability Pool coverage.
