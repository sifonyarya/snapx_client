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
            <a href={`/profile/users/${users.id}`} key={users.id}>
                <p>{users.email}</p>
            </a>
        </>
    )
}
export default CardUserProfile;