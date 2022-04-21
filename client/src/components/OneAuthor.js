import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const OneAuthor = (props) => {

    const [author, setAuthor] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res => {
                console.log(res);
                console.log(res.data);
                setAuthor(res.data);
            }))
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    return(
        <div>
            <header>
                <h1>{author.name}</h1>
            </header>
            <br/>
            <button onClick={deleteAuthor}>Delete</button>
            <br/>
            <Link to={`/author/edit/${author._id}`}>Edit</Link>
            <br />
            <Link to={"/"}>Return Home</Link>
        </div>
    )
}

export default OneAuthor;