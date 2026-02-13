---
outline: [2, 3]
---

# Buổi 11: Tích hợp chuỗi cung ứng

<span class="lesson-badge">🎯 Phần 6 — Tích hợp & KPI</span>

> **Mục tiêu:** Xây hệ thống SCM tích hợp hoàn chỉnh

## 1. End-to-End Integration

### Mô hình tích hợp

<div class="e2e-stack">
  <div class="e2e-layer e2e-l1">
    <div class="e2e-level">🎯 STRATEGIC LEVEL</div>
    <div class="e2e-items">Business Strategy → SC Strategy → Network Design</div>
  </div>
  <div class="e2e-layer e2e-l2">
    <div class="e2e-level">📊 TACTICAL LEVEL</div>
    <div class="e2e-items">IBP → Demand Plan → Supply Plan → S&OP</div>
  </div>
  <div class="e2e-layer e2e-l3">
    <div class="e2e-level">⚙️ OPERATIONAL LEVEL</div>
    <div class="e2e-items">Procurement → Production → Warehouse → Distribution</div>
  </div>
  <div class="e2e-layer e2e-l4">
    <div class="e2e-level">🚛 EXECUTION LEVEL</div>
    <div class="e2e-items">Order → Pick/Pack → Ship → Deliver → Invoice</div>
  </div>
</div>

<style>
.e2e-stack{display:flex;flex-direction:column;gap:0;max-width:650px;margin:1.5rem auto;overflow:hidden;border-radius:16px;border:2px solid var(--vp-c-divider)}
.e2e-layer{padding:1rem 1.2rem;transition:all .3s;cursor:default}
.e2e-layer:hover{padding-left:1.6rem}
.e2e-l1{background:rgba(99,102,241,.1);border-bottom:1px solid rgba(99,102,241,.2)}
.e2e-l2{background:rgba(245,158,11,.08);border-bottom:1px solid rgba(245,158,11,.2)}
.e2e-l3{background:rgba(16,185,129,.08);border-bottom:1px solid rgba(16,185,129,.2)}
.e2e-l4{background:rgba(239,68,68,.08)}
.e2e-level{font-weight:700;font-size:.85rem;margin-bottom:.3rem}
.e2e-l1 .e2e-level{color:#6366f1}.e2e-l2 .e2e-level{color:#d97706}.e2e-l3 .e2e-level{color:#059669}.e2e-l4 .e2e-level{color:#dc2626}
.e2e-items{font-size:.78rem;color:var(--vp-c-text-2);letter-spacing:.3px}
</style>

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

<div class="ct-diagram">
  <div class="ct-tower">
    <div class="ct-title">🗼 SUPPLY CHAIN CONTROL TOWER</div>
    <div class="ct-caps">
      <div class="ct-cap ct-see">
        <div class="ct-cap-icon">👁️</div>
        <div class="ct-cap-name">Monitor</div>
        <div class="ct-cap-sub">(See)</div>
      </div>
      <div class="ct-cap ct-think">
        <div class="ct-cap-icon">🧠</div>
        <div class="ct-cap-name">Predict</div>
        <div class="ct-cap-sub">(Think)</div>
      </div>
      <div class="ct-cap ct-act">
        <div class="ct-cap-icon">⚡</div>
        <div class="ct-cap-name">Decide</div>
        <div class="ct-cap-sub">(Act)</div>
      </div>
    </div>
  </div>
  <div class="ct-connectors">
    <div class="ct-conn-line"></div><div class="ct-conn-line"></div><div class="ct-conn-line"></div>
  </div>
  <div class="ct-sources">
    <div class="ct-source ct-data">
      <div class="ct-src-icon">💾</div>
      <div class="ct-src-name">Data Sources</div>
      <div class="ct-src-detail">ERP, WMS, TMS<br/>IoT, GPS, POS</div>
    </div>
    <div class="ct-source ct-ai">
      <div class="ct-src-icon">🤖</div>
      <div class="ct-src-name">AI / ML</div>
      <div class="ct-src-detail">Pattern Recognition<br/>Anomaly Detection</div>
    </div>
    <div class="ct-source ct-actions">
      <div class="ct-src-icon">🚀</div>
      <div class="ct-src-name">Actions</div>
      <div class="ct-src-detail">Alert, Re-route<br/>Re-plan</div>
    </div>
  </div>
</div>

<style>
.ct-diagram{max-width:600px;margin:1.5rem auto;text-align:center}
.ct-tower{border:2px solid var(--vp-c-brand-1);border-radius:16px;padding:1rem;background:var(--vp-c-brand-soft);margin-bottom:.5rem}
.ct-title{font-weight:700;font-size:.9rem;color:var(--vp-c-brand-1);margin-bottom:.8rem}
.ct-caps{display:flex;justify-content:center;gap:.8rem}
.ct-cap{padding:.7rem .8rem;border-radius:10px;background:var(--vp-c-bg);border:1px solid var(--vp-c-divider);min-width:80px;transition:all .3s}
.ct-cap:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.08)}
.ct-cap-icon{font-size:1.3rem}
.ct-cap-name{font-weight:700;font-size:.75rem;margin-top:.2rem}
.ct-cap-sub{font-size:.6rem;color:var(--vp-c-text-3)}
.ct-see .ct-cap-name{color:#6366f1}.ct-think .ct-cap-name{color:#f59e0b}.ct-act .ct-cap-name{color:#10b981}
.ct-connectors{display:flex;justify-content:center;gap:4rem;margin:.2rem 0}
.ct-conn-line{width:2px;height:20px;background:var(--vp-c-divider)}
.ct-sources{display:flex;justify-content:center;gap:.8rem}
.ct-source{padding:.8rem .7rem;border-radius:10px;border:2px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);min-width:110px;transition:all .3s}
.ct-source:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.08)}
.ct-data{border-color:#6366f1}.ct-data:hover{background:rgba(99,102,241,.06)}
.ct-ai{border-color:#f59e0b}.ct-ai:hover{background:rgba(245,158,11,.06)}
.ct-actions{border-color:#10b981}.ct-actions:hover{background:rgba(16,185,129,.06)}
.ct-src-icon{font-size:1.3rem}
.ct-src-name{font-weight:700;font-size:.75rem;margin-top:.2rem}
.ct-src-detail{font-size:.6rem;color:var(--vp-c-text-3);margin-top:.2rem;line-height:1.4}
@media(max-width:480px){.ct-caps,.ct-sources{flex-direction:column;align-items:center}.ct-connectors{flex-direction:column;align-items:center;gap:.2rem}}
</style>

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
