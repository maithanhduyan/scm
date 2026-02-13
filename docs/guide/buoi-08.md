---
outline: [2, 3]
title: "Buổi 8: Hoạch định nhu cầu — Demand Planning "
description: "S&OP, CPFR, Demand Sensing, phương pháp dự báo (Moving Average, Exponential Smoothing), Bullwhip Effect và AI trong demand forecasting."
head:
  - - meta
    - property: og:title
      content: "Buổi 8: Hoạch định nhu cầu — Demand Planning"
  - - meta
    - property: og:description
      content: "S&OP, CPFR, Demand Sensing, Bullwhip Effect, AI forecasting — Bài 8 khóa học SCM miễn phí."
---

# Buổi 8: Hoạch định nhu cầu (Demand Planning)

<span class="lesson-badge">📊 Phần 4 — Tồn kho & Nhu cầu</span>

> **Mục tiêu:** Nắm vững phương pháp dự báo và hoạch định nhu cầu

## 1. Forecasting Methods

### Phương pháp định tính

| Phương pháp | Mô tả | Khi nào dùng |
|------------|-------|-------------|
| **Expert Judgment** | Ý kiến chuyên gia | Sản phẩm mới |
| **Delphi** | Khảo sát chuyên gia nhiều vòng | Dự báo dài hạn |
| **Market Research** | Khảo sát thị trường | Sản phẩm mới, thị trường mới |
| **Sales Force** | Ước tính từ đội sales | Forecast ngắn hạn |

### Phương pháp định lượng

| Phương pháp | Công thức | Ưu điểm |
|------------|----------|---------|
| **Moving Average** | $\bar{X}_t = \frac{1}{n}\sum_{i=t-n+1}^{t} X_i$ | Đơn giản, lọc nhiễu |
| **Exponential Smoothing** | $F_{t+1} = \alpha X_t + (1-\alpha) F_t$ | Phản ứng nhanh |
| **Linear Regression** | $Y = a + bX$ | Phát hiện trend |
| **Seasonal Decomposition** | Trend × Season × Cycle × Random | Xử lý mùa vụ |

### Đo lường độ chính xác

$$
MAPE = \frac{1}{n} \sum_{t=1}^{n} \left| \frac{A_t - F_t}{A_t} \right| \times 100\%
$$

$$
Forecast\;Bias = \frac{\sum(F_t - A_t)}{\sum A_t} \times 100\%
$$

## 2. S&OP / IBP

### S&OP – Sales & Operations Planning

<div class="sop-flow">
  <div class="sop-step sop-s1">
    <div class="sop-icon">📊</div>
    <div class="sop-label">Data Gather</div>
    <div class="sop-month">Month 1</div>
  </div>
  <div class="sop-arrow"><span class="sop-arrow-line"></span></div>
  <div class="sop-step sop-s2">
    <div class="sop-icon">📈</div>
    <div class="sop-label">Demand Review</div>
    <div class="sop-month">Month 2</div>
  </div>
  <div class="sop-arrow"><span class="sop-arrow-line"></span></div>
  <div class="sop-step sop-s3">
    <div class="sop-icon">🏭</div>
    <div class="sop-label">Supply Review</div>
    <div class="sop-month">Month 3</div>
  </div>
  <div class="sop-arrow"><span class="sop-arrow-line"></span></div>
  <div class="sop-step sop-s4">
    <div class="sop-icon">🤝</div>
    <div class="sop-label">Pre-S&OP Meeting</div>
    <div class="sop-month">Month 4</div>
  </div>
  <div class="sop-arrow"><span class="sop-arrow-line"></span></div>
  <div class="sop-step sop-s5">
    <div class="sop-icon">👔</div>
    <div class="sop-label">Executive S&OP</div>
    <div class="sop-month">Month 5</div>
  </div>
</div>

<style>
.sop-flow{display:flex;align-items:center;justify-content:center;gap:0;padding:1.5rem .5rem;overflow-x:auto}
.sop-step{display:flex;flex-direction:column;align-items:center;min-width:100px;padding:1rem .7rem;border-radius:14px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);transition:all .3s}
.sop-step:hover{transform:translateY(-3px);box-shadow:0 6px 20px rgba(0,0,0,.08)}
.sop-s1{border-color:#6366f1}.sop-s1:hover{background:rgba(99,102,241,.06)}
.sop-s2{border-color:#f59e0b}.sop-s2:hover{background:rgba(245,158,11,.06)}
.sop-s3{border-color:#10b981}.sop-s3:hover{background:rgba(16,185,129,.06)}
.sop-s4{border-color:#ec4899}.sop-s4:hover{background:rgba(236,72,153,.06)}
.sop-s5{border-color:#ef4444}.sop-s5:hover{background:rgba(239,68,68,.06)}
.sop-icon{font-size:1.8rem;margin-bottom:.3rem}
.sop-label{font-weight:700;font-size:.82rem;color:var(--vp-c-text-1);text-align:center}
.sop-month{font-size:.65rem;color:var(--vp-c-text-3);margin-top:.2rem;font-weight:500}
.sop-arrow{display:flex;align-items:center;min-width:36px}
.sop-arrow-line{display:block;width:24px;height:2px;background:var(--vp-c-brand-1);position:relative}
.sop-arrow-line::after{content:'';position:absolute;right:-2px;top:-4px;border:5px solid transparent;border-left:6px solid var(--vp-c-brand-1)}
@media(max-width:640px){.sop-flow{flex-direction:column}.sop-arrow{transform:rotate(90deg);min-width:unset;margin:.3rem 0}}
</style>

### IBP – Integrated Business Planning

::: tip 💡 IBP vs S&OP
**S&OP** = Cân bằng cung – cầu (tactical)
**IBP** = S&OP + Financial + Strategic alignment

IBP kết nối:
- Chiến lược kinh doanh → Portfolio review
- Demand review → Supply review
- Financial reconciliation → Management review
:::

### 5 bước IBP

1. **Product Review** – Portfolio, NPI, phase-out
2. **Demand Review** – Consensus forecast
3. **Supply Review** – Capacity, constraint
4. **Integrated Reconciliation** – Cân bằng P&L
5. **Management Business Review** – Quyết định

## 3. Demand Sensing

### Demand Sensing vs Traditional Forecasting

| | Traditional | Demand Sensing |
|---|---|---|
| **Horizon** | Tháng / Quý | Ngày / Tuần |
| **Data** | Historical | Real-time (POS, weather, social) |
| **Accuracy** | 60–70% | 80–90% |
| **Response** | Chậm | Nhanh |

### Nguồn dữ liệu demand sensing

- 📊 POS (Point of Sale) data
- 🌤️ Weather data
- 📱 Social media trends
- 🔍 Search trends (Google Trends)
- 📰 Event data (lễ, tết, khuyến mãi)
- 🏪 Channel inventory data

## 4. Collaboration Sales–Operations

### CPFR – Collaborative Planning, Forecasting & Replenishment

<div class="cpfr-diagram">
  <div class="cpfr-party cpfr-retailer">
    <div class="cpfr-title">🏪 Retailer</div>
    <div class="cpfr-items">
      <span>POS data</span>
      <span>Promo plan</span>
    </div>
  </div>
  <div class="cpfr-center">
    <div class="cpfr-exchange cpfr-right">Shared Forecast & Plan →</div>
    <div class="cpfr-shared">🔄 CPFR</div>
    <div class="cpfr-exchange cpfr-left">← Inventory Status</div>
  </div>
  <div class="cpfr-party cpfr-supplier">
    <div class="cpfr-title">🏭 Supplier</div>
    <div class="cpfr-items">
      <span>Production plan</span>
      <span>Capacity</span>
    </div>
  </div>
</div>

<style>
.cpfr-diagram{display:flex;align-items:center;justify-content:center;gap:1rem;padding:1.5rem 1rem;overflow-x:auto}
.cpfr-party{min-width:130px;padding:1.2rem 1rem;border-radius:14px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);text-align:center;transition:all .3s}
.cpfr-party:hover{transform:translateY(-3px);box-shadow:0 6px 20px rgba(0,0,0,.08)}
.cpfr-retailer{border-color:#6366f1}.cpfr-retailer:hover{background:rgba(99,102,241,.06)}
.cpfr-supplier{border-color:#10b981}.cpfr-supplier:hover{background:rgba(16,185,129,.06)}
.cpfr-title{font-weight:700;font-size:1rem;margin-bottom:.5rem}
.cpfr-items{display:flex;flex-direction:column;gap:.3rem}
.cpfr-items span{font-size:.75rem;color:var(--vp-c-text-2);background:var(--vp-c-default-soft);padding:.2rem .5rem;border-radius:6px}
.cpfr-center{display:flex;flex-direction:column;align-items:center;gap:.4rem;min-width:140px}
.cpfr-shared{font-weight:700;font-size:.9rem;color:var(--vp-c-brand-1);background:var(--vp-c-brand-soft);padding:.4rem 1rem;border-radius:99px}
.cpfr-exchange{font-size:.65rem;color:var(--vp-c-text-3);font-weight:500}
@media(max-width:640px){.cpfr-diagram{flex-direction:column}.cpfr-center{flex-direction:row;flex-wrap:wrap;justify-content:center}}
</style>

### Consensus Forecast Process

1. **Statistical baseline** – Mô hình định lượng
2. **Sales input** – Insights từ thị trường
3. **Marketing input** – Khuyến mãi, NPI
4. **Customer input** – Forecast từ key accounts
5. **Consensus meeting** – Thống nhất con số cuối

## 📝 Case Study

::: warning ✍️ Sai lệch Forecast & hậu quả

**Tình huống:** Công ty dự báo bán 100.000 SP trong Q4 nhưng thực tế chỉ bán 65.000 SP.

**Hậu quả:**
- Tồn kho dư 35.000 SP → chi phí lưu kho tăng
- Nguyên liệu đã mua dư → vốn bị chôn
- Nhà máy đã tăng ca → chi phí nhân công lãng phí
- Sản phẩm có hạn sử dụng → rủi ro expired

**Phân tích:**
1. Nguyên nhân sai lệch là gì?
2. Ai chịu trách nhiệm?
3. Làm thế nào để cải thiện?
4. Xử lý tồn kho dư thế nào?
5. Thiết kế quy trình S&OP để ngăn ngừa
:::
