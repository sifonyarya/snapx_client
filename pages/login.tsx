import { NextPage } from "next";
import tw from 'twin.macro';
import Head from "next/head";
import MainComponents from "../containers/MainComponents";
import Input from "../components/Input/Input";
import { useContext, useEffect, useState } from "react";
import { Context } from "./_app";
import { useRouter } from "next/router";




const LoginPage: NextPage = () => {
    const [user_email, setEmail] = useState<string>("");
    const [user_password, setPassword] = useState<string>("");
    const { store } = useContext(Context);
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            if (store.isAuth == true) {
                router.push('/profile/profile');
            }
        }, 50);
    }),
        [];
    return (
        <>
            <Head><title>Авторизации</title></Head>
            <MainComponents>
                <LoginBlock>
                    <Input
                        id="user_email"
                        type="email"
                        placeholder="Логин(Email)"
                        value={user_email}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <Input
                        id="user_password"
                        type="password"
                        placeholder="Пароль"
                        value={user_password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <button onClick={() => store.login(user_email, user_password)}>Войти</button>
                </LoginBlock>
            </MainComponents>
        </>
    )
}
export default LoginPage;

const LoginBlock = tw.div`w-[30%] block mx-auto`