import React, {useState} from 'react'
import styled from 'styled-components'

export const Form = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");

    return (
        <>
            <Subtitle>Añadir nuevo link</Subtitle>
            <FormStyle>
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

                <Input 
                    type="text"
                    name="link"
                    value={link}
                    onChange={ (e) => setLink(e.target.value) }
                    placeholder="Link" 
                />

                <Button 
                    type="submit" 
                    onClick={console.log("Gola")}
                    >Agregar
                </Button>
                
            </FormStyle>
        </>
    )
}

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-family: 'Lucida Sans', sans-serif;
`

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
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