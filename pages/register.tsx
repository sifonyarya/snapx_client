import { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import Input from "../components/Input/Input";
import MainComponents from "../containers/MainComponents";
import { Context } from "./_app";





const RegisterPage: NextPage = () => {
    const [user_email, setEmail] = useState<string>("");
    const [user_password, setPassword] = useState<string>("");
    const { store } = useContext(Context);
    return (
        <>
        <Head><title>Регистрация</title></Head>
        <MainComponents>
        <Input
            id="user_email"
            type="email"
            placeholder="Логин(Email)"
            value={user_email}
            onChange={(e:any) => setEmail(e.target.value)}
            />
            <Input
            id="user_password"
            type="password"
            placeholder="Пароль"
            value={user_password}
            onChange={(e:any) => setPassword(e.target.value)}
            />
            <button onClick={() => store.register(user_email, user_password)}>Регистрация</button>
        </MainComponents>
        </>
    )
}
export default RegisterPage;