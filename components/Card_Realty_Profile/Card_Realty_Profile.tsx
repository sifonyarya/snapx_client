import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../pages/api/config";



interface RealtyProps {
    id: String,
    email: String
}
interface Props {
    realty: RealtyProps []
}

const Card_Realty_Profile: React.FC<Props> = ({realty}:any) => {
    const deleteQ = async (id:any) => {
        const res = await fetch(API_URL + `/realty/` + id, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }
        });
        window.location.reload();
    }
    const [email_user, setEmailUser] = useState();
    useEffect(() => {
        const id = localStorage.getItem('user_id')
        axios.get(API_URL + '/users/' + id)
            .then((response: AxiosResponse) => {
                setEmailUser(response.data.email);
            });
    }, []);
    return (
        <>
        {email_user == realty.email &&
        <a href={`/profile/realty/${realty.id}`} key={realty.id}>
        <p>{realty.email}</p>
        <button onClick={() => deleteQ(realty.id)}>Удалить</button>
         </a>
        }
        </>
    )
}
export default Card_Realty_Profile;