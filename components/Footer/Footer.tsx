import tw from 'twin.macro';
import Image from 'next/image';
import Logo from '../../public/pictures/logo.svg'



const Footer: React.FC = () => {
    return (
        <>
            <FooterBlock>
                <Container>
                    <LeftBlockFooter>
                    <Image src={Logo} width={125}/>
                    </LeftBlockFooter>
                    <RightBlockFooter>
                    <SupportOpen>Служба поддержки</SupportOpen>
                    </RightBlockFooter>
                </Container>
                <ContainerBottom>
                    <PolicyLink href="/policy">Политика конфиденциальности</PolicyLink>
                    <CopyrightText>Все права защищены 2022</CopyrightText>
                </ContainerBottom>
            </FooterBlock>
        </>
    )
}
export default Footer;

const FooterBlock = tw.footer`block w-full shadow-[0 2px 12px -2px rgba(0,0,0,0.5)] py-[10px]`;
const Container = tw.div`lg:w-[1200px] lg:mx-auto flex justify-between`;
const LeftBlockFooter = tw.div``;
const RightBlockFooter = tw.div``;
const ContainerBottom = tw.div`flex justify-between lg:w-[1200px] w-auto lg:mx-auto mx-[20px]`;
const PolicyLink = tw.a`text-black hover:text-[#f23132] duration-200 hover:duration-200 text-[14px]`;
const SupportOpen = tw.button`bg-[#f23132] cursor-pointer border-none text-white rounded-md px-[20px] py-[5px] my-[20px]`;
const CopyrightText = tw.p`p-0 m-0 text-[14px]`