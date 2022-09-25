import { NextPage } from "next";
import Head from 'next/head';
import { useContext, useEffect, useState } from "react";
import ProfileContainers from "../../containers/ProfileContainers";
import { Context } from "../_app";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../api/config";



const ProfilePage: NextPage = ({user}:any) => {
  const { store } = useContext(Context);
  const [fullname, setFullName] = useState(user.fullname);
  const [surname, setSurName] = useState(user.surname);
  const [role_id, setRole] = useState(user.role_id);
  const [gender_id, setGender] = useState(user.gender_id);

    const Update = async () => {
        axios.put(API_URL + '/users/' + user.id , {
            id: user.id,
            fullname: fullname,
            surname: surname,
            email: user.email,
            role_id: role_id,
            gender_id: gender_id,
            timestamp: user.timestamp,
            password: user.password
        });
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    return (
        <>
        <Head><title>Личный кабинет пользователя</title></Head>
        <ProfileContainers>
        Личный кабинет пользователя
        {fullname} {surname}
        <button onClick={() => store.logout()}>Выйти</button>
        </ProfileContainers>
        </>
    )
}
export default observer(ProfilePage);


export async function getServerSideProps() {
  const [id, setID] = useState();
  useEffect(() => {
    localStorage.getItem('user_id')
  }, [setID])
  const users = await fetch(API_URL + `/users/` + id)
  const user = await users.json()
  return {
    props: { user }
  }
};
