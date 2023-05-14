import axios from '../axios';
import { useRef, useState } from 'react'
import { Button } from "@mui/material"
import '../index.css'
import css from './Style.module.css'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'

export const UploadDoc = () => {
    const filePicker = useRef(null)
    const [selectFile, setSelectFile] = useState(null);
    const [name, setName] = useState('');
    const [datum, setDatum] = useState('');
    const [number, setNumber] = useState('');
    const [doc, setDoc] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = e => {
        setSelectFile(e.target.files[0])
        console.log(e.target.files);
    }

    const handleUpload = async () => {
        setIsLoading(true)

        if (!selectFile) {
            console.log('rorre');
            return
        }
        const formData = new FormData()
        formData.append('image', selectFile)

        const { data } = await axios.post('/upload', formData)

        console.log(data);
        setDoc(data.result.url)
        setIsLoading(false)

    }
    const handlePick = () => {
        filePicker.current.click()
    }

    const onSubmit = async () => {
        try {
            const fields = {
                number,
                datum,
                doc,
                name,
            }
            const result = await axios.post('/create', fields)
            console.log(result);

            setDatum('')
            setName('')
            setNumber('')
        } catch (e) {
            console.log(e.message, 'onSubmit');
        }
    }


    return (
        <div className={css.container}>
            <div className={css.card}>
                <div className={css.block}>
                    <TextField
                        color='warning'
                        id="outlined-basic" label="№" variant="outlined" value={number} onChange={e => setNumber(e.target.value)} type='text' />
                    <TextField
                        color='warning'
                        id="outlined-basic" label="Ім'я" variant="outlined" value={name} onChange={e => setName(e.target.value)} type='text' />
                    <TextField
                        color='warning'
                        id="outlined-basic" label="Дата" variant="outlined" value={datum} onChange={e => setDatum(e.target.value)} type='data' />
                    <Button style={{ backgroundColor: '#098f5a', marginTop: '10px' }} variant="contained" onClick={handlePick}>Вибрати файл</Button>
                    <Button style={{ backgroundColor: '#098f5a', marginTop: '10px' }} disabled={isLoading} variant="contained" onClick={handleUpload}>Завантажити</Button>
                    <input
                        type='file'
                        ref={filePicker}
                        onChange={handleChange}
                        hidden
                    />
                </div>

            </div >
            <a href='/accounting/'>
                <Button style={{ backgroundColor: '#098f5a' }} disabled={isLoading} variant="contained" onClick={onSubmit}>Зберегти</Button>
            </a>

        </div >
    )
}
