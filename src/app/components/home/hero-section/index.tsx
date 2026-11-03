import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const profileLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bart-rosiecki/"
    },
    {
        label: "GitHub",
        href: "https://github.com/Bardoso244"
    },
    {
        label: "Medium",
        href: "https://medium.com/@bart.rosiecki"
    },
];

const HeroSection = () => {
    return (
        <section id="hero">
            <div className="container">
                <div>
                    <div className="w-full h-72 relative overflow-hidden">
                        <Image
                            src={"/images/hero-sec/banner-website.png"}
                            alt="banner-website"
                            width={1080}
                            height={267}
                            className="w-full h-full object-cover"
                            priority
                        />
                        {/* Soft overlay so the profile card below doesn't clash */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-black/30 pointer-events-none" />
                    </div>

                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image
                                    src={"/images/hero-sec/link_prof_pic.jpg"}
                                    alt="profile_picture"
                                    width={145}
                                    height={145}
                                    className="border-4 border-white dark:border-[#1C212B] rounded-full"
                                />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>

                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Bart Rosiecki</h1>

                                {/* Role line with gradient */}
                                <p className="section-label-gradient font-semibold text-base">
                                    Cloud Engineer · AWS · Terraform · Azure
                                </p>

                                {/* Cloud Engineering Academy credential badge */}
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-500/40 text-violet-800 dark:text-violet-300 rounded-full px-3 py-1">
                                    <span>🎓</span> Cloud Engineering Academy — Class of 2025
                                </span>

                                <p className="max-w-xl text-center xs:text-left">
                                    AWS Certified Solutions Architect with 5+ years running network and infrastructure support across 31 UK sites. I build AWS and Azure environments with Terraform and automate deployments with GitHub Actions.
                                </p>

                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">United Kingdom</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    {profileLinks.map((value, index) => {
                                        return (
                                            <Link
                                                href={value.href}
                                                key={index}
                                                target="_blank"
                                                className="w-fit px-4 py-2 hover:bg-primary/5 border border-primary/10 rounded-full text-sm text-primary transition-colors"
                                            >
                                                {value.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                        <span className="inline-flex items-center gap-2.5 bg-[#1C212B] border border-white/10 rounded-full py-2 px-5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                            <span className="text-base sm:text-lg font-semibold text-white text-center">Open to Roles</span>
                                        </span>
                                    <Button asChild className="h-auto rounded-full p-0.5!">
                                        <Link
                                            href="#contact"
                                            className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                        >
                                            <span className="flex items-center gap-3 bg-[#1C212B] dark:bg-[#1C212B] hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full transition-all duration-300">
                                                <Image
                                                    src="/images/icon/spark-icon.svg"
                                                    alt="spark-icon"
                                                    width={14}
                                                    height={14}
                                                />
                                                <span className="text-sm sm:text-base font-semibold text-white">Get in touch</span>
                                            </span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection