import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <div>
      <Link to="/">
        <StaticImage
          className="logo-white"
          src="../images/logo-white.png"
          width={215}
          quality={100}
          alt="buzz"
          loading="eager"
        />
      </Link>
      </div>
      <div className="legal-links">
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/privacy">Privacy</Link>
      </div>
    </div>
  </footer>
)

export default Footer
