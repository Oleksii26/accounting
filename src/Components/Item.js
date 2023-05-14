import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchRemove } from "../redux/operations"


export const Item = ({ doc, name, number, id, datum }) => {
    const dispatch = useDispatch()
    const removeItem = () => {
        if (window.confirm('are you serious?'))
            dispatch(fetchRemove(id))
    }

    return (
        <div >
            {number}, {name}, {datum} <Button style={{ backgroundColor: '#098f5a' }} variant="contained" href={doc} /* to={doc} */ target='_blank' /* href={doc} */>Link</Button>
            <Button style={{ backgroundColor: '#098f5a' }} variant="contained" onClick={removeItem}>delete</Button>
        </div>
    )
}
