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
      slug
      title
      updatedAt
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
  updateAt?: string
}

interface dataProps {
  posts: postsProps[]
}

const Blog = async () => {
  const data: dataProps = await graphConnect.request(query)

  return (
    <Layout>
      <div className="">
        <h1 className="text-center text-xl font-bold">Hoshikira</h1>

        <div>
          {data.posts.map((post, index) => {
            return (
              <div key={index} className="px-3">
                <Post
                  image={post.coverImage.url}
                  title={post.title}
                  slug={post.slug}
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
