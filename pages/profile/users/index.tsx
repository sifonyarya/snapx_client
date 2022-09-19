import { NextPage } from 'next';
import Head from 'next/head';
import ProfileContainers from '../../../containers/ProfileContainers';







const UsersSettings: NextPage = () => {
    return (
        <>
        <Head><title>Все пользователи</title></Head>
        <ProfileContainers>
        Все пользователи
        </ProfileContainers>
        </>
    )
}
export default UsersSettings;