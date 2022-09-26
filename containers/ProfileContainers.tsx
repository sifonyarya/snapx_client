import tw from 'twin.macro';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProfileBlockLeft from '../components/ProfileBlockLeft/ProfileBlockLeft';
import MenuProfileMobile from '../components/MenuProfileMobile/MenuProfileMobile';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../pages/_app';


interface Children {}

const ProfileContainers: React.FC<Children> = ({children}:any) => {
    const { store } = useContext(Context);
    const [isLoading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000);
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
        {isLoading == true ? <div>dsdsaad</div> : 
        <>
        <Header />
        <Container>
            <ProfileBlockLeft />
            <MenuProfileMobile/>
            <RightBlock>
               {children}
            </RightBlock>
        </Container>
        <Footer/>
        </>}
        </>
    )
}
export default ProfileContainers;

const Container = tw.div`pt-[10px] lg:pt-[20px] lg:w-[1316px] block lg:flex lg:mx-auto min-h-[83vh] mx-[20px] justify-between`
const RightBlock = tw.div`w-full lg:w-[78%] shadow-md bg-white p-[15px] rounded-[10px] min-h-[50px] max-h-[500px]`