import tw from 'twin.macro';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';
import { API_URL } from '../../api/config';
import ProfileContainers from '../../../containers/ProfileContainers';
import { useState } from 'react';
import axios from 'axios';







const OneUserProfile: NextPage = ({user}:any) => {
    const [fullname, setFullname] = useState(user.fullname);
    const [surname, setSurname] = useState(user.surname);
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
        window.location.reload();
    }

    return (
        <>
        <Head><title>Отдельный пользователь</title></Head>
        <ProfileContainers>
        <Link href="/profile/users">
            <Back>Назад</Back>
          </Link>
            <input 
            type="text" 
            name="fullname" 
            value={fullname || ''} 
            placeholder="Введите ваше имя"
            onChange={(e: any) => setFullname(e.target.value)} 
            />
            <input 
            type="text" 
            name="surname" 
            value={surname || ''} 
            placeholder="Введите ваше имя"
            onChange={(e: any) => setSurname(e.target.value)} 
            />
            <input 
            type="text" 
            name="role_id" 
            value={role_id || ''} 
            placeholder="Введите роль"
            onChange={(e: any) => setRole(e.target.value)} 
            />
            <input 
            type="text" 
            name="gender_id" 
            value={gender_id || ''} 
            placeholder="Введите пол"
            onChange={(e: any) => setGender(e.target.value)} 
            />
            <button onClick={Update}>Сохранить</button>
        </ProfileContainers>
        </>
    )
}
export default OneUserProfile;


export async function getServerSideProps({ params }:any) {
    const users = await fetch(API_URL + `/users/${params.id}`)
    const user = await users.json()
    return {
      props: { user }
    }
  };

const Back = tw.a`border-[1px] border-solid px-[25px] py-[5px] cursor-pointer rounded-[5px] text-[14px] border-[#d6d6d6] text-[#505050] font-medium hover:text-white hover:bg-[#f23132] hover:border-[#f23132] duration-200 hover:duration-200`