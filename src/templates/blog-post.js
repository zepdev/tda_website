import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/Container"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article>
        <Container>
          <header style={{ textAlign: "center" }}>
            <h1 className="zep-typo--display-5">{post.frontmatter.title}</h1>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Container>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    mdx(id: { eq: $slug }) {
      id
      body
      frontmatter {
        title
        description
      }
    }
  }
`
