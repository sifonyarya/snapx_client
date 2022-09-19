import tw from 'twin.macro';


interface Link { text: string, link: string }
interface Menu { links: Link[] }
interface Props { menu?: Menu }

const HeaderMenu: React.FC<Props> = ({ menu }) => {
    return (
        <>
            <MenuDesktop>
                {menu?.links.map(item =>
                    <MenuItemDesktop key={item.link}>
                        <LinkMenu href={item.link}>{item.text}</LinkMenu>
                    </MenuItemDesktop>
                )}
            </MenuDesktop>
        </>
    )
}
export default HeaderMenu;

const MenuDesktop = tw.ul`w-[600px] lg:flex hidden`
const MenuItemDesktop = tw.li`block`
const LinkMenu = tw.a`text-black mr-[15px] hover:text-[#f23132] duration-200 hover:duration-200 text-[14px]`