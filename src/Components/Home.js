import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDocs } from '../redux/operations';
import { Item } from './Item';

export const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDocs())
    }, []);
    const docs = useSelector(state => state.docs.items)

    return (<>
        <ul>
            {docs.map(e => <li key={e._id}><Item 
                doc={e.doc}
                name={e.name}
                number={e.number}
                id={e._id}
            /> </li>)}
        </ul>
    </>
    )
}
