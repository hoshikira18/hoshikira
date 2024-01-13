import Image from 'next/image'
import Link from 'next/link'

interface PostProps {
  slug?: string
  image: string
  title?: string
  description?: string
  updateAt?: string
}

const Post = ({ slug, image, title, description, updateAt }: PostProps) => {
  return (
    <div className="flex w-full flex-col space-y-3 ">
      <div className=" w-full overflow-hidden rounded-lg">
        <Image src={image} alt="post image" width={500} height={200} />
      </div>
      <div className="px-2 ">
        <Link href={`/blog/${slug}`}>
          <h1 className="text-textColor">{title}</h1>
        </Link>
        <p>{description}</p>
        <div>{updateAt}</div>
      </div>
    </div>
  )
}

export default Post
