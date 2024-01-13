import Image from 'next/image'
import Link from 'next/link'

interface PostProps {
    slug?: string
    image: string
    title?: string
    excerpt?: string
    createdAt?: string
}

const Post = ({ slug, image, title, excerpt, createdAt }: PostProps) => {
    return (
        <div className="flex w-full flex-col space-y-3 ">
            <div className=" w-full overflow-hidden">
                <Image src={image} alt="post image" width={500} height={200} />
            </div>
            <div className="px-2 text-textColor space-y-4 pt-1">
                <Link href={`/blog/${slug}`}>
                    <h1 className="text-xl font-bold text-textColor">
                        {title}
                    </h1>
                </Link>
                <p className='text-[#a1a1aa] text-sm font-medium'>{excerpt}</p>
                <div className='text-[#a1a1aa] uppercase font-bold'>{createdAt}</div>
            </div>
        </div>
    )
}

export default Post
