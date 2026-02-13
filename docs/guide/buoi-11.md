---
outline: [2, 3]
---

# Buổi 11: Tích hợp chuỗi cung ứng

<span class="lesson-badge">🎯 Phần 6 — Tích hợp & KPI</span>

> **Mục tiêu:** Xây hệ thống SCM tích hợp hoàn chỉnh

## 1. End-to-End Integration

### Mô hình tích hợp

```
┌──────────────────────────────────────────────────────┐
│                  STRATEGIC LEVEL                      │
│    Business Strategy → SC Strategy → Network Design   │
├──────────────────────────────────────────────────────┤
│                  TACTICAL LEVEL                       │
│    IBP → Demand Plan → Supply Plan → S&OP            │
├──────────────────────────────────────────────────────┤
│                 OPERATIONAL LEVEL                      │
│  Procurement → Production → Warehouse → Distribution  │
├──────────────────────────────────────────────────────┤
│                 EXECUTION LEVEL                        │
│    Order → Pick/Pack → Ship → Deliver → Invoice      │
└──────────────────────────────────────────────────────┘
```

### 3 dòng chảy cần tích hợp

| Dòng chảy | Từ → Đến | Công cụ |
|-----------|----------|---------|
| **Material** | Supplier → Customer | ERP, WMS, TMS |
| **Information** | Customer → Supplier | EDI, API, Portal |
| **Financial** | Customer → Supplier | ERP, Banking |

### Mức độ tích hợp

1. **Internal** – Tích hợp giữa các phòng ban
2. **External** – Tích hợp với NCC & khách hàng
3. **Network** – Tích hợp toàn mạng lưới
4. **Ecosystem** – Tích hợp hệ sinh thái

## 2. Data & Digital

### Technology Stack cho SCM

| Layer | Công nghệ | Vai trò |
|-------|----------|---------|
| **Foundation** | ERP (SAP, Oracle) | Backbone dữ liệu |
| **Planning** | APS, IBP tools | Hoạch định |
| **Execution** | WMS, TMS, MES | Vận hành |
| **Visibility** | Control Tower | Giám sát |
| **Analytics** | BI, AI/ML | Phân tích & dự báo |
| **Integration** | API, EDI, iPaaS | Kết nối |

### Data Quality Framework

::: tip 💡 DAMA Dimensions
1. **Completeness** – Đầy đủ
2. **Accuracy** – Chính xác
3. **Consistency** – Nhất quán
4. **Timeliness** – Kịp thời
5. **Uniqueness** – Không trùng lặp
6. **Validity** – Hợp lệ
:::

## 3. Control Tower

### Mô hình Control Tower

```
         ┌─────────────────────────┐
         │    SUPPLY CHAIN          │
         │    CONTROL TOWER         │
         ├────────┬────────┬───────┤
         │ Monitor│ Predict│ Decide│
         │ (See)  │ (Think)│ (Act) │
         └───┬────┴───┬────┴──┬────┘
             │        │       │
    ┌────────┴────┐ ┌─┴─┐ ┌──┴──────┐
    │ Data Sources│ │ AI│ │ Actions  │
    │ ERP,WMS,TMS │ │ ML│ │ Alert    │
    │ IoT,GPS,POS │ │   │ │ Re-route │
    └─────────────┘ └───┘ │ Re-plan  │
                          └──────────┘
```

### Capabilities

- **Visibility** – Track & trace real-time
- **Analytics** – Pattern recognition, anomaly detection
- **Alerting** – Proactive exception management
- **Collaboration** – Multi-party communication
- **Scenario planning** – What-if simulation
- **Autonomous response** – Auto-corrective actions

## 4. Cross-functional Alignment

### RACI Matrix cho SCM

| Quy trình | Sales | Planning | Procurement | Production | Logistics |
|-----------|-------|----------|-------------|------------|-----------|
| Demand Forecast | **A** | **R** | I | I | C |
| Supply Planning | C | **R** | **A** | C | C |
| Procurement | I | C | **R/A** | C | I |
| Production | I | C | C | **R/A** | I |
| Distribution | C | C | I | I | **R/A** |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

### Governance Model

1. **Daily** – Operational standup (execution)
2. **Weekly** – Tactical review (short-term issues)
3. **Monthly** – S&OP/IBP (medium-term planning)
4. **Quarterly** – Strategic review (direction)
5. **Annually** – SC Strategy refresh

## 📝 Bài tập

::: warning ✍️ Đánh giá mức độ tích hợp SCM
**Sử dụng thang điểm 1–5 đánh giá:**

| Tiêu chí | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|
| Tích hợp nội bộ | | | | | |
| Tích hợp NCC | | | | | |
| Tích hợp khách hàng | | | | | |
| Chất lượng dữ liệu | | | | | |
| Công nghệ | | | | | |
| Governance | | | | | |

**Đề xuất:** 3 hành động ưu tiên để nâng mức tích hợp.
:::
