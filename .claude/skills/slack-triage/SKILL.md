---
name: slack-triage
version: 1.0.0
description: "Slack: チャンネルの最新メッセージを取得し、未読や重要な会話を把握する。現状把握・朝会の情報収集に最適。"
metadata:
  openclaw:
    category: "productivity"
    requires:
      mcp: ["slack"]
---

# Slack Triage — 現状把握

> **PREREQUISITE:** Read `../slack-shared/SKILL.md` for auth setup and security rules.

チャンネルの最新メッセージを取得し、現在の状況を素早く把握する。

## ワークフロー

### Step 1: チャンネル一覧を取得

```
mcp__slack__slack_list_channels を呼び出し
→ チャンネル名・ID・メンバー数・トピックを一覧表示
```

### Step 2: 対象チャンネルの履歴を取得

```
mcp__slack__slack_get_channel_history を呼び出し
→ channel_id: 対象チャンネルのID
→ limit: 取得件数（デフォルト20）
```

### Step 3: スレッドの詳細を確認（必要に応じて）

```
mcp__slack__slack_get_thread_replies を呼び出し
→ channel_id: チャンネルID
→ thread_ts: スレッドのタイムスタンプ
```

### Step 4: サマリーを作成

取得したメッセージを以下の形式で整理:

```markdown
## Slack現状サマリー（YYYY-MM-DD）

### #channel-name
- **[誰]** 要約（時刻）
- **[誰]** 要約（時刻） → スレッド: N件の返信

### アクションアイテム
- [ ] 〇〇さん宛: △△の対応
- [ ] 確認が必要: □□について
```

## 使い方の例

ユーザーが以下のように指示した場合にこのスキルを使用:

- 「Slackの現状を教えて」
- 「#generalの最新の会話を見せて」
- 「今日のSlackをまとめて」
- 「重要なメッセージはある？」

## Tips

- 読み取り専用 — メッセージの変更や送信は行わない
- 複数チャンネルを並列で取得すると効率的
- ユーザー名の解決には `slack_get_users` を使う（IDだけだと分かりにくい）
- タイムスタンプはUnix形式 → 人間が読める日時に変換して表示すること

## See Also

- [slack-shared](../slack-shared/SKILL.md) — 認証・共通ルール
- [slack-search](../slack-search/SKILL.md) — キーワードでメッセージ検索
- [slack-channels](../slack-channels/SKILL.md) — チャンネル情報の詳細取得
