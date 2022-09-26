import { NextPage } from "next";
import tw from 'twin.macro';
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
            <RegistrationContainer>
                    <Title>Регистрация пользователя</Title>
                    <RegistrationBlock>
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
                        <Registration onClick={() => store.register(user_email, user_password)}>Регистрация</Registration>
                    </RegistrationBlock>
                </RegistrationContainer>
        </MainComponents>
        </>
    )
}
export default RegisterPage;

const RegistrationContainer = tw.div`py-[150px]`
const Title = tw.h1`text-center`
const RegistrationBlock = tw.div`w-[30%] block mx-auto`;
const Registration = tw.button`block w-[80%] bg-[#f23132] mx-auto mt-[15px] py-[10px] border-none text-white text-[15px] rounded-[5px] cursor-pointer hover:shadow-md duration-200 hover:duration-200 hover:bg-[#df2b2c]`;
