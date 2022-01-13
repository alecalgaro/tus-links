import React, {useState} from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export const FormAdd = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault(); 

        // Conexión a firebase y añadimos el documento
        try {
            await addDoc(collection(db, 'links'), {
                title: title,
                description: description,
                category: category,
                link: link
            });    
            console.log('Documento añadido correctamente')
		} catch (error) {
			console.log('Hubo un error al intentar guardar el documento')
			console.log(error)		
		}
		// limpio los campos del formulario:
		setTitle('');
        setDescription('');
        setCategory('');
        setLink('');
        
    }

    return (
        <>
            <Subtitle>Añadir nuevo link</Subtitle>
            <FormStyle onSubmit={onSubmit}>
                <Input 
                    type="text"
                    name="titulo"
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                    placeholder="Titulo" 
                />

                <Input 
                    type="text"
                    name="descripcion"
                    value={description}
                    onChange={ (e) => setDescription(e.target.value) }
                    placeholder="Descripción" 
                />

                <Select onChange={ (e) => setCategory(e.target.value) } >
                    <option data-hidden="true" value="">Categoria</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">JS</option>
                    <option value="react">React</option>
                    <option value="iconos">Iconos</option>
                    <option value="otra">Otra</option>
                </Select>

                <Input 
                    type="text"
                    name="link"
                    value={link}
                    onChange={ (e) => setLink(e.target.value) }
                    placeholder="Link" 
                />

                <Button type="submit">Agregar</Button>
                
            </FormStyle>
        </>
    )
}

const Subtitle = styled.h2`
    font-size: 1.5rem;
`

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 90%;

    @media (min-width: 768px) {
        width: 50%;
    }
`

const Input = styled.input`
    font-size: 1.5rem;
    text-align: center;
    width: 90%;
    margin-bottom: 1rem;
    outline: none;
    padding: .2rem 0;
    /* border: 2px solid var(--blue); */
`

const Select = styled.select`
    font-size: 1.5rem;
    text-align: center;
    width: 90%;
    margin-bottom: 1rem;
    outline: none;
    padding: .2rem 0;
`

const Button = styled.button`
    display: block;
    font-size: 1.5rem;
    text-align: center;
    /* width: 50%; */
    width: 15rem;
    background-color: var(--blue);
    color: var(--white);
    cursor: pointer;
    padding: .5rem 0;
    border: none;
    border-radius: 1rem;
    transition: .3s ease all;

    &:hover {
        background: var(--blue-dark);
    }
`