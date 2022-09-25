import tw from 'twin.macro';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';
import { API_URL } from '../../api/config';
import ProfileContainers from '../../../containers/ProfileContainers';







const OneUserProfile: NextPage = ({user}:any) => {
    return (
        <>
        <Head><title>Отдельный пользователь</title></Head>
        <ProfileContainers>
        <Link href="/profile/users">
            <Back>Назад</Back>
          </Link>
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

const Back = tw.a`border-[1px] border-solid px-[25px] py-[5px] cursor-pointer rounded-[3px] text-[14px] border-[#d6d6d6] text-[#505050] font-medium`