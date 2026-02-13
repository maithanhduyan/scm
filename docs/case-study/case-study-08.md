---
outline: [2, 3]
---

# 📦 Case Study Buổi 8: Hoạch định nhu cầu (Demand Planning)

Dự báo nhu cầu (Demand Planning) chính xác là nền tảng của mọi quyết định trong chuỗi cung ứng — từ mua hàng, sản xuất, tồn kho đến phân phối. Một sai lệch nhỏ trong forecast có thể dẫn đến hàng triệu đô-la tồn kho dư thừa hoặc mất doanh thu vì thiếu hàng. Ba case study dưới đây minh hoạ ba kịch bản điển hình: triển khai S&OP/IBP xuất sắc, ứng dụng Demand Sensing bằng AI/ML, và thất bại thảm khốc vì forecast sai.

---

## 1. Unilever — Chuyển đổi S&OP/IBP toàn cầu

### 📋 Thông tin công ty

| Tiêu chí | Chi tiết |
|---|---|
| **Công ty** | Unilever |
| **Ngành** | FMCG (Thực phẩm, chăm sóc cá nhân & gia đình) |
| **Quy mô** | ~60 tỷ EUR doanh thu, 190+ quốc gia, 400+ thương hiệu |
| **Thời gian** | 2014 – 2020 |

### 🔍 Bối cảnh & thách thức

Trước 2014, Unilever vận hành hệ thống dự báo phân tán theo từng quốc gia, mỗi nơi dùng công cụ và quy trình riêng. Forecast error trung bình ở mức **40-50%** tại nhiều thị trường. Quy trình S&OP truyền thống chỉ dừng ở cấp khu vực, thiếu tích hợp giữa các khối Finance, Marketing và Supply Chain. Hệ quả là tồn kho cao, chi phí write-off lớn và mức phục vụ (service level) không đồng đều.

### 💡 Giải pháp triển khai

- **Integrated Business Planning (IBP):** Unilever triển khai mô hình IBP 5 bước chuẩn theo Oliver Wight — Product Review → Demand Review → Supply Review → Integrated Reconciliation → Management Business Review — áp dụng thống nhất toàn cầu.
- **Nền tảng công nghệ:** Chuyển sang SAP IBP làm nền tảng duy nhất, tích hợp dữ liệu từ ERP, Trade Promotion, POS và market intelligence.
- **Demand Sensing bổ trợ:** Kết hợp dữ liệu POS hàng tuần từ các retailer lớn (Walmart, Tesco) vào chu kỳ IBP hàng tháng để điều chỉnh forecast ngắn hạn.
- **Consensus Forecast:** Mỗi cycle, forecast thống kê được đối chiếu với input từ Sales, Marketing, Finance và Key Account để tạo một con số thống nhất (one-number plan).

### 📊 Kết quả đạt được

| KPI | Trước IBP | Sau IBP |
|---|---|---|
| Forecast Accuracy (MAPE) | ~55% | **~80%** |
| Inventory Days | 70+ ngày | **~50 ngày** |
| Service Level | 92% | **97%+** |
| Waste / Write-off | Cao | Giảm **~30%** |

Unilever được Gartner xếp hạng **#1 Supply Chain Top 25** nhiều năm liên tiếp (2016-2019), với S&OP/IBP được đánh giá là best-in-class.

### 🇻🇳 Bài học cho doanh nghiệp Việt Nam

- Doanh nghiệp FMCG Việt Nam (Masan, Vinamilk) có thể bắt đầu IBP từ **Demand Review + Supply Review** trước khi mở rộng đầy đủ 5 bước.
- Consensus Forecast giữa Sales và Planning là bước đơn giản nhất nhưng mang lại hiệu quả lớn — chỉ cần một cuộc họp tuần/tháng có cấu trúc rõ ràng.
- Không cần SAP IBP ngay: có thể dùng Excel/Google Sheets kết hợp Power BI để chạy quy trình IBP thủ công giai đoạn đầu.

---

## 2. Procter & Gamble (P&G) — Tiên phong Demand Sensing bằng AI

### 📋 Thông tin công ty

| Tiêu chí | Chi tiết |
|---|---|
| **Công ty** | Procter & Gamble (P&G) |
| **Ngành** | FMCG (Chăm sóc gia đình, cá nhân, sức khỏe) |
| **Quy mô** | ~82 tỷ USD doanh thu, 180+ quốc gia, 65+ thương hiệu tỷ đô |
| **Thời gian** | 2013 – nay |

### 🔍 Bối cảnh & thách thức

P&G quản lý danh mục sản phẩm khổng lồ với hàng trăm nghìn SKU. Forecast truyền thống (monthly, dựa trên lịch sử bán hàng + judgment) chỉ đạt độ chính xác **60-65%** ở cấp tuần/SKU/store. Với vòng đời sản phẩm ngắn và khuyến mãi thường xuyên, P&G cần forecast có khả năng phản ứng theo **ngày**, không phải tháng.

### 💡 Giải pháp triển khai

- **Demand Sensing Platform:** P&G hợp tác với Terra Technology (nay thuộc E2open) triển khai nền tảng Demand Sensing, thu thập dữ liệu POS real-time từ Walmart, Target, Kroger cùng hàng chục retailer khác.
- **Machine Learning Models:** Thuật toán ML phân tích pattern từ POS data, shipment data, inventory tại DC/store, dữ liệu thời tiết, sự kiện (Super Bowl, Black Friday) và giá đối thủ để tạo **short-term forecast (1-4 tuần)** tự động.
- **Tích hợp Google Trends & Social Listening:** Theo dõi xu hướng tìm kiếm và đề cập trên mạng xã hội để phát hiện sớm demand signal bất thường (ví dụ: nhu cầu khẩu trang tăng đột biến đầu COVID-19).
- **CPFR với retailer lớn:** Chia sẻ forecast hai chiều với Walmart qua nền tảng Retail Link, đối chiếu với POS và inventory data để tạo collaborative forecast.

### 📊 Kết quả đạt được

| KPI | Trước Demand Sensing | Sau Demand Sensing |
|---|---|---|
| Short-term Forecast Error | 35-40% | **~15-20%** |
| Forecast Accuracy (tuần) | ~60% | **~85%** |
| Out-of-stock rate | 8-10% | **~3-4%** |
| Inventory Reduction | Baseline | **Giảm ~15-20%** |

P&G báo cáo tiết kiệm hàng trăm triệu USD/năm nhờ giảm lost sales và tối ưu tồn kho. Công ty được xem là **benchmark** cho Demand Sensing trong ngành FMCG (nguồn: Gartner, E2open case studies).

### 🇻🇳 Bài học cho doanh nghiệp Việt Nam

- Dữ liệu POS tại Việt Nam đang dần phổ biến qua các chuỗi bán lẻ hiện đại (WinMart, Bách Hoá Xanh, MML). Doanh nghiệp nên **đàm phán chia sẻ data** với nhà bán lẻ.
- Có thể bắt đầu Demand Sensing đơn giản bằng **Google Trends + dữ liệu bán hàng nội bộ** kết hợp mô hình hồi quy trong Python/R.
- Ngành hàng có tính mùa vụ cao (bia, bánh kẹo Tết) đặc biệt phù hợp để thí điểm Demand Sensing.

---

## 3. Nike 2001 — Thảm hoạ dự báo sai $100 triệu

### 📋 Thông tin công ty

| Tiêu chí | Chi tiết |
|---|---|
| **Công ty** | Nike, Inc. |
| **Ngành** | Thời trang thể thao (Footwear & Apparel) |
| **Quy mô** | ~9 tỷ USD doanh thu (2001), toàn cầu |
| **Thời gian** | 2000 – 2001 |

### 🔍 Bối cảnh & thách thức

Năm 2000, Nike triển khai hệ thống demand planning mới từ **i2 Technologies** (phần mềm dự báo nhu cầu hàng đầu thời đó) với chi phí ~$400 triệu cho toàn bộ chương trình ERP/SCM. Hệ thống đi vào vận hành ngay mùa bán hàng quan trọng nhất của năm.

### 💡 Giải pháp triển khai (và sai lầm)

- **Go-live vội vã:** Nike đưa i2 vào production khi hệ thống chưa được kiểm thử đầy đủ, dữ liệu lịch sử chưa được cleansing, và người dùng chưa được đào tạo bài bản.
- **Forecast sai lệch nghiêm trọng:** Hệ thống i2 tạo ra forecast **quá cao cho dòng Air Force 1** (sản phẩm bình dân) và **quá thấp cho dòng Air Jordan** (sản phẩm cao cấp, biên lợi nhuận cao).
- **Thiếu kiểm tra chéo:** Không có quy trình Consensus Forecast — output từ hệ thống được chuyển thẳng sang sản xuất mà không qua review của Sales hay Regional Managers.
- **Dữ liệu kém chất lượng:** Garbage in – Garbage out. Dữ liệu đầu vào lỗi, trùng lặp, không đồng bộ giữa các hệ thống cũ và mới.

### 📊 Kết quả đạt được

| KPI | Tác động |
|---|---|
| Mất doanh thu | **~$100 triệu** do thiếu hàng Air Jordan |
| Tồn kho dư | Hàng triệu đôi Air Force 1 phải giảm giá bán |
| Giá cổ phiếu | Giảm **~20%** trong quý |
| Chi phí khắc phục | Hàng chục triệu USD để sửa hệ thống |

CEO Phil Knight tuyên bố nổi tiếng: *"This is what you get for $400 million — a speed bump."* Nike mất 2-3 năm để ổn định lại hệ thống dự báo (nguồn: CIO Magazine, Wall Street Journal).

### 🇻🇳 Bài học cho doanh nghiệp Việt Nam

- **Đừng bao giờ bỏ qua data cleansing** trước khi triển khai hệ thống mới — "Garbage in, Garbage out" là quy tắc bất biến.
- **Consensus Forecast là bắt buộc:** Output từ hệ thống phải được đội ngũ Sales, Marketing review trước khi chuyển sang sản xuất.
- Triển khai hệ thống dự báo nên theo phương pháp **phased rollout** (từng giai đoạn, từng khu vực) thay vì big-bang.
- Doanh nghiệp Việt Nam đang chuyển từ Excel sang ERP/phần mềm dự báo cần đặc biệt cẩn trọng với giai đoạn migration data.

---

## 📊 Bảng so sánh tổng hợp

| Tiêu chí | Unilever (S&OP/IBP) | P&G (Demand Sensing) | Nike (Forecast Failure) |
|---|---|---|---|
| **Mục tiêu** | Tích hợp quy trình planning toàn cầu | Real-time short-term forecast | Hiện đại hoá hệ thống dự báo |
| **Công nghệ** | SAP IBP, Consensus process | ML/AI, POS real-time, E2open | i2 Technologies |
| **Kết quả** | Forecast accuracy ~80%, #1 Gartner | Forecast error giảm 50%, OOS ~3% | Mất $100M, cổ phiếu giảm 20% |
| **Yếu tố thành công** | Quy trình IBP chuẩn + cam kết lãnh đạo | Dữ liệu real-time + thuật toán ML | — |
| **Nguyên nhân thất bại** | — | — | Dữ liệu bẩn, go-live vội, thiếu consensus |
| **Bài học chính** | One-number plan + kỷ luật quy trình | Data-driven, bắt đầu từ POS data | Data quality + phased rollout |

## 💬 Câu hỏi thảo luận

1. **S&OP vs. IBP:** Sự khác biệt cốt lõi giữa S&OP truyền thống và IBP là gì? Tại sao Unilever chọn chuyển sang IBP thay vì cải tiến S&OP hiện tại?

2. **Demand Sensing tại Việt Nam:** Với hạn chế về dữ liệu POS ở kênh truyền thống (chợ, tạp hoá), doanh nghiệp Việt Nam có thể dùng những nguồn dữ liệu thay thế nào để triển khai Demand Sensing?

3. **Bài học từ Nike:** Nếu bạn là SCM Director tại Nike năm 2000, bạn sẽ thay đổi điều gì trong kế hoạch triển khai i2 để tránh thảm hoạ?

4. **Consensus Forecast:** Làm thế nào để cân bằng giữa statistical forecast (từ hệ thống) và judgment forecast (từ Sales/Marketing) mà không bị bias từ một bên nào?

## 🔗 Đọc thêm

[Xem bài giảng đầy đủ →](/guide/buoi-08)
