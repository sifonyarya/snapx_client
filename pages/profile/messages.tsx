import { NextPage } from "next";
import Head from "next/head";
import ProfileContainers from "../../containers/ProfileContainers";




const Messages: NextPage = () => {
    return (
        <>
        <Head><title>Сообщения - Snapx</title></Head>
        <ProfileContainers>
             <p style={{color: 'black'}}>Сообщения</p>
        </ProfileContainers>
        </>
    )
}
export default Messages;