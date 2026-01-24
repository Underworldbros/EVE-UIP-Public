

# EVE Unified Intelligence Platform  
### A Personal, Modular Intelligence & Analysis System for EVE Online

---

## White Paper — Project Overview & Vision

**Status:** Conceptual Design / Pre-Development  
**Scope:** Personal-use primary application with optional scalability  
**Audience:** EVE Online players seeking consolidated intelligence, analysis, and situational awareness

---

## Abstract

The **EVE Unified Intelligence Platform** is a feature-rich, modular application designed to consolidate the fragmented ecosystem of EVE Online third-party tools into a **single, cohesive intelligence environment**.

Rather than replacing gameplay, the platform augments player decision-making by integrating:
- Financial and market intelligence
- Activity history and run journaling
- Spatial awareness and map-based analysis
- Player, conflict, and threat intelligence
- Character capability modeling
- Temporal planning and event awareness

The system prioritizes **clarity, customization, and user agency**, enabling players to interpret information without automation-driven conclusions or enforced workflows.

---

## Problem Statement

EVE Online players commonly rely on multiple independent websites and tools to manage:
- Market analysis
- Wallet tracking
- Kill intelligence
- Mapping and navigation
- Skill planning
- Event scheduling

This fragmentation introduces:
- Cognitive overhead
- Redundant data retrieval
- Performance and resource strain
- Context loss between systems

The Unified Intelligence Platform addresses these issues by centralizing data, contextualizing relationships, and preserving player control.

---

## Design Philosophy

The project is guided by the following core principles:

- **Inform, Don’t Decide**  
  The platform provides context and analysis, never automated actions or prescriptions.

- **User Intelligence First**  
  Personal notes, experience, and judgment outweigh public aggregates.

- **Modular & Optional**  
  Every domain, feature, overlay, and heuristic can be enabled, customized, or disabled.

- **Performance-Conscious**  
  2D visualization, caching, and non-real-time ingestion are prioritized.

- **Transparency**  
  Derived metrics and heuristics are visible, adjustable, and non-authoritative.

---

## High-Level System Domains

### 1. Financial & Economic Intelligence
- Market data and trend analysis
- Wallet parsing and income vs expenditure
- Asset valuation and unrealized gains
- Procurement, industry, mining, and PI financial outcomes
- Market spike correlation with conflict events

### 2. Run History & Activity Journal
- Structured logging of non-market activities
- Editable run records with loot, bounties, and notes
- Fuzzy linking to systems, factions, items, and players
- Metrics aggregation without automation

### 3. Map & Spatial Intelligence
- EVEeye-inspired 2D universe map
- Layer-based overlays for traffic, events, competition, and risk
- User drawings, annotations, and tags
- Route planning and wormhole intelligence
- System pressure and congestion modeling

### 4. Player Intelligence & Threat Analysis
- Killboard-driven threat heuristics
- Local chat, D-scan, and system lookups
- Personal pilot profiles and after-action records
- Conflict and war movement tracking
- Market impact correlation

### 5. Character Management & Ship Fitting
- Skill tracking and planning
- Alpha/Omega awareness
- Implant and boost modeling
- Ship fitting with in-game parity
- Saved fits linked to cost and loss context

### 6. Calendar & Time Intelligence
- In-game event ingestion
- Manual, corp, and alliance events
- Economic and conflict milestones
- Omega resubscription tracking
- EVE time ↔ local time conversion
- Dual real-world and lore date display

---

## Data Strategy Overview

The platform integrates multiple **optional data sources**, including:
- Official EVE ESI
- Static Data Export (SDE)
- EVE Wiki
- zKillboard
- EVEWho
- User-generated intelligence

Data is enriched through **correlation, heuristics, and visualization**, not automation or prediction enforcement.

---

## Technical Orientation (Conceptual)

- **Backend:**  
  Periodic ingestion, cached snapshots, heuristic derivation

- **Frontend:**  
  2D, layer-based map rendering (Leaflet.js or equivalent)

- **Architecture Goals:**  
  - Scalability without real-time dependency  
  - Graceful degradation  
  - Clear separation of raw data, derived metrics, and user annotations  

---

## Monetization & Sustainability (Non-Commercial)

Due to legal and EULA constraints, the application is not sold commercially.

Potential sustainability mechanisms include:
- Voluntary ISK contributions
- Non-intrusive advertising
- Transparent infrastructure cost reporting

All monetization remains **optional, ethical, and non-impactful** to gameplay intelligence.

---

## Intended Outcome

The EVE Unified Intelligence Platform aims to become:
- A **single source of situational awareness**
- A **memory extension for player experience**
- A **planning and analysis workspace**, not a bot or optimizer

It exists to help players understand:
- What is happening
- Where pressure is building
- When events matter
- How systems, markets, and conflicts interrelate

Without ever telling them what to do.

---

## Development Status

This document represents the **foundational design phase**.  
All concepts, domains, and architectures remain subject to revision as development progresses.

The system is intentionally designed to evolve.

---

**End of White Paper**
