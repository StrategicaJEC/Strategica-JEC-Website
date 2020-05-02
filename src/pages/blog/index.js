import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import SEO from '../../components/seo'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
      <SEO title="Blogs"/>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dog2bkgwo/image/upload/v1588420785/Backgrounds/girl-writing-on-a-black-keyboard-6469_s5teqo_ezmrq2.jpg)`,
            overflow: 'hidden',
            backgroundPosition: 'center 0%'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section animated fadeIn slow" style={{overflow:'hidden'}}>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
