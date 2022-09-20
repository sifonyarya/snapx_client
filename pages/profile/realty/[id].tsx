import { NextPage } from 'next';
import Head from 'next/head';
import { API_URL } from '../../api/config';
import ProfileContainers from '../../../containers/ProfileContainers';







const OneRealtyProfile: NextPage = ({realty}:any) => {
    return (
        <>
        <Head><title>Отдельное объявление</title></Head>
        <ProfileContainers>
            <p>{realty.id}</p>
        </ProfileContainers>
        </>
    )
}
export default OneRealtyProfile;


export async function getServerSideProps({ params }:any) {
    const realtys = await fetch(API_URL + `/realty/${params.id}`)
    const realty = await realtys.json()
    return {
      props: { realty }
    }
  };