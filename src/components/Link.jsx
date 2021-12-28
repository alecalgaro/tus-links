import React, {useState} from 'react'
import styled from 'styled-components';
import db from './../firebase/firebaseConfig';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

export const Link = ({id, title, description, category, link}) => {

    const [newTitle, setNewTitle] = useState(title); 
    const [newDescription, setNewDescription] = useState(description); 
    const [newCategory, setNewCategory] = useState(category); 
    const [newLink, setNewLink] = useState(link); 
    const [editingLink, setEditingLink] = useState(false);

    const updateLink = async (e) => {
        e.preventDefault();

        try {
            await updateDoc(doc(db, 'links', id), {
                title: newTitle,
                description: newDescription,
                category: newCategory,
                link: newLink
            })
        } catch (error) {
            console.log('Ocurrió un error al intentar actualizar')
			console.log(error)
        }
        setEditingLink(false);
    }

    const deleteLink = async (id) => {
        try {
            await deleteDoc(doc(db, 'links', id));
        } catch (error) {
            console.log('Ocurrió un error al intentar eliminar')
			console.log(error)
        }
    }

    return (
        <LinkContainer>
            { editingLink 
                ?   // si estamos editando:
                <FormStyle onSubmit={updateLink}>
                    <Input 
                        type="text"
                        name="titulo"
                        value={newTitle}
                        onChange={ (e) => setNewTitle(e.target.value) }
                        placeholder="Titulo" 
                    />

                    <Input 
                        type="text"
                        name="descripcion"
                        value={newDescription}
                        onChange={ (e) => setNewDescription(e.target.value) }
                        placeholder="Descripción" 
                    />

                    <Select onChange={ (e) => setNewCategory(e.target.value) } >
                        <option data-hidden="true" value="">Categoria</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">JS</option>
                        <option value="react">React</option>
                    </Select>

                    <Input 
                        type="text"
                        name="link"
                        value={newLink}
                        onChange={ (e) => setNewLink(e.target.value) }
                        placeholder="Link" 
                    />

                    <Button type="submit">Actualizar</Button>
                    
                </FormStyle>
                
                :   // si no estamos editando:
                    <>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                        <Plink>{link}</Plink>
                        <GroupButtons>
                            <ButtonLink onClick={() => setEditingLink(!editingLink)}>Editar</ButtonLink>
                            <ButtonLink onClick={() => deleteLink(id)}>Eliminar</ButtonLink>
                        </GroupButtons>
                        <a href={link} target="_blank">
                            <ButtonLink>Acceder</ButtonLink>
                        </a>
                        
                    </>
            }
        </LinkContainer>
    )
}

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    padding: 1rem;
    text-align: center;
    background-color: var(--grey);
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

const GroupButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: .5rem 0;
`

const ButtonLink = styled.button`
    display: block;
    font-size: 1.1rem;
    text-align: center;
    /* width: 50%; */
    width: 8rem;
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

const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: .5rem;
`

const Description = styled.p`
    font-size: 1.2rem;
    margin-bottom: .5rem;
`

const Plink = styled.p`
    font-size: 1.1rem;
    font-style: italic;
    margin-bottom: .5rem;
`
