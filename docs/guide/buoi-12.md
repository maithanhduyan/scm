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

<div class="kpi-dashboard">
  <div class="kpi-header">📊 SCM DASHBOARD</div>
  <div class="kpi-grid">
    <div class="kpi-card kpi-ok"><div class="kpi-name">OTIF</div><div class="kpi-val">94.2% ✅</div></div>
    <div class="kpi-card kpi-warn"><div class="kpi-name">Forecast</div><div class="kpi-val">78.5% ⚠️</div></div>
    <div class="kpi-card kpi-ok"><div class="kpi-name">Inventory</div><div class="kpi-val">9.1x ✅</div></div>
    <div class="kpi-card kpi-ok"><div class="kpi-name">SC Cost</div><div class="kpi-val">8.9% ✅</div></div>
    <div class="kpi-card kpi-ok"><div class="kpi-name">Cash2Cash</div><div class="kpi-val">28d ✅</div></div>
    <div class="kpi-card kpi-warn"><div class="kpi-name">Perfect Order</div><div class="kpi-val">91.3% ⚠️</div></div>
  </div>
  <div class="kpi-footer">
    <span>📈 Trend: ▁▂▃▄▅▆▇█ OTIF (12 months)</span>
    <span>📊 Root Cause: Top 5 issues</span>
  </div>
</div>

<style>
.kpi-dashboard{max-width:600px;margin:1.5rem auto;border:2px solid var(--vp-c-divider);border-radius:16px;overflow:hidden;background:var(--vp-c-bg-soft)}
.kpi-header{text-align:center;font-weight:700;padding:.8rem;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:.9rem;border-bottom:1px solid var(--vp-c-divider)}
.kpi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;padding:1rem}
.kpi-card{text-align:center;padding:.8rem .5rem;border-radius:10px;border:1px solid var(--vp-c-divider);background:var(--vp-c-bg);transition:all .3s}
.kpi-card:hover{transform:scale(1.04);box-shadow:0 4px 14px rgba(0,0,0,.07)}
.kpi-ok{border-color:rgba(16,185,129,.3)}.kpi-warn{border-color:rgba(245,158,11,.3)}
.kpi-name{font-size:.7rem;color:var(--vp-c-text-3);font-weight:600;text-transform:uppercase;letter-spacing:.5px}
.kpi-val{font-size:1rem;font-weight:700;margin-top:.2rem;color:var(--vp-c-text-1)}
.kpi-footer{display:flex;justify-content:space-between;padding:.6rem 1rem;border-top:1px solid var(--vp-c-divider);font-size:.65rem;color:var(--vp-c-text-3)}
@media(max-width:480px){.kpi-grid{grid-template-columns:repeat(2,1fr)}.kpi-footer{flex-direction:column;gap:.3rem}}
</style>

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

<div class="roi-tree">
  <div class="roi-level roi-top">
    <div class="roi-node roi-revenue">📈 Revenue ↑</div>
    <div class="roi-node roi-assets">📉 SC Assets ↓</div>
  </div>
  <div class="roi-connectors">┃ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ┃</div>
  <div class="roi-level roi-mid">
    <div class="roi-node roi-margin">💰 Margin ↑</div>
  </div>
  <div class="roi-level roi-bottom">
    <div class="roi-leaf r-cost">📦 SC Cost ↓</div>
    <div class="roi-leaf r-service">⭐ Service ↑</div>
    <div class="roi-leaf r-inv">🏭 Inventory ↓</div>
    <div class="roi-leaf r-fixed">🏗️ Fixed Assets ↓</div>
  </div>
</div>

<style>
.roi-tree{max-width:580px;margin:1.5rem auto;text-align:center}
.roi-level{display:flex;justify-content:center;gap:1.5rem;margin-bottom:.5rem}
.roi-connectors{font-size:.7rem;color:var(--vp-c-text-3);margin:.2rem 0}
.roi-node,.roi-leaf{padding:.6rem 1rem;border-radius:10px;font-weight:700;font-size:.78rem;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);transition:all .3s}
.roi-node:hover,.roi-leaf:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,.07)}
.roi-revenue{border-color:#10b981;color:#059669}
.roi-assets{border-color:#6366f1;color:#6366f1}
.roi-margin{border-color:#f59e0b;color:#d97706}
.r-cost{border-color:#10b981;color:#059669}.r-service{border-color:#ec4899;color:#db2777}
.r-inv{border-color:#6366f1;color:#6366f1}.r-fixed{border-color:#8b5cf6;color:#7c3aed}
@media(max-width:480px){.roi-level{flex-wrap:wrap;gap:.5rem}.roi-bottom{flex-wrap:wrap}}
</style>

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

<div class="rm-timeline">
  <div class="rm-phase rm-q1">
    <div class="rm-quarter">Q1</div>
    <div class="rm-title">Foundation</div>
    <div class="rm-items">• KPI<br/>• Data<br/>• Team</div>
  </div>
  <div class="rm-arr"><span class="rm-arr-line"></span></div>
  <div class="rm-phase rm-q2">
    <div class="rm-quarter">Q2</div>
    <div class="rm-title">Build</div>
    <div class="rm-items">• S&OP<br/>• Process<br/>• System</div>
  </div>
  <div class="rm-arr"><span class="rm-arr-line"></span></div>
  <div class="rm-phase rm-q3">
    <div class="rm-quarter">Q3</div>
    <div class="rm-title">Optimize</div>
    <div class="rm-items">• Analytics<br/>• Control Tower</div>
  </div>
  <div class="rm-arr"><span class="rm-arr-line"></span></div>
  <div class="rm-phase rm-q4">
    <div class="rm-quarter">Q4</div>
    <div class="rm-title">Scale</div>
    <div class="rm-items">• AI/ML<br/>• Auto<br/>• Partner</div>
  </div>
</div>

<style>
.rm-timeline{display:flex;align-items:stretch;justify-content:center;gap:0;padding:1.5rem .5rem;overflow-x:auto}
.rm-phase{min-width:110px;padding:1rem .8rem;border-radius:14px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);text-align:center;transition:all .3s}
.rm-phase:hover{transform:translateY(-3px);box-shadow:0 6px 18px rgba(0,0,0,.08)}
.rm-q1{border-color:#6366f1}.rm-q1:hover{background:rgba(99,102,241,.06)}
.rm-q2{border-color:#f59e0b}.rm-q2:hover{background:rgba(245,158,11,.06)}
.rm-q3{border-color:#10b981}.rm-q3:hover{background:rgba(16,185,129,.06)}
.rm-q4{border-color:#ef4444}.rm-q4:hover{background:rgba(239,68,68,.06)}
.rm-quarter{font-size:.6rem;font-weight:700;color:var(--vp-c-text-3);text-transform:uppercase;letter-spacing:1px}
.rm-title{font-weight:700;font-size:.9rem;margin:.3rem 0;color:var(--vp-c-text-1)}
.rm-items{font-size:.7rem;color:var(--vp-c-text-2);line-height:1.6;text-align:left}
.rm-arr{display:flex;align-items:center;min-width:30px}
.rm-arr-line{display:block;width:20px;height:2px;background:var(--vp-c-brand-1);position:relative}
.rm-arr-line::after{content:'';position:absolute;right:-2px;top:-4px;border:5px solid transparent;border-left:5px solid var(--vp-c-brand-1)}
@media(max-width:640px){.rm-timeline{flex-direction:column;align-items:center}.rm-arr{transform:rotate(90deg);min-width:unset;margin:.3rem 0}}
</style>

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
