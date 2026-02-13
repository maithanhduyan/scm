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

<div class="echelon-flow">
  <div class="echelon-node echelon-central">
    <div class="echelon-icon">🏭</div>
    <div class="echelon-label">Central DC</div>
    <div class="echelon-sub">Raw / FG</div>
    <div class="echelon-tag tag-high">High Value · Slow-moving</div>
  </div>
  <div class="echelon-arrow">
    <span class="arrow-line"></span>
    <span class="arrow-text">Replenish</span>
  </div>
  <div class="echelon-node echelon-regional">
    <div class="echelon-icon">📦</div>
    <div class="echelon-label">Regional DC</div>
    <div class="echelon-sub">FG Buffer</div>
    <div class="echelon-tag tag-mid">Buffer · Vùng miền</div>
  </div>
  <div class="echelon-arrow">
    <span class="arrow-line"></span>
    <span class="arrow-text">Distribute</span>
  </div>
  <div class="echelon-node echelon-local">
    <div class="echelon-icon">🚚</div>
    <div class="echelon-label">Local DC</div>
    <div class="echelon-sub">Fast-moving</div>
    <div class="echelon-tag tag-low">Nhanh · Gần khách</div>
  </div>
  <div class="echelon-arrow">
    <span class="arrow-line"></span>
    <span class="arrow-text">Deliver</span>
  </div>
  <div class="echelon-node echelon-store">
    <div class="echelon-icon">🏪</div>
    <div class="echelon-label">Store</div>
    <div class="echelon-sub">Display</div>
    <div class="echelon-tag tag-end">Trưng bày · Bán lẻ</div>
  </div>
</div>

<div class="echelon-metrics">
  <div class="metric-item">
    <span class="metric-arrow">◀</span>
    <span class="metric-label">📉 Inventory Level giảm dần</span>
  </div>
  <div class="metric-item">
    <span class="metric-label">📈 Vòng quay tồn kho tăng dần</span>
    <span class="metric-arrow">▶</span>
  </div>
</div>

<style>
.echelon-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 2rem 1rem;
  overflow-x: auto;
}
.echelon-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 110px;
  max-width: 140px;
  padding: 1rem 0.8rem;
  border-radius: 16px;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  position: relative;
}
.echelon-node:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.echelon-central { border-color: #6366f1; }
.echelon-central:hover { background: rgba(99,102,241,0.08); }
.echelon-regional { border-color: #f59e0b; }
.echelon-regional:hover { background: rgba(245,158,11,0.08); }
.echelon-local { border-color: #10b981; }
.echelon-local:hover { background: rgba(16,185,129,0.08); }
.echelon-store { border-color: #ef4444; }
.echelon-store:hover { background: rgba(239,68,68,0.08); }
.echelon-icon { font-size: 2rem; margin-bottom: 0.4rem; }
.echelon-label { font-weight: 700; font-size: 0.95rem; color: var(--vp-c-text-1); }
.echelon-sub { font-size: 0.8rem; color: var(--vp-c-text-2); margin-top: 0.2rem; }
.echelon-tag {
  margin-top: 0.6rem;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
  white-space: nowrap;
}
.tag-high { background: rgba(99,102,241,0.12); color: #6366f1; }
.tag-mid { background: rgba(245,158,11,0.12); color: #d97706; }
.tag-low { background: rgba(16,185,129,0.12); color: #059669; }
.tag-end { background: rgba(239,68,68,0.12); color: #dc2626; }

.echelon-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
  flex-shrink: 1;
  position: relative;
}
.arrow-line {
  display: block;
  width: 36px;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2, var(--vp-c-brand-1)));
  position: relative;
}
.arrow-line::after {
  content: '';
  position: absolute;
  right: -2px;
  top: -4px;
  border: 5px solid transparent;
  border-left: 7px solid var(--vp-c-brand-1);
}
.arrow-text {
  font-size: 0.6rem;
  color: var(--vp-c-text-3);
  margin-top: 0.3rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.echelon-metrics {
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  border-top: 1px dashed var(--vp-c-divider);
}
.metric-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}
.metric-arrow { font-size: 0.65rem; color: var(--vp-c-brand-1); }

@media (max-width: 640px) {
  .echelon-flow { flex-direction: column; gap: 0; }
  .echelon-arrow {
    min-width: unset;
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
  .echelon-metrics { flex-direction: column; gap: 0.5rem; align-items: center; }
}
</style>

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
