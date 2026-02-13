---
outline: [2, 3]
---

# Buổi 10: Tối ưu dòng chảy chuỗi cung ứng

<span class="lesson-badge">🏭 Phần 5 — Logistics</span>

> **Mục tiêu:** Phân tích và tối ưu dòng chảy end-to-end

## 1. Lead Time Reduction

### Cấu trúc Lead Time

$$
Total\;Lead\;Time = \underbrace{Order\;Processing}_{t_1} + \underbrace{Production}_{t_2} + \underbrace{Transportation}_{t_3} + \underbrace{Queue\;Time}_{t_4}
$$

::: info 💡 Thực tế
**85–95% lead time** là thời gian chờ (queue/wait time), chỉ 5–15% là thời gian xử lý thực sự!
:::

### Chiến lược giảm Lead Time

| Chiến lược | Mô tả | Tác động |
|-----------|-------|---------|
| **Parallel processing** | Làm đồng thời thay vì tuần tự | -30-50% |
| **Eliminate non-value** | Loại bỏ bước không giá trị | -20-40% |
| **Automation** | Tự động hóa xử lý | -40-60% |
| **Pre-positioning** | Đặt hàng/vật tư trước | -50-70% |
| **Postponement** | Trì hoãn cá nhân hóa | -20-30% |

## 2. Bottleneck Analysis

### Theory of Constraints (TOC)

```
Station A → Station B → Station C → Station D
 10/h         5/h ⚠️       8/h         12/h
              ↑
         BOTTLENECK
         (Throughput = 5/h)
```

### 5 bước TOC

1. **Identify** – Tìm điểm nghẽn
2. **Exploit** – Khai thác tối đa điểm nghẽn
3. **Subordinate** – Các bước khác phục vụ điểm nghẽn
4. **Elevate** – Đầu tư nâng công suất
5. **Repeat** – Tìm điểm nghẽn mới

### Cách tìm Bottleneck

- WIP (Work-in-Progress) **tích tụ nhiều nhất** trước điểm nghẽn
- Máy/station có **utilization cao nhất**
- Nơi có **thời gian chờ dài nhất**
- Nơi nhận **nhiều complaint nhất**

## 3. Lean Logistics

### 8 lãng phí (Muda) trong logistics

| # | Lãng phí | Ví dụ SCM |
|---|---------|----------|
| 1 | **Overproduction** | Sản xuất dư, đặt hàng dư |
| 2 | **Waiting** | Chờ xe, chờ phê duyệt |
| 3 | **Transport** | Vận chuyển không cần thiết |
| 4 | **Over-processing** | Đóng gói quá mức |
| 5 | **Inventory** | Tồn kho dư thừa |
| 6 | **Motion** | Di chuyển không hiệu quả trong kho |
| 7 | **Defects** | Hàng lỗi, giao sai |
| 8 | **Unused talent** | Không tận dụng ý tưởng nhân viên |

### Value Stream Mapping (VSM)

```
Customer      ←── Information Flow ──←      Supplier
    ↓                                          ↓
 Order → Process → Process → Process → Ship → Deliver
         VA: 2h    VA: 4h    VA: 1h
         NVA: 8h   NVA: 12h  NVA: 6h
         ─────────────────────────────
         Total VA:  7h  (18%)
         Total NVA: 26h (82%)  ← Cơ hội cải tiến!
```

## 4. Network Optimization

### Các mô hình tối ưu

| Mô hình | Ứng dụng |
|---------|----------|
| **Center of Gravity** | Xác định vị trí kho tối ưu |
| **Transportation Model** | Phân bổ hàng từ kho đến KH |
| **Vehicle Routing (VRP)** | Tối ưu tuyến giao hàng |
| **Facility Location** | Mở/đóng kho tối ưu |

### Center of Gravity

$$
X^* = \frac{\sum d_i \cdot x_i}{\sum d_i} \quad,\quad Y^* = \frac{\sum d_i \cdot y_i}{\sum d_i}
$$

Trong đó $d_i$ là nhu cầu điểm $i$, $(x_i, y_i)$ là tọa độ.

## 📝 Simulation

::: warning ✍️ Game Chuỗi cung ứng (Beer Game)

**Mô phỏng hiệu ứng Bullwhip:**

| Vai trò | Nhiệm vụ |
|---------|----------|
| **Retailer** | Đặt hàng cho Wholesaler |
| **Wholesaler** | Đặt hàng cho Distributor |
| **Distributor** | Đặt hàng cho Factory |
| **Factory** | Sản xuất theo đơn |

**Luật chơi:**
1. Mỗi vòng = 1 tuần
2. Lead time = 2 tuần
3. Mục tiêu: Minimize tổng chi phí (tồn kho + thiếu hàng)
4. Không được giao tiếp giữa các vai trò!

**Kết quả mong đợi:** Nhận biết Bullwhip Effect & tầm quan trọng của chia sẻ thông tin.
:::
