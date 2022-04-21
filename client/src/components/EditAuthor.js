import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditAuthor = (props) => {

    const [name, setName] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const cancelHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, 
        {
            name
        }
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors)
        })
    }

    const linkStyle = {
        color: 'blue'
    }

    return(
        <div className="container">
            <Link to={"/"} style={linkStyle}>Home</Link>
            <p className="purple">Edit this author</p>
            <form>
            <div id="outerBox">
                    <label>Name:</label>
                    <br />
                    <input value={name} type="text" onChange={(e) => setName(e.target.value)}></input>
                    {errors.name && <p>{errors.name.message}</p>} 
                <div id="blueButtons">
                <button className="blueButton" onClick={cancelHandler}>Cancel</button>
                <button className="blueButton" onClick={submitHandler}>Submit</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default EditAuthor;