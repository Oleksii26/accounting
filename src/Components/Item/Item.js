import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchRemove } from "../../redux/operations"
import css from './Item.module.css'

export const Item = ({ doc, name, number, id, datum }) => {
    const dispatch = useDispatch()
    const removeItem = () => {
        if (window.confirm('Підтвердити видалення'))
            dispatch(fetchRemove(id))
    }

    return (
        <div className={css.container}>
            <div>

                <Link className={css.link} to={doc} target='_blank'>
                    {number} {name} {datum}
                </Link>
            </div>
            <div className={css.thumb}>

                <span style={{ cursor: 'pointer' }} onClick={removeItem}><b>&#10007;</b></span>

            </div>
        </div>
    )
}
