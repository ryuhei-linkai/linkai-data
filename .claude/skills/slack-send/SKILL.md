---
name: slack-send
version: 1.0.0
description: "Slack: メッセージを送信・スレッド返信・リアクション追加。情報展開・報告に使用。"
metadata:
  openclaw:
    category: "productivity"
    requires:
      mcp: ["slack"]
---

# Slack Send — メッセージ送信

> **PREREQUISITE:** Read `../slack-shared/SKILL.md` for auth setup and security rules.

Slackチャンネルにメッセージを送信する。

## ワークフロー

### メッセージ送信

```
mcp__slack__slack_post_message を呼び出し
→ channel_id: 送信先チャンネルID
→ text: メッセージ本文
```

### スレッド返信

```
mcp__slack__slack_reply_to_thread を呼び出し
→ channel_id: チャンネルID
→ thread_ts: 返信先スレッドのタイムスタンプ
→ text: 返信本文
```

### リアクション追加

```
mcp__slack__slack_add_reaction を呼び出し
→ channel_id: チャンネルID
→ timestamp: 対象メッセージのタイムスタンプ
→ reaction: リアクション名（例: "thumbsup", "eyes", "white_check_mark"）
```

## 使い方の例

- 「#generalに『本日の定例は15時に変更します』と投稿して」
- 「さっきのスレッドに進捗を返信して」
- 「あのメッセージに :eyes: をつけて」

## メッセージフォーマット

Slack mrkdwn記法を使用:

| 記法 | 表示 |
|------|------|
| `*太字*` | **太字** |
| `_イタリック_` | _イタリック_ |
| `` `コード` `` | `コード` |
| `> 引用` | 引用ブロック |
| `• リスト` | 箇条書き |
| `<@U12345>` | ユーザーメンション |
| `<#C12345>` | チャンネルリンク |

> [!CAUTION]
> これは**書き込み操作**です。送信前に必ずユーザーに内容を確認してください。
> 送信先チャンネル・メッセージ内容を明示し、承認を得てから実行すること。

## Tips

- チャンネルIDが分からない場合は `slack_list_channels` で先に確認
- ユーザーIDが分からない場合は `slack_get_users` で検索
- 長いメッセージはSlackのブロック制限（4000文字）に注意

## See Also

- [slack-shared](../slack-shared/SKILL.md) — 認証・共通ルール
- [slack-triage](../slack-triage/SKILL.md) — メッセージ読み取り
- [slack-channels](../slack-channels/SKILL.md) — チャンネル情報
