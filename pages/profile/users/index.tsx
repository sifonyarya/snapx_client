import tw from 'twin.macro';
import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../containers/ProfileContainers';
import { API_URL } from '../../api/config';
import CardUserProfile from '../../../components/Card_User_Profile/Card_User_Profile';


const UsersSettings: NextPage = () => {
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        axios.get(API_URL + '/users')
            .then((response: AxiosResponse) => {
                setUsers(response.data);
            });
    }, []);
    return (
        <>
        <Head><title>Все пользователи</title></Head>
        <ProfileContainers>
          <Link href="/profile/users">
            <Back>Назад</Back>
          </Link>
          {users.map(item=>
          <CardUserProfile users={item} />
          )}
        </ProfileContainers>
        </>
    )
}
export default UsersSettings;


const Back = tw.a``