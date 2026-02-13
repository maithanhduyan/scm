---
outline: [2, 3]
title: "Tiêu chuẩn 2: Framework quốc tế SCM — Lean, Agile, IBP "
description: "Lean SC, Agile SC, Resilient SC, Leagile, Decoupling Point, DDMRP, IBP (Oliver Wight) và các framework quốc tế quản lý chuỗi cung ứng."
head:
  - - meta
    - property: og:title
      content: "Tiêu chuẩn quốc tế: Framework SCM"
---

# 📏 Tiêu chuẩn Buổi 2: Tiêu chuẩn & phương pháp quốc tế trong SCM

> Các framework, phương pháp luận và tiêu chuẩn quốc tế cốt lõi cho quản lý chuỗi cung ứng hiện đại.

## Tổng quan

Buổi 2 là buổi **"nhiều framework nhất"** trong toàn bộ chương trình — nơi người học tiếp cận đồng thời nhiều triết lý, mô hình và tiêu chuẩn quốc tế. Để không bị "ngợp", cần một **bản đồ tổng quan** giúp định vị từng framework trong bức tranh lớn.

**Bản đồ tư duy Buổi 2:**

<div class="mind-map">
  <div class="mm-root">🧠 Triết lý quản lý chuỗi cung ứng hiện đại</div>
  <div class="mm-branches">
    <div class="mm-branch mm-b1">
      <div class="mm-node">🏭 Lean / TPS<div class="mm-desc">Giảm waste</div></div>
    </div>
    <div class="mm-branch mm-b2">
      <div class="mm-node">⚡ Agile / Leagile<div class="mm-desc">Phản ứng nhanh</div></div>
    </div>
    <div class="mm-branch mm-b3">
      <div class="mm-node">🛡️ Resilient SC<div class="mm-desc">Chống chịu</div></div>
    </div>
  </div>
  <div class="mm-connector">▼</div>
  <div class="mm-mid">
    <div class="mm-node mm-measure">📏 Framework đo lường — SCOR KPIs, IBP</div>
  </div>
  <div class="mm-connector">▼</div>
  <div class="mm-branches">
    <div class="mm-branch mm-b4">
      <div class="mm-node">📦 DDMRP<br/>VMI</div>
    </div>
    <div class="mm-branch mm-b5">
      <div class="mm-node">🤝 CPFR<br/>TCO</div>
    </div>
    <div class="mm-branch mm-b6">
      <div class="mm-node">🤖 Digital SCM<br/>IoT, AI, I4.0</div>
    </div>
  </div>
</div>

<style>
.mind-map{max-width:600px;margin:1.5rem auto;text-align:center}
.mm-root{font-weight:700;font-size:.9rem;padding:.8rem 1.2rem;border-radius:99px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);border:2px solid var(--vp-c-brand-1);display:inline-block;margin-bottom:.8rem}
.mm-branches{display:flex;justify-content:center;gap:.8rem;flex-wrap:wrap}
.mm-node{padding:.7rem .8rem;border-radius:12px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);font-weight:600;font-size:.78rem;transition:all .3s;min-width:100px}
.mm-node:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,.07)}
.mm-desc{font-weight:400;font-size:.65rem;color:var(--vp-c-text-3);margin-top:.2rem}
.mm-b1 .mm-node{border-color:#6366f1;color:#6366f1}
.mm-b2 .mm-node{border-color:#f59e0b;color:#d97706}
.mm-b3 .mm-node{border-color:#10b981;color:#059669}
.mm-b4 .mm-node{border-color:#ec4899;color:#db2777}
.mm-b5 .mm-node{border-color:#8b5cf6;color:#7c3aed}
.mm-b6 .mm-node{border-color:#06b6d4;color:#0891b2}
.mm-connector{color:var(--vp-c-text-3);font-size:.8rem;margin:.3rem 0}
.mm-measure{border-color:#f59e0b !important;color:#d97706 !important;display:inline-block}
.mm-mid{margin:.3rem 0}
</style>

**Tại sao buổi này đặc biệt quan trọng?**

- **Nền tảng tư duy:** Lean, Agile, Resilient là ba "trường phái" chính — mọi quyết định SCM đều xoay quanh việc cân bằng giữa ba triết lý này.
- **Công cụ thực hành:** DDMRP, CPFR, VMI, Kaizen... là những best practices đã được kiểm chứng toàn cầu.
- **Xu hướng tương lai:** Digital SCM (IoT, AI, Blockchain, Digital Twin) đang định hình lại chuỗi cung ứng thế kỷ 21.

## 📋 Danh sách tiêu chuẩn liên quan

| # | Tiêu chuẩn / Framework | Tổ chức | Áp dụng cho |
|---|------------------------|---------|-------------|
| 1 | Lean Manufacturing / TPS | Lean Enterprise Institute (LEI), Toyota | Loại bỏ lãng phí, tối ưu dòng chảy giá trị |
| 2 | Agile Supply Chain Framework | Học thuật (Christopher, Harrison & van Hoek) | Chuỗi cung ứng linh hoạt, đáp ứng nhanh biến động |
| 3 | SCOR Performance Attributes | ASCM (APICS) | Đo lường & benchmark hiệu suất chuỗi cung ứng |
| 4 | IBP (Integrated Business Planning) | Oliver Wight | Tích hợp chiến lược–tài chính–vận hành |
| 5 | DDMRP (Demand Driven MRP) | Demand Driven Institute (DDI) | Quản lý tồn kho & kế hoạch theo nhu cầu thực |
| 6 | Industry 4.0 / Digital SCM Standards | Plattform Industrie 4.0, GS1, ISO | Chuyển đổi số, truy xuất nguồn gốc, bảo mật |

---

## 1️⃣ Lean Manufacturing / Toyota Production System (TPS)

### Giới thiệu

**Lean Manufacturing** — *Sản xuất tinh gọn* — là triết lý quản lý bắt nguồn từ **Toyota Production System (TPS)** do **Taiichi Ohno** và **Shigeo Shingo** phát triển tại Toyota từ những năm 1950. Thuật ngữ "Lean" được phổ biến qua cuốn *The Machine That Changed the World* (Womack, Jones & Roos, 1990).

- **Tổ chức chuẩn hóa:** **Lean Enterprise Institute (LEI)** — tổ chức phi lợi nhuận do James P. Womack sáng lập năm 1997.
- **Triết lý cốt lõi:** Loại bỏ mọi lãng phí (*muda*), tối đa hóa giá trị cho khách hàng với ít nguồn lực nhất.

### Nội dung chính

#### 7+1 Wastes (Lãng phí)

Lean nhận diện **7 loại lãng phí truyền thống** (từ TPS) + **1 loại bổ sung** (từ Lean hiện đại):

| # | Lãng phí (Tiếng Nhật) | Tiếng Anh | Mô tả | Ví dụ trong SCM |
|---|----------------------|-----------|-------|-----------------|
| 1 | **Muda of Overproduction** | Sản xuất thừa | Sản xuất nhiều hơn hoặc sớm hơn nhu cầu | Dự báo sai → tồn kho thành phẩm chất đống |
| 2 | **Muda of Waiting** | Chờ đợi | Thời gian chết giữa các công đoạn | Hàng chờ kiểm tra QC vì thiếu nhân sự |
| 3 | **Muda of Transport** | Vận chuyển không cần thiết | Di chuyển vật liệu không tạo giá trị | Layout kho bất hợp lý → fork lift chạy vòng vèo |
| 4 | **Muda of Overprocessing** | Xử lý quá mức | Làm nhiều hơn yêu cầu khách hàng | Đóng gói 3 lớp khi khách chỉ cần 1 lớp |
| 5 | **Muda of Inventory** | Tồn kho thừa | Giữ nhiều hơn mức cần thiết | Safety stock quá cao vì "sợ thiếu hàng" |
| 6 | **Muda of Motion** | Thao tác thừa | Chuyển động của người không tạo giá trị | Công nhân đi lại nhiều lần lấy công cụ |
| 7 | **Muda of Defects** | Sản phẩm lỗi | Sản phẩm không đạt chất lượng | Hàng lỗi phải rework hoặc scrap |
| +1 | **Muda of Unused Talent** | Lãng phí nhân tài | Không tận dụng kỹ năng & ý tưởng nhân viên | Công nhân có ý tưởng cải tiến nhưng không ai lắng nghe |

> 💡 **Mẹo nhớ:** Dùng từ viết tắt **TIMWOODS** — Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills.

#### Hai trụ cột của TPS

| Trụ cột | Ý nghĩa | Công cụ chính |
|---------|---------|--------------|
| **JIT** (*Just-In-Time*) | Sản xuất đúng sản phẩm, đúng số lượng, đúng thời điểm | Kanban, Takt Time, One-Piece Flow, Pull System |
| **Jidoka** (*Autonomation*) | Tự động hóa có trí tuệ — máy tự dừng khi phát hiện lỗi | Andon, Poka-Yoke, Root Cause Analysis (5 Whys) |

#### Bộ công cụ Lean trong SCM

| Công cụ | Mục đích | Áp dụng trong SCM |
|---------|---------|-------------------|
| **Kaizen** (改善) | Cải tiến liên tục — thay đổi nhỏ, thường xuyên | Kaizen event 3–5 ngày cải tiến quy trình picking |
| **5S** | Sắp xếp nơi làm việc: Seiri–Seiton–Seiso–Seiketsu–Shitsuke | Áp dụng 5S trong kho hàng → giảm thời gian tìm kiếm |
| **Kanban** (看板) | Tín hiệu kéo (pull signal) kiểm soát dòng vật liệu | Kanban card giữa kho và sản xuất → bổ sung hàng khi cần |
| **VSM** (Value Stream Mapping) | Bản đồ dòng giá trị — nhìn toàn cảnh waste | Map quy trình Order-to-Delivery, nhận diện bottleneck |
| **Heijunka** (平準化) | San bằng sản xuất — tránh peak/valley | Phân bổ đều đơn hàng theo tuần thay vì dồn cuối tháng |
| **SMED** | Chuyển đổi nhanh (Single-Minute Exchange of Die) | Giảm thời gian setup máy từ 2 giờ xuống 10 phút |
| **Poka-Yoke** | Phòng chống sai sót (mistake-proofing) | Barcode scan xác nhận đúng SKU trước khi xuất kho |
| **A3 Problem Solving** | Phương pháp giải quyết vấn đề trên 1 trang A3 | Phân tích root cause khi OTIF giảm |

### Áp dụng cho buổi học này

| Chủ đề buổi 2 | Phần Lean liên quan | Cách áp dụng |
|---------------|---------------------|--------------|
| Lean Supply Chain | 7+1 Wastes, JIT, Jidoka | Nhận diện lãng phí trên toàn chuỗi, không chỉ trong nhà máy |
| So sánh Lean vs Agile vs Resilient | Đặc trưng Lean: efficiency, waste elimination | Lean phù hợp nhu cầu ổn định, sản phẩm chuẩn hóa |
| Best Practices: Kaizen | Kaizen, PDCA cycle | Cải tiến liên tục — triết lý nền tảng cho mọi best practice khác |
| Best Practices: Cross-docking | JIT delivery | Cross-docking là ứng dụng JIT trong logistics |
| Digital SCM | Digital Kanban, e-Kanban | Kanban số hóa = nền tảng cho Digital SCM |

### Ví dụ thực tế

**Tình huống: Toyota Việt Nam — Nhà máy Vĩnh Phúc**

Toyota Việt Nam áp dụng TPS toàn diện tại nhà máy Vĩnh Phúc:

- **JIT:** Linh kiện từ nhà cung cấp nội địa (Denso Việt Nam, Toyota Boshoku) giao theo lịch **từng giờ** — không giữ tồn kho quá 2 giờ sản xuất trên dây chuyền.
- **Jidoka:** Dây chuyền lắp ráp có hệ thống **Andon** — bất kỳ công nhân nào cũng có quyền kéo dây dừng chuyền khi phát hiện bất thường.
- **Kaizen:** Trung bình mỗi năm **hàng nghìn đề xuất Kaizen** từ công nhân — từ cải tiến bố trí kệ linh kiện đến tối ưu thao tác lắp ráp.
- **5S:** Mọi khu vực sản xuất và kho đều tuân thủ 5S nghiêm ngặt — kiểm tra 5S hàng ngày.
- **Kanban:** Sử dụng cả Kanban vật lý (thẻ) lẫn e-Kanban (điện tử) để kiểm soát dòng linh kiện.

**Kết quả:** Năng suất lao động liên tục tăng, tỷ lệ lỗi giữ ở mức ppm (parts per million), thời gian giao hàng ngắn so với khu vực.

---

## 2️⃣ Agile Supply Chain Framework

### Giới thiệu

**Agile Supply Chain** — *Chuỗi cung ứng linh hoạt* — là triết lý thiết kế chuỗi cung ứng có khả năng **phản ứng nhanh** với biến động thị trường, nhu cầu khách hàng không thể dự đoán, và sự thay đổi liên tục.

Khái niệm này được phát triển bởi nhiều nhà nghiên cứu, nổi bật nhất:
- **Martin Christopher** (Cranfield University) — *"Logistics & Supply Chain Management"*
- **Denis Towill** — mô hình Leagile
- **Alan Harrison & Remko van Hoek** — *"Logistics Management and Strategy"*

### Nội dung chính

#### 4 Nguyên tắc Agility (theo Christopher)

| Nguyên tắc | Ý nghĩa | Cách thực hiện |
|-----------|---------|----------------|
| **Market Sensitive** | Chuỗi cung ứng lắng nghe thị trường thực | Sử dụng POS data thay vì dự báo truyền thống |
| **Virtual Integration** | Chia sẻ thông tin thay vì tích hợp sở hữu | Chia sẻ dữ liệu real-time giữa các đối tác qua EDI/API |
| **Network-Based** | Mạng lưới đối tác linh hoạt thay vì chuỗi tuyến tính | Đa nguồn cung, có thể chuyển đổi nhanh |
| **Process Alignment** | Quy trình đồng bộ xuyên chuỗi | S&OP/IBP liên kết toàn bộ đối tác |

#### Decoupling Point — Điểm tách chiến lược

**Decoupling Point** là vị trí trong chuỗi cung ứng nơi chuyển đổi từ chiến lược **push** (dựa trên dự báo) sang **pull** (dựa trên đơn hàng thực):

<div class="dp-flow">
  <div class="dp-zone dp-push">
    <div class="dp-zlabel">PUSH ◀ Forecast-driven</div>
    <div class="dp-znodes">
      <span class="dp-n dp-n1">🏭 Nhà cung cấp</span>
      <span class="dp-a">→</span>
      <span class="dp-n dp-n2">⚙️ SX bán TP</span>
    </div>
    <div class="dp-strat">LEAN (Efficiency)</div>
  </div>
  <div class="dp-point">
    <div class="dp-diamond">◆</div>
    <div class="dp-plabel">DECOUPLING<br/>POINT</div>
  </div>
  <div class="dp-zone dp-pull">
    <div class="dp-zlabel">PULL ▶ Order-driven</div>
    <div class="dp-znodes">
      <span class="dp-n dp-n3">📦 Hoàn thiện</span>
      <span class="dp-a">→</span>
      <span class="dp-n dp-n4">👤 Khách hàng</span>
    </div>
    <div class="dp-strat">AGILE (Responsiveness)</div>
  </div>
</div>

<style>
.dp-flow{display:flex;align-items:stretch;justify-content:center;gap:0;padding:1.2rem .5rem;overflow-x:auto}
.dp-zone{flex:1;max-width:220px;padding:.8rem .6rem;border-radius:12px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);text-align:center}
.dp-push{border-color:#6366f1;background:rgba(99,102,241,.04)}
.dp-pull{border-color:#10b981;background:rgba(16,185,129,.04)}
.dp-zlabel{font-size:.55rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:.4rem}
.dp-push .dp-zlabel{color:#7c3aed}.dp-pull .dp-zlabel{color:#059669}
.dp-znodes{display:flex;align-items:center;justify-content:center;gap:.2rem;flex-wrap:wrap}
.dp-n{padding:.3rem .4rem;border-radius:6px;border:1.5px solid var(--vp-c-divider);font-size:.6rem;font-weight:600;background:var(--vp-c-bg)}
.dp-n1{border-color:#8b5cf6}.dp-n2{border-color:#a78bfa}.dp-n3{border-color:#34d399}.dp-n4{border-color:#10b981}
.dp-a{font-weight:700;color:var(--vp-c-brand-1);font-size:.7rem}
.dp-strat{font-size:.55rem;font-weight:600;color:var(--vp-c-text-3);margin-top:.4rem;padding-top:.3rem;border-top:1px dashed var(--vp-c-divider)}
.dp-point{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 .5rem}
.dp-diamond{font-size:1.6rem;color:#ef4444;animation:dp-pulse 2s ease-in-out infinite}
.dp-plabel{font-size:.5rem;font-weight:800;color:#ef4444;text-align:center;line-height:1.2}
@keyframes dp-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
@media(max-width:640px){.dp-flow{flex-direction:column;align-items:center;gap:.4rem}.dp-point{transform:rotate(90deg);padding:.3rem 0}}
</style>

| Vị trí Decoupling Point | Chiến lược | Ví dụ |
|-------------------------|-----------|-------|
| **Tận cùng upstream** (MTS) | Make-to-Stock — sản xuất để tồn kho | Hàng tiêu dùng nhanh (FMCG): kem đánh răng, nước giải khát |
| **Sau sản xuất** (ATO) | Assemble-to-Order — lắp ráp theo đơn | Dell: linh kiện tiêu chuẩn + cấu hình tùy chọn |
| **Trước sản xuất** (MTO) | Make-to-Order — sản xuất theo đơn | Nội thất xuất khẩu: sản xuất theo thiết kế khách |
| **Tận cùng downstream** (ETO) | Engineer-to-Order — thiết kế theo đơn | Turbine công nghiệp: thiết kế riêng cho từng dự án |

#### Leagile — Kết hợp Lean + Agile

**Leagile** là chiến lược lai (*hybrid*) — áp dụng Lean ở **upstream** (trước decoupling point) và Agile ở **downstream** (sau decoupling point):

- **Upstream (Lean):** Sản xuất nguyên liệu, bán thành phẩm tiêu chuẩn hóa → tối ưu chi phí, economies of scale.
- **Downstream (Agile):** Hoàn thiện, tùy chỉnh, phân phối theo đơn hàng thực → đáp ứng nhanh.

> 💡 **Ví dụ kinh điển:** Zara — vải được mua và cắt sẵn (Lean), nhưng may và phân phối chỉ khi có data bán hàng thực tế từ cửa hàng (Agile). Cycle time thiết kế-đến-cửa hàng chỉ **2–3 tuần** thay vì 6–9 tháng thông thường.

### Áp dụng cho buổi học này

| Chủ đề buổi 2 | Phần Agile liên quan | Cách áp dụng |
|---------------|---------------------|--------------|
| Agile Supply Chain | 4 nguyên tắc agility | Framework thiết kế chuỗi đáp ứng nhanh |
| Leagile & Decoupling Point | Decoupling Point, Postponement | Quyết định vị trí tách Lean/Agile |
| So sánh Lean vs Agile vs Resilient | Đặc trưng Agile: speed, flexibility | Agile phù hợp nhu cầu biến động, sản phẩm ngắn vòng đời |
| Best Practices: Postponement | Mass Customization | Trì hoãn tùy chỉnh đến gần khách hàng nhất |
| Digital SCM | Virtual Integration, POS data | Nền tảng data real-time cho chuỗi agile |

### Ví dụ thực tế

**Tình huống: Thế Giới Di Động — Leagile trong bán lẻ điện tử**

- **Upstream (Lean):** Đàm phán hợp đồng dài hạn với Samsung, Apple, Xiaomi → mua hàng với điều kiện tốt nhất, tối ưu chi phí logistics container.
- **Decoupling Point:** Kho trung tâm (DC tại TP.HCM, Hà Nội) — nơi giữ tồn kho các SKU phổ biến.
- **Downstream (Agile):** Hệ thống POS kết nối real-time → khi cửa hàng bán, đơn bổ sung tự động kích hoạt. Flash sale được triển khai trong 24–48 giờ nhờ mạng lưới phân phối linh hoạt.
- **Virtual Integration:** Chia sẻ data bán hàng với nhà cung cấp → nhà cung cấp tự điều chỉnh kế hoạch sản xuất/giao hàng.

---

## 3️⃣ SCOR Performance Attributes — Đo lường hiệu suất chuỗi cung ứng

### Giới thiệu

Trong Buổi 1, SCOR Model được giới thiệu tổng quan (6 processes, 4 levels). Buổi 2 tập trung sâu hơn vào **khía cạnh đo lường** — cụ thể là **5 Performance Attributes** và hệ thống **KPI benchmark** giúp doanh nghiệp so sánh hiệu suất chuỗi cung ứng với tiêu chuẩn ngành.

- **Tổ chức:** **ASCM** (Association for Supply Chain Management, trước đây APICS)
- **Phiên bản:** SCOR v13.0 (Digital SCOR)

### Nội dung chính

#### 5 Performance Attributes chi tiết

| # | Attribute | Hướng | Định nghĩa | Level 1 Metric | Benchmark (Median) |
|---|----------|-------|-----------|----------------|-------------------|
| 1 | **Reliability** (Độ tin cậy) | Customer-facing | Khả năng thực hiện đúng cam kết | Perfect Order Fulfillment (POF) | 83–93% |
| 2 | **Responsiveness** (Khả năng đáp ứng) | Customer-facing | Tốc độ hoàn tất đơn hàng | Order Fulfillment Cycle Time | 4–8 ngày |
| 3 | **Agility** (Độ linh hoạt) | Customer-facing | Khả năng ứng phó với biến động | Upside SC Flexibility / Adaptability | 20–60 ngày |
| 4 | **Cost** (Chi phí) | Internal-facing | Tổng chi phí vận hành chuỗi | Total SC Management Cost | 5–10% doanh thu |
| 5 | **Asset Management** (Quản lý tài sản) | Internal-facing | Hiệu quả sử dụng tài sản | Cash-to-Cash Cycle Time (C2C) | 30–60 ngày |

> 💡 **Nguyên tắc:** 3 attributes đầu hướng về **khách hàng** (bên ngoài), 2 attributes sau hướng **nội bộ**. Doanh nghiệp xuất sắc cần cân bằng cả hai nhóm — không thể chỉ tối ưu chi phí mà bỏ quên khách hàng, và ngược lại.

#### KPI Level 2 cho từng Attribute

**Reliability — Độ tin cậy:**
| KPI Level 2 | Mô tả | Cách tính |
|-------------|-------|-----------|
| % Orders Delivered in Full | Giao đủ số lượng | Đơn giao đủ / Tổng đơn × 100% |
| Delivery Performance to Date | Giao đúng ngày cam kết | Đơn giao đúng hạn / Tổng đơn × 100% |
| Documentation Accuracy | Chứng từ chính xác | Chứng từ đúng / Tổng chứng từ × 100% |
| Perfect Condition | Hàng nguyên vẹn, không hư hại | Đơn không khiếu nại chất lượng / Tổng đơn × 100% |

**Responsiveness — Khả năng đáp ứng:**
| KPI Level 2 | Mô tả |
|-------------|-------|
| Source Cycle Time | Thời gian từ đặt hàng NCC đến nhận hàng |
| Make Cycle Time | Thời gian sản xuất |
| Deliver Cycle Time | Thời gian từ nhận đơn đến giao khách |

**Agility — Độ linh hoạt:**
| KPI Level 2 | Mô tả |
|-------------|-------|
| Upside SC Flexibility | Số ngày cần để tăng 20% sản lượng |
| Downside SC Adaptability | Giảm đơn hàng bao nhiêu % mà không phạt |
| Overall Value at Risk (VAR) | Giá trị rủi ro tổng thể |

**Cost — Chi phí:**
| KPI Level 2 | Mô tả |
|-------------|-------|
| Cost to Plan | Chi phí lập kế hoạch |
| Cost to Source | Chi phí thu mua |
| Cost to Make | Chi phí sản xuất |
| Cost to Deliver | Chi phí giao hàng |
| Cost to Return | Chi phí xử lý trả hàng |

**Asset Management — Quản lý tài sản:**
| KPI Level 2 | Mô tả |
|-------------|-------|
| Days Sales Outstanding (DSO) | Số ngày phải thu |
| Days Inventory Outstanding (DIO) | Số ngày tồn kho |
| Days Payable Outstanding (DPO) | Số ngày phải trả |
| C2C = DSO + DIO − DPO | Chu kỳ tiền mặt |

#### SCOR Benchmarking — So sánh đối sánh

SCOR cung cấp **benchmark database** cho phép doanh nghiệp so sánh performance của mình với:
- **Median:** Mức trung bình ngành
- **Advantage:** Mức top 50% (tốt hơn median)
- **Superior:** Mức top 10% (xuất sắc)

```
                Superior     Advantage     Median       Dưới Median
                  (Top 10%)   (Top 50%)
POF:             ≥ 96%        ≥ 90%        83%          < 83%
OFCT:            ≤ 3 ngày     ≤ 5 ngày     7 ngày       > 7 ngày
Total SC Cost:   ≤ 4%         ≤ 7%         9%           > 9%
C2C:             ≤ 15 ngày    ≤ 35 ngày    50 ngày      > 50 ngày
```

### Áp dụng cho buổi học này

| Chủ đề buổi 2 | Phần SCOR KPI liên quan | Cách áp dụng |
|---------------|------------------------|--------------|
| SCOR – APICS | 5 Performance Attributes | Hiểu hệ thống đo lường chuẩn quốc tế |
| Lean SC | Cost & Asset Management attributes | Lean tập trung giảm Cost & cải thiện Asset utilization |
| Agile SC | Agility & Responsiveness attributes | Agile tập trung Responsiveness & Agility |
| Resilient SC | Agility attribute (VAR) | Resilient cần Upside Flexibility & VAR cao |
| Best Practices | KPI benchmark | Đo lường hiệu quả từng best practice |

### Ví dụ thực tế

**Tình huống: Benchmark chuỗi cung ứng Vinamilk**

Giả sử Vinamilk muốn đánh giá chuỗi cung ứng theo SCOR:

| Attribute | Metric | Vinamilk (giả định) | Benchmark ngành FMCG | Đánh giá |
|----------|--------|---------------------|---------------------|----------|
| Reliability | POF | 88% | Median: 90% | Cần cải thiện |
| Responsiveness | OFCT | 3 ngày | Median: 5 ngày | **Superior** |
| Agility | Upside Flexibility | 30 ngày | Median: 45 ngày | **Advantage** |
| Cost | Total SC Cost | 8% doanh thu | Median: 9% | **Advantage** |
| Asset Management | C2C | 25 ngày | Median: 40 ngày | **Superior** |

→ Kết luận: Vinamilk mạnh về tốc độ và quản lý tài sản, cần cải thiện POF (khả năng giao hàng hoàn hảo).

---

## 4️⃣ IBP Framework (Integrated Business Planning)

### Giới thiệu

**IBP** — *Integrated Business Planning* — là phương pháp lập kế hoạch tích hợp do **Oliver Wight** phát triển, được xem là **bước tiến hóa** từ S&OP (*Sales & Operations Planning*) truyền thống. IBP kết nối **chiến lược kinh doanh → kế hoạch tài chính → kế hoạch vận hành** trong một quy trình hàng tháng thống nhất.

- **Tổ chức:** **Oliver Wight International** — công ty tư vấn quản lý hàng đầu, tác giả của khái niệm S&OP gốc (1980s) và IBP (2000s).
- **Tầm nhìn:** 24–36 tháng (rolling), cập nhật hàng tháng.

### Nội dung chính

#### 5 Bước của quy trình IBP hàng tháng

<div class="ibp-flow">
  <div class="ibp-step ibp-s1">
    <div class="ibp-week">Tuần 1</div>
    <div class="ibp-title">📦 Product<br/>Review</div>
    <div class="ibp-desc">Sản phẩm mới/cũ</div>
  </div>
  <div class="ibp-arr">→</div>
  <div class="ibp-step ibp-s2">
    <div class="ibp-week">Tuần 2</div>
    <div class="ibp-title">📊 Demand<br/>Review</div>
    <div class="ibp-desc">Nhu cầu thị trường</div>
  </div>
  <div class="ibp-arr">→</div>
  <div class="ibp-step ibp-s3">
    <div class="ibp-week">Tuần 3</div>
    <div class="ibp-title">⚙️ Supply<br/>Review</div>
    <div class="ibp-desc">Năng lực cung ứng</div>
  </div>
  <div class="ibp-arr">→</div>
  <div class="ibp-step ibp-s4">
    <div class="ibp-week">Tuần 4</div>
    <div class="ibp-title">⚖️ Integrated<br/>Reconciliation</div>
    <div class="ibp-desc">Cân đối tích hợp</div>
  </div>
  <div class="ibp-arr">→</div>
  <div class="ibp-step ibp-s5">
    <div class="ibp-week">Tuần 4–5</div>
    <div class="ibp-title">👔 Management<br/>Business Review</div>
    <div class="ibp-desc">Ban lãnh đạo quyết định</div>
  </div>
</div>

<style>
.ibp-flow{display:flex;align-items:stretch;justify-content:center;gap:0;padding:1.2rem .5rem;overflow-x:auto}
.ibp-step{min-width:100px;padding:.7rem .5rem;border-radius:12px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);text-align:center;transition:all .3s;display:flex;flex-direction:column}
.ibp-step:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,.07)}
.ibp-s1{border-color:#8b5cf6}.ibp-s2{border-color:#06b6d4}.ibp-s3{border-color:#f59e0b}.ibp-s4{border-color:#10b981}.ibp-s5{border-color:#ef4444}
.ibp-week{font-size:.5rem;font-weight:600;color:var(--vp-c-text-3);text-transform:uppercase;letter-spacing:.3px}
.ibp-title{font-weight:700;font-size:.68rem;color:var(--vp-c-text-1);margin:.25rem 0;flex:1}
.ibp-desc{font-size:.58rem;color:var(--vp-c-text-2);padding-top:.25rem;border-top:1px dashed var(--vp-c-divider)}
.ibp-arr{display:flex;align-items:center;font-size:.9rem;font-weight:700;color:var(--vp-c-brand-1);padding:0 .2rem}
@media(max-width:640px){.ibp-flow{flex-direction:column;align-items:center}.ibp-arr{transform:rotate(90deg);padding:.2rem 0}}
</style>

| Bước | Tên gọi | Người chủ trì | Nội dung chính | Output |
|------|---------|---------------|----------------|--------|
| 1 | **Product Review** | R&D / Marketing | Đánh giá portfolio sản phẩm: mới, hiện tại, sắp ngừng | Kế hoạch sản phẩm cập nhật |
| 2 | **Demand Review** | Sales / Marketing | Dự báo nhu cầu vô ràng buộc (*unconstrained demand*) | Consensus demand plan |
| 3 | **Supply Review** | Operations / SCM | Đánh giá năng lực cung ứng, nhận diện gap vs demand | Constrained supply plan |
| 4 | **Integrated Reconciliation** | Finance / SCM | Cân đối cung–cầu–tài chính, giải quyết xung đột | Kịch bản & đề xuất cho ban lãnh đạo |
| 5 | **Management Business Review** | CEO / C-suite | Ra quyết định cuối cùng, phê duyệt kế hoạch | Kế hoạch tích hợp được phê duyệt |

#### So sánh IBP vs S&OP

| Tiêu chí | S&OP (truyền thống) | IBP (nâng cấp) |
|----------|---------------------|----------------|
| **Tầm nhìn** | 3–18 tháng | 24–36 tháng |
| **Tích hợp tài chính** | Yếu hoặc tách biệt | Tài chính tích hợp ngay từ đầu |
| **Chiến lược** | Chủ yếu vận hành | Kết nối chiến lược doanh nghiệp |
| **Portfolio sản phẩm** | Không hoặc ít xem xét | Product Review là bước đầu tiên |
| **Người tham gia** | Chủ yếu SCM & Sales | Cross-functional: R&D, Finance, Sales, SCM, CEO |
| **Quyết định** | Cân bằng cung–cầu | Cân bằng cung–cầu–tài chính–chiến lược |
| **Tần suất** | Hàng tháng | Hàng tháng + quarterly strategic review |
| **Kịch bản** | Ít hoặc không | Scenario planning với what-if analysis |

> 💡 **Lưu ý:** IBP không thay thế S&OP mà **nâng cấp** nó. Nhiều công ty vẫn gọi quy trình là S&OP nhưng thực hành theo nguyên tắc IBP — điều quan trọng là **nội dung**, không phải tên gọi.

#### Oliver Wight ABCD Checklist

Oliver Wight đánh giá mức độ trưởng thành IBP theo 4 cấp:

| Cấp | Mức độ | Đặc điểm |
|-----|--------|---------|
| **D** | No Process | Không có quy trình S&OP/IBP chính thức |
| **C** | Marginal | Có quy trình nhưng rời rạc, không liên tục |
| **B** | Business Excellence | Quy trình ổn định, tích hợp tài chính, quyết định dựa trên data |
| **A** | Best-in-Class | Tích hợp toàn diện, kịch bản planning, liên kết chiến lược |

### Áp dụng cho buổi học này

| Chủ đề buổi 2 | Phần IBP liên quan | Cách áp dụng |
|---------------|-------------------|--------------|
| IBP & S&OP | 5 bước, so sánh IBP vs S&OP | Hiểu quy trình lập kế hoạch tích hợp chuẩn quốc tế |
| SCOR – Plan process | Demand Review, Supply Review | IBP là phương pháp chi tiết cho SCOR Plan |
| Best Practices: CPFR | Demand Review | CPFR là nguồn input cho Demand Review trong IBP |
| Digital SCM | Scenario planning, what-if | Công nghệ AI/ML hỗ trợ IBP với predictive analytics |

### Ví dụ thực tế

**Tình huống: Masan Consumer — IBP cho ngành FMCG Việt Nam**

Quy trình IBP hàng tháng (giả định):

1. **Product Review (Tuần 1):** Marketing đánh giá portfolio — nước mắm Chinsu ra SKU mới (chai 250ml tiện lợi), mì Omachi ngừng 2 SKU bán chậm.
2. **Demand Review (Tuần 2):** Sales team 3 miền đưa dự báo Tết Nguyên Đán → nhu cầu tăng 200% cho nước mắm, mì gói. Marketing bổ sung forecast từ chiến dịch quảng cáo TV.
3. **Supply Review (Tuần 3):** Nhà máy Hải Dương đánh giá năng lực: có thể tăng 150% (chạy 3 ca) nhưng không đủ 200%. Gap = 50% → cần outsource hoặc sản xuất trước.
4. **Integrated Reconciliation (Tuần 4):** Finance tính: sản xuất trước tốn thêm chi phí tồn kho 2 tỷ VNĐ, nhưng mất doanh số Tết = mất 20 tỷ. Đề xuất: sản xuất trước + outsource 1 dây chuyền.
5. **Management Business Review (Tuần 4–5):** CEO phê duyệt kế hoạch Tết, đồng thời quyết định đầu tư thêm dây chuyền mới cho năm sau.

---

## 5️⃣ DDMRP (Demand Driven Material Requirements Planning)

### Giới thiệu

**DDMRP** — *Demand Driven MRP* — là phương pháp lập kế hoạch vật tư thế hệ mới, được phát triển bởi **Carol Ptak** và **Chad Smith** qua **Demand Driven Institute (DDI)**. DDMRP khắc phục nhược điểm của MRP truyền thống (phụ thuộc dự báo sai) bằng cách sử dụng **buffer tồn kho chiến lược** và **tín hiệu nhu cầu thực**.

- **Tổ chức:** **Demand Driven Institute (DDI)** — [demanddriveninstitute.com](https://www.demanddriveninstitute.com/)
- **Chứng chỉ:** DDPP (Demand Driven Planner Professional), DDLP (Demand Driven Leader Professional)
- **Sách tham khảo:** *Orlicky's Material Requirements Planning* 3rd Edition (Ptak & Smith, 2011)

### Nội dung chính

#### 5 Components của DDMRP

```
┌─────────────────────────────────────────────────────────────┐
│                    DDMRP — 5 Components                     │
├──────────────┬──────────────┬──────────────────────────────┤
│   POSITION   │   PROTECT    │          PULL                │
│  (Định vị)   │  (Bảo vệ)   │        (Kéo)                │
├──────────────┼──────────────┼──────────────────────────────┤
│ 1. Strategic │ 2. Buffer    │ 4. Demand Driven Planning    │
│    Inventory │    Profiles  │ 5. Visible & Collaborative   │
│    Positioning│   & Levels  │    Execution                 │
│              │ 3. Dynamic   │                              │
│              │    Adjustments│                             │
└──────────────┴──────────────┴──────────────────────────────┘
```

| # | Component | Mô tả | Câu hỏi trả lời |
|---|----------|-------|-----------------|
| 1 | **Strategic Inventory Positioning** | Xác định **ở đâu** cần đặt buffer tồn kho trong BOM/chuỗi | Buffer đặt ở đâu để bảo vệ tốt nhất? |
| 2 | **Buffer Profiles & Levels** | Xác định **kích thước** buffer dựa trên đặc tính item | Buffer lớn bao nhiêu? (Green, Yellow, Red zones) |
| 3 | **Dynamic Adjustments** | Điều chỉnh buffer theo **mùa vụ, trend, sự kiện** | Khi nào cần tăng/giảm buffer? |
| 4 | **Demand Driven Planning** | Tạo supply order dựa trên **Net Flow Position** thay vì MRP truyền thống | Đặt hàng bao nhiêu, khi nào? |
| 5 | **Visible & Collaborative Execution** | Hệ thống cảnh báo và ưu tiên thực thi | Ưu tiên xử lý đơn hàng nào trước? |

#### Buffer Zones — 3 vùng màu

| Vùng | Ý nghĩa | Mức |
|------|---------|-----|
| 🟢 **Green Zone** | Vùng bổ sung — kích thước đơn hàng tối thiểu | Trên cùng |
| 🟡 **Yellow Zone** | Vùng nhu cầu trung bình — "heart of the buffer" | Giữa |
| 🔴 **Red Zone** | Vùng an toàn — bảo vệ khỏi biến động | Dưới cùng |

**Net Flow Position = On-hand + On-order − Qualified Demand**

- Nếu Net Flow Position ≤ đỉnh Yellow → kích hoạt đơn bổ sung.
- Kích thước đơn bổ sung = Top of Green − Net Flow Position.

#### So sánh DDMRP vs MRP truyền thống

| Tiêu chí | MRP truyền thống | DDMRP |
|----------|-----------------|-------|
| **Dựa trên** | Dự báo (forecast) | Nhu cầu thực (actual demand) + buffer |
| **Phản ứng với biến động** | Chậm, cần re-plan toàn bộ | Nhanh, buffer hấp thụ biến động |
| **Bullwhip Effect** | Khuếch đại | Giảm nhờ decoupling point |
| **Nervousness** | Cao (lịch thay đổi liên tục) | Thấp (buffer ổn định tín hiệu) |
| **Complexity** | Tăng theo BOM depth | Giảm nhờ strategic positioning |
| **Tồn kho** | Hoặc quá nhiều hoặc quá ít | Đúng chỗ, đúng lượng |

### Áp dụng cho buổi học này

| Chủ đề buổi 2 | Phần DDMRP liên quan | Cách áp dụng |
|---------------|---------------------|--------------|
| Best Practices: DDMRP | 5 components | Phương pháp lập kế hoạch vật tư thế hệ mới |
| Lean SC | Strategic Inventory Positioning | Buffer đặt ở decoupling point — liên kết Lean & DDMRP |
| Agile SC | Demand Driven Planning | DDMRP tạo agility nhờ phản ứng theo nhu cầu thực |
| Resilient SC | Buffer Profiles | Buffer = tấm đệm chống biến động (resilience) |
| Digital SCM | Visible Execution | Dashboard real-time cho DDMRP cần nền tảng digital |

### Ví dụ thực tế

**Tình huống: Nhà máy dược phẩm tại TP.HCM áp dụng DDMRP**

Một công ty dược phẩm sản xuất 500+ SKU gặp vấn đề:
- MRP truyền thống → lịch sản xuất thay đổi liên tục (nervousness), tồn kho vừa thừa vừa thiếu.

Áp dụng DDMRP:
1. **Strategic Positioning:** Đặt buffer tại nguyên liệu API (Active Pharmaceutical Ingredient) nhập khẩu — lead time dài 60–90 ngày từ Ấn Độ/Trung Quốc.
2. **Buffer Profiles:** API chính → Red zone lớn (biến động cao, lead time dài). Tá dược thông dụng → Red zone nhỏ (dễ mua nội địa).
3. **Dynamic Adjustments:** Tăng buffer cho thuốc cảm cúm vào mùa đông (tháng 11–2), giảm buffer thuốc dị ứng ngoài mùa.
4. **Demand Driven Planning:** Net Flow Position tính hàng ngày → đơn bổ sung API kích hoạt khi cần, không phụ thuộc forecast xa.
5. **Visible Execution:** Dashboard xanh–vàng–đỏ cho 500 SKU → planner chỉ tập trung vào item đỏ.

**Kết quả:** Giảm 25% tồn kho nguyên liệu, tăng 15% service level, giảm 40% thời gian planner dành cho re-scheduling.

---

## 6️⃣ Industry 4.0 / Digital Supply Chain Standards

### Giới thiệu

**Industry 4.0** — *Công nghiệp 4.0* — và **Digital Supply Chain** đại diện cho cuộc cách mạng chuyển đổi số trong sản xuất và chuỗi cung ứng. Nhiều tổ chức quốc tế đã phát triển tiêu chuẩn và kiến trúc tham chiếu để hướng dẫn chuyển đổi số.

Ba nhóm tiêu chuẩn quan trọng nhất:
1. **RAMI 4.0** — Kiến trúc tham chiếu cho Industry 4.0
2. **GS1 Standards** — Tiêu chuẩn nhận diện & truy xuất toàn cầu
3. **ISO/IEC 27001** — An ninh thông tin cho Digital SCM

### Nội dung chính

#### RAMI 4.0 (Reference Architecture Model Industrie 4.0)

**RAMI 4.0** được phát triển bởi **Plattform Industrie 4.0** (Đức) — mô hình kiến trúc tham chiếu 3 chiều cho Industry 4.0:

| Chiều (Axis) | Nội dung | Ví dụ |
|-------------|---------|-------|
| **Layers** (6 lớp) | Business → Functional → Information → Communication → Integration → Asset | Từ chiến lược kinh doanh đến thiết bị vật lý |
| **Life Cycle & Value Stream** | Development → Maintenance/Usage (Type vs Instance) | Từ thiết kế sản phẩm đến vận hành thực tế |
| **Hierarchy Levels** | Connected World → Enterprise → Work Centers → Station → Control Device → Field Device → Product | Từ chuỗi cung ứng toàn cầu đến sản phẩm đơn lẻ |

**Ứng dụng trong SCM:**
- **Digital Twin:** Mô phỏng số của chuỗi cung ứng vật lý — cho phép test kịch bản trước khi triển khai thực tế.
- **IoT Integration:** RAMI 4.0 chuẩn hóa cách thiết bị IoT (sensor, RFID, GPS) kết nối và truyền dữ liệu.
- **Interoperability:** Đảm bảo các hệ thống khác nhau (ERP, WMS, TMS) "nói chuyện" được với nhau.

#### GS1 Standards — Nhận diện & Truy xuất nguồn gốc

**GS1** là tổ chức quốc tế thiết lập tiêu chuẩn **nhận diện, thu thập dữ liệu và chia sẻ thông tin** trong chuỗi cung ứng toàn cầu.

| Tiêu chuẩn GS1 | Ứng dụng | Ví dụ |
|----------------|---------|-------|
| **GTIN** (Global Trade Item Number) | Nhận diện sản phẩm toàn cầu | Barcode trên mọi sản phẩm bán lẻ |
| **GLN** (Global Location Number) | Nhận diện địa điểm (kho, nhà máy, cửa hàng) | Mã định danh cho từng kho hàng |
| **SSCC** (Serial Shipping Container Code) | Nhận diện đơn vị logistics | Mã trên mỗi pallet/container |
| **GS1-128 / DataMatrix** | Barcode chứa nhiều thông tin | Lot number, expiry date, serial number |
| **EPCIS** (Electronic Product Code Information Services) | Chia sẻ dữ liệu sự kiện trong chuỗi | "What, Where, When, Why" của mỗi sản phẩm |
| **GS1 Digital Link** | Kết nối sản phẩm vật lý với thông tin số | QR code dẫn đến thông tin truy xuất nguồn gốc |

**Truy xuất nguồn gốc (Traceability):**
GS1 cung cấp framework **GS1 Global Traceability Standard** — cho phép track & trace sản phẩm xuyên chuỗi, đặc biệt quan trọng trong:
- **Thực phẩm:** Từ nông trại đến bàn ăn (farm-to-fork)
- **Dược phẩm:** Chống hàng giả, tuân thủ GDP/GMP
- **Điện tử:** Quản lý recall, warranty

#### ISO/IEC 27001 — An ninh thông tin trong Digital SCM

**ISO/IEC 27001:2022** — *Information security, cybersecurity and privacy protection — Information security management systems — Requirements* — là tiêu chuẩn quốc tế về **hệ thống quản lý an ninh thông tin (ISMS)**.

Trong bối cảnh Digital SCM, khi dữ liệu được chia sẻ xuyên chuỗi (IoT data, demand signals, supplier data), bảo mật trở nên **sống còn**.

| Khía cạnh | Yêu cầu ISO 27001 | Liên quan SCM |
|----------|-------------------|--------------|
| **Confidentiality** (Bảo mật) | Chỉ người được phép mới truy cập | Bảo vệ data dự báo, giá mua, supplier contracts |
| **Integrity** (Toàn vẹn) | Dữ liệu chính xác, không bị sửa đổi trái phép | Đảm bảo data IoT sensor không bị can thiệp |
| **Availability** (Sẵn sàng) | Hệ thống sẵn sàng khi cần | ERP/WMS phải hoạt động 24/7 cho chuỗi toàn cầu |

**Annex A — Các biện pháp kiểm soát liên quan SCM:**
- **A.5.19–5.23:** Quản lý an ninh thông tin trong mối quan hệ nhà cung cấp
- **A.8.1:** Quản lý tài sản thông tin (data classification)
- **A.8.24:** Sử dụng mã hóa (encryption) cho dữ liệu nhạy cảm truyền qua mạng

### Áp dụng cho buổi học này

| Chủ đề buổi 2 | Phần Digital Standards liên quan | Cách áp dụng |
|---------------|--------------------------------|--------------|
| Digital SCM & Data | RAMI 4.0, GS1, ISO 27001 | Bộ 3 tiêu chuẩn nền tảng cho Digital SC |
| IoT trong SCM | RAMI 4.0 (Integration layer), GS1 EPCIS | Chuẩn hóa kết nối thiết bị & chia sẻ data |
| Blockchain truy xuất | GS1 Standards | GS1 là nền tảng data cho blockchain traceability |
| AI/ML trong SCM | ISO 27001 | Bảo vệ dữ liệu training AI, privacy |
| Digital Twin | RAMI 4.0 | Kiến trúc tham chiếu cho mô phỏng số |

### Ví dụ thực tế

**Tình huống: VinMart (WinCommerce) — GS1 truy xuất nguồn gốc rau sạch**

VinMart triển khai hệ thống truy xuất nguồn gốc dựa trên GS1 Standards:

- **GTIN:** Mỗi loại rau có mã GTIN riêng (EAN-13 barcode).
- **GS1-128 DataMatrix:** Trên mỗi túi rau có QR code chứa: mã sản phẩm, nông trại, ngày thu hoạch, lô sản xuất, hạn sử dụng.
- **EPCIS:** Sự kiện được ghi nhận: thu hoạch (nông trại Đà Lạt) → sơ chế (nhà máy Lâm Đồng) → vận chuyển lạnh → nhập kho DC → phân phối đến cửa hàng.
- **GS1 Digital Link:** Khách hàng quét QR code bằng điện thoại → xem toàn bộ hành trình sản phẩm.

**Bổ sung ISO 27001:** Dữ liệu nông dân, giá thu mua, thông tin khách hàng được bảo vệ theo ISMS — chỉ bộ phận liên quan mới truy cập được.

---

## 🔄 So sánh Lean vs Agile vs Resilient

Đây là bảng so sánh **chi tiết** ba triết lý quản lý chuỗi cung ứng cốt lõi — giúp phân biệt rõ khi nào dùng gì:

| # | Tiêu chí | Lean | Agile | Resilient |
|---|----------|------|-------|-----------|
| 1 | **Mục tiêu chính** | Loại bỏ lãng phí, tối ưu chi phí | Phản ứng nhanh với biến động | Chống chịu & phục hồi sau gián đoạn |
| 2 | **Triết lý** | Efficiency (hiệu quả) | Responsiveness (đáp ứng) | Resilience (bền bỉ) |
| 3 | **Nhu cầu phù hợp** | Ổn định, dự đoán được | Biến động, không chắc chắn | Bất định, rủi ro cao |
| 4 | **Sản phẩm phù hợp** | Functional (tiêu chuẩn, vòng đời dài) | Innovative (thời trang, công nghệ) | Critical (y tế, quốc phòng, thiết yếu) |
| 5 | **Tồn kho** | Tối thiểu (JIT) | Chiến lược (postponement) | Buffer stock dự phòng |
| 6 | **Lead time** | Ngắn, ổn định | Rất ngắn, linh hoạt | Linh hoạt, có dự phòng |
| 7 | **Nhà cung cấp** | Ít, quan hệ sâu (partnership) | Nhiều, linh hoạt chuyển đổi | Đa nguồn (dual/multi sourcing) |
| 8 | **Thông tin** | Forecast-driven, data lịch sử | Demand-driven, POS data real-time | Risk intelligence, scenario planning |
| 9 | **SCOR attribute ưu tiên** | Cost, Asset Management | Responsiveness, Agility | Agility (Flexibility, VAR) |
| 10 | **Ví dụ tiêu biểu** | Toyota, IKEA | Zara, H&M, Xiaomi | P&G, Johnson & Johnson |
| 11 | **Rủi ro chính** | Fragile khi gián đoạn (thiếu buffer) | Chi phí cao (dư năng lực) | Tồn kho cao, ROA thấp |
| 12 | **Công cụ đặc trưng** | Kanban, 5S, VSM, Kaizen | Postponement, VMI, CPFR | Scenario planning, dual sourcing, safety stock |

> 💡 **Thực tế:** Không có doanh nghiệp nào 100% Lean, Agile, hay Resilient. Chiến lược tốt nhất là **kết hợp** — Lean cho upstream/stable items, Agile cho downstream/volatile items, Resilient cho critical items/high-risk nodes. Đây chính là tư duy **Leagile** và **adaptive supply chain**.

---

## 🎓 Chứng chỉ liên quan

| Chứng chỉ | Tổ chức | Nội dung liên quan buổi 2 | Yêu cầu | Chi phí ước tính |
|-----------|---------|--------------------------|---------|-----------------|
| **CSCP** (Certified Supply Chain Professional) | ASCM | SCOR, IBP, Digital SCM, Lean/Agile | 3 năm KN hoặc bằng ĐH + 1 năm KN | ~$2,000–$2,500 |
| **CPIM** (Certified in Planning & Inventory Management) | ASCM | MRP, DDMRP, S&OP, Demand Management | 2 kỳ thi, không yêu cầu KN bắt buộc | ~$2,000–$2,500 |
| **DDPP** (Demand Driven Planner Professional) | DDI | DDMRP 5 components chi tiết | Khóa học + thi | ~$1,500–$2,000 |
| **DDLP** (Demand Driven Leader Professional) | DDI | DDMRP chiến lược, DDS&OP | Đã có DDPP + thi | ~$1,500–$2,000 |
| **SCOR-P** (SCOR Professional) | ASCM | SCOR metrics, benchmark, performance attributes | Workshop + thi | ~$3,000–$4,000 |
| **Lean Six Sigma Green/Black Belt** | ASQ / IASSC | 7 wastes, VSM, Kaizen, DMAIC | Thi + dự án thực tế | $300–$3,000 |
| **SAP IBP Certification** | SAP | IBP implementation, S&OP trên SAP | Khóa học SAP + thi | ~$3,000–$5,000 |
| **CISO / ISO 27001 Lead Auditor** | PECB / IRCA | An ninh thông tin, ISMS | Khóa 5 ngày + thi | ~$2,000–$3,500 |

> 💡 **Gợi ý lộ trình cho Buổi 2:**
> 1. **Nền tảng:** CPIM Part 1 (planning & inventory) → hiểu MRP, DDMRP, S&OP.
> 2. **Toàn diện:** CSCP → bao quát Lean, Agile, Digital SCM.
> 3. **Chuyên sâu tùy hướng:**
>    - Hướng planning: DDPP → DDLP
>    - Hướng cải tiến: Lean Six Sigma Green Belt → Black Belt
>    - Hướng digital: SAP IBP Certification
>    - Hướng benchmark: SCOR-P

---

## 🔗 Ma trận tiêu chuẩn × Chủ đề buổi học

| Chủ đề buổi học | Tiêu chuẩn áp dụng | Mức độ | Ghi chú |
|----------------|-------------------|--------|---------|
| SCOR – APICS (KPI benchmark) | SCOR Performance Attributes | ⭐⭐⭐ Bắt buộc | 5 attributes & Level 2 metrics |
| IBP & S&OP | IBP Framework (Oliver Wight) | ⭐⭐⭐ Bắt buộc | 5 bước, so sánh IBP vs S&OP |
| Lean Supply Chain | Lean / TPS (LEI) | ⭐⭐⭐ Bắt buộc | 7+1 wastes, JIT, Jidoka, Kaizen |
| Agile Supply Chain | Agile SC Framework (Christopher) | ⭐⭐⭐ Bắt buộc | 4 nguyên tắc, decoupling point, leagile |
| Resilient Supply Chain | Kết hợp: SCOR Agility + ISO 28000 | ⭐⭐ Nên có | Flexibility, VAR, resilience strategies |
| DDMRP | DDMRP (Demand Driven Institute) | ⭐⭐⭐ Bắt buộc | 5 components, buffer zones |
| CPFR | GS1 CPFR Model | ⭐⭐ Nên có | Collaborative planning framework |
| VMI | Best practice (P&G / Walmart model) | ⭐⭐ Nên có | Vendor quản lý tồn kho tại khách hàng |
| Cross-docking | Lean / JIT Logistics | ⭐ Tham khảo | Ứng dụng JIT trong kho |
| Postponement | Agile Framework (Decoupling Point) | ⭐⭐ Nên có | Trì hoãn tùy chỉnh gần khách hàng |
| TCO (Total Cost of Ownership) | ASCM / Procurement best practice | ⭐⭐ Nên có | Chi phí sở hữu toàn diện, không chỉ giá mua |
| Digital SCM — IoT, AI | RAMI 4.0, ISO 27001 | ⭐⭐ Nên có | Kiến trúc & bảo mật cho Digital SC |
| Blockchain truy xuất | GS1 Standards | ⭐⭐ Nên có | GS1 EPCIS + blockchain = traceability end-to-end |
| Digital Twin | RAMI 4.0 | ⭐ Tham khảo | Mô phỏng số chuỗi cung ứng |

**Chú thích:**
- ⭐⭐⭐ **Bắt buộc:** Cần nắm vững để hiểu bài và vận dụng.
- ⭐⭐ **Nên có:** Mở rộng kiến thức, phù hợp ai muốn đào sâu.
- ⭐ **Tham khảo:** Biết để mở rộng tầm nhìn.

---

## 📝 Checklist tuân thủ

### Lean Manufacturing / TPS
- [ ] Đã liệt kê và giải thích được 7+1 wastes (TIMWOODS)
- [ ] Đã phân biệt JIT vs Jidoka — hai trụ cột TPS
- [ ] Đã hiểu ít nhất 5 công cụ Lean: Kaizen, 5S, Kanban, VSM, Poka-Yoke
- [ ] Có thể nhận diện waste trong một quy trình SCM thực tế

### Agile Supply Chain
- [ ] Đã nắm 4 nguyên tắc agility (Christopher)
- [ ] Đã giải thích được Decoupling Point và ý nghĩa chiến lược
- [ ] Đã hiểu Leagile = Lean + Agile, và biết khi nào dùng

### SCOR Performance Attributes
- [ ] Đã liệt kê 5 Performance Attributes và phân loại customer-facing / internal-facing
- [ ] Đã biết KPI Level 1 tiêu biểu cho mỗi attribute
- [ ] Đã hiểu cách sử dụng SCOR benchmark (Median, Advantage, Superior)

### IBP Framework
- [ ] Đã mô tả được 5 bước IBP theo đúng thứ tự
- [ ] Đã so sánh được IBP vs S&OP (ít nhất 5 tiêu chí)
- [ ] Đã hiểu vai trò của Finance trong IBP (khác biệt lớn nhất so với S&OP)

### DDMRP
- [ ] Đã liệt kê 5 components của DDMRP
- [ ] Đã giải thích được 3 buffer zones (Green, Yellow, Red)
- [ ] Đã hiểu Net Flow Position và cách kích hoạt đơn bổ sung
- [ ] Đã so sánh DDMRP vs MRP truyền thống (ít nhất 4 tiêu chí)

### Digital SCM Standards
- [ ] Đã biết RAMI 4.0 là gì và 3 chiều (axes) của nó
- [ ] Đã liệt kê ít nhất 4 tiêu chuẩn GS1 (GTIN, GLN, SSCC, EPCIS)
- [ ] Đã hiểu tại sao ISO 27001 quan trọng trong Digital SCM
- [ ] Đã kết nối được IoT/AI/Blockchain với tiêu chuẩn tương ứng

### So sánh & Tích hợp
- [ ] Đã so sánh Lean vs Agile vs Resilient trên ít nhất 8 tiêu chí
- [ ] Đã hiểu khi nào dùng Lean, khi nào Agile, khi nào Resilient
- [ ] Đã nhận diện ít nhất 3 best practices (DDMRP, CPFR, VMI, Cross-docking, Postponement, TCO, Kaizen) và mô tả ngắn gọn

---

## 📚 Tài liệu tham khảo

### Tài liệu chính thức

1. **Lean Manufacturing / TPS**
   - Womack, J.P. & Jones, D.T. (2003). *Lean Thinking: Banish Waste and Create Wealth in Your Corporation.* 2nd Edition, Free Press.
   - Liker, J.K. (2004). *The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer.* McGraw-Hill.
   - Lean Enterprise Institute: [https://www.lean.org/](https://www.lean.org/)

2. **Agile Supply Chain**
   - Christopher, M. (2016). *Logistics & Supply Chain Management.* 5th Edition, Pearson.
   - Harrison, A. & van Hoek, R. (2014). *Logistics Management and Strategy.* 5th Edition, Pearson.
   - Christopher, M. & Towill, D. (2001). "An integrated model for the design of agile supply chains." *International Journal of Physical Distribution & Logistics Management*, 31(4), 235–246.

3. **SCOR Model v13.0 & Performance Attributes**
   - ASCM (APICS): [https://www.ascm.org/learning/scor/](https://www.ascm.org/learning/scor/)
   - SCOR Quick Reference Guide — tải miễn phí sau đăng ký.
   - Bolstorff, P. & Rosenbaum, R. (2012). *Supply Chain Excellence.* 3rd Edition, AMACOM.

4. **IBP (Integrated Business Planning)**
   - Palmatier, G.E. & Crum, C. (2013). *Enterprise Sales and Operations Planning.* J. Ross Publishing.
   - Oliver Wight White Papers: [https://www.oliverwight.com/](https://www.oliverwight.com/)
   - Wallace, T.F. & Stahl, R.A. (2008). *Sales & Operations Planning: The How-To Handbook.* 3rd Edition.

5. **DDMRP**
   - Ptak, C. & Smith, C. (2016). *Demand Driven Material Requirements Planning (DDMRP).* Industrial Press.
   - Ptak, C. & Smith, C. (2011). *Orlicky's Material Requirements Planning.* 3rd Edition, McGraw-Hill.
   - Demand Driven Institute: [https://www.demanddriveninstitute.com/](https://www.demanddriveninstitute.com/)

6. **Digital SCM Standards**
   - Plattform Industrie 4.0 — RAMI 4.0: [https://www.plattform-i40.de/](https://www.plattform-i40.de/)
   - GS1 Standards: [https://www.gs1.org/standards](https://www.gs1.org/standards)
   - GS1 Việt Nam: [https://gs1.org.vn/](https://gs1.org.vn/)
   - ISO/IEC 27001:2022: [https://www.iso.org/standard/27001](https://www.iso.org/standard/27001)

### Sách tham khảo thêm

- Chopra, S. & Meindl, P. (2019). *Supply Chain Management: Strategy, Planning, and Operation.* 7th Edition, Pearson.
- Blanchard, D. (2021). *Supply Chain Management Best Practices.* 3rd Edition, Wiley.
- Simchi-Levi, D., Kaminsky, P. & Simchi-Levi, E. (2021). *Designing and Managing the Supply Chain.* 4th Edition, McGraw-Hill.
- Gartner Supply Chain Top 25: [https://www.gartner.com/en/supply-chain/research/supply-chain-top-25](https://www.gartner.com/en/supply-chain/research/supply-chain-top-25)

---

→ [📘 Quay lại bài học: Buổi 2](/guide/buoi-02) | [📋 Danh sách tiêu chuẩn](/standard/)
