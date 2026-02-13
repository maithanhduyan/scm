---
outline: [2, 3]
title: "Buổi 10: Tối ưu dòng chảy chuỗi cung ứng "
description: "Theory of Constraints (TOC), Value Stream Mapping (VSM), Lean Logistics, Bottleneck Analysis, Drum-Buffer-Rope và tối ưu lead time."
head:
  - - meta
    - property: og:title
      content: "Buổi 10: Tối ưu dòng chảy chuỗi cung ứng"
  - - meta
    - property: og:description
      content: "TOC, VSM, Lean Logistics, Bottleneck Analysis — Bài 10 khóa học SCM miễn phí."
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

<div class="toc-flow">
  <div class="toc-station">
    <div class="toc-rate">10/h</div>
    <div class="toc-name">Station A</div>
  </div>
  <div class="toc-arr"><span class="toc-arr-line"></span></div>
  <div class="toc-station toc-bottleneck">
    <div class="toc-rate">5/h ⚠️</div>
    <div class="toc-name">Station B</div>
    <div class="toc-badge">BOTTLENECK</div>
  </div>
  <div class="toc-arr"><span class="toc-arr-line"></span></div>
  <div class="toc-station">
    <div class="toc-rate">8/h</div>
    <div class="toc-name">Station C</div>
  </div>
  <div class="toc-arr"><span class="toc-arr-line"></span></div>
  <div class="toc-station">
    <div class="toc-rate">12/h</div>
    <div class="toc-name">Station D</div>
  </div>
</div>
<div class="toc-caption">Throughput cả hệ thống = <strong>5/h</strong> (bị giới hạn bởi bottleneck)</div>

<style>
.toc-flow{display:flex;align-items:center;justify-content:center;gap:0;padding:1.5rem .5rem;overflow-x:auto}
.toc-station{display:flex;flex-direction:column;align-items:center;min-width:100px;padding:1rem .8rem;border-radius:12px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);transition:all .3s;position:relative}
.toc-station:hover{transform:translateY(-3px);box-shadow:0 6px 18px rgba(0,0,0,.08)}
.toc-bottleneck{border-color:#ef4444;background:rgba(239,68,68,.06);animation:toc-pulse 2s infinite}
@keyframes toc-pulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.2)}50%{box-shadow:0 0 0 8px rgba(239,68,68,0)}}
.toc-rate{font-weight:700;font-size:1.1rem;color:var(--vp-c-text-1)}
.toc-name{font-size:.78rem;color:var(--vp-c-text-2);margin-top:.2rem}
.toc-badge{position:absolute;bottom:-10px;font-size:.55rem;font-weight:700;color:#fff;background:#ef4444;padding:.15rem .5rem;border-radius:99px}
.toc-arr{display:flex;align-items:center;min-width:40px}
.toc-arr-line{display:block;width:28px;height:2px;background:var(--vp-c-brand-1);position:relative}
.toc-arr-line::after{content:'';position:absolute;right:-2px;top:-4px;border:5px solid transparent;border-left:5px solid var(--vp-c-brand-1)}
.toc-caption{text-align:center;font-size:.8rem;color:var(--vp-c-text-2);margin-top:.8rem}
@media(max-width:640px){.toc-flow{flex-direction:column}.toc-arr{transform:rotate(90deg);min-width:unset;margin:.5rem 0}}
</style>

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

<div class="vsm-diagram">
  <div class="vsm-info-flow">
    <span class="vsm-entity vsm-customer">👤 Customer</span>
    <span class="vsm-info-arrow">←─ Information Flow ─→</span>
    <span class="vsm-entity vsm-supplier">🏭 Supplier</span>
  </div>
  <div class="vsm-process-flow">
    <div class="vsm-node vsm-trigger">Order</div>
    <div class="vsm-arr"><span class="vsm-arr-line"></span></div>
    <div class="vsm-node vsm-proc">
      <div class="vsm-proc-name">Process 1</div>
      <div class="vsm-va">✅ VA: 2h</div>
      <div class="vsm-nva">❌ NVA: 8h</div>
    </div>
    <div class="vsm-arr"><span class="vsm-arr-line"></span></div>
    <div class="vsm-node vsm-proc">
      <div class="vsm-proc-name">Process 2</div>
      <div class="vsm-va">✅ VA: 4h</div>
      <div class="vsm-nva">❌ NVA: 12h</div>
    </div>
    <div class="vsm-arr"><span class="vsm-arr-line"></span></div>
    <div class="vsm-node vsm-proc">
      <div class="vsm-proc-name">Process 3</div>
      <div class="vsm-va">✅ VA: 1h</div>
      <div class="vsm-nva">❌ NVA: 6h</div>
    </div>
    <div class="vsm-arr"><span class="vsm-arr-line"></span></div>
    <div class="vsm-node vsm-trigger">Deliver</div>
  </div>
  <div class="vsm-summary">
    <div class="vsm-metric vsm-good">🟢 Total VA: <strong>7h (18%)</strong></div>
    <div class="vsm-metric vsm-bad">🔴 Total NVA: <strong>26h (82%)</strong> ← Cơ hội cải tiến!</div>
  </div>
</div>

<style>
.vsm-diagram{padding:1rem;overflow-x:auto}
.vsm-info-flow{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;padding:.5rem 1rem;border:1px dashed var(--vp-c-divider);border-radius:8px;background:var(--vp-c-bg-soft)}
.vsm-entity{font-weight:700;font-size:.85rem}
.vsm-customer{color:#6366f1}.vsm-supplier{color:#10b981}
.vsm-info-arrow{font-size:.7rem;color:var(--vp-c-text-3)}
.vsm-process-flow{display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:1rem}
.vsm-node{padding:.6rem .8rem;border-radius:10px;text-align:center;transition:all .3s}
.vsm-node:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,.07)}
.vsm-trigger{background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-weight:700;font-size:.8rem;border:2px solid var(--vp-c-brand-1);min-width:60px}
.vsm-proc{border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);min-width:90px}
.vsm-proc-name{font-weight:700;font-size:.78rem;margin-bottom:.3rem}
.vsm-va{font-size:.65rem;color:#10b981}
.vsm-nva{font-size:.65rem;color:#ef4444}
.vsm-arr{display:flex;align-items:center;min-width:28px}
.vsm-arr-line{display:block;width:18px;height:2px;background:var(--vp-c-text-3);position:relative}
.vsm-arr-line::after{content:'';position:absolute;right:-2px;top:-4px;border:5px solid transparent;border-left:5px solid var(--vp-c-text-3)}
.vsm-summary{display:flex;justify-content:center;gap:1.5rem;padding:.6rem;border-top:2px dashed var(--vp-c-divider)}
.vsm-metric{font-size:.78rem;color:var(--vp-c-text-2)}
@media(max-width:640px){.vsm-process-flow{flex-direction:column}.vsm-arr{transform:rotate(90deg);min-width:unset;margin:.3rem 0}.vsm-summary{flex-direction:column;align-items:center;gap:.4rem}}
</style>

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
