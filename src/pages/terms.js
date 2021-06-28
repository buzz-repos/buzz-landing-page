import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

const Terms = () => (
  <Layout>
    <Seo title="buzz - Terms and Conditions" />
    <div className="legal-header">
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
      <div className="title-small">Legal</div>
    </div>
    <div className="legal-body">
      <div className="h1">Terms and Conditions</div>
      <h3>Subhead</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3>Subhead</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Etiam non quam lacus suspendisse faucibus
        interdum posuere lorem. Viverra accumsan in nisl nisi scelerisque eu
        ultrices vitae. Penatibus et magnis dis parturient montes nascetur
        ridiculus mus mauris. Aliquam sem fringilla ut morbi tincidunt augue.
        Magna ac placerat vestibulum lectus mauris ultrices eros in cursus.
      </p>
      <p>
        Elementum facilisis leo vel fringilla. Suspendisse potenti nullam ac
        tortor vitae purus faucibus. Enim praesent elementum facilisis leo vel.
        Morbi non arcu risus quis varius quam quisque id diam. Augue neque
        gravida in fermentum et sollicitudin ac orci. Feugiat in ante metus
        dictum at. Eu sem integer vitae justo eget magna. Lectus quam id leo in
        vitae turpis massa sed. Amet consectetur adipiscing elit duis tristique.
        Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
        Vestibulum morbi blandit cursus risus. Magna fringilla urna porttitor
        rhoncus dolor purus non enim praesent. Ipsum dolor sit amet consectetur
        adipiscing. Turpis egestas pretium aenean pharetra magna ac placerat
        vestibulum lectus. Nec feugiat in fermentum posuere urna nec tincidunt.
        Eros in cursus turpis massa tincidunt dui ut ornare. Lacus luctus
        accumsan tortor posuere ac ut. Lacus vel facilisis volutpat est velit
        egestas dui id. Eget est lorem ipsum dolor sit amet consectetur
        adipiscing elit.
      </p>
      <p>
        Sapien eget mi proin sed libero enim sed. Semper eget duis at tellus at
        urna condimentum mattis. Dignissim convallis aenean et tortor at risus
        viverra adipiscing at. Sed viverra ipsum nunc aliquet bibendum enim.
        Senectus et netus et malesuada fames. Egestas quis ipsum suspendisse
        ultrices gravida dictum fusce. In nulla posuere sollicitudin aliquam
        ultrices sagittis orci a. Nunc sed velit dignissim sodales ut eu sem
        integer vitae. Mauris in aliquam sem fringilla ut morbi tincidunt augue.
        Orci sagittis eu volutpat odio. Augue eget arcu dictum varius. In ornare
        quam viverra orci. Enim praesent elementum facilisis leo vel fringilla.
        Massa enim nec dui nunc mattis enim ut tellus. Sed velit dignissim
        sodales ut eu sem integer. Habitant morbi tristique senectus et netus.
        Risus sed vulputate odio ut enim blandit volutpat. Faucibus ornare
        suspendisse sed nisi lacus sed viverra tellus. Viverra nam libero justo
        laoreet sit amet cursus. In est ante in nibh mauris cursus mattis
        molestie a.
      </p>
    </div>
  </Layout>
)

export default Terms
