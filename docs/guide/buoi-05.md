---
outline: [2, 3]
title: "Buổi 5: Xây dựng & quản lý kênh phân phối "
description: "Mô hình phân phối Direct/1-Tier/2-Tier, Network Design, D2C vs Distributor, Omnichannel và trade-off chi phí vận chuyển — tồn kho — service level."
head:
  - - meta
    - property: og:title
      content: "Buổi 5: Xây dựng & quản lý kênh phân phối"
  - - meta
    - property: og:description
      content: "Distribution Network Design, D2C vs Distributor, Omnichannel — Bài 5 khóa học SCM miễn phí."
---

# Buổi 5: Xây dựng & quản lý kênh phân phối

<span class="lesson-badge">🚚 Phần 3 — Phân phối</span>

> **Mục tiêu:** Tối ưu hệ thống phân phối

## 1. Mô hình phân phối

### Các mô hình phổ biến

<div class="dist-tiers">
  <div class="dt-row dt-r1">
    <span class="dt-label">[1] Direct</span>
    <span class="dt-node dt-prod">🏭 Sản xuất</span>
    <span class="dt-line dt-long"></span>
    <span class="dt-node dt-cust">👤 Khách hàng</span>
  </div>
  <div class="dt-row dt-r2">
    <span class="dt-label">[2] 1-Tier</span>
    <span class="dt-node dt-prod">🏭 Sản xuất</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-mid">🏪 Retailer</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-cust">👤 KH</span>
  </div>
  <div class="dt-row dt-r3">
    <span class="dt-label">[3] 2-Tier</span>
    <span class="dt-node dt-prod">🏭 Sản xuất</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-mid">📦 Distributor</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-mid">🏪 Retailer</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-cust">👤 KH</span>
  </div>
  <div class="dt-row dt-r4">
    <span class="dt-label">[4] 3-Tier</span>
    <span class="dt-node dt-prod">🏭 Sản xuất</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-mid">💼 Agent</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-mid">📦 Dist.</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-mid">🏪 Retail</span>
    <span class="dt-line"></span>
    <span class="dt-node dt-cust">👤 KH</span>
  </div>
</div>

<style>
.dist-tiers{display:flex;flex-direction:column;gap:.6rem;padding:1rem .5rem}
.dt-row{display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow-x:auto}
.dt-label{min-width:70px;font-weight:700;font-size:.65rem;color:var(--vp-c-text-3);text-align:right;padding-right:.5rem}
.dt-node{padding:.4rem .5rem;border-radius:8px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);font-size:.62rem;font-weight:600;white-space:nowrap;transition:all .3s}
.dt-node:hover{transform:translateY(-2px);box-shadow:0 3px 10px rgba(0,0,0,.07)}
.dt-prod{border-color:#8b5cf6}.dt-mid{border-color:#f59e0b}.dt-cust{border-color:#10b981}
.dt-line{width:24px;height:2px;background:var(--vp-c-brand-1);position:relative;flex-shrink:0}
.dt-line::after{content:'';position:absolute;right:-2px;top:-4px;border:5px solid transparent;border-left:5px solid var(--vp-c-brand-1)}
.dt-long{width:80px}
.dt-r1 .dt-label{color:#6366f1}.dt-r2 .dt-label{color:#f59e0b}.dt-r3 .dt-label{color:#10b981}.dt-r4 .dt-label{color:#ef4444}
@media(max-width:640px){.dt-label{min-width:55px;font-size:.58rem}.dt-node{font-size:.55rem;padding:.3rem .35rem}}
</style>

### So sánh mô hình

| Mô hình | Ưu điểm | Nhược điểm |
|---------|---------|-----------|
| **Direct** | Kiểm soát tốt, margin cao | Chi phí logistics cao |
| **1-Tier** | Cân bằng | Phụ thuộc retailer |
| **2-Tier** | Phủ rộng | Mất kiểm soát, margin thấp |
| **Hybrid** | Linh hoạt | Phức tạp quản lý |

## 2. Network Design

### Các yếu tố thiết kế mạng lưới

1. **Số lượng & vị trí kho** – Trung tâm vs phân tán
2. **Phân bổ sản phẩm** – Kho nào giữ hàng gì
3. **Vùng phục vụ** – Kho nào phục vụ khu vực nào
4. **Phương thức vận chuyển** – Đường bộ, biển, hàng không
5. **Service level** – Cam kết thời gian giao

### Trade-off cơ bản

::: info 💡 Trade-off

<div class="tradeoff">
  <div class="to-col to-c1">
    <div class="to-head">🚛 Chi phí vận chuyển</div>
    <div class="to-row to-up"><span class="to-tag to-few">Ít kho</span> → <strong>Cao</strong> ↑</div>
    <div class="to-row to-dn"><span class="to-tag to-many">Nhiều kho</span> → <strong>Thấp</strong> ↓</div>
  </div>
  <div class="to-sep">↕</div>
  <div class="to-col to-c2">
    <div class="to-head">📦 Chi phí tồn kho</div>
    <div class="to-row to-dn"><span class="to-tag to-few">Ít kho</span> → <strong>Thấp</strong> ↓</div>
    <div class="to-row to-up"><span class="to-tag to-many">Nhiều kho</span> → <strong>Cao</strong> ↑</div>
  </div>
  <div class="to-sep">↕</div>
  <div class="to-col to-c3">
    <div class="to-head">⭐ Service Level</div>
    <div class="to-row to-dn"><span class="to-tag to-few">Ít kho</span> → <strong>Thấp</strong> ↓</div>
    <div class="to-row to-up"><span class="to-tag to-many">Nhiều kho</span> → <strong>Cao</strong> ↑</div>
  </div>
</div>

<style>
.tradeoff{display:flex;align-items:stretch;justify-content:center;gap:0;padding:.6rem 0;overflow-x:auto}
.to-col{min-width:120px;padding:.6rem .5rem;border-radius:10px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg);text-align:center;transition:all .3s}
.to-col:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.06)}
.to-c1{border-color:#8b5cf6}.to-c2{border-color:#f59e0b}.to-c3{border-color:#10b981}
.to-head{font-weight:700;font-size:.68rem;color:var(--vp-c-text-1);padding-bottom:.35rem;margin-bottom:.35rem;border-bottom:1px solid var(--vp-c-divider)}
.to-row{font-size:.62rem;color:var(--vp-c-text-2);padding:.2rem .3rem;border-radius:4px;margin:.15rem 0}
.to-up{background:rgba(239,68,68,.06)}.to-dn{background:rgba(16,185,129,.06)}
.to-tag{display:inline-block;padding:.1rem .3rem;border-radius:4px;font-weight:600;font-size:.58rem}
.to-few{background:rgba(99,102,241,.1);color:#6366f1}.to-many{background:rgba(245,158,11,.1);color:#d97706}
.to-sep{display:flex;align-items:center;font-size:.9rem;font-weight:700;color:var(--vp-c-text-3);padding:0 .3rem}
@media(max-width:640px){.tradeoff{flex-direction:column;align-items:center;gap:.3rem}.to-sep{transform:rotate(90deg)}}
</style>

:::

## 3. D2C vs Distributor

### D2C (Direct-to-Consumer)

- ✅ Kiểm soát trải nghiệm khách hàng
- ✅ Margin cao hơn
- ✅ Data khách hàng trực tiếp
- ❌ Chi phí logistics & fulfillment
- ❌ Cần đầu tư marketing lớn

### Distributor Model

- ✅ Phủ rộng thị trường nhanh
- ✅ Tận dụng network có sẵn
- ✅ Chi phí cố định thấp
- ❌ Mất kiểm soát giá & trải nghiệm
- ❌ Margin thấp hơn

## 4. Omnichannel

### Mô hình Omnichannel

<div class="omni-diagram">
  <div class="omni-cust">👤<br/>Customer</div>
  <div class="omni-channels">
    <div class="omni-ch omni-c1">💻 Online Store</div>
    <div class="omni-ch omni-c2">🛒 Marketplace</div>
    <div class="omni-ch omni-c3">🏪 Retail Store</div>
    <div class="omni-ch omni-c4">📱 Social Commerce</div>
  </div>
  <div class="omni-unified">✨ Unified Experience</div>
</div>

<style>
.omni-diagram{display:flex;align-items:center;justify-content:center;gap:.8rem;padding:1.2rem .5rem}
.omni-cust{font-size:.8rem;font-weight:700;color:var(--vp-c-text-1);min-width:70px;text-align:center;padding:.6rem;border:2px solid #ec4899;border-radius:50%;background:var(--vp-c-bg-soft)}
.omni-channels{display:flex;flex-direction:column;gap:.35rem}
.omni-ch{padding:.45rem .8rem;border-radius:8px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);font-size:.65rem;font-weight:600;transition:all .3s}
.omni-ch:hover{transform:translateX(4px);box-shadow:0 3px 10px rgba(0,0,0,.07)}
.omni-c1{border-color:#6366f1}.omni-c2{border-color:#f59e0b}.omni-c3{border-color:#10b981}.omni-c4{border-color:#ec4899}
.omni-unified{font-size:.75rem;font-weight:700;color:var(--vp-c-brand-1);padding:.8rem;border:2px solid var(--vp-c-brand-1);border-radius:12px;background:var(--vp-c-brand-soft);text-align:center}
@media(max-width:640px){.omni-diagram{flex-direction:column}}
</style>

### Yêu cầu vận hành omnichannel

- **Unified Inventory** – Tồn kho tích hợp
- **Order Management System** – Quản lý đơn hàng đa kênh
- **Last-mile delivery** – Giao hàng chặng cuối
- **Returns management** – Trả hàng linh hoạt
- **Data integration** – Dữ liệu xuyên kênh

## 📝 Bài tập

::: warning ✍️ Thiết kế mạng lưới phân phối

**Tình huống:** Công ty FMCG mới gia nhập thị trường Việt Nam.

**Dữ liệu:**
- 3 nhà máy: HCM, Hà Nội, Đà Nẵng
- Thị trường: 63 tỉnh thành
- SKU: 200 sản phẩm
- Target delivery: 48h cho thành phố, 72h cho tỉnh

**Yêu cầu:**
1. Đề xuất số lượng & vị trí kho
2. Phân bổ vùng phục vụ
3. Chọn mô hình phân phối
4. Tính toán trade-off chi phí vs service level
:::
