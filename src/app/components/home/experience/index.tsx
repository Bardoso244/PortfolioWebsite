import Image from "next/image"
import { Landmark } from "lucide-react"

const experienceData = [
    {
        icon: "/images/icon/Ibstock-logo.png",
        role: "2nd / 3rd Line Network Analyst — Ibstock Plc",
        location: "Hybrid, UK",
        startYear: "May 2024",
        endYear: "Present",
        bulletPoints: [
            "Administer Palo Alto NGFW and Cisco ASA firewalls across the estate, covering rule creation, object management, traffic analysis and escalation troubleshooting.",
            "Create and update Fortinet firewall policies, objects and groups through FortiManager, and troubleshoot traffic issues using FortiManager and FortiAnalyzer.",
            "Run the SD-WAN rollout and internet connectivity for 31 UK sites, working with ISPs, MSPs and equipment vendors to keep service transitions smooth.",
            "Maintain Cisco switches, Cisco WLC, Meraki access points and Azure resources; lead Mitel VOIP administration and write procedural documentation for the service desk.",
            "Support the 3rd line team with the company's VMware environment.",
        ]
    },
    {
        icon: "/images/icon/Ibstock-logo.png",
        role: "2nd Line Support Analyst — Ibstock Plc",
        location: "UK",
        startYear: "Nov 2023",
        endYear: "Apr 2024",
        bulletPoints: [
            "Led the Desktop Refresh Project replacing the full suite of end-user devices company-wide, and the hardware refresh for a newly acquired business (50 users).",
            "Led the implementation of Google Flex OS across the estate and created solution documents for 1st line to speed up resolution and limit escalations.",
        ]
    },
    {
        icon: "/images/icon/Ibstock-logo.png",
        role: "1st Line Service Desk Analyst — Ibstock Plc",
        location: "UK",
        startYear: "Mar 2022",
        endYear: "Oct 2023",
        bulletPoints: [
            "Provided 1st line IT support to over 1,500 users across the country by phone, email, chat and face to face.",
            "Diagnosed and fixed end-user issues across software, hardware, VPN, printers and networking.",
            "Set up email accounts, shared mailboxes and distribution lists in Exchange and Office 365.",
        ]
    },
    {
        icon: "/images/icon/PE-logo.png",
        role: "IT Systems Support — PerkinElmer Testing Laboratory",
        location: "UK",
        startYear: "Dec 2021",
        endYear: "Mar 2022",
        bulletPoints: [
            "Provided 1st and 2nd line IT support to over 400 laboratory staff and 20 office staff in a fast-paced, results-driven environment.",
            "Troubleshot hardware and software faults using the OSI model to keep lab equipment and supporting services available, and carried out Active Directory domain administration.",
        ]
    },
    {
        icon: "/images/icon/Santa.png",
        role: "Service Support Manager / Business Consultant — Santander Corporate UK",
        location: "UK",
        startYear: "Jun 2017",
        endYear: "Nov 2020",
        bulletPoints: [
            "Supported onboarding and further lending for high-value corporate clients, helping the bank acquire multi-million pound contracts through strong stakeholder management.",
            "Coordinated the Customer Remediation Project using Agile methodology; performed data and trend analysis and prepared executive-level presentations.",
            "Built analytical, communication, and project leadership skills that directly inform how I design cloud solutions around real business outcomes.",
        ]
    },
]

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] uppercase font-medium section-label-gradient">
                            Experience
                        </p>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            {experienceData.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                                >
                                    {value.icon ? (
                                        <Image src={value.icon} alt="company logo" width={32} height={38} />
                                    ) : (
                                        <Landmark size={32} className="text-primary" aria-hidden="true" />
                                    )}
                                    <div className="flex flex-wrap gap-5 items-center justify-between">
                                        <h5>{value.role}</h5>
                                        <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                                            <div className={`w-4 h-2 rounded-sm ${value.endYear === "Present" ? 'bg-violet-500' : 'bg-primary/20'}`} />
                                            <p className="text-sm xs:text-base text-primary">{value.startYear} – {value.endYear} · {value.location}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {value.bulletPoints.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-base font-normal text-secondary">
                                                <span className="text-violet-400 mt-1 flex-shrink-0">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
