import tw from 'twin.macro';


interface Link { text: string, link: string }
interface Menu { links: Link[] }
interface Props { menu?: Menu } 

const HeaderMenuMobile: React.FC<Props> = ({menu}) => {
    return (
        <>
        <Menu>
            {menu?.links.map(item=>
            <Item key={item.link}>
               <Link href={item.link}>{item.text}</Link>
            </Item>
            )}
        </Menu>
        </>
    )
}
export default HeaderMenuMobile;

const Menu = tw.ul`mt-[80px] p-0`
const Item = tw.li`list-none py-[10px] text-[14px] text-center `
const Link = tw.a`text-black hover:text-[#f23132]`