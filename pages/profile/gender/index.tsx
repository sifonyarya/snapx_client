import { NextPage } from 'next';
import Head from 'next/head';
import ProfileContainers from '../../../containers/ProfileContainers';




const GenderSettings: NextPage = () => {
    return (
        <>
        <Head><title>Пол пользователей</title></Head>
        <ProfileContainers>
        Пол пользователей
        </ProfileContainers>
        </>
    )
}
export default GenderSettings;