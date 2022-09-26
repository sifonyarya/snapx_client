import tw from "twin.macro";
import Image from "next/image";
import Link from 'next/link';
import Logo from '../../public/pictures/logo.svg';
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { CgMenuMotion } from 'react-icons/cg';
import { useContext, useState } from "react";
import MobileMenu from '../MobileMenu/MobileMenu';
import { Context } from "../../pages/_app";
import LoginProfileHeader from "../LoginProfileHeader/LoginProfileHeader";
import { observer } from "mobx-react-lite";
import { AiOutlinePlus } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdNotificationsNone } from 'react-icons/md';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { store } = useContext(Context);
    const togglePopup = () => {
        setOpen(!open);
        document.body.style.overflow = 'unset';
    }
    const MobileMenuPopup = () => {
        if (open === false) {
            setOpen(!open);
            document.body.style.overflow = 'hidden';
        }
    }
    const TestPoint = false;
    
    return (
        <>
            {!open && <HeaderBlock>
                <Container>
                    <Link href="/"><LinkHome><Image src={Logo} /></LinkHome></Link>
                    <>
                        <HeaderMenu
                            menu={{
                                links: [
                                    { text: "Квартиры", link: "/catalog/apartments" },
                                    { text: "Дома", link: "/catalog/home" },
                                    { text: "Земельные участки", link: "/catalog/plot" },
                                    { text: "Коммерческие помещения", link: "/catalog/commercial" }
                                ]
                            }}
                        />
                    </>
                    {!store.isAuth ?
                        <>
                            <OpenMenu onClick={MobileMenuPopup}>
                                <CgMenuMotion style={{ color: "black" }} size={20} />
                            </OpenMenu>
                            <BlockRight>
                                <Link href="/login">
                                   <ButtonLogin>Войти</ButtonLogin>
                                </Link>
                                <Link href="/register">
                                   <ButtonRegistration>Регистрация</ButtonRegistration>
                                </Link>
                            </BlockRight>
                        </>
                        :
                        <>
                            <BlockRight>
                                <IconMenu>
                                    <IconItem>
                                        <Link href="/profile/favourites">
                                            <IconLink>
                                                <MdFavoriteBorder size={20} />
                                                {TestPoint && <Point></Point>}
                                            </IconLink>
                                        </Link>
                                    </IconItem>
                                    <IconItem>
                                        <Link href="/profile/messages">
                                            <IconLink>
                                                <BiMessageRoundedDots size={20} />
                                                {TestPoint && <Point></Point>}
                                            </IconLink>
                                        </Link>
                                    </IconItem>
                                    <IconItem>
                                        <Link href="/profile/notifications">
                                            <IconLink>
                                                <MdNotificationsNone size={20} />
                                                {TestPoint && <Point></Point>}
                                            </IconLink>
                                        </Link>
                                    </IconItem>
                                </IconMenu>
                                <Link href="/profile/ads/create">
                                    <SendAds>Подать объявление</SendAds>
                                </Link>
                                <Link href="/profile/ads/create">
                                    <SendAdsMobile><AiOutlinePlus size={20} /></SendAdsMobile>
                                </Link>
                                <LoginProfileHeader />
                            </BlockRight>
                        </>
                    }
                </Container>
            </HeaderBlock>}
            {open && <MobileMenu handleClose={togglePopup} />}
        </>
    )
}
export default observer(Header);


const HeaderBlock = tw.header`fixed w-full mt-[-80px] block bg-white py-[10px] shadow-[0 2px 12px -4px rgba(0,0,0,0.5)]`
const Container = tw.div`flex lg:w-[1316px] w-auto lg:mx-auto mx-[20px]`
const LinkHome = tw.a`cursor-pointer block lg:w-[120px] w-[120px] mt-[6px]`
const OpenMenu = tw.button`lg:hidden block ml-auto bg-transparent border-none px-2 pt-1 rounded-lg mr-[-7px]`
const BlockRight = tw.div`ml-auto flex`
const SendAds = tw.a`hidden text-white bg-[#f23132] mr-[20px] my-[9px] lg:block py-[8px] text-[14px] px-[20px] rounded-full cursor-pointer hover:shadow-md duration-200 hover:duration-200 hover:bg-[#df2b2c]`
const SendAdsMobile = tw.a`block lg:hidden border-[#f23132] border-solid border-[1px] rounded-full my-[11px] pt-[4px] pb-[1px] px-[4px] text-[#f23132] mr-[10px] active:bg-[#f23132] active:text-white duration-200 hover:duration-200 active:shadow-md`;
const IconMenu = tw.ul`flex m-0 p-0 mr-[30px] mt-[16px]`
const IconItem = tw.li`list-none ml-[20px] relative`
const IconLink = tw.a`cursor-pointer hover:bg-[#f2313224] text-black pt-[10px] px-[5px] pb-[1px] rounded-full`
const Point = tw.span`bg-[#f23132] p-[3.5px] absolute rounded-full ml-[-5px]`
const ButtonLogin = tw.a`text-[14px] my-[10px] mr-[20px] bg-[#f23132] py-[7px] px-[20px] rounded-[5px] cursor-pointer text-white`
const ButtonRegistration = tw.a`text-[14px] my-[10px] bg-[#f23132] py-[7px] px-[20px] rounded-[5px] cursor-pointer text-white`