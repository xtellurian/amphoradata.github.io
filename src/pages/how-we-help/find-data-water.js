import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { FindDataTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function FindData() {
    return (
        <Layout title="Data Catalogue">
            <PageLayout
                tabs={FindDataTabs}
                heading="Get the insight you need in 30 seconds"
            >
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
            </PageLayout>
        </Layout>
    );
}

const features = [
    {
        title: <>River flows</>,
        imageUrl: "img/water_flow.png",
        description: (
            <>
                Real-time actuals of major rivers in Australia including Murray
                and Darling. Parameters include water level, temperature,
                salinity, flow rate and more. Available now for free
            </>
        ),
    },
    {
        title: <>Groundwater</>,
        imageUrl: "img/groundwater-image-source-smh.jpg",
        description: (
            <>
                Ground water level and salinity for any location in Australia.
                Incorporated from 1000s of bore readings in 2019/20. Coming in
                June.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row", styles.feature)}
            style={{ paddingBottom: "30px" }}
        >
            {imgUrl && (
                <div
                    className="text--center"
                    style={{ paddingLeft: "60px", paddingRight: "60px" }}
                >
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <div style={{ paddingRight: "60px", width: "600px" }}>
                <h3 className="font_large">{title}</h3>
                <p className="font_medium">{description}</p>
            </div>
            <div className={styles.buttons}>
                <Link
                    className="font_medium text--white"
                    to="https://identity.amphoradata.com/Register"
                >
                    Get data
                </Link>
            </div>
        </div>
    );
}

export default FindData;
