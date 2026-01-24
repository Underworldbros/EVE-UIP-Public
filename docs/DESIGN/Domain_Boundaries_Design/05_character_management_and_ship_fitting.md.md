

# 05_character_management_and_ship_fitting.md  
## Character Management, Skills & Ship Fitting

---

## Purpose of This Domain

The Character Management domain serves as the **authoritative source of character capability** within the application.

It defines:
- What the character can do
- What the character can fly
- How long it takes to get there
- How skill state affects other domains

All skill-dependent calculations elsewhere in the application **pull from this domain**.

---

## Core Scope

Character management consists of:
- Skill tracking
- Skill planning
- Clone and implant awareness
- Ship fitting and fit storage

It does **not**:
- Execute market logic itself
- Track activities or outcomes
- Decide what is profitable or optimal on its own

It provides **inputs**, not conclusions.

---

## Skill Tracking

### Skill State Awareness
- Full skill list with:
  - Current level
  - Skill points
  - Training status
- Distinction between:
  - Alpha clone limitations
  - Omega clone capabilities

### Boost Awareness
- Skill accelerators
- Temporary training boosts
- Event-based modifiers

Boosts are:
- Tracked separately
- Time-bound
- Reflected in planning estimates

---

## Implants & Clones

### Implant Tracking
- Installed implants
- Attribute bonuses
- Slot conflicts
- Implant sets (where applicable)

### Clone Context
- Skill calculations can be clone-aware
- Optional association of clones with:
  - Roles
  - Activities
  - Regions

---

## Skill Planning

### Training Planner
- Queue visualization
- Time-to-completion estimates
- Alpha/Omega feasibility checks

### Planning Constraints
- Skill prerequisites
- Clone state
- Boost presence or absence

### Cross-Domain Integration
Skill data feeds:
- Industry (efficiency, research speed)
- Market (taxes, broker fees, hauling constraints)
- Ship fitting (fit legality and effectiveness)

---

## Ship Fitting System

### Design Philosophy
The ship fitting system mirrors the **in-game fitting tool** as closely as possible to reduce cognitive friction.

Accuracy and familiarity take priority over novelty.

---

### Fitting Features

- Full slot layout:
  - High / Mid / Low
  - Rigs
  - Subsystems (where applicable)
- Module fitting legality checks
- Powergrid / CPU calculations
- Ammo and charge handling
- Drone bay management

### Skill Dependency
- Fits reflect:
  - Current skills
  - Planned skill states
- Shows:
  - What works now
  - What requires training
  - Performance deltas based on skills

---

## Saved Fits & Libraries

### Fit Storage
- Save and categorize fits
- Import/export via standard formats
- Tag fits by:
  - Role
  - Activity
  - Risk level

### Fit Context
Saved fits can be linked to:
- Market (purchase and replacement cost)
- Activity runs (what was flown)
- Loss tracking (average loss cost)

---

## Cost Awareness (Outbound Only)

While ship fitting does **not** calculate market decisions itself, it provides:
- Item lists
- Quantity requirements
- Replacement frequency signals

These outputs are consumed by:
- Financial / Market domain
- Procurement and expenditure tracking

---

## Alpha vs Omega Enforcement

- Automatic enforcement of alpha limitations
- Visual indicators for omega-only skills or modules
- Planning mode allows:
  - “Assume Omega” projections
  - Clear separation from current state

---

## User Control & Customization

- Entire domain can be hidden if unused
- Skill groups can be collapsed or filtered
- Fitting stats visibility is configurable
- All displays support theming and transparency

---

## Design Philosophy Summary

- Character management is **descriptive**, not prescriptive
- Skills define capability, not intent
- Fits represent options, not instructions
- Accuracy and parity with in-game systems are mandatory

---

### Closing Statement

This domain anchors the application in **what the character actually is** —  
ensuring that every recommendation, calculation, and visualization elsewhere remains grounded in reality.

---
**Proprietary Notice:** This documentation and the EVE Unified Intelligence project are proprietary. Unauthorized distribution, reproduction, or reuse is strictly prohibited.
