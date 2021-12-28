import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from './Link';
import db from './../firebase/firebaseConfig';	
import { collection, onSnapshot } from 'firebase/firestore';

export const ListLinks = () => {
    // En el estado vamos a tener un arreglo por cada link
	const [links, setLinks] = useState([]);

    useEffect(() => {
        onSnapshot(
			collection(db, 'links'),
			(snapshot) => {	  
				const arrayLinks = snapshot.docs.map( (document) => {
					return { ...document.data(), id: document.id }
				})

				setLinks(arrayLinks);
			},
			
			(error) => {
				console.log(error);	
			}
		);
	}, []);
 
    return (
        links.length > 0 &&
        <div>
            {links.map( (link) => (
                <Link
                    key={link.id}
                    id={link.id}
                    title={link.title}
                    description={link.description}
                    category={link.category}
                    link={link.link}
                />

            ))}
        </div>
    );
}

