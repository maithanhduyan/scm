---
outline: [2, 3]
title: "Tiêu chuẩn 8: Demand Planning — S&OP, CPFR, IBP "
description: "S&OP (APICS), CPFR (VICS), IBP (Oliver Wight), Demand Sensing và tiêu chuẩn quốc tế về hoạch định nhu cầu."
head:
  - - meta
    - property: og:title
      content: "Tiêu chuẩn quốc tế: Demand Planning"
---

# 📏 Tiêu chuẩn Buổi 8: Hoạch định nhu cầu (Demand Planning)

> Buổi 8 bao quát toàn bộ quy trình hoạch định nhu cầu — từ các phương pháp dự báo (định tính & định lượng), quy trình S&OP/IBP, demand sensing thời gian thực đến cộng tác CPFR giữa nhà bán lẻ và nhà cung cấp. Dưới đây là các tiêu chuẩn quốc tế, framework và phương pháp luận giúp doanh nghiệp dự báo chính xác hơn, giảm sai lệch forecast và đồng bộ hóa kế hoạch cung – cầu – tài chính.

---

## 1. APICS / ASCM — Demand Management Framework

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | APICS Body of Knowledge — Demand Management Module (thuộc CPIM Part 1) |
| **Tổ chức** | ASCM (Association for Supply Chain Management) — tiền thân là APICS (American Production and Inventory Control Society, thành lập 1957) |
| **Chứng chỉ liên quan** | **CPIM** (Certified in Planning and Inventory Management), **CSCP** (Certified Supply Chain Professional), **CLTD** (Certified in Logistics, Transportation and Distribution) |
| **Phiên bản** | CPIM 8.0 (2024), CSCP v5.0 |
| **Phạm vi** | Quản lý nhu cầu toàn diện — từ dự báo, kế hoạch nhu cầu đến phối hợp cung – cầu |

APICS (nay là ASCM) xây dựng hệ thống kiến thức chuẩn mực nhất thế giới về Demand Management. Module **Demand Management** trong CPIM Part 1 là nền tảng lý thuyết và thực hành cho mọi demand planner, cung cấp framework phân cấp dự báo, phương pháp đo lường và quy trình consensus.

### 📖 Nội dung chính

**Forecasting Hierarchy theo APICS:**

| Cấp độ | Horizon | Granularity | Người chịu trách nhiệm | Ứng dụng |
|---|---|---|---|---|
| **Strategic** | 2-5 năm | Product family / Market | C-suite, VP Strategy | Capacity planning, CapEx, network design |
| **Tactical** | 3-18 tháng | Product group / SKU group | Demand Planning Manager | S&OP, production planning, procurement |
| **Operational** | 1 ngày – 3 tháng | SKU / SKU-Location | Demand Planner, Scheduler | MPS, DRP, order fulfillment |

**Forecast Accuracy Metrics theo APICS Dictionary:**

| Metric | Công thức | Diễn giải | Benchmark |
|---|---|---|---|
| **MAPE** (Mean Absolute Percentage Error) | $MAPE = \frac{1}{n}\sum\left\|\frac{A_t - F_t}{A_t}\right\| \times 100\%$ | Sai số trung bình tuyệt đối theo phần trăm | FMCG: 20-30%; Fashion: 40-60% |
| **MAD** (Mean Absolute Deviation) | $MAD = \frac{1}{n}\sum\|A_t - F_t\|$ | Sai số trung bình tuyệt đối theo đơn vị | Phụ thuộc scale, dùng so sánh nội bộ |
| **RMSE** (Root Mean Square Error) | $RMSE = \sqrt{\frac{1}{n}\sum(A_t - F_t)^2}$ | Phạt lỗi lớn nặng hơn MAD | So sánh giữa các model |
| **Tracking Signal** | $TS = \frac{\sum(A_t - F_t)}{MAD}$ | Phát hiện forecast bias có hệ thống | \|TS\| ≤ 4 (chấp nhận); > 6 (cần điều chỉnh) |
| **Forecast Bias** | $Bias = \frac{\sum(F_t - A_t)}{\sum A_t} \times 100\%$ | Xu hướng dự báo cao/thấp hơn thực tế | Target: \|Bias\| < 5% |

**Best Practices từ APICS Body of Knowledge:**

1. **Forecast ≠ Target**: Dự báo phải phản ánh thực tế thị trường, không phải mục tiêu kinh doanh — tách riêng forecast và sales target
2. **Forecast at the right level**: Dự báo ở cấp aggregate rồi disaggregate xuống SKU (top-down) chính xác hơn bottom-up trong hầu hết trường hợp
3. **Combine methods**: Kết hợp định lượng (statistical) + định tính (judgment) cho kết quả tốt nhất
4. **Measure continuously**: Track MAPE, Bias hàng tháng — thiết lập exception management khi sai lệch vượt ngưỡng
5. **One-number plan**: Toàn bộ tổ chức phải làm việc trên một con số forecast duy nhất (consensus forecast)

### 🔧 Cách áp dụng

1. **Xác định forecasting hierarchy**: Phân cấp Product Family → Product Group → SKU → SKU-Location, mapping với planning horizon phù hợp
2. **Chọn phương pháp forecast**: Sản phẩm ổn định → Exponential Smoothing; có trend → Holt; mùa vụ → Holt-Winters/Seasonal Decomposition; sản phẩm mới → Delphi/Expert Judgment
3. **Thiết lập forecast accuracy dashboard**: Tính MAPE, Bias, Tracking Signal hàng tháng cho từng product family — alert khi MAPE > ngưỡng hoặc |Bias| > 5%
4. **Xây dựng consensus process**: Lịch họp hàng tháng — Statistical baseline → Sales enrichment → Marketing overlay → Consensus meeting → Approve
5. **Đào tạo team**: Tối thiểu Demand Planner nên thi CPIM Part 1 — hoặc tự học APICS Dictionary key terms về demand management

### 🏭 Ví dụ thực tế

**Vinamilk** — doanh nghiệp sữa lớn nhất Việt Nam — áp dụng forecasting hierarchy theo framework APICS: cấp **Strategic** (3-5 năm) cho kế hoạch xây nhà máy mới và mở rộng trang trại bò sữa; cấp **Tactical** (6-18 tháng) cho S&OP hàng tháng theo product family (sữa tươi, sữa chua, sữa bột, sữa đặc); cấp **Operational** (tuần/ngày) cho DRP phân phối đến 200,000+ điểm bán. Vinamilk sử dụng **Holt-Winters** cho nhóm sản phẩm có tính mùa vụ rõ (sữa chua tăng 20-25% vào mùa hè, sữa bột tăng 15% dịp Tết), kết hợp **Expert Judgment** cho sản phẩm mới ra mắt. MAPE được track hàng tháng — target MAPE < 25% ở cấp SKU-Location, đạt trung bình **18-22%**. Forecast Bias được monitor chặt — khi phát hiện bias dương liên tục cho nhóm sữa bột trẻ em (do sales input quá lạc quan), team đã điều chỉnh consensus process, yêu cầu sales input phải kèm evidence từ distributor order.

---

## 2. S&OP Framework — Oliver Wight (Class A)

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Sales & Operations Planning (S&OP) — Oliver Wight Class A Framework |
| **Tổ chức phát triển** | Oliver Wight International — công ty tư vấn SCM hàng đầu, thành lập bởi Oliver Wight (1960s-1980s) |
| **Người sáng lập** | Oliver Wight phát triển S&OP từ đầu 1980s, xây dựng trên nền tảng MRP II |
| **Phiên bản** | Oliver Wight Class A Checklist, 7th Edition (2017) |
| **Phạm vi** | Quy trình cân bằng cung – cầu hàng tháng, kết nối chiến lược kinh doanh với hoạt động vận hành |

Oliver Wight là "cha đẻ" của S&OP. Từ những năm 1980, ông nhận ra rằng MRP II chỉ giải quyết phần "how" (sản xuất cái gì, bao nhiêu) mà thiếu phần "what" (nên bán gì, thị trường cần gì). S&OP ra đời để kết nối bộ phận bán hàng, marketing, sản xuất và tài chính vào một quy trình ra quyết định thống nhất hàng tháng.

### 📖 Nội dung chính

**5-Step Monthly S&OP Process:**

| Bước | Tên | Người tham gia | Output |
|---|---|---|---|
| 1 | **Data Gathering** | Demand Analyst | Dữ liệu bán hàng, tồn kho, market intelligence cập nhật |
| 2 | **Demand Planning / Demand Review** | Sales, Marketing, Demand Planner | Unconstrained demand plan (consensus forecast) |
| 3 | **Supply Planning / Supply Review** | Operations, Procurement, Logistics | Constrained supply plan — capacity, material, logistics |
| 4 | **Pre-S&OP Meeting** | Cross-functional managers | Phân tích gaps cung–cầu, đề xuất scenarios, financial impact |
| 5 | **Executive S&OP Meeting** | CEO/GM, VP-level | Quyết định: approve plan, allocate resources, resolve conflicts |

**Oliver Wight Class A Checklist — S&OP criteria:**

| Tiêu chí | Class A | Class B | Class C | Class D |
|---|---|---|---|---|
| **S&OP process** | Monthly, cross-functional, CEO-led | Monthly nhưng thiếu CEO ownership | Ad-hoc, không đều đặn | Không có S&OP |
| **Demand Plan Accuracy** | ≥ 85% (family level) | 75-85% | 60-75% | < 60% |
| **Supply Plan Adherence** | ≥ 95% | 85-95% | 70-85% | < 70% |
| **Financial integration** | Kế hoạch tài chính tích hợp đầy đủ | Có kết nối nhưng chưa đồng bộ | Tách rời | Không có |
| **One-number plan** | Toàn tổ chức dùng 1 con số | Phần lớn nhất quán | Mỗi bộ phận 1 con số | Mỗi người 1 con số |

**S&OP Maturity Model:**

| Stage | Tên | Đặc điểm | KPIs |
|---|---|---|---|
| 1 | **Reactive** | Không có quy trình, phản ứng theo tình huống | Không đo lường forecast accuracy |
| 2 | **Standard** | S&OP monthly cycle đã có, nhưng chưa cross-functional đầy đủ | MAPE tracked, nhưng chưa có accountability |
| 3 | **Advanced** | Cross-functional, CEO-led, financial integration | Demand Plan Accuracy ≥ 80%, Bias < 5% |
| 4 | **Proactive** | Scenario planning, what-if analysis, demand sensing tích hợp | Class A criteria đạt đầy đủ, MAPE < 20% family level |

**KPIs cốt lõi của S&OP:**

| KPI | Công thức | Target |
|---|---|---|
| **Demand Plan Accuracy** | $1 - \frac{\sum\|Actual - Plan\|}{\sum Actual}$ ở cấp family | ≥ 85% |
| **Supply Plan Adherence** | $\frac{\text{Actual Production}}{\text{Planned Production}}$ | ≥ 95% |
| **Financial Plan Accuracy** | $1 - \frac{\|Actual Revenue - Planned Revenue\|}{Actual Revenue}$ | ≥ 90% |
| **S&OP Meeting Effectiveness** | Agenda completion, decision rate, attendance | 100% attendance, ≥ 80% decisions made |

### 🔧 Cách áp dụng

1. **Bắt đầu từ leadership commitment**: CEO/GM phải sponsor và tham dự Executive S&OP — không có leadership buy-in thì S&OP sẽ thất bại
2. **Xây dựng lịch S&OP cố định**: Ngày cố định mỗi tháng cho từng bước — ví dụ: Data (ngày 1-5), Demand Review (ngày 8-10), Supply Review (ngày 12-15), Pre-S&OP (ngày 18), Exec S&OP (ngày 22)
3. **Xác định product families**: Gom SKU thành 8-15 product families — đủ chi tiết để ra quyết định nhưng không quá granular
4. **Thiết lập S&OP template**: Spreadsheet hoặc hệ thống với demand plan, supply plan, inventory plan, financial projection — rolling 18-24 tháng
5. **Đo lường và cải tiến**: Track Demand Plan Accuracy, Supply Plan Adherence hàng tháng — sử dụng Oliver Wight Class A Checklist để tự đánh giá maturity
6. **Tiến tới Class A**: Roadmap 12-24 tháng — từ Class D/C lên Class A, với milestones rõ ràng cho từng giai đoạn

### 🏭 Ví dụ thực tế

**Sabeco** (Tổng Công ty Bia – Rượu – Nước giải khát Sài Gòn, nay thuộc ThaiBev) — triển khai S&OP từ 2018 sau khi ThaiBev mua lại. Trước đó, Sabeco vận hành theo mô hình **push-based**: nhà máy sản xuất theo công suất tối đa, đẩy hàng ra hệ thống phân phối. Sau khi áp dụng S&OP monthly cycle, Sabeco thiết lập 10 product families (Bia Sài Gòn Xanh/Đỏ/Lager, 333, Bia Sài Gòn Chill...), với Demand Review do team Trade Marketing và Sales phối hợp Demand Planner. Mùa hè (tháng 4-8) nhu cầu bia tăng 35-50% so với mùa đông — S&OP giúp Sabeco **lên kế hoạch capacity** (thuê thêm line sản xuất, tăng ca) từ trước 3 tháng thay vì phản ứng bị động. Demand Plan Accuracy cải thiện từ **65% lên 82%** ở family level sau 18 tháng triển khai. Supply Plan Adherence đạt **93%**, giúp giảm tình trạng **out-of-stock mùa cao điểm từ 12% xuống 4%**.

---

## 3. IBP — Integrated Business Planning (Gartner / Oliver Wight)

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Integrated Business Planning (IBP) |
| **Tổ chức phát triển** | Oliver Wight International (khái niệm gốc), Gartner (mở rộng và phổ biến), SAP/Oracle/Kinaxis (công cụ) |
| **Xuất hiện** | Từ giữa 2000s — Oliver Wight mở rộng S&OP thành IBP; Gartner đưa vào Hype Cycle |
| **Phiên bản** | Oliver Wight IBP Framework (2010s); Gartner S&OP/IBP Maturity Model (cập nhật hàng năm) |
| **Phạm vi** | Kết nối chiến lược kinh doanh, portfolio, demand, supply và tài chính vào một quy trình hoạch định tích hợp |

IBP là bước tiến hóa tự nhiên của S&OP — bổ sung 2 chiều quan trọng: **financial integration** (P&L, balance sheet) và **strategic alignment** (chiến lược kinh doanh dài hạn). Nếu S&OP trả lời câu hỏi "cung – cầu có cân bằng không?", IBP trả lời câu hỏi lớn hơn: "kế hoạch có đưa doanh nghiệp đến mục tiêu chiến lược và tài chính không?"

### 📖 Nội dung chính

**Evolution: MPS → MRP II → S&OP → IBP:**

| Thập kỷ | Framework | Focus | Limitation |
|---|---|---|---|
| 1960s | **MPS** (Master Production Schedule) | Lập lịch sản xuất | Chỉ nhìn production, thiếu material |
| 1970s-80s | **MRP II** (Manufacturing Resource Planning) | Material + capacity planning | Thiếu kết nối demand/market |
| 1980s-90s | **S&OP** | Cân bằng cung – cầu hàng tháng | Thiếu financial integration & strategic link |
| 2000s+ | **IBP** | Cung – cầu – tài chính – chiến lược tích hợp | Đòi hỏi maturity cao, data infrastructure |

**5 Pillars của IBP:**

| Pillar | Nội dung | Owner | Output |
|---|---|---|---|
| **Product Review** | Portfolio management, NPI (New Product Introduction), phase-out, lifecycle | VP Marketing/R&D | Product roadmap, NPI timeline, SKU rationalization |
| **Demand Review** | Consensus forecast, demand shaping, promotion impact | VP Sales/Demand Planning | Unconstrained demand plan |
| **Supply Review** | Capacity, constraints, sourcing, make-buy decisions | VP Operations/Supply Chain | Constrained supply plan, capacity utilization |
| **Financial Reconciliation** | P&L projection, gap analysis vs budget/target, scenario costing | CFO/FP&A | Financial plan aligned with operational plan |
| **Management Business Review** | Strategic decisions, resource allocation, risk management | CEO/GM + Leadership Team | Approved integrated plan, action items |

**Gartner S&OP/IBP Maturity — 5 Stages:**

| Stage | Tên Gartner | Đặc điểm | % Doanh nghiệp |
|---|---|---|---|
| 1 | **React** | Không có S&OP; phản ứng khủng hoảng | ~15% |
| 2 | **Anticipate** | S&OP cơ bản, chủ yếu demand-supply matching | ~35% |
| 3 | **Integrate** | S&OP cross-functional, financial link | ~30% |
| 4 | **Collaborate** | IBP với external collaboration, scenario planning | ~15% |
| 5 | **Orchestrate** | IBP cognitive, AI-driven, real-time, autonomous | ~5% |

**So sánh S&OP vs IBP chi tiết:**

| Tiêu chí | S&OP | IBP |
|---|---|---|
| **Scope** | Demand – Supply balancing | Demand – Supply – Finance – Strategy – Portfolio |
| **Horizon** | 3-18 tháng (tactical) | 1-3 năm + strategic horizon |
| **Financial link** | Hạn chế hoặc không có | P&L, cash flow tích hợp trực tiếp |
| **Product portfolio** | Không có hoặc tách riêng | Product Review là pillar riêng |
| **Scenario planning** | Hạn chế (1-2 scenarios) | Đa scenarios, what-if analysis |
| **Technology** | Excel, basic APS | SAP IBP, Kinaxis, o9, Anaplan |
| **Owner** | VP Supply Chain / Operations | CEO / CFO — cross-functional ownership |

### 🔧 Cách áp dụng

1. **Đánh giá maturity hiện tại**: Sử dụng Gartner Maturity Model — xác định doanh nghiệp đang ở stage nào (hầu hết DN Việt Nam ở stage 1-2)
2. **Master S&OP trước**: IBP xây trên nền S&OP — nếu S&OP chưa chạy tốt, đừng nhảy sang IBP
3. **Bổ sung Financial Integration**: Mời FP&A tham gia S&OP cycle — bắt đầu bằng revenue/margin projection từ demand plan
4. **Thêm Product Review**: Kết nối NPI pipeline, SKU rationalization vào quy trình — đảm bảo sản phẩm mới được reflect trong demand plan
5. **Đầu tư technology**: Excel giới hạn ở S&OP; IBP cần hệ thống chuyên dụng — SAP IBP, Kinaxis RapidResponse, o9 Solutions, hoặc Anaplan
6. **Xây dựng change management**: IBP thay đổi cách ra quyết định — từ silo sang integrated; cần đào tạo, communication plan, executive sponsorship mạnh

### 🏭 Ví dụ thực tế

**Masan Consumer** — một trong những tập đoàn FMCG lớn nhất Việt Nam (Chin-su, Omachi, Kokomi, Nam Ngư, Vinacafé) — đang chuyển đổi từ S&OP sang IBP. Với portfolio rất đa dạng (500+ SKU across nhiều ngành hàng: gia vị, mì ăn liền, cà phê, đồ uống), Masan nhận ra S&OP truyền thống không đủ để quản lý phức tạp cross-category. **Product Review** trở thành pillar quan trọng — mỗi quý, Masan rà soát portfolio: loại bỏ SKU long-tail (bottom 10% revenue, <0.5% contribution), ưu tiên NPI dựa trên market gap analysis. **Financial Reconciliation** giúp kết nối demand plan với P&L projection — khi Marketing đề xuất promotion mạnh cho Omachi vào Tết, finance ngay lập tức thấy impact lên gross margin và trade spend. Kết quả: IBP giúp Masan **giảm SKU từ 600+ xuống 450** (tập trung nguồn lực), **tăng forecast accuracy ở family level từ 75% lên 88%**, và quan trọng nhất — **financial plan accuracy đạt 92%** so với budget (trước đây chỉ 78%).

---

## 4. CPFR — VICS/GS1 Standard

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Collaborative Planning, Forecasting and Replenishment (CPFR) |
| **Tổ chức ban hành** | VICS (Voluntary Interindustry Commerce Solutions) — nay sáp nhập vào **GS1 US** (2012) |
| **Phiên bản** | CPFR Model v2.0 (2004, GS1 US), CPFR Guidelines Update (2010) |
| **Tiền thân** | Walmart – Warner-Lambert pilot (1995) — dự án CFAR (Collaborative Forecasting and Replenishment) |
| **Phạm vi** | Chuẩn hóa quy trình cộng tác dự báo và bổ sung hàng giữa nhà bán lẻ (retailer) và nhà cung cấp (supplier) |

CPFR ra đời từ bài học thực tế: retailer và supplier dự báo riêng rẽ dẫn đến sai lệch lớn, tồn kho dư thừa ở một bên và thiếu hụt ở bên kia (Bullwhip Effect). VICS/GS1 chuẩn hóa quy trình cộng tác thành 9 bước, với tiêu chuẩn chia sẻ dữ liệu (EDI, GS1) để hai bên làm việc trên cùng một bức tranh nhu cầu.

### 📖 Nội dung chính

**9-Step CPFR Process (VICS Model):**

| Bước | Tên | Mô tả | Kết quả |
|---|---|---|---|
| 1 | **Develop Front-End Agreement** | Hai bên ký thỏa thuận mục tiêu, scope, KPIs, resource commitment | Partnership agreement |
| 2 | **Create Joint Business Plan** | Xây dựng kế hoạch kinh doanh chung — promotions, NPI, seasonal plan | Joint business plan |
| 3 | **Create Sales Forecast** | Tạo forecast bán hàng chung dựa trên POS data, market intelligence | Shared sales forecast |
| 4 | **Identify Exceptions for Sales Forecast** | Phát hiện sai lệch > ngưỡng giữa forecast hai bên | Exception list |
| 5 | **Resolve/Collaborate on Exception Items** | Hai bên họp giải quyết các exception — điều chỉnh forecast | Resolved forecast |
| 6 | **Create Order Forecast** | Chuyển sales forecast thành order forecast (tính tồn kho, lead time) | Order forecast |
| 7 | **Identify Exceptions for Order Forecast** | Phát hiện sai lệch trong order forecast vs capacity/inventory | Exception list |
| 8 | **Resolve/Collaborate on Exception Items** | Giải quyết các exception về đơn hàng — điều chỉnh quantity, timing | Resolved order plan |
| 9 | **Generate Order** | Tạo đơn hàng thực tế — tự động hoặc bán tự động | Purchase/replenishment order |

**Data Sharing Requirements:**

| Loại dữ liệu | Standard | Mô tả |
|---|---|---|
| **POS Data** | EDI 852 (Product Activity Data) | Dữ liệu bán hàng tại quầy — daily/weekly |
| **Forecast Data** | EDI 830 (Planning Schedule with Release Capability) | Dữ liệu dự báo chia sẻ giữa hai bên |
| **Inventory Data** | EDI 846 (Inventory Inquiry/Advice) | Tồn kho tại retailer DC và store |
| **Order Data** | EDI 850/855 (Purchase Order / PO Acknowledgment) | Đơn đặt hàng và xác nhận |
| **Product Master Data** | GS1 GDSN (Global Data Synchronisation Network) | Thông tin sản phẩm chuẩn hóa — GTIN, mô tả, kích thước |

**CPFR Metrics:**

| Metric | Trước CPFR (typical) | Sau CPFR (typical) | Cải thiện |
|---|---|---|---|
| **Forecast Accuracy** | 55-65% | 75-85% | +15-25 percentage points |
| **In-stock Rate** | 92-95% | 97-99% | +3-5 pp |
| **Inventory Days** | 35-50 ngày | 25-35 ngày | Giảm 25-35% |
| **Order Fill Rate** | 90-94% | 96-99% | +4-6 pp |
| **Obsolete Inventory** | 3-5% | 1-2% | Giảm 50-60% |

### 🔧 Cách áp dụng

1. **Chọn partner phù hợp**: Bắt đầu CPFR với 1-2 retailer/supplier chiến lược — top account chiếm 20-30% doanh thu, có hạ tầng IT và willingness to share data
2. **Ký Front-End Agreement**: Xác định rõ scope (categories nào), KPIs, frequency, escalation process — đừng bỏ qua bước này
3. **Thiết lập data sharing**: POS data (daily/weekly), forecast (monthly), inventory (real-time hoặc daily) — bắt đầu bằng Excel/email nếu chưa có EDI, sau đó nâng cấp
4. **Xác định exception thresholds**: Ví dụ — forecast difference > 20% → trigger collaboration meeting; order forecast vs capacity gap > 10% → escalation
5. **Chạy pilot 3-6 tháng**: Pilot 1 category hoặc 1 region — đo Forecast Accuracy, In-stock Rate, Inventory Days trước/sau — build business case để mở rộng
6. **Tích hợp hệ thống dần**: Từ Excel → EDI 830/852 → GS1 GDSN → Retail Link (Walmart), 1WorldSync, hoặc platform CPFR chuyên dụng

### 🏭 Ví dụ thực tế

**Acecook Việt Nam** — nhà sản xuất mì ăn liền số 1 Việt Nam (Hảo Hảo, Lẩu Thái, Miến Phú Hương) — triển khai chương trình CPFR với các key retailers: **Saigon Co.op**, **WinMart** (VinCommerce), và **Big C/GO!**. Trước CPFR, mỗi bên dự báo riêng — Acecook forecast dựa trên historical shipment, retailer forecast dựa trên POS — sai lệch trung bình **25-30%** dẫn đến out-of-stock thường xuyên cho SKU hot (Hảo Hảo tôm chua cay) và overstock cho SKU slow-moving. Sau khi triển khai CPFR pilot với Saigon Co.op: hai bên chia sẻ **POS data hàng tuần** (email report, sau nâng lên EDI), forecast **hàng tháng** với exception meeting khi sai lệch > 15%. Acecook điều chỉnh production plan dựa trên POS trend thay vì chỉ dựa vào đơn đặt hàng từ distributor. Kết quả sau 6 tháng pilot: **forecast accuracy tăng từ 68% lên 82%** cho nhóm mì ăn liền, **in-stock rate tại Saigon Co.op tăng từ 94% lên 98.5%**, **tồn kho trung bình giảm 18%** tại cả hai bên.

---

## 5. Demand Sensing — Gartner & Terra Technology

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Demand Sensing — Short-term demand forecasting using real-time signals |
| **Tổ chức tiên phong** | Terra Technology (nay thuộc **E2open**, mua lại 2016) — phát triển phần mềm demand sensing đầu tiên; **Gartner** — định nghĩa và đưa vào Hype Cycle for Supply Chain Planning |
| **Xuất hiện** | Giữa 2000s — Terra Technology phát triển Multi-Enterprise Demand Sensing (MEDS) |
| **Khách hàng tiêu biểu** | Procter & Gamble, Unilever, Coca-Cola, Nestlé, Mondelēz |
| **Phạm vi** | Cải thiện forecast accuracy ngắn hạn (0-8 tuần) bằng real-time data signals và machine learning |

Demand Sensing là bước tiến hóa từ traditional forecasting. Thay vì chỉ dùng lịch sử bán hàng (lagging indicator), demand sensing tích hợp **real-time signals** (leading indicators) như POS, thời tiết, social media, tìm kiếm Google để cải thiện forecast ngắn hạn. Gartner định nghĩa demand sensing là "the ability to capture and respond to real demand, at the point of consumption, in near real-time."

### 📖 Nội dung chính

**Gartner Demand Sensing Maturity Model:**

| Level | Tên | Data Sources | Accuracy | Technology |
|---|---|---|---|---|
| 1 | **Historical-based** | Shipment history only | MAPE 40-50% (weekly) | Excel, basic statistical |
| 2 | **Order-based sensing** | Orders + shipment | MAPE 30-40% | APS system |
| 3 | **POS-based sensing** | POS + orders + shipment | MAPE 20-30% | Demand sensing software |
| 4 | **Multi-signal sensing** | POS + weather + social + events + economic | MAPE 15-25% | ML/AI platform |
| 5 | **Autonomous sensing** | All signals + self-learning + auto-adjust | MAPE 10-20% | Cognitive/AI-driven |

**Machine Learning Approaches:**

| Phương pháp | Đặc điểm | Khi nào dùng | Công cụ |
|---|---|---|---|
| **Random Forest** | Ensemble of decision trees, robust to outliers | Nhiều biến input, non-linear relationships | scikit-learn, H2O, SAS |
| **Gradient Boosting** (XGBoost, LightGBM) | Sequential ensemble, rất chính xác | Tabular data, nhiều features | XGBoost, LightGBM, CatBoost |
| **Neural Networks** (LSTM, Transformer) | Deep learning, capture long-term dependencies | Time series phức tạp, nhiều SKU | TensorFlow, PyTorch, Amazon Forecast |
| **Prophet** (Meta) | Additive model, tự động xử lý trend/seasonality/holiday | Quick baseline, ít tuning | Prophet (Python/R) |

**Data Sources Taxonomy:**

| Loại | Nguồn dữ liệu | Latency | Impact |
|---|---|---|---|
| **Internal** | POS data, warehouse shipments, order pipeline, inventory levels | Real-time – daily | Cao |
| **Channel** | Distributor inventory, retailer DC stock, e-commerce cart data | Daily – weekly | Cao |
| **External — Weather** | Nhiệt độ, mưa, bão, mùa — ảnh hưởng F&B, nông sản, thời trang | Hourly – daily | Trung bình – Cao |
| **External — Social** | Social media sentiment, mentions, viral trends | Real-time | Trung bình (phụ thuộc ngành) |
| **External — Search** | Google Trends, search volume cho keywords liên quan sản phẩm | Daily – weekly | Trung bình |
| **External — Economic** | GDP, CPI, consumer confidence, unemployment | Monthly – quarterly | Thấp – Trung bình (dài hạn) |
| **External — Events** | Lễ, Tết, festivals, sporting events, school calendar | Planned | Cao (seasonal/promotional) |

**ROI Metrics của Demand Sensing:**

| Metric | Cải thiện điển hình | Nguồn |
|---|---|---|
| **Forecast Accuracy (0-4 weeks)** | Cải thiện 25-40% so với traditional | Terra Technology / E2open case studies |
| **Inventory Reduction** | Giảm 10-20% safety stock | Gartner research |
| **Service Level** | Tăng 2-5 percentage points | Industry benchmarks |
| **Waste Reduction** (perishables) | Giảm 15-30% hàng hết hạn | CPG industry reports |

### 🔧 Cách áp dụng

1. **Bắt đầu với POS data**: Thu thập POS data từ key retailers — đây là "low-hanging fruit" cho demand sensing, cải thiện accuracy ngay lập tức
2. **Xây dựng data lake/warehouse**: Tập trung dữ liệu internal (sales, inventory, orders) + external (weather, events) vào 1 nơi — cloud platform (AWS, Azure, GCP)
3. **Pilot ML model đơn giản**: Bắt đầu với Prophet hoặc XGBoost cho 1 product family — so sánh accuracy với traditional Exponential Smoothing trên cùng test period
4. **Tích hợp weather data**: Với ngành F&B tại Việt Nam, weather data rất hữu ích — nước giải khát tăng mạnh khi nhiệt độ > 35°C, mì ăn liền tăng khi mưa dài ngày
5. **Thiết lập feedback loop**: Demand sensing cần continuous learning — retrain model hàng tuần/tháng với dữ liệu mới, monitor accuracy degradation
6. **Scale dần**: Từ 1 family → all families; từ weekly → daily; từ 1 data source → multi-signal; từ pilot → production deployment

### 🏭 Ví dụ thực tế

**Tân Hiệp Phát** — tập đoàn nước giải khát lớn nhất Việt Nam (Trà xanh Không Độ, Number 1, Dr Thanh) — đặc biệt chịu ảnh hưởng bởi thời tiết: nhu cầu nước giải khát tăng **40-60%** khi nhiệt độ vượt 35°C và giảm **20-30%** khi mưa kéo dài. Trước đây, Tân Hiệp Phát dự báo dựa trên historical sales + seasonal index — accuracy ở tuần chỉ đạt **55-60%**. Sau khi tích hợp **demand sensing** với dữ liệu weather forecast (7 ngày), POS data từ đại lý lớn, và Google Trends cho keyword "nước giải khát", "trà xanh" — accuracy ngắn hạn (1-2 tuần) cải thiện lên **78-85%**. Cụ thể, khi dự báo thời tiết cho thấy đợt nắng nóng kéo dài ở miền Trung, hệ thống tự động tăng forecast cho khu vực này 35% so với baseline — giúp **giảm out-of-stock từ 8% xuống 2.5%** tại các điểm bán vùng nắng nóng. Hệ thống sử dụng **XGBoost** model với features: nhiệt độ trung bình, lượng mưa, ngày lễ/sự kiện, POS 4 tuần gần nhất, promotion flag.

---

## 6. Box-Jenkins (ARIMA) & Advanced Forecasting Standards

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Box-Jenkins Methodology — ARIMA (AutoRegressive Integrated Moving Average) |
| **Tác giả** | George E.P. Box & Gwilym M. Jenkins — cuốn *Time Series Analysis: Forecasting and Control* (1970) |
| **Tiêu chuẩn thống kê liên quan** | **ISO 16269** — Statistical interpretation of data; **ISO 3534-1** — Statistics — Vocabulary and symbols |
| **Mở rộng** | SARIMA (Seasonal ARIMA), ARIMAX (ARIMA with exogenous variables), Holt-Winters (Triple Exponential Smoothing) |
| **Phạm vi** | Phương pháp luận chuẩn mực cho phân tích và dự báo chuỗi thời gian (time series forecasting) |

Box-Jenkins methodology là phương pháp luận "vàng" cho dự báo chuỗi thời gian, được sử dụng rộng rãi trong kinh tế, tài chính và supply chain. ARIMA cung cấp framework có hệ thống để xác định, ước lượng và kiểm định mô hình dự báo — đảm bảo tính khoa học và có thể tái lập (reproducible).

### 📖 Nội dung chính

**ARIMA(p,d,q) Methodology:**

| Tham số | Ý nghĩa | Cách xác định |
|---|---|---|
| **p** (AR order) | Số lag trong phần AutoRegressive — $Y_t$ phụ thuộc vào $Y_{t-1}, Y_{t-2}, ..., Y_{t-p}$ | Partial Autocorrelation Function (PACF) |
| **d** (differencing) | Số lần sai phân để đưa chuỗi về stationary — $\Delta^d Y_t$ | ADF test (Augmented Dickey-Fuller) |
| **q** (MA order) | Số lag trong phần Moving Average — $Y_t$ phụ thuộc vào $\varepsilon_{t-1}, \varepsilon_{t-2}, ..., \varepsilon_{t-q}$ | Autocorrelation Function (ACF) |

**Mô hình ARIMA(p,d,q):**

$$
\Delta^d Y_t = c + \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + ... + \phi_p Y_{t-p} + \varepsilon_t + \theta_1 \varepsilon_{t-1} + ... + \theta_q \varepsilon_{t-q}
$$

**SARIMA — Seasonal ARIMA: ARIMA(p,d,q)(P,D,Q)ₛ:**

Mở rộng ARIMA cho chuỗi có tính mùa vụ với chu kỳ $s$ (ví dụ $s=12$ cho monthly data):

$$
\Phi_P(B^s)\phi_p(B)\Delta^d\Delta_s^D Y_t = \Theta_Q(B^s)\theta_q(B)\varepsilon_t
$$

**Holt-Winters (Triple Exponential Smoothing):**

| Variant | Công thức | Khi nào dùng |
|---|---|---|
| **Additive** | $\hat{Y}_{t+h} = L_t + hT_t + S_{t+h-s}$ | Seasonal variation không đổi theo level |
| **Multiplicative** | $\hat{Y}_{t+h} = (L_t + hT_t) \times S_{t+h-s}$ | Seasonal variation tỷ lệ với level |

Trong đó: $L_t$ = Level, $T_t$ = Trend, $S_t$ = Seasonal component, $s$ = seasonal period.

**So sánh Traditional vs ML-based Forecasting:**

| Tiêu chí | Traditional (ARIMA, ES, Holt-Winters) | ML-based (XGBoost, LSTM, Transformer) |
|---|---|---|
| **Cơ sở lý thuyết** | Thống kê chặt chẽ, giả định rõ ràng | Data-driven, ít giả định |
| **Interpretability** | Cao — hiểu rõ mỗi tham số | Thấp — "black box" (trừ khi dùng SHAP/LIME) |
| **Xử lý non-linearity** | Hạn chế | Tốt — capture complex patterns |
| **Số lượng features** | Ít (1-3 biến) | Nhiều (10-100+ features) |
| **Data requirement** | Ít (30-50 data points đủ) | Nhiều (1000+ data points tốt nhất) |
| **External factors** | ARIMAX (hạn chế) | Dễ dàng tích hợp hàng trăm features |
| **Tốc độ deploy** | Nhanh, đơn giản | Phức tạp hơn, cần MLOps pipeline |
| **Best for** | Chuỗi đơn, ít biến, trend/seasonality rõ | Nhiều SKU, nhiều features, pattern phức tạp |

**ISO 16269 — Statistical Interpretation of Data:**

ISO 16269 cung cấp chuẩn quốc tế cho diễn giải dữ liệu thống kê — bao gồm estimation, hypothesis testing, và prediction intervals. Trong forecasting, ISO 16269 đặc biệt hữu ích cho:
- **Prediction intervals**: Xác định khoảng tin cậy cho dự báo — ví dụ: "Forecast Q3 = 100,000 ± 15,000 (95% CI)"
- **Outlier detection**: Xác định và xử lý giá trị ngoại lệ trong time series trước khi fit model
- **Sample size**: Xác định số data points tối thiểu cần thiết để model có ý nghĩa thống kê

### 🔧 Cách áp dụng

1. **Kiểm tra stationarity**: Dùng ADF test (Augmented Dickey-Fuller) — nếu chuỗi non-stationary, sai phân $d$ lần cho đến khi stationary
2. **Xác định (p, d, q)**: Phân tích ACF và PACF plots — ACF tắt dần → AR component; ACF cắt ngắn → MA component; hoặc dùng `auto_arima()` trong Python/R
3. **Fit và kiểm định model**: Ước lượng tham số, kiểm tra residuals (phải là white noise — Ljung-Box test), so sánh AIC/BIC giữa các model
4. **Xử lý seasonality**: Nếu có mùa vụ → SARIMA hoặc Holt-Winters; xác định $s$ (12 cho monthly, 52 cho weekly, 7 cho daily)
5. **Tính prediction interval**: Không chỉ point forecast mà phải cung cấp interval (80%, 95%) — quan trọng cho safety stock calculation
6. **So sánh với ML models**: Chạy parallel ARIMA + XGBoost/Prophet trên cùng test set — chọn model có MAPE thấp nhất, hoặc ensemble cả hai

### 🏭 Ví dụ thực tế

**Nutifood** — doanh nghiệp sữa và dinh dưỡng Việt Nam (NutiMilk, Pedia Plus, GrowPlus+, Enplus) — áp dụng SARIMA cho dự báo dòng sản phẩm sữa bột trẻ em có tính mùa vụ rõ rệt. Sữa bột trẻ em tăng **25-30%** vào dịp Tết (tháng 1-2, do quà biếu) và tăng **15-20%** vào mùa tựu trường (tháng 8-9). Nutifood áp dụng **SARIMA(1,1,1)(1,1,1)₁₂** cho nhóm Pedia Plus — model capture trend tăng trưởng ổn định 8-10%/năm và seasonal pattern. Kết quả: **MAPE đạt 12-15%** ở cấp product family/monthly — tốt hơn đáng kể so với Exponential Smoothing đơn thuần (MAPE 22-28%). Prediction interval 95% được sử dụng để tính safety stock — thay vì dùng safety stock tĩnh, Nutifood điều chỉnh SS theo prediction interval: mùa cao điểm SS tăng 40% (interval rộng hơn do demand variability cao), mùa thấp điểm SS giảm 20%. Song song đó, Nutifood pilot **XGBoost** model tích hợp thêm features: giá sữa nguyên liệu thế giới, tỷ giá USD/VND, promotion calendar, competitor pricing — **cải thiện MAPE thêm 3-5 percentage points** so với SARIMA alone, đặc biệt cho các tháng có promotion.

---

## 📊 Ma trận tiêu chuẩn × chủ đề Buổi 8

| Tiêu chuẩn / Framework | Forecasting Methods | S&OP | IBP | Demand Sensing | CPFR | Consensus Forecast |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **APICS / ASCM — Demand Management** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| **S&OP — Oliver Wight (Class A)** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐ | ⭐⭐⭐ |
| **IBP — Gartner / Oliver Wight** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **CPFR — VICS/GS1** | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Demand Sensing — Gartner/Terra** | ⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| **Box-Jenkins (ARIMA) & ISO 16269** | ⭐⭐⭐ | ⭐ | ⭐ | ⭐⭐ | ⭐ | ⭐⭐ |

> ⭐⭐⭐ = Liên quan trực tiếp, cốt lõi · ⭐⭐ = Liên quan, hỗ trợ · ⭐ = Liên quan gián tiếp

---

## ✅ Checklist áp dụng

- [ ] Xác định forecasting hierarchy (Strategic → Tactical → Operational) và mapping với planning horizon phù hợp cho doanh nghiệp
- [ ] Chọn phương pháp forecast phù hợp cho từng product family — ES cho stable demand, Holt-Winters cho seasonal, ARIMA cho complex patterns
- [ ] Thiết lập forecast accuracy dashboard: track MAPE, Bias, Tracking Signal hàng tháng — alert khi MAPE vượt ngưỡng hoặc |Bias| > 5%
- [ ] Triển khai S&OP monthly cycle — xác định 5 bước, lịch cố định, template, roles & responsibilities
- [ ] Đảm bảo CEO/GM sponsor và tham dự Executive S&OP meeting — leadership buy-in là yếu tố thành công quan trọng nhất
- [ ] Tự đánh giá S&OP maturity theo Oliver Wight Class A Checklist — xây dựng roadmap cải tiến 12-24 tháng
- [ ] Đánh giá readiness cho IBP — nếu S&OP đã ở Stage 3+ (Gartner), bắt đầu bổ sung Financial Reconciliation và Product Review
- [ ] Xác định 1-2 trading partners chiến lược để pilot CPFR — ký Front-End Agreement, bắt đầu chia sẻ POS data
- [ ] Thu thập POS data từ key retailers — đây là "low-hanging fruit" đầu tiên cho demand sensing
- [ ] Pilot ML model (Prophet hoặc XGBoost) cho 1 product family — so sánh accuracy với statistical forecast hiện tại
- [ ] Tích hợp weather data vào demand sensing — đặc biệt quan trọng cho ngành F&B và FMCG tại Việt Nam
- [ ] Xây dựng consensus forecast process: Statistical baseline → Sales input → Marketing overlay → Consensus meeting → Approve
- [ ] Áp dụng prediction interval (không chỉ point forecast) — sử dụng cho safety stock dynamic thay vì SS tĩnh
- [ ] Lập kế hoạch đào tạo team: CPIM Module Demand Management, hoặc tự học APICS Dictionary terms về demand planning
- [ ] Đo lường ROI của demand planning improvement: Forecast Accuracy gain → Inventory Reduction → Service Level improvement → Financial impact

---

## 🔗 Đọc thêm

- [Xem bài giảng đầy đủ →](/guide/buoi-08)
- ASCM CPIM Certification — [ascm.org/cpim](https://www.ascm.org/learning-development/certifications-credentials/cpim/)
- APICS Dictionary, 17th Edition — [ascm.org/apics-dictionary](https://www.ascm.org/learning-development/publications-research/apics-dictionary/)
- Wight, O. (1984). *Manufacturing Resource Planning: MRP II*. Oliver Wight Publications.
- Wallace, T.F. & Stahl, R.A. (2008). *Sales & Operations Planning: The How-To Handbook*, 3rd Edition. T.F. Wallace & Company.
- Palmatier, G.E. & Crum, C.D. (2003). *Enterprise Sales and Operations Planning*. J. Ross Publishing.
- Gartner (2024). *Hype Cycle for Supply Chain Planning Technologies*.
- GS1 US — CPFR Guidelines — [gs1us.org/resources/cpfr](https://www.gs1us.org/)
- Box, G.E.P. & Jenkins, G.M. (1970). *Time Series Analysis: Forecasting and Control*. Holden-Day.
- Hyndman, R.J. & Athanasopoulos, G. (2021). *Forecasting: Principles and Practice*, 3rd Edition — [otexts.com/fpp3](https://otexts.com/fpp3/)
- ISO 16269 — Statistical interpretation of data — [iso.org/standard/67872.html](https://www.iso.org/standard/67872.html)
- Terra Technology / E2open — Demand Sensing — [e2open.com/demand-sensing](https://www.e2open.com/)
- Taylor, S.J. & Letham, B. (2018). *Forecasting at Scale*. The American Statistician (Facebook/Meta Prophet).

---

→ [📘 Quay lại bài học: Buổi 8](/guide/buoi-08) | [📋 Danh sách tiêu chuẩn](/standard/)
