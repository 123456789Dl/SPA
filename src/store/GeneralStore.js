import {makeAutoObservable} from "mobx";
import React from "react";


class GeneralStore {
    repositoryDate = [

    ]
    usersDate = {}
    constructor() {
        makeAutoObservable(this)
    }

    getReposData = async (setIsLoading, username) => {
        await fetch(`https://api.github.com/users/${username}/repos`)
            .then((response) => response.json())
            .then((response) => this.repositoryDate = ([...response]))
        setIsLoading(true)
    }

    getUsersData = async (person) => {
        if (person) {
            fetch(`https://api.github.com/users/${person}`)
                .then((response) => response.json())
                .then((response) => this.usersDate = ({...response}))
        }
    }


    filterRepos = (repository) => {
        if (this.repositoryDate && this.repositoryDate.length > 0) {
            return (this.repositoryDate.filter((el) => repository === el.name))
        }
    }
}

export default new GeneralStore()