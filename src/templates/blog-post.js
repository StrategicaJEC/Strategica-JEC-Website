import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ShareBar from '../components/ShareBar'
import {
  isMobile
} from "react-device-detect";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {

  const PostContent = contentComponent || Content

  const [wurl, wseturl] = useState()
  const [wtitle, wsettitle] = useState()

  useEffect(() => {
    wseturl(window.document.location.href);
    wsettitle(window.document.title);
  }, [])

  return (
    <section className="section blog-post-page-strategica">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="container-fluid" style={{ padding: '0' }}>
              <div className="row">
                <div className="col-md-6">
                  <p>{description}</p>
                </div>
                {isMobile ? (
                  <div className="col-md-6 text-md-right mt-3">
                    <span style={{ backgroundColor: 'black', borderRadius: '10px', color: 'white', padding: '0.5rem 1rem', cursor: 'pointer' }}
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: wtitle,
                            url: wurl
                          }).catch(console.error)
                        }
                      }}>
                      Share this post
                        <i
                        className="fas fa-share-alt mb-4 ml-2" />
                    </span>
                  </div>
                ) : null}
              </div>
              <ShareBar title={wtitle} url={wurl} />
            </div>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
