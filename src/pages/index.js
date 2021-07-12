import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import Device from "./Device"

const IndexPage = () => {
  const [textLinkValue, setTextLinkValue] = useState()
  const [androidPhoneValue, setAndroidPhoneValue] = useState()
  const LAUNCH = process.env.LAUNCH ? process.env.LAUNCH : false;  
  
  const handleAppStoreButton = (evt) => {
    console.log('Open URL App Store')
  }

  const handleNotifyButton = (evt) => {
    console.log('handleNotifyButton')
  }

  const handleGetAppDownloadButton = (evt) => {
    console.log('handleGetAppDownloadButton')
  }

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
          {/* { "WHAT "+ LAUNCH} */}
          { LAUNCH == 'true' ? 
            <span>
              <div className="main-title">welcome to your digital content kingdom</div>
              <div style={{ marginBottom: 46 }}>
                buzz is a social sharing app for digital content, enabling users to
                curate personal content queues based on what really matters: who’s
                recommending it.
              </div>
              <span className="get-app-download-link" >
                <PhoneInput
                  placeholder="phone number"
                  value={textLinkValue}
                  onChange={setTextLinkValue}
                  defaultCountry="US"
                  style={{ marginBottom: 21 }}
                />
                <Button onClick={handleGetAppDownloadButton} text="get app download link" apple></Button>
              </span>
              <span className="app-store-button" >
                <Button onClick={handleAppStoreButton} text="App Store" apple></Button>
              </span>
            </span> : 
            <div className="coming-soon">
              coming soon...
            </div>
          }
        </div>
        
        <Device class_name="device" launch={LAUNCH} />
      </div>
      <div className="sub-content">
      { LAUNCH == 'true' ? 
        <div className="sub-content-left">
          <div className="android-tagline">
            <StaticImage
              src="../images/android.png"
              width={32}
              quality={100}
              alt="android"
              loading="eager"
              style={{ marginRight: 16 }}
            />
            <span className="sub-content-title">join the Android waitlist</span>
          </div>
          <div className="android-input-notify" >
            <PhoneInput
              placeholder="phone number"
              value={androidPhoneValue}
              onChange={setAndroidPhoneValue}
              defaultCountry="US"
              style={{ marginBottom: 21 }}
            />
            <Button onClick={handleNotifyButton} text="notify me" secondary></Button>
          </div>
        </div> : null
      }
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Device class_name="device2" launch={LAUNCH} />
      </div>
    </Layout>
  )
}

export default IndexPage
