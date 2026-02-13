---
outline: [2, 3]
---

# 📏 Tiêu chuẩn Buổi 6: Quản lý hiệu suất & cải tiến kênh phân phối

> Buổi 6 tập trung vào đo lường hiệu suất kênh phân phối bằng KPI chuẩn quốc tế, quản lý mức dịch vụ OTIF, phân tích Cost-to-Serve theo kênh và áp dụng phương pháp cải tiến liên tục (PDCA, Six Sigma). Dưới đây là các tiêu chuẩn, framework và phương pháp luận nền tảng giúp doanh nghiệp đo lường chính xác, phân tích sâu và cải tiến bền vững hệ thống phân phối.

---

## 1. SCOR Model — Performance Attributes & Metrics (Level 1-3)

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Supply Chain Operations Reference (SCOR) Model — Performance Measurement Framework |
| **Tổ chức ban hành** | ASCM (Association for Supply Chain Management), kế thừa từ Supply Chain Council (SCC) |
| **Phiên bản hiện hành** | SCOR Digital Standard (DS) — kế thừa SCOR 12.0, cập nhật liên tục |
| **Phạm vi** | Hệ thống metrics phân cấp (Level 1-3) đo lường hiệu suất toàn chuỗi cung ứng |

SCOR Model không chỉ là framework mô hình hóa quy trình mà còn cung cấp **hệ thống đo lường hiệu suất chuẩn hóa** được sử dụng rộng rãi nhất thế giới. Hệ thống này tổ chức metrics theo 5 Performance Attributes và phân rã từ Level 1 (chiến lược) đến Level 3 (chi tiết quy trình), cho phép doanh nghiệp đo lường kênh phân phối một cách toàn diện và có hệ thống.

### 📖 Nội dung chính

**5 Performance Attributes:**

| Attribute | Hướng đánh giá | Mô tả | Level 1 Metric |
|---|---|---|---|
| **Reliability** (Độ tin cậy) | Customer-facing | Khả năng thực hiện đúng cam kết | RL.1.1 — Perfect Order Fulfillment |
| **Responsiveness** (Đáp ứng) | Customer-facing | Tốc độ hoàn thành đơn hàng | RS.1.1 — Order Fulfillment Cycle Time |
| **Agility** (Linh hoạt) | Customer-facing | Khả năng thích ứng với biến động | AG.1.1 — Upside SC Flexibility |
| **Cost** (Chi phí) | Internal-facing | Chi phí vận hành chuỗi cung ứng | CO.1.1 — Total SC Management Cost |
| **Asset Management** (Tài sản) | Internal-facing | Hiệu quả sử dụng tài sản | AM.1.1 — Cash-to-Cash Cycle Time |

**Phân rã Level 1 → Level 2 → Level 3 cho Distribution:**

| Level 1 | Level 2 | Level 3 (ví dụ) |
|---|---|---|
| **RL.1.1** Perfect Order Fulfillment | RL.2.1 % Orders Delivered In Full | RL.3.33 Delivery Item Accuracy |
| | RL.2.2 Delivery Performance to Customer Commit Date | RL.3.35 Customer Commit Date Achievement Time |
| | RL.2.3 Documentation Accuracy | RL.3.43 Shipping Documentation Accuracy |
| | RL.2.4 Perfect Condition | RL.3.41 % Orders Delivered Damage-Free |
| **RS.1.1** Order Fulfillment Cycle Time | RS.2.1 Source Cycle Time | RS.3.4 Receive Product Cycle Time |
| | RS.2.2 Make Cycle Time | RS.3.7 Pack Product Cycle Time |
| | RS.2.3 Deliver Cycle Time | RS.3.101 Ship Product Cycle Time |
| **CO.1.1** Total SC Management Cost | CO.2.4 Distribution Cost | CO.3.13 Transportation Cost |
| | CO.2.5 After-sales Service Cost | CO.3.14 Warehouse Cost |

**Công thức tính Perfect Order Fulfillment:**

$$
POF = \%InFull \times \%OnTime \times \%Documentation \times \%PerfectCondition
$$

> 💡 **Lưu ý:** POF là metric nhân — nếu mỗi thành phần đạt 95%, POF chỉ đạt $0.95^4 = 81.5\%$. Đây là lý do POF benchmark ngành thường chỉ ở mức 85-93%.

### 🔧 Cách áp dụng

1. **Xác định Performance Attributes ưu tiên**: Với kênh phân phối, thường ưu tiên Reliability (POF) và Cost — cân bằng giữa chất lượng dịch vụ và chi phí phục vụ
2. **Chọn metrics phù hợp theo level**:
   - **CEO / Director**: Level 1 metrics (POF, OFCT, Total SC Cost) — dashboard tổng quan
   - **Manager**: Level 2 metrics (% In Full, Delivery Performance, Distribution Cost) — phân tích nguyên nhân
   - **Supervisor / Staff**: Level 3 metrics (Delivery Item Accuracy, Ship Product Cycle Time) — hành động cải tiến
3. **Thiết lập baseline và target**: Thu thập dữ liệu 3-6 tháng, so sánh với ASCM Benchmarking Database
4. **Phân tích theo kênh**: Tách riêng metrics cho Modern Trade, General Trade, Online, D2C — mỗi kênh có benchmark khác nhau
5. **Liên kết KPI với incentive**: Gắn Level 2-3 metrics vào KPI của từng bộ phận — logistics, kho, sales

### 🏭 Ví dụ thực tế

**Vinamilk** triển khai hệ thống đo lường hiệu suất phân phối dựa trên SCOR Performance Attributes cho mạng lưới 220.000+ điểm bán. Dashboard quản trị hiển thị **Level 1 metrics** theo thời gian thực: Perfect Order Fulfillment đạt **~92%**, Order Fulfillment Cycle Time dưới **24h** cho nội thành và **48h** cho liên tỉnh. Ở Level 2, Vinamilk theo dõi riêng **Delivery Performance to Customer Commit Date** cho từng kênh — Modern Trade (siêu thị) yêu cầu ≥98% do phạt fine nặng khi giao trễ, trong khi General Trade target ≥93%. Distribution Cost được kiểm soát ở mức **6-8% doanh thu** nhờ tối ưu routing và consolidation.

---

## 2. OTIF Standard — Walmart & Industry Adoption

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | On-Time In-Full (OTIF) Delivery Standard |
| **Nguồn gốc** | Walmart Inc. — chính thức mandate từ 2017, cập nhật liên tục |
| **Phạm vi áp dụng** | Đo lường hiệu suất giao hàng của nhà cung cấp — đã trở thành tiêu chuẩn ngành toàn cầu |
| **Target hiện tại (Walmart)** | On-Time ≥ 87% và In-Full ≥ 98% (cập nhật 2023) |

OTIF là chỉ số đo lường **khả năng nhà cung cấp giao hàng đúng thời gian và đủ số lượng** theo đơn đặt hàng. Tuy xuất phát từ Walmart, OTIF đã trở thành **tiêu chuẩn ngành de facto** được áp dụng bởi hầu hết retailer lớn toàn cầu (Costco, Target, Carrefour, Tesco...) và được coi là KPI quan trọng nhất trong quản lý kênh phân phối.

### 📖 Nội dung chính

**Lịch sử phát triển OTIF:**

| Mốc thời gian | Sự kiện |
|---|---|
| **2017** | Walmart chính thức mandate OTIF cho tất cả supplier — target ban đầu: On-Time ≥75%, In-Full ≥75% |
| **2018-2019** | Nâng dần target: On-Time ≥87%, In-Full ≥95% |
| **2020-2021** | Tạm nới lỏng trong đại dịch COVID-19, sau đó khôi phục |
| **2022-2023** | Nâng In-Full target lên 98%; fine structure $3/case cho non-compliance |
| **Hiện tại** | OTIF trở thành tiêu chuẩn ngành — các retailer khác áp dụng với target riêng |

**Cách tính OTIF chuẩn:**

$$
OTIF = \frac{\text{Số đơn giao On-Time AND In-Full}}{\text{Tổng số đơn hàng}} \times 100\%
$$

Trong đó:
- **On-Time (OT)**: Hàng đến cửa nhận hàng trong **Must Arrive By Date (MABD)** window — thường ±1 ngày
- **In-Full (IF)**: Số lượng giao đạt **≥ 98%** so với số lượng đặt (theo case/SKU)

**Industry Benchmarks theo ngành:**

| Ngành | OTIF Benchmark | On-Time Target | In-Full Target |
|---|---|---|---|
| **FMCG / CPG** | 90-95% | ≥ 95% | ≥ 97% |
| **Retail (Walmart)** | 87-98% | ≥ 87% | ≥ 98% |
| **Manufacturing** | 85-92% | ≥ 90% | ≥ 95% |
| **Pharma / Healthcare** | 95-99% | ≥ 98% | ≥ 99% |
| **Automotive** | 97-99% | ≥ 98% | ≥ 99.5% |

**Fine structure cho non-compliance (mô hình Walmart):**

| Vi phạm | Mức phạt | Ghi chú |
|---|---|---|
| **In-Full < 98%** | $3/case thiếu | Tính trên mỗi case không giao đủ |
| **On-Time violation** | Fine theo % đơn trễ | Tùy mức độ nghiêm trọng |
| **Liên tục không đạt** | Supplier scorecard giảm hạng | Ảnh hưởng đến shelf space allocation |
| **Vi phạm nghiêm trọng** | Chấm dứt hợp đồng | Trường hợp cực đoan |

### 🔧 Cách áp dụng

1. **Thiết lập SLA theo tier khách hàng**: Phân loại khách hàng (Platinum/Gold/Silver) với OTIF target khác nhau — Platinum 98%, Gold 95%, Silver 92%
2. **Xây dựng MABD system**: Xác định Must Arrive By Date cho mỗi đơn hàng — tích hợp vào OMS (Order Management System) và WMS
3. **Tracking realtime**: Triển khai hệ thống theo dõi OTIF theo ngày/tuần — alert khi dưới threshold
4. **Root cause analysis**: Khi OTIF < target, phân tích nguyên nhân — Late (vận chuyển, kho, sản xuất) hay Short (tồn kho, forecasting, allocation)
5. **Incentive alignment**: Gắn OTIF vào KPI đội logistics, kho vận và sales — tránh tình trạng sales push đơn mà logistics không đáp ứng được

### 🏭 Ví dụ thực tế

**Masan Consumer** áp dụng hệ thống OTIF chặt chẽ cho kênh Modern Trade — đặc biệt khi cung cấp cho các hệ thống siêu thị lớn (WinMart, Big C/GO!, Co.opmart). Với danh mục hơn 200 SKU thuộc các thương hiệu Chin-Su, Nam Ngư, Kokomi, Omachi, Masan Consumer thiết lập **OTIF target ≥95%** cho key account Modern Trade. Hệ thống DMS (Distribution Management System) tích hợp **MABD tracking** — mỗi đơn hàng từ siêu thị có delivery window 24-48h. Nhờ mạng lưới 4 nhà máy và hơn 10 kho vùng phủ khắp cả nước, Masan Consumer duy trì **In-Full Rate ≥97%** bằng cách đặt safety stock riêng cho từng kênh. Khi OTIF tụt dưới 93%, hệ thống tự động trigger **5-Why analysis** để xác định root cause và corrective action trong vòng 48h.

---

## 3. Activity-Based Costing (ABC) / Cost-to-Serve Framework

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Activity-Based Costing (ABC) — Cost-to-Serve Analysis Framework |
| **Nguồn gốc** | Robin Cooper & Robert S. Kaplan, Harvard Business School (1988) |
| **Công trình gốc** | *"Measure Costs Right: Make the Right Decisions"* — Harvard Business Review, Sept 1988 |
| **Phạm vi** | Phân bổ chi phí gián tiếp theo hoạt động thực tế — áp dụng cho phân tích lợi nhuận theo kênh/khách hàng |

Activity-Based Costing (ABC) là phương pháp kế toán quản trị ra đời nhằm **khắc phục hạn chế của phương pháp phân bổ chi phí truyền thống** (traditional costing). Thay vì phân bổ chi phí theo tỷ lệ doanh thu hay sản lượng, ABC phân bổ theo **hoạt động thực tế tiêu tốn nguồn lực** — đây chính là nền tảng cho Cost-to-Serve analysis trong phân phối.

### 📖 Nội dung chính

**Methodology: Activity → Cost Driver → Cost Object**

```
Nguồn lực (Resources)
    │
    ▼  [Resource Driver — cách phân bổ nguồn lực]
Hoạt động (Activities)
    │
    ▼  [Activity Driver — cách phân bổ hoạt động]
Đối tượng chi phí (Cost Objects: Kênh / Khách hàng / SKU)
```

**Các thành phần Cost-to-Serve trong phân phối:**

| Hoạt động | Cost Driver | Ví dụ chi phí |
|---|---|---|
| **Order Processing** | Số đơn hàng, số line items | Nhập đơn, xác nhận, xử lý |
| **Warehousing** | Số SKU, m³ lưu kho, số lần pick | Tiền kho, nhân sự, thiết bị |
| **Picking & Packing** | Số line items, số kiện | Lấy hàng, đóng gói, dán nhãn |
| **Transportation** | Km, số drop-point, tải trọng | Xe tải, nhiên liệu, tài xế |
| **Inventory Holding** | Giá trị tồn kho trung bình, ngày tồn | Chi phí vốn, hao hụt, bảo hiểm |
| **Returns Processing** | Số đơn trả, số SKU trả | Nhận hàng trả, kiểm tra, nhập lại kho |
| **Customer Service** | Số cuộc gọi, số claim | Tổng đài, xử lý khiếu nại |

**Template Cost-to-Serve Analysis theo kênh:**

| Thành phần chi phí | Modern Trade | General Trade | Online/E-commerce | D2C |
|---|---|---|---|---|
| Order Processing | Thấp (EDI/tự động) | Cao (nhiều đơn nhỏ) | Trung bình (tự động) | Cao (đơn lẻ) |
| Warehousing | Thấp (bulk shipment) | Trung bình | Cao (pick & pack đơn lẻ) | Cao |
| Transportation | Thấp (full-truck) | Cao (nhiều điểm giao) | Rất cao (last-mile) | Rất cao |
| Inventory Holding | Thấp (VMI/consignment) | Cao (buffer stock) | Trung bình | Thấp (make-to-order) |
| Returns | Trung bình | Thấp | Rất cao (15-30%) | Rất cao |
| **Tổng Cost-to-Serve** | **6-10%** doanh thu | **10-15%** doanh thu | **15-25%** doanh thu | **12-20%** doanh thu |

### 🔧 Cách áp dụng

1. **Xác định activities**: Liệt kê toàn bộ hoạt động trong quy trình phân phối — từ nhận đơn đến giao hàng và hậu mãi
2. **Xác định cost drivers**: Chọn đơn vị đo lường cho mỗi hoạt động (số đơn, số km, số lần pick, m³ kho...)
3. **Thu thập dữ liệu chi phí**: Lấy từ hệ thống kế toán, ERP — phân tách chi phí trực tiếp và gián tiếp
4. **Phân bổ theo kênh/khách hàng**: Tính chi phí từng hoạt động cho mỗi kênh dựa trên activity drivers thực tế
5. **Tính profitability**: Doanh thu − COGS − Cost-to-Serve = Channel/Customer Profitability
6. **Ra quyết định**: Kênh/khách hàng nào unprofitable? Giá nào cần điều chỉnh? Hoạt động nào cần tối ưu?

### 🏭 Ví dụ thực tế

**Thế Giới Di Động (MWG)** áp dụng Cost-to-Serve analysis để đánh giá hiệu quả kênh bán hàng đa nền tảng. Với hơn 2.000 cửa hàng (Thế Giới Di Động, Điện Máy Xanh, Bách Hóa Xanh) và kênh online chiếm ~15% doanh thu, MWG phát hiện rằng **Cost-to-Serve kênh online cao hơn 2.5 lần** so với cửa hàng truyền thống — chủ yếu do chi phí last-mile delivery (giao hàng 2h nội thành) và tỷ lệ trả hàng cao (12-18%). Dựa trên phân tích ABC, MWG triển khai chiến lược **Ship-from-Store** — biến mỗi cửa hàng thành mini-fulfillment center, giảm **transportation cost 35%** và **delivery time từ 24h xuống 2-4h** cho đơn online nội thành. Đồng thời, Bách Hóa Xanh tối ưu Cost-to-Serve bằng cách **giảm số SKU** từ 5.000 xuống 3.500, tập trung vào fast-moving items có inventory turnover ≥ 12x/năm.

---

## 4. ISO 9001:2015 — Clause 9: Performance Evaluation & Clause 10: Improvement

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | ISO 9001:2015 — Quality Management Systems — Requirements |
| **Tổ chức ban hành** | International Organization for Standardization (ISO) |
| **Phiên bản hiện hành** | ISO 9001:2015 (xác nhận lại 2023) |
| **Phạm vi** | Hệ thống quản lý chất lượng — Clause 9 (Performance Evaluation) & Clause 10 (Improvement) đặc biệt liên quan đến đo lường và cải tiến kênh phân phối |

ISO 9001:2015 là **tiêu chuẩn quản lý chất lượng được áp dụng rộng rãi nhất thế giới** với hơn 1.1 triệu chứng chỉ tại 170+ quốc gia. Trong bối cảnh quản lý kênh phân phối, **Clause 9 (Performance Evaluation)** cung cấp framework cho việc đo lường và đánh giá hiệu suất, trong khi **Clause 10 (Improvement)** hướng dẫn cải tiến liên tục — hai trụ cột quan trọng cho buổi học này.

### 📖 Nội dung chính

**Clause 9 — Performance Evaluation:**

| Clause | Yêu cầu | Áp dụng cho phân phối |
|---|---|---|
| **9.1.1** | Monitoring & measurement — Xác định what, when, how to measure | Xác định KPI kênh (OTIF, Fill Rate, Inventory Turnover...) |
| **9.1.2** | Customer satisfaction — Đo mức hài lòng khách hàng | Survey nhà phân phối, retailer, end-customer |
| **9.1.3** | Analysis & evaluation — Phân tích dữ liệu, đánh giá hiệu lực | Trend analysis KPI, benchmark với đối thủ |
| **9.2** | Internal audit — Đánh giá nội bộ | Audit quy trình phân phối tại kho, tại đại lý |
| **9.3** | Management review — Xem xét của lãnh đạo | Review hiệu suất kênh phân phối hàng quý |

**Clause 10 — Improvement:**

| Clause | Yêu cầu | Áp dụng cho phân phối |
|---|---|---|
| **10.1** | Continual improvement — Cải tiến liên tục | Chu trình PDCA cho từng kênh phân phối |
| **10.2** | Nonconformity & corrective action | Xử lý sự cố giao hàng: giao thiếu, giao trễ, hàng hỏng |
| **10.3** | Continual improvement (tổng thể) | Cải tiến hệ thống phân phối toàn diện |

**Quy trình xử lý Nonconformity (10.2) cho phân phối:**

```
Phát hiện NC → Hành động khắc phục tức thời → Phân tích nguyên nhân gốc
     → Xác định corrective action → Triển khai → Verify hiệu lực
          → Cập nhật risk/opportunity → Lưu hồ sơ
```

### 🔧 Cách áp dụng

1. **Xây dựng hệ thống đo lường (9.1)**: Xác định rõ what to measure (KPIs), who measures, frequency, method — document hóa trong QMS
2. **Customer satisfaction survey (9.1.2)**: Khảo sát định kỳ nhà phân phối và retailer — đánh giá delivery performance, product availability, support quality
3. **Internal audit kênh phân phối (9.2)**: Lập chương trình audit định kỳ — kiểm tra tuân thủ SOP tại kho, quy trình giao hàng, quản lý tồn kho tại đại lý
4. **Management review (9.3)**: Họp review hiệu suất kênh hàng quý — input: KPI data, audit findings, customer feedback; output: action plans, resource allocation
5. **Corrective Action process (10.2)**: Khi xảy ra sự cố giao hàng lặp lại — mở CAR (Corrective Action Request), phân tích 5-Why, triển khai biện pháp khắc phục và verify

### 🏭 Ví dụ thực tế

**Sabeco (ThaiBev Vietnam)** — doanh nghiệp sở hữu thương hiệu bia Saigon và 333 — áp dụng ISO 9001:2015 xuyên suốt chuỗi phân phối với hơn 400 nhà phân phối cấp 1 và 250.000+ điểm bán trên toàn quốc. Theo **Clause 9.1**, Sabeco thiết lập hệ thống đo lường KPI theo thời gian thực cho từng nhà phân phối — bao gồm **OTIF ≥93%**, **Inventory Turnover ≥10x/năm** và **Numeric Distribution ≥85%** cho sản phẩm chủ lực. **Internal audit (9.2)** được thực hiện hàng quý tại mỗi nhà phân phối — kiểm tra SOP kho bãi, cold chain (cho bia tươi), và quy trình giao hàng. Khi phát hiện OTIF tại khu vực Đồng bằng Sông Cửu Long giảm xuống 87% do flooding season, Sabeco áp dụng **Clause 10.2 Corrective Action** — phân tích root cause, bổ sung 2 kho vùng trung chuyển và điều chỉnh safety stock, đưa OTIF trở lại ≥93% trong vòng 2 tháng.

---

## 5. PDCA / Deming Cycle — ISO Foundation

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | PDCA Cycle (Plan-Do-Check-Act) / Deming Cycle / Shewhart Cycle |
| **Nguồn gốc** | Walter A. Shewhart (1930s) → W. Edwards Deming phổ biến tại Nhật Bản (1950s) |
| **Tích hợp trong** | ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 22000:2018 — tất cả tiêu chuẩn ISO hệ thống quản lý |
| **Phạm vi** | Phương pháp luận cải tiến liên tục — nền tảng cho mọi hoạt động cải tiến trong quản lý chất lượng |

PDCA là **phương pháp cải tiến liên tục cơ bản nhất và phổ biến nhất** trong quản lý. Được Shewhart đề xuất và Deming phổ biến toàn cầu, PDCA đã trở thành **xương sống của mọi tiêu chuẩn ISO về hệ thống quản lý**. Trong quản lý kênh phân phối, PDCA cung cấp cấu trúc logic cho mọi dự án cải tiến — từ nâng cao OTIF đến giảm Cost-to-Serve.

### 📖 Nội dung chính

**4 giai đoạn PDCA:**

| Giai đoạn | Hoạt động | Output |
|---|---|---|
| **Plan** (Lập kế hoạch) | Xác định vấn đề, phân tích hiện trạng, đặt mục tiêu, lập kế hoạch hành động | Problem statement, gap analysis, action plan, target KPI |
| **Do** (Thực hiện) | Triển khai thí điểm (pilot), thu thập dữ liệu | Pilot results, data collected |
| **Check** (Kiểm tra) | Đo lường kết quả, so sánh với mục tiêu, phân tích nguyên nhân sai lệch | Performance report, variance analysis |
| **Act** (Hành động) | Chuẩn hóa nếu đạt / điều chỉnh nếu chưa đạt → quay lại Plan | Standardized process / revised plan |

**PDCA cho Distribution — Ví dụ cải tiến OTIF:**

| Giai đoạn | Hoạt động cụ thể |
|---|---|
| **Plan** | Gap analysis: OTIF hiện tại 88%, target 95%. Pareto analysis: 60% đơn trễ do routing kém. Mục tiêu: Cải thiện routing → OTIF ≥93% trong 3 tháng |
| **Do** | Pilot route optimization software tại 1 khu vực (TP.HCM). Training cho dispatcher team. Chạy thí điểm 4 tuần |
| **Check** | OTIF khu vực pilot tăng từ 88% → 94%. On-Time improvement +7%. Delivery cost giảm 12%. Customer complaints giảm 40% |
| **Act** | Kết quả đạt → chuẩn hóa quy trình mới, roll-out toàn quốc. Update SOP routing. Lập Plan mới cho cycle tiếp: target OTIF ≥95% |

**A3 Problem Solving Template:**

A3 Report (Toyota) kết hợp PDCA vào một trang giấy A3:

| Phần | Nội dung | Tương ứng PDCA |
|---|---|---|
| **Background** | Bối cảnh vấn đề | Plan |
| **Current Condition** | Hiện trạng, dữ liệu baseline | Plan |
| **Goal/Target** | Mục tiêu cải tiến | Plan |
| **Root Cause Analysis** | 5-Why, Fishbone | Plan |
| **Countermeasures** | Giải pháp đề xuất | Plan → Do |
| **Implementation Plan** | Kế hoạch triển khai, timeline | Do |
| **Check/Confirmation** | Kết quả đo lường | Check |
| **Follow-up Actions** | Chuẩn hóa / điều chỉnh | Act |

### 🔧 Cách áp dụng

1. **Bắt đầu từ vấn đề cụ thể**: Không cải tiến chung chung — chọn 1 KPI cụ thể cần cải thiện (ví dụ: OTIF kênh GT < 90%)
2. **Plan kỹ trước khi Do**: Dành ≥40% thời gian cho Plan — gap analysis, root cause analysis, stakeholder alignment
3. **Pilot trước roll-out**: Luôn thí điểm ở phạm vi nhỏ trước — 1 khu vực, 1 kênh, 1 nhóm SKU
4. **Check bằng dữ liệu**: Đo lường kết quả bằng KPI đã xác định, không đánh giá cảm tính
5. **Act = chuẩn hóa hoặc quay lại**: Nếu pilot thành công → chuẩn hóa SOP, training, roll-out. Nếu chưa đạt → phân tích nguyên nhân, quay lại Plan với giải pháp điều chỉnh
6. **Dùng A3 Report**: Document mỗi PDCA cycle trên A3 — dễ communicate, dễ review, dễ lưu trữ

### 🏭 Ví dụ thực tế

**Tân Hiệp Phát** — nhà sản xuất nước giải khát hàng đầu Việt Nam (Trà xanh Không Độ, Dr Thanh, Number 1) — áp dụng PDCA cycle cho cải tiến kênh General Trade. **Plan**: Phân tích cho thấy Sell-through Rate tại GT khu vực miền Trung chỉ đạt 72% (target 85%) — Pareto analysis chỉ ra 3 nguyên nhân chính: (1) tồn kho đại lý cao, (2) thiếu visibility POS data, (3) chương trình trade marketing không phù hợp vùng. **Do**: Pilot tại Đà Nẵng — triển khai DMS kết nối real-time với 500 đại lý, điều chỉnh minimum order quantity, thiết kế chương trình khuyến mãi theo đặc thù vùng. **Check**: Sau 3 tháng, Sell-through Rate tăng từ 72% → 86%, inventory days giảm từ 45 → 28 ngày, doanh thu tăng 18%. **Act**: Chuẩn hóa quy trình mới, roll-out cho toàn bộ khu vực miền Trung và miền Tây, đào tạo 200+ salesman trên quy trình cập nhật.

---

## 6. Six Sigma DMAIC for Distribution

### 📋 Giới thiệu

| Thuộc tính | Chi tiết |
|---|---|
| **Tên đầy đủ** | Six Sigma DMAIC Methodology (Define-Measure-Analyze-Improve-Control) |
| **Nguồn gốc** | Motorola (Bill Smith, 1986) → General Electric (Jack Welch, 1995) phổ biến toàn cầu |
| **Tiêu chuẩn liên quan** | ISO 13053:2011 — Quantitative methods in process improvement — Six Sigma |
| **Phạm vi** | Phương pháp cải tiến dựa trên dữ liệu — giảm biến động (variation), đạt mức chất lượng 3.4 DPMO |

Six Sigma DMAIC là **phương pháp cải tiến quy trình dựa trên dữ liệu và thống kê** — mạnh hơn PDCA ở khả năng phân tích định lượng và kiểm soát biến động. Trong phân phối, DMAIC đặc biệt hiệu quả cho các dự án **cải tiến OTIF, giảm Cost-to-Serve và giảm lỗi đơn hàng** — những vấn đề cần đo lường chính xác và kiểm soát bền vững.

### 📖 Nội dung chính

**5 giai đoạn DMAIC:**

| Giai đoạn | Mục tiêu | Công cụ chính | Output cho distribution |
|---|---|---|---|
| **Define** | Xác định vấn đề, scope, stakeholders | Project Charter, SIPOC, VOC | Vấn đề: OTIF < 90%, scope: kênh MT khu vực HCM |
| **Measure** | Đo lường hiện trạng, data collection | Data Collection Plan, MSA, Process Mapping | Baseline OTIF = 87.3%, σ = 4.2, Cpk = 0.68 |
| **Analyze** | Tìm root cause bằng dữ liệu | Pareto, Fishbone, Regression, Hypothesis Testing | Top 3 root causes: routing (35%), stock-out (28%), picking error (22%) |
| **Improve** | Thiết kế và triển khai giải pháp | DOE, Pilot, Solution Selection Matrix | Route optimization → OTIF tăng lên 94.1% |
| **Control** | Duy trì kết quả, ngăn tái phát | Control Chart, Control Plan, SOP, Poka-Yoke | SPC dashboard, weekly monitoring, response plan |

**Sigma Levels và DPMO cho Distribution:**

| Sigma Level | DPMO | Yield | Ý nghĩa cho distribution |
|---|---|---|---|
| **2σ** | 308,537 | 69.15% | ~31% đơn hàng có lỗi — mức rất kém |
| **3σ** | 66,807 | 93.32% | ~7% lỗi — mức trung bình, hầu hết DN Việt Nam |
| **4σ** | 6,210 | 99.38% | ~0.6% lỗi — mức tốt, target cho FMCG distribution |
| **5σ** | 233 | 99.977% | Gần như hoàn hảo — target cho pharma, automotive |
| **6σ** | 3.4 | 99.99966% | Chỉ 3.4 lỗi/triệu — mức world-class |

> 💡 **Ví dụ**: Nếu OTIF = 93.3%, tương đương **3σ level**. Để đạt 4σ (99.4%), cần giảm defects từ 66,807 DPMO xuống 6,210 DPMO — tức giảm **~90% lỗi hiện tại**.

**Công cụ Six Sigma cho Distribution:**

| Công cụ | Giai đoạn | Ứng dụng trong distribution |
|---|---|---|
| **Pareto Chart** | Analyze | 80/20 — 20% nguyên nhân gây 80% đơn trễ |
| **Fishbone (Ishikawa)** | Analyze | Phân tích nguyên nhân: Man, Machine, Method, Material, Measurement, Mother Nature |
| **Control Chart** | Control | Giám sát OTIF theo tuần — phát hiện out-of-control signals |
| **Process Capability (Cpk)** | Measure | Đánh giá năng lực quy trình giao hàng so với spec (target OTIF) |
| **FMEA** | Improve | Đánh giá rủi ro lỗi trong quy trình phân phối — ưu tiên cải tiến theo RPN |
| **Regression Analysis** | Analyze | Xác định yếu tố ảnh hưởng OTIF: khoảng cách, volume, số SKU, seasonal... |

### 🔧 Cách áp dụng

1. **Define rõ ràng**: Viết Project Charter — vấn đề gì, đo bằng gì, target bao nhiêu, scope ở đâu, timeline bao lâu, team gồm ai
2. **Measure chính xác**: Thu thập ≥30 data points, validate hệ thống đo lường (MSA), tính baseline sigma level
3. **Analyze bằng dữ liệu**: Dùng Pareto xác định top root causes, Fishbone brainstorm, hypothesis testing kiểm chứng — tránh đoán cảm tính
4. **Improve có kiểm soát**: Pilot giải pháp, đo lường improvement bằng before-after comparison, cost-benefit analysis
5. **Control bền vững**: Xây dựng Control Plan — ai monitor, frequency nào, control limits bao nhiêu, response plan khi out-of-control

### 🏭 Ví dụ thực tế

**Bách Hóa Xanh (BHX)** — chuỗi siêu thị mini thuộc MWG — áp dụng DMAIC cho dự án cải tiến tỷ lệ hàng hóa trên kệ (On-Shelf Availability - OSA) — một KPI quan trọng ảnh hưởng trực tiếp đến doanh thu. **Define**: OSA trung bình chỉ đạt 89% (target ≥95%), gây mất ~8% doanh thu tiềm năng do out-of-stock. **Measure**: Thu thập dữ liệu OSA tại 200 cửa hàng trong 8 tuần, phân loại theo category, giờ trong ngày, ngày trong tuần. **Analyze**: Pareto cho thấy 3 nhóm hàng tươi sống, sữa và nước giải khát chiếm 72% sự cố out-of-stock. Fishbone analysis xác định root causes: (1) forecast accuracy thấp (62%) cho hàng tươi, (2) lead time từ kho DC đến cửa hàng quá dài (18h), (3) quy trình đặt hàng thủ công tại cửa hàng. **Improve**: Triển khai auto-replenishment system dựa trên POS data real-time, rút ngắn delivery window từ 18h → 8h bằng cách bổ sung cross-dock facility, đào tạo store manager về exception management. **Control**: Dashboard OSA real-time, alert khi OSA < 93%, weekly review meeting, SOP chuẩn hóa cho quy trình replenishment. Kết quả: OSA tăng từ 89% → 95.2%, lost sales giảm ~60%, customer satisfaction score tăng 15%.

---

## 📊 Ma trận tiêu chuẩn × chủ đề Buổi 6

| Tiêu chuẩn / Framework | KPI kênh | OTIF / Service Level | Cost-to-Serve | PDCA / Cải tiến | Root Cause Analysis |
|---|:---:|:---:|:---:|:---:|:---:|
| **SCOR Performance Metrics (L1-3)** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐ |
| **OTIF Standard (Walmart)** | ⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐⭐ | ⭐⭐ |
| **ABC / Cost-to-Serve** | ⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐ | ⭐⭐ |
| **ISO 9001:2015 (Cl. 9 & 10)** | ⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **PDCA / Deming Cycle** | ⭐ | ⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Six Sigma DMAIC** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

> ⭐⭐⭐ = Liên quan trực tiếp, cốt lõi · ⭐⭐ = Liên quan, hỗ trợ · ⭐ = Liên quan gián tiếp

---

## ✅ Checklist áp dụng

- [ ] Xác định bộ KPI kênh phân phối theo SCOR Performance Attributes — chọn ít nhất 1 metric mỗi attribute (Reliability, Responsiveness, Cost, Asset)
- [ ] Tính Perfect Order Fulfillment (POF) hiện tại — phân rã thành 4 thành phần Level 2 để xác định điểm yếu
- [ ] Thiết lập OTIF tracking system — xác định MABD window, tích hợp vào OMS/WMS
- [ ] Phân loại khách hàng theo tier (Platinum/Gold/Silver) với SLA và OTIF target khác nhau
- [ ] Thực hiện Cost-to-Serve analysis cho ít nhất 3 kênh — xác định cost drivers chính cho mỗi kênh
- [ ] Tính profitability theo kênh (Revenue − COGS − Cost-to-Serve) — xác định kênh unprofitable
- [ ] Xây dựng hệ thống đo lường theo ISO 9001 Clause 9.1 — document what/when/how to measure
- [ ] Lập chương trình internal audit kênh phân phối (ISO 9001 Clause 9.2) — tần suất ít nhất hàng quý
- [ ] Triển khai ít nhất 1 PDCA cycle cho vấn đề cải tiến kênh cụ thể — document bằng A3 Report
- [ ] Thực hiện 5-Why Root Cause Analysis cho top 3 vấn đề phân phối lặp lại
- [ ] Tính Sigma Level hiện tại cho quy trình giao hàng — xác định DPMO và Process Capability (Cpk)
- [ ] Triển khai Control Chart cho KPI quan trọng nhất (OTIF hoặc POF) — monitor hàng tuần
- [ ] Xây dựng dashboard tổng hợp: SCOR L1-2 metrics + OTIF trend + Cost-to-Serve by channel + Control Charts
- [ ] Thiết lập Corrective Action process (ISO 9001 Clause 10.2) cho sự cố phân phối — response time ≤ 48h
- [ ] Lập kế hoạch Management Review (ISO 9001 Clause 9.3) cho hiệu suất kênh — tần suất hàng quý

---

## 🔗 Đọc thêm

- [Xem bài giảng đầy đủ →](/guide/buoi-06)
- ASCM SCOR Model & Metrics — [ascm.org/scor](https://www.ascm.org/learning-development/certifications-credentials/scor-p/)
- ASCM SCOR Benchmarking — [ascm.org/benchmarking](https://www.ascm.org/corporate-transformation/supply-chain-benchmarking/)
- Walmart OTIF Scorecard — [supplierportal.walmart.com](https://supplierportal.walmart.com/)
- ISO 9001:2015 — [iso.org/standard/62085.html](https://www.iso.org/standard/62085.html)
- ISO 13053:2011 (Six Sigma) — [iso.org/standard/52901.html](https://www.iso.org/standard/52901.html)
- Kaplan, R.S. & Cooper, R. (1998). *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*. Harvard Business School Press.
- Deming, W.E. (1986). *Out of the Crisis*. MIT Press.
- Pyzdek, T. & Keller, P. (2014). *The Six Sigma Handbook*. 4th Edition. McGraw-Hill.
- Rother, M. (2010). *Toyota Kata: Managing People for Improvement, Adaptiveness and Superior Results*. McGraw-Hill.
- Sobek, D.K. & Smalley, A. (2008). *Understanding A3 Thinking: A Critical Component of Toyota's PDCA Management System*. Productivity Press.

---

→ [📘 Quay lại bài học: Buổi 6](/guide/buoi-06) | [📋 Danh sách tiêu chuẩn](/standard/)
