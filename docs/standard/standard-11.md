---
outline: [2, 3]
---

# 📏 Tiêu chuẩn Buổi 11: Tích hợp chuỗi cung ứng

> Các tiêu chuẩn, framework và phương pháp luận quốc tế liên quan đến tích hợp chuỗi cung ứng end-to-end — từ SCOR Enable Process, DAMA Data Management, Control Tower Framework đến Enterprise Architecture và IT Governance — nền tảng để xây dựng hệ thống SCM tích hợp hoàn chỉnh với dữ liệu chất lượng và quản trị xuyên chức năng.

## Tổng quan

Buổi 11 tập trung vào **tích hợp chuỗi cung ứng** — kết nối các dòng chảy Material, Information và Financial xuyên suốt từ Strategic đến Execution level. Theo nghiên cứu của Gartner (2024), chỉ **17% doanh nghiệp** đạt mức tích hợp "Network" trở lên, trong khi phần lớn vẫn đang ở mức Internal hoặc External. Các tiêu chuẩn và framework dưới đây cung cấp lộ trình có hệ thống để nâng mức tích hợp, đảm bảo chất lượng dữ liệu và thiết lập quản trị hiệu quả.

Tại sao cần tiêu chuẩn trong tích hợp chuỗi cung ứng?

- **Tích hợp có hệ thống:** SCOR Enable Process cung cấp 11 quy trình hỗ trợ, đảm bảo không bỏ sót khâu nào khi tích hợp cross-functional.
- **Dữ liệu là nền tảng:** DAMA-DMBOK2 định nghĩa 11 knowledge area và 6 chiều chất lượng dữ liệu — không có data quality thì mọi tích hợp đều vô nghĩa.
- **Visibility toàn diện:** Control Tower Framework biến dữ liệu phân tán thành bức tranh toàn cảnh real-time, từ giám sát đến điều phối tự động.
- **Kiến trúc bền vững:** TOGAF/ArchiMate giúp thiết kế hệ thống SCM tích hợp có kiến trúc rõ ràng, tránh "mì Ý" (spaghetti integration).
- **Bảo mật khi chia sẻ:** ISO/IEC 27001 bảo vệ dữ liệu nhạy cảm khi tích hợp với nhà cung cấp và khách hàng.
- **Quản trị rõ ràng:** RACI & COBIT đảm bảo mỗi quyết định có người chịu trách nhiệm, mỗi cuộc họp có kết quả cụ thể.

## 📋 Danh sách tiêu chuẩn liên quan

| # | Tiêu chuẩn / Framework | Tổ chức ban hành | Áp dụng cho |
|---|------------------------|-----------------|-------------|
| 1 | SCOR Model — Enable Process (sE) | ASCM (trước đây APICS) | Tích hợp cross-functional, enable processes |
| 2 | DAMA-DMBOK2 | DAMA International | Data management, data quality, MDM |
| 3 | Gartner Control Tower Framework | Gartner | Visibility, analytics, orchestration |
| 4 | TOGAF / ArchiMate | The Open Group | Kiến trúc hệ thống SCM, integration patterns |
| 5 | ISO/IEC 27001 | ISO/IEC | Bảo mật dữ liệu chuỗi cung ứng |
| 6 | RACI Framework & COBIT 2019 | PMI/ITIL & ISACA | IT governance, cross-functional alignment |

---

## 1️⃣ SCOR Model — Enable Process (sE)

### 📋 Giới thiệu

**SCOR (Supply Chain Operations Reference)** Model là framework chuỗi cung ứng toàn diện nhất, hiện do **ASCM** (Association for Supply Chain Management, trước đây là APICS + SCC) quản lý. Phiên bản mới nhất **SCOR Digital Standard (SCOR-DS)** ra mắt năm 2022, bổ sung các quy trình số hóa và phân tích.

- **Phiên bản hiện tại:** SCOR-DS (Digital Standard), 2022
- **Tổ chức:** ASCM (sáp nhập từ APICS + Supply Chain Council)
- **6 quy trình chính:** Plan, Source, Make, Deliver, Return, **Enable**
- **Enable (sE):** Nhóm quy trình hỗ trợ — nền tảng cho tích hợp xuyên chức năng

### 📖 Nội dung chính

#### 11 Enable Processes (sE1 – sE11)

Enable processes là "bộ xương sống" giúp 5 quy trình chính (Plan, Source, Make, Deliver, Return) hoạt động liên kết:

| Process | Tên | Mô tả | Liên quan đến |
|---------|-----|-------|---------------|
| **sE1** | Manage Supply Chain Business Rules | Quản lý quy tắc kinh doanh SC | Governance, tiêu chuẩn vận hành |
| **sE2** | Manage Supply Chain Performance | Đo lường hiệu suất SC | KPI, dashboard, reporting |
| **sE3** | Manage Supply Chain Data & Information | Quản lý dữ liệu & thông tin | Data quality, MDM |
| **sE4** | Manage Supply Chain Inventory | Quản lý tồn kho toàn hệ thống | Inventory visibility, optimization |
| **sE5** | Manage Supply Chain Capital Assets | Quản lý tài sản cố định | Equipment, facility management |
| **sE6** | Manage Supply Chain Contracts | Quản lý hợp đồng SC | Procurement, SLA management |
| **sE7** | Manage Supply Chain Network | Quản lý mạng lưới | Network design, partner management |
| **sE8** | Manage Regulatory Compliance | Tuân thủ quy định | Legal, customs, quality standards |
| **sE9** | Manage Supply Chain Risk | Quản lý rủi ro SC | Risk assessment, mitigation plans |
| **sE10** | Manage Supply Chain Returns | Quản lý trả hàng | Reverse logistics, warranty |
| **sE11** | Manage Supply Chain Technology | Quản lý công nghệ SC | ERP, WMS, TMS, integration tools |

#### SCOR-DS — Phiên bản số hóa

SCOR Digital Standard bổ sung thêm các yếu tố:

- **Digital Capabilities:** Mỗi quy trình được gắn với digital capabilities cần thiết (IoT, AI/ML, RPA, Blockchain...)
- **Data Requirements:** Định nghĩa rõ dữ liệu đầu vào/đầu ra cho mỗi quy trình
- **Integration Touchpoints:** Xác định điểm kết nối giữa các quy trình, hỗ trợ thiết kế integration architecture
- **Maturity Model:** 5 mức trưởng thành từ Reactive → Integrated → Collaborative → Orchestrated → Autonomous

#### Tích hợp cross-functional qua SCOR

SCOR tạo **ngôn ngữ chung** cho mọi phòng ban trong chuỗi cung ứng:

| Phòng ban | SCOR Processes liên quan | Enable Processes hỗ trợ |
|-----------|-------------------------|------------------------|
| Sales/Marketing | Plan, Deliver | sE1, sE2, sE6 |
| Procurement | Source, Plan | sE3, sE6, sE7 |
| Production | Make | sE4, sE5, sE8 |
| Logistics | Deliver, Return | sE7, sE10, sE11 |
| IT | Enable | sE3, sE11 |
| Finance | Plan | sE2, sE5, sE6 |

### 🔧 Cách áp dụng

1. **Đánh giá Enable maturity:** Chấm điểm 11 sE processes trên thang 1–5 → xác định gaps ưu tiên.
2. **Chuẩn hóa business rules (sE1):** Viết SOP cho mỗi quy trình SCM, đảm bảo tất cả phòng ban tuân thủ.
3. **Thiết lập KPI framework (sE2):** Sử dụng SCOR metrics (Perfect Order, Cash-to-Cash, SC Cost) làm baseline.
4. **Data governance (sE3):** Chỉ định data owner cho mỗi master data element — item, customer, supplier, BOM.
5. **SCOR-DS roadmap:** Lập lộ trình số hóa 3 năm dựa trên SCOR-DS maturity model.

### 🏭 Ví dụ thực tế

**Tình huống: Vinamilk — Áp dụng SCOR cho tích hợp chuỗi cung ứng sữa**

Vinamilk — doanh nghiệp sữa lớn nhất Việt Nam với hệ thống 13 nhà máy, 15 trang trại bò sữa và mạng lưới phân phối 250.000+ điểm bán:

- **sE1 (Business Rules):** Chuẩn hóa quy trình từ thu mua sữa tươi → sản xuất → phân phối, đồng bộ rules giữa 13 nhà máy.
- **sE2 (Performance):** Dashboard trung tâm theo dõi Perfect Order Rate (~97%), OTIF (On-Time In-Full) cho từng khu vực.
- **sE3 (Data):** SAP ERP làm backbone, tích hợp master data sản phẩm (3.000+ SKU) và khách hàng trên một nền tảng duy nhất.
- **sE7 (Network):** Quản lý mạng lưới 250.000+ điểm bán qua hệ thống DMS (Distribution Management System) kết nối với ERP.
- **sE11 (Technology):** Triển khai SAP S/4HANA, WMS tại 3 DC chính (Bình Dương, Hà Nội, Đà Nẵng), TMS cho đội xe 1.000+ phương tiện.

**Kết quả:** Giảm 30% tồn kho thành phẩm, rút ngắn lead time giao hàng từ 48h xuống 24h tại khu vực nội thành.

---

## 2️⃣ DAMA-DMBOK2 — Data Management Body of Knowledge

### 📋 Giới thiệu

**DAMA-DMBOK2** (Data Management Body of Knowledge, 2nd Edition) là bộ kiến thức chuẩn về quản lý dữ liệu, do **DAMA International** (Data Management Association) phát hành năm 2017. Đây là "kinh thánh" cho mọi hoạt động data management, đặc biệt quan trọng khi chuỗi cung ứng ngày càng phụ thuộc vào dữ liệu để ra quyết định.

- **Phiên bản hiện tại:** DAMA-DMBOK2, 2nd Edition (2017)
- **Tổ chức:** DAMA International
- **Phạm vi:** 11 knowledge areas covering toàn bộ vòng đời dữ liệu
- **Chứng chỉ liên quan:** CDMP (Certified Data Management Professional)

### 📖 Nội dung chính

#### 11 Knowledge Areas

DAMA-DMBOK2 tổ chức quản lý dữ liệu thành 11 lĩnh vực kiến thức, với Data Governance ở vị trí trung tâm:

| # | Knowledge Area | Tiếng Việt | Ý nghĩa cho SCM |
|---|---------------|-----------|-----------------|
| 1 | **Data Governance** | Quản trị dữ liệu | Ai sở hữu, ai quyết định, chính sách dữ liệu SC |
| 2 | **Data Architecture** | Kiến trúc dữ liệu | Thiết kế mô hình dữ liệu xuyên suốt chuỗi cung ứng |
| 3 | **Data Modeling & Design** | Mô hình hóa dữ liệu | Cấu trúc dữ liệu item, BOM, routing, supplier |
| 4 | **Data Storage & Operations** | Lưu trữ & vận hành | Database management, backup, recovery |
| 5 | **Data Security** | Bảo mật dữ liệu | Kiểm soát truy cập dữ liệu SCM nhạy cảm |
| 6 | **Data Integration & Interoperability** | Tích hợp & tương tác | EDI, API, ETL giữa ERP-WMS-TMS |
| 7 | **Data Quality** | Chất lượng dữ liệu | 6 chiều chất lượng cho master data |
| 8 | **Master & Reference Data** | Dữ liệu chủ & tham chiếu | Item master, customer master, supplier master |
| 9 | **Data Warehousing & BI** | Kho dữ liệu & BI | Data warehouse cho SC analytics |
| 10 | **Metadata Management** | Quản lý siêu dữ liệu | Data dictionary, data lineage |
| 11 | **Document & Content Management** | Quản lý tài liệu | SOP, hợp đồng, chứng từ xuất nhập khẩu |

#### 6 Data Quality Dimensions (6 chiều chất lượng dữ liệu)

| Dimension | Tiếng Việt | Định nghĩa | Ví dụ SCM |
|-----------|-----------|------------|----------|
| **Completeness** | Đầy đủ | Dữ liệu không bị thiếu field/record | Item master có đủ weight, dimensions, HS code, lead time |
| **Accuracy** | Chính xác | Dữ liệu phản ánh đúng thực tế | Tồn kho hệ thống = tồn kho thực tế (≥ 99% IRA) |
| **Consistency** | Nhất quán | Dữ liệu đồng nhất giữa các hệ thống | Mã NCC trong ERP = WMS = TMS |
| **Timeliness** | Kịp thời | Dữ liệu được cập nhật đúng lúc | PO status cập nhật real-time, không delay 24h |
| **Uniqueness** | Không trùng lặp | Mỗi thực thể chỉ có 1 record | Một supplier không bị tạo 3 mã khác nhau |
| **Validity** | Hợp lệ | Dữ liệu tuân thủ định dạng & quy tắc | Mã HS code đúng 8 chữ số, unit of measure hợp lệ |

#### Master Data Management (MDM) cho SCM

MDM đảm bảo **"one version of truth"** cho dữ liệu chủ xuyên suốt chuỗi cung ứng:

| Master Data | Các trường quan trọng | Hệ thống liên quan |
|------------|----------------------|-------------------|
| **Item Master** | SKU, description, UoM, weight, dimensions, HS code, lead time | ERP, WMS, TMS, POS |
| **Customer Master** | Customer ID, name, address, payment terms, credit limit | ERP, CRM, TMS |
| **Supplier Master** | Vendor ID, name, lead time, MOQ, payment terms, quality rating | ERP, SRM, QMS |
| **BOM (Bill of Material)** | Parent-child relationship, quantity, unit, scrap rate | ERP, MES |
| **Location Master** | Warehouse, zone, bin, capacity, handling equipment | WMS, TMS |
| **Routing** | Work center, operation sequence, standard time | ERP, MES, APS |

### 🔧 Cách áp dụng

1. **Đánh giá Data Quality hiện tại:** Đo 6 dimensions cho Item Master và Inventory data → xác định điểm yếu nhất.
2. **Chỉ định Data Owners:** Mỗi master data entity phải có 1 data owner (ví dụ: Procurement sở hữu Supplier Master, Supply Planning sở hữu Item Master).
3. **Thiết lập Data Governance Council:** Họp hàng tháng với đại diện từ Planning, Procurement, Production, Logistics, IT để giải quyết vấn đề dữ liệu.
4. **MDM Platform:** Triển khai MDM tool (SAP MDG, Informatica MDM, hoặc Stibo STEP) để quản lý master data tập trung.
5. **Data Quality Monitoring:** Thiết lập dashboard theo dõi 6 dimensions hàng ngày, đặt ngưỡng cảnh báo (ví dụ: Accuracy < 98% → alert).
6. **Data Cleansing Sprint:** Tổ chức sprint 2–4 tuần tập trung làm sạch một loại master data (bắt đầu từ Item Master).

### 🏭 Ví dụ thực tế

**Tình huống: FPT IS — Triển khai MDM cho khách hàng FMCG**

FPT Information System — đơn vị SI lớn nhất Việt Nam — triển khai dự án MDM cho một tập đoàn FMCG hàng đầu:

- **Vấn đề:** 15.000 SKU với 3 hệ thống quản lý riêng biệt (ERP, WMS, DMS), trùng lặp 12% item master, sai lệch mô tả sản phẩm giữa các hệ thống gây nhầm lẫn khi picking.
- **Giải pháp:** Triển khai nền tảng MDM trung tâm, chuẩn hóa naming convention, tự động đồng bộ giữa 3 hệ thống qua API.
- **Kết quả:** Giảm trùng lặp từ 12% xuống 0.5%, giảm picking error 40%, tiết kiệm 200 giờ/tháng cho data entry.

**Thế Giới Di Động (MWG) — Data Quality cho inventory:**
- Inventory Record Accuracy (IRA) được đo hàng ngày bằng cycle count tại 2.500+ cửa hàng.
- Hệ thống cảnh báo tự động khi IRA < 99% tại bất kỳ cửa hàng nào.
- Master data sản phẩm (20.000+ SKU) được quản lý tập trung, đồng bộ real-time từ ERP đến POS.

---

## 3️⃣ Gartner Supply Chain Control Tower Framework

### 📋 Giới thiệu

**Supply Chain Control Tower** là khái niệm được **Gartner** hệ thống hóa thành framework với **4 cấp độ trưởng thành** từ Visibility đến Orchestration. Gartner định nghĩa Control Tower là *"a hub that provides end-to-end supply chain visibility, with the ability to make recommendations and orchestrate actions across the supply chain."*

- **Tổ chức:** Gartner Inc.
- **Phiên bản:** Cập nhật liên tục qua Magic Quadrant & Hype Cycle for Supply Chain Execution Technologies
- **Phạm vi:** Visibility, analytics, collaboration, orchestration trong chuỗi cung ứng
- **Công nghệ liên quan:** IoT, AI/ML, Digital Twin, Cloud Platform

### 📖 Nội dung chính

#### 4 Levels of Control Tower Maturity

| Level | Tên | Mô tả | Capabilities | Công nghệ |
|-------|-----|-------|-------------|-----------|
| **1** | **Visibility** | Nhìn thấy đang xảy ra gì | Track & trace, dashboard, alerts | ERP integration, IoT sensors, GPS |
| **2** | **Analytics** | Hiểu tại sao và dự đoán | Root cause analysis, predictive analytics | BI tools, ML models, pattern recognition |
| **3** | **Collaboration** | Phối hợp hành động với đối tác | Multi-party communication, shared workflows | Collaboration platforms, supplier portals |
| **4** | **Orchestration** | Tự động điều phối tối ưu | Autonomous decision-making, optimization | AI/ML orchestration, digital twin, prescriptive analytics |

#### Technology Requirements

| Công nghệ | Vai trò trong Control Tower | Level yêu cầu |
|-----------|---------------------------|---------------|
| **IoT Sensors** | Theo dõi vị trí, nhiệt độ, độ ẩm hàng hóa real-time | Level 1+ |
| **API/EDI Integration** | Kết nối dữ liệu từ ERP, WMS, TMS, carrier systems | Level 1+ |
| **BI/Dashboard** | Trực quan hóa dữ liệu, KPI monitoring | Level 1+ |
| **AI/ML** | Dự báo disruption, anomaly detection, demand sensing | Level 2+ |
| **Digital Twin** | Mô phỏng chuỗi cung ứng, what-if scenario | Level 3+ |
| **Prescriptive Analytics** | Đề xuất hành động tối ưu tự động | Level 4 |
| **RPA** | Tự động hóa tác vụ lặp (order processing, exception handling) | Level 3+ |

#### Use Cases

| Use Case | Mô tả | Level tối thiểu |
|----------|-------|-----------------|
| **Disruption Management** | Phát hiện sớm gián đoạn (thiên tai, đình công, NCC phá sản), tự động kích hoạt contingency plan | Level 2 |
| **Demand-Supply Balancing** | Cân bằng cung-cầu real-time, đề xuất reallocation khi có biến động | Level 3 |
| **Transportation Visibility** | Track shipment real-time, ETA prediction, proactive alerting khi delay | Level 1 |
| **Inventory Optimization** | Multi-echelon inventory visibility, tự động đề xuất rebalancing | Level 3 |
| **Supplier Performance** | Theo dõi OTIF, quality, lead time của NCC, early warning system | Level 2 |

### 🔧 Cách áp dụng

1. **Bắt đầu từ Level 1 — Visibility:** Kết nối ERP, WMS, TMS vào một dashboard trung tâm — ưu tiên inventory và order visibility.
2. **Xác định use cases ưu tiên:** Chọn 2–3 use cases có ROI cao nhất (thường là transportation visibility và disruption management).
3. **Chọn platform:** Đánh giá các Control Tower platform (o9 Solutions, Blue Yonder, Kinaxis, SAP IBP, E2open) dựa trên Gartner Magic Quadrant.
4. **Phát triển Analytics (Level 2):** Xây dựng ML models cho demand sensing, ETA prediction, anomaly detection.
5. **Mở rộng Collaboration (Level 3):** Kết nối NCC tier 1 vào Control Tower, chia sẻ forecast và inventory data.
6. **Hướng tới Orchestration (Level 4):** Thiết lập autonomous rules — ví dụ: nếu NCC delay > 3 ngày, tự động trigger alternative sourcing.

### 🏭 Ví dụ thực tế

**Tình huống: Viettel Post — Control Tower cho logistics**

Viettel Post — đơn vị logistics thuộc tập đoàn Viettel — triển khai Supply Chain Control Tower cho mạng lưới giao nhận:

- **Level 1 (Visibility):** Dashboard real-time hiển thị 2 triệu+ kiện hàng/ngày trên bản đồ, tracking từ khi nhận → hub → last mile → giao thành công.
- **Level 2 (Analytics):** AI dự báo thời gian giao hàng (ETA) chính xác 92%, phát hiện bất thường (anomaly) khi một hub bị quá tải.
- **Level 3 (Collaboration):** Portal cho seller/marketplace theo dõi đơn hàng, tự động cập nhật status qua API với Shopee, Lazada, Tiki.
- **Kết quả:** Tỷ lệ giao hàng thành công lần đầu tăng từ 88% lên 95%, giảm 25% cuộc gọi CSKH hỏi tình trạng đơn hàng.

**Masan Group — Control Tower cho FMCG distribution:**
- Tích hợp dữ liệu từ 300+ nhà phân phối, 300.000+ điểm bán lẻ vào một nền tảng.
- AI phát hiện sớm tình trạng out-of-stock tại điểm bán, tự động đề xuất phân bổ lại hàng tồn.
- Giảm 20% lost sales do hết hàng tại điểm bán, cải thiện fill rate từ 92% lên 97%.

---

## 4️⃣ TOGAF / ArchiMate — Enterprise Architecture for SCM Integration

### 📋 Giới thiệu

**TOGAF (The Open Group Architecture Framework)** là framework kiến trúc doanh nghiệp được sử dụng rộng rãi nhất thế giới, do **The Open Group** phát triển. **ArchiMate** là ngôn ngữ mô hình hóa kiến trúc đi kèm. Khi áp dụng cho SCM, TOGAF giúp thiết kế hệ thống tích hợp có kiến trúc rõ ràng, tránh tình trạng "spaghetti integration" với hàng trăm point-to-point connections.

- **Phiên bản hiện tại:** TOGAF Standard, 10th Edition (2022); ArchiMate 3.2 (2023)
- **Tổ chức:** The Open Group
- **Chứng chỉ:** TOGAF Certified (Level 1 & 2), ArchiMate Certified
- **Phạm vi:** Enterprise Architecture covering Business, Data, Application, Technology layers

### 📖 Nội dung chính

#### ADM (Architecture Development Method) Cycle

ADM là quy trình phát triển kiến trúc theo chu kỳ lặp, gồm 10 phases:

| Phase | Tên | Mô tả | Áp dụng cho SCM |
|-------|-----|-------|-----------------|
| **Preliminary** | Framework & Principles | Thiết lập nguyên tắc kiến trúc | Định nghĩa integration principles cho SCM |
| **A** | Architecture Vision | Tầm nhìn kiến trúc | Mô hình SCM target state (3–5 năm) |
| **B** | Business Architecture | Kiến trúc nghiệp vụ | SCOR processes, value chain, org structure |
| **C** | Information Systems Architecture | Kiến trúc hệ thống thông tin | Data architecture + Application architecture cho SCM |
| **D** | Technology Architecture | Kiến trúc công nghệ | Cloud, on-premise, edge, network infrastructure |
| **E** | Opportunities & Solutions | Cơ hội & giải pháp | Gap analysis, migration planning |
| **F** | Migration Planning | Lập kế hoạch chuyển đổi | Lộ trình triển khai ERP, WMS, TMS, Control Tower |
| **G** | Implementation Governance | Quản trị triển khai | Giám sát dự án triển khai SCM systems |
| **H** | Architecture Change Management | Quản lý thay đổi | Cập nhật kiến trúc khi business thay đổi |
| **Requirements Management** | Quản lý yêu cầu | Xuyên suốt tất cả phases | SCM requirements repository |

#### Integration Patterns cho SCM

| Pattern | Mô tả | Ưu điểm | Nhược điểm | Phù hợp khi |
|---------|-------|---------|-----------|-------------|
| **Point-to-Point** | Kết nối trực tiếp giữa 2 hệ thống | Đơn giản, nhanh triển khai | N×(N-1)/2 connections → không scale | ≤ 3 hệ thống |
| **Hub-and-Spoke** | Trung tâm tích hợp (hub) kết nối với các hệ thống (spoke) | Quản lý tập trung, giảm connections | Hub là single point of failure | 4–10 hệ thống |
| **ESB (Enterprise Service Bus)** | Bus trung gian chuyển đổi và định tuyến message | Flexible, loosely coupled | Phức tạp, cần đội ngũ chuyên môn | Enterprise với nhiều legacy systems |
| **API Gateway** | Cổng API quản lý tất cả API calls | Modern, cloud-native, scalable | Cần API-first mindset | Cloud-based SCM, microservices |
| **iPaaS (Integration Platform as a Service)** | Nền tảng tích hợp trên cloud | Managed service, rapid deployment | Chi phí subscription, vendor lock-in | Mid-market, nhanh go-live |

#### ArchiMate cho SCM Integration

ArchiMate cho phép mô hình hóa 3 lớp kiến trúc SCM:

| Layer | Ví dụ SCM |
|-------|----------|
| **Business Layer** | Quy trình Order-to-Cash, Procure-to-Pay, forecast-to-fulfill |
| **Application Layer** | ERP, WMS, TMS, MES, CRM, BI, Control Tower |
| **Technology Layer** | Cloud (AWS/Azure), On-premise servers, IoT gateway, Network |

### 🔧 Cách áp dụng

1. **Architecture Vision (Phase A):** Vẽ bức tranh tổng thể hệ thống SCM mong muốn trong 3–5 năm — bao gồm tất cả applications và integration points.
2. **Gap Analysis:** So sánh current state vs target state → xác định hệ thống cần thêm/thay thế/nâng cấp.
3. **Chọn Integration Pattern phù hợp:** Nếu có < 5 hệ thống → Hub-and-Spoke; nếu > 5 và cloud-first → API Gateway hoặc iPaaS.
4. **ArchiMate Modeling:** Sử dụng ArchiMate vẽ sơ đồ kiến trúc 3 lớp, xác định rõ interfaces giữa các hệ thống.
5. **Migration Roadmap (Phase F):** Lập lộ trình triển khai theo phases — thường ưu tiên ERP (foundation) → WMS/TMS → APS → Control Tower.

### 🏭 Ví dụ thực tế

**Tình huống: VinGroup — Kiến trúc hệ thống SCM tích hợp đa ngành**

VinGroup — tập đoàn đa ngành lớn nhất Việt Nam (bất động sản, sản xuất ô tô, bán lẻ, logistics) — cần kiến trúc SCM phục vụ nhiều business unit:

- **Architecture Vision:** Hệ thống SCM hợp nhất cho VinFast (ô tô), VinCommerce (bán lẻ), VinEco (nông nghiệp) trên nền tảng chung.
- **Integration Pattern:** Chọn mô hình API Gateway + iPaaS, kết nối SAP S/4HANA (core ERP) với WMS (Blue Yonder), TMS, MES (Siemens) qua integration layer.
- **ArchiMate Application Layer:** Mapping 20+ hệ thống với integration flows — ERP ↔ WMS ↔ TMS ↔ MES ↔ Supplier Portal.
- **Migration:** Phase 1 — SAP ERP go-live; Phase 2 — WMS + TMS; Phase 3 — Control Tower + APS.

**PNJ (Phú Nhuận Jewelry) — Integration cho omni-channel:**
- Áp dụng TOGAF thiết kế kiến trúc omni-channel: POS (350+ cửa hàng) ↔ E-commerce ↔ ERP ↔ WMS.
- Sử dụng iPaaS (MuleSoft) làm integration layer, giảm integration effort từ 6 tháng xuống 6 tuần cho mỗi kết nối mới.
- Real-time inventory sync giữa online và offline — customer thấy đúng tồn kho, giảm cancel rate 35%.

---

## 5️⃣ ISO/IEC 27001 — Information Security cho SCM Data

### 📋 Giới thiệu

**ISO/IEC 27001** là tiêu chuẩn quốc tế về **Hệ thống quản lý an ninh thông tin (ISMS — Information Security Management System)**, do **ISO** (International Organization for Standardization) và **IEC** (International Electrotechnical Commission) ban hành. Trong bối cảnh chuỗi cung ứng tích hợp, khi dữ liệu được chia sẻ giữa nhiều bên, ISO 27001 trở thành yêu cầu bắt buộc để bảo vệ thông tin nhạy cảm.

- **Phiên bản hiện tại:** ISO/IEC 27001:2022 (3rd edition)
- **Tổ chức:** ISO/IEC JTC 1/SC 27
- **Bổ trợ:** ISO/IEC 27002:2022 (controls), ISO 27036 (supplier relationships security)
- **Chứng nhận:** Bởi các tổ chức chứng nhận được công nhận (TÜV, BSI, Bureau Veritas...)

### 📖 Nội dung chính

#### ISMS Core — Plan-Do-Check-Act

| Phase | Hoạt động | Áp dụng SCM |
|-------|----------|-------------|
| **Plan** | Xác định phạm vi, đánh giá rủi ro, lập kế hoạch xử lý | Xác định dữ liệu SCM cần bảo vệ: pricing, forecast, supplier info |
| **Do** | Triển khai controls, đào tạo, vận hành | Implement access control, encryption, NDA với NCC |
| **Check** | Giám sát, kiểm toán, đo lường hiệu quả | Audit log review, penetration testing, compliance check |
| **Act** | Cải tiến, khắc phục, cập nhật | Cập nhật controls khi có threat mới (ransomware, supply chain attack) |

#### Các controls quan trọng cho SCM Data

ISO/IEC 27001:2022 Annex A gồm 93 controls trong 4 nhóm. Các controls đặc biệt quan trọng cho SCM:

| Control | Tên | Áp dụng SCM |
|---------|-----|-------------|
| **A.5.19** | Information security in supplier relationships | Yêu cầu bảo mật trong hợp đồng với NCC |
| **A.5.20** | Addressing information security within supplier agreements | NDA, data handling agreements |
| **A.5.21** | Managing information security in ICT supply chain | Bảo mật cho phần mềm và dịch vụ IT từ bên thứ ba |
| **A.8.1** | User endpoint devices | Kiểm soát thiết bị truy cập SCM systems (laptop, mobile, scanner) |
| **A.8.3** | Information access restriction | Phân quyền truy cập: ai được xem pricing, ai được xem forecast |
| **A.8.9** | Configuration management | Quản lý cấu hình ERP, WMS, TMS an toàn |
| **A.8.24** | Use of cryptography | Mã hóa dữ liệu khi truyền qua EDI/API giữa các đối tác |
| **A.8.15** | Logging | Audit trail cho mọi thay đổi trên master data và transactions |

#### Risk Assessment cho Data Sharing trong SCM

| Loại dữ liệu SCM | Mức nhạy cảm | Rủi ro khi bị lộ | Controls đề xuất |
|-------------------|-------------|-----------------|-----------------|
| **Pricing & cost data** | Rất cao | Đối thủ biết giá mua, mất lợi thế đàm phán | Encryption, strict access control, NDA |
| **Demand forecast** | Cao | Đối thủ biết kế hoạch kinh doanh | Role-based access, time-limited sharing |
| **Supplier list & terms** | Cao | Đối thủ cướp NCC, biết cấu trúc chi phí | NDA, anonymization khi có thể |
| **Inventory levels** | Trung bình | Đối thủ biết tình trạng tồn kho | Standard access control |
| **Shipment tracking** | Trung bình | Biết tuyến vận chuyển, nhưng ít nhạy cảm | Standard encryption |
| **Production schedule** | Cao | Biết công suất và kế hoạch sản xuất | Strict access, need-to-know basis |

### 🔧 Cách áp dụng

1. **Phân loại dữ liệu SCM:** Chia thành 3 mức — Confidential (pricing, forecast), Internal (inventory, schedule), Public (product catalog).
2. **Risk Assessment:** Đánh giá rủi ro cho từng loại dữ liệu khi chia sẻ với NCC/khách hàng — likelihood × impact.
3. **Supplier Security Agreement:** Yêu cầu NCC ký cam kết bảo mật dữ liệu, bao gồm NDA và data handling procedures.
4. **Access Control Matrix:** Thiết lập RBAC (Role-Based Access Control) cho SCM systems — ai được xem gì, sửa gì, phê duyệt gì.
5. **Encryption & Audit Trail:** Mã hóa dữ liệu khi truyền (TLS 1.3) và khi lưu (AES-256), bật audit log cho mọi thay đổi.
6. **Incident Response Plan:** Xây dựng quy trình xử lý khi phát hiện data breach liên quan đến dữ liệu SCM.

### 🏭 Ví dụ thực tế

**Tình huống: Samsung Electronics Vietnam — Bảo mật chuỗi cung ứng linh kiện**

Samsung SEV (Bắc Ninh) — nhà máy sản xuất smartphone lớn nhất thế giới — áp dụng ISO 27001 nghiêm ngặt cho chuỗi cung ứng linh kiện:

- **Supplier Security Assessment:** Mỗi NCC tier 1 phải đạt Samsung Security Audit (dựa trên ISO 27001), kiểm tra hàng năm.
- **Data Classification:** BOM, pricing, new product launch data được phân loại "Samsung Confidential" — NCC chỉ thấy phần liên quan đến họ.
- **Clean Room Policy:** NCC tham gia NPI (New Product Introduction) phải ký NDA riêng, làm việc trong phòng cách ly không mang thiết bị cá nhân.
- **EDI Encryption:** Mọi giao dịch EDI giữa Samsung và NCC đều mã hóa end-to-end, audit trail lưu 7 năm.

**Viettel — ISO 27001 cho logistics data:**
- Viettel Post đạt chứng nhận ISO/IEC 27001:2022 cho hệ thống quản lý logistics.
- Dữ liệu khách hàng (địa chỉ, SĐT, nội dung kiện hàng) được mã hóa, chỉ nhân viên giao hàng mới thấy thông tin cần thiết.
- Audit trail ghi nhận mọi lần truy cập dữ liệu đơn hàng, phục vụ điều tra khi có khiếu nại.

---

## 6️⃣ RACI Framework & COBIT 2019 — IT Governance cho SCM

### 📋 Giới thiệu

**RACI Matrix** là công cụ phân công trách nhiệm được chuẩn hóa trong **PMI PMBOK** và **ITIL**, xác định rõ ai Responsible, Accountable, Consulted, Informed cho mỗi hoạt động. **COBIT 2019** (Control Objectives for Information and Related Technologies) do **ISACA** phát hành, là framework quản trị IT toàn diện — đặc biệt phù hợp khi SCM ngày càng phụ thuộc vào hệ thống công nghệ.

- **RACI:** Chuẩn hóa trong PMI PMBOK (7th Edition, 2021) và ITIL 4 (2019)
- **COBIT 2019:** ISACA (Information Systems Audit and Control Association), phát hành 2018
- **Phạm vi COBIT:** 40 governance & management objectives covering IT governance toàn diện
- **Chứng chỉ:** COBIT 2019 Foundation, COBIT 2019 Design & Implementation

### 📖 Nội dung chính

#### RACI Matrix Standard

RACI là viết tắt của 4 vai trò:

| Vai trò | Ý nghĩa | Quy tắc |
|---------|---------|---------|
| **R** — Responsible | Người thực hiện công việc | Có thể có nhiều R cho 1 task |
| **A** — Accountable | Người chịu trách nhiệm cuối cùng, phê duyệt | Chỉ được có **đúng 1** A cho mỗi task |
| **C** — Consulted | Người được hỏi ý kiến trước khi quyết định | Two-way communication |
| **I** — Informed | Người được thông báo sau khi quyết định | One-way communication |

**Quy tắc vàng của RACI:**

- Mỗi hàng (task) **phải có đúng 1 A** — nếu không có → không ai chịu trách nhiệm; nếu > 1 → không rõ ai quyết định.
- Mỗi hàng nên có **ít nhất 1 R** — ai đó phải làm việc.
- Nếu có quá nhiều C → quy trình chậm; quá ít I → thiếu minh bạch.
- Một người có thể vừa R vừa A (R/A) cho task đơn giản.

#### COBIT 2019 — Governance System cho SCM IT

COBIT 2019 chia thành 2 nhóm objectives:

**Governance Objectives (EDM — Evaluate, Direct, Monitor):**

| Objective | Tên | Áp dụng SCM |
|-----------|-----|-------------|
| EDM01 | Ensured Governance Framework | Thiết lập governance framework cho SCM IT |
| EDM02 | Ensured Benefits Delivery | Đo ROI của ERP, WMS, TMS investments |
| EDM03 | Ensured Risk Optimization | Quản lý rủi ro cho SCM systems |
| EDM04 | Ensured Resource Optimization | Tối ưu nguồn lực IT cho SCM |
| EDM05 | Ensured Stakeholder Engagement | Đảm bảo sự tham gia của business users |

**Management Objectives liên quan SCM:**

| Objective | Tên | Áp dụng SCM |
|-----------|-----|-------------|
| APO06 | Managed Budget and Costs | Budget cho SCM technology roadmap |
| APO09 | Managed Service Level Agreements | SLA giữa IT và SC operations |
| BAI02 | Managed Requirements Definition | Requirements cho ERP/WMS/TMS projects |
| BAI06 | Managed IT Changes | Change management cho SCM systems |
| DSS01 | Managed Operations | Vận hành hàng ngày các hệ thống SCM |
| DSS02 | Managed Service Requests and Incidents | Xử lý sự cố hệ thống SCM |
| MEA01 | Managed Performance and Conformance Monitoring | Theo dõi performance của SCM IT systems |

#### Governance Meeting Cadence Best Practices

| Tần suất | Cuộc họp | Người tham gia | Nội dung | RACI |
|----------|---------|---------------|---------|------|
| **Daily** | Operational Standup | Operations team, warehouse, transport | Exceptions hôm qua, kế hoạch hôm nay | R: Operations, A: SC Manager |
| **Weekly** | Tactical Review | SC Manager, Planning, Procurement, Logistics | KPIs tuần, short-term issues, action items | R: SC Manager, A: SC Director |
| **Monthly** | S&OP/IBP Meeting | Cross-functional leaders, Finance | Demand-supply alignment, P&L impact | R: Planning, A: VP Supply Chain |
| **Quarterly** | Strategic Review | C-suite, VP Supply Chain | SC strategy progress, investment decisions | R: VP SC, A: CEO/COO |
| **Annually** | SC Strategy Refresh | Board, C-suite, SC Leadership | Long-term strategy, network design, major capex | R: SC Leadership, A: Board |

#### Escalation Procedures

| Level | Thời gian | Escalate đến | Ví dụ |
|-------|----------|-------------|-------|
| **L1** | Ngay lập tức | Team Lead | Order không xuất được, system error nhỏ |
| **L2** | Trong 4 giờ | Manager | NCC delay > 3 ngày, quality issue ảnh hưởng nhiều đơn |
| **L3** | Trong 24 giờ | Director | Disruption ảnh hưởng > 10% đơn hàng, system outage > 4h |
| **L4** | Trong 48 giờ | VP/C-suite | Major disruption (thiên tai, NCC chính phá sản), data breach |

### 🔧 Cách áp dụng

1. **Xây dựng RACI cho SCM processes:** Liệt kê tất cả quy trình SCM → gán R, A, C, I cho từng phòng ban — đảm bảo mỗi hàng có đúng 1 A.
2. **Thiết lập Governance Calendar:** Định nghĩa meeting cadence (Daily → Weekly → Monthly → Quarterly → Annually) với agenda, participants, deliverables rõ ràng.
3. **Áp dụng COBIT cho SCM IT:** Đánh giá maturity 7 management objectives liên quan SCM IT → xây dựng improvement roadmap.
4. **Escalation Matrix:** Định nghĩa rõ 4 levels escalation, thời gian phản hồi, người quyết định — in và dán tại phòng operations.
5. **SLA giữa IT và SC Operations:** Thiết lập SLA cho system uptime (99.5%), response time (< 2s), data refresh (< 15 min).
6. **Review & Update:** RACI và governance model phải được review hàng quý — cập nhật khi có thay đổi tổ chức hoặc quy trình.

### 🏭 Ví dụ thực tế

**Tình huống: Thế Giới Di Động (MWG) — Governance cho hệ thống SCM đa kênh**

MWG — nhà bán lẻ lớn nhất Việt Nam (Thế Giới Di Động, Điện Máy Xanh, Bách Hóa Xanh) — với hệ thống 5.000+ cửa hàng cần governance chặt chẽ:

- **RACI Matrix:** Phân công rõ ràng cho quy trình replenishment — Planning (R) đề xuất, Category Manager (A) phê duyệt, Store (I) nhận hàng.
- **Daily Standup:** 7:30 sáng — Operations review tồn kho, đơn hàng lỗi, delivery exceptions tại từng cụm cửa hàng.
- **Weekly Review:** KPIs: fill rate, stockout rate, shrinkage — escalate nếu stockout > 5% tại bất kỳ category nào.
- **Monthly S&OP:** Cross-functional (Commercial + Supply Chain + Finance) cân bằng cung-cầu cho tháng tiếp theo.
- **Escalation:** Nếu hệ thống POS down > 30 phút → L3 (IT Director); > 2 giờ → L4 (CTO).

**FPT Software — COBIT cho managed services SCM:**
- Áp dụng COBIT 2019 cho dịch vụ managed SCM operations — quản lý ERP, WMS cho khách hàng doanh nghiệp.
- SLA: system availability 99.9%, incident response < 15 phút, data backup daily.
- RACI matrix cho mỗi dịch vụ — rõ ràng trách nhiệm giữa FPT (delivery) và khách hàng (business owner).

---

## 📊 Ma trận tiêu chuẩn × chủ đề Buổi 11

| Tiêu chuẩn / Framework | Integration (End-to-End) | Tech Stack | Data Quality | Control Tower | RACI / Cross-functional | Governance |
|------------------------|:------------------------:|:----------:|:------------:|:-------------:|:----------------------:|:----------:|
| **SCOR — Enable (sE)** | ✅✅ | ✅ | ✅ | ◐ | ✅ | ✅ |
| **DAMA-DMBOK2** | ✅ | ◐ | ✅✅ | ◐ | ◐ | ✅ |
| **Gartner Control Tower** | ✅ | ✅✅ | ✅ | ✅✅ | ◐ | ◐ |
| **TOGAF / ArchiMate** | ✅✅ | ✅✅ | ◐ | ◐ | ◐ | ✅ |
| **ISO/IEC 27001** | ◐ | ✅ | ✅ | ◐ | ◐ | ✅ |
| **RACI & COBIT 2019** | ◐ | ✅ | ◐ | ◐ | ✅✅ | ✅✅ |

> ✅✅ = Trực tiếp & chuyên sâu · ✅ = Liên quan chặt · ◐ = Liên quan một phần · — = Ít liên quan

---

## ✅ Checklist áp dụng

### Integration & Architecture

- [ ] Đánh giá mức độ tích hợp hiện tại (Internal → External → Network → Ecosystem) bằng maturity model
- [ ] Vẽ sơ đồ kiến trúc hệ thống SCM hiện tại (current state) — liệt kê tất cả applications và integration points
- [ ] Thiết kế target state architecture với integration pattern phù hợp (Hub-and-Spoke, API Gateway, hoặc iPaaS)
- [ ] Lập migration roadmap 3 năm với milestones rõ ràng cho từng phase

### Data Quality & Management

- [ ] Đo 6 Data Quality dimensions cho Item Master, Supplier Master, Inventory data — baseline hiện tại
- [ ] Chỉ định Data Owner cho mỗi master data entity (Item, Customer, Supplier, BOM, Location)
- [ ] Thiết lập Data Governance Council họp hàng tháng với agenda cố định
- [ ] Triển khai data quality dashboard với ngưỡng cảnh báo (Accuracy < 98%, Completeness < 95%)

### Control Tower & Visibility

- [ ] Kết nối ERP + WMS + TMS vào một dashboard trung tâm — đạt Level 1 Visibility
- [ ] Xác định 3 use cases ưu tiên cho Control Tower (transportation visibility, disruption management, inventory balancing)
- [ ] Thiết lập alert rules cho top 10 exceptions thường gặp

### Governance & Cross-functional

- [ ] Xây dựng RACI Matrix cho tất cả quy trình SCM chính — đảm bảo mỗi task có đúng 1 Accountable
- [ ] Thiết lập Governance Calendar: Daily standup → Weekly tactical → Monthly S&OP → Quarterly strategic
- [ ] Định nghĩa Escalation Matrix 4 levels với thời gian phản hồi cụ thể
- [ ] Review và cập nhật RACI hàng quý hoặc khi có thay đổi tổ chức

### Security & Compliance

- [ ] Phân loại dữ liệu SCM theo 3 mức nhạy cảm (Confidential, Internal, Public)
- [ ] Yêu cầu NCC tier 1 ký Supplier Security Agreement bao gồm NDA và data handling procedures
- [ ] Thiết lập RBAC (Role-Based Access Control) cho tất cả SCM systems — audit hàng quý

---

## 🔗 Đọc thêm

[Xem bài giảng đầy đủ →](/guide/buoi-11)

### Tài liệu tham khảo

| # | Tài liệu | Tác giả / Tổ chức | Năm |
|---|---------|-------------------|-----|
| 1 | *SCOR Digital Standard (SCOR-DS)* | ASCM | 2022 |
| 2 | *DAMA-DMBOK2: Data Management Body of Knowledge* (2nd Edition) | DAMA International | 2017 |
| 3 | *Gartner Magic Quadrant for Supply Chain Planning Solutions* | Gartner | 2024 |
| 4 | *Gartner Hype Cycle for Supply Chain Execution Technologies* | Gartner | 2024 |
| 5 | *TOGAF Standard, 10th Edition* | The Open Group | 2022 |
| 6 | *ArchiMate 3.2 Specification* | The Open Group | 2023 |
| 7 | *ISO/IEC 27001:2022 — Information Security Management Systems* | ISO/IEC | 2022 |
| 8 | *ISO/IEC 27036 — Information Security for Supplier Relationships* | ISO/IEC | 2021 |
| 9 | *COBIT 2019 Framework: Governance and Management Objectives* | ISACA | 2018 |
| 10 | *PMBOK Guide, 7th Edition* | Project Management Institute (PMI) | 2021 |
| 11 | *ITIL 4: Digital and IT Strategy* | Axelos / PeopleCert | 2019 |
| 12 | *Supply Chain Control Towers* (Logistics Management) | Dwight Klappich, Gartner | 2023 |
