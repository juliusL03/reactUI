import React, { useState } from "react";
import {Form, FormGroup, Label, Input, Button, FormText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm(){
    const init = {
        name: '',
        email: '',
        password: ''
    }

    const [dataContent, setDataContent] = useState(init);

    const changeHandle = (e) => {
        const {name, value} = e.target;
        setDataContent({...dataContent, [name]: value})
    }

    return (
        <div>
            <pre>{JSON.stringify(dataContent, undefined, 2)}</pre>
            <input name='name' value={dataContent.name} onChange={changeHandle} />
            <input type='email' name='email' value={dataContent.email} onChange={changeHandle} />
            <input type='password' name='password' value={dataContent.password} onChange={changeHandle} />
        </div>
        
    );
}

export default LoginForm;

