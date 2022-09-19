import tw from 'twin.macro';
import Link from 'next/link';




const MenuProfileMobile: React.FC = () => {
    return (
        <>
        <Container>
            <ul>
                <li>
                    <Link href="">
                    <a>Мои объявления</a>
                    </Link>
                </li>
            </ul>
        </Container>
        </>
    )
}
export default MenuProfileMobile;


const Container = tw.div`block lg:hidden mb-[15px]`