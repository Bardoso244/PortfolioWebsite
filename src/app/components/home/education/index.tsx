"use client";
import { useEffect, useState } from "react";

const Education = () => {
    const [educationData, setEducationData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setEducationData(data?.educationData)
            } catch (error) {
                console.error('Error fetching project highlights:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <section id="cloud-projects">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] uppercase font-medium section-label-gradient">
                            Cloud Projects
                        </p>
                    </div>

                    <div className="border-t border-primary/10">
                        <div className="relative max-w-3xl mx-auto px-4 sm:px-0 py-10">
                            <div className="hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-primary/10" />

                            <div className="relative">
                                {educationData?.map((item: any, index: any) => (
                                    <div
                                        key={index}
                                        className={`reveal relative flex flex-col sm:flex-row sm:items-start gap-4 ${
                                            index !== educationData.length - 1 ? "mb-8 sm:mb-16" : ""
                                        }`}
                                        style={{ transitionDelay: `${index * 120}ms` }}
                                    >
                                        <div className="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                                            {/* Tech stack pills */}
                                            <div className="flex flex-wrap sm:justify-end gap-1 mb-1">
                                                {item.date.split(' · ').map((tag: string, ti: number) => (
                                                    <span key={ti} className="inline-block text-xs font-medium bg-violet-50 border border-violet-200 text-violet-700 rounded-full px-2 py-0.5">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1.5 border border-primary/10 rounded-full bg-white">
                                                <div className="w-3 h-3 bg-[#9282F8] rounded-full" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0">
                                            <h5 className="font-semibold">{item.title}</h5>
                                            <p className="text-violet-700 font-medium text-sm">{item.subtitle}</p>
                                            <p>{item.description}</p>
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

export default Education
