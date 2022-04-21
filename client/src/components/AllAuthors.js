import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([]);

    const deleteAuthor = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList(authorList.filter(author => author._id !== idFromBelow));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const linkStyle = {
        color: 'blue'
    }

    return(
        <div className="container">
            <Link to={"/new"} style={linkStyle}>Add an author</Link>
            <p className="purple">We have quotes by:</p>
            {
                authorList.map((author, index) => (
                    <div id="AuthorInList" key={author._id}>
                        
                        <Link to={`/author/${author._id}`}>{author.name}</Link>
                        
                        <br />
                        <Link to={`/author/edit/${author._id}`}>Edit</Link>
                        <button className="deleteButton"onClick={() => deleteAuthor(author._id)}>Delete</button>
                        
                    </div>
                ))
            }
            <div id="AddAuthorButton">
            
            </div>
        </div>
    )
}

export default AllAuthors;
