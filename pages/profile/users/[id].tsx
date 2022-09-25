import { NextPage } from 'next';
import Head from 'next/head';
import { API_URL } from '../../api/config';
import ProfileContainers from '../../../containers/ProfileContainers';







const OneUserProfile: NextPage = ({user}:any) => {
    return (
        <>
        <Head><title>Отдельный пользователь</title></Head>
        <ProfileContainers>
            <p>{user.id}</p>
        </ProfileContainers>
        </>
    )
}
export default OneUserProfile;


export async function getServerSideProps({ params }:any) {
    const users = await fetch(API_URL + `/users/${params.id}`)
    const user = await users.json()
    return {
      props: { user }
    }
  };