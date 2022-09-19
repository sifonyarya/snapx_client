import { NextPage } from 'next';
import Head from 'next/head';
import MainComponents from '../../containers/MainComponents';




const Apartments: NextPage = () => {
    return (
        <>
        <Head><title>Квартиры</title></Head>
        <MainComponents>
            <p>Квартиры</p>
        </MainComponents>
        </>
    )
}
export default Apartments;