

# 01_financial_industry_window.md
## Financial / Industry / ISK Intelligence Window

### Purpose of this Document
This document defines the **Financial / Industry / ISK-related window** of the application.  
It establishes scope, tab structure, sub-tab responsibilities, and design constraints.

This window is concerned exclusively with **ISK-related actions and outcomes**, not with the execution of in-game activities themselves.

---

## Scope Definition

### Included
- Market activity (buy/sell orders, contracts, arbitrage)
- Player wallet data and transaction history
- Income and expense flow analysis
- Asset valuation and unrealized gains
- Ship and fitting **expenses** (ships, modules, ammo, consumables)
- Industry, research, mining, and PI **financial outcomes**
- Bounties and ISK rewards resulting from activities

### Explicitly Excluded
- Execution of in-game activities (combat, mining, exploration)
- Tactical ship fitting decisions
- Site running mechanics
- Activity efficiency beyond ISK outcomes

This separation ensures **clean boundaries** between financial intelligence and gameplay execution.

---

## UI Structure Principles

- This window is presented as a **primary top-level tab**
- All primary tabs are **user-reorderable**
- Each primary tab contains **left-oriented, vertically stacked sub-tabs**
- Sub-tabs focus on **one functional concern each**
- Cross-linking between tabs is encouraged (e.g., Market ↔ Industry)

---

## Primary Tab 1: Market Intelligence

### SubTab 1.1 — Market Browser
Focus: Understanding the market state.

Features:
- Unified view of **all buy and sell orders**
- Player-owned orders visually highlighted
- Region selector (dropdown)
- Station search (global and regional)
- Tree-based display of **all in-game items**
  - Collapsible hierarchy
  - Search and filter support

Integrated Tools (with user-defined parameters):
- Deal Finder
- Profit Finder
- Station Trading Tool
- Arbitrage Tool

These tools feed results into Industry and Procurement tabs.

---

### SubTab 1.2 — Player Orders & Contracts
Focus: Managing player exposure.

Features:
- Active player market orders
  - Color-coded by expiry (user-defined thresholds)
- Contract tracking
  - Outstanding contracts
  - Completed contracts
  - Same expiry-based color logic
- Historical order performance metrics

This sub-tab contains **all player-controlled market commitments**.

---

## Primary Tab 2: Expenditures & Procurement

### Purpose
This tab represents the **flow of ISK** — where it comes from, where it goes, and what sustains it.

---

### SubTab 2.1 — Shopping Lists & Procurement
Focus: Recurrent purchases and loss replacement.

Features:
- Saved shopping lists
- Automatically suggested lists based on:
  - Repeated purchases
  - Average item loss (linked from activity outcomes)
- Fit import support
  - Breakdown of all components
  - Average market price per component
- Refinement options:
  - Closest station
  - Best price
  - Build vs buy comparison

Industry integration:
- Component-level breakdown
- Build time, materials, and material costs
- Direct link to Industry tab

---

### SubTab 2.2 — Assets & Unrealized Gains
Focus: What you own and its latent value.

Features:
- Asset list with location and average price
- Unrealized gains calculation
- User-defined classification:
  - Sell
  - Keep
  - Trash
  - Vendor
  - Custom tags
- Fuzzy tagging logic:
  - Tag one item → similar items auto-tagged
  - Tag by category, meta-level, or item attributes
- Funnel-style selection to refine liquidation strategies

---

### SubTab 2.3 — Appraisal
Focus: Rapid valuation.

Features:
- Clipboard-based appraisal
- Average price calculation
- Direct links to:
  - Market tab
  - Best and closest prices

---

## Primary Tab 3: Wallet & Income Analysis

### SubTab 3.1 — Wallet Overview
Focus: High-level financial health.

Features:
- Main wallet balance
- Unrealized gains
- Income & expense charts (graphs / pie)
- Recent transactions (filtered)
- Categorized income vs expense
- Top 5:
  - Most expensive assets
  - Cheapest assets
  - With location context

---

### SubTab 3.2 — Transaction History
Focus: Detailed financial auditing.

Features:
- Full wallet transaction history
- Advanced filtering:
  - Income vs expense
  - Category
  - Time/Date range
  - ISK thresholds

---

### SubTab 3.3 — Bounties & Payouts
Focus: ISK results from combat activity.

Features:
- Kill-based bounty ledger
- Time range selectors:
  - Quick presets (last hour, 24h, etc.)
  - Custom date/time ranges
- Total bounty value prominently displayed
- Breakdown by:
  - NPC type
  - Individual kill value

This tab captures **results only**, not combat execution.

---

### SubTab 3.4 — Wallet Extensions
Reserved for:
- Future wallet-related analytics
- Additional income streams
- CCP API expansions

---

## Primary Tab 4: Production & Mining Ledgers (Financial View)

### Purpose
This tab acts as a **P&L ledger** for industrial activity. It does **not** manage active jobs (see Industry Domain).

Features:
- **Active Job Preview Widget:**
  - Compact summary: "X Jobs Active, Y Ready"
  - Total estimated output value (ISK)
  - Link to Industry Dashboard
- **Production P&L:**
  - Historical profitability of completed jobs
  - Cost vs Sold Value
- **Mining Ledger:**
  - Historical view of ore value mined (ISK)
  - Time-series graph of mining income
- **Planetary (PI) Ledger:**
  - Historical view of commodities exported vs taxes paid
  - Net Income per planet

This tab answers: **"How much ISK did my industry making me?"**

---

## Primary Tab 5 & 6: [Deprecated / Merged]

The specific Mining and PI operational tabs have been moved to the dedicated **Industry, Research & Supply Chain** domain (`07_industry_supply_chain.md`).
Their financial aspects are consolidated into Tab 4 above.

---

## Design Notes & Constraints

- All tabs are **reorderable**
- Cross-tab navigation is expected and encouraged
- Financial truth is prioritized over gameplay abstraction
- All calculations are transparent and explainable
- This window is strictly **ISK-centric**

---

### Closing Statement
This window represents the **economic core** of the application.  
It consolidates market behavior, spending habits, asset valuation, and industrial profitability into a single, coherent interface designed to answer one question:

**“Where is my ISK coming from, where is it going, and what should I do next?”**

Subsequent documents will define **UI behavior, visual design, and technical implementation details** for each tab and sub-tab.

---
**Proprietary Notice:** This documentation and the EVE Unified Intelligence project are proprietary. Unauthorized distribution, reproduction, or reuse is strictly prohibited.
