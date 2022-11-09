import React, {useEffect, useState} from 'react';
import style from '../Style/User.module.css'
import UserCard from "./UserCard";

const User = (props) => {
    const [userConf, setUserConf] = useState([])

    useEffect(() => {
        if (props.person) {
            fetch(`https://api.github.com/users/${props.person}`)
                .then((response) => response.json())
                .then((response) => setUserConf(response))
        }
    }, [props.person])
    return (
        <div>
            <div className={style.wrapper}>
                <UserCard
                    img={userConf.avatar_url}
                    login={userConf.name}
                    id={userConf.id}
                    blog={userConf.blog}
                    created={userConf.created_at}
                    followers={userConf.followers}
                    following={userConf.following}
                    goToRepos={props.goToRepos}
                />
            </div>
        </div>
    );
};

export default User;