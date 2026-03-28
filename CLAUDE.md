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

## Cognee MCP Server（知識グラフメモリ）

このプロジェクトには `cognee` MCP サーバーが接続されている。スキルの管理・検索・学習に使用する。

### 使い方（重要）
- cognee は **MCP ツール**として利用する。pip install は不要。
- `ToolSearch` で `mcp__cognee` を検索してツールスキーマを取得してから呼び出すこと。
- **絶対に `pip install cognee` や `pip show cognee` を実行しないこと。**

### 主要ツール
- `mcp__cognee__cognify` — ファイルを知識グラフに変換・保存
- `mcp__cognee__search` — セマンティック検索（GRAPH_COMPLETION, RAG_COMPLETION, CHUNKS, SUMMARIES 等）
- `mcp__cognee__codify` — コードリポジトリの分析・グラフ化
- `mcp__cognee__cognee_add_developer_rules` — 開発者ルールの取り込み
- `mcp__cognee__list_data` — データセット一覧表示
- `mcp__cognee__delete` — データ削除
- `mcp__cognee__prune` — 全データリセット
- `mcp__cognee__save_interaction` — インタラクション記録

### スキルをcognifyする手順
1. `.claude/skills/` 配下の SKILL.md ファイルパスを収集
2. 各ファイルの内容を読み取り、`mcp__cognee__cognify` に渡す
3. `mcp__cognee__search` でグラフ化されたことを確認

## Agent Teams ルール

ユーザーが「Agent Teams」「エージェントチーム」「チームで議論」等と指示した場合、**必ず以下の手順でAgent Teamsを立ち上げること。** 通常のサブエージェント（Task toolのみ）で代替してはならない。

1. `ToolSearch` で `TeamCreate` と `SendMessage` を読み込む
2. `TeamCreate` でチームを作成する
3. `Task` tool に `team_name` と `name` パラメータを指定してチームメイト（エージェント）を起動する
4. エージェント同士は `SendMessage`（type: "message" / "broadcast"）で直接メッセージを送り合い議論する
5. タスク管理は `TaskCreate` / `TaskUpdate` / `TaskList` でチーム共有のタスクリストを使う
6. 完了後は `SendMessage`（type: "shutdown_request"）でチームメイトを解散する

**禁止事項:** Agent Teamsを指示されたのに、team_nameなしの独立サブエージェントを起動し、結果を手動で中継する方式は使わないこと。


## マーケティング発信システム

Link AIフォルダは「マーケティング発信装置」として機能する。フォルダ＝データ層、スキル＝処理層、CLAUDE.md＝制御層の3層アーキテクチャ。

### データ所在マップ

| データ | パス | 用途 |
|--------|------|------|
| ブランドDNA（必須参照） | `マーケティング/ブランドDNA.md` | 全マーケ出力のトーン・メッセージの根拠 |
| ターゲット定義 | `マーケティング/ターゲット/` | ペルソナ、JTBD、響く言葉 |
| 事例ライブラリ | `マーケティング/事例ライブラリ/` | 物語形式の導入事例（テンプレート: `_template.md`、一覧: `_index.md`） |
| 知見ストック | `マーケティング/知見ストック/` | CEO思想を構造化したネタ帳（テンプレート: `_template.md`） |
| スキル仕様書 | `マーケティング/スキル仕様/` | 各スキルの設計書（正式スキル化前のSPEC） |
| 競合・市場メモ | `マーケティング/競合・市場/` | 競合分析、市場動向 |
| コンテンツカレンダー | `マーケティング/コンテンツカレンダー/` | 発信予定・テーマ管理 |
| 発信ログ | `マーケティング/発信ログ/` | 過去発信の記録と月次振り返り |
| セールスキット | `マーケティング/セールスキット/` | 1枚サマリー等の営業支援ツール |
| 案件データ（生データ） | `案件シート/` | 事例の元データ |

### ルーティングテーブル（リクエスト → 処理フロー）

以下のリクエストを受けた場合、対応するフローに従うこと。

#### Xポスト作成
1. `マーケティング/ブランドDNA.md` を読む（必須）
2. `x-post-creator` スキルを使用
3. 知見ストック or AIニュースをネタにする場合、該当ファイルも参照
4. 出力はブランドDNAの「トゲを取る変換表」で最終チェック

#### AIニュース探索 → ポスト作成
1. `ai-news-scout` スキルでネタ発見
2. `マーケティング/ブランドDNA.md` を読む
3. `x-post-creator` スキルで仕上げ

#### 事例作成・更新
1. `マーケティング/スキル仕様/case-story-writer_SPEC.md` を読む
2. `マーケティング/ブランドDNA.md` を読む
3. `マーケティング/事例ライブラリ/_template.md` を読む
4. 対象案件のデータを `案件シート/` から取得
5. `マーケティング/ターゲット/` の関連ペルソナを参照
6. Before→Struggle→Solution→After構造で執筆
7. 複数フォーマット（Xポスト・ブログ・提案書・展示会）を同時生成
8. `マーケティング/事例ライブラリ/` に保存、`_index.md` を更新

#### 知見メモ作成
1. `マーケティング/知見ストック/_template.md` を読む
2. `マーケティング/ブランドDNA.md` を読む
3. CEO思想や案件からの学びを構造化
4. 発信アングル候補（Xポスト・ブログ・提案書）を同時生成
5. `マーケティング/知見ストック/` に保存

#### 提案書作成（SUISHIN）
1. `suishin-proposal-writer` スキルを使用
2. `マーケティング/ブランドDNA.md` を参照
3. 関連事例を `マーケティング/事例ライブラリ/` から選定

#### 提案書作成（ソリューション案件）
1. `proposal-writer` スキルを使用
2. `マーケティング/ブランドDNA.md` を参照
3. 関連事例を `マーケティング/事例ライブラリ/` から選定

### 品質ゲート（全マーケ出力に適用）

すべてのマーケティング出力は、最終確認として以下をチェックすること：
- ブランドDNA.mdのトーンに準拠しているか
- 煽り・自慢・競合攻撃・トゲはないか（「トゲを取る変換表」で確認）
- ターゲットペルソナに響く言葉を使っているか
- 「推進」の要素が自然に入っているか（押し売りにならないように）
