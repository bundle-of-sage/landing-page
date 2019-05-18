import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import sage from "../images/sage.png"
import Details from "../components/Details"
import Purpose from "../components/Purpose"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        height: "calc(100vh - 50px)",
        backgroundColor: "#c17c5b",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={sage} alt="bundle of sage" style={{ width: "10vw" }} />
      <h1
        style={{
          fontSize: 26,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: 15,
        }}
      >
        Sage Advice + Education
      </h1>
      <h4
        style={{
          fontWeight: 100,
          textTransform: "uppercase",
          letterSpacing: "5px",
          fontSize: 16,
        }}
      >
        For Elopement + Wedding Photographers
      </h4>
      <button
        style={{
          borderRadius: "none",
          border: "2px solid white",
          color: "white",
          fontFamily: "Open Sans",
          fontWeight: 100,
          textTransform: "uppercase",
          letterSpacing: 1,
          padding: "2px 7px",
          fontSize: 12,
          background: "transparent",
          cursor: "pointer",
        }}
      >
        Join Now
      </button>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Details />
    <Purpose />
  </Layout>
)

export default IndexPage
