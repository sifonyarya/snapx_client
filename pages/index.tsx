import type { NextPage } from 'next'
import Head from 'next/head';
import { useContext } from 'react';
import MainComponents from '../containers/MainComponents'
import { API_URL } from './api/config';
import { Context } from './_app';
import { observer } from 'mobx-react-lite';




const Home: NextPage = ({setting}:any) => {
  const { store } = useContext(Context);
  return (
    <>
    <Head><title>Главная страница</title></Head>
    <MainComponents>
      <div style={{color:"black"}}>Название сайта: {setting.site_name}</div>
      {store.isAuth ? (<>Авторизован</>): (<>Не авторизован</>) }
    </MainComponents>
    </>
  )
}
export default observer(Home);

export async function getServerSideProps() {
  const settings = await fetch(API_URL + `/settings/` + 1)
  const setting = await settings.json()
  return {
      props: { setting }
  }
};
