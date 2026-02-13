---
outline: [2, 3]
---

# 📦 Case Study Buổi 7: Nguyên tắc quản lý tồn kho

Tồn kho (Inventory) vừa là tài sản lớn nhất, vừa là rủi ro lớn nhất của bất kỳ chuỗi cung ứng nào. Giữ quá nhiều — vốn bị chôn, hàng lỗi thời; giữ quá ít — mất doanh thu, khách hàng chuyển sang đối thủ. Ba case study dưới đây minh hoạ ba cách tiếp cận quản lý tồn kho khác nhau: JIT đỉnh cao của Toyota, VMI đa tầng giữa Walmart & P&G, và bài học thất bại đắt giá $5,4 tỷ của Target Canada.

---

## 1. Toyota — Khai sinh JIT & Kanban, tồn kho gần bằng không

### 📋 Thông tin công ty

| Hạng mục | Chi tiết |
|---|---|
| **Công ty** | Toyota Motor Corporation |
| **Ngành** | Sản xuất ô tô |
| **Quy mô** | Doanh thu ~$274 tỷ (FY2023), ~375.000 nhân viên toàn cầu |
| **Thời gian** | Hệ thống Toyota Production System (TPS) phát triển từ thập niên 1950, hoàn thiện liên tục đến nay |

### 🔍 Bối cảnh & thách thức

Sau Thế chiến II, Toyota đối mặt với nguồn vốn hạn hẹp và thị trường nội địa nhỏ — không thể sản xuất hàng loạt kiểu Ford. Taiichi Ohno nhận ra rằng **tồn kho là lãng phí (muda)**: nó che giấu lỗi sản xuất, chiếm dụng vốn và tạo chi phí lưu kho khổng lồ. Thách thức là làm sao sản xuất đúng sản phẩm, đúng số lượng, đúng thời điểm mà không cần kho đệm lớn.

### 💡 Giải pháp triển khai

- **Just-In-Time (JIT):** Linh kiện chỉ được giao đến dây chuyền khi cần, thường trong vòng 2–4 giờ trước khi lắp ráp. Toyota duy trì **inventory turns 10–13 lần/năm** — cao gấp đôi trung bình ngành.
- **Kanban:** Hệ thống thẻ tín hiệu kéo (pull) — trạm sau gửi kanban cho trạm trước khi cần bổ sung, loại bỏ sản xuất thừa.
- **Heijunka (Production Leveling):** San bằng sản lượng để tránh biến động nhu cầu gây bullwhip effect lên nhà cung cấp.
- **Supplier Integration:** Hơn 200 nhà cung cấp Tier-1 đặt nhà máy trong bán kính 50 km quanh Toyota City, giao hàng nhiều lần/ngày với lot size nhỏ.
- **Safety Stock tối thiểu:** Chỉ giữ safety stock cho linh kiện có lead time dài hoặc nguồn cung đơn lẻ, tính theo công thức Safety Stock = Z × σ_LT với mức phục vụ 97–99%.

### 📊 Kết quả đạt được

| KPI | Trước TPS | Sau TPS |
|---|---|---|
| Inventory Turns | ~4 lần/năm | 10–13 lần/năm |
| Days of Supply | ~90 ngày | 28–35 ngày |
| Lead Time sản xuất 1 xe | ~15 ngày | ~1–2 ngày |
| Tỷ lệ lỗi (Defect Rate) | Cao | < 0,03% |

Toyota liên tục dẫn đầu về lợi nhuận trong ngành ô tô, một phần nhờ chi phí tồn kho thấp hơn đối thủ $2–3 tỷ/năm (nguồn: *Harvard Business Review*, *The Toyota Way* — Jeffrey Liker).

### 🇻🇳 Bài học cho doanh nghiệp Việt Nam

- **Bắt đầu từ kanban đơn giản:** Doanh nghiệp sản xuất SME có thể dùng kanban vật lý (thẻ, hộp) trước khi số hoá.
- **Xây dựng mạng lưới nhà cung cấp gần:** Tận dụng các cụm công nghiệp (Bình Dương, Bắc Ninh) để giảm lead time giao hàng.
- **JIT cần nền tảng chất lượng:** Không thể JIT nếu tỷ lệ lỗi cao — phải ưu tiên TQM trước.

---

## 2. Walmart & P&G — VMI và quản lý tồn kho đa tầng

### 📋 Thông tin công ty

| Hạng mục | Chi tiết |
|---|---|
| **Công ty** | Walmart Inc. & Procter & Gamble (P&G) |
| **Ngành** | Bán lẻ & FMCG |
| **Quy mô** | Walmart: $611 tỷ doanh thu (2023), 10.500+ cửa hàng; P&G: $82 tỷ doanh thu, 65+ thương hiệu |
| **Thời gian** | Chương trình VMI triển khai từ **1987**, mở rộng CPFR từ 1995 |

### 🔍 Bối cảnh & thách thức

Cuối thập niên 1980, Walmart đối mặt với **bullwhip effect** nghiêm trọng: đơn hàng từ cửa hàng → DC → nhà cung cấp bị khuếch đại gấp 2–5 lần so với nhu cầu thực. Kệ hàng Pampers thường xuyên trống trong khi kho DC lại tồn đọng — vấn đề kinh điển của multi-echelon inventory không đồng bộ.

### 💡 Giải pháp triển khai

- **Vendor-Managed Inventory (VMI):** P&G được cấp quyền truy cập dữ liệu POS realtime của Walmart qua hệ thống **Retail Link**. P&G tự quyết định thời điểm, số lượng bổ sung hàng cho từng DC và cửa hàng Walmart — loại bỏ hoàn toàn đơn đặt hàng truyền thống.
- **CPFR (Collaborative Planning, Forecasting & Replenishment):** Hai bên cùng lập forecast, chia sẻ kế hoạch promotion, điều chỉnh safety stock theo mùa.
- **Multi-echelon Optimization:** Tồn kho được phân bổ tối ưu qua 4 tầng: Nhà máy P&G → Central DC → Regional DC Walmart → Cửa hàng. ABC-XYZ analysis được áp dụng: sản phẩm **AX** (Tide, Pampers — doanh thu cao, nhu cầu ổn định) giữ tồn kho thấp tại store; sản phẩm **CZ** (seasonal, niche) tập trung tại Central DC.
- **Cross-docking:** Hơn 85% hàng hoá qua DC Walmart được cross-dock trong < 24 giờ, giảm nhu cầu lưu kho.

### 📊 Kết quả đạt được

| KPI | Trước VMI | Sau VMI |
|---|---|---|
| On-shelf Availability (Fill Rate) | 87% | 98,5% |
| Inventory Days of Supply (Pampers) | 40 ngày | 17 ngày |
| Bullwhip Ratio | 4–5x | < 1,5x |
| Chi phí vận hành tồn kho | Baseline | Giảm 25–30% |

Chương trình VMI Walmart–P&G trở thành hình mẫu cho toàn ngành FMCG. Đến nay, hơn 10.000 nhà cung cấp Walmart tham gia Retail Link (nguồn: *Supply Chain Management Review*, *Walmart annual report*).

### 🇻🇳 Bài học cho doanh nghiệp Việt Nam

- **Chia sẻ dữ liệu POS là bước đầu tiên:** Các chuỗi bán lẻ (WinCommerce, Bách Hoá Xanh) có thể triển khai VMI pilot với 5–10 nhà cung cấp lớn nhất.
- **ABC-XYZ thực tế:** Phân loại SKU theo doanh thu × biến động để quyết định giữ tồn kho ở đâu trong mạng lưới.
- **CPFR không cần công nghệ đắt:** Bắt đầu bằng Excel chia sẻ forecast hàng tuần giữa nhà bán lẻ và nhà cung cấp.

---

## 3. Target Canada — Thảm hoạ tồn kho $5,4 tỷ

### 📋 Thông tin công ty

| Hạng mục | Chi tiết |
|---|---|
| **Công ty** | Target Corporation (mở rộng sang Canada) |
| **Ngành** | Bán lẻ |
| **Quy mô** | 133 cửa hàng tại Canada, đầu tư ~$5,4 tỷ |
| **Thời gian** | 2013–2015 (từ khai trương đến đóng cửa toàn bộ) |

### 🔍 Bối cảnh & thách thức

Năm 2013, Target — nhà bán lẻ lớn thứ 2 Mỹ — mở rộng sang Canada bằng cách mua lại 220 địa điểm của Zellers. Thách thức: xây dựng toàn bộ hệ thống chuỗi cung ứng mới trong thời gian cực ngắn (18 tháng), bao gồm 3 DC và hệ thống quản lý tồn kho hoàn toàn mới dựa trên SAP.

### 💡 Giải pháp triển khai (và sai lầm)

- **Dữ liệu master data sai lệch:** Khi nhập dữ liệu sản phẩm vào SAP, nhân viên nhập sai **kích thước, trọng lượng, số lượng/thùng** cho hàng nghìn SKU. Ví dụ: một sản phẩm ghi kích thước bằng inch nhưng hệ thống đọc là cm → pallet không vừa kệ, DC từ chối nhận hàng.
- **Reorder Point sai:** Hệ thống tự động tính EOQ và Reorder Point dựa trên dữ liệu sai → đặt hàng quá nhiều sản phẩm không bán được, quá ít sản phẩm bán chạy.
- **Không có safety stock hợp lý:** Lead time từ nhà cung cấp Mỹ sang DC Canada dài hơn dự kiến (customs, logistics), nhưng safety stock không được điều chỉnh.
- **Thiếu ABC analysis:** Tất cả SKU được xử lý như nhau — không ưu tiên replenishment cho sản phẩm loại A.

### 📊 Kết quả đạt được

| KPI | Mục tiêu | Thực tế |
|---|---|---|
| On-shelf Availability | > 95% | **60–75%** (kệ trống 25–40%) |
| Inventory Accuracy | > 98% | < 70% |
| Doanh thu/cửa hàng | Tương đương Target Mỹ | Thấp hơn **50%** |
| Tổng lỗ | — | **$5,4 tỷ** |
| Kết cục | Mở rộng thành công | **Đóng toàn bộ 133 cửa hàng** (tháng 4/2015), sa thải 17.600 nhân viên |

Đây là một trong những thất bại bán lẻ quốc tế lớn nhất lịch sử, nguyên nhân gốc rễ là **quản lý tồn kho thảm hoạ** (nguồn: *Canadian Business*, *The Globe and Mail*, báo cáo nội bộ Target).

### 🇻🇳 Bài học cho doanh nghiệp Việt Nam

- **Master data là nền tảng:** Trước khi triển khai ERP/WMS, phải đầu tư "dọn dẹp" dữ liệu sản phẩm — kích thước, trọng lượng, MOQ, lead time.
- **Không bỏ qua UAT (User Acceptance Testing):** Kiểm thử toàn bộ logic EOQ, Reorder Point, Safety Stock trên dữ liệu thật trước khi go-live.
- **Mở rộng từ từ (phased rollout):** Thay vì mở 133 cửa hàng cùng lúc, nên pilot 10–20 cửa hàng, ổn định rồi mới scale.

---

## 📊 Bảng so sánh tổng hợp

| Tiêu chí | Toyota (JIT) | Walmart–P&G (VMI) | Target Canada (Thất bại) |
|---|---|---|---|
| **Chiến lược tồn kho** | JIT / Pull / Kanban | VMI + CPFR + Multi-echelon | Không rõ ràng, dựa hoàn toàn vào SAP |
| **Inventory Turns** | 10–13x/năm | 8–12x (category FMCG) | Không đo được chính xác |
| **Công cụ chính** | Kanban, Heijunka, Kaizen | Retail Link, ABC-XYZ, Cross-dock | SAP (triển khai lỗi) |
| **Vai trò dữ liệu** | Chia sẻ realtime với supplier | POS realtime + forecast chung | Master data sai lệch nghiêm trọng |
| **Kết quả** | Tiết kiệm $2–3 tỷ/năm | Fill rate 98,5%, giảm 25–30% chi phí | Lỗ $5,4 tỷ, đóng cửa toàn bộ |
| **Bài học cốt lõi** | Tồn kho = lãng phí, loại bỏ bằng hệ thống pull | Hợp tác & chia sẻ dữ liệu triệt tiêu bullwhip | Dữ liệu sai → mọi tính toán EOQ, Safety Stock đều vô nghĩa |

## 💬 Câu hỏi thảo luận

1. **JIT vs. JIC:** Trong bối cảnh chuỗi cung ứng Việt Nam (lead time dài, nhà cung cấp chưa ổn định), doanh nghiệp nên áp dụng JIT hay Just-In-Case? Có thể kết hợp cả hai không?
2. **VMI tại Việt Nam:** Nếu bạn là Supply Chain Manager tại một chuỗi siêu thị Việt Nam, bạn sẽ chọn nhà cung cấp nào để pilot VMI đầu tiên? Tiêu chí lựa chọn là gì?
3. **Bài học Target Canada:** Nếu được giao nhiệm vụ mở rộng chuỗi bán lẻ sang thị trường mới, bạn sẽ thiết kế hệ thống inventory management như thế nào để tránh lặp lại sai lầm của Target?
4. **ABC-XYZ thực hành:** Hãy lấy danh mục sản phẩm của một doanh nghiệp bạn biết, phân loại theo ma trận ABC-XYZ và đề xuất chiến lược tồn kho cho từng nhóm.

## 🔗 Đọc thêm

[Xem bài giảng đầy đủ →](/guide/buoi-07)
