import axios from '../axios';
import { useRef, useState } from 'react'

export const UploadDoc = () => {
    const filePicker = useRef(null)
    const [selectFile, setSelectFile] = useState(null);
    const [name, setName] = useState('');
    const [datum, setDatum] = useState('');
    const [number, setNumber] = useState('');
    const [doc, setDoc] = useState('');
    const handleChange = e => {
        setSelectFile(e.target.files[0])
        console.log(e.target.files);
    }

    const handleUpload = async () => {
        if (!selectFile) {
            console.log('rorre');
            return
        }
        const formData = new FormData()
        formData.append('image', selectFile)

        const { data } = await axios.post('/upload', formData)

        console.log(data);
        setDoc(data.result.url)
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
        } catch (e) {
            console.log(e.message, 'onSubmit');
        }
    }


    return (
        <div>
            <div>
                <input value={number} onChange={e => setNumber(e.target.value)} type='text' /><br />
                <input value={name} onChange={e => setName(e.target.value)} type='text' /><br />
                <input value={datum} onChange={e => setDatum(e.target.value)} type='number' /><br />
            </div >
            <a href="/">
                <button onClick={onSubmit}>Submit</button>
            </a>
            <button onClick={handlePick}>Pick file</button>
            <input
                type='file'
                ref={filePicker}
                onChange={handleChange}
                hidden
            />

            <button onClick={handleUpload}>upload</button>

        </div >
    )
}
