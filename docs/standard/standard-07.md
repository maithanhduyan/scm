---
outline: [2, 3]
---

# 📏 Tiêu chuẩn Buổi 7: Nguyên tắc quản lý tồn kho

> Buổi 7 đi sâu vào các nguyên tắc quản lý tồn kho — từ mô hình EOQ kinh điển, phân loại ABC/XYZ, chiến lược JIT/VMI đến tối ưu tồn kho đa cấp (multi-echelon). Dưới đây là các tiêu chuẩn, framework và phương pháp luận quốc tế giúp doanh nghiệp quản lý tồn kho khoa học, giảm chi phí nắm giữ và đảm bảo mức dịch vụ mục tiêu.

---

## 1. EOQ Model — Ford W. Harris (1913) & Wilson Formula

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Economic Order Quantity (EOQ) Model |
| **Tác giả gốc** | Ford Whitman Harris (1913) — bài báo *"How Many Parts to Make at Once"* trên Factory, The Magazine of Management |
| **Người phổ biến** | R.H. Wilson (1934) — hệ thống hóa và phổ biến rộng rãi, nên còn gọi là **Wilson Formula** |
| **Phạm vi** | Xác định lượng đặt hàng tối ưu nhằm cực tiểu hóa tổng chi phí đặt hàng và chi phí nắm giữ tồn kho |

EOQ là một trong những mô hình tồn kho lâu đời nhất và vẫn là nền tảng trong mọi chương trình đào tạo SCM. Dù ra đời hơn 100 năm, nguyên lý cân bằng giữa **ordering cost** và **holding cost** vẫn đúng và được tích hợp vào hầu hết hệ thống ERP/MRP hiện đại.

### 📖 Nội dung chính

**Công thức EOQ cơ bản:**

$$
EOQ = \sqrt{\frac{2DS}{H}}
$$

Trong đó:
- $D$ = Nhu cầu hàng năm (Annual Demand, đơn vị)
- $S$ = Chi phí đặt hàng mỗi lần (Ordering Cost / Setup Cost, VNĐ/lần)
- $H$ = Chi phí nắm giữ tồn kho mỗi đơn vị mỗi năm (Holding Cost, VNĐ/đơn vị/năm)

**Các giả định của EOQ cổ điển:**

| # | Giả định | Thực tế |
|---|---|---|
| 1 | Nhu cầu ($D$) không đổi và biết trước | Nhu cầu biến động theo mùa, trend, promotion |
| 2 | Lead time cố định và biết trước | Lead time dao động do nhà cung cấp, vận chuyển |
| 3 | Nhận hàng toàn bộ một lần (instantaneous replenishment) | Hàng có thể nhận dần (gradual replenishment) |
| 4 | Không cho phép thiếu hàng (no stockout) | Backorder có thể xảy ra |
| 5 | Chi phí đặt hàng ($S$) và nắm giữ ($H$) không đổi | Chi phí thay đổi theo thời gian, volume |
| 6 | Không có chiết khấu số lượng | Nhà cung cấp thường áp dụng quantity discount |

**Các biến thể quan trọng:**

| Biến thể | Công thức / Đặc điểm | Ứng dụng |
|---|---|---|
| **EPQ** (Economic Production Quantity) | $EPQ = \sqrt{\frac{2DS}{H(1-d/p)}}$ — $d$: demand rate, $p$: production rate | Sản xuất nội bộ, khi hàng được sản xuất dần |
| **Quantity Discount EOQ** | So sánh TC ở mỗi mức giá, chọn Q có TC thấp nhất | Mua hàng có chiết khấu theo số lượng |
| **POQ** (Periodic Order Quantity) | $T^* = EOQ / D$ — chuyển EOQ thành chu kỳ đặt hàng | MRP system, khi muốn đặt hàng theo chu kỳ cố định |
| **EOQ with Backorder** | Cho phép thiếu hàng với chi phí backorder $B$ | Khi chi phí thiếu hàng thấp hơn chi phí nắm giữ |

**Safety Stock & Reorder Point:**

$$
SS = Z \times \sigma_{LT}
$$

$$
ROP = d \times LT + SS
$$

Trong đó:
- $Z$ = Z-score tương ứng service level mục tiêu (95% → $Z = 1.65$; 99% → $Z = 2.33$)
- $\sigma_{LT}$ = Độ lệch chuẩn nhu cầu trong lead time
- $d$ = Nhu cầu trung bình hàng ngày
- $LT$ = Lead time trung bình (ngày)

### 🔧 Cách áp dụng

1. **Thu thập dữ liệu**: Xác định $D$ (nhu cầu 12 tháng gần nhất), $S$ (chi phí đặt hàng — bao gồm admin, vận chuyển cố định, inspection), $H$ (thường = 20-30% giá trị đơn vị × holding rate)
2. **Tính EOQ cơ bản**: Áp dụng công thức, làm tròn theo đơn vị đóng gói (pallet, thùng, carton)
3. **Kiểm tra quantity discount**: Nếu nhà cung cấp có chính sách chiết khấu, so sánh Total Cost ở mỗi price break
4. **Tính Safety Stock**: Xác định service level mục tiêu (CSL), tính $\sigma_{LT}$ từ dữ liệu lịch sử, nhân với $Z$-score
5. **Tính Reorder Point**: $ROP = d \times LT + SS$ — thiết lập alert trong hệ thống ERP/WMS
6. **Tích hợp ERP/MRP**: Cấu hình EOQ, SS, ROP vào master data của từng SKU trong SAP MM, Oracle SCM hoặc hệ thống tương đương
7. **Review định kỳ**: Cập nhật tham số mỗi quý — nhu cầu thay đổi → EOQ và SS cần điều chỉnh

### 🏭 Ví dụ thực tế

**Hòa Phát** — tập đoàn sản xuất thép hàng đầu Việt Nam — áp dụng mô hình EOQ/EPQ cho quản lý nguyên vật liệu đầu vào (quặng sắt, than cốc, phế liệu). Với nhu cầu than cốc $D = 2,400,000$ tấn/năm, chi phí đặt hàng $S = 50$ triệu VNĐ/lô (bao gồm logistics tàu biển, thủ tục hải quan, kiểm định chất lượng), chi phí nắm giữ $H = 600,000$ VNĐ/tấn/năm (kho bãi, bảo hiểm, hao hụt), EOQ tính được khoảng **20,000 tấn/lần đặt**. Tuy nhiên, do ràng buộc tàu biển (Handymax 30,000-50,000 DWT), Hòa Phát điều chỉnh lô hàng thực tế lên **30,000-40,000 tấn** — minh họa rõ EOQ là điểm khởi đầu tính toán, sau đó cần điều chỉnh theo constraint thực tế. Safety Stock được duy trì ở mức **15-20 ngày sản xuất** để phòng biến động lead time vận chuyển đường biển từ Úc, Indonesia.

---

## 2. IAS 2 / IFRS — Inventories (Kế toán tồn kho quốc tế)

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | IAS 2 — Inventories (International Accounting Standard 2) |
| **Tổ chức ban hành** | IASB (International Accounting Standards Board) — thuộc IFRS Foundation |
| **Phiên bản hiện hành** | IAS 2 (revised 2003, amendments 2023) — áp dụng trong bộ IFRS Accounting Standards |
| **Tiêu chuẩn Việt Nam tương ứng** | VAS 02 — Hàng tồn kho (Ban hành theo QĐ 149/2001/QĐ-BTC) |
| **Phạm vi** | Quy định cách ghi nhận, đo lường và trình bày hàng tồn kho trong báo cáo tài chính |

IAS 2 là chuẩn mực kế toán quốc tế bắt buộc cho mọi doanh nghiệp lập báo cáo tài chính theo IFRS. Hiểu IAS 2 giúp người làm SCM phối hợp tốt hơn với bộ phận tài chính — kế toán trong việc định giá, xử lý write-down tồn kho và tối ưu chỉ số tài chính.

### 📖 Nội dung chính

**Nguyên tắc cốt lõi:**

> Hàng tồn kho được ghi nhận theo giá trị **thấp hơn** giữa **giá gốc (cost)** và **giá trị thuần có thể thực hiện được (NRV — Net Realizable Value)**.

$$
\text{Carrying Value} = \min(\text{Cost}, \text{NRV})
$$

**Các phương pháp tính giá vốn (cost formula):**

| Phương pháp | Mô tả | IAS 2 | VAS 02 | Ghi chú |
|---|---|:---:|:---:|---|
| **FIFO** (First-In, First-Out) | Hàng nhập trước — xuất trước | ✅ | ✅ | Phổ biến nhất, phù hợp hàng có hạn sử dụng |
| **Weighted Average** | Bình quân gia quyền sau mỗi lần nhập | ✅ | ✅ | Phổ biến trong sản xuất, hóa chất |
| **Specific Identification** | Theo dõi giá gốc từng đơn vị cụ thể | ✅ | ✅ | Cho hàng giá trị cao, đặc thù (ô tô, trang sức) |
| **LIFO** (Last-In, First-Out) | Hàng nhập sau — xuất trước | ❌ Cấm | ❌ Cấm | LIFO bị cấm do làm méo giá trị tồn kho trên bảng CĐKT |

**NRV (Net Realizable Value):**

$$
NRV = \text{Giá bán ước tính} - \text{Chi phí hoàn thiện} - \text{Chi phí bán hàng ước tính}
$$

Khi NRV < Cost → doanh nghiệp phải **write-down** (giảm giá trị tồn kho) và ghi nhận **lỗ** vào báo cáo kết quả kinh doanh. Điều này ảnh hưởng trực tiếp đến quyết định quản lý tồn kho — hàng tồn lâu, lỗi thời (excess & obsolete) cần được xử lý kịp thời.

**So sánh IAS 2 vs VAS 02:**

| Tiêu chí | IAS 2 (IFRS) | VAS 02 (Việt Nam) |
|---|---|---|
| **Phương pháp tính giá** | FIFO, Weighted Average, Specific ID | FIFO, Weighted Average, Specific ID + **Bình quân cuối kỳ** |
| **LIFO** | ❌ Cấm từ 2005 | ❌ Cấm theo TT 200/2014 |
| **NRV write-down** | Bắt buộc, đánh giá cuối kỳ | Bắt buộc, nhưng thực tế nhiều DN chưa thực hiện đúng |
| **Reversal of write-down** | ✅ Cho phép hoàn nhập (tối đa bằng write-down ban đầu) | ✅ Cho phép |
| **Biological assets** | Loại trừ (theo IAS 41) | Chưa có chuẩn riêng rõ ràng |
| **Disclosure** | Chi tiết: chính sách, carrying amount theo loại, write-down | Ít chi tiết hơn |

### 🔧 Cách áp dụng

1. **Phân loại tồn kho**: Nguyên vật liệu (raw materials), sản phẩm dở dang (WIP), thành phẩm (finished goods), hàng hóa (merchandise) — mỗi loại có cách tính cost khác nhau
2. **Chọn cost formula phù hợp**: FIFO cho FMCG/thực phẩm (expiry date), Weighted Average cho hàng đồng nhất (hóa chất, xi măng, vải)
3. **Thiết lập quy trình NRV review**: Cuối mỗi kỳ kế toán, so sánh cost vs NRV cho từng nhóm SKU — đặc biệt chú ý hàng slow-moving (>90 ngày), seasonal, và công nghệ cũ
4. **Phối hợp SCM — Finance**: Cung cấp dữ liệu aging report, demand forecast cho kế toán đánh giá NRV; ngược lại, finance cung cấp holding cost rate cho SCM tính EOQ
5. **Áp dụng Excess & Obsolete (E&O) policy**: Xây dựng quy trình xử lý hàng tồn kho chậm luân chuyển — clearance, donation, disposal — trước khi phải write-down

### 🏭 Ví dụ thực tế

**Thế Giới Di Động (MWG)** — nhà bán lẻ điện tử hàng đầu Việt Nam — quản lý tồn kho theo IAS 2/VAS 02 rất chặt chẽ do đặc thù hàng công nghệ mất giá nhanh. MWG áp dụng **Weighted Average** cho tính giá vốn điện thoại, laptop, và thực hiện **NRV write-down hàng quý** cho các model đời cũ. Khi Apple ra iPhone mới, các model cũ hơn 2 thế hệ bị đánh giá NRV thấp hơn cost 15-30%, buộc MWG phải ghi nhận write-down. Để giảm thiểu tổn thất, MWG áp dụng chiến lược **clearance sale trước khi ra model mới** (dựa trên product lifecycle forecast), kết hợp **consignment model** với nhà cung cấp cho các sản phẩm mới ra mắt — chuyển rủi ro tồn kho về nhà cung cấp trong 30-60 ngày đầu. Chính sách E&O được review **hàng tháng** — hàng tồn >60 ngày phải có action plan, >120 ngày phải chuyển sang kênh xả hàng.

---

## 3. APICS / ASCM — Inventory Management Body of Knowledge

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | APICS Body of Knowledge — Inventory Management Module (thuộc CPIM & CSCP) |
| **Tổ chức** | ASCM (Association for Supply Chain Management) — tiền thân là APICS (American Production and Inventory Control Society, thành lập 1957) |
| **Chứng chỉ liên quan** | **CPIM** (Certified in Planning and Inventory Management), **CSCP** (Certified Supply Chain Professional) |
| **Phiên bản** | CPIM 8.0 (2024), CSCP v5.0 |
| **Phạm vi** | Hệ thống kiến thức toàn diện về quản lý tồn kho — từ lý thuyết đến thực hành |

APICS (nay là ASCM) là tổ chức uy tín nhất thế giới trong lĩnh vực đào tạo và chứng chỉ SCM. Chứng chỉ **CPIM** là "chuẩn vàng" cho inventory planner và production planner, với module Inventory Management bao phủ toàn bộ kiến thức cần thiết.

### 📖 Nội dung chính

**CPIM — Module Inventory Management:**

| Chủ đề | Nội dung chính | Liên kết Buổi 7 |
|---|---|---|
| **Lot Sizing** | EOQ, POQ, LFL (Lot-for-Lot), PPB (Part Period Balancing), Silver-Meal, Wagner-Whitin | EOQ & biến thể |
| **Safety Stock** | Statistical SS, service level (CSL, fill rate), demand variability, lead time variability | Safety Stock |
| **ABC Classification** | Pareto 80/20, annual dollar volume, cycle counting frequency | ABC Analysis |
| **Inventory Functions** | Cycle stock, safety stock, anticipation stock, hedge stock, transportation stock, pipeline stock | Inventory Strategy |
| **Replenishment Systems** | Continuous review (Q-system), Periodic review (P-system), Min-Max, Two-bin | Reorder Point |
| **Inventory Metrics** | Inventory Turns, Days of Supply, Fill Rate, Stockout Rate, GMROI | Metrics |

**CSCP — Multi-echelon & Strategic Inventory:**

| Chủ đề | Nội dung chính |
|---|---|
| **Multi-echelon Inventory Optimization (MEIO)** | Tối ưu tồn kho đồng thời trên nhiều cấp: Central DC → Regional DC → Local → Store |
| **Strategic Inventory Positioning** | Xác định vị trí đặt tồn kho tối ưu trong network — decoupling points |
| **Demand-Supply Balancing** | S&OP, IBP, demand sensing, inventory policy alignment |
| **Network Design & Inventory** | Số lượng warehouse, vị trí, allocation — ảnh hưởng đến tổng tồn kho |

**Các metrics theo APICS Dictionary:**

| Metric | Công thức | Benchmark |
|---|---|---|
| **Inventory Turns** | $\frac{COGS}{\text{Average Inventory}}$ | FMCG: 8-15; Electronics: 4-8; Industrial: 3-6 |
| **Days of Supply (DOS)** | $\frac{\text{Average Inventory}}{\text{Average Daily Usage}}$ | FMCG: 25-45 ngày; Electronics: 45-90 ngày |
| **Fill Rate** | $\frac{\text{Units shipped on time}}{\text{Units ordered}}$ | Target: ≥95-98% |
| **GMROI** | $\frac{\text{Gross Margin}}{\text{Average Inventory at Cost}}$ | ≥2.0 cho retail |
| **E&O Rate** | $\frac{\text{Excess \& Obsolete Inventory}}{\text{Total Inventory}}$ | Target: <5% |

### 🔧 Cách áp dụng

1. **Phân loại ABC → Chọn replenishment system**: A-items dùng continuous review (Q-system) với EOQ + Safety Stock chính xác; C-items dùng periodic review (P-system) hoặc Two-bin đơn giản
2. **Xác định service level theo ABC**: A-items: CSL 98-99%; B-items: CSL 95-97%; C-items: CSL 90-95% — cân bằng giữa investment và service
3. **Tính toán lot size phù hợp**: EOQ cho independent demand; LFL hoặc PPB cho dependent demand trong MRP
4. **Thiết lập cycle counting program**: A-items count hàng tháng, B-items hàng quý, C-items mỗi 6 tháng — thay thế physical inventory count
5. **Xây dựng inventory dashboard**: Hiển thị Turns, DOS, Fill Rate, E&O Rate theo category và warehouse — review hàng tuần
6. **Chuẩn bị chứng chỉ CPIM**: Đăng ký APICS Learning System, kết hợp thực hành tại doanh nghiệp — ROI chứng chỉ rất cao cho career path

### 🏭 Ví dụ thực tế

**FPT Trading** (nay là **Synnex FPT**) — nhà phân phối công nghệ lớn nhất Việt Nam — áp dụng APICS methodology cho hệ thống quản lý tồn kho hàng nghìn SKU (laptop, PC, linh kiện, phần mềm). FPT Trading sử dụng **ABC/XYZ classification** để phân nhóm: **A-X** (giá trị cao, nhu cầu ổn định — iPhone, laptop bán chạy) quản lý bằng continuous review với Safety Stock chính xác; **C-Z** (giá trị thấp, nhu cầu không dự đoán — phụ kiện đặc thù) dùng Min-Max đơn giản. Inventory Turns duy trì ở mức **8-10 vòng/năm** cho toàn hệ thống, với A-items đạt **12-15 vòng**. Đặc biệt, FPT Trading kiểm soát E&O rất chặt — hàng tồn >90 ngày phải có **action plan clearance**, >180 ngày phải **write-down** hoặc trả về nhà sản xuất theo thỏa thuận return policy.

---

## 4. Toyota Production System (TPS) — Kanban & JIT

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Toyota Production System (TPS) — Kanban System & Just-In-Time (JIT) |
| **Tác giả / Kiến trúc sư** | Taiichi Ohno (1912-1990) & Shigeo Shingo — phát triển tại Toyota Motor Corporation từ thập niên 1950s-1970s |
| **Tài liệu nền tảng** | *Toyota Production System: Beyond Large-Scale Production* — Taiichi Ohno (1988) |
| **Phạm vi** | Hệ thống sản xuất tinh gọn — triết lý loại bỏ lãng phí (Muda), hướng tới tồn kho tối thiểu qua JIT và hệ thống kéo (pull) Kanban |

TPS là nền tảng của Lean Manufacturing và có ảnh hưởng sâu rộng nhất đến triết lý quản lý tồn kho hiện đại. JIT (Just-In-Time) — sản xuất và giao hàng đúng lúc, đúng số lượng — là "ngôi sao Bắc Đẩu" mà mọi chuỗi cung ứng hướng tới, dù mức độ áp dụng khác nhau tùy ngành.

### 📖 Nội dung chính

**Hai trụ cột của TPS:**

| Trụ cột | Mô tả | Liên quan tồn kho |
|---|---|---|
| **JIT (Just-In-Time)** | Sản xuất/giao đúng sản phẩm, đúng số lượng, đúng thời điểm | Giảm tồn kho tại mọi điểm trong chuỗi |
| **Jidoka (自働化)** | Tự động hóa có trí tuệ — dừng khi phát hiện lỗi | Ngăn sản xuất hàng lỗi → giảm tồn kho phế phẩm |

**Hệ thống Kanban:**

Kanban (看板 — "bảng hiệu") là cơ chế **pull-based** kiểm soát dòng vật liệu:

| Loại Kanban | Chức năng | Ví dụ |
|---|---|---|
| **Production Kanban** (P-Kanban) | Cho phép work center sản xuất lô hàng tiếp theo | Thẻ gắn trên container tại dây chuyền lắp ráp |
| **Withdrawal Kanban** (W-Kanban) | Cho phép lấy hàng từ trạm trước / supermarket | Thẻ gắn trên container tại kho supermarket |
| **Supplier Kanban** | Signal cho nhà cung cấp giao hàng | E-Kanban gửi tín hiệu điện tử đến supplier |

**Công thức tính số lượng Kanban:**

$$
N = \frac{d \times LT \times (1 + \alpha)}{C}
$$

Trong đó: $N$ = số Kanban, $d$ = nhu cầu/ngày, $LT$ = lead time (ngày), $\alpha$ = hệ số an toàn (0.1-0.5), $C$ = sức chứa mỗi container.

**7 Loại lãng phí (Muda) — Liên quan tồn kho:**

| # | Lãng phí | Liên kết tồn kho |
|---|---|---|
| 1 | **Overproduction** (Sản xuất thừa) | ⭐⭐⭐ Nguyên nhân #1 gây tồn kho dư thừa |
| 2 | **Inventory** (Tồn kho) | ⭐⭐⭐ Tồn kho vượt mức cần thiết — che giấu vấn đề |
| 3 | **Waiting** (Chờ đợi) | ⭐⭐ Chờ vật liệu → tăng buffer stock |
| 4 | **Transportation** (Vận chuyển) | ⭐ Di chuyển tồn kho không cần thiết |
| 5 | **Overprocessing** (Gia công thừa) | ⭐ Tạo ra WIP không cần thiết |
| 6 | **Motion** (Thao tác thừa) | ⭐ Tìm kiếm, xếp dỡ tồn kho không hiệu quả |
| 7 | **Defects** (Sai lỗi) | ⭐⭐ Hàng lỗi tồn kho → scrap hoặc rework |

**Heijunka (平準化 — Production Leveling):**

Heijunka là kỹ thuật san bằng sản lượng sản xuất — cả về **volume** lẫn **product mix** — nhằm giảm biến động tồn kho. Thay vì sản xuất 1,000 sản phẩm A rồi 500 sản phẩm B (batch production), Heijunka san đều: A-A-B-A-A-B mỗi cycle. Kết quả: tồn kho thành phẩm giảm 40-60%, lead time ngắn hơn, phản hồi nhu cầu nhanh hơn.

### 🔧 Cách áp dụng

1. **Bắt đầu từ "supermarket system"**: Thiết lập kho trung gian (supermarket) giữa các công đoạn — downstream "kéo" hàng từ supermarket, upstream bổ sung khi có Kanban signal
2. **Tính số Kanban ban đầu**: Dùng công thức, sau đó giảm dần $\alpha$ (hệ số an toàn) để liên tục giảm tồn kho — "Kanban là công cụ cải tiến, không chỉ là công cụ kiểm soát"
3. **Triển khai Heijunka**: Sử dụng Heijunka box để lên lịch sản xuất san đều — giảm batch size dần dần
4. **Hợp tác với nhà cung cấp**: Mở rộng Kanban đến supplier — Supplier Kanban hoặc e-Kanban, yêu cầu giao hàng thường xuyên, lô nhỏ (milk run)
5. **Kết hợp với 5S và Visual Management**: Khu vực tồn kho sạch sẽ, có đánh dấu rõ ràng — dễ phát hiện bất thường (quá nhiều hoặc quá ít)

### 🏭 Ví dụ thực tế

**Thaco (Trường Hải Auto)** — nhà sản xuất ô tô lớn nhất Việt Nam — áp dụng TPS/Kanban tại nhà máy lắp ráp Kia và Mazda ở Chu Lai (Quảng Nam). Thaco triển khai **hệ thống Kanban điện tử (e-Kanban)** kết nối giữa dây chuyền lắp ráp chính (main line) và các dây chuyền phụ (sub-assembly) cũng như kho linh kiện. Khi một xe hoàn thành tại trạm lắp ghế ngồi, e-Kanban tự động signal đến kho để chuẩn bị bộ ghế cho xe tiếp theo — **tồn kho tại line chỉ duy trì 2-4 giờ sản xuất** (so với 2-3 ngày trước khi áp dụng Kanban). Thaco cũng áp dụng **Heijunka** cho dây chuyền Kia — san đều giữa Kia Morning, Seltos, Sonet trong mỗi shift thay vì chạy batch lớn — giúp giảm tồn kho thành phẩm ~35% và rút ngắn order-to-delivery từ 15 ngày xuống 8 ngày. Với nhà cung cấp linh kiện nội địa, Thaco triển khai **milk run** — xe tải đi theo tuyến cố định thu gom linh kiện từ 5-8 supplier mỗi ngày, thay vì mỗi supplier giao riêng.

---

## 5. VMI (Vendor Managed Inventory) — VICS/GS1 Standard

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Vendor Managed Inventory (VMI) — Tồn kho do nhà cung cấp quản lý |
| **Tổ chức liên quan** | **GS1** (Global Standards 1) — tiêu chuẩn mã vạch, EDI, data sharing; **VICS** (Voluntary Interindustry Commerce Solutions — nay thuộc GS1 US) — phát triển CPFR và VMI guidelines |
| **Tiêu chuẩn kỹ thuật** | GS1 EDI (EANCOM, GS1 XML), GS1-128 barcode, GTIN, GLN, SSCC |
| **Phiên bản** | VICS VMI Guidelines (2004), GS1 VMI Implementation Guide (cập nhật liên tục) |
| **Phạm vi** | Mô hình hợp tác trong đó nhà cung cấp chịu trách nhiệm quản lý mức tồn kho tại địa điểm của khách hàng |

VMI là bước tiến lớn từ mô hình "push" truyền thống sang **collaborative replenishment** — nhà cung cấp nhìn thấy dữ liệu bán hàng/tồn kho của khách hàng và chủ động quyết định khi nào, bao nhiêu để bổ sung hàng. Được Walmart và Procter & Gamble tiên phong từ cuối thập niên 1980s.

### 📖 Nội dung chính

**Mô hình VMI — Dòng thông tin & hàng hóa:**

| Bước | Hoạt động | Trách nhiệm |
|---|---|---|
| 1 | Chia sẻ dữ liệu POS/tồn kho real-time | **Khách hàng** (retailer) → Nhà cung cấp |
| 2 | Phân tích nhu cầu, lên kế hoạch bổ sung | **Nhà cung cấp** |
| 3 | Tạo đơn hàng bổ sung (replenishment order) | **Nhà cung cấp** (trong giới hạn min-max đã thỏa thuận) |
| 4 | Giao hàng và cập nhật tồn kho | **Nhà cung cấp** |
| 5 | Nhận hàng, xác nhận, thanh toán | **Khách hàng** |

**So sánh VMI vs Consignment vs Traditional:**

| Tiêu chí | Traditional | VMI | Consignment |
|---|---|---|---|
| **Ai quyết định đặt hàng** | Khách hàng | Nhà cung cấp | Nhà cung cấp |
| **Ai sở hữu tồn kho** | Khách hàng (sau khi nhận) | Khách hàng (sau khi nhận) | **Nhà cung cấp** (đến khi bán) |
| **Data sharing** | Minimal | POS + inventory level | POS + inventory level |
| **Rủi ro tồn kho** | Khách hàng | Chia sẻ | **Nhà cung cấp** |
| **Bullwhip Effect** | Cao | Giảm đáng kể | Giảm đáng kể |
| **Yêu cầu IT** | Thấp | Cao (EDI, integration) | Cao |
| **Phù hợp** | Quan hệ đơn giản | Đối tác chiến lược, volume lớn | Hàng mới, hàng rủi ro cao |

**Yêu cầu kỹ thuật GS1 cho VMI:**

| Thành phần | Tiêu chuẩn GS1 | Chức năng |
|---|---|---|
| **Product ID** | GTIN (Global Trade Item Number) | Nhận dạng sản phẩm thống nhất |
| **Location ID** | GLN (Global Location Number) | Nhận dạng địa điểm giao/nhận |
| **Logistics Unit** | SSCC (Serial Shipping Container Code) | Tracking đơn vị vận chuyển |
| **Data Exchange** | GS1 EDI (DESADV, INVRPT, ORDER) | Truyền dữ liệu tự động: Despatch Advice, Inventory Report, Order |
| **Barcode** | GS1-128 / GS1 DataMatrix | Quét mã tại điểm nhận/xuất |

**KPIs cho VMI Program:**

| KPI | Công thức / Định nghĩa | Target |
|---|---|---|
| **In-Stock Rate** | % thời gian sản phẩm available on shelf | ≥98% |
| **Inventory Turns** | COGS / Average Inventory tại điểm bán | Tăng 15-30% so với trước VMI |
| **Order Fill Rate** | % đơn hàng giao đủ | ≥97% |
| **Forecast Accuracy** | 1 − MAPE (NCC dự báo dựa trên POS data) | ≥80% |
| **Excess Inventory** | Tồn kho vượt max level đã thỏa thuận | <3% SKU count |
| **Lead Time Reliability** | % đơn giao đúng window cam kết | ≥95% |

### 🔧 Cách áp dụng

1. **Chọn đối tác phù hợp**: VMI hiệu quả nhất với nhà cung cấp chiến lược (A-supplier), volume lớn, sản phẩm fast-moving — bắt đầu pilot với 1-2 supplier, 10-20 SKU
2. **Thiết lập data sharing**: Chia sẻ POS data daily (hoặc real-time), inventory level, promotion plan — qua EDI hoặc API integration
3. **Thỏa thuận Min-Max levels**: Xác định min (tránh stockout) và max (tránh overstock) cho mỗi SKU tại mỗi location — review hàng tháng
4. **Xây dựng SLA rõ ràng**: In-stock target, replenishment frequency, delivery window, penalty/bonus mechanism
5. **Đo lường và cải tiến**: Track KPIs hàng tuần, monthly business review với supplier, điều chỉnh parameters theo mùa vụ

### 🏭 Ví dụ thực tế

**Vinamilk** triển khai VMI với các chuỗi siêu thị lớn (Co.opmart, Big C/GO!, WinMart) cho nhóm sản phẩm sữa tươi — mặt hàng có shelf life ngắn (7-14 ngày) và nhu cầu ổn định. Vinamilk nhận **POS data hàng ngày** từ hệ thống bán hàng của siêu thị, kết hợp với dữ liệu tồn kho tại mỗi cửa hàng. Đội replenishment của Vinamilk phân tích và chủ động lên đơn bổ sung — đảm bảo hàng luôn fresh (FIFO) và mức tồn kho đủ phục vụ 2-3 ngày bán hàng. Kết quả: **in-stock rate tăng từ 93% lên 98.5%**, **hàng hết hạn giảm 70%**, inventory turns tại siêu thị tăng từ 24 lên 36 vòng/năm. Vinamilk cũng hưởng lợi — forecast accuracy cải thiện nhờ có demand visibility, giảm bullwhip effect, và tối ưu production planning cho nhà máy sữa.

---

## 6. DDMRP — Demand Driven Material Requirements Planning

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Demand Driven Material Requirements Planning (DDMRP) |
| **Tác giả** | Carol Ptak & Chad Smith — đồng sáng lập **Demand Driven Institute (DDI)**, xuất bản lần đầu 2011 |
| **Tài liệu nền tảng** | *Orlicky's Material Requirements Planning* 3rd Edition (Ptak & Smith, 2011); *Demand Driven Material Requirements Planning* (Ptak & Smith, 2016) |
| **Tổ chức** | Demand Driven Institute (DDI) — cấp chứng chỉ **DDPP** (Demand Driven Planner Professional) và **DDLP** (Demand Driven Leader Professional) |
| **Phạm vi** | Phương pháp lập kế hoạch vật tư dựa trên nhu cầu thực tế, sử dụng strategic buffer thay vì dự báo truyền thống |

DDMRP ra đời để giải quyết hạn chế của MRP truyền thống — phụ thuộc quá nhiều vào forecast (thường sai), gây ra **Bullwhip Effect** và tồn kho không cân đối (thừa chỗ này, thiếu chỗ kia). DDMRP kết hợp tinh hoa của MRP, Lean, Six Sigma, TOC (Theory of Constraints) và DRP.

### 📖 Nội dung chính

**5 Components của DDMRP:**

| # | Component | Mô tả | Vai trò |
|---|---|---|---|
| 1 | **Strategic Inventory Positioning** | Xác định **ở đâu** trong BOM/network nên đặt buffer tồn kho (decoupling points) | Tách rời (decouple) lead time và biến động giữa các tầng — giảm Bullwhip Effect |
| 2 | **Buffer Profiles & Levels** | Tính kích thước buffer gồm 3 zone: **Red** (safety + lead time), **Yellow** (average consumption × lead time), **Green** (min order quantity hoặc order cycle) | Thay thế Safety Stock tĩnh bằng buffer động, trực quan |
| 3 | **Dynamic Adjustments** | Điều chỉnh buffer theo **Demand Adjustment Factor (DAF)** — mùa vụ, promotion, trend | Buffer "sống" — tự thích ứng thay vì cố định cả năm |
| 4 | **Demand Driven Planning** | Tạo supply order dựa trên **Net Flow Position** = On-hand + On-order − Qualified Demand | Pull-based planning — chỉ bổ sung khi Net Flow xuống zone Yellow/Red |
| 5 | **Visible & Collaborative Execution** | Dashboard màu sắc (Green/Yellow/Red), alert-based execution, priority management | Dễ quản lý, giảm "noise" từ MRP truyền thống (nervousness) |

**Net Flow Equation:**

$$
\text{Net Flow Position} = \text{On-hand} + \text{On-order} - \text{Qualified Demand}
$$

- Nếu Net Flow ≤ Top of Yellow → Tạo supply order lên Top of Green
- Nếu Net Flow > Top of Yellow → Không cần bổ sung

**So sánh DDMRP vs MRP truyền thống vs Lean:**

| Tiêu chí | MRP truyền thống | Lean/Kanban | DDMRP |
|---|---|---|---|
| **Cơ sở kế hoạch** | Forecast → MPS → MRP explosion | Actual consumption (pull) | Net Flow Position (hybrid) |
| **Buffer / Safety Stock** | SS tĩnh, tính 1 lần/quý | Kanban quantity cố định | Dynamic buffer — 3 zones, điều chỉnh liên tục |
| **Phản ứng biến động** | Chậm — cần replan cả MPS | Nhanh ở shop floor, chậm ở supply chain | Nhanh — DAF điều chỉnh real-time |
| **Bullwhip Effect** | Khuếch đại (forecast error × BOM levels) | Giảm ở local, nhưng khó scale multi-echelon | Giảm mạnh nhờ decoupling points |
| **Complexity phù hợp** | Mọi BOM/network | BOM đơn giản, volume ổn định | BOM phức tạp, nhu cầu biến động |
| **Trực quan** | Khó — nhiều data, MRP nervousness | Đơn giản — thẻ Kanban | Trực quan — dashboard Red/Yellow/Green |

**Giải quyết Bullwhip Effect:**

DDMRP giảm Bullwhip Effect bằng 3 cơ chế:
1. **Decoupling Points**: Tách rời biến động giữa các tầng — biến động ở downstream không truyền nguyên vẹn lên upstream
2. **Actual Demand thay vì Forecast**: Qualified Demand dựa trên đơn hàng thực, không dùng forecast cho planning
3. **Dynamic Buffers**: Buffer tự điều chỉnh theo mùa vụ, trend — không tạo "spike" đặt hàng đột ngột

### 🔧 Cách áp dụng

1. **Xác định decoupling points**: Phân tích BOM và supply network — đặt buffer tại các điểm có lead time dài, biến động cao, hoặc nơi nhiều nhánh BOM hội tụ (convergent points)
2. **Tính buffer profiles**: Xác định lead time category (long/medium/short), variability category (high/medium/low), order frequency — tính Red/Yellow/Green zones
3. **Thiết lập DAF**: Xác định seasonal factors, promotion uplift, known demand spikes — input vào hệ thống để buffer tự điều chỉnh
4. **Chuyển từ MRP sang DDMRP dần dần**: Pilot với 1 product family hoặc 1 plant, so sánh service level và inventory level trước/sau — mở rộng khi thấy kết quả
5. **Đào tạo team**: DDMRP yêu cầu thay đổi tư duy — từ "push dựa trên forecast" sang "pull dựa trên actual demand" — đào tạo planner và management
6. **Công cụ hỗ trợ**: Replenishment+, Demand Driven Technologies, hoặc module DDMRP trong SAP IBP, Oracle — hoặc bắt đầu bằng Excel prototype

### 🏭 Ví dụ thực tế

**Masan Consumer** — thuộc Masan Group, sản xuất FMCG (mì gói Omachi/Kokomi, nước mắm Chin-su, nước tương Tam Thái Tử) — đối mặt thách thức lớn với MRP truyền thống: BOM nhiều tầng (nguyên liệu → bán thành phẩm → thành phẩm → đóng gói), nhu cầu biến động mạnh theo mùa (Tết, lễ) và promotion thường xuyên. Khi áp dụng tư duy DDMRP cho nhóm sản phẩm mì ăn liền, Masan đặt **decoupling points** tại (1) kho bột mì thô, (2) bán thành phẩm vắt mì, và (3) thành phẩm đóng thùng. Buffer được tính dynamic — tăng 40% vào tháng 11-12 (trước Tết) và giảm 20% vào tháng 2-3 (sau Tết). Net Flow Position được monitor hàng ngày trên dashboard — planner chỉ cần focus vào SKU có Net Flow trong zone Red/Yellow, thay vì review toàn bộ 2,000+ SKU. Kết quả pilot: **inventory giảm 22%** trong khi **fill rate tăng từ 94% lên 98%**, MRP nervousness (số lần thay đổi planned order) giảm **65%**.

---

## 📊 Ma trận tiêu chuẩn × chủ đề Buổi 7

| Tiêu chuẩn / Framework | EOQ & Safety Stock | ABC/XYZ Analysis | JIT / Kanban | VMI / Consignment | Multi-echelon | Bullwhip Effect |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **EOQ Model (Harris/Wilson)** | ⭐⭐⭐ | ⭐ | ⭐ | ⭐ | ⭐ | ⭐ |
| **IAS 2 / IFRS Inventories** | ⭐ | ⭐⭐ | ⭐ | ⭐⭐ | ⭐ | ⭐ |
| **APICS / ASCM (CPIM/CSCP)** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Toyota TPS (Kanban/JIT)** | ⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ |
| **VMI (VICS/GS1)** | ⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **DDMRP (Ptak & Smith)** | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

> ⭐⭐⭐ = Liên quan trực tiếp, cốt lõi · ⭐⭐ = Liên quan, hỗ trợ · ⭐ = Liên quan gián tiếp

---

## ✅ Checklist áp dụng

- [ ] Thu thập dữ liệu $D$, $S$, $H$ cho top SKU và tính EOQ — so sánh với lô hàng đặt thực tế hiện tại
- [ ] Tính Safety Stock theo service level mục tiêu — xác định $Z$-score và $\sigma_{LT}$ từ dữ liệu lịch sử ≥12 tháng
- [ ] Thiết lập Reorder Point (ROP) trong hệ thống ERP/WMS cho mỗi SKU — cấu hình auto-alert khi tồn kho chạm ROP
- [ ] Thực hiện ABC classification theo annual dollar volume (Pareto) — phân nhóm A (80%), B (15%), C (5%)
- [ ] Bổ sung XYZ classification theo CoV (Coefficient of Variation) — kết hợp thành ma trận ABC-XYZ 9 ô
- [ ] Xác định replenishment policy theo ma trận: AX/BX → continuous review (EOQ+SS); CZ → periodic review/Two-bin
- [ ] Rà soát chính sách kế toán tồn kho theo IAS 2/VAS 02 — xác nhận cost formula (FIFO/Weighted Average) và quy trình NRV review
- [ ] Xây dựng E&O (Excess & Obsolete) policy — ngưỡng aging, action plan, write-down procedure
- [ ] Đánh giá khả năng triển khai Kanban/pull system cho ít nhất 1 dây chuyền hoặc 1 nhóm sản phẩm — tính số Kanban ban đầu
- [ ] Xác định 1-2 nhà cung cấp chiến lược phù hợp VMI — thiết kế pilot program với SLA và KPIs rõ ràng
- [ ] Phân tích Bullwhip Effect trong chuỗi hiện tại — so sánh biến động đơn hàng (order variance) vs biến động nhu cầu (demand variance) ở mỗi tầng
- [ ] Nghiên cứu DDMRP — xác định decoupling points tiềm năng trong BOM/network, pilot buffer sizing cho 1 product family
- [ ] Xây dựng inventory dashboard: Inventory Turns, DOS, Fill Rate, E&O Rate, Stock-out Rate — cập nhật hàng tuần
- [ ] Thiết lập cycle counting program theo ABC: A-monthly, B-quarterly, C-semi-annual — theo dõi inventory accuracy ≥98%
- [ ] Lập kế hoạch đào tạo team về CPIM module Inventory Management — hoặc ít nhất self-study APICS Dictionary key terms

---

## 🔗 Đọc thêm

- [Xem bài giảng đầy đủ →](/guide/buoi-07)
- Harris, F.W. (1913). *How Many Parts to Make at Once*. Factory, The Magazine of Management, 10(2), 135-136.
- Wilson, R.H. (1934). *A Scientific Routine for Stock Control*. Harvard Business Review, 13(1), 116-128.
- IAS 2 Inventories — [ifrs.org/issued-standards/list-of-standards/ias-2-inventories](https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/)
- ASCM CPIM Certification — [ascm.org/cpim](https://www.ascm.org/learning-development/certifications-credentials/cpim/)
- APICS Dictionary, 17th Edition — [ascm.org/apics-dictionary](https://www.ascm.org/learning-development/publications-research/apics-dictionary/)
- Ohno, T. (1988). *Toyota Production System: Beyond Large-Scale Production*. Productivity Press.
- Liker, J.K. (2004). *The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer*. McGraw-Hill.
- GS1 VMI Implementation Guide — [gs1.org/standards/vmi](https://www.gs1.org/standards)
- Ptak, C. & Smith, C. (2016). *Demand Driven Material Requirements Planning (DDMRP)*. Industrial Press.
- Demand Driven Institute — [demanddriveninstitute.com](https://www.demanddriveninstitute.com/)
- Lee, H.L., Padmanabhan, V. & Whang, S. (1997). *The Bullwhip Effect in Supply Chains*. Sloan Management Review, 38(3), 93-102.

---

→ [📘 Quay lại bài học: Buổi 7](/guide/buoi-07) | [📋 Danh sách tiêu chuẩn](/standard/)
