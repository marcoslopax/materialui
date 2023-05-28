import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const Login = () => {
    const [login, setLogin] = useState('');
    return (
        <div className="Login">
        <h1 className="Login-title">Login</h1>
        <form className="Login-form">
          <input type="text" className="Login-input" placeholder="Usuário" />
          <input type="password" className="Login-input" placeholder="Senha" />
          <button className="Login-button">Entrar</button>
        </form>
      </div>
    );
}

export default Login;