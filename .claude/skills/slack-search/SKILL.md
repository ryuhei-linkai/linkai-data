---
name: slack-search
version: 1.0.0
description: "Slack: キーワード・条件でメッセージやファイルを検索。過去の議論やナレッジの発掘に使用。"
metadata:
  openclaw:
    category: "productivity"
    requires:
      mcp: ["slack"]
---

# Slack Search — メッセージ検索

> **PREREQUISITE:** Read `../slack-shared/SKILL.md` for auth setup and security rules.

Slackのメッセージを条件付きで検索し、過去の議論やナレッジを発掘する。

## 方法

### 方法A: MCP検索ツール（利用可能な場合）

MCPサーバーに検索ツールがある場合はそれを使用。

### 方法B: チャンネル履歴をスキャン

検索ツールが利用できない場合は、以下の手順で代替:

1. `mcp__slack__slack_list_channels` でチャンネル一覧取得
2. 関連しそうなチャンネルの `mcp__slack__slack_get_channel_history` を取得（limit大きめ）
3. 取得したメッセージからキーワードマッチで絞り込み

### 方法C: Slack API直接呼び出し（Bot Tokenではsearch不可）

`search.messages` APIはUser Token (`xoxp-...`) が必要。Bot Tokenでは使えない。
User Tokenが利用可能な場合:

```bash
curl -s "https://slack.com/api/search.messages" \
  -H "Authorization: Bearer $SLACK_USER_TOKEN" \
  -d "query=検索キーワード" \
  -d "count=20" \
  -d "sort=timestamp"
```

## 検索クエリの構文（API使用時）

| 修飾子 | 例 | 説明 |
|--------|---|------|
| `in:` | `in:#general` | チャンネル指定 |
| `from:` | `from:@ando` | 送信者指定 |
| `before:` / `after:` | `after:2026-03-01` | 日付範囲 |
| `has:` | `has:link`, `has:emoji` | 添付物フィルタ |
| `""` | `"exact phrase"` | 完全一致 |

## 使い方の例

- 「Slackで『SUISHIN』について話している会話を探して」
- 「先週の#salesチャンネルでレントに関する会話はある？」
- 「安東さんが投稿したメッセージを直近20件見せて」

## Tips

- Bot Tokenでは `search.messages` が使えないため、方法Bが主な手段になる
- 複数チャンネルを並列で取得すると高速
- 結果が多い場合はチャンネル・日付で絞り込みを提案する
- 読み取り専用 — メッセージの変更は行わない

## See Also

- [slack-shared](../slack-shared/SKILL.md) — 認証・共通ルール
- [slack-triage](../slack-triage/SKILL.md) — 最新メッセージの把握
- [slack-channels](../slack-channels/SKILL.md) — チャンネル情報
