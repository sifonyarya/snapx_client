import { NextPage } from "next";
import Head from 'next/head';
import { useContext, useEffect } from "react";
import MainComponents from "../../containers/MainComponents";
import { Context } from "../_app";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";



const ProfilePage: NextPage = () => {
  const { store } = useContext(Context);
  const router = useRouter();
    useEffect(() => {
      setTimeout(() => {
        if (store.isAuth == false) {
          router.push('/login');
        }
        }, 100);
    }),
      [];
    return (
        <>
        <Head><title>Личный кабинет пользователя</title></Head>
        <MainComponents>
        Личный кабинет пользователя
        <button onClick={() => store.logout()}>Выйти</button>
        </MainComponents>
        </>
    )
}
export default observer(ProfilePage);