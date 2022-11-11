import {makeAutoObservable} from "mobx";
import ReposCard from "../Components/ReposCard";
import React from "react";


class RepositoryStore {
    constructor() {
        makeAutoObservable(this)
    }

    getReposData = async (setReposData, setIsLoading, username) => {
        await fetch(`https://api.github.com/users/${username}/repos`)
            .then((response) => response.json())
            .then((response) => setReposData(response))
        setIsLoading(true)

    }
    mapRepositories = (reposData, filterHolder) => {
        if (reposData && reposData.length > 0 && filterHolder.length > 0) {
            return filterHolder.map((el) => <ReposCard
                id={el.id}
                name={el.name}
                watchers={el.watchers_count}
                stars={el.stargazers_count}
                description={el.description}
            />)
        } else if (reposData && reposData.length > 0) {
            return reposData.map((el) => <ReposCard
                id={el.id}
                name={el.name}
                watchers={el.watchers_count}
                stars={el.stargazers_count}
                description={el.description}
            />)
        } else return []
    }

    filterRepos = (reposData, repository) => {
        if (reposData && reposData.length > 0) {
            return (reposData.filter((el) => repository === el.name))
        }
    }
}

export default new RepositoryStore()