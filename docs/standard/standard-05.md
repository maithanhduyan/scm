---
outline: [2, 3]
title: "Tiêu chuẩn 5: Phân phối — SCOR sD, ECR, DSD "
description: "SCOR sD (Deliver), ECR, DSD, Omnichannel và tiêu chuẩn quốc tế về thiết kế mạng lưới phân phối."
head:
  - - meta
    - property: og:title
      content: "Tiêu chuẩn quốc tế: Kênh phân phối"
---

# 📏 Tiêu chuẩn Buổi 5: Xây dựng & quản lý kênh phân phối

> Buổi 5 tập trung vào tối ưu hệ thống phân phối — từ lựa chọn mô hình kênh, thiết kế mạng lưới kho bãi, cân nhắc D2C hay Distributor, đến vận hành omnichannel và giao hàng chặng cuối. Dưới đây là các tiêu chuẩn quốc tế, framework và phương pháp luận nền tảng giúp doanh nghiệp xây dựng hệ thống phân phối hiệu quả, linh hoạt và bền vững.

---

## 1. SCOR Model — Deliver (D) Process

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Supply Chain Operations Reference (SCOR) Model — Deliver Process |
| **Tổ chức ban hành** | ASCM (Association for Supply Chain Management), kế thừa từ Supply Chain Council (SCC) |
| **Phiên bản hiện hành** | SCOR Digital Standard (DS) — phiên bản số hóa, cập nhật liên tục (kế thừa SCOR 12.0) |
| **Phạm vi** | Quy trình phân phối và giao hàng — từ nhận đơn đến giao sản phẩm cho khách hàng |

SCOR Model là **framework chuẩn hóa chuỗi cung ứng được sử dụng rộng rãi nhất thế giới**, bao gồm 6 quy trình cốt lõi: Plan, Source, Make, Deliver, Return và Enable. Quy trình **Deliver (D)** đặc biệt quan trọng cho buổi học về kênh phân phối — nó cung cấp cấu trúc phân rã chi tiết cho toàn bộ hoạt động phân phối, từ xử lý đơn hàng, quản lý kho, đến vận chuyển và giao nhận.

### 📖 Nội dung chính

**Phân rã quy trình Deliver — 3 chế độ:**

| Quy trình | Mô tả | Kênh phân phối phù hợp |
|---|---|---|
| **D1 — Deliver Stocked Product** | Giao hàng từ tồn kho có sẵn (Make-to-Stock) | Distributor, Retail, Omnichannel |
| **D2 — Deliver Make-to-Order Product** | Giao hàng theo đơn đặt hàng (Make-to-Order) | D2C, B2B, E-commerce |
| **D3 — Deliver Engineer-to-Order Product** | Giao hàng sản phẩm thiết kế theo yêu cầu | Direct, dự án đặc thù |

**Các quy trình con (subprocess) của D1 — Deliver Stocked Product:**
1. **D1.1** — Process Inquiry & Quote: Tiếp nhận yêu cầu, báo giá
2. **D1.2** — Receive, Configure, Enter & Validate Order: Nhận và xác nhận đơn hàng
3. **D1.3** — Reserve Inventory & Determine Delivery Date: Giữ hàng, xác định ngày giao
4. **D1.4** — Consolidate Orders: Gộp đơn hàng để tối ưu vận chuyển
5. **D1.5** — Build Loads: Xây dựng lô hàng vận chuyển
6. **D1.6** — Route Shipments: Lên tuyến giao hàng
7. **D1.7** — Select Carriers & Rate Shipments: Chọn đơn vị vận chuyển, tính cước
8. **D1.8** — Receive Product from Source or Make: Nhận hàng từ sản xuất/kho nguồn
9. **D1.9** — Pick Product: Lấy hàng tại kho
10. **D1.10** — Pack Product: Đóng gói
11. **D1.11** — Load Vehicle & Generate Shipping Documentation: Xếp hàng lên xe, xuất chứng từ
12. **D1.12** — Ship Product: Vận chuyển
13. **D1.13** — Receive & Verify Product by Customer: Khách hàng nhận và kiểm tra
14. **D1.14** — Install Product: Lắp đặt (nếu áp dụng)
15. **D1.15** — Invoice: Xuất hóa đơn

**Metrics quan trọng trong Deliver:**

| Metric | Định nghĩa | Benchmark tốt |
|---|---|---|
| **Perfect Order Fulfillment (POF)** | % đơn hàng giao đúng sản phẩm, đúng số lượng, đúng thời gian, đúng chứng từ, không hư hỏng | > 90% |
| **Order Fulfillment Cycle Time (OFCT)** | Thời gian từ nhận đơn đến giao hàng thành công | Tùy ngành (FMCG: 24-48h) |
| **Fill Rate** | % đơn hàng được đáp ứng ngay từ tồn kho có sẵn | > 95% |
| **Delivery Performance to Customer Commit Date** | % đơn giao đúng ngày cam kết | > 95% |

### 🔧 Cách áp dụng

1. **Map hiện trạng**: Vẽ sơ đồ quy trình phân phối hiện tại theo cấu trúc SCOR Deliver (D1/D2/D3) — xác định doanh nghiệp đang ở chế độ nào
2. **Đo lường baseline**: Thu thập dữ liệu POF, OFCT, Fill Rate hiện tại để làm cơ sở so sánh
3. **Benchmark**: So sánh metrics với dữ liệu benchmark ngành từ ASCM SCOR Benchmarking Database
4. **Gap analysis**: Xác định quy trình con nào đang là bottleneck (ví dụ: D1.6 Route Shipments kém → giao chậm)
5. **Cải tiến có mục tiêu**: Ưu tiên cải tiến các subprocess có gap lớn nhất, gắn KPI cụ thể

### 🏭 Ví dụ thực tế

**Vinamilk** áp dụng framework SCOR Deliver để chuẩn hóa quy trình phân phối cho mạng lưới hơn 220.000 điểm bán trên toàn quốc. Với mô hình D1 (Deliver Stocked Product) làm chủ đạo, Vinamilk thiết kế hệ thống gồm 3 mega-warehouse tại Hà Nội, Đà Nẵng và TP.HCM, kết hợp hơn 20 kho vùng. Metric **Perfect Order Fulfillment** được theo dõi hàng ngày trên dashboard tập trung. Nhờ chuẩn hóa subprocess D1.6 (Route Shipments) bằng thuật toán tối ưu tuyến, Vinamilk giảm 15% chi phí vận chuyển nội thành và đảm bảo **OFCT dưới 24h** cho khu vực thành phố lớn.

---

## 2. GS1 Standards — Supply Chain Visibility

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | GS1 System of Standards — Bộ tiêu chuẩn toàn cầu cho nhận diện, thu thập dữ liệu và chia sẻ thông tin chuỗi cung ứng |
| **Tổ chức ban hành** | GS1 (Global Standards One) — tổ chức phi lợi nhuận, trụ sở Brussels, Bỉ |
| **Đại diện tại Việt Nam** | GS1 Việt Nam (trực thuộc Tổng cục Tiêu chuẩn Đo lường Chất lượng) |
| **Phạm vi** | Nhận diện sản phẩm, địa điểm, tài sản; truy xuất nguồn gốc; chia sẻ dữ liệu xuyên kênh |

GS1 là **hệ thống tiêu chuẩn được sử dụng rộng rãi nhất trong ngành bán lẻ và FMCG toàn cầu**, với hơn 2 triệu tổ chức thành viên tại hơn 116 quốc gia. Trong bối cảnh omnichannel, GS1 đóng vai trò nền tảng cho **unified inventory visibility** — khả năng nhìn thấy hàng hóa xuyên suốt mọi kênh phân phối.

### 📖 Nội dung chính

**Các tiêu chuẩn GS1 cốt lõi cho phân phối:**

| Tiêu chuẩn | Chức năng | Ứng dụng trong phân phối |
|---|---|---|
| **GTIN (Global Trade Item Number)** | Mã nhận diện sản phẩm toàn cầu (barcode EAN-13, UPC) | Quản lý SKU xuyên kênh, POS scanning |
| **GS1-128** | Barcode logistics chứa thông tin lô, hạn sử dụng, số serial | Quản lý kho, receiving, shipping |
| **GS1 DataMatrix** | Mã 2D chứa nhiều thông tin hơn barcode truyền thống | Truy xuất nguồn gốc, serialization |
| **SSCC (Serial Shipping Container Code)** | Mã nhận diện đơn vị logistics (pallet, thùng) | Cross-docking, warehouse management |
| **GLN (Global Location Number)** | Mã nhận diện địa điểm (kho, cửa hàng, nhà máy) | Định danh điểm phân phối, EDI |
| **EPCIS (Electronic Product Code Information Services)** | Framework chia sẻ sự kiện chuỗi cung ứng (What, Where, When, Why) | Truy xuất hàng hóa xuyên kênh real-time |

**EPCIS — 4 chiều dữ liệu sự kiện:**
- **What**: Sản phẩm/đơn vị logistics nào? (GTIN, SSCC)
- **Where**: Ở đâu? (GLN — kho, cửa hàng, xe vận chuyển)
- **When**: Khi nào? (Timestamp chính xác)
- **Why**: Vì sao? (Business step: shipping, receiving, selling)

### 🔧 Cách áp dụng

1. **Đăng ký mã GS1**: Liên hệ GS1 Việt Nam để đăng ký mã doanh nghiệp (GCP — GS1 Company Prefix) và cấp GTIN cho sản phẩm
2. **Triển khai GLN**: Gán mã GLN cho từng điểm phân phối — kho, cửa hàng, trung tâm cross-docking
3. **SSCC cho logistics**: Gắn SSCC cho mỗi pallet/thùng hàng xuất kho — tracking đơn vị vận chuyển xuyên chuỗi
4. **EPCIS cho visibility**: Triển khai EPCIS server để ghi nhận sự kiện di chuyển hàng hóa tại từng node — tạo **digital twin** của dòng hàng
5. **Tích hợp omnichannel**: Kết nối dữ liệu GS1 với OMS (Order Management System) để unified inventory view — biết hàng ở đâu, bao nhiêu, real-time

### 🏭 Ví dụ thực tế

**Thế Giới Di Động (MWG)** là một trong những doanh nghiệp bán lẻ Việt Nam áp dụng GS1 hiệu quả nhất cho hệ thống omnichannel. Với hơn 5.000 cửa hàng (Thế Giới Di Động, Điện Máy Xanh, Bách Hóa Xanh), MWG sử dụng **GTIN** cho toàn bộ SKU, **GLN** để định danh mỗi cửa hàng và kho, kết hợp hệ thống **Unified Inventory** cho phép khách hàng đặt online và nhận tại cửa hàng gần nhất (BOPIS — Buy Online, Pick Up In Store). Hệ thống tracking nội bộ dựa trên nguyên lý EPCIS giúp MWG biết chính xác sản phẩm đang ở kho nào, cửa hàng nào, đang vận chuyển hay đã giao — tạo nền tảng cho **ship-from-store** khi kho trung tâm hết hàng.

---

## 3. CSCMP — Distribution Best Practices

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | CSCMP Distribution Management Best Practices & Network Optimization Methodologies |
| **Tổ chức ban hành** | Council of Supply Chain Management Professionals (CSCMP), Hoa Kỳ |
| **Năm thành lập** | 1963 (tiền thân: National Council of Physical Distribution Management) |
| **Phạm vi** | Best practices về quản lý phân phối, thiết kế mạng lưới, warehouse-to-customer delivery |

CSCMP là **tổ chức nghề nghiệp hàng đầu thế giới về quản lý chuỗi cung ứng**, với hơn 10.000 thành viên toàn cầu. CSCMP xuất bản hàng năm báo cáo **State of Logistics Report** và cung cấp các framework, methodology về network design và distribution management được coi là chuẩn mực ngành.

### 📖 Nội dung chính

**Network Optimization Methodologies:**

**a. Center-of-Gravity Model (Mô hình trọng tâm):**
- Phương pháp toán học xác định vị trí kho tối ưu dựa trên tọa độ điểm cầu và khối lượng hàng
- Công thức: $x^* = \frac{\sum_i d_i \cdot x_i}{\sum_i d_i}$, $y^* = \frac{\sum_i d_i \cdot y_i}{\sum_i d_i}$ (với $d_i$ = nhu cầu, $x_i, y_i$ = tọa độ)
- Áp dụng cho bài toán: đặt kho ở đâu tại Việt Nam để tối thiểu chi phí vận chuyển?

**b. Mixed Integer Linear Programming (MILP):**
- Tối ưu hóa đồng thời: số lượng kho, vị trí, phân bổ sản phẩm, vùng phục vụ
- Ràng buộc: capacity kho, service level commitment, budget
- Sử dụng solver: CPLEX, Gurobi, hoặc công cụ SCM chuyên dụng (Llamasoft, Coupa)

**c. Warehouse-to-Customer Delivery Standards:**

| Tiêu chí | Best Practice |
|---|---|
| **Order Cycle Time** | Nhận đơn → xuất kho trong 2-4 giờ |
| **Picking Accuracy** | > 99.5% (6-sigma target: 99.99966%) |
| **Dock-to-Stock** | Hàng nhập kho xử lý trong < 24h |
| **On-Time Shipment** | > 98% đơn xuất đúng giờ cam kết |
| **Damage Rate** | < 0.1% hàng hóa hư hỏng trong quá trình xử lý |

**d. Distribution Network Archetypes:**

| Mô hình | Đặc điểm | Phù hợp cho |
|---|---|---|
| **Centralized** | 1-2 mega-warehouse, ship toàn quốc | E-commerce, sản phẩm giá trị cao |
| **Decentralized** | Nhiều kho vùng, phủ gần khách hàng | FMCG, hàng tươi sống |
| **Hub-and-Spoke** | Kho trung tâm + kho vệ tinh | Kết hợp tối ưu chi phí & tốc độ |
| **Cross-Dock** | Hàng chuyển thẳng, không lưu kho | Hàng fast-moving, fresh logistics |

### 🔧 Cách áp dụng

1. **Data Collection**: Thu thập dữ liệu nhu cầu theo vùng (63 tỉnh thành VN), chi phí vận chuyển, chi phí kho bãi theo khu vực
2. **Center-of-Gravity Analysis**: Chạy mô hình trọng tâm để xác định vị trí kho ưu tiên — tại Việt Nam thường ra 3 điểm: Bắc (Hà Nội/Bắc Ninh), Trung (Đà Nẵng), Nam (TP.HCM/Bình Dương)
3. **Scenario Modeling**: Mô phỏng nhiều kịch bản: 3 kho, 5 kho, 7 kho — so sánh trade-off chi phí vận chuyển vs chi phí tồn kho vs service level
4. **Service Level Mapping**: Xác định vùng 24h, 48h, 72h cho từng kịch bản
5. **TCO Analysis (Total Cost of Ownership)**: Tính tổng chi phí bao gồm: vận chuyển inbound/outbound, warehouse operations, tồn kho (safety stock × số kho), mất mát, hư hỏng

### 🏭 Ví dụ thực tế

**Masan Consumer** áp dụng network optimization methodology khi tái cấu trúc mạng lưới phân phối. Với danh mục sản phẩm FMCG đa dạng (mì gói, nước mắm, cà phê, thịt chế biến), Masan sử dụng mô hình Center-of-Gravity kết hợp MILP để tối ưu mạng lưới kho từ nhiều kho nhỏ phân tán sang mô hình **Hub-and-Spoke**: 3 hub lớn tại Hà Nội, Đà Nẵng, TP.HCM kết hợp hơn 10 kho vệ tinh phủ các vùng. Mô hình mới giúp giảm 20% chi phí logistics tổng thể trong khi duy trì **delivery SLA 48h** cho 80% đơn hàng toàn quốc. Hệ thống phân phối tích hợp dọc từ WinCommerce (WinMart, WinMart+) tạo lợi thế kênh riêng, kết hợp distributor bên ngoài để phủ kênh truyền thống.

---

## 4. ISO 28000:2022 — Security Management for Supply Chain

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | ISO 28000:2022 — Security and Resilience — Security Management Systems — Requirements |
| **Tổ chức ban hành** | International Organization for Standardization (ISO) |
| **Năm ban hành** | 2022 (phiên bản mới nhất, thay thế ISO 28000:2007) |
| **Phạm vi** | Quản lý an ninh chuỗi cung ứng — bao gồm vận chuyển, phân phối, lưu kho |

ISO 28000:2022 là tiêu chuẩn quốc tế cho **hệ thống quản lý an ninh chuỗi cung ứng** — đặc biệt quan trọng trong khâu phân phối, nơi hàng hóa di chuyển qua nhiều node và tiếp xúc với nhiều bên trung gian. Phiên bản 2022 được cập nhật theo cấu trúc Harmonized Structure (Annex SL) của ISO, tương thích với ISO 9001, ISO 14001 và dễ dàng tích hợp vào hệ thống quản lý tổng thể.

### 📖 Nội dung chính

**Cấu trúc ISO 28000:2022 (theo Annex SL):**

| Điều khoản | Nội dung | Liên quan phân phối |
|---|---|---|
| **Clause 4** — Context of Organization | Hiểu bối cảnh, bên liên quan, phạm vi | Xác định các node phân phối, đối tác logistics |
| **Clause 5** — Leadership | Cam kết lãnh đạo, chính sách an ninh | Chính sách an ninh cho mạng lưới phân phối |
| **Clause 6** — Planning | Đánh giá rủi ro an ninh, mục tiêu | Risk assessment cho từng tuyến, kho, kênh |
| **Clause 7** — Support | Nguồn lực, năng lực, nhận thức | Đào tạo an ninh cho nhân viên kho, tài xế |
| **Clause 8** — Operation | Kiểm soát vận hành, chain of custody | Kiểm soát hàng hóa xuyên chuỗi phân phối |
| **Clause 9** — Performance Evaluation | Giám sát, đo lường, đánh giá nội bộ | KPIs an ninh: shrinkage rate, theft incident |
| **Clause 10** — Improvement | Cải tiến liên tục | Cải tiến quy trình an ninh phân phối |

**Chain of Custody (Chuỗi bảo quản) — kiểm soát luồng hàng:**
- **Seal Management**: Quản lý niêm phong container/xe — nguyên vẹn từ xuất kho đến giao hàng
- **Proof of Delivery (POD)**: Chứng từ giao hàng có chữ ký, ảnh chụp, timestamp
- **Handover Protocol**: Quy trình bàn giao hàng giữa các bên — driver → warehouse, warehouse → driver, driver → customer
- **GPS Tracking**: Theo dõi phương tiện vận chuyển real-time
- **Access Control**: Kiểm soát ra vào kho, khu vực lưu trữ

### 🔧 Cách áp dụng

1. **Risk Assessment**: Đánh giá rủi ro an ninh cho từng node trong mạng lưới phân phối — kho, tuyến vận chuyển, điểm giao nhận
2. **Chain of Custody SOP**: Xây dựng quy trình bàn giao hàng hóa chuẩn — mỗi lần hàng chuyển tay phải có ký nhận, ghi nhận hệ thống
3. **Seal Protocol**: Triển khai niêm phong điện tử (e-seal) hoặc niêm phong có mã serial cho mọi chuyến hàng
4. **Fleet Tracking**: Lắp GPS và camera hành trình cho đội xe phân phối
5. **Audit & Compliance**: Đánh giá an ninh định kỳ cho kho và đối tác logistics bên thứ 3 (3PL)

### 🏭 Ví dụ thực tế

**Viettel Post** áp dụng các nguyên tắc ISO 28000 trong quản lý an ninh mạng lưới phân phối hàng hóa. Với hơn 2.000 điểm giao dịch và hàng trăm tuyến vận chuyển, Viettel Post triển khai **chain of custody** số hóa — mỗi bưu kiện được scan barcode tại tất cả các điểm chuyển tiếp (nhận hàng → hub → hub → phát hàng), tạo audit trail đầy đủ. Hệ thống **GPS tracking** toàn bộ đội xe, kết hợp **e-POD** (electronic Proof of Delivery) với ảnh chụp và chữ ký điện tử, giúp giảm tỷ lệ thất thoát (shrinkage) xuống dưới 0.01% và xử lý khiếu nại nhanh hơn 60%.

---

## 5. CPFR — Collaborative Planning, Forecasting and Replenishment

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Collaborative Planning, Forecasting and Replenishment (CPFR®) |
| **Tổ chức ban hành** | GS1 US (kế thừa từ VICS — Voluntary Interindustry Commerce Solutions) |
| **Phiên bản** | CPFR Model Version 2.0 (2004), được GS1 duy trì và cập nhật |
| **Phạm vi** | Framework hợp tác giữa nhà sản xuất (manufacturer) và nhà phân phối/bán lẻ (distributor/retailer) trong lập kế hoạch, dự báo và bổ sung hàng |

CPFR là **framework tiêu chuẩn cho hợp tác giữa các đối tác trong kênh phân phối** — giải quyết vấn đề Bullwhip Effect (hiệu ứng roi da) khi thông tin bị bóp méo qua nhiều tầng phân phối. CPFR đặc biệt phù hợp cho mô hình 2-Tier và 3-Tier, nơi nhà sản xuất cần phối hợp chặt chẽ với distributor để đảm bảo hàng đúng nơi, đúng lúc, đúng số lượng.

### 📖 Nội dung chính

**9 bước CPFR — chia thành 4 giai đoạn:**

| Giai đoạn | Bước | Nội dung |
|---|---|---|
| **Strategy & Planning** | 1. Collaboration Arrangement | Thiết lập thỏa thuận hợp tác: mục tiêu, phạm vi, KPIs, quy tắc chia sẻ dữ liệu |
| | 2. Joint Business Plan | Xây dựng kế hoạch kinh doanh chung: promotions, product launches, category plans |
| **Demand & Supply Management** | 3. Sales Forecasting | Tạo dự báo bán hàng — chia sẻ POS data, market intelligence |
| | 4. Order Planning/Forecasting | Chuyển dự báo bán hàng thành kế hoạch đặt hàng — tính lead time, MOQ |
| | 5. Exception Management (Demand) | Xử lý ngoại lệ phía cầu: forecast variance, promotional uplift bất thường |
| | 6. Exception Management (Supply) | Xử lý ngoại lệ phía cung: capacity constraint, supply disruption |
| **Execution** | 7. Order Generation | Tạo đơn hàng bổ sung (replenishment order) — có thể tự động hóa |
| | 8. Order Fulfillment | Thực hiện đơn hàng: picking, shipping, delivery |
| **Analysis** | 9. Exception Management (Execution) | Phân tích kết quả, xử lý sai lệch, cải tiến cho chu kỳ tiếp theo |

**Mô hình chia sẻ dữ liệu trong CPFR:**
- **POS Data Sharing**: Nhà bán lẻ chia sẻ dữ liệu bán hàng thực tế với nhà sản xuất
- **Inventory Visibility**: Chia sẻ mức tồn kho tại mỗi node trong kênh
- **Promotion Calendar**: Đồng bộ lịch khuyến mãi để dự báo chính xác hơn
- **Forecast Collaboration**: Cùng thống nhất con số dự báo thay vì mỗi bên dự báo riêng

### 🔧 Cách áp dụng

1. **Chọn đối tác pilot**: Chọn 1-2 distributor/retailer chiến lược có sẵn hệ thống IT và willingness hợp tác
2. **Ký thỏa thuận CPFR**: Xác định rõ: dữ liệu nào chia sẻ, tần suất, format, trách nhiệm mỗi bên
3. **Bắt đầu từ Sales Forecasting**: Chia sẻ POS data và cùng tạo consensus forecast — giảm forecast error 20-30%
4. **Tự động hóa Replenishment**: Khi forecast chính xác, tiến tới VMI (Vendor Managed Inventory) — nhà sản xuất chủ động bổ sung hàng cho distributor
5. **Mở rộng dần**: Từ pilot thành công, nhân rộng ra các đối tác khác và thêm nhiều category sản phẩm

### 🏭 Ví dụ thực tế

**Unilever Việt Nam** triển khai CPFR với các nhà phân phối lớn và hệ thống siêu thị (Co.opMart, Big C/GO!, WinMart). Unilever chia sẻ **promotion calendar** 3 tháng trước với distributor để chuẩn bị tồn kho tăng 200-300% cho các đợt khuyến mãi lớn (Tết, Back-to-School). Dữ liệu POS từ siêu thị được tích hợp vào hệ thống SAP APO để tạo **consensus forecast**, sau đó tự động generate replenishment order cho các kho distributor. Kết quả: giảm 25% tình trạng out-of-stock tại điểm bán, giảm 18% excess inventory tại kho distributor, và cải thiện **Fill Rate** từ 92% lên 97%.

---

## 6. Last-Mile Delivery Standards & Frameworks

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tiêu chuẩn chính** | ISO 14083:2023 — Quantification and reporting of greenhouse gas emissions arising from transport chain operations |
| **Tiêu chuẩn bổ sung** | CEN/TC 320 — European Committee for Standardization, Transport — Logistics and Services |
| **Tổ chức** | ISO, CEN (European Committee for Standardization) |
| **Phạm vi** | Giao hàng chặng cuối — tiêu chuẩn vận hành, đo lường hiệu suất, phát thải carbon |

Last-mile delivery (giao hàng chặng cuối) chiếm **40-53% tổng chi phí logistics** và là khâu phức tạp nhất trong chuỗi phân phối. Với sự bùng nổ của e-commerce và omnichannel, việc chuẩn hóa last-mile trở nên cấp thiết — không chỉ về hiệu suất vận hành mà còn về tác động môi trường.

### 📖 Nội dung chính

**ISO 14083:2023 — Quantification of GHG Emissions from Transport:**
- Phương pháp luận tính toán phát thải khí nhà kính (GHG) cho từng chặng vận chuyển
- Phân loại Transport Chain Elements (TCE): vehicle operation, hub operation, empty trips
- Allocation methods: phân bổ phát thải cho từng đơn hàng/kiện hàng
- Áp dụng cho: báo cáo carbon footprint của hoạt động delivery, so sánh phương thức giao hàng

**CEN/TC 320 — Transport Logistics Standards:**
- EN 13876 — Transport quality management
- EN 15696 — Performance measurement in freight transport
- Các tiêu chuẩn về documentation, liability, quality trong vận tải hàng hóa

**KPIs cốt lõi cho Last-Mile Delivery:**

| KPI | Định nghĩa | Benchmark |
|---|---|---|
| **Delivery Success Rate (First Attempt)** | % giao thành công lần đầu | > 90% |
| **Cost Per Delivery** | Chi phí trung bình mỗi đơn giao | Tùy thị trường (VN: 15.000-40.000 VNĐ) |
| **Average Delivery Time** | Thời gian trung bình từ xuất kho đến giao xong | Nội thành: 2-4h; liên tỉnh: 24-48h |
| **Carbon Footprint per Parcel** | Lượng CO₂ phát thải trên mỗi kiện hàng | Mục tiêu giảm 30% đến 2030 |
| **Customer Satisfaction (CSAT)** | Điểm hài lòng khách hàng về delivery | > 4.5/5 |
| **Vehicle Utilization Rate** | Tỷ lệ sử dụng capacity xe | > 75% |

**Mô hình last-mile phổ biến:**

| Mô hình | Mô tả | Ưu điểm | Nhược điểm |
|---|---|---|---|
| **Hub-and-Spoke** | Kho trung tâm → station → shipper → khách | Kiểm soát tốt, scalable | Chi phí cố định cao |
| **Milk Run** | Xe chạy tuyến cố định, giao nhiều điểm trên 1 chuyến | Tối ưu chi phí vận chuyển | Ít linh hoạt thời gian |
| **Crowdsourced Delivery** | Tận dụng lực lượng giao hàng tự do (gig workers) | Linh hoạt, scale nhanh | Khó kiểm soát chất lượng |
| **Smart Locker / Pick-up Point** | Khách tự nhận hàng tại tủ locker hoặc điểm nhận | Giảm delivery failure | Cần đầu tư hạ tầng |
| **Drone / Autonomous** | Giao hàng bằng drone hoặc xe tự hành | Giảm nhân lực, nhanh | Quy định pháp lý, kỹ thuật |

### 🔧 Cách áp dụng

1. **Đo lường baseline**: Thu thập KPIs last-mile hiện tại — delivery success rate, cost per delivery, average time, carbon footprint
2. **Tính toán carbon theo ISO 14083**: Áp dụng phương pháp luận ISO 14083 để tính phát thải GHG trên mỗi đơn giao — làm cơ sở cho chiến lược giảm phát thải
3. **Chọn mô hình phù hợp**: Dựa trên đặc điểm thị trường VN — nội thành dùng Hub-and-Spoke + Crowdsourced, liên tỉnh dùng Hub-and-Spoke + Milk Run
4. **Tối ưu routing**: Sử dụng thuật toán Vehicle Routing Problem (VRP) để tối ưu tuyến giao hàng — giảm chi phí 10-20%
5. **Triển khai alternative delivery**: Smart locker, pick-up point tại cửa hàng tiện lợi — giảm delivery failure rate

### 🏭 Ví dụ thực tế

**Giao Hàng Nhanh (GHN)** là ví dụ điển hình về last-mile delivery hiệu quả tại Việt Nam. GHN vận hành mô hình **Hub-and-Spoke** với hơn 1.500 điểm giao nhận trên toàn quốc — 5 hub sorting lớn kết hợp hàng trăm station vệ tinh. GHN sử dụng hệ thống **automated sorting** tại hub trung tâm TP.HCM (xử lý 2 triệu đơn/ngày), kết hợp AI routing để tối ưu tuyến giao cho hàng ngàn shipper mỗi ngày. **Delivery success rate lần đầu** đạt trên 95%, **cost per delivery** cạnh tranh nhờ density cao tại nội thành. GHN cũng triển khai **smart locker** tại các chung cư, tòa nhà văn phòng và cửa hàng GHN Point — giảm tỷ lệ giao hàng thất bại cho khu vực khó tiếp cận. Về phát thải, GHN bắt đầu thí điểm xe máy điện cho giao hàng nội thành nhằm hướng tới mục tiêu **giảm 30% carbon footprint** đến 2030.

---

## 📊 Ma trận tiêu chuẩn × chủ đề Buổi 5

| Tiêu chuẩn / Framework | Mô hình phân phối | Network Design | D2C vs Distributor | Omnichannel | Last-mile |
|---|:---:|:---:|:---:|:---:|:---:|
| **SCOR Deliver (D1/D2/D3)** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ |
| **GS1 Standards (GTIN, EPCIS, GLN)** | ⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **CSCMP Distribution Best Practices** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ |
| **ISO 28000:2022** | ⭐ | ⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| **CPFR (GS1/VICS)** | ⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| **Last-Mile Standards (ISO 14083, CEN/TC 320)** | ⭐ | ⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |

> ⭐⭐⭐ = Liên quan trực tiếp, cốt lõi · ⭐⭐ = Liên quan, hỗ trợ · ⭐ = Liên quan gián tiếp

---

## ✅ Checklist áp dụng

- [ ] Map quy trình phân phối hiện tại theo SCOR Deliver — xác định đang vận hành D1, D2 hay D3
- [ ] Đo lường Perfect Order Fulfillment (POF) và Order Fulfillment Cycle Time (OFCT) làm baseline
- [ ] Đăng ký mã GS1 tại GS1 Việt Nam — cấp GTIN cho sản phẩm, GLN cho điểm phân phối
- [ ] Triển khai SSCC tracking cho đơn vị logistics (pallet, thùng) xuyên chuỗi phân phối
- [ ] Xây dựng Unified Inventory View kết nối tồn kho kho trung tâm, kho vùng, cửa hàng (nếu omnichannel)
- [ ] Chạy Center-of-Gravity Model cho bài toán vị trí kho tại Việt Nam
- [ ] Mô phỏng ít nhất 3 kịch bản network design và so sánh trade-off chi phí vs service level
- [ ] Đánh giá rủi ro an ninh phân phối theo framework ISO 28000 — chain of custody, seal management
- [ ] Triển khai e-POD (electronic Proof of Delivery) cho đội giao hàng
- [ ] Ký thỏa thuận CPFR pilot với ít nhất 1 distributor/retailer chiến lược
- [ ] Chia sẻ POS data và promotion calendar để tạo consensus forecast với đối tác kênh
- [ ] Đo lường KPIs last-mile: delivery success rate, cost per delivery, average delivery time
- [ ] Tính toán carbon footprint per parcel theo phương pháp ISO 14083:2023
- [ ] Triển khai alternative delivery (smart locker, pick-up point) để giảm delivery failure rate
- [ ] Xây dựng dashboard tổng hợp: SCOR metrics + GS1 visibility + last-mile KPIs

---

## 🔗 Đọc thêm

- [Xem bài giảng đầy đủ →](/guide/buoi-05)
- ASCM SCOR Model — [ascm.org/scor](https://www.ascm.org/learning-development/certifications-credentials/scor-p/)
- GS1 Standards — [gs1.org/standards](https://www.gs1.org/standards)
- GS1 Việt Nam — [gs1.org.vn](https://www.gs1.org.vn/)
- CSCMP Resources — [cscmp.org](https://cscmp.org/)
- ISO 28000:2022 — [iso.org/standard/79612.html](https://www.iso.org/standard/79612.html)
- CPFR Guidelines (GS1 US) — [gs1us.org/resources/cpfr](https://www.gs1us.org/industries-and-insights/by-topic/cpfr)
- ISO 14083:2023 — [iso.org/standard/78864.html](https://www.iso.org/standard/78864.html)
- Chopra, S. & Meindl, P. (2019). *Supply Chain Management: Strategy, Planning, and Operation*. 7th Edition. Pearson.
- Simchi-Levi, D., Kaminsky, P. & Simchi-Levi, E. (2008). *Designing and Managing the Supply Chain*. 3rd Edition. McGraw-Hill.
