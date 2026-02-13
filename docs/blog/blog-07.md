---
outline: [2, 3]
title: "Tủ lạnh nhà bạn chính là bài học quản lý tồn kho "
description: "Hiểu EOQ, Safety Stock, ABC/XYZ analysis và Inventory Turnover qua ví dụ đời thường từ chính tủ lạnh nhà bạn."
head:
  - - meta
    - property: og:title
      content: "Tủ lạnh nhà bạn — bài học quản lý tồn kho hoàn hảo"
---

# 📖 Blog Buổi 7: Tủ lạnh nhà bạn chính là bài học quản lý tồn kho hoàn hảo

> Mỗi năm, các doanh nghiệp trên toàn cầu ước tính lãng phí hàng nghìn tỷ USD chỉ vì… để hàng quá nhiều trong kho hoặc quá ít trên kệ. Nghe thì xa vời, nhưng thực ra bạn cũng đang "quản lý tồn kho" mỗi ngày — mỗi lần mở tủ lạnh ra và thấy hộp sữa chua hết hạn từ tuần trước, đó chính là một vụ *excess inventory* kinh điển. 🥲

## Tại sao phải quan tâm?

Hãy tưởng tượng tủ lạnh nhà bạn là một cái kho thu nhỏ.

Bạn đi siêu thị, thấy trứng gà giảm giá 30%, hào hứng ôm về 5 vỉ. Tuần sau mở tủ ra — 3 vỉ vẫn còn nguyên, hai quả đã bốc mùi. Tiền tiết kiệm được từ giảm giá? Mất sạch vì phải bỏ đi.

Ngược lại, có hôm bạn lười đi chợ, mở tủ ra trống huơ trống hoác, 10 giờ đêm bụng đói mà chỉ còn chai tương ớt với cục đá. Thế là phải gọi ship đồ ăn, tốn gấp đôi.

**Doanh nghiệp cũng y hệt vậy**, chỉ khác là thay vì tủ lạnh, họ có nhà kho hàng nghìn mét vuông. Thay vì trứng gà, họ có hàng chục nghìn SKU (Stock Keeping Unit — mã hàng hóa). Và thay vì mất vài chục nghìn đồng, họ có thể mất hàng tỷ đồng mỗi tháng.

Quản lý tồn kho, nói đơn giản, là trả lời hai câu hỏi muôn thuở:
- **Mua bao nhiêu?** (Không quá nhiều, không quá ít)
- **Mua khi nào?** (Không quá sớm, không quá muộn)

Đơn giản vậy thôi. Nhưng làm đúng thì cực kỳ khó. 😅

## Có gì đáng sợ?

Tồn kho giống như nước trong bể — quá đầy thì tràn, quá vơi thì cạn. Cả hai đều gây thiệt hại:

🔴 **Tồn kho quá nhiều (Overstock):**
- Hàng hết hạn, lỗi thời phải bỏ đi (excess & obsolete) — đặc biệt kinh khủng với ngành thực phẩm, thời trang, công nghệ
- Tiền bị "chôn" trong kho thay vì đem đi đầu tư, trả lương, mở rộng
- Tốn chi phí lưu kho: thuê mặt bằng, điện lạnh, nhân công kiểm đếm

🔴 **Tồn kho quá ít (Stockout):**
- Khách hàng đến mua, không có hàng → mất doanh thu ngay lập tức
- Tệ hơn: khách chạy sang đối thủ và không quay lại
- Dây chuyền sản xuất phải dừng vì thiếu nguyên liệu → thiệt hại dây chuyền

Người ta hay nói: *"Tồn kho là tiền đang ngủ trong kho."* Mà tiền ngủ thì không sinh lời, lại còn tốn tiền giữ chỗ cho nó ngủ nữa. 💸

## Có cách nào không?

Có, và người ta đã nghiên cứu hàng trăm năm rồi! Hãy cùng xem ba "vũ khí" chính:

### 🧮 EOQ — Mua mì tôm bao nhiêu thùng mỗi lần?

**EOQ** (Economic Order Quantity — Lượng đặt hàng kinh tế) trả lời câu hỏi: *"Mỗi lần đặt hàng, nên mua bao nhiêu cho tối ưu?"*

Công thức: **EOQ = √(2 × D × S / H)**

Trong đó:
- **D** = Nhu cầu cả năm (ví dụ: bạn ăn 10.000 gói mì/năm — ok hơi nhiều, nhưng cứ tưởng tượng đi 😄)
- **S** = Chi phí mỗi lần đặt hàng (tiền ship, tiền gọi điện, thời gian đặt)
- **H** = Chi phí giữ một đơn vị trong kho mỗi năm (tiền thuê kho, hao hụt)

Ý tưởng rất trực giác: Nếu bạn mua ít mỗi lần → phải đặt hàng liên tục → tốn phí ship. Nếu mua nhiều mỗi lần → ít phải đặt → nhưng tốn chỗ chứa. **EOQ là điểm cân bằng ngọt ngào** giữa hai chi phí đó.

### 🛡️ Safety Stock — Luôn giữ thêm 2 gói mì phòng khi mưa bão

Cuộc sống không bao giờ đúng kế hoạch 100%. Có tuần bạn ăn nhiều hơn bình thường, có khi siêu thị giao hàng trễ. **Safety Stock** (tồn kho an toàn) chính là "bộ đệm" để bạn không bao giờ bị đói bất ngờ.

**Safety Stock = Z × σ_LT**

- **Z** = hệ số phục vụ (Z = 1.65 nếu bạn chấp nhận 5% xác suất hết hàng, Z = 2.33 nếu chỉ chấp nhận 1%)
- **σ_LT** = độ biến động của nhu cầu trong lead time

Dễ hiểu hơn: Nếu bạn muốn **95% chắc chắn** không bao giờ hết mì trong nhà, bạn cần giữ dự phòng nhiều hơn so với mức **90% chắc chắn**. An toàn hơn = tốn kho hơn. Đó là sự đánh đổi (trade-off) kinh điển.

### 📊 ABC/XYZ — Phân loại đồ trong tủ lạnh

Không phải mọi thứ trong kho đều quan trọng như nhau. Phân loại **ABC** theo giá trị:

- **A** (20% mặt hàng nhưng chiếm 80% giá trị): Thịt bò Wagyu, hải sản tươi → quản lý chặt, kiểm kê thường xuyên
- **B** (30% mặt hàng, 15% giá trị): Rau củ, trái cây → quản lý vừa phải
- **C** (50% mặt hàng, chỉ 5% giá trị): Gia vị, tương ớt, muối → tự động hóa, không cần tốn công sức

Phân loại **XYZ** theo độ biến động nhu cầu:

- **X** (ổn định): Gạo, mì — tuần nào cũng ăn đều đều
- **Y** (trung bình): Trái cây — mùa nào thức nấy
- **Z** (bất thường): Bánh Trung Thu — cả năm không ai mua, đến tháng 8 thì cháy hàng

Kết hợp hai ma trận lại, ta có chiến lược rõ ràng: Hàng **AX** (giá trị cao, nhu cầu ổn) → áp dụng Lean/JIT. Hàng **AZ** (giá trị cao, nhu cầu khó đoán) → cần Agile sourcing linh hoạt. Hàng **CX** → cứ tự động bổ sung. Hàng **CZ** → chỉ sản xuất khi có đơn (Make-to-Order).

## Cụ thể thì làm gì?

Biết công thức rồi, nhưng chọn **chiến lược** nào mới là câu hỏi lớn. Dưới đây là 5 chiến lược phổ biến:

### 🏃 JIT (Just-in-Time) — Đi chợ mỗi ngày

Hàng đến đúng lúc cần, tồn kho gần bằng 0. Giống như bạn đi chợ mỗi sáng, mua vừa đủ nấu trong ngày. Tiết kiệm tủ lạnh, nhưng phải ở gần chợ và chợ phải luôn có hàng.

📌 *Phù hợp: sản xuất ổn định, nhà cung cấp đáng tin cậy, hàng AX.*

### 🏠 JIC (Just-in-Case) — Tích trữ mì gói

Mua sẵn, chất đầy kho phòng khi "có chuyện". Giống bạn mua 10 thùng mì tôm trước mùa mưa bão. An toàn, nhưng tốn chỗ và tiền.

📌 *Phù hợp: nhu cầu khó đoán, nguồn cung bất ổn, hàng AZ.*

### 🤝 VMI (Vendor Managed Inventory) — Để nhà cung cấp lo

Thay vì bạn tự đặt hàng, nhà cung cấp (vendor) sẽ theo dõi tồn kho của bạn và tự bổ sung khi cần. Giống như dịch vụ nước uống văn phòng — bình nước hết, họ tự mang bình mới đến.

📌 *Phù hợp: hàng tiêu dùng nhanh, quan hệ lâu dài với NCC.*

### 📦 Consignment — Hàng ký gửi

Hàng nằm trong kho bạn nhưng vẫn thuộc sở hữu của nhà cung cấp. Bạn chỉ trả tiền khi bán được. Giảm rủi ro cho người bán lẻ.

### ⏳ Postponement — Trì hoãn hoàn thiện

Giữ sản phẩm ở dạng bán thành phẩm, chỉ hoàn thiện khi biết chính xác khách cần gì. Ví dụ: sản xuất áo thun trắng sẵn, chỉ in hình/chữ khi có đơn hàng cụ thể.

### 🏗️ Multi-echelon Inventory — Hệ thống kho nhiều tầng

Trong thực tế, hàng hóa đi qua nhiều cấp kho: **Kho trung tâm → Kho vùng → Kho địa phương → Cửa hàng**.

Nguyên tắc vàng: Kho trung tâm giữ hàng bán chậm (slow-moving), kho địa phương chỉ giữ hàng bán nhanh (fast-moving). Lý do? Hàng bán chậm nếu rải ra 100 cửa hàng sẽ nằm "chết" ở mỗi nơi. Gom về một chỗ thì tổng lượng dự trữ giảm đáng kể.

⚠️ Và đừng quên **Bullwhip Effect** — hiệu ứng cái roi da: một biến động nhỏ ở khách hàng cuối có thể bị khuếch đại gấp nhiều lần khi truyền ngược lên chuỗi cung ứng. Giống như tin đồn "sắp hết giấy vệ sinh" khiến mọi người đổ xô tích trữ, siêu thị hoảng hốt đặt gấp 10 lần, nhà sản xuất tưởng nhu cầu tăng vọt… rồi cuối cùng hàng thừa chất đống. Giải pháp? **Chia sẻ dữ liệu** xuyên suốt chuỗi cung ứng.

## Chuyện thực tế

Hãy cùng theo chân **"Trà Sữa Mây"** — một chuỗi trà sữa nhỏ với 5 chi nhánh ở TP.HCM (tên và câu chuyện được hư cấu để minh họa).

Chị Linh, chủ chuỗi Trà Sữa Mây, đang đau đầu vì vấn đề muôn thuở: **trân châu tươi hết hạn chỉ sau 3 ngày, sữa tươi 7 ngày, còn syrup thì để được 6 tháng**. Mỗi tháng, chị ước tính bỏ đi khoảng vài triệu đồng tiền nguyên liệu hết hạn.

Anh Tuấn — quản lý vận hành mới — đề xuất áp dụng phân tích **ABC/XYZ**:

| Nguyên liệu | ABC (Giá trị) | XYZ (Biến động) | Chiến lược |
|---|---|---|---|
| Sữa tươi | **A** (chiếm tỷ trọng lớn trong giá vốn) | **X** (bán đều mỗi ngày) | JIT — đặt mỗi 2 ngày, lượng vừa đủ |
| Trân châu tươi | **A** | **Y** (cuối tuần bán gấp đôi) | EOQ nhỏ + Safety Stock cho cuối tuần |
| Topping trái cây | **B** | **Z** (phụ thuộc mùa, trend TikTok) | JIC nhẹ + theo dõi trend |
| Syrup các loại | **C** | **X** (dùng ổn định) | Auto-replenish, đặt 1 lần/tháng |
| Ly, ống hút, nắp | **C** | **X** | VMI — để nhà cung cấp tự bổ sung |

Với **sữa tươi** (hạng AX), anh Tuấn tính EOQ dựa trên nhu cầu trung bình mỗi chi nhánh, và thiết lập **Reorder Point** (điểm đặt hàng lại) để đảm bảo luôn có hàng trước khi hết.

Với **trân châu tươi** (hạng AY), vì cuối tuần biến động mạnh, anh giữ thêm Safety Stock cho thứ 6-7-CN — tính theo công thức Z × σ_LT với Z = 1.65 (service level 95%).

Với **ly và ống hút** (hạng CX), anh chuyển sang mô hình VMI — nhà cung cấp bao bì tự theo dõi tồn kho qua app và giao hàng khi sắp hết. Chị Linh không cần tốn thời gian đặt hàng nữa.

Kết quả sau 3 tháng? Lượng nguyên liệu bỏ đi giảm đáng kể, tình trạng hết nguyên liệu giữa ca gần như không còn xảy ra, và chị Linh có thêm thời gian tập trung phát triển menu mới thay vì ngồi kiểm đếm kho mỗi sáng. ☕

## Bảng so sánh

| Khái niệm SCM | Ví dụ đời thường 🏠 |
|---|---|
| **EOQ** (Economic Order Quantity) | Mua bao nhiêu thùng mì mỗi lần đi siêu thị? |
| **Safety Stock** (Tồn kho an toàn) | Luôn giữ thêm 2 gói mì phòng khi mưa bão |
| **Reorder Point** (Điểm đặt lại) | Khi tủ lạnh chỉ còn 3 quả trứng → đi chợ ngay! |
| **ABC Analysis** | Phân loại đồ tủ lạnh: thịt bò = A, gia vị = C |
| **JIT** (Just-in-Time) | Đi chợ mỗi ngày, mua vừa đủ nấu |
| **JIC** (Just-in-Case) | Tích trữ 10 thùng mì gói trước mùa bão |
| **VMI** (Vendor Managed Inventory) | Dịch vụ giao nước bình — hết là họ mang đến |
| **Consignment** | Ký gửi bánh ở quán cà phê — bán được mới trả tiền |
| **Postponement** | In áo thun theo yêu cầu — chỉ in khi có đơn |
| **Bullwhip Effect** | Tin đồn "sắp hết giấy vệ sinh" → cả nước đổ xô mua |
| **Multi-echelon** | Kho tổng ở Bình Dương → kho quận → cửa hàng |
| **Days of Supply** | Đồ ăn trong tủ đủ cho mấy ngày? |
| **Turnover** (Vòng quay tồn kho) | Bao lâu thì tủ lạnh "xoay" hết một lượt? |

## Bài học rút ra

📌 **1. Tồn kho không phải "càng nhiều càng tốt"** — Mỗi sản phẩm nằm trong kho là tiền đang bị "đóng băng". Mục tiêu là giữ *vừa đủ*, không thừa không thiếu.

📌 **2. Không phải hàng nào cũng quản lý giống nhau** — Phân loại ABC/XYZ giúp bạn tập trung năng lượng vào nơi quan trọng nhất (hàng A) và tự động hóa phần còn lại (hàng C).

📌 **3. Công thức EOQ đơn giản nhưng mạnh mẽ** — Chỉ cần biết nhu cầu, chi phí đặt hàng và chi phí lưu kho, bạn đã tìm được lượng đặt hàng tối ưu. Toán học phục vụ thực tiễn!

📌 **4. Safety Stock là bảo hiểm, không phải lãng phí** — Trong thế giới bất định, một bộ đệm hợp lý giúp bạn ngủ ngon hơn. Nhưng nhớ: bảo hiểm quá nhiều cũng tốn tiền.

📌 **5. Chia sẻ dữ liệu là vũ khí chống Bullwhip** — Khi mọi mắt xích trong chuỗi cung ứng cùng nhìn thấy dữ liệu thực, những cơn hoảng loạn đặt hàng sẽ không còn xảy ra.

## 🔗 Đọc thêm

[Xem bài giảng đầy đủ →](/guide/buoi-07)
