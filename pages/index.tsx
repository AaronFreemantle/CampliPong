import React from "react"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Layout from "../components/Layout"

type Props = {}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>

        </main>
      </div>
    </Layout>
  )
}

export default Blog
