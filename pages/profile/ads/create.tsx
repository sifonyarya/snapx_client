import { NextPage } from 'next';
import Head from 'next/head';
import ProfileContainers from '../../../containers/ProfileContainers';




const CreateAds: NextPage = () => {
    return (
        <>
        <Head><title>Создать объявление - Snapx</title></Head>
         <ProfileContainers>
            <p style={{color: 'black'}}>Создать объявление</p>
         </ProfileContainers>
        </>
    )
}
export default CreateAds;