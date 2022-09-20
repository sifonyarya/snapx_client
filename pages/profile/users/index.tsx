import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../containers/ProfileContainers';
import { API_URL } from '../../api/config';




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
          {users.map(item=>
          <div key={item.id}>
              <p>{item.email}</p>
          </div>  
          )}
        </ProfileContainers>
        </>
    )
}
export default UsersSettings;