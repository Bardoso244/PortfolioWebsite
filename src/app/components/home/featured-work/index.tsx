import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button";

const featureWork = [
    {
        title: "AWS Server-Based Infrastructure",
        description: "A secure multi-tier AWS build with Terraform: segmented VPC (public / private / isolated subnets), ALB, autoscaling EC2, private RDS MySQL, Secrets Manager, and a GitHub Actions pipeline with drift detection.",
        outcome: "Repeatable infrastructure provisioned end-to-end in under 10 minutes via a lint → validate → plan → apply → drift-detect pipeline.",
        roles: ["Terraform", "AWS", "GitHub Actions", "Networking", "KMS Encryption"],
        image: "/images/feature-work/aws-infrastructure-diagram.svg",
        primaryLink: "https://github.com/Bardoso244/Server-Based-App1",
        secondaryLink: "https://medium.com/@bart.rosiecki/from-concept-to-cloud-how-i-built-a-full-aws-architecture-with-terraform-2081a7dca9d0"
    },
    {
        title: "Event-Driven Serverless Pipeline",
        description: "An AWS serverless workflow using Python Lambda, SQS, DynamoDB, and SNS to process data asynchronously with clean separation between handler code and business logic.",
        outcome: "Zero-server architecture handling async processing across three decoupled services with automatic retry and SNS notification on completion.",
        roles: ["Python", "AWS Lambda", "SQS", "DynamoDB", "SNS"],
        image: "/images/feature-work/event-driven-lambda-diagram.svg",
        primaryLink: "https://github.com/Bardoso244/event_driven_invoice_processor",
        secondaryLink: "https://medium.com/@bart.rosiecki/building-a-resilient-event-driven-nervous-system-on-aws-42b671be5469"
    },
    {
        title: "Azure Terraform Architecture",
        description: "An Azure translation of the AWS design: VNet segmentation, Application Gateway with WAF, private database access via private endpoints, Key Vault, and NSGs across all tiers.",
        outcome: "Multi-cloud parity achieved — identical security posture deployed on Azure proving platform-agnostic infrastructure design.",
        roles: ["Azure", "Terraform", "WAF", "Key Vault", "NSG"],
        image: "/images/feature-work/azure-architecture-diagram.svg",
        primaryLink: "https://github.com/Bardoso244/server-based-app-azure",
        secondaryLink: "https://medium.com/@bart.rosiecki/how-to-multi-cloud-your-infrastructure-and-not-die-trying-all-the-gotchas-included-f3f86bdedec2"
    }
]

const FeaturedWork = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7 gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm tracking-[2px] uppercase font-medium section-label-gradient">
                                Featured Projects
                            </p>
                            <p className="mt-2">Production-style cloud work drawn from my CV, labs, and hands-on builds.</p>
                        </div>
                        <Button asChild variant={"outline"} className="h-auto w-fit">
                            <Link href={"/Bart-Rosiecki-CV.pdf"} className="py-3 px-5" target="_blank">
                                Download CV
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork.map((value, index) => {
                            const isRightCol = index % 2 === 1;
                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''} ${index >= 2 ? 'border-t border-primary/10' : ''}`}
                                >
                                    <Link href={value.primaryLink} className="overflow-hidden rounded-xl border border-primary/10" target="_blank">
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            width={490}
                                            height={300}
                                            className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-3 px-2">
                                        <div className="flex flex-col gap-1 sm:gap-2">
                                            <h4>{value.title}</h4>
                                            <p>{value.description}</p>
                                            <p className="text-sm font-medium text-violet-600 mt-0.5">&#8627; {value.outcome}</p>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {value.roles.map((role, roleIndex) => (
                                                    <span key={roleIndex} className="text-xs sm:text-sm border border-primary/10 rounded-full px-3 py-1 text-primary">
                                                        {role}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            <Link href={value.primaryLink} target="_blank" className="text-sm font-medium text-primary underline underline-offset-4 hover:text-violet-600 transition-colors">
                                                View Code
                                            </Link>
                                            <Link href={value.secondaryLink} target="_blank" className="text-sm font-medium text-primary underline underline-offset-4 hover:text-violet-600 transition-colors">
                                                Read Write-up
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedWork
