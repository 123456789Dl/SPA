import React, {useEffect, useState} from 'react';
import style from '../Style/User.module.css'
import UserCard from "./UserCard";
import GeneralStore from '../store/GeneralStore'

const User = (props) => {
    // const [userConf, setUserConf] = useState([])

    useEffect(() => {
        if (props.person) {
            GeneralStore.getUsersData(props.person)
        }
    }, [props.person])
    return (
        <div>
            <div className={style.wrapper}>
                <UserCard
                    img={GeneralStore.usersDate.avatar_url}
                    login={GeneralStore.usersDate.name}
                    id={GeneralStore.usersDate.id}
                    blog={GeneralStore.usersDate.blog}
                    created={GeneralStore.usersDate.created_at}
                    followers={GeneralStore.usersDate.followers}
                    following={GeneralStore.usersDate.following}
                    goToRepos={GeneralStore.usersDate.goToRepos}
                />
            </div>
        </div>
    );
};

export default User;