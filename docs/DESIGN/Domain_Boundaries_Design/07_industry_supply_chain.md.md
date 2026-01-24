# 07_industry_supply_chain.md
## Industry, Research & Supply Chain Intelligence

### Purpose of this Document
This document defines the **Industry, Research, and Supply Chain** domain.
It establishes the operational control center for manufacturing, science, and logistics.

This window is concerned with **execution, material flow, and production lines**. It answers: *"What am I building, do I have the materials, and where does it need to go?"*

It is distinct from the **Financial Window**, which tracks the *profitability* (P&L) of these actions.

---

## Scope Definition

### Included
- **Active Job Management:** Detailed status, time-to-completion, and outcome locations for Manufacturing, Research, and Reaction jobs.
- **Blueprint Library:** Management of BPOs and BPCs, including ME/TE levels and location.
- **Production Chain Modeling:** Recursive breakdown of complex builds (T2/Capital) into component jobs.
- **Supply Chain Logistics:** Analysis of input material locations vs. production facility locations (Import requirements).
- **Output Logistics:** Tracking of finished goods and export requirements.
- **Planetary Production (PI) Operations:** Colony status, routing, and extraction lifecycles (Command Center view).

### Explicitly Excluded
- **Profit & Loss Analysis:** (Belongs to Financial Domain).
- **Market Selling/Buying:** (Belongs to Market Domain).
- **Wallet Transactions:** (Belongs to Wallet Domain).

---

## UI Structure Principles

- This domain is presented as a **primary top-level tab**.
- Layout focuses on **flow**: Input -> Process -> Output.
- Visuals emphasize **state and time** (Progress bars, timers, location markers).

---

## Primary Tab 1: Operations Dashboard (The Factory Floor)

### Purpose
A high-density view of what is currently happening.

### SubTab 1.1 — Active Industry Jobs
Focus: Manufacturing & Science execution.

Features:
- Table view of all active jobs (Manuf, Copy, ME/TE, Invention).
- Visual progress bars with exact "Time to Completion".
- Grouping by:
  - Station/Facility
  - Activity Type
  - Character
- "Ready to Deliver" visual alerts.
- **Output Preview:** Hovering a job shows exactly what will be delivered and where.

### SubTab 1.2 — Planetary Command (PI)
Focus: Colony health and routing.

Features:
- Grid view of all colonies across characters.
- Health indicators:
  - Extractor cycle remaining (Red/Yellow/Green).
  - Storage capacity (Alerts on overflow).
  - Route validation (Missing links).
- This is the **Operational View**, distinct from the P&L view in Financial.

---

## Primary Tab 2: Production Planning (The Engineer)

### Purpose
Planning future builds and understanding complexity.

### SubTab 2.1 — Blueprint Library
Focus: Asset capability.

Features:
- Searchable library of all BPOs and BPCs.
- Filtering by:
  - Location (Region/System).
  - Group (Ammo, Ships, Components).
  - ME/TE Quality.
- **"Buildable Now"** indicator: Checks local assets against blueprint BOM (Bill of Materials).

### SubTab 2.2 — Production Chain Solver
Focus: Recursive build planning.

Features:
- User selects a target item (e.g., "Vargur").
- System generates a **Dependency Tree**:
  - Top level: Hull.
  - Level 2: Advanced Components.
  - Level 3: Raw Moon Materials / Gas / Minerals.
- Contextual Actions:
  - "Have BPO" indicators on tree nodes.
  - "Missing Materials" calculation.

---

## Primary Tab 3: Supply Chain & Logistics (The Hauler)

### Purpose
Ensuring materials are in the right place at the right time.

### SubTab 3.1 — Material Requirements (Inputs)
Focus: What do I need to buy or move?

Features:
- Aggregates inputs for all *Planned* jobs.
- **Gap Analysis:** `Required - Current Assets (at factory) = Deficit`.
- **Sourcing logic:**
  - "Available in Jita" (Buy & Haul).
  - "Available in Local Asset Safety" (Move).
  - "Available via Mining" (Acquire).

### SubTab 3.2 — Export & Distribution (Outputs)
Focus: Moving finished goods to market.

Features:
- List of finished jobs/items at factory locations.
- Destination setting (e.g., "Trade Hub: Jita 4-4").
- **Volume Calculation:** Total m3 for courier contracts or hauling ship selection.

---

## Design Notes & Constraints

- **Dependency:** Heavily relies on the `Assets` and `Blueprints` ESI endpoints.
- **Aesthetic:** "Industrial Dark". Use schematics and flowcharts where possible instead of just rows of text.
- **Cross-Linking:**
  - Clicking a missing material links to **Market (Procurement)**.
  - Clicking a completed item links to **Assets**.
  - Completing a job creates a log entry in **Financial (Ledger)**.

---

### Closing Statement
The Industry & Research domain is the **engine room** of the application. It manages the physical reality of EVE assets—transforming raw materials into value. It ensures the player knows not just *if* they are making money, but *how* to keep the factory running efficiently.
