import { Layout } from '@/components'
import { GraphQLClient } from 'graphql-request'
import { remark } from 'remark'
import html from 'remark-html'

interface PostContent {
  markdown: string
}

interface PostCoverImage {
  url: string
}

interface postsProps {
  publishedAt: string
  title: string
  excerpt: string
  content: PostContent
  coverImage: PostCoverImage
}

interface dataProps {
  post: postsProps
}

const url = process.env.END_POINT

const graphConnect = new GraphQLClient(url ? url : '')

const query = `
    query MyQuery($slug: String!) {
      post(where: {slug: $slug}) {
        publishedAt
        title
        excerpt
        content {
          markdown
        }
        coverImage {
          url
        }
      }
    }
  `

interface paramProps {
  params: {
    slug: string
  }
}

const Blog = async ({ params }: paramProps) => {
  const slug = params.slug
  const data: dataProps = await graphConnect.request(query, { slug })

  const processedContent = await remark()
    .use(html)
    .process(data.post.content.markdown)

  const contentHtml = processedContent.toString()

  return (
    <Layout>
      <article className="px-3 text-white">
        <h1 className="text-2xl font-bold">{data.post.title}</h1>
        <div
          id='content'
          className="prose "
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </Layout>
  )
}

export default Blog
