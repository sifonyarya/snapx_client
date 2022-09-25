import tw from 'twin.macro';
import Link from 'next/link';
import { useRouter } from 'next/router';



const ProfileBlockLeft: React.FC = () => {
    const router = useRouter();
    return (
        <ProfileBlock>
            <Menu>
                <Item>
                    <Link href="/profile/ads">
                        <LinkButton style={router.pathname == `/profile/ads` || router.pathname == `/profile/ads/create` ? { backgroundColor: '#f23132', color: 'white', boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)' } : {}}>Мои объявления</LinkButton>
                    </Link>
                </Item>
                <Item>
                    <Link href="/profile/messages">
                        <LinkButton
                            style={router.pathname == `/profile/messages` ? { backgroundColor: '#f23132', color: 'white', boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)' } : {}}
                        >Сообщение
                        </LinkButton>
                    </Link>
                </Item>
                <Item>
                    <Link href="/profile/favourites">
                        <LinkButton
                            style={router.pathname == `/profile/favourites` ? { backgroundColor: '#f23132', color: 'white', boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)' } : {}}
                        >Избранное
                        </LinkButton>
                    </Link>
                </Item>
                <Item>
                    <Link href="/profile/notifications">
                        <LinkButton style={router.pathname == `/profile/notifications` ? { backgroundColor: '#f23132', color: 'white', boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)' } : {}}>Уведомления</LinkButton>
                    </Link>
                </Item>
                <Item>
                    <Link href="/profile/proflle">
                        <LinkButton style={router.pathname == `/profile/proflle` ? { backgroundColor: '#f23132', color: 'white', boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)' } : {}}>Настройки</LinkButton>
                    </Link>
                </Item>
                <Item>
                    <Link href="/profile/users">
                        <LinkButton style={router.pathname == `/profile/users` || router.pathname == `/profile/users/[id]`? { backgroundColor: '#f23132', color: 'white', boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)' } : {}}>Все пользователи</LinkButton>
                    </Link>
                </Item>
                <Item>
                    <Link href="/profile/users/roles">
                        <LinkButton style={router.pathname == `/profile/users/roles` ? { backgroundColor: '#f23132', color: 'white', boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)' } : {}}>Роли пользователей</LinkButton>
                    </Link>
                </Item>
                <Item>
                    <Link href="/profile/realty">
                        <LinkButton style={router.pathname == `/profile/realty` ? { backgroundColor: '#f23132', color: 'white', boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)' } : {}}>Недвижимость</LinkButton>
                    </Link>
                </Item>
            </Menu>
        </ProfileBlock>
    )
}
export default ProfileBlockLeft;

const ProfileBlock = tw.div`hidden lg:block w-[20%] p-[15px] shadow-lg rounded-[10px] bg-white min-h-[50px] max-h-[500px]`
const LinkButton = tw.a`w-full block text-black px-[12px] py-[8px] rounded-[5px] text-[13px] cursor-pointer bg-gray-100 hover:shadow-md hover:duration-200 duration-200`
const Menu = tw.ul`m-0 p-0`
const Item = tw.li`list-none mb-[10px]`