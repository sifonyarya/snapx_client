import tw from 'twin.macro';
import { VscClose } from 'react-icons/vsc';
import Image from 'next/image';
import Logo from '../../public/pictures/logo.svg';
import HeaderMenuMobile from '../HeaderMenu/HeaderMenuMobile';

const MobileMenu = (props: any) => {
    return (
        <Popup>
            <Link href='/'>
            <LogoImage>
            <Image src={Logo} />
            </LogoImage>
            </Link>
        <Close onClick={props.handleClose}>
            <VscClose style={{color: 'black'}} size={20} />
        </Close>
        <Menu>
        <HeaderMenuMobile 
        menu={{
            links: [
                { text: "Вход", link: "/login" },
                { text: "Регистрация", link: "/register" },
                { text: "Контакты", link: "/contact" },
                { text: "Сотрудничество", link: "/partners" }
            ]
        }}
        />
        </Menu>
        </Popup>
    )
}
export default MobileMenu;

const Popup = tw.div`bg-white absolute w-full h-[100vh] z-10 top-0 duration-300`
const Link = tw.a``
const LogoImage = tw.div`mx-auto w-[30%] block mt-[20px] text-center`
const Close = tw.button` ml-auto absolute right-[20px] top-[20px] bg-transparent px-0 py-[4px] border-none`
const Menu = tw.div`w-[80%] mx-auto`