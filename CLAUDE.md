# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a business management folder for **株式会社Link AI** (Link AI Inc.), an AI solutions company led by CEO 安東竜平. It contains business documents, financial data, and project management information — not a software codebase.

## Folder Structure

- **案件シート/** — 案件管理データ（CSV）。アサイン状況、予算、タイムライン、営業ヨミ表。
- **課題/** — 戦略メモ、CF予測シート。
- **資金面/** — 財務データ。Freee試算表（PDF）、損益レポート（CSV）。
- **考えていることメモ/** — 代表の思考メモ。
- **プロダクト/** — プロダクト関連資料。
  - **SUISHIN/** — SUISHINプロダクト。
    - **プロダクト資料/** — 機能説明、スペック、スクリーンショット。
    - **LP/** — ランディングページ素材・原稿。
    - **ブランド/** — デザインガイド、ロゴ、トンマナ。
- **営業/** — 営業活動全般の資料。
  - **提案書/** — クライアント向け提案書（SUISHIN・ソリューション両方）。
  - **展示会/** — 展示会用資料・ブース素材。
  - **実績・事例/** — 導入事例。
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

## Agent Teams ルール

ユーザーが「Agent Teams」「エージェントチーム」「チームで議論」等と指示した場合、**必ず以下の手順でAgent Teamsを立ち上げること。** 通常のサブエージェント（Task toolのみ）で代替してはならない。

1. `ToolSearch` で `TeamCreate` と `SendMessage` を読み込む
2. `TeamCreate` でチームを作成する
3. `Task` tool に `team_name` と `name` パラメータを指定してチームメイト（エージェント）を起動する
4. エージェント同士は `SendMessage`（type: "message" / "broadcast"）で直接メッセージを送り合い議論する
5. タスク管理は `TaskCreate` / `TaskUpdate` / `TaskList` でチーム共有のタスクリストを使う
6. 完了後は `SendMessage`（type: "shutdown_request"）でチームメイトを解散する

**禁止事項:** Agent Teamsを指示されたのに、team_nameなしの独立サブエージェントを起動し、結果を手動で中継する方式は使わないこと。
