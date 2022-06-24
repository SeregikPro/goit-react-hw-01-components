import { Avatar } from 'components/Avatar/Avatar'
import { ProfileInfo } from 'components/ProfileInfo/ProfileInfo'
import css from './Description.module.css'

export const Description = () => {
    return <div className={css.description}>
        <Avatar />
        <ProfileInfo />
    </div>
}