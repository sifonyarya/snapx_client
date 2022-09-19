import { NextPage } from 'next';
import Head from 'next/head';
import ProfileContainers from '../../../../containers/ProfileContainers';





const PropertySetting: NextPage = () => {
    return (
        <>
        <Head><title>Тип недвижимости</title></Head>
        <ProfileContainers>
            Тип недвижимости
        </ProfileContainers>
        </>
    )
}
export default PropertySetting;