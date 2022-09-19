import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProfileContainers from '../../../../containers/ProfileContainers';
import { API_URL } from '../../../api/config';


const CategoryRealty: NextPage = () => {
    const [categoryRealty, setСategoryRealty] = useState<any[]>([]);
    useEffect(() => {
        axios.get(API_URL + '/category_realty/')
            .then((response: AxiosResponse) => {
                setСategoryRealty(response.data);
            });
    }, []);
    return (
        <>
        <Head><title>Категория недвижимости</title></Head>
        <ProfileContainers>
           {categoryRealty.map(item=>
            <>
            <div key={item.id}>
                 <p>{item.name}</p>
            </div>
            </>
            )}
            <p>geyuwtryuewg</p>
        </ProfileContainers>
        </>

    )
}
export default CategoryRealty;