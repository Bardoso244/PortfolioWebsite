import Link from "next/link";

const contacts = [
    { name: "bart.rosiecki@gmail.com", url: "mailto:bart.rosiecki@gmail.com" },
    { name: "linkedin.com/in/bart-rosiecki", url: "https://www.linkedin.com/in/bart-rosiecki/" },
    { name: "github.com/Bardoso244", url: "https://github.com/Bardoso244" },
    { name: "medium.com/@bart.rosiecki", url: "https://medium.com/@bart.rosiecki" },
];

const ProjectOverview = () => {
    return (
        <section id="profiles">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto gap-10 px-4 sm:px-7 py-9 md:py-16">
                        <div className="flex flex-col xs:flex-row items-start gap-6 xs:gap-16">
                            <p className="w-full xs:w-36 flex-shrink-0 text-sm tracking-[2px] uppercase font-medium section-label-gradient">
                                Find me at
                            </p>
                            <div className="flex flex-col gap-3">
                                {contacts.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.url}
                                        className="group flex items-center gap-2 hover:text-violet-600 transition-colors"
                                        target={item.url.startsWith("http") ? "_blank" : undefined}
                                    >
                                        <h4 className="group-hover:text-violet-600 transition-colors font-normal text-base">{item.name}</h4>
                                        <span className="group-hover:translate-x-1 transition-transform duration-200 text-secondary group-hover:text-violet-600">↗</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectOverview
