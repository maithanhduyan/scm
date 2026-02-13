import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "vi-VN",
  title: "SCM Docs",
  description:
    "Tài liệu khóa học Quản lý Chuỗi cung ứng theo tiêu chuẩn quốc tế",

  base: "/scm/",

  markdown: {
    math: true,
  },

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/scm/favicon.svg" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/scm/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/scm/favicon-16x16.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/scm/apple-touch-icon.png" }],
  ],

  themeConfig: {
    logo: "/logo.svg",

    /* ── Navigation bar ────────────────────────────── */
    nav: [
      { text: "Trang chủ", link: "/" },
      { text: "Khóa học", link: "/guide/" },
      { text: "Blog", link: "/blog/" },
      {
        text: "Nâng cao",
        items: [
          { text: "📖 Blog — Câu chuyện SCM", link: "/blog/" },
          { text: "🏢 Case Study — Thực tế", link: "/case-study/" },
          { text: "📏 Tiêu chuẩn quốc tế", link: "/standard/" },
        ],
      },
      {
        text: "Phần",
        items: [
          { text: "P1 – Tổng quan SCM", link: "/guide/buoi-01" },
          { text: "P2 – Nhà cung cấp", link: "/guide/buoi-03" },
          { text: "P3 – Phân phối", link: "/guide/buoi-05" },
          { text: "P4 – Tồn kho & Nhu cầu", link: "/guide/buoi-07" },
          { text: "P5 – Logistics", link: "/guide/buoi-09" },
          { text: "P6 – Tích hợp & KPI", link: "/guide/buoi-11" },
        ],
      },
    ],

    /* ── Sidebar ───────────────────────────────────── */
    sidebar: {
      "/guide/": [
        {
          text: "🎯 Giới thiệu khóa học",
          items: [{ text: "Tổng quan", link: "/guide/" }],
        },
        {
          text: "📘 Phần 1 – Tổng quan SCM",
          collapsed: false,
          items: [
            {
              text: "Buổi 1: Khái niệm & cấu trúc chuỗi cung ứng",
              link: "/guide/buoi-01",
            },
            {
              text: "Buổi 2: Tiêu chuẩn quốc tế trong SCM",
              link: "/guide/buoi-02",
            },
          ],
        },
        {
          text: "🤝 Phần 2 – Nhà cung cấp",
          collapsed: false,
          items: [
            {
              text: "Buổi 3: Lựa chọn & đánh giá NCC",
              link: "/guide/buoi-03",
            },
            {
              text: "Buổi 4: Hợp tác & phát triển NCC",
              link: "/guide/buoi-04",
            },
          ],
        },
        {
          text: "🚚 Phần 3 – Phân phối",
          collapsed: false,
          items: [
            {
              text: "Buổi 5: Xây dựng kênh phân phối",
              link: "/guide/buoi-05",
            },
            {
              text: "Buổi 6: Quản lý hiệu suất kênh",
              link: "/guide/buoi-06",
            },
          ],
        },
        {
          text: "📊 Phần 4 – Tồn kho & Nhu cầu",
          collapsed: false,
          items: [
            {
              text: "Buổi 7: Quản lý tồn kho",
              link: "/guide/buoi-07",
            },
            {
              text: "Buổi 8: Hoạch định nhu cầu",
              link: "/guide/buoi-08",
            },
          ],
        },
        {
          text: "🏭 Phần 5 – Logistics",
          collapsed: false,
          items: [
            {
              text: "Buổi 9: Logistics & vận tải",
              link: "/guide/buoi-09",
            },
            {
              text: "Buổi 10: Tối ưu dòng chảy",
              link: "/guide/buoi-10",
            },
          ],
        },
        {
          text: "🎯 Phần 6 – Tích hợp & KPI",
          collapsed: false,
          items: [
            {
              text: "Buổi 11: Tích hợp chuỗi cung ứng",
              link: "/guide/buoi-11",
            },
            {
              text: "Buổi 12: Đo lường hiệu suất",
              link: "/guide/buoi-12",
            },
          ],
        },
      ],

      /* ── Blog sidebar ──────────────────────────────── */
      "/blog/": [
        {
          text: "📖 Blog — Câu chuyện SCM",
          items: [{ text: "Giới thiệu", link: "/blog/" }],
        },
        {
          text: "Phần 1 – Tổng quan",
          collapsed: false,
          items: [
            { text: "Blog 01: Chuỗi cung ứng là gì?", link: "/blog/blog-01" },
            { text: "Blog 02: Tiêu chuẩn quốc tế", link: "/blog/blog-02" },
          ],
        },
        {
          text: "Phần 2 – Nhà cung cấp",
          collapsed: true,
          items: [
            { text: "Blog 03: Chọn nhà cung cấp", link: "/blog/blog-03" },
            { text: "Blog 04: Hợp tác NCC", link: "/blog/blog-04" },
          ],
        },
        {
          text: "Phần 3 – Phân phối",
          collapsed: true,
          items: [
            { text: "Blog 05: Kênh phân phối", link: "/blog/blog-05" },
            { text: "Blog 06: Hiệu suất kênh", link: "/blog/blog-06" },
          ],
        },
        {
          text: "Phần 4 – Tồn kho",
          collapsed: true,
          items: [
            { text: "Blog 07: Quản lý tồn kho", link: "/blog/blog-07" },
            { text: "Blog 08: Dự báo nhu cầu", link: "/blog/blog-08" },
          ],
        },
        {
          text: "Phần 5 – Logistics",
          collapsed: true,
          items: [
            { text: "Blog 09: Logistics & vận tải", link: "/blog/blog-09" },
            { text: "Blog 10: Tối ưu dòng chảy", link: "/blog/blog-10" },
          ],
        },
        {
          text: "Phần 6 – Tích hợp",
          collapsed: true,
          items: [
            { text: "Blog 11: Tích hợp SCM", link: "/blog/blog-11" },
            { text: "Blog 12: Đo lường KPI", link: "/blog/blog-12" },
          ],
        },
      ],

      /* ── Case Study sidebar ─────────────────────────── */
      "/case-study/": [
        {
          text: "🏢 Case Study thực tế",
          items: [{ text: "Giới thiệu", link: "/case-study/" }],
        },
        {
          text: "Theo buổi học",
          collapsed: false,
          items: [
            { text: "CS 01: Cấu trúc chuỗi cung ứng", link: "/case-study/case-study-01" },
            { text: "CS 02: Tiêu chuẩn quốc tế", link: "/case-study/case-study-02" },
            { text: "CS 03: Đánh giá NCC", link: "/case-study/case-study-03" },
            { text: "CS 04: Phát triển NCC", link: "/case-study/case-study-04" },
            { text: "CS 05: Kênh phân phối", link: "/case-study/case-study-05" },
            { text: "CS 06: Hiệu suất kênh", link: "/case-study/case-study-06" },
            { text: "CS 07: Quản lý tồn kho", link: "/case-study/case-study-07" },
            { text: "CS 08: Dự báo nhu cầu", link: "/case-study/case-study-08" },
            { text: "CS 09: Logistics", link: "/case-study/case-study-09" },
            { text: "CS 10: Tối ưu dòng chảy", link: "/case-study/case-study-10" },
            { text: "CS 11: Tích hợp SCM", link: "/case-study/case-study-11" },
            { text: "CS 12: Đo lường KPI", link: "/case-study/case-study-12" },
          ],
        },
      ],

      /* ── Standard sidebar ───────────────────────────── */
      "/standard/": [
        {
          text: "📏 Tiêu chuẩn quốc tế",
          items: [{ text: "Giới thiệu", link: "/standard/" }],
        },
        {
          text: "Theo buổi học",
          collapsed: false,
          items: [
            { text: "Tiêu chuẩn 01: Cấu trúc SCM", link: "/standard/standard-01" },
            { text: "Tiêu chuẩn 02: Framework quốc tế", link: "/standard/standard-02" },
            { text: "Tiêu chuẩn 03: Đánh giá NCC", link: "/standard/standard-03" },
            { text: "Tiêu chuẩn 04: SRM", link: "/standard/standard-04" },
            { text: "Tiêu chuẩn 05: Phân phối", link: "/standard/standard-05" },
            { text: "Tiêu chuẩn 06: KPI kênh", link: "/standard/standard-06" },
            { text: "Tiêu chuẩn 07: Tồn kho", link: "/standard/standard-07" },
            { text: "Tiêu chuẩn 08: Demand Planning", link: "/standard/standard-08" },
            { text: "Tiêu chuẩn 09: Logistics", link: "/standard/standard-09" },
            { text: "Tiêu chuẩn 10: Lean Logistics", link: "/standard/standard-10" },
            { text: "Tiêu chuẩn 11: Tích hợp", link: "/standard/standard-11" },
            { text: "Tiêu chuẩn 12: SCOR Metrics", link: "/standard/standard-12" },
          ],
        },
      ],
    },

    /* ── Social links ──────────────────────────────── */
    socialLinks: [
      { icon: "github", link: "https://github.com/maithanhduyan/scm" },
    ],

    /* ── Footer ────────────────────────────────────── */
    footer: {
      message: '⚠️ 100% nội dung được tạo bởi AI — chỉ mang tính tham khảo, không thay thế tư vấn chuyên môn.',
      copyright: '© 2026 Supply Chain Management',
    },

    /* ── Search ────────────────────────────────────── */
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "Tìm kiếm", buttonAriaLabel: "Tìm kiếm" },
          modal: {
            noResultsText: "Không tìm thấy kết quả",
            resetButtonTitle: "Xóa",
            footer: {
              selectText: "chọn",
              navigateText: "di chuyển",
              closeText: "đóng",
            },
          },
        },
      },
    },

    /* ── Outline ───────────────────────────────────── */
    outline: { level: [2, 3], label: "Nội dung trang" },

    docFooter: { prev: "Bài trước", next: "Bài tiếp" },
    lastUpdated: { text: "Cập nhật lần cuối" },
  },
});
