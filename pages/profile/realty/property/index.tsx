import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../../containers/ProfileContainers';
import { API_URL } from '../../../api/config';





const PropertySetting: NextPage = () => {
    const [propertyRealty, setPropertyRealty] = useState<any[]>([]);
    useEffect(() => {
        axios.get(API_URL + '/property_realty/')
            .then((response: AxiosResponse) => {
                setPropertyRealty(response.data);
            });
    }, []);
    return (
        <>
        <Head><title>Тип недвижимости</title></Head>
        <ProfileContainers>
            {propertyRealty.map(item=>
            <div key={item.id}>{item.name}</div>
            )}
        </ProfileContainers>
        </>
    )
}
export default PropertySetting;