---
name: slack-shared
version: 1.0.0
description: "Slack MCP: Shared authentication setup, security rules, and common patterns for all Slack skills."
metadata:
  openclaw:
    category: "productivity"
    requires:
      mcp: ["slack"]
---

# Slack MCP — 共通設定

## 概要

Slack連携は **@modelcontextprotocol/server-slack** MCPサーバー経由で行う。
プロジェクトルートの `.mcp.json` で設定済み。

## セットアップ手順

### 1. Slack Appを作成

1. https://api.slack.com/apps にアクセス
2. 「Create New App」→「From scratch」を選択
3. App名: `Link AI Claude` （任意）
4. ワークスペースを選択

### 2. Bot Token Scopesを追加

「OAuth & Permissions」→「Scopes」→「Bot Token Scopes」で以下を追加:

| スコープ | 用途 |
|---------|------|
| `channels:read` | パブリックチャンネル一覧 |
| `channels:history` | チャンネルのメッセージ履歴 |
| `groups:read` | プライベートチャンネル一覧 |
| `groups:history` | プライベートチャンネル履歴 |
| `chat:write` | メッセージ送信 |
| `users:read` | ユーザー一覧・プロフィール |
| `reactions:write` | リアクション追加 |
| `search:read` | メッセージ・ファイル検索 ※User Tokenのみ |

### 3. ワークスペースにインストール

「Install to Workspace」→ 許可 → Bot User OAuth Tokenをコピー（`xoxb-...`）

### 4. 環境変数を設定

```bash
# ~/.zshrc or ~/.bashrc に追加
export SLACK_BOT_TOKEN="xoxb-your-token-here"
export SLACK_TEAM_ID="T0123456789"  # ワークスペース設定 > About から取得
```

設定後、Claude Codeを再起動する。

## 利用可能なMCPツール

MCPサーバーが提供するツール一覧:

| ツール名 | 説明 |
|---------|------|
| `mcp__slack__slack_list_channels` | チャンネル一覧を取得 |
| `mcp__slack__slack_post_message` | メッセージを投稿 |
| `mcp__slack__slack_reply_to_thread` | スレッドに返信 |
| `mcp__slack__slack_add_reaction` | リアクションを追加 |
| `mcp__slack__slack_get_channel_history` | チャンネル履歴を取得 |
| `mcp__slack__slack_get_thread_replies` | スレッドの返信を取得 |
| `mcp__slack__slack_get_users` | ユーザー一覧を取得 |
| `mcp__slack__slack_get_user_profile` | ユーザープロフィールを取得 |

> [!NOTE]
> ツール名のプレフィックス `mcp__slack__` はMCPサーバー名に依存。
> `.mcp.json` でサーバー名を変更した場合はプレフィックスも変わる。

## セキュリティルール

> [!CAUTION]
> - **送信系操作**（`slack_post_message`, `slack_reply_to_thread`）は必ずユーザーに確認してから実行すること
> - Bot Tokenは絶対にコミットしない（`.mcp.json` は `${SLACK_BOT_TOKEN}` で環境変数参照）
> - 社外秘情報を含むチャンネルの内容をファイルに書き出す場合は確認を取ること

## トラブルシューティング

| 問題 | 対処 |
|------|------|
| `not_authed` | `SLACK_BOT_TOKEN` が未設定 or 無効 |
| `channel_not_found` | Botがチャンネルに参加していない → `/invite @Link AI Claude` |
| `missing_scope` | 必要なスコープが未追加 → Slack App設定で追加して再インストール |
| MCPツールが見えない | Claude Codeを再起動。`npx @modelcontextprotocol/server-slack` が動作するか確認 |
