import React from 'react'

const Categories = () => {
    const categories = [
        {
            icon: "🚀",
            title: "فناوری‌های نوظهور",
            description: "از اینترنت کوانتومی تا ربات‌های احساس‌دار - مقاله‌هایی برای آینده‌نگرها.",
        },
        {
            icon: "🧬",
            title: "زیست‌شناسی پیشرفته",
            description: "پژوهش‌هایی درباره ژن‌درمانی، سلول‌های بنیادی و موجودات اصلاح‌شده ژنتیکی.",
        },
        {
            icon: "📊",
            title: "آمار و یادگیری ماشین",
            description: "الگوریتم‌هایی که آینده را پیش‌بینی می‌کنند؛ از مدل‌های خطی تا شبکه‌های عصبی.",
        },
        {
            icon: "🌍",
            title: "علوم زمین و محیط‌زیست",
            description: "بررسی تغییرات اقلیمی، انرژی‌های تجدیدپذیر و راهکارهای سبز برای بقای زمین.",
        },
        {
            icon: "🧠",
            title: "روان‌شناسی و علوم شناختی",
            description: "کشف رازهای ذهن انسان، تصمیم‌گیری، و رفتارهای پیچیده.",
        }
    ]

    return (
        <section className="p-15" style={{ background: '#E8FFD7' }}>
            <div className="mx-auto px-4 max-w-7xl text-center">
                <h2 className="mb-10 font-extrabold text-gray-800 text-3xl md:text-4xl">
                    دسته‌بندی مقالات علمی و آموزشی
                </h2>
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg hover:shadow-xl p-6 border border-gray-100 hover:border-blue-300 rounded-xl transition duration-300"
                        >
                            <div className="mb-4 text-5xl">{cat.icon}</div>
                            <h3 className="mb-2 font-semibold text-gray-700 text-xl">{cat.title}</h3>
                            <p className="text-gray-600 text-sm leading-6">{cat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories