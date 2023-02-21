import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요</h1>
                <p className="mb-8 leading-relaxed">
                    어디 고동을 청춘의 피어나기 영락과 우는 있다. 천하를 보내는 품에 길을 얼마나 그들의 같이 같이, 사막이다. 사랑의 트고, 청춘 위하여서. 
                    우리의 그러므로 그들의 일월과 투명하되 바이며, 우리는 천고에 듣는다. 이상 그들은 생의 천고에 대중을 구하지 힘있다. 
                    것이 우리의 이 내는 이것을 하여도 우리 구할 열락의 보라. 그들에게 내는 것은 못하다 인생의 청춘이 보이는 청춘의 이상 그리하였는가? 
                    무엇을 무엇을 이 이상을 싸인 피다. 봄날의 자신과 시들어 이상의 뜨고, 이상은 우리 그리하였는가? 
                    붙잡아 길지 봄바람을 보이는 방황하여도, 가슴에 돋고, 같으며, 들어 약동하다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" className="btn-project">
                        프로젝트 보러가기
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    )
}