# Eman Gamal Gomaa — Portfolio

<div dir="rtl">

موقع بورتفوليو لجرافيك ديزاينر وفيديو إديتور. معمول بـ HTML/CSS/JS عادي من غير أي build، فينفع يترفع على أي استضافة (GitHub Pages, Netlify, Vercel, cPanel...).

## إزاي تعدّلي المحتوى (من غير برمجة)

كل المحتوى موجود في ملف واحد: **`data.js`**

| عاوزة تعدّلي إيه | فين في `data.js` |
|---|---|
| اسمك، المسمى الوظيفي، المقدمة، نبذة عنك | `SITE` |
| الإيميل، الواتساب، الـ CV، لينكات السوشيال | `SITE.email` و `SITE.whatsapp` و `SITE.cvUrl` و `SITE.socials` |
| الأرقام (سنين الخبرة، عدد المشاريع...) | `SITE.stats` |
| الخدمات | `SERVICES` |
| البرامج اللي بتستخدميها | `TOOLS` |
| **شغلك / مشاريعك** | `PROJECTS` |
| الخبرات | `EXPERIENCE` |
| آراء العملاء | `TESTIMONIALS` (القسم بيظهر لوحده أول ما تضيفي رأي) |

> ⚠️ كل المشاريع والأرقام والخبرات الموجودة دلوقتي **أمثلة مؤقتة**. لازم تبدليها بمعلوماتك الحقيقية قبل النشر.

## إضافة مشروع جديد

1. حطي صور المشروع في فولدر `assets/work/` (JPG أو WebP، وأحسن عرض حوالي 1600px).
2. ضيفي بلوك زي ده جوه `PROJECTS`:

</div>

```js
{
  title: "Project name",
  category: "branding",            // branding | social | print | video | motion
  year: "2025",
  client: "Client name",
  cover: "assets/work/project-cover.jpg",
  tint: "#F3D9C9",                 // background color behind the image
  description: "Short description of the project and what you did.",
  deliverables: ["Logo", "Brand guidelines"],
  images: ["assets/work/project-1.jpg", "assets/work/project-2.jpg"],
  video: "",                       // YouTube / Vimeo link or .mp4 path
  link: "",                        // Behance link (optional)
},
```

<div dir="rtl">

- لمشاريع الفيديو: حطي لينك يوتيوب أو فيميو في `video` والفيديو هيشتغل جوه الموقع.
- لو `link` فاضي، زرار "View full project" مش هيظهر.

## صورتك الشخصية

حطي صورتك باسم `assets/eman.jpg` وهتظهر في قسم About لوحدها.

## الـ CV

حطي ملف الـ PDF في `assets/` واكتبي مساره في `SITE.cvUrl`، وزرار "Download CV" هيظهر.

## تشغيل الموقع على جهازك

افتحي `index.html` في المتصفح، أو شغّلي:

</div>

```bash
python3 -m http.server 8000
```
