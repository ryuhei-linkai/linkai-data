# Mermaid図解テンプレート

提案書仕様書で使用するMermaid図解のテンプレート集。

---

## 1. 課題構造図（逆ピラミッド）

ゴールから課題、解決策への逆算構造。

```mermaid
flowchart TB
    Goal["🎯 大目標<br/>サポートセンター工数削減"]
    
    Goal --> C1["課題1<br/>UX"]
    Goal --> C2["課題2<br/>正確性"]
    Goal --> C3["課題3<br/>セキュリティ"]
    Goal --> C4["課題4<br/>拡張性"]
    
    C1 --> S1["方向性1<br/>プロンプト改善"]
    C2 --> S2["方向性2<br/>PoC検証"]
    C3 --> S3["方向性3<br/>OSS活用"]
    C4 --> S4["方向性4<br/>MCP基盤"]
    
    style S2 fill:#ff6b6b,color:#fff
    style S4 fill:#ff6b6b,color:#fff
```

---

## 2. アーキテクチャ図（レイヤー構造）

システム構成を層で表現。

```mermaid
flowchart TB
    subgraph UI["UI層"]
        LINE[LINE]
        Avatar[アバター]
        Phone[電話]
        Web[Webサイト]
    end
    
    subgraph Agent["Agent層"]
        Dify[Dify AIエージェント]
    end
    
    subgraph Integration["連携層"]
        MCP[MCP Server]
        API[外部API]
    end
    
    subgraph Data["Data層"]
        DB[(中間DB)]
        Core[基幹システム]
    end
    
    UI --> Agent
    Agent --> Integration
    Integration --> Data
    
    style Agent fill:#4ecdc4,color:#fff
    style Integration fill:#4ecdc4,color:#fff
```

---

## 3. フェーズ展開図

時間軸での段階展開。

```mermaid
flowchart LR
    subgraph Phase0["Phase 0<br/>今回のPoC"]
        P0_1[実用化判断]
        P0_2[基盤構築]
        P0_3[技術検証]
    end
    
    subgraph Phase1["Phase 1<br/>次の段階"]
        P1_1[効果検証]
        P1_2[他部門展開]
        P1_3[収益貢献]
    end
    
    subgraph Phase2["Phase 2<br/>将来展望"]
        P2_1[SaaS化]
        P2_2[外販検討]
        P2_3[事業化]
    end
    
    Phase0 --> Phase1 --> Phase2
    
    style Phase0 fill:#ff6b6b,color:#fff
```

---

## 4. ガントチャート

プロジェクトスケジュール。

```mermaid
gantt
    title プロジェクトスケジュール
    dateFormat YYYY-MM-DD
    
    section 要件定義
    詳細ヒアリング     :a1, 2025-07-01, 14d
    仕様確定           :a2, after a1, 7d
    
    section 開発
    基盤構築           :b1, 2025-07-22, 21d
    機能実装           :b2, after b1, 28d
    
    section 検証
    テスト             :c1, 2025-09-10, 14d
    評価・報告         :c2, after c1, 14d
    
    section マイルストーン
    キックオフ         :milestone, m1, 2025-07-01, 0d
    中間レビュー       :milestone, m2, 2025-08-15, 0d
    完了報告           :milestone, m3, 2025-10-01, 0d
```

---

## 5. 体制図（組織構造）

プロジェクト体制。

```mermaid
flowchart TB
    subgraph Client["クライアント様"]
        PO[プロジェクトオーナー<br/>意思決定]
    end
    
    subgraph Vendor["弊社"]
        PM[PM<br/>進行管理・窓口]
        
        subgraph Team["開発チーム"]
            Eng1[AIエンジニア]
            Eng2[バックエンド]
            QA[品質管理]
        end
    end
    
    PO <--> PM
    PM --> Eng1
    PM --> Eng2
    PM --> QA
```

---

## 6. ガバナンス構造（4層）

組織変革型の場合の意思決定構造。

```mermaid
flowchart TB
    subgraph L1["Layer 1: Steering Committee"]
        SC[役員 + DX部長<br/>隔月レビュー・意思決定]
    end
    
    subgraph L2["Layer 2: PMO"]
        PMO[PMO + ベンダー<br/>週次・課題管理]
    end
    
    subgraph L3["Layer 3: DX-Core"]
        DX[DX推進チーム<br/>日次運用]
    end
    
    subgraph L4["Layer 4: Champions"]
        CH[AI-Champion 100名<br/>現場展開]
    end
    
    L1 --> L2 --> L3 --> L4
```

---

## 7. ROI分析図

投資対効果の可視化。

```mermaid
flowchart LR
    Investment["💰 初年度投資<br/>55M JPY"]
    
    subgraph Effects["効果"]
        E1[生産性向上]
        E2[品質改善]
        E3[意思決定スピード]
    end
    
    Result["📈 効果見込み<br/>300M JPY"]
    ROI["🎯 ROI<br/>約5.5倍"]
    
    Investment --> Effects --> Result --> ROI
    
    style ROI fill:#4ecdc4,color:#fff
```

---

## 8. 導入プロセス（ステップ）

組織変革型の導入フェーズ。

```mermaid
flowchart LR
    subgraph P1["Phase 1: 0-6ヶ月"]
        A1[起案] --> A2[導入] --> A3[Quick Wins]
    end
    
    subgraph P2["Phase 2: 6-12ヶ月"]
        B1[定着] --> B2[深化] --> B3[自走化]
    end
    
    P1 --> P2
```

---

## 9. 強み比較表

差別化ポイントの可視化（表形式推奨だがMermaidでも可能）。

```mermaid
mindmap
  root((弊社の強み))
    最新技術
      週単位の進化をキャッチアップ
      AI研究チーム保有
    業界理解
      16年の保険/金融経験
      専門用語への理解
    技術力
      AI研究機関出身
      0.4秒応答、99.8%精度
    教育ノウハウ
      全員が講師経験
      メンバー育成支援
```

---

## 10. KPIダッシュボード

目標指標の可視化。

```mermaid
flowchart TB
    subgraph KPIs["KPI Dashboard"]
        K1["📊 アクティブ率<br/>80%"]
        K2["⏱️ 工数削減<br/>20%+"]
        K3["📝 投稿数<br/>週300件"]
        K4["🚀 本番化<br/>10件以上"]
        K5["📚 研修修了<br/>≥90%"]
    end
```

---

## 使用上の注意

1. **色の使い方**
   - `fill:#ff6b6b` - 強調（今回のスコープ、重要ポイント）
   - `fill:#4ecdc4` - ポジティブ（成果、効果）
   - デフォルト - 通常要素

2. **スタイルの統一**
   - 同一資料内では色・形状を統一
   - 日本語はダブルクォートで囲む

3. **複雑さの制御**
   - 1つの図に要素を詰め込みすぎない
   - 複雑な場合は複数の図に分割
