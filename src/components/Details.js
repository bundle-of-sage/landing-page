import React from "react"
import "./Details.css"
export default function Details() {
  return (
    <div
      style={{
        height: "30vh",
        background: "#f9f9f9",
        color: "#282828",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Open Sans",
        padding: "0px 50px",
      }}
    >
      <div className="detail-container">
        <p className="title">Prompts</p>
        <p className="detail-paragraph">
          Capture more candid moments. Make couples feel more comfortable.{" "}
        </p>
      </div>
      <div className="detail-container">
        <p className="title">SEO</p>
        <p className="detail-paragraph">
          Up your SEO game! Improve your page ranking and get more clients to
          your site (for free).{" "}
        </p>
      </div>
      <div className="detail-container">
        <p className="title">Business</p>
        <p className="detail-paragraph">
          Improve your business-strategy, utilize free online-tools, and add
          value to your business.{" "}
        </p>
      </div>
      <div className="detail-container">
        <p className="title">Session Experience</p>
        <p className="detail-paragraph">
          Make sessions more collaborative and unique. Learn how to embrace
          different personalities, capture the important shots, + more.{" "}
        </p>
      </div>
    </div>
  )
}
