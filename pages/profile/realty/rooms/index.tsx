import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../../containers/ProfileContainers';
import { API_URL } from '../../../api/config';



const RoomsSetting: NextPage = () => {
    const [roomsRealty, setRoomsRealty] = useState<any[]>([]);
    useEffect(() => {
        axios.get(API_URL + '/rooms_realty/')
            .then((response: AxiosResponse) => {
                setRoomsRealty(response.data);
            });
    }, []);
    return (
        <>
        <Head><title>Комнаты</title></Head>
        <ProfileContainers>
            {roomsRealty.map(item =>
            <div key={item.id}>
                {item.name}
            </div>
            )}
        </ProfileContainers>
        </>
    )
}
export default RoomsSetting;