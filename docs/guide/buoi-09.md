---
outline: [2, 3]
---

# Buổi 9: Quản trị Logistics & vận tải

<span class="lesson-badge">🏭 Phần 5 — Logistics</span>

> **Mục tiêu:** Tối ưu vận hành logistics

## 1. Warehouse Management

### Quy trình kho chuẩn

```
Receiving → Put-away → Storage → Picking → Packing → Shipping
   ↓          ↓          ↓         ↓         ↓          ↓
  QC      Slotting    Cycle    Wave/Batch  Value-add   Loading
 Check   Assignment   Count    Planning    Services    Dispatch
```

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

```
EXW ──→ FCA ──→ FOB ──→ CFR ──→ CIF ──→ DDP
←── Rủi ro người MUA nhiều          Rủi ro người BÁN nhiều ──→
```

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
