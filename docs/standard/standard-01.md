---
outline: [2, 3]
---

# 📏 Tiêu chuẩn Buổi 1: Khái niệm & cấu trúc chuỗi cung ứng

> Các tiêu chuẩn, framework và chứng chỉ quốc tế cần nắm để xây dựng nền tảng tư duy SCM chuẩn quốc tế.

## Tổng quan

Buổi 1 đặt nền móng cho toàn bộ hành trình học SCM — từ việc hiểu **chuỗi cung ứng là gì**, đến cách **mô hình hóa** và **đo lường** nó. Để tư duy đúng ngay từ đầu, người học cần biết các tiêu chuẩn và framework quốc tế đã được hàng nghìn doanh nghiệp áp dụng.

Tại sao cần tiêu chuẩn?

- **Ngôn ngữ chung:** Khi nói "Source" hay "Deliver", mọi người trong ngành đều hiểu giống nhau nhờ SCOR Model.
- **Benchmark (đối sánh):** Không có tiêu chuẩn thì không thể so sánh hiệu quả chuỗi cung ứng của bạn với đối thủ.
- **Tránh phát minh lại bánh xe:** Các framework như SCOR, GSCF đã được kiểm chứng qua hàng chục năm thực tiễn.
- **Yêu cầu của khách hàng & đối tác:** Nhiều tập đoàn toàn cầu yêu cầu nhà cung cấp tuân thủ ISO 28000 hoặc áp dụng SCOR.

## 📋 Danh sách tiêu chuẩn liên quan

| # | Tiêu chuẩn | Tổ chức | Áp dụng cho |
|---|-----------|---------|-------------|
| 1 | SCOR Model v13.0 | APICS / ASCM | Mô hình hóa & đo lường chuỗi cung ứng end-to-end |
| 2 | APICS Body of Knowledge | ASCM (trước đây APICS) | Kiến thức nền tảng SCM, chứng chỉ nghề nghiệp |
| 3 | ISO 28000:2022 | ISO | An ninh chuỗi cung ứng, quản lý rủi ro |
| 4 | GSCF Framework | Global Supply Chain Forum | Quản trị quan hệ & tích hợp quy trình xuyên chuỗi |
| 5 | Value Stream Mapping (VSM) | Lean Enterprise Institute | Mapping dòng giá trị, nhận diện lãng phí & bottleneck |

---

## 1️⃣ SCOR Model (v13.0)

### Giới thiệu

**SCOR** — *Supply Chain Operations Reference* — là mô hình tham chiếu hoạt động chuỗi cung ứng được phát triển bởi **Supply Chain Council** (nay thuộc **ASCM**). Đây là framework phổ biến nhất thế giới để mô tả, đo lường và cải tiến chuỗi cung ứng.

- **Phiên bản hiện tại:** v13.0 (tích hợp Digital SCOR)
- **Được sử dụng bởi:** Hàng nghìn tổ chức trên toàn cầu — từ Amazon, Samsung đến các doanh nghiệp vừa và nhỏ.

### Nội dung chính

#### 6 Processes (Quy trình cốt lõi)

| Quy trình | Ý nghĩa | Ví dụ hoạt động |
|-----------|---------|----------------|
| **Plan** | Lập kế hoạch cung-cầu, phân bổ nguồn lực | Dự báo nhu cầu, lập kế hoạch sản xuất |
| **Source** | Thu mua nguyên vật liệu, quản lý nhà cung cấp | Đánh giá nhà cung cấp, đặt hàng, nhận hàng |
| **Make** | Sản xuất / Chế biến / Lắp ráp | Sản xuất theo đơn (MTO), sản xuất để tồn kho (MTS) |
| **Deliver** | Giao hàng, quản lý đơn hàng, vận chuyển | Quản lý kho, vận tải, hoàn tất đơn hàng |
| **Return** | Xử lý trả hàng, thu hồi | Trả hàng lỗi, thu hồi bao bì, logistics ngược |
| **Enable** | Hỗ trợ toàn chuỗi (quản trị, CNTT, nhân sự, tuân thủ) | Quản lý dữ liệu, quy tắc kinh doanh, hiệu suất |

#### 4 Levels (Cấp độ chi tiết)

| Level | Tên gọi | Mô tả | Ví dụ |
|-------|---------|-------|-------|
| **Level 1** | Strategic (Chiến lược) | Phạm vi & nội dung quy trình | "Source" — Thu mua |
| **Level 2** | Configuration (Cấu hình) | Phân loại chiến lược theo danh mục | Source Stocked Product (sS1), Source MTO (sS2), Source ETO (sS3) |
| **Level 3** | Process Element (Phần tử quy trình) | Chi tiết từng bước hoạt động | sS1.1: Schedule Product Deliveries, sS1.2: Receive Product... |
| **Level 4** | Implementation (Triển khai) | Tùy chỉnh theo doanh nghiệp cụ thể | Quy trình nhận hàng cụ thể tại kho Bình Dương của Công ty X |

#### 5 Performance Attributes (Thuộc tính hiệu suất)

| Thuộc tính | Hướng đánh giá | Metric tiêu biểu |
|-----------|---------------|-------------------|
| **Reliability** (Độ tin cậy) | Customer-facing | Perfect Order Fulfillment (%) |
| **Responsiveness** (Khả năng đáp ứng) | Customer-facing | Order Fulfillment Cycle Time (ngày) |
| **Agility** (Độ linh hoạt) | Customer-facing | Upside Supply Chain Flexibility (ngày) |
| **Cost** (Chi phí) | Internal-facing | Total SCM Cost (% doanh thu) |
| **Asset Management** (Quản lý tài sản) | Internal-facing | Cash-to-Cash Cycle Time (ngày) |

> 💡 **Lưu ý:** 3 thuộc tính đầu hướng về khách hàng (*customer-facing*), 2 thuộc tính sau hướng nội bộ (*internal-facing*). Doanh nghiệp cần cân bằng cả hai nhóm.

### Áp dụng cho buổi học này

| Chủ đề buổi 1 | Phần SCOR liên quan | Cách áp dụng |
|---------------|---------------------|--------------|
| Mô hình end-to-end | 6 Processes (L1) | Dùng Plan → Source → Make → Deliver → Return + Enable để vẽ toàn cảnh chuỗi |
| SCOR 4 cấp độ | Levels 1–4 | Hiểu cách "zoom in" từ chiến lược đến triển khai |
| Vai trò SCM chiến lược | 5 Performance Attributes | Liên kết hiệu suất SCM với chiến lược doanh nghiệp (cost leadership, differentiation) |
| Mapping thực tế | L2–L3 Process | Mapping quy trình thực tế của doanh nghiệp vào SCOR |

### Ví dụ thực tế

**Tình huống: Công ty sản xuất nội thất gỗ xuất khẩu (Bình Dương)**

Áp dụng SCOR Level 1–3 để mapping chuỗi cung ứng:

- **Plan:** Dự báo đơn hàng từ đối tác Mỹ/EU theo mùa → lập kế hoạch nguyên liệu gỗ.
- **Source:** Thu mua gỗ cao su từ Tây Ninh, phụ kiện kim loại từ Đài Loan → đánh giá nhà cung cấp bằng SCOR metrics.
- **Make:** Sản xuất theo đơn (Make-to-Order — sM2) vì mỗi lô hàng theo spec riêng.
- **Deliver:** Giao hàng FOB cảng Cát Lái → theo dõi Order Fulfillment Cycle Time.
- **Return:** Xử lý hàng lỗi trả về từ khách hàng Mỹ → quy trình Return Defective Product (sDR1).
- **Enable:** Hệ thống ERP quản lý toàn bộ dữ liệu, quy tắc compliance FSC (gỗ hợp pháp).

---

## 2️⃣ APICS Body of Knowledge

### Giới thiệu

**APICS** — *American Production and Inventory Control Society* — nay là **ASCM** (*Association for Supply Chain Management*) — là tổ chức uy tín nhất thế giới về giáo dục và chứng chỉ SCM. **APICS Body of Knowledge (BoK)** là hệ thống kiến thức chuẩn hóa bao trùm toàn bộ lĩnh vực quản lý chuỗi cung ứng.

### Nội dung chính

#### Các lĩnh vực kiến thức chính (Knowledge Domains)

| Lĩnh vực | Nội dung |
|----------|---------|
| **Supply Chain Strategy** | Thiết kế chiến lược SCM phù hợp chiến lược doanh nghiệp |
| **Demand Management** | Dự báo, lập kế hoạch nhu cầu |
| **Supply Management** | Quản lý nguồn cung, mua hàng |
| **Operations & Production** | Sản xuất, chất lượng, lean |
| **Logistics & Distribution** | Vận tải, kho bãi, phân phối |
| **Technology & Analytics** | ERP, AI/ML, data-driven SCM |
| **Sustainability & Risk** | Bền vững, rủi ro, tuân thủ |

#### Chứng chỉ chính liên quan

- **CPIM** (*Certified in Planning and Inventory Management*): Chuyên sâu về lập kế hoạch & quản lý tồn kho.
- **CSCP** (*Certified Supply Chain Professional*): Bao quát toàn chuỗi cung ứng end-to-end.
- **SCOR-P** (*SCOR Professional*): Chuyên gia áp dụng SCOR Model.

#### APICS Dictionary

APICS Dictionary (hiện tại phiên bản thứ 17) là **từ điển chuẩn** của ngành với hơn 5.000 thuật ngữ. Khi có tranh cãi về định nghĩa, APICS Dictionary là nguồn tham chiếu cuối cùng.

### Áp dụng cho buổi học này

- **Supply Chain Strategy domain** giúp hiểu vai trò SCM trong chiến lược doanh nghiệp (cost leadership, differentiation, focus).
- **APICS Dictionary** cung cấp định nghĩa chuẩn cho tất cả thuật ngữ buổi 1: *Supply Chain, Bottleneck, Lead Time, Throughput...*
- **CPIM/CSCP syllabus** là kim chỉ nam để biết mức độ kiến thức cần đạt.

### Ví dụ thực tế

Một chuyên viên SCM tại Việt Nam chuẩn bị thi **CSCP** sẽ cần nắm vững:
- Cách **định nghĩa chuỗi cung ứng end-to-end** (từ nhà cung cấp cấp n đến khách hàng cuối).
- Sự khác biệt giữa **push system** và **pull system**.
- Cách **SCOR Model** chia nhỏ chuỗi cung ứng thành các process có thể đo lường.

Đây chính là nội dung core của Buổi 1.

---

## 3️⃣ ISO 28000:2022 — An ninh chuỗi cung ứng

### Giới thiệu

**ISO 28000:2022** — *Security and resilience — Security management systems — Requirements* — là tiêu chuẩn quốc tế về **hệ thống quản lý an ninh chuỗi cung ứng**. Phiên bản 2022 thay thế ISO 28000:2007, được cập nhật theo cấu trúc HLS (*High Level Structure*) giống ISO 9001, ISO 14001.

- **Tổ chức ban hành:** ISO (International Organization for Standardization)
- **Phạm vi:** Mọi tổ chức tham gia chuỗi cung ứng — từ sản xuất, logistics, đến bán lẻ.

### Nội dung chính

#### Cấu trúc chính (theo Annex SL / HLS)

| Điều khoản | Nội dung | Liên quan SCM |
|-----------|---------|--------------|
| 4. Context | Bối cảnh tổ chức, bên liên quan | Mapping stakeholder trong chuỗi |
| 5. Leadership | Cam kết lãnh đạo, chính sách an ninh | Vai trò chiến lược của SCM |
| 6. Planning | Đánh giá rủi ro & cơ hội | Nhận diện rủi ro chuỗi cung ứng |
| 7. Support | Nguồn lực, năng lực, truyền thông | Enable process (SCOR) |
| 8. Operation | Kiểm soát hoạt động, ứng phó sự cố | Source, Make, Deliver |
| 9. Performance | Giám sát, đo lường, đánh giá nội bộ | Performance attributes |
| 10. Improvement | Cải tiến liên tục | Kaizen, PDCA |

#### Điểm mới trong phiên bản 2022
- Tích hợp **tư duy dựa trên rủi ro** (*risk-based thinking*).
- Tương thích với các hệ thống quản lý khác (ISO 9001, ISO 14001).
- Nhấn mạnh **resilience** (khả năng phục hồi) — rất phù hợp hậu COVID-19.

### Áp dụng cho buổi học này

| Chủ đề buổi 1 | Phần ISO 28000 liên quan |
|---------------|-------------------------|
| Mô hình end-to-end | Điều khoản 4 — Context: xác định phạm vi & ranh giới chuỗi |
| Vai trò SCM chiến lược | Điều khoản 5 — Leadership: SCM cần sự cam kết từ C-level |
| Mapping thực tế | Điều khoản 6 — Planning: mapping rủi ro trên từng mắt xích |

### Ví dụ thực tế

**Tình huống: Công ty logistics tại TP.HCM vận chuyển hàng điện tử**

Áp dụng ISO 28000 để:
- **Mapping rủi ro** trên toàn chuỗi: mất hàng tại kho trung chuyển, hàng giả trà trộn, rò rỉ thông tin khách hàng.
- **Xây dựng quy trình kiểm soát:** Camera, seal container, GPS tracking, kiểm tra nhân sự.
- **Tích hợp với SCOR:** Rủi ro an ninh được gắn vào từng process (Source → kiểm tra nhà cung cấp; Deliver → bảo vệ hàng vận chuyển).

---

## 4️⃣ GSCF Framework — Global Supply Chain Forum

### Giới thiệu

**GSCF Framework** được phát triển bởi các nhà nghiên cứu tại **Ohio State University** thông qua **Global Supply Chain Forum**. Khác với SCOR tập trung vào *hoạt động* (operations), GSCF nhấn mạnh **quản trị quan hệ** (*relationship management*) và **tích hợp quy trình xuyên chức năng** (*cross-functional integration*).

### Nội dung chính

#### 8 Key Business Processes

| # | Quy trình | Mô tả |
|---|----------|-------|
| 1 | **Customer Relationship Management (CRM)** | Quản trị quan hệ khách hàng chiến lược |
| 2 | **Supplier Relationship Management (SRM)** | Quản trị quan hệ nhà cung cấp chiến lược |
| 3 | **Customer Service Management (CSM)** | Quản lý dịch vụ khách hàng |
| 4 | **Demand Management** | Cân bằng cung-cầu, quản lý nhu cầu |
| 5 | **Order Fulfillment** | Hoàn tất đơn hàng end-to-end |
| 6 | **Manufacturing Flow Management** | Quản lý dòng sản xuất linh hoạt |
| 7 | **Product Development & Commercialization** | Phát triển sản phẩm mới tích hợp chuỗi |
| 8 | **Returns Management** | Quản lý trả hàng & logistics ngược |

#### So sánh GSCF vs SCOR

| Tiêu chí | SCOR | GSCF |
|----------|------|------|
| **Trọng tâm** | Hoạt động (operations) | Quan hệ (relationships) |
| **Góc nhìn** | Process-centric | Cross-functional |
| **Số quy trình** | 6 processes | 8 processes |
| **Đo lường** | Metrics cụ thể (500+) | Chiến lược quan hệ |
| **Phù hợp cho** | Cải tiến hoạt động, benchmark | Thiết kế chiến lược tích hợp |
| **Bổ sung nhau** | ✅ Có — dùng song song rất hiệu quả | ✅ Có |

### Áp dụng cho buổi học này

- **Mô hình end-to-end:** GSCF bổ sung góc nhìn **quan hệ** mà SCOR thiếu — ai kết nối với ai, và quan hệ đó ở mức nào (arm's length hay partnership).
- **Vai trò SCM chiến lược:** 8 processes của GSCF cho thấy SCM không chỉ là logistics mà bao gồm cả **CRM, SRM, phát triển sản phẩm**.
- **Mapping thực tế:** Kết hợp SCOR (hoạt động) + GSCF (quan hệ) để có bức tranh đầy đủ.

### Ví dụ thực tế

**Tình huống: Chuỗi cà phê từ Đắk Lắk ra quốc tế**

- **SRM:** Xây dựng quan hệ đối tác với nông dân thay vì mua rời → đảm bảo chất lượng, giá ổn định.
- **CRM:** Phân loại khách hàng chiến lược (nhà rang xay Nhật Bản, EU) vs khách hàng thông thường → tùy chỉnh dịch vụ.
- **Order Fulfillment:** Quy trình hoàn tất đơn hàng khác nhau cho FOB vs CIF vs DDP.
- **Demand Management:** Dự báo nhu cầu theo mùa vụ thu hoạch (tháng 10–12) và mùa tiêu thụ (tháng 1–3 tại Bắc bán cầu).

---

## 5️⃣ Value Stream Mapping (VSM)

### Giới thiệu

**Value Stream Mapping (VSM)** — *Bản đồ dòng giá trị* — là công cụ trực quan hóa từ **Lean Manufacturing**, do **Toyota** phát triển và được **Lean Enterprise Institute (LEI)** chuẩn hóa. VSM giúp nhìn thấy **toàn bộ dòng chảy** của vật liệu và thông tin từ nguyên liệu thô đến khách hàng cuối.

### Nội dung chính

#### Các thành phần chính của VSM

| Thành phần | Ý nghĩa | Ký hiệu |
|-----------|---------|---------|
| **Process Box** | Công đoạn/bước trong chuỗi | Hình chữ nhật |
| **Inventory Triangle** | Tồn kho giữa các bước | Tam giác |
| **Information Flow** | Dòng thông tin (đơn hàng, dự báo) | Mũi tên nét đứt |
| **Material Flow** | Dòng vật liệu vật lý | Mũi tên nét liền |
| **Timeline** | Thời gian xử lý (PT) & thời gian chờ (WT) | Đường zigzag dưới cùng |
| **Kaizen Burst** | Cơ hội cải tiến | Hình ngôi sao nổ |

#### Hai loại bản đồ

- **Current State Map:** Bản đồ hiện trạng — "Chúng ta đang ở đâu?"
- **Future State Map:** Bản đồ tương lai — "Chúng ta muốn đến đâu?"

#### Các chỉ số quan trọng trong VSM

| Chỉ số | Ý nghĩa |
|--------|---------|
| **Lead Time (LT)** | Tổng thời gian từ đầu đến cuối dòng giá trị |
| **Processing Time (PT)** | Thời gian thực sự tạo giá trị |
| **Value-Added Ratio** | PT / LT × 100% — thường chỉ 1–5%! |
| **Takt Time** | Nhịp sản xuất theo nhu cầu khách hàng |
| **Bottleneck** | Điểm nghẽn — công đoạn có cycle time dài nhất |

### Áp dụng cho buổi học này

| Chủ đề buổi 1 | Phần VSM liên quan |
|---------------|--------------------|
| Mô hình end-to-end | Current State Map — nhìn toàn cảnh chuỗi |
| SCOR Model | VSM bổ sung cho SCOR L3–L4: chi tiết hóa từng bước trong process |
| Mapping thực tế | VSM là **công cụ chính** để mapping chuỗi thực tế |
| Bottleneck | VSM giúp nhận diện bottleneck bằng timeline analysis |

#### Kết hợp VSM với SCOR

```
SCOR Level 1-2: Xác định phạm vi (Plan → Source → Make → Deliver)
       ↓
SCOR Level 3: Chi tiết hóa từng process element
       ↓
VSM: Vẽ dòng giá trị cho từng process element, đo thời gian, nhận diện waste
       ↓
SCOR Level 4: Thiết kế quy trình cải tiến dựa trên Future State Map
```

### Ví dụ thực tế

**Tình huống: Nhà máy may mặc xuất khẩu (Long An)**

Vẽ VSM cho quy trình từ nhận vải đến giao thành phẩm:

- **Lead Time tổng:** 15 ngày
- **Processing Time:** 3 ngày (cắt: 0.5 ngày → may: 1.5 ngày → QC: 0.5 ngày → đóng gói: 0.5 ngày)
- **Value-Added Ratio:** 3/15 = **20%** — nghĩa là 80% thời gian là chờ đợi!
- **Bottleneck:** Công đoạn may (cycle time dài nhất, hàng tồn đọng trước trạm may).
- **Kaizen Burst:** Giảm WIP giữa cắt và may bằng hệ thống kéo (pull system), áp dụng FIFO lane.

---

## 🎓 Chứng chỉ liên quan

| Chứng chỉ | Tổ chức | Yêu cầu | Phù hợp cho | Chi phí ước tính |
|-----------|---------|---------|-------------|-----------------|
| **CPIM** (Certified in Planning and Inventory Management) | ASCM (APICS) | 2 kỳ thi (Part 1 & Part 2), không yêu cầu kinh nghiệm bắt buộc | Chuyên viên kế hoạch, tồn kho, sản xuất | ~$2,000–$2,500 |
| **CSCP** (Certified Supply Chain Professional) | ASCM (APICS) | 1 kỳ thi, cần 3 năm kinh nghiệm HOẶC bằng cử nhân + 1 năm kinh nghiệm | Quản lý SCM end-to-end, manager trở lên | ~$2,000–$2,500 |
| **SCOR-P** (SCOR Professional) | ASCM (APICS) | Hoàn thành khóa học SCOR + workshop + thi | Chuyên gia tư vấn, cải tiến chuỗi cung ứng | ~$3,000–$4,000 |
| **CLTD** (Certified in Logistics, Transportation and Distribution) | ASCM (APICS) | 1 kỳ thi, không yêu cầu kinh nghiệm bắt buộc | Chuyên viên logistics, vận tải | ~$2,000–$2,500 |
| **Lean Six Sigma Green Belt** | ASQ / IASSC | Thi + dự án thực tế (tùy tổ chức) | Người muốn ứng dụng VSM & cải tiến liên tục | ~$300–$2,000 |

> 💡 **Gợi ý lộ trình cho người mới:**
> 1. Bắt đầu với **CPIM Part 1** → xây nền tảng vững.
> 2. Thi **CSCP** khi đủ kinh nghiệm → bao quát end-to-end.
> 3. Học thêm **SCOR-P** hoặc **Lean Six Sigma** tùy hướng phát triển.

---

## 🔗 Ma trận tiêu chuẩn × Chủ đề buổi học

| Chủ đề buổi học | Tiêu chuẩn áp dụng | Mức độ | Ghi chú |
|----------------|-------------------|--------|---------|
| Mô hình chuỗi cung ứng end-to-end | SCOR (L1), GSCF | ⭐⭐⭐ Bắt buộc | Hai framework bổ trợ: SCOR (operations) + GSCF (relationships) |
| Vai trò SCM trong chiến lược doanh nghiệp | APICS BoK, SCOR Performance Attributes | ⭐⭐ Nên có | APICS BoK cung cấp tư duy chiến lược SCM |
| SCOR Model (6 processes, 4 levels) | SCOR v13.0 | ⭐⭐⭐ Bắt buộc | Nền tảng cốt lõi — cần nắm vững trước khi học tiếp |
| Mapping chuỗi cung ứng thực tế | VSM, SCOR L3–L4 | ⭐⭐⭐ Bắt buộc | VSM là công cụ thực hành chính |
| An ninh & rủi ro chuỗi cung ứng | ISO 28000:2022 | ⭐⭐ Nên có | Bổ sung góc nhìn an ninh & resilience |

**Chú thích:**
- ⭐⭐⭐ **Bắt buộc:** Cần nắm vững để hiểu bài và làm bài tập.
- ⭐⭐ **Nên có:** Mở rộng kiến thức, phù hợp ai muốn đào sâu.
- ⭐ **Tham khảo:** Biết để mở rộng tầm nhìn.

---

## 📝 Checklist tuân thủ

### SCOR Model
- [ ] Đã hiểu và phân biệt được 6 processes: Plan, Source, Make, Deliver, Return, Enable
- [ ] Đã biết 4 cấp độ (Level 1–4) và vai trò từng cấp
- [ ] Đã nắm 5 performance attributes và metric tiêu biểu
- [ ] Có thể mapping một chuỗi đơn giản theo SCOR Level 1–2

### APICS Body of Knowledge
- [ ] Đã biết APICS/ASCM là tổ chức nào, vai trò trong ngành
- [ ] Đã hiểu các lĩnh vực kiến thức chính (knowledge domains)
- [ ] Đã phân biệt được CPIM vs CSCP vs SCOR-P

### ISO 28000:2022
- [ ] Đã hiểu mục đích tiêu chuẩn — an ninh chuỗi cung ứng
- [ ] Đã biết cấu trúc HLS và cách tích hợp với ISO khác
- [ ] Đã nhận diện được ít nhất 3 rủi ro an ninh trong chuỗi cung ứng mẫu

### GSCF Framework
- [ ] Đã liệt kê được 8 key business processes
- [ ] Đã so sánh được GSCF vs SCOR (điểm mạnh/yếu)
- [ ] Đã hiểu tại sao cần cả hai framework

### Value Stream Mapping
- [ ] Đã biết các ký hiệu cơ bản của VSM
- [ ] Đã hiểu khái niệm Lead Time, Processing Time, Value-Added Ratio
- [ ] Đã nhận diện được bottleneck trên VSM mẫu
- [ ] Đã biết cách kết hợp VSM với SCOR (L3–L4)

---

## 📚 Tài liệu tham khảo

### Tài liệu chính thức

1. **SCOR Model v13.0**
   - ASCM (APICS): [https://www.ascm.org/learning/scor/](https://www.ascm.org/learning/scor/)
   - SCOR Quick Reference Guide (có thể tải miễn phí sau đăng ký)

2. **APICS Body of Knowledge**
   - ASCM Learning: [https://www.ascm.org/learning/](https://www.ascm.org/learning/)
   - APICS Dictionary (17th Edition)

3. **ISO 28000:2022**
   - ISO: [https://www.iso.org/standard/79612.html](https://www.iso.org/standard/79612.html)
   - Tóm tắt miễn phí trên ISO Online Browsing Platform

4. **GSCF Framework**
   - Lambert, D.M. (2014). *Supply Chain Management: Processes, Partnerships, Performance.* Supply Chain Management Institute.
   - Lambert, D.M. & Enz, M.G. (2017). "Issues in Supply Chain Management: Progress and Potential." *Industrial Marketing Management*, 62, 1–16.

5. **Value Stream Mapping**
   - Rother, M. & Shook, J. (2003). *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda.* Lean Enterprise Institute.
   - LEI: [https://www.lean.org/](https://www.lean.org/)

### Sách tham khảo thêm

- Chopra, S. & Meindl, P. (2019). *Supply Chain Management: Strategy, Planning, and Operation.* 7th Edition, Pearson.
- Hugos, M.H. (2018). *Essentials of Supply Chain Management.* 4th Edition, Wiley.

---

→ [📘 Quay lại bài học: Buổi 1](/guide/buoi-01) | [📋 Danh sách tiêu chuẩn](/standard/)
