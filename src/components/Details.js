import React from "react"

export default function Details() {
  return (
    <div
      style={{
        height: "30vh",
        background: "#eeebe4",
        color: "#282828",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        fontFamily: "Philosopher",
      }}
    >
      <div>
        <p>Prompts</p>
      </div>
      <div>
        <p>SEO</p>
      </div>
      <div>
        <p>Business</p>
      </div>
      <div>
        <p>Session Experience</p>
      </div>
    </div>
  )
}
