---
outline: [2, 3]
title: "Dự báo sai 35% — câu chuyện đốt tiền thầm lặng "
description: "Tại sao dự báo nhu cầu sai gây thiệt hại lớn. Giải pháp S&OP, CPFR, Demand Sensing và AI forecasting."
head:
  - - meta
    - property: og:title
      content: "Dự báo sai 35% — câu chuyện đốt tiền thầm lặng"
---

# 📖 Blog Buổi 8: Dự báo sai 35% — câu chuyện "đốt tiền" thầm lặng mà doanh nghiệp nào cũng mắc

> Trung bình, forecast của doanh nghiệp sai lệch 30–50%. Mỗi phần trăm sai lệch ấy không biến mất — nó nằm im trong kho hàng, trong container chờ xử lý, trong dòng tiền bốc hơi. Và đáng sợ nhất: phần lớn doanh nghiệp **không biết** mình đang sai bao nhiêu.

## Tại sao phải quan tâm?

Bạn đã bao giờ nấu cơm cho một bữa tiệc chưa?

Hẹn 20 người đến ăn. Nấu cho 15 — thiếu, khách đói, mất mặt. Nấu cho 30 — thừa mứa, đổ bỏ, phí tiền. Đơn giản vậy thôi, nhưng bạn đã nắm được bản chất của **Demand Planning** (hoạch định nhu cầu) rồi đấy.

Bây giờ hãy tưởng tượng bạn không nấu cho 20 người mà cho **20 triệu người**, không phải một bữa mà **mỗi ngày**, không phải cơm mà là hàng nghìn mặt hàng khác nhau — từ sữa tươi (hết hạn sau 7 ngày) đến xi măng (nằm kho thì chết vốn). Đó chính là bài toán mà bất kỳ doanh nghiệp nào cũng phải giải, và phần lớn... giải sai.

Dự báo nhu cầu không phải là "đoán mò". Nó là **khoa học**, là **quy trình**, và quan trọng nhất — nó là **tiền**. Dự báo đúng, bạn tiết kiệm hàng tỷ đồng. Dự báo sai, bạn đốt tiền mà không thấy lửa.

## Có gì đáng sợ?

Hãy tưởng tượng bạn là giám đốc sản xuất. Bộ phận sales nói: *"Quý tới chắc chắn bán được 100.000 sản phẩm!"* Bạn tin, bạn lên kế hoạch sản xuất, mua nguyên liệu, thuê thêm công nhân, book container...

Rồi thực tế? **Bán được 65.000**.

35.000 sản phẩm còn lại nằm đâu? Trong kho. Chi phí lưu kho, chi phí vốn bị chôn, chi phí nhân công đã trả, nguyên liệu đã mua — tất cả trở thành **tiền chết**. Nếu sản phẩm có hạn sử dụng? Còn phải hủy bỏ hoặc bán tháo lỗ.

Ngược lại cũng không kém phần kinh khủng: dự báo **thấp hơn** thực tế → hết hàng → khách chuyển sang đối thủ → mất doanh thu, mất thị phần, mất lòng tin. Trong ngành FMCG, *out-of-stock* trên kệ siêu thị chỉ 3 ngày là đủ để khách hàng "quen tay" mua brand khác.

Đo lường sự "sai" này có một chỉ số rất phổ biến: **MAPE** (Mean Absolute Percentage Error) — nôm na là "forecast sai bao nhiêu phần trăm so với thực tế". MAPE dưới 20% là tốt. Nhiều doanh nghiệp Việt Nam? MAPE 40–60% là chuyện... bình thường. 😬

## Có cách nào không?

Có, và không chỉ một cách.

### 🔮 Forecasting Methods — Nghệ thuật nhìn về tương lai

Có hai trường phái lớn:

**Định tính** (dựa vào con người):
- **Expert Judgment**: Hỏi chuyên gia — ông trưởng phòng kinh doanh 20 năm kinh nghiệm "cảm" được thị trường
- **Delphi Method**: Hỏi nhiều chuyên gia rồi tổng hợp — kiểu "trí tuệ tập thể"
- **Market Research**: Hỏi thẳng khách hàng — "Anh chị có mua không?"
- **Sales Force Composite**: Hỏi đội sales từng vùng, cộng lại

**Định lượng** (dựa vào dữ liệu):
- **Moving Average** (trung bình trượt): Nhìn lại 3 tháng gần nhất, lấy trung bình → đoán tháng sau. Đơn giản như đếm xem tuần qua bạn ăn trung bình mấy bát cơm, rồi dự đoán tuần sau cũng tầm đó.
- **Exponential Smoothing** (làm trơn hàm mũ): Giống Moving Average nhưng thông minh hơn — **tháng gần nhất quan trọng hơn** tháng xa. Vì thị trường thay đổi, tháng trước chính xác hơn tháng năm ngoái.
- **Linear Regression**: Vẽ đường xu hướng — bán hàng tăng đều 5% mỗi tháng → dự báo tháng sau tăng tiếp 5%.
- **Seasonal Decomposition**: Tách riêng yếu tố mùa vụ — kem bán chạy mùa hè, áo ấm bán chạy mùa đông. Không thể lấy doanh số tháng 7 để đoán tháng 12 được!

Mỗi phương pháp có ưu nhược khác nhau, và doanh nghiệp giỏi thường **kết hợp cả hai** — dùng số liệu làm nền, rồi để chuyên gia điều chỉnh.

### 🤝 S&OP / IBP — "Họp gia đình" phiên bản doanh nghiệp

**S&OP** (Sales & Operations Planning) giống như **họp gia đình cuối tháng bàn chi tiêu**:

- Tháng này thu nhập bao nhiêu? (Demand Review — nhu cầu thị trường thế nào?)
- Chi tiêu ra sao? (Supply Review — năng lực sản xuất/mua hàng thế nào?)
- Có đủ tiền không? Cần cắt giảm gì? (Pre-S&OP — cân bằng cung cầu)
- Bố mẹ duyệt! (Executive S&OP — ban lãnh đạo quyết định)

Chu kỳ S&OP thường diễn ra **hàng tháng**: Thu thập dữ liệu → Đánh giá nhu cầu → Đánh giá nguồn cung → Họp sơ bộ → Họp cấp lãnh đạo.

**IBP** (Integrated Business Planning) là phiên bản **nâng cấp** của S&OP — không chỉ cân bằng cung cầu mà còn gắn với tài chính và chiến lược dài hạn. IBP có 5 bước: Product Review → Demand Review → Supply Review → Integrated Reconciliation → Management Business Review.

Nếu S&OP là "họp gia đình bàn chi tiêu tháng", thì IBP là "họp gia đình bàn chi tiêu tháng **kèm kế hoạch mua nhà 5 năm nữa**".

## Cụ thể thì làm gì?

### ⚡ Demand Sensing — "Check thời tiết trước khi đi picnic"

Forecast truyền thống giống như xem dự báo thời tiết **của tháng sau** — đúng ở mức khái quát nhưng sai nhiều chi tiết. **Demand Sensing** là xem dự báo thời tiết **trong 2 giờ tới** — chính xác hơn rất nhiều.

| | Forecast truyền thống | Demand Sensing |
|---|---|---|
| **Tầm nhìn** | Tháng / Quý | Ngày / Tuần |
| **Dữ liệu** | Lịch sử bán hàng | Real-time: POS, thời tiết, mạng xã hội |
| **Độ chính xác** | 60–70% | 80–90% |

Demand Sensing lấy dữ liệu từ đâu?
- 🛒 **POS data** — dữ liệu bán hàng tại quầy, cập nhật hàng giờ
- 🌦️ **Weather data** — trời nóng → nước giải khát tăng, trời mưa → dù tăng
- 📱 **Social media** — sản phẩm nào đang viral trên TikTok?
- 🔍 **Google Trends** — từ khóa nào đang được search nhiều?
- 📅 **Event data** — sắp có lễ hội, concert, hay World Cup?
- 📦 **Channel inventory** — kho đại lý còn bao nhiêu?

### 🔄 CPFR — "Hỏi khách trước rồi hãy nấu"

**CPFR** (Collaborative Planning, Forecasting and Replenishment) là khi **nhà sản xuất và nhà bán lẻ ngồi lại với nhau** chia sẻ:

- Forecast của mỗi bên
- Dữ liệu bán hàng thực tế (POS data)
- Tình trạng tồn kho

Thay vì mỗi bên tự đoán, cả hai cùng đoán → chính xác hơn. Giống như thay vì bạn tự đoán khách ăn được bao nhiêu, bạn **hỏi thẳng khách**: "Bạn ăn cơm hay phở? Mấy bát?" Đơn giản nhưng hiệu quả vô cùng.

Kết quả cuối cùng là **Consensus Forecast** — bản dự báo đồng thuận, kết hợp:

> Statistical baseline (máy tính đoán) + Sales input (đội bán hàng nói) + Marketing input (bộ phận marketing nói) + Customer input (khách hàng nói) → **Consensus meeting** → Bản forecast cuối cùng

## Chuyện thực tế

### 🥮 Bánh Trung Thu và bài học triệu đô

Công ty **Hoàng Phát Food** (tên đã thay đổi) là một doanh nghiệp sản xuất bánh trung thu tầm trung ở miền Nam. Năm 2023, họ bán **sạch kho** — 500.000 hộp bay hết trong 3 tuần, thậm chí nhiều đại lý còn "xin thêm" mà không có hàng giao.

Ban giám đốc hưng phấn. Cuộc họp cuối năm, giám đốc kinh doanh tuyên bố: *"Năm nay mình thiếu hàng, năm sau phải sản xuất gấp đôi!"*

Năm 2024, Hoàng Phát sản xuất **1 triệu hộp**.

Và rồi Trung Thu đến...

Đầu mùa bán chậm — *"Chắc do sớm quá, chờ thêm."* Giữa mùa vẫn chậm — *"Năm nay kinh tế khó khăn, mọi người tiết kiệm."* Hết Trung Thu — kho còn **400.000 hộp**. 40% sản lượng. Nằm im. Bánh trung thu thì không thể bán sau Tết Trung Thu.

Kết quả? Giảm giá 50% bán tháo cho các kênh online. Tặng nhân viên. Xuất khẩu giá rẻ. Ước tính **lỗ ròng hàng chục tỷ đồng**.

Sai ở đâu?

- ❌ Dùng **duy nhất** dữ liệu năm trước (lịch sử 1 năm) để dự báo
- ❌ Không xét yếu tố thị trường: đối thủ tăng sản lượng, xu hướng tiêu dùng thay đổi (ít quà tặng công ty hơn do cắt giảm chi phí)
- ❌ Không có quy trình S&OP — quyết định dựa trên "cảm giác" của ban giám đốc
- ❌ Không demand sensing — không theo dõi tín hiệu thị trường real-time

**Năm 2025, Hoàng Phát làm khác:**

1. **S&OP monthly cycle** bắt đầu từ tháng 4 — 5 tháng trước Trung Thu
2. **Demand Sensing**: theo dõi Google Trends từ khóa "bánh trung thu", "quà tặng trung thu"; theo dõi đơn đặt trước từ đại lý; theo dõi sentiment trên mạng xã hội
3. **CPFR** với 10 đại lý lớn nhất — chia sẻ dữ liệu tồn kho và forecast hai chiều
4. **Consensus Forecast**: kết hợp baseline thống kê + input từ sales 3 miền + marketing + dữ liệu đại lý

Kết quả? Sản xuất 650.000 hộp. Bán được 620.000. Tồn kho chỉ **~5%** — nằm trong ngưỡng chấp nhận được. MAPE giảm từ 40% xuống còn khoảng 12%.

Không cần phép màu. Chỉ cần **quy trình đúng + dữ liệu đúng + con người cùng nói chuyện với nhau**.

## Bảng so sánh

| Khái niệm SCM | Đời thường |
|---|---|
| **Forecast** | Dự đoán nấu bao nhiêu cơm cho bữa tiệc 🍚 |
| **MAPE** | "Sai bao nhiêu phần trăm?" — nấu 10 bát mà khách ăn có 7 → sai 30% |
| **Moving Average** | Nhìn 3 bữa tiệc gần nhất, trung bình mỗi bữa ăn 8 bát → lần sau nấu 8 |
| **Exponential Smoothing** | Bữa gần nhất ăn 10 bát thì quan trọng hơn bữa 6 tháng trước ăn 5 bát |
| **S&OP** | Họp gia đình cuối tháng bàn thu chi — ai cần gì, có đủ tiền không 💰 |
| **IBP** | Họp gia đình cuối tháng + kế hoạch mua nhà 5 năm nữa 🏠 |
| **Demand Sensing** | Check thời tiết 2 tiếng trước khi đi picnic — chính xác hơn xem tuần trước ☀️ |
| **CPFR** | Hỏi khách "ăn cơm hay phở, mấy bát?" trước khi nấu — thay vì tự đoán 🤔 |
| **Consensus Forecast** | Hỏi cả nhà, cả khách, rồi quyết định nấu bao nhiêu — thay vì một mình bố quyết |
| **Forecast Bias** | Bạn luôn nấu thừa → bias dương. Luôn nấu thiếu → bias âm 📊 |

## Bài học rút ra

1. 🎯 **Forecast sai là bình thường — không forecast mới là thảm họa.** Mục tiêu không phải 100% chính xác, mà là **giảm sai lệch liên tục**.

2. 🤝 **Dự báo không phải việc của một phòng ban.** Sales, Marketing, Supply Chain, Finance — tất cả phải cùng ngồi lại (S&OP/IBP). Dự báo tốt nhất đến từ sự đồng thuận.

3. 📡 **Dữ liệu real-time thay đổi cuộc chơi.** Demand Sensing biến forecast từ "nhìn gương chiếu hậu lái xe" thành "nhìn qua kính chắn gió" — bạn thấy đường phía trước, không chỉ đường đã đi.

4. 🔄 **Chia sẻ dữ liệu = sức mạnh.** CPFR chứng minh: khi nhà sản xuất và nhà bán lẻ hợp tác, cả hai đều thắng. Giấu thông tin = cả hai cùng thua.

5. 📏 **Đo lường forecast accuracy (MAPE, Bias) thường xuyên.** Bạn không thể cải thiện thứ bạn không đo lường. Hãy tracking MAPE hàng tháng như tracking doanh thu vậy.

## 🔗 Đọc thêm

[Xem bài giảng đầy đủ →](/guide/buoi-08)
