import { NextPage } from "next";
import Head from "next/head";
import MainComponents from "../containers/MainComponents";
import tw from 'twin.macro';


const ErrorPage: NextPage = () => {
     return (
        <>
        <Head><title>Страница не найдена</title></Head>
        <MainComponents>
              <Title>404</Title>
              <Link href='/'>На главную</Link>
        </MainComponents>
        </>
     )
}
export default ErrorPage;

const Title = tw.h1`text-black text-center lg:pt-[18%] lg:mb-[20px] pt-[60%] mb-[10%] text-[60px] font-normal`
const Link = tw.a`bg-[#f23132] mx-auto table px-[40px] rounded-md py-[8px] text-white`