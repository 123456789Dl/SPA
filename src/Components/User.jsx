import React, {useEffect, useState} from 'react';
import style from '../Style/User.module.css'
import UserCard from "./UserCard";
import {useNavigate} from "react-router-dom";

const User = (props) => {
    const [userConf, setUserConf] = useState([])

    useEffect(() => {
        if (props.person) {
            fetch(`https://api.github.com/users/${props.person}`, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': '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'
                })
            })
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