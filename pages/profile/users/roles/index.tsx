import axios, { AxiosResponse } from "axios";
import { NextPage} from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ProfileContainers from "../../../../containers/ProfileContainers";
import { API_URL } from "../../../api/config";





const RolesSettings: NextPage = () => {
    const [roles, setRoles] = useState<any[]>([]);
    useEffect(() => {
        axios.get(API_URL + '/role')
            .then((response: AxiosResponse) => {
                setRoles(response.data);
            });
    }, []);
    return (
        <>
        <Head><title>Роли пользователей</title></Head>
        <ProfileContainers>
            {roles.map(item=>
            <a href={`/profile/role/${item.id}`} key={item.id}>
                <p>{item.name}</p>
            </a>
            )}
        </ProfileContainers>
        </>
    )
}
export default RolesSettings;