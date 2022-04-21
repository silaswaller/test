import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewAuthor = (props) => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", 
        {
            name
        }
        )
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate("/")
        })
        .catch((err) => {
            console.log("error", err.response);
            setErrors(err.response.data.errors)
        })
    }

    const cancelHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const linkStyle = {
        color: 'blue'
    }

    return(
        <div>
            <header>
            <Link to={"/"} style={linkStyle}>Home</Link>
                <p className="purple">Add a new author:</p>
                
            </header>
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

export default NewAuthor;