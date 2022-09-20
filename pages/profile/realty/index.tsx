import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../containers/ProfileContainers';
import { API_URL } from '../../api/config';



const RealtySetting: NextPage = () => {
    const [realty, setRealty] = useState<any[]>([]);
    useEffect(() => {
        axios.get(API_URL + '/realty')
            .then((response: AxiosResponse) => {
                setRealty(response.data);
            });
    }, []);
    return (
        <>
        <Head><title>Настройка недвижимости</title></Head>
        <ProfileContainers>
         {realty.map(item=>
        <div key={item.id}>
           {item.email}
        </div>
        )}
        </ProfileContainers>
        </>
    )
}
export default RealtySetting;