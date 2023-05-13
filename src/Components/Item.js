import { useDispatch } from "react-redux"
import { fetchRemove } from "../redux/operations"




export const Item = ({ doc, name, number, id }) => {
    const dispatch = useDispatch()
    const removeItem = () => {
        if (window.confirm('are you serious?'))
            dispatch(fetchRemove(id))
    }

    return (
        <div>{number}, {name} <a target="_blank" href={doc}>Link</a>
            <button onClick={removeItem}>delete</button>
        </div>
    )
}
