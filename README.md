<p align="center">
  <img src="docs/public/favicon.svg" width="120" alt="SCM Logo" />
</p>

<h1 align="center">Supply Chain Management — Khóa học 12 buổi</h1>

<p align="center">
  <strong>Tài liệu Quản lý Chuỗi cung ứng theo tiêu chuẩn quốc tế APICS / SCOR / IBP</strong>
</p>

<p align="center">
  <a href="https://maithanhduyan.github.io/scm/">🌐 Website</a> ·
  <a href="https://maithanhduyan.github.io/scm/guide/">📘 Khóa học</a> ·
  <a href="https://maithanhduyan.github.io/scm/blog/">📝 Blog</a> ·
  <a href="https://maithanhduyan.github.io/scm/case-study/">🏢 Case Study</a> ·
  <a href="https://maithanhduyan.github.io/scm/standard/">📏 Tiêu chuẩn</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/VitePress-1.6.4-646CFF?logo=vite&logoColor=white" alt="VitePress" />
  <img src="https://img.shields.io/badge/Bun-runtime-F9F1E1?logo=bun&logoColor=000" alt="Bun" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
  <img src="https://img.shields.io/badge/Lessons-12-blue" alt="12 Lessons" />
  <img src="https://img.shields.io/github/deployments/maithanhduyan/scm/github-pages?label=deploy&logo=github" alt="Deploy" />
</p>

---

## 📦 Giới thiệu

**SCM Docs** là bộ tài liệu mã nguồn mở cho khóa học **Quản lý Chuỗi cung ứng (Supply Chain Management)** gồm 12 buổi, được biên soạn theo tiêu chuẩn quốc tế APICS, SCOR và IBP.

Website được xây dựng bằng [VitePress](https://vitepress.dev), triển khai tự động lên GitHub Pages.

### 🎯 Mục tiêu khóa học

- Hiểu toàn diện cấu trúc và vận hành chuỗi cung ứng end-to-end
- Kết nối chiến lược — vận hành — dữ liệu trong quản lý SCM
- Tối ưu hóa tồn kho, logistics và mạng lưới phân phối
- Xây dựng hệ thống KPI và đo lường hiệu suất chuỗi cung ứng
- Ứng dụng ngay vào doanh nghiệp thực tế

### 👥 Đối tượng

Supply Chain Manager · Operations Manager · Procurement · Logistics · Planning · CEO/COO

---

## 🗺️ Lộ trình 12 buổi

| Phần | Buổi | Chủ đề |
|:----:|:----:|--------|
| **1 — Tổng quan SCM** | 01 | Khái niệm & cấu trúc chuỗi cung ứng |
| | 02 | Chiến lược chuỗi cung ứng |
| **2 — Nhà cung cấp** | 03 | Quản lý nhà cung cấp & Procurement |
| | 04 | Sourcing chiến lược & đàm phán |
| **3 — Phân phối** | 05 | Thiết kế mạng lưới phân phối |
| | 06 | Quản lý đơn hàng & dịch vụ khách hàng |
| **4 — Tồn kho & Nhu cầu** | 07 | Dự báo nhu cầu |
| | 08 | Quản lý tồn kho |
| **5 — Logistics** | 09 | Quản lý vận tải & logistics |
| | 10 | Quản lý kho hàng & phân phối |
| **6 — Tích hợp & KPI** | 11 | Tích hợp chuỗi cung ứng & công nghệ |
| | 12 | Đo lường hiệu suất & cải tiến liên tục |

---

## 📚 Nội dung website

| Mục | Số bài | Mô tả |
|-----|:------:|-------|
| [📘 Khóa học](https://maithanhduyan.github.io/scm/guide/) | 12 | Bài giảng chính — lý thuyết, bảng biểu, bài tập |
| [📝 Blog](https://maithanhduyan.github.io/scm/blog/) | 12 | Câu chuyện SCM dễ hiểu — storytelling cho mọi đối tượng |
| [🏢 Case Study](https://maithanhduyan.github.io/scm/case-study/) | 12 | Tình huống thực tế: Apple, Toyota, Amazon, Zara, Nike, Walmart... |
| [📏 Tiêu chuẩn](https://maithanhduyan.github.io/scm/standard/) | 12 | SCOR, Lean, Six Sigma, ISO 9001/28000, Incoterms, CPFR, DDMRP |

> **Phương pháp đào tạo:** 40% lý thuyết · 40% case study & workshop · 20% ứng dụng doanh nghiệp

---

## 🚀 Cài đặt & Phát triển

### Yêu cầu

- [Node.js](https://nodejs.org/) ≥ 20
- [Bun](https://bun.sh/) (khuyến nghị) hoặc npm

### Chạy local

```bash
# Clone repo
git clone https://github.com/maithanhduyan/scm.git
cd scm/docs

# Cài dependencies
bun install

# Chạy dev server
bun run dev
# → http://localhost:5173/scm/

# Build production
bun run build

# Preview bản build
bun run preview
```

### Cấu trúc thư mục

```
scm/
├── docs/                       # VitePress source
│   ├── .vitepress/
│   │   ├── config.ts           # Cấu hình site
│   │   └── theme/              # Custom theme & CSS
│   ├── public/                 # Static assets (favicon, logo)
│   ├── guide/                  # 📘 12 bài giảng chính
│   ├── blog/                   # 📝 12 bài blog storytelling
│   ├── case-study/             # 🏢 12 case study thực tế
│   ├── standard/               # 📏 12 bài tiêu chuẩn quốc tế
│   ├── index.md                # Trang chủ
│   └── package.json
├── .github/workflows/          # CI/CD → GitHub Pages
└── README.md
```

---

## 🛠️ Công nghệ

| Công nghệ | Vai trò |
|-----------|---------|
| [VitePress](https://vitepress.dev) | Static site generator |
| [Bun](https://bun.sh) | JavaScript runtime & package manager |
| [MathJax 3](https://www.mathjax.org) | Render công thức toán học (LaTeX) |
| [GitHub Pages](https://pages.github.com) | Hosting & deploy tự động |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |

---

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Bạn có thể:

1. 🐛 **Báo lỗi** — Mở [Issue](https://github.com/maithanhduyan/scm/issues)
2. 💡 **Đề xuất nội dung** — Discussion hoặc Issue
3. 📝 **Sửa bài / Bổ sung** — Fork → Branch → PR
4. 🌐 **Dịch thuật** — Mở rộng nội dung song ngữ Việt–Anh
5. ⭐ **Star repo** — Giúp dự án tiếp cận nhiều người hơn

---

## 💖 Tài trợ — Sponsor

<p align="center">
  <strong>Dự án này được phát triển và duy trì hoàn toàn phi lợi nhuận.</strong><br/>
  Nếu nội dung hữu ích cho bạn hoặc tổ chức, hãy cân nhắc tài trợ để giúp dự án phát triển!
</p>

### Tại sao nên tài trợ?

- 📖 **Giáo dục mở** — Nội dung SCM chất lượng, miễn phí cho cộng đồng Việt Nam
- 🔄 **Cập nhật liên tục** — Bổ sung case study, tiêu chuẩn, công cụ mới
- 🎓 **Chứng chỉ quốc tế** — Nền tảng cho CPIM, CSCP, CLTD (APICS/ASCM)
- 🇻🇳 **Nội dung tiếng Việt** — Giảm rào cản ngôn ngữ cho người học

### Các hình thức tài trợ

| Hạng | Mức tài trợ | Quyền lợi |
|:----:|:-----------:|-----------|
| 🥉 **Bronze** | $5 / tháng | Logo trên trang Sponsors |
| 🥈 **Silver** | $25 / tháng | Logo + link trên README & Website footer |
| 🥇 **Gold** | $100 / tháng | Logo nổi bật trên Homepage + tất cả quyền lợi Silver |
| 💎 **Diamond** | $500 / tháng | Banner riêng + đồng thương hiệu + tất cả quyền lợi Gold |

### Cách tài trợ

- 💳 **GitHub Sponsors** — [Sponsor @maithanhduyan](https://github.com/sponsors/maithanhduyan)
- ☕ **Buy Me a Coffee** — Hỗ trợ một lần bất kỳ
- 🏢 **Doanh nghiệp** — Liên hệ trực tiếp qua [Issues](https://github.com/maithanhduyan/scm/issues) hoặc email

<p align="center">
  <a href="https://github.com/sponsors/maithanhduyan">
    <img src="https://img.shields.io/badge/♥_Sponsor-GitHub-ea4aaa?style=for-the-badge&logo=github-sponsors&logoColor=white" alt="Sponsor" />
  </a>
</p>

### Nhà tài trợ hiện tại

<p align="center">
  <em>Hãy là nhà tài trợ đầu tiên! 🚀</em>
</p>

---

## 📖 Tham khảo

- [APICS/ASCM](https://www.ascm.org/) — Hiệp hội Quản lý chuỗi cung ứng
- [SCOR Model](https://scor.ascm.org/) — Supply Chain Operations Reference
- Chopra, S. & Meindl, P. — *Supply Chain Management: Strategy, Planning, and Operation*
- Goldratt, E. — *The Goal*

---

## 📄 License

[MIT](LICENSE) © 2026 — Tự do sử dụng, chia sẻ và đóng góp.

---

<p align="center">
  Được tạo với ❤️ cho cộng đồng SCM Việt Nam
</p>
