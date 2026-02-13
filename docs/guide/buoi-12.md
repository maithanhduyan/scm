---
outline: [2, 3]
---

# Buổi 12: Đo lường & đánh giá hiệu suất

<span class="lesson-badge">🎯 Phần 6 — Tích hợp & KPI</span>

> **Mục tiêu:** Xây dựng hệ thống đo lường hiệu suất SCM hoàn chỉnh

## 1. KPI Dashboard

### Bộ KPI SCM tổng hợp

| Nhóm | KPI | Target | Tần suất |
|------|-----|--------|---------|
| **Plan** | Forecast Accuracy | ≥ 80% | Tháng |
| **Plan** | Bias | ±5% | Tháng |
| **Source** | Supplier OTIF | ≥ 95% | Tuần |
| **Source** | Cost Savings | ≥ 3%/năm | Quý |
| **Make** | OEE | ≥ 85% | Ngày |
| **Make** | Yield | ≥ 98% | Ngày |
| **Deliver** | Perfect Order | ≥ 92% | Tuần |
| **Deliver** | On-time Delivery | ≥ 95% | Tuần |
| **Return** | Return Rate | ≤ 2% | Tháng |
| **Enable** | Cash-to-Cash | ≤ 30 ngày | Tháng |
| **Enable** | Inventory Turn | ≥ 8x | Tháng |
| **Enable** | Total SC Cost | ≤ 10% revenue | Quý |

### Dashboard Layout

```
┌──────────────── SCM DASHBOARD ────────────────────┐
│                                                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ OTIF     │ │ Forecast │ │ Inventory│          │
│  │ 94.2% ✅ │ │ 78.5% ⚠️ │ │ 9.1x  ✅│          │
│  └──────────┘ └──────────┘ └──────────┘          │
│                                                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ SC Cost  │ │ Cash2Cash│ │ Perfect  │          │
│  │ 8.9%  ✅ │ │ 28d   ✅ │ │ 91.3% ⚠️│          │
│  └──────────┘ └──────────┘ └──────────┘          │
│                                                    │
│  📈 Trend Analysis          📊 Root Cause         │
│  ▁▂▃▄▅▆▇█ OTIF (12 months) Top 5 issues          │
└────────────────────────────────────────────────────┘
```

## 2. SCOR Metrics

### SCOR Performance Attributes

| Attribute | Metric | Mô tả |
|-----------|--------|-------|
| **Reliability** | Perfect Order Fulfillment | % đơn hoàn hảo |
| **Responsiveness** | Order Fulfillment Cycle Time | Thời gian từ đặt → giao |
| **Agility** | Upside Supply Chain Flexibility | Khả năng tăng 20% trong 30 ngày |
| **Cost** | Total SC Management Cost | % chi phí SCM / doanh thu |
| **Asset** | Cash-to-Cash Cycle Time | Ngày từ trả NCC → nhận tiền KH |

### Cash-to-Cash Cycle

$$
C2C = DIO + DSO - DPO
$$

Trong đó:
- $DIO$ = Days Inventory Outstanding (ngày tồn kho)
- $DSO$ = Days Sales Outstanding (ngày thu tiền)
- $DPO$ = Days Payable Outstanding (ngày trả tiền)

::: details Ví dụ
- DIO = 45 ngày (tồn kho)
- DSO = 30 ngày (thu tiền KH)
- DPO = 60 ngày (trả tiền NCC)

$$C2C = 45 + 30 - 60 = 15 \text{ ngày}$$

→ Vốn bị "chôn" 15 ngày trong chuỗi cung ứng.
:::

## 3. ROI chuỗi cung ứng

### Supply Chain ROI

$$
SC\;ROI = \frac{\text{Revenue} - \text{SC Cost}}{\text{SC Assets}} \times 100\%
$$

### Các đòn bẩy cải thiện ROI

```
           Revenue ↑
          /         \
    Volume ↑    Price ↑
         \        /
          Margin ↑           SC Assets ↓
         /        \         /            \
    SC Cost ↓   Service ↑  Inventory ↓  Fixed Assets ↓
```

### Quantifying SC Improvements

| Cải tiến | Tác động | ROI |
|---------|---------|-----|
| Giảm tồn kho 20% | Giảm chi phí lưu kho 25% | 150–300% |
| Tăng OTIF 5% | Tăng revenue 2–3% | 200–500% |
| Giảm lead time 30% | Giảm safety stock 20% | 100–200% |
| Consolidate shipments | Giảm freight 15% | 300–500% |

## 4. Roadmap cải tiến

### Maturity Model

| Level | Mô tả | Đặc điểm |
|-------|-------|----------|
| **1 – React** | Phản ứng | Chữa cháy, không có KPI |
| **2 – Anticipate** | Dự đoán | Có forecast, KPI cơ bản |
| **3 – Integrate** | Tích hợp | S&OP, cross-function |
| **4 – Collaborate** | Hợp tác | Tích hợp NCC & KH |
| **5 – Orchestrate** | Điều phối | AI-driven, autonomous |

### Roadmap Template

```
         Q1              Q2              Q3              Q4
    ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
    │Foundation│   │ Build    │   │ Optimize │   │ Scale    │
    │- KPI     │   │- S&OP    │   │- Analytics│  │- AI/ML   │
    │- Data    │   │- Process │   │- Control │   │- Auto    │
    │- Team    │   │- System  │   │  Tower   │   │- Partner │
    └──────────┘   └──────────┘   └──────────┘   └──────────┘
```

## 📝 Final Project

::: warning ✍️ Xây Roadmap SCM cho doanh nghiệp

**Yêu cầu:**

### Phần 1: Đánh giá hiện trạng (As-Is)
1. Vẽ bản đồ chuỗi cung ứng hiện tại
2. Đo lường KPI hiện tại (SCOR metrics)
3. Xác định maturity level
4. SWOT analysis cho SCM

### Phần 2: Thiết kế mục tiêu (To-Be)
1. Xác định target KPI (benchmarking)
2. Thiết kế mô hình chuỗi cung ứng mục tiêu
3. Gap analysis (hiện trạng vs mục tiêu)

### Phần 3: Roadmap triển khai
1. Ưu tiên hành động (Impact vs Effort matrix)
2. Timeline 12 tháng
3. Budget & resources
4. Quick wins (90 ngày đầu)
5. Risk mitigation plan

### Phần 4: Action Plan 90 ngày
1. Top 5 hành động ưu tiên
2. Người chịu trách nhiệm
3. Timeline chi tiết
4. KPI đo lường thành công
5. Checkpoint review
:::

## 📚 Tài liệu tham khảo

- APICS SCOR Model v13.0
- *Supply Chain Metrics That Matter* — Lora Cecere
- Gartner Supply Chain Top 25 Methodology
- *The New Supply Chain Agenda* — Reuben Slone
