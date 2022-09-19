import { NextPage } from "next";
import Head from "next/head";
import ProfileContainers from "../../containers/ProfileContainers";




const Notifications: NextPage = () => {
    return (
        <>
        <Head><title>Уведомления - Snapx</title></Head>
        <ProfileContainers>
        <p style={{color: 'black'}}>Уведомления</p>
        </ProfileContainers>
        </>
    )
}
export default Notifications;