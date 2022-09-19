import { NextPage } from 'next';
import Head from 'next/head';
import MainComponents from '../../containers/MainComponents';




const Home: NextPage = () => {
    return (
        <>
        <Head><title>Дома</title></Head>
        <MainComponents>
                     Дома
        </MainComponents>
        </>
    )
}
export default Home;