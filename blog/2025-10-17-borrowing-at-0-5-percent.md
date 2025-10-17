---
slug: borrowing-at-0-5-percent
title: Borrowing at 0.5%
authors: [alexandre]
tags: [bitcoin, borrowing, usdu, redemptions]
description: Understanding how to borrow USDU at ultra-low interest rates against BTC, how redemptions work, and why being redeemed isn't necessarily a bad thing.
---

# Borrowing at 0.5% against BTC – Fully explained

You want to borrow USDU at a very low interest rate against your BTC but are wondering about the risk of redemptions?

And is it necessarily bad to be redeemed? Let's explain simply 👇

<!--truncate-->

## What are redemptions?

Redemptions are a mechanism that allows *any* holder of USDU to redeem it directly with the protocol for BTC — at a fixed rate of **1 USDU = 1 USDC** worth of BTC.

This mechanism ensures that **USDU quickly returns to its peg** whenever it trades below $1.

## Why do redemptions matter?

Imagine a scenario where USDU slightly depegs to the downside:

👉 1 USDU = 0.95 USDC on the market.

Here's what an arbitrageur can do:

- Buy 1 USDU for 0.95 USDC
- Redeem it in the protocol for 1 USDU = 1 USDC worth of BTC
- Sell the BTC for ~1 USDC

**Result:** a ~5% profit 💰 *(excluding redemption fee — more on that below)*

This arbitrage restores the peg by removing underpriced USDU from circulation.

## What about redemption fees?

Each redemption has a **0.4% fee**, which doesn't go to the protocol — it goes to **the position that was redeemed from.**

So if your position is redeemed, you *receive* that 0.4% bonus in USDU for the BTC that leaves your position.

It's basically like selling part of your BTC at a **0.4% premium**. Not that bad.

## Who gets redeemed first?

Redemptions target **positions with the lowest interest rates** first.

Why? Because those users enjoy the **best borrowing conditions** — the lowest cost of capital — but that benefit comes with a small tradeoff.

It's all about **risk–reward balance**:

➡️ Lower rates = better deal, but higher chance of redemption

➡️ Higher rates = more costly, but safer from redemptions

Every borrower chooses their own balance between **cost and exposure** — that's the beauty of this mechanism which allows user-defined interest rates. **All credits to Liquity**

## So… is it bad to be redeemed?

Not really.

When your position gets redeemed:

- You lose a portion of BTC collateral
- Your debt decreases by the same amount
- You receive a 0.4% fee bonus in USDU

In practice, it's like **partially selling BTC above market price** — while your loan gets smaller.
