---
outline: [2, 3]
---

# Buổi 6: Quản lý hiệu suất & cải tiến kênh

<span class="lesson-badge">🚚 Phần 3 — Phân phối</span>

> **Mục tiêu:** Đo lường và cải tiến hiệu suất kênh phân phối

## 1. KPI kênh phân phối

### Bộ KPI chuẩn

| KPI | Mô tả | Target |
|-----|-------|--------|
| **Numeric Distribution** | % điểm bán có hàng | ≥ 80% |
| **Weighted Distribution** | % doanh số thị trường được phủ | ≥ 70% |
| **Sell-through Rate** | Tỷ lệ bán ra / nhập vào | ≥ 85% |
| **Inventory Turnover** | Số vòng quay tồn kho / năm | ≥ 8x |
| **Order Fill Rate** | % đơn hàng đáp ứng đủ | ≥ 95% |
| **Perfect Order Rate** | % đơn hoàn hảo (đúng, đủ, kịp) | ≥ 90% |

### Dashboard mẫu

<div class="dp-dash">
  <div class="dp-header">📊 Distribution Performance Dashboard</div>
  <div class="dp-grid">
    <div class="dp-card dp-ok">
      <div class="dp-metric">Fill Rate</div>
      <div class="dp-value">96.2%</div>
      <div class="dp-trend dp-up">✅ +1.2%</div>
    </div>
    <div class="dp-card dp-warn">
      <div class="dp-metric">On-time Delivery</div>
      <div class="dp-value">94.1%</div>
      <div class="dp-trend dp-down">⚠️ -0.5%</div>
    </div>
    <div class="dp-card dp-ok">
      <div class="dp-metric">Perfect Order</div>
      <div class="dp-value">91.3%</div>
      <div class="dp-trend dp-up">✅ +2.1%</div>
    </div>
    <div class="dp-card dp-ok">
      <div class="dp-metric">Turnover</div>
      <div class="dp-value">9.2x</div>
      <div class="dp-trend dp-up">✅ +0.8</div>
    </div>
  </div>
</div>

<style>
.dp-dash{border:2px solid var(--vp-c-divider);border-radius:14px;overflow:hidden;background:var(--vp-c-bg-soft)}
.dp-header{padding:.6rem 1rem;font-weight:700;font-size:.78rem;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);border-bottom:1px solid var(--vp-c-divider)}
.dp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.dp-card{padding:.8rem .6rem;text-align:center;border-right:1px solid var(--vp-c-divider);transition:background .2s}
.dp-card:last-child{border-right:none}
.dp-card:hover{background:var(--vp-c-bg)}
.dp-metric{font-size:.6rem;font-weight:600;color:var(--vp-c-text-3);text-transform:uppercase;letter-spacing:.3px}
.dp-value{font-size:1.3rem;font-weight:800;color:var(--vp-c-text-1);margin:.2rem 0}
.dp-trend{font-size:.62rem;font-weight:600}
.dp-up{color:#10b981}.dp-down{color:#f59e0b}
.dp-ok{border-top:3px solid #10b981}.dp-warn{border-top:3px solid #f59e0b}
@media(max-width:640px){.dp-grid{grid-template-columns:repeat(2,1fr)}.dp-card{border-bottom:1px solid var(--vp-c-divider)}}
</style>

## 2. Service Level

### OTIF – On Time In Full

$$
OTIF = \frac{\text{Đơn giao đúng hạn \& đủ số lượng}}{\text{Tổng số đơn hàng}} \times 100\%
$$

### Service Level Agreement (SLA)

| Tier | Khách hàng | Target OTIF | Response Time |
|------|-----------|-------------|---------------|
| **Platinum** | Top 10 | 98% | 2h |
| **Gold** | Top 50 | 95% | 4h |
| **Silver** | Còn lại | 92% | 8h |

## 3. Cost-to-Serve

### Các thành phần chi phí phục vụ

```
Cost-to-Serve = Chi phí đặt hàng
              + Chi phí xử lý (picking, packing)
              + Chi phí vận chuyển
              + Chi phí tồn kho
              + Chi phí trả hàng
              + Chi phí dịch vụ khách hàng
```

### Phân tích lợi nhuận theo kênh

| Kênh | Doanh thu | Cost-to-Serve | Lợi nhuận |
|------|----------|---------------|-----------|
| Modern Trade | 40% | 8% | 32% |
| General Trade | 35% | 12% | 23% |
| Online | 15% | 18% | -3% |
| D2C | 10% | 15% | -5% |

::: danger ⚠️ Insight
Kênh doanh thu cao chưa chắc lợi nhuận cao. Cần phân tích **Cost-to-Serve** chi tiết!
:::

## 4. Continuous Improvement

### PDCA cho kênh phân phối

1. **Plan** – Phân tích gap, đặt mục tiêu
2. **Do** – Triển khai cải tiến
3. **Check** – Đo lường kết quả
4. **Act** – Chuẩn hóa / điều chỉnh

### Root Cause Analysis – 5 Why

::: details Ví dụ: Tỷ lệ giao hàng trễ tăng
**Vấn đề:** OTIF giảm từ 95% → 88%

1. **Why?** → Nhiều đơn giao trễ
2. **Why?** → Xe vận chuyển không đủ
3. **Why?** → Đơn hàng tăng đột biến cuối tháng
4. **Why?** → KH dồn đơn cuối tháng để đạt target
5. **Why?** → Chính sách khuyến mãi cuối tháng

**Root cause:** Chính sách khuyến mãi → phải điều chỉnh phân bổ đều
:::

## 📝 Bài tập

::: warning ✍️ Phân tích Cost-to-Serve
1. Chọn 3 kênh phân phối chính của công ty bạn
2. Tính chi phí phục vụ cho mỗi kênh
3. So sánh lợi nhuận ròng theo kênh
4. Đề xuất hành động cải thiện
:::
