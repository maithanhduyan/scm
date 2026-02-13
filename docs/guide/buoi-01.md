---
outline: [2, 3]
---

# Buổi 1: Khái niệm & cấu trúc chuỗi cung ứng

<span class="lesson-badge">📘 Phần 1 — Tổng quan SCM</span>

> **Mục tiêu:** Xây nền tảng tư duy SCM chuẩn quốc tế

## 1. Mô hình chuỗi cung ứng end-to-end

Chuỗi cung ứng bao gồm toàn bộ dòng chảy từ **nguyên vật liệu → sản xuất → phân phối → khách hàng cuối**.

<div class="sc-e2e">
  <div class="sc-flow">
    <div class="sc-node sc-sup">🏭<br/>Supplier</div>
    <div class="sc-arrow">→</div>
    <div class="sc-node sc-mfg">⚙️<br/>Manufacturer</div>
    <div class="sc-arrow">→</div>
    <div class="sc-node sc-dist">📦<br/>Distributor</div>
    <div class="sc-arrow">→</div>
    <div class="sc-node sc-ret">🏪<br/>Retailer</div>
    <div class="sc-arrow">→</div>
    <div class="sc-node sc-cust">👤<br/>Customer</div>
  </div>
  <div class="sc-feedback">
    <span>🔄 Information & Cash Flow</span>
  </div>
</div>

<style>
.sc-e2e{padding:1.2rem .5rem;text-align:center}
.sc-flow{display:flex;align-items:center;justify-content:center;gap:0;flex-wrap:wrap}
.sc-node{min-width:90px;padding:.7rem .5rem;border-radius:12px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);font-size:.72rem;font-weight:600;color:var(--vp-c-text-1);transition:all .3s}
.sc-node:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.08)}
.sc-sup{border-color:#8b5cf6}.sc-mfg{border-color:#f59e0b}.sc-dist{border-color:#06b6d4}.sc-ret{border-color:#10b981}.sc-cust{border-color:#ec4899}
.sc-arrow{font-size:1rem;font-weight:700;color:var(--vp-c-brand-1);padding:0 .3rem}
.sc-feedback{margin-top:.6rem;padding:.5rem 1rem;border:2px dashed var(--vp-c-brand-1);border-radius:24px;display:inline-block;font-size:.7rem;font-weight:600;color:var(--vp-c-brand-1);background:var(--vp-c-brand-soft)}
@media(max-width:640px){.sc-flow{flex-direction:column}.sc-arrow{transform:rotate(90deg)}}
</style>

### Các thành phần chính

| Thành phần | Vai trò |
|-----------|---------|
| **Plan** | Hoạch định cung – cầu |
| **Source** | Quản trị nhà cung cấp |
| **Make** | Sản xuất & chế biến |
| **Deliver** | Phân phối & logistics |
| **Return** | Trả hàng & reverse logistics |
| **Enable** | Hạ tầng, công nghệ, nhân lực |

## 2. Vai trò SCM trong chiến lược doanh nghiệp

::: info 💡 Tại sao SCM quan trọng?
- Chiếm **60–70% chi phí** của hầu hết doanh nghiệp sản xuất
- Quyết định **tốc độ** đưa sản phẩm ra thị trường
- Ảnh hưởng trực tiếp đến **sự hài lòng khách hàng**
:::

### SCM liên kết chiến lược

- **Cost leadership** → Tối ưu chi phí chuỗi cung ứng
- **Differentiation** → Tốc độ, chất lượng dịch vụ
- **Focus** → Chuỗi cung ứng linh hoạt cho thị trường ngách

## 3. SCOR Model Overview

**SCOR** (Supply Chain Operations Reference) là mô hình tham chiếu chuẩn quốc tế do APICS phát triển.

### 6 quy trình cốt lõi

1. **Plan** – Cân bằng cung cầu
2. **Source** – Thu mua nguyên liệu
3. **Make** – Sản xuất
4. **Deliver** – Giao hàng
5. **Return** – Trả hàng
6. **Enable** – Hỗ trợ vận hành

### 4 cấp độ SCOR

| Cấp | Mô tả | Ví dụ |
|-----|--------|-------|
| Level 1 | Quy trình cốt lõi | Plan, Source, Make, Deliver |
| Level 2 | Cấu hình | Make-to-Stock, Make-to-Order |
| Level 3 | Hoạt động chi tiết | Nhận PO, kiểm tra chất lượng |
| Level 4 | Triển khai cụ thể | SOP riêng doanh nghiệp |

## 4. Mapping chuỗi cung ứng thực tế

### Các bước mapping

1. Xác định **khách hàng cuối** và nhu cầu
2. Vẽ **dòng chảy vật tư** (material flow)
3. Vẽ **dòng chảy thông tin** (information flow)
4. Vẽ **dòng chảy tài chính** (cash flow)
5. Xác định **điểm nghẽn** và **rủi ro**

## 📝 Bài tập

::: warning ✍️ Bài tập thực hành
**Vẽ bản đồ chuỗi cung ứng công ty bạn:**

1. Liệt kê top 5 nhà cung cấp chính
2. Mô tả quy trình sản xuất / dịch vụ
3. Vẽ mạng lưới phân phối
4. Xác định dòng chảy thông tin
5. Đánh dấu các điểm nghẽn (bottleneck)
:::

## 📚 Tài liệu tham khảo

- APICS SCOR Model Documentation
- *Supply Chain Management: Strategy, Planning, and Operation* — Chopra & Meindl
- *The Goal* — Eliyahu M. Goldratt
