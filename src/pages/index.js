import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="red"
      category="Misc"
      date="1850"
      timeToRead="55"
      title="New city founded: Hill Valley!"
      description="Hill Valley, California, was the hometown of the McFly family, the Brown family, the Tannen family, as well as several thousands more including the Strickland family. The city has three high schools: Hill Valley High School, Clayton High School, and Calahan High School; and a community college."
    />
  </Layout>
)

export default IndexPage
