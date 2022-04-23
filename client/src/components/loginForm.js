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
        // <div>
        //     <pre>{JSON.stringify(dataContent, undefined, 2)}</pre>
        //     <input type='text' name='name' value={dataContent.name} onChange={changeHandle} />
        //     <input type='email' name='email' value={dataContent.email} onChange={changeHandle} />
        //     <input type='password' name='password' value={dataContent.password} onChange={changeHandle} />
        // </div>
       
        <form>
            <pre>{JSON.stringify(dataContent, undefined, 2)}</pre>
            <div className="form-group">
                <label for="exampleInputName1">Name</label>
                <input  className="form-control" id="exampleInputEmail1" placeholder="Enter name" name='name' value={dataContent.name} onChange={changeHandle} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else</small>
            </div>
            <div className="form-group">
                <label className="exampleInputEmail1">Email</label>
                <input  className="form-control" id="exampleInputEmail1" placeholder="Enter email" name='email' value={dataContent.email} onChange={changeHandle} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else</small>
            </div>
            <div className="form-group">
                <label className="exampleInputPassword1">Password</label>
                <input className="form-control" id="exampleInputPassword" type="password" name="password" value={dataContent.password} onChange={changeHandle} />
            </div>
        </form>
    );
}

export default LoginForm;

