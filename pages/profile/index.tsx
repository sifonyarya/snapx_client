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
  
    return (
        <>
        <Head><title>Личный кабинет пользователя</title></Head>
        <ProfileContainers>
        Личный кабинет пользователя
        <button onClick={() => store.logout()}>Выйти</button>
        </ProfileContainers>
        </>
    )
}
export default observer(ProfilePage);


