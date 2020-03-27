import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Overview from "../components/Overview"
import Process from "../components/Process"
import Departments from "../components/Departments"
import PastCases from "../components/PastCases"
import Team from "../components/Team"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Overview />
      <Process />
      <Departments />
      <PastCases />
      <Team />
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
