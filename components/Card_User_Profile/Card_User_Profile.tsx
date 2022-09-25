import tw from 'twin.macro';



interface Users {
    id: String,
    email: String
}
interface Props {
    users: Users[]
}


const CardUserProfile: React.FC<Props> = ({ users }: any) => {
    return (
        <>
            <Card href={`/profile/users/${users.id}`} key={users.id}>
                <p>{users.email}</p>
            </Card>
        </>
    )
}
export default CardUserProfile;


const Card = tw.a`rounded-[5px] p-[15px] border-[1px] border-solid border-[#d6d6d6] mb-[5px] cursor-pointer`