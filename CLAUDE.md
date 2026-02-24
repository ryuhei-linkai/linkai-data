# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a business management folder for **株式会社Link AI** (Link AI Inc.), an AI solutions company led by CEO 安東竜平. It contains business documents, financial data, and project management information — not a software codebase.

## Folder Structure

- **案件シート/** — Project assignment tracking (CSV). Contains case-by-case staffing, budgets, timelines, and a sales pipeline (ヨミ表) via partner カトルセ.
- **課題/** — Strategic challenges and business planning notes (Markdown). Covers SUISHIN product strategy, solution business, partner/reseller strategy, funding, and organizational structure.
- **資金面/** — Financial data. Includes Freee-exported P&L/balance sheet (PDF), cash flow projections (CSV), and context notes (概要.md explains caveats: projections are optimistic, some future costs are missing).
- **AIアウトプット/** — AIが分析・整理・生成した成果物の格納先。AIが考えたことや整理した内容はすべてこのフォルダ内に整理して追加すること。
- **.claude/skills/** — Claude Code用カスタムSkills定義ファイル。

## Business Context

Link AI operates on two pillars:
1. **SUISHIN** — A SaaS product for project management, CRM, AI agent building, and meeting transcription. Strategy includes SaaS subscriptions, custom solution packages, and consulting/training. Development philosophy: CI/CD + Claude Code Skills automation, design-first UX, modular architecture enabling "SUISHIN FOR X" industry variants.
2. **ソリューション案件** — Custom AI consulting/development engagements (JBCI, VINATECH, レント, HTS, NTTテクノクロス, SLC, Faber Company, etc.)

Key partners/resellers: カトルセ, Asets, HTS, SpaceNSプラン.

## Working with This Data

- CSVs use Japanese headers and mixed yen formatting (¥-prefixed with commas). Parse carefully.
- 案件シート CSVs have wide timeline columns (monthly from 2025–2030) with ● marks indicating active periods.
- The financial PDF (試算表) covers Jan–Dec 2026 in JPY. Use the Read tool with `pages` parameter for specific sections.
- 概要.md warns that cash flow projections are optimistic and exclude some future personnel costs tied to variable workloads.
- 課題 documents are strategy memos, not structured data — treat as CEO's working notes for analysis and planning.
