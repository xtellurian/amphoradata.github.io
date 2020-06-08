import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function FindData() {
  return (
    <Layout title="Data Catalogue">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className="col col--9">
            <p className="font_large">You can get the insights you need in 30 seconds</p>
            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium_bold text--black"
                  to="find-data"
                >
                  Vegetation
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-weather"
                >
                  Weather
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-water"
                >
                  Water
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-soil"
                >
                  Soil
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-economic"
                >
                  Economic
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-other"
                >
                  Other
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames("row", styles.justifyContentCenter)}>
          <div className="col col--9">
            <hr
              style={{
                borderWidth: "0.5px",
              }}
            />
          </div>
        </div>

        <div>
          {features && features.length && (
            <section className={styles.features}>
              <div className="container">
                <div>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>  
      </div>
      
    </Layout>
  );
}

const features = [
  {
    title: <>Crop performance tracking from high-res NDVI </>,
    imageUrl: 'img/26_Kings_rd_NDVI_180220.png',
    description: (
      <>
        <span>
          Tracking of performance through 0.5M resolution NDVI images. Options include ranking of plants, tracking change in performance between image captures and overall crop performance.
        </span>
        <span>
          Available now for any global location upon request from $0.7 per Ha per month.
        </span>
      </>
    ),
    byline: (
      <>
        kjjkasf
      </>
    ),
  },
  {
    title: <>Forest vegetation tracking</>,
    imageUrl: 'img/Forest_image.PNG',
    description: (
      <>
        Tracking of forest coverage, extant, and health through remote imaging. 
      </>
    ),
    byline: (
      <>
        kjjkasf
      </>
    ),
  },
  {
    title: <>Image detection training library</>,
    imageUrl: 'img/weed_image.PNG',
    description: (
      <>
        1000s of images of weeds and grains for image detection training.
      </>
    ),
    byline: (
      <>
        kjjkasf
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('row', styles.feature)} style={{ paddingBottom: "30px"}}>
      {imgUrl && (
        <div className="text--center" style={{ paddingLeft: "60px",  paddingRight: "60px"}}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div style={{paddingRight: "60px", width: "600px"}}>
        <h3 className = "font_large">{title}</h3>
        <p className = "font_medium">{description}</p>
      </div>
      <div className={styles.buttons} >
        <Link
          className="font_medium text--white"
          to={useBaseUrl("https://identity.amphoradata.com/Account/Register")}
        >
          Get data
        </Link>
      </div>
    </div>
  );
}

export default FindData;