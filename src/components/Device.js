import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Device(props) {
  const { class_name, launch } = props
  return (
    <div className={class_name}>
      <StaticImage
        src="../images/device.png"
        width={360}
        quality={100}
        alt="device"
        loading="eager"
        className="device-frame"
        layout="fixed"
        placeholder="none"
      />
      {launch == "true" ? (
        <StaticImage
          src="../images/app-screen.png"
          width={319}
          quality={100}
          alt="buzz screen shot"
          loading="eager"
          className="device-screenshot"
          layout="fixed"
          placeholder="none"
        />
      ) : (
        <StaticImage
          src="../images/coming-soon.png"
          imgStyle={{ backgroundColor: "red" }}
          width={319}
          quality={100}
          alt="buzz screen shot"
          loading="eager"
          className="device-screenshot"
          layout="fixed"
          placeholder="none"
        />
      )}
    </div>
  )
}
