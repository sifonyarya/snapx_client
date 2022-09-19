import { NextPage} from "next";
import Head from "next/head";
import ProfileContainers from "../../../../containers/ProfileContainers";





const RolesSettings: NextPage = () => {
    return (
        <>
        <Head><title>Роли пользователей</title></Head>
        <ProfileContainers>
            Роли пользователей
        </ProfileContainers>
        </>
    )
}
export default RolesSettings;