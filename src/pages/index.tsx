import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import { CustomHead } from "../components/CustomHead";
import { Landing } from "../components/Landing";
import { Logos } from "../components/Logos";
import { BuyData } from "../components/BuyData";

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <React.Fragment>
            <CustomHead />
            <Layout
                title={`Amphora Data | ${siteConfig.title}`}
                description="Control the future with AI"
            >
                <Landing siteConfig={siteConfig} styles={styles} />

                <main>
                    {/* <SellData />
                    <hr /> */}
                    <BuyData />
                    <Logos />
                </main>
            </Layout>
        </React.Fragment>
    );
}

// export default Home;
// this overrides the default behaviour, and redirects to the docs page.
function CustomRedirect() {
    return <Redirect to="/docs/contents" />;
}
export default Home;