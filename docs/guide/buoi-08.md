---
outline: [2, 3]
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

```
Month 1    Month 2    Month 3    Month 4    Month 5
┌────────┐
│ Data   │→ Demand  │→ Supply  │→ Pre-    │→ Executive
│ Gather │  Review  │  Review  │  S&OP    │  S&OP
└────────┘                     │  Meeting │  Meeting
                               └──────────┘
```

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

```
┌─────────┐    Shared    ┌──────────┐
│ Retailer│←── Forecast ──→│ Supplier │
│         │    & Plan     │          │
│ POS data│───────────────→│ Production│
│ Promo   │←── Inventory ─│ plan     │
└─────────┘    status     └──────────┘
```

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
