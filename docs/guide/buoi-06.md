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

```
┌────────────────────────────────────────────┐
│  📊 Distribution Performance Dashboard     │
├──────────┬──────────┬──────────┬──────────┤
│  Fill    │  On-time │  Perfect │  Turn-   │
│  Rate    │  Delivery│  Order   │  over    │
│  96.2%   │  94.1%   │  91.3%   │  9.2x    │
│  ✅ +1.2% │ ⚠️ -0.5% │ ✅ +2.1% │ ✅ +0.8  │
└──────────┴──────────┴──────────┴──────────┘
```

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
