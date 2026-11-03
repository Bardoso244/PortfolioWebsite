import { Badge } from "@/components/ui/badge";

const badgeGroups = [
    {
        label: "Cloud Platforms",
        className: "bg-violet-50 dark:bg-violet-900/30 border-violet-200 dark:border-violet-500/40 text-violet-800 dark:text-violet-300",
        items: ["AWS Architecture", "Azure Infrastructure", "Serverless Design", "Cloud Security"],
    },
    {
        label: "Infrastructure as Code",
        className: "bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-500/40 text-amber-800 dark:text-amber-300",
        items: ["Terraform IaC", "GitHub Actions CI/CD", "Bash Scripting"],
    },
    {
        label: "Networking & Security",
        className: "bg-sky-50 dark:bg-sky-900/30 border-sky-200 dark:border-sky-500/40 text-sky-800 dark:text-sky-300",
        items: ["Palo Alto NGFW", "Cisco ASA", "Fortinet (FortiManager / FortiAnalyzer)", "SD-WAN", "Cisco WLC / Meraki", "Networking"],
    },
    {
        label: "Scripting & Automation",
        className: "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300",
        items: ["Python (Lambda / SQS)", "Intune", "M365 / Exchange Online", "Active Directory"],
    },
];

const AboutMe = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-4xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] uppercase font-medium section-label-gradient">
                                About Me
                            </p>
                             <h2 className="text-xl sm:text-2xl md:text-3xl">
                                        Hi there. I am Bart, a cloud and network engineer.{" "}
                                    <span className="bg-[linear-gradient(transparent_58%,rgba(243,202,77,0.5)_58%)] dark:bg-[linear-gradient(transparent_58%,rgba(146,130,248,0.45)_58%)] box-decoration-clone px-1">
                                        I design and build secure, scalable AWS and Azure infrastructure using Terraform.
                                    </span>{" "}
                                    <span className="underline decoration-2 decoration-violet-400/60 underline-offset-[6px]">
                                        I focus on automation, strong networking foundations and reliable delivery.
                                    </span>
                             </h2>
                            <p className="text-secondary leading-relaxed">
                                    For over five years I have supported network and infrastructure across 31 UK sites, working on Palo Alto and Cisco ASA firewalls and SD-WAN, plus Cisco and Meraki switching and wireless. More recently I have added Fortinet policy management and troubleshooting through FortiManager and FortiAnalyzer, and support of the company&apos;s VMware environment. I also led the company-wide Desktop Refresh Project, and corporate banking before IT taught me to turn a business need into a clear technical answer. That networking background shapes how I build in the cloud: my AWS and Azure projects start with the network design, with segmented subnets, private backends and controlled access.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <p className="text-sm text-primary uppercase font-medium tracking-[2px]">Core Skills</p>
                            <div className="flex flex-col gap-5">
                                {badgeGroups.map((group) => (
                                    <div key={group.label} className="flex flex-col gap-2">
                                        <p className="text-xs font-medium text-secondary uppercase tracking-wider">{group.label}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((item) => (
                                                <Badge
                                                    variant="outline"
                                                    key={item}
                                                    className={`py-1.5 px-4 rounded-lg transition-all duration-200 hover:scale-[1.03] cursor-default ${group.className}`}
                                                >
                                                    <p className="text-xs sm:text-sm font-medium">{item}</p>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
