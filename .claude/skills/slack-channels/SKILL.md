---
name: slack-channels
version: 1.0.0
description: "Slack: チャンネル一覧・ユーザー一覧・プロフィール取得。Slackワークスペースの全体像を把握。"
metadata:
  openclaw:
    category: "productivity"
    requires:
      mcp: ["slack"]
---

# Slack Channels — チャンネル・ユーザー情報

> **PREREQUISITE:** Read `../slack-shared/SKILL.md` for auth setup and security rules.

Slackワークスペースのチャンネル・ユーザー情報を取得する。

## チャンネル操作

### チャンネル一覧

```
mcp__slack__slack_list_channels を呼び出し
→ チャンネル名、ID、メンバー数、トピック、目的を一覧表示
```

出力形式:

```markdown
| チャンネル | ID | メンバー数 | トピック |
|-----------|-----|-----------|---------|
| #general | C0123... | 45 | 全体連絡 |
| #sales | C0456... | 12 | 営業チーム |
```

### チャンネル履歴（概要把握用）

```
mcp__slack__slack_get_channel_history を呼び出し
→ channel_id: チャンネルID
→ limit: 5（概要把握なら少数でOK）
```

## ユーザー操作

### ユーザー一覧

```
mcp__slack__slack_get_users を呼び出し
→ ワークスペースの全ユーザーを取得
```

出力形式:

```markdown
| 名前 | ID | メール | ステータス |
|------|-----|--------|-----------|
| 安東竜平 | U0123... | ando@... | 🟢 アクティブ |
```

### ユーザープロフィール

```
mcp__slack__slack_get_user_profile を呼び出し
→ user_id: ユーザーID
```

## 使い方の例

- 「Slackのチャンネル一覧を見せて」
- 「チームメンバーの一覧を確認したい」
- 「#salesチャンネルのトピックは何？」
- 「〇〇さんのSlackプロフィールを確認」

## Tips

- 読み取り専用 — チャンネルの作成・変更は行わない
- Botが参加していないプライベートチャンネルは取得できない
- ユーザーIDとチャンネルIDは他のSlackスキルで頻繁に使うのでメモしておくと便利

## See Also

- [slack-shared](../slack-shared/SKILL.md) — 認証・共通ルール
- [slack-triage](../slack-triage/SKILL.md) — メッセージ読み取り
- [slack-send](../slack-send/SKILL.md) — メッセージ送信
