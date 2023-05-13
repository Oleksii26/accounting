import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchRemove } from "../redux/operations"




export const Item = ({ doc, name, number, id }) => {
    const dispatch = useDispatch()
    const removeItem = () => {
        if (window.confirm('are you serious?'))
            dispatch(fetchRemove(id))
    }

    return (
        <div>{number}, {name} <Link to={doc} target='_blank' href={doc}>Link</Link>
            <button onClick={removeItem}>delete</button>
        </div>
    )
}
