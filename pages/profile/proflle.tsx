import { NextPage } from 'next';
import tw from 'twin.macro';
import ProfileContainers from '../../containers/ProfileContainers';






const ProfileSettings: NextPage = () => {
    return (
        <>
            <ProfileContainers>
                <p style={{ color: 'black' }}>Настройки</p>
            </ProfileContainers>
        </>
    )
}
export default ProfileSettings;