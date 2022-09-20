import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../containers/ProfileContainers';
import { API_URL } from '../../api/config';



const RealtySetting: NextPage = () => {
    const [realty, setRealty] = useState<any[]>([]);
    const deleteQ = async (id:any) => {
        const res = await fetch(API_URL + `/realty/` + id, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }
        });
        window.location.reload();
    }
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
            <p>{item.email}</p>
            <button onClick={() => deleteQ(item.id)}>Удалить</button>
        </div>
        )}
        </ProfileContainers>
        </>
    )
}
export default RealtySetting;