import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"

const IndexPage = () => {
  const [textLinkValue, setTextLinkValue] = useState()
  const [androidPhoneValue, setAndroidPhoneValue] = useState()
  return (
    <Layout>
      <Seo title="buzz - digital content kingdom" />
      <div className="main-content">
        <div className="main-content-left">
          <div>
            <StaticImage
              src="../images/logo-black-gradient-icon.png"
              width={168}
              quality={100}
              alt="buzz"
              loading="eager"
              style={{ marginBottom: "35px" }}
            />
          </div>
          <div className="h1">welcome to your digital content kingdom</div>
          <div style={{ marginBottom: 46 }}>
            buzz is a social sharing app for digital content, enabling users to
            curate personal content queues based on what really matters: who’s
            recommending it.
          </div>
          <PhoneInput
            placeholder="phone number"
            value={textLinkValue}
            onChange={setTextLinkValue}
            defaultCountry="US"
            style={{ marginBottom: 21 }}
          />
          <Button text="get app download link" apple></Button>
        </div>
        <div className="device">
          <StaticImage
            src="../images/device.png"
            width={360}
            quality={100}
            alt="device"
            loading="eager"
            className="device-frame"
          />
          <StaticImage
            src="../images/app-screen.png"
            width={319}
            quality={100}
            alt="buzz screen shot"
            loading="eager"
            className="device-screenshot"
          />
        </div>
        <div className="sub-content">
          <div className="android-tagline">
            <StaticImage
              src="../images/android.png"
              width={32}
              quality={100}
              alt="android"
              loading="eager"
              style={{ marginRight: 16 }}
            />
            join the Android waitlist
          </div>
          <PhoneInput
            placeholder="phone number"
            value={androidPhoneValue}
            onChange={setAndroidPhoneValue}
            defaultCountry="US"
            style={{ marginBottom: 21 }}
          />
          <Button text="notify me" secondary></Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
