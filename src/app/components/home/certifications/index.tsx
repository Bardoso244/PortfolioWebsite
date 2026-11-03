const certifications = [
    {
        name: "AWS Certified Solutions Architect – Associate",
        code: "SAA-C03",
        year: "2026",
        icon: "☁",
        color: "bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-500/40 text-amber-800 dark:text-amber-300",
        iconBg: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    },
    {
        name: "AWS Certified Cloud Practitioner",
        code: "CLF-C02",
        year: "2024",
        icon: "☁",
        color: "bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-500/40 text-amber-800 dark:text-amber-300",
        iconBg: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    },
    {
        name: "Azure Fundamentals",
        code: "AZ-900",
        year: "2024",
        icon: "⬡",
        color: "bg-sky-50 dark:bg-sky-900/30 border-sky-200 dark:border-sky-500/40 text-sky-800 dark:text-sky-300",
        iconBg: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300",
    },
    {
        name: "Cisco CCNA",
        code: "CCNA",
        year: "2023",
        icon: "⬡",
        color: "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-500/40 text-blue-800 dark:text-blue-300",
        iconBg: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    },
    {
        name: "Cloud Engineering Academy",
        code: "Full Programme",
        year: "2025",
        icon: "🎓",
        color: "bg-violet-50 dark:bg-violet-900/30 border-violet-200 dark:border-violet-500/40 text-violet-800 dark:text-violet-300",
        iconBg: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300",
    },
];

const Certifications = () => {
    return (
        <section id="certifications">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto px-4 sm:px-7 py-10">
                        <p className="text-sm tracking-[2px] uppercase font-medium section-label-gradient mb-6">
                            Certifications
                        </p>
                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
                            {certifications.map((cert, i) => (
                                <div
                                    key={i}
                                    className={`reveal flex flex-col gap-3 border rounded-xl p-4 ${cert.color} transition-transform duration-200 hover:scale-[1.02]`}
                                    style={{ transitionDelay: `${i * 80}ms` }}
                                >
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${cert.iconBg}`}>
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold leading-snug">{cert.name}</p>
                                        <p className="text-xs mt-1 opacity-70 font-medium">{cert.code} · {cert.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
