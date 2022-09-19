import { NextPage } from 'next';
import Head from 'next/head';
import ProfileContainers from '../../../../containers/ProfileContainers';



const RoomsSetting: NextPage = () => {
    return (
        <>
        <Head><title>Комнаты</title></Head>
        <ProfileContainers>Комнаты</ProfileContainers>
        </>
    )
}
export default RoomsSetting;