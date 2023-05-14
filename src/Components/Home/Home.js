import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDocs } from '../../redux/operations';
import { Item } from '../Item/Item';
import { Link } from 'react-router-dom'
import { Button } from "@mui/material"
import css from './Home.module.css'
import { BounceLoader } from 'react-spinners';



export const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDocs())
    }, []);
    const docs = useSelector(state => state.docs.items)
    const isLoading = useSelector(state => state.docs.isLoading)

    return (
        <div className={css.container}>
            <div>

                {isLoading ? <ul className={css.list} >
                    {
                        docs.map(e => <li className={css.item} key={e._id}><Item
                            doc={e.doc}
                            name={e.name}
                            number={e.datum}
                            datum={e.number}
                            id={e._id}
                        /> </li>)
                    }
                </ul > : <BounceLoader
                    style={{
                        position: 'absolute',
                        left: '45%',
                        top: '20%',
                    }} color="#098f5a" />
                }
            </div>

        </div>

    )
}
