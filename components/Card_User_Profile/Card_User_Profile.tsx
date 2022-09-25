import tw from 'twin.macro';



interface Users {
    id: String,
    email: String
}
interface Props {
    users: Users[]
}


const CardUserProfile: React.FC<Props> = ({users}: any) => {
    return (
        <>
        <div key={users.id}>
              <p>{users.email}</p>
          </div>  
        </>
    )
}
export default CardUserProfile;