import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../containers/ProfileContainers';
import { API_URL } from '../../api/config';
import Card_Realty_Profile from '../../../components/Card_Realty_Profile/Card_Realty_Profile';


const RealtySetting: NextPage = () => {
    const [realty, setRealty] = useState<any[]>([]);
    const [email_user, setEmailUser] = useState();
    useEffect(() => {
        axios.get(API_URL + '/realty')
            .then((response: AxiosResponse) => {
                setRealty(response.data);
            });
        const id = localStorage.getItem('user_id')
        axios.get(API_URL + '/users/' + id)
            .then((response: AxiosResponse) => {
                setEmailUser(response.data.email);
            });
    }, []);
    return (
        <>
        <Head><title>Настройка недвижимости</title></Head>
        <ProfileContainers>
         {realty.map(item=>
         <Card_Realty_Profile realty={item} />
        )}
        {email_user}
        </ProfileContainers>
        </>
    )
}
export default RealtySetting;