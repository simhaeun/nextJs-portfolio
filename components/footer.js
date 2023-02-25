import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-gray-100">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 HACOOKIE</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500" href="http://hacookie.site/">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        </a>
                    </span>
                    </div>
                </div>
            </footer>
        </>
    )
}