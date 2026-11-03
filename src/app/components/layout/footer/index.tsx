import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto gap-6 px-4 sm:px-7 py-5 md:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <p>2026 © Bart Rosiecki. Built with Next.js and tailored for cloud engineering roles.</p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="mailto:bart.rosiecki@gmail.com" className="hover:text-primary">Email</Link>
                            <Link href="https://www.linkedin.com/in/bart-rosiecki/" target="_blank" className="hover:text-primary">LinkedIn</Link>
                            <Link href="https://github.com/Bardoso244" target="_blank" className="hover:text-primary">GitHub</Link>
                            <Link href="https://medium.com/@bart.rosiecki" target="_blank" className="hover:text-primary">Medium</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
