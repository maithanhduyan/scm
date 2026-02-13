---
outline: [2, 3]
---

# Buổi 9: Quản trị Logistics & vận tải

<span class="lesson-badge">🏭 Phần 5 — Logistics</span>

> **Mục tiêu:** Tối ưu vận hành logistics

## 1. Warehouse Management

### Quy trình kho chuẩn

<div class="wh-flow">
  <div class="wh-step wh-c1">
    <div class="wh-main">📥 Receiving</div>
    <div class="wh-sub">QC Check</div>
  </div>
  <div class="wh-arr"><span class="wh-arr-line"></span></div>
  <div class="wh-step wh-c2">
    <div class="wh-main">📍 Put-away</div>
    <div class="wh-sub">Slotting Assignment</div>
  </div>
  <div class="wh-arr"><span class="wh-arr-line"></span></div>
  <div class="wh-step wh-c3">
    <div class="wh-main">🏗️ Storage</div>
    <div class="wh-sub">Cycle Count</div>
  </div>
  <div class="wh-arr"><span class="wh-arr-line"></span></div>
  <div class="wh-step wh-c4">
    <div class="wh-main">🛒 Picking</div>
    <div class="wh-sub">Wave/Batch Planning</div>
  </div>
  <div class="wh-arr"><span class="wh-arr-line"></span></div>
  <div class="wh-step wh-c5">
    <div class="wh-main">📦 Packing</div>
    <div class="wh-sub">Value-add Services</div>
  </div>
  <div class="wh-arr"><span class="wh-arr-line"></span></div>
  <div class="wh-step wh-c6">
    <div class="wh-main">🚛 Shipping</div>
    <div class="wh-sub">Loading Dispatch</div>
  </div>
</div>

<style>
.wh-flow{display:flex;align-items:center;justify-content:center;gap:0;padding:1.5rem .5rem;overflow-x:auto}
.wh-step{display:flex;flex-direction:column;align-items:center;min-width:90px;padding:.8rem .6rem;border-radius:12px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);transition:all .3s;text-align:center}
.wh-step:hover{transform:translateY(-3px);box-shadow:0 6px 18px rgba(0,0,0,.08)}
.wh-c1{border-color:#6366f1}.wh-c1:hover{background:rgba(99,102,241,.06)}
.wh-c2{border-color:#8b5cf6}.wh-c2:hover{background:rgba(139,92,246,.06)}
.wh-c3{border-color:#f59e0b}.wh-c3:hover{background:rgba(245,158,11,.06)}
.wh-c4{border-color:#10b981}.wh-c4:hover{background:rgba(16,185,129,.06)}
.wh-c5{border-color:#ec4899}.wh-c5:hover{background:rgba(236,72,153,.06)}
.wh-c6{border-color:#ef4444}.wh-c6:hover{background:rgba(239,68,68,.06)}
.wh-main{font-weight:700;font-size:.78rem;color:var(--vp-c-text-1)}
.wh-sub{font-size:.6rem;color:var(--vp-c-text-3);margin-top:.3rem;font-style:italic}
.wh-arr{display:flex;align-items:center;min-width:28px}
.wh-arr-line{display:block;width:18px;height:2px;background:var(--vp-c-brand-1);position:relative}
.wh-arr-line::after{content:'';position:absolute;right:-2px;top:-4px;border:5px solid transparent;border-left:5px solid var(--vp-c-brand-1)}
@media(max-width:640px){.wh-flow{flex-direction:column}.wh-arr{transform:rotate(90deg);min-width:unset;margin:.3rem 0}}
</style>

### Layout & Slotting

| Zone | Sản phẩm | Vị trí |
|------|---------|--------|
| **A – Fast** | Top 20% SKU (80% volume) | Gần cửa xuất |
| **B – Medium** | 30% SKU tiếp theo | Giữa kho |
| **C – Slow** | 50% SKU còn lại | Xa cửa xuất |
| **Bulk** | Hàng pallet nguyên | Kệ cao |
| **Pick** | Hàng lẻ, thùng | Kệ thấp, dễ lấy |

### KPI Warehouse

| KPI | Target | Mô tả |
|-----|--------|-------|
| **Order accuracy** | ≥ 99.5% | Đúng hàng, đúng số lượng |
| **Picking productivity** | ≥ 50 lines/h | Năng suất lấy hàng |
| **Space utilization** | ≥ 85% | Sử dụng diện tích |
| **Dock-to-stock** | ≤ 4h | Thời gian nhập kho |
| **Inventory accuracy** | ≥ 99% | Chính xác tồn kho |

## 2. Transportation

### Các phương thức vận tải

| Mode | Ưu điểm | Nhược điểm | Phù hợp |
|------|---------|-----------|---------|
| 🚛 **Đường bộ** | Linh hoạt, door-to-door | Chi phí/km cao | Nội địa, < 500km |
| 🚂 **Đường sắt** | Chi phí thấp, bulk | Chậm, ít linh hoạt | Hàng nặng, dài hạn |
| 🚢 **Đường biển** | Rẻ nhất, khối lượng lớn | Rất chậm | Xuất nhập khẩu |
| ✈️ **Hàng không** | Nhanh nhất | Đắt nhất | Khẩn cấp, giá trị cao |
| 📦 **Multimodal** | Kết hợp ưu điểm | Phức tạp | Tối ưu theo tuyến |

### Tối ưu vận tải

- **Route optimization** – Thuật toán tối ưu tuyến đường
- **Load optimization** – Tối ưu xe/container
- **Consolidation** – Gom hàng giảm chi phí
- **Milk run** – Gom hàng từ nhiều NCC
- **Backhaul** – Tận dụng xe quay về

## 3. Incoterms® 2020

### Các điều kiện phổ biến

| Incoterm | Rủi ro chuyển | Chi phí người bán | Phù hợp |
|----------|--------------|-------------------|---------|
| **EXW** | Tại xưởng | Thấp nhất | Mua nội địa |
| **FOB** | Qua lan can tàu | Vận chuyển đến cảng | Xuất khẩu |
| **CIF** | Qua lan can tàu | + Cước + Bảo hiểm | Nhập khẩu |
| **DDP** | Tại kho người mua | Cao nhất | E-commerce |

### Biểu đồ trách nhiệm

<div class="inco-spectrum">
  <div class="inco-bar">
    <span class="inco-dot inco-buyer">EXW</span>
    <span class="inco-dot inco-buyer">FCA</span>
    <span class="inco-dot inco-mid">FOB</span>
    <span class="inco-dot inco-mid">CFR</span>
    <span class="inco-dot inco-seller">CIF</span>
    <span class="inco-dot inco-seller">DDP</span>
  </div>
  <div class="inco-gradient"></div>
  <div class="inco-labels">
    <span>◀ Rủi ro <strong>BUYER</strong> nhiều</span>
    <span>Rủi ro <strong>SELLER</strong> nhiều ▶</span>
  </div>
</div>

<style>
.inco-spectrum{max-width:600px;margin:1rem auto;padding:1rem}
.inco-bar{display:flex;justify-content:space-between;margin-bottom:.3rem}
.inco-dot{font-size:.75rem;font-weight:700;padding:.35rem .7rem;border-radius:99px;transition:all .3s;cursor:default}
.inco-dot:hover{transform:scale(1.1)}
.inco-buyer{background:rgba(59,130,246,.12);color:#2563eb}
.inco-mid{background:rgba(245,158,11,.12);color:#d97706}
.inco-seller{background:rgba(239,68,68,.12);color:#dc2626}
.inco-gradient{height:6px;border-radius:99px;background:linear-gradient(90deg,#3b82f6,#f59e0b,#ef4444);margin-bottom:.5rem}
.inco-labels{display:flex;justify-content:space-between;font-size:.7rem;color:var(--vp-c-text-3)}
</style>

## 4. 3PL / 4PL

### So sánh các mô hình outsource

| | In-house | 3PL | 4PL |
|---|---|---|---|
| **Kiểm soát** | Cao | Trung bình | Thấp |
| **Chi phí cố định** | Cao | Biến đổi | Biến đổi |
| **Chuyên môn** | Tự phát triển | Của 3PL | Tích hợp |
| **Linh hoạt** | Thấp | Trung bình | Cao |
| **Phù hợp** | Core business | Non-core | Toàn bộ SC |

### Khi nào nên outsource?

::: tip 💡 Quy tắc
- **In-house** khi logistics là **competitive advantage**
- **3PL** khi muốn **tập trung core business**
- **4PL** khi cần **orchestration** toàn bộ chuỗi
:::

## 📝 Bài tập

::: warning ✍️ Tính chi phí logistics

**Tình huống:** Giao 20 tấn hàng từ HCM → Hà Nội

| Phương thức | Thời gian | Chi phí/tấn |
|------------|----------|------------|
| Đường bộ | 2 ngày | 1.500.000 |
| Đường sắt | 4 ngày | 800.000 |
| Đường biển | 7 ngày | 400.000 |

**Yêu cầu:**
1. Tính tổng chi phí mỗi phương thức
2. Tính chi phí tồn kho trong quá trình vận chuyển
3. Tính tổng chi phí (vận chuyển + tồn kho)
4. Chọn phương thức tối ưu & giải thích
:::
