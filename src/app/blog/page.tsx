import { Layout, Post } from '@/components'
import { GraphQLClient, gql } from 'graphql-request'

const url = process.env.END_POINT

const graphConnect = new GraphQLClient(url ? url : '')

const query = gql`
  query MyQuery {
    posts {
      coverImage {
        url
      }
      excerpt
      slug
      title
      date
    }
  }
`

interface image {
  url: string
}

interface postsProps {
  slug?: string
  coverImage: image
  title?: string
  excerpt?: string
  date?: string
}

interface dataProps {
  posts: postsProps[]
}

const Blog = async () => {
  const data: dataProps = await graphConnect.request(query)
  return (
    <Layout>
      <div className="pb-24">
        <h1 className="text-center text-textColor py-3 text-xl font-bold">Hoshikira | Blog</h1>

        <div className='space-y-10'>
          {data.posts.map((post, index) => {
            return (
              <div key={index} className="px-3">
                <Post
                  image={post.coverImage.url}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  createdAt={post.date}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
