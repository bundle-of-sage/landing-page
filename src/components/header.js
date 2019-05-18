import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#eeebe4`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        height: 50,
        display: "flex",
        alignItems: "center",
        paddingLeft: 50,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: "Philosopher",
          textTransform: "uppercase",
          letterSpacing: "5px",
          fontSize: 16,
        }}
      >
        <Link
          to="/"
          style={{
            color: `#282828`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a href="https://app.bundleofsage.com" style={{ marginLeft: "auto" }}>
        <button
          style={{
            border: "none",
            background: "#97422b",
            color: "white",
            fontFamily: "Open Sans",
            textTransform: "uppercase",
            letterSpacing: 1,
            fontSize: 10,
            marginRight: "50px",
            cursor: "pointer",
          }}
        >
          Log In
        </button>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
