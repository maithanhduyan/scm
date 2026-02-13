---
outline: [2, 3]
---

# Buổi 5: Xây dựng & quản lý kênh phân phối

<span class="lesson-badge">🚚 Phần 3 — Phân phối</span>

> **Mục tiêu:** Tối ưu hệ thống phân phối

## 1. Mô hình phân phối

### Các mô hình phổ biến

```
[1] Direct:     Sản xuất ──────────────→ Khách hàng
[2] 1-Tier:     Sản xuất ──→ Retailer ──→ Khách hàng
[3] 2-Tier:     Sản xuất ──→ Distributor ──→ Retailer ──→ KH
[4] 3-Tier:     Sản xuất ──→ Agent ──→ Distributor ──→ Retailer ──→ KH
```

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
```
Chi phí vận chuyển  ↕  Chi phí tồn kho  ↕  Service Level
   Ít kho → cao         Nhiều kho → cao      Nhiều kho → cao
   Nhiều kho → thấp     Ít kho → thấp        Ít kho → thấp
```
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

```
         ┌── Online Store ──┐
         ├── Marketplace ───┤
Customer ┤                  ├── Unified Experience
         ├── Retail Store ──┤
         └── Social Commerce┘
```

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
