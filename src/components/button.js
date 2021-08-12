import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Button = ({ text, apple, secondary, onClick }) => (
  <button onClick={onClick} className={secondary ? "secondary" : "primary"}>
    {apple && (
      <StaticImage
        src="../images/apple.png"
        width={32}
        quality={100}
        alt="apple"
        loading="eager"
        style={{ marginRight: 4 }}
        layout="fixed"
        placeholder="none"
      />
    )}
    {text}
  </button>
)

export default Button
