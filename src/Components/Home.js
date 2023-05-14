import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDocs } from '../redux/operations';
import { Item } from './Item';
import { Link } from 'react-router-dom'
import { Button } from "@mui/material"
import css from './Style.module.css'


export const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDocs())
    }, []);
    const docs = useSelector(state => state.docs.items)

    return (<>

        <ul className={css.list}>
            {docs.map(e => <li key={e._id}><Item
                doc={e.doc}
                name={e.name}
                number={e.datum}
                datum={e.number}
                id={e._id}
            /> </li>)}
        </ul>
    </>
    )
}
