import Image from "next/legacy/image"

export default function ProjectItem({ data }) {
    const title = data.properties.이름.title[0].plain_text
    const description = data.properties.Description.rich_text[0].plain_text
    const url = data.url
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.태그.multi_select

    return (
        <div className="project-card">
            <Image 
                className="rounded-t-xl" 
                src={imgSrc} 
                alt="cover image"
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="none"
                quality={100}
            />
            <div className="p-4 flex flex-col w-full">
                <h1 className="text-2xl font-bold">
                    <a href={url}>{title}</a>
                </h1>
                <h3 className="my-5">{description}</h3>
                <div className="flex iems-start mt-2">
                    {tags.map((tag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700" key={tag.id}>
                            {tag.name}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    )
}