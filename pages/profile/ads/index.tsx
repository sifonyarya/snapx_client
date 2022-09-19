import { NextPage } from "next";
import Head from "next/head";
import ProfileContainers from "../../../containers/ProfileContainers";




const Ads: NextPage = () => {
    return (
        <>
            <Head><title>Мои объявления - Snapx</title></Head>
            <ProfileContainers>
                <p style={{ color: 'black' }}>Мои объявления</p>
            </ProfileContainers>
        </>
    )
}
export default Ads;