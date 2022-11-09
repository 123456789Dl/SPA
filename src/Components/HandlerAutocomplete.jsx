import React, {useEffect, useMemo, useState} from 'react';
import AutocompleteComp from "./AutocompleteComp";

const HandlerAutocomplete = (props) => {
    const [textData, setData] = useState('')
    const [users, setUsers] = useState([])

    let timeless = []

    useEffect(() => {
        if (textData) {
            fetch(`https://api.github.com/search/users?q=${textData}`)
                .then((response) => (response.json()))
                .then((response) => setUsers(response.items))
        }
    }, [textData])
    const usersForSearch = () => {
        if (users) {
            return users.filter((_, index) => index <= 6).map((el) => el.login)
        } else {
            return []
        }
    }
    timeless = useMemo(() => usersForSearch(), [users])

    return (
        <div>
            <AutocompleteComp
                timeless={timeless}
                setData={setData}
                setPerson={props.setPerson}/>
        </div>
    );
};

export default HandlerAutocomplete;