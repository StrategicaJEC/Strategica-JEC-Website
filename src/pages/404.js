import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

import './default.css'

const NotFoundPage = () => (
  <Layout>
    <div id="notfound" className="default">
      <title>Page Not Found</title>
      <div className="notfound">
        <div className="notfound-404">
          <div />
          <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <Link to="/">home page</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
