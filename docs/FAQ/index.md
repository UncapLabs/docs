---
sidebar_position: 1
title: The Uncap protocol
description: Frequently asked questions about the Uncap protocol, inspired by Liquity v2 documentation with Uncap-specific details
---

# The Uncap Protocol

Uncap is a Bitcoin-centric borrowing protocol that enables users to mint USDU, a USD-pegged stablecoin, by depositing BTC as collateral. The protocol operates through four core mechanisms that work together to maintain stability and provide yield opportunities.

## Borrowing

Users deposit WBTC (or other Bitcoin-derived assets) as collateral to mint USDU stablecoins through Positions—individual loan management vaults represented as NFTs. What makes Uncap unique is that borrowers set their own interest rates rather than accepting algorithmically-determined rates.

Each Position requires a minimum debt of 200 USDU and can reach up to 86.96% loan-to-value ratio for WBTC. Loans have no fixed repayment schedule, allowing indefinite borrowing as long as the position remains healthy. Your chosen interest rate determines both your borrowing costs and your position in the redemption queue—lower rates mean lower costs but higher redemption risk.

Borrowing costs include ongoing interest based on your self-set rate plus an upfront fee equivalent to 7 days of average market interest. This user-controlled rate system creates a market-driven lending environment where rates reflect actual supply and demand.

## Liquidations

Positions are liquidated when their LTV exceeds the maximum threshold (86.96% for WBTC). Uncap primarily uses Stability Pools to handle liquidations—each collateral market maintains its own pool that absorbs liquidated debt and distributes collateral to depositors.

When a Stability Pool lacks sufficient funds, the protocol employs two fallback mechanisms:
- **Just-in-time liquidation**: Liquidators provide USDU and receive 105% of equivalent value in Bitcoin
- **Redistribution**: The position's debt and collateral are distributed among all borrowers in that market

Liquidated borrowers typically face a 5% penalty and can claim any remaining collateral. The protocol compensates liquidators for gas costs, ensuring timely liquidation execution to protect system solvency.

## Stability Pool

The Stability Pool allows USDU holders to earn yield by providing liquidation coverage. Depositors earn from two sources:
- **Interest payments**: 75% of borrower interest flows to Stability Pool participants
- **Liquidation gains**: Your USDU purchases collateral from liquidated positions at approximately 5% discount

Each collateral type has its own Stability Pool, allowing depositors to choose their risk exposure. There are no lockup periods—you can withdraw deposits anytime. The yield often exceeds average borrowing rates when less than 75% of USDU supply is deposited, creating attractive real yield opportunities without token emissions.

## Redemptions

Redemptions maintain USDU's peg by creating a decentralized price floor around $1. Anyone can swap USDU for Bitcoin at face value (treating 1 USDU as $1), which is typically only profitable when USDU trades below $1.

The protocol targets Positions with the lowest interest rates first, processing redemptions until the full USDU amount is exchanged. When your position is redeemed, someone else essentially repays your debt and takes equivalent collateral—your debt and collateral both decrease by equal USD amounts, with a small redemption fee added to your remaining collateral.

Redemption fees depend on a dynamic `baseRate` that increases with each redemption and exponentially decays over time. This mechanism naturally discourages excessive redemptions while providing strong arbitrage incentives when USDU trades significantly below peg.

---

## Explore Further

For detailed information about specific aspects of the protocol, see:

- **[Borrowing & Liquidations](./borrowing-liquidations)** - Complete guide to borrowing USDU, managing positions, and understanding liquidations
- **[USDU & Earn](./usdu-and-earn)** - Information about USDU stablecoin and earning opportunities  
- **[Redemptions & Delegations](./redemptions-and-delegations)** - Details on redemption mechanisms and delegation features
