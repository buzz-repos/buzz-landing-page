/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Footer from "./footer"
import "../styles/reset.css"
import "../styles/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
        </style>
      </Helmet>
      <div className="content-wrapper">{children}</div>
      <div style={{ height: "264px" }}></div>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
