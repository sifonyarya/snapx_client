import { NextPage } from "next";
import Head from "next/head";
import ProfileContainers from "../../containers/ProfileContainers";




const Favourites: NextPage = () => {
    return (
        <>
            <Head><title>Избранное - Snapx</title></Head>
            <ProfileContainers>
                <p style={{ color: 'black' }}>Избранное</p>
            </ProfileContainers>
        </>
    )
}
export default Favourites;