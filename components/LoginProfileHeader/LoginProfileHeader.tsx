import { useContext, useEffect, useState } from "react"
import Image from "next/image";
import tw from 'twin.macro';
import Link from "next/link";
import Avatar from '../../public/pictures/avatar.png'
import { Context } from "../../pages/_app";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../pages/api/config";



const LoginProfileHeader: React.FC = () => {
    const [fullname, setFullName] = useState();
    const [surname, setSurName] = useState();
    const [Prof, setProf] = useState(false)
    const { store } = useContext(Context);
    const handleMouseEnter = (e:any) => {
        setProf(true)
      }
      const handleMouseLeave = (e:any) => {
        setProf(false)
      }
      useEffect(() => {
        axios.get(API_URL + '/users/' + localStorage.getItem('user_id'))
            .then((response: AxiosResponse) => {
                setFullName(response.data.fullname);
                setSurName(response.data.surname);
            });
      }, [])
    return (
        <>
        <Profile
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Image src={Avatar} width={40} height={40} />
        </Profile>
        {Prof && 
        <ProfileBlock onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <ContainerProfile>
                    <Link href="/profile">
                        <NameProfile>{fullname} {surname}</NameProfile>
                    </Link>
                <Line />
                <Menu>
                    <Item>
                        <Link href="/profile/ads">
                           <LinkMenu>Мои объявления</LinkMenu>
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/profile/messages">
                           <LinkMenu>Сообщения</LinkMenu>
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/profile/notifications">
                           <LinkMenu>Уведомления</LinkMenu>
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/profile/favourites">
                           <LinkMenu>Избранное</LinkMenu>
                        </Link>
                    </Item>
                    <Item>
                        <Logout onClick={() => store.logout()}>Выйти</Logout>
                    </Item>
                </Menu>
            </ContainerProfile>
        </ProfileBlock>
        }
        </>
    )
}
export default LoginProfileHeader;

const Profile = tw.button`cursor-pointer my-[5px] inline-block bg-transparent rounded-full p-0 w-[39px] h-[39px] border-none`
const ProfileBlock = tw.div`absolute right-[15px] top-[50px] w-[250px]`
const ContainerProfile = tw.div`cursor-pointer bg-white shadow-lg mt-[25px] px-[20px] pt-[20px] pb-[13px] rounded-[10px]`
const Menu = tw.ul`m-0 p-0 mt-[20px]`
const Item = tw.li`list-none my-[8px]`
const Logout = tw.button`text-[14px] p-0 border-none font-normal bg-transparent hover:text-red-500 cursor-pointer text-gray-500`
const LinkMenu = tw.a`cursor-pointer text-[14px] text-gray-900 font-normal hover:text-red-500`
const NameProfile = tw.a`cursor-pointer text-black hover:text-red-500 font-medium text-[18px]`
const Line = tw.hr`w-[40%] bg-red-500 ml-0 p-0 m-0 mt-[5px] h-[1px] border-none`