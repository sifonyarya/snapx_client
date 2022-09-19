import tw from 'twin.macro';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


interface Children {}

const MainComponents: React.FC<Children> = ({children}:any) => {
    return (
        <>
        <Header />
        <Container>
           {children}
        </Container>
        <Footer/>
        </>
    )
}
export default MainComponents;

const Container = tw.div`lg:w-[1200px] lg:mx-auto min-h-[83vh] mx-[20px]`