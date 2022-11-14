import React, {useEffect, useState} from 'react';
import style from '../Style/User.module.css'
import UserCard from "./UserCard";
import GeneralStore from '../store/GeneralStore'
import {observer} from "mobx-react-lite";

const User = observer (({person}) => {
    const {usersDate} = GeneralStore
    useEffect(() => {
        if (person) {
            GeneralStore.getUsersData(person)
        }
    }, [person])

    return (
        <div>
            <div className={style.wrapper}>
                <UserCard
                    img={usersDate.avatar_url}
                    login={usersDate.name}
                    id={usersDate.id}
                    blog={usersDate.blog}
                    created={usersDate.created_at}
                    followers={usersDate.followers}
                    following={usersDate.following}
                    goToRepos={usersDate.goToRepos}
                />
            </div>
        </div>
    );
});

export default User;