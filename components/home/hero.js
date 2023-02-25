import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">HACOOKIE</h1>
                <p className="mb-8 leading-relaxed">
                    Next.js와 Notion Api를 활용한 포트폴리오
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" className="btn-project">
                        프로젝트 보러가기
                    </Link>
                </div>
                <div className="flex justify-center mt-4">
                    <a href="http://hacookie.site/" className="btn-project">
                        포트폴리오 보러가기
                    </a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    )
}