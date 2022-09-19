import { NextPage } from 'next';
import Head from 'next/head';
import ProfileContainers from '../../../containers/ProfileContainers';



const RealtySetting: NextPage = () => {
    return (
        <>
        <Head><title>Настройка недвижимости</title></Head>
        <ProfileContainers>
        Настройка недвижимости
        </ProfileContainers>
        </>
    )
}
export default RealtySetting;