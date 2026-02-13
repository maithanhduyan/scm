---
outline: [2, 3]
---

# Buổi 7: Nguyên tắc quản lý tồn kho

<span class="lesson-badge">📊 Phần 4 — Tồn kho & Nhu cầu</span>

> **Mục tiêu:** Kiểm soát tồn kho hiệu quả

## 1. EOQ & Safety Stock

### EOQ – Economic Order Quantity

$$
EOQ = \sqrt{\frac{2 \times D \times S}{H}}
$$

Trong đó:
- $D$ = Nhu cầu hàng năm (đơn vị)
- $S$ = Chi phí đặt hàng (mỗi lần)
- $H$ = Chi phí lưu kho (mỗi đơn vị / năm)

::: details Ví dụ tính EOQ
- $D = 10.000$ sản phẩm/năm
- $S = 500.000$ VNĐ/lần đặt
- $H = 50.000$ VNĐ/sản phẩm/năm

$$
EOQ = \sqrt{\frac{2 \times 10.000 \times 500.000}{50.000}} = \sqrt{200.000.000} \approx 447 \text{ sản phẩm}
$$
:::

### Safety Stock

$$
SS = Z \times \sigma_{LT} = Z \times \sqrt{LT \times \sigma_D^2 + D^2 \times \sigma_{LT}^2}
$$

Trong đó:
- $Z$ = Hệ số phục vụ (1.65 cho 95%, 2.33 cho 99%)
- $\sigma_D$ = Độ lệch chuẩn nhu cầu
- $LT$ = Lead time trung bình
- $\sigma_{LT}$ = Độ lệch chuẩn lead time

## 2. ABC / XYZ Analysis

### ABC – Phân loại theo giá trị

| Nhóm | % SKU | % Giá trị | Chiến lược |
|------|-------|----------|-----------|
| **A** | 20% | 80% | Kiểm soát chặt, review thường xuyên |
| **B** | 30% | 15% | Kiểm soát trung bình |
| **C** | 50% | 5% | Tự động hóa, đơn giản |

### XYZ – Phân loại theo biến động

| Nhóm | Biến động | CoV | Đặc điểm |
|------|----------|-----|----------|
| **X** | Thấp | < 0.5 | Dự báo dễ, nhu cầu ổn định |
| **Y** | Trung bình | 0.5 – 1.0 | Dự báo được, có seasonality |
| **Z** | Cao | > 1.0 | Khó dự báo, sporadic |

### Ma trận ABC-XYZ

| | X (Ổn định) | Y (Trung bình) | Z (Biến động) |
|---|---|---|---|
| **A** | Lean, JIT | Buffer stock | Agile sourcing |
| **B** | Standard | Standard + SS | Flexible supply |
| **C** | Auto-replenish | Min-max | Make-to-Order |

## 3. Inventory Strategy

### Các chiến lược tồn kho

1. **Just-in-Time (JIT)** – Tồn kho tối thiểu
2. **Just-in-Case (JIC)** – Dự trữ an toàn
3. **Consignment** – Hàng ký gửi
4. **VMI** – Vendor Managed Inventory
5. **Postponement** – Trì hoãn hoàn thiện

### Inventory Metrics

| Metric | Công thức | Ý nghĩa |
|--------|----------|---------|
| **Days of Supply** | Tồn kho / Nhu cầu ngày | Bao nhiêu ngày tồn |
| **Turnover** | COGS / Tồn kho TB | Vòng quay / năm |
| **Fill Rate** | Đáp ứng / Nhu cầu | % đáp ứng khách |
| **Excess & Obsolete** | Hàng tồn quá hạn | % cần xử lý |

## 4. Multi-echelon Inventory

### Tối ưu tồn kho đa cấp

```
Central DC ──→ Regional DC ──→ Local DC ──→ Store
  (Raw/FG)      (FG buffer)    (Fast move)   (Display)
```

::: tip 💡 Nguyên tắc
- **Central** – Giữ hàng slow-moving, high-value
- **Regional** – Buffer cho biến động vùng
- **Local** – Chỉ fast-moving, high-demand
- **Bullwhip Effect** – Giảm bằng chia sẻ data
:::

## 📝 Workshop

::: warning ✍️ Tính tồn kho tối ưu

**Dữ liệu sản phẩm:**
| Thông số | Giá trị |
|----------|---------|
| Nhu cầu hàng năm | 12.000 SP |
| Chi phí đặt hàng | 200.000 VNĐ |
| Chi phí lưu kho | 30.000 VNĐ/SP/năm |
| Lead time | 7 ngày |
| σ nhu cầu | 5 SP/ngày |
| Service level | 95% |

**Yêu cầu:**
1. Tính EOQ
2. Tính Safety Stock
3. Tính Reorder Point
4. Vẽ đồ thị tồn kho (Sawtooth diagram)
5. Tính tổng chi phí tồn kho hàng năm
:::
