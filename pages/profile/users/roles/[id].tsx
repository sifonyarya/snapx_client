import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../../containers/ProfileContainers';
import { API_URL } from '../../../api/config';







const RoleUser: NextPage = ({role}:any) => {
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        axios.get(API_URL + '/users')
            .then((response: AxiosResponse) => {
                setUsers(response.data);
            });
    }, []);
    return (
        <>
        <Head><title>Пользователи в роли - {role.name}</title></Head>
        <ProfileContainers>
            {users.map(item =>
            {role.id = item.role_id &&
            <div key={item.id}>
                <p>{item.email}</p>
            </div>
            }
            )}
        </ProfileContainers>
        </>
    )
}
export default RoleUser;


export async function getServerSideProps({ params }:any) {
    const roles = await fetch(API_URL + `/role/${params.id}`)
    const role = await roles.json()
    return {
      props: { role }
    }
  };