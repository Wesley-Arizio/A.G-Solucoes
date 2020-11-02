import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from "react-router-dom";

import { AxiosResponse } from 'axios';

import { User, useAuthContext, useDispatchContext } from '../../Context/context';

import api from '../../services/api';

import history from '../../history';

import { 
  Content, 
  Container, 
  ContainerImage,
  ContainerFormLogin,
  Form,
  Label,
  Button,
  ContainerSupport
} from './styles';

import logo from '../../assets/logo_white.svg';
import { FiArrowLeft } from 'react-icons/fi';

interface DataLoginResponse extends AxiosResponse {
  data: {
      token: string,
      userToReturn: {
          id: string,
          email: string,
          name: string
      }
  }
}

const Login = () => {
  const dispatch = useDispatchContext();

  const state = useAuthContext();
  const [user, setUser] = useState<User>({name: '', email: '', password: ''})
  
  useEffect(() => {
    state.user.email = user.email;
    state.user.password = user.password;

  }, [user.email, user.password]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = 
      await api.post('/user/auth', {
          email: state.user.email,
          password: state.user.password
      }) as DataLoginResponse;

      const token = response.data.token;

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      
      dispatch({type: 'login'});
      history.push('/app');
  }

  return (
    <Content>
      <Container>
        <ContainerImage>
          <img src={logo} alt="A.G Soluções logo"/>
        </ContainerImage>
        <ContainerFormLogin>
            <button type="button" onClick={history.goBack} className="button-goback">
              <FiArrowLeft size={24} color="#303030" />
            </button>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="email">
                Email: 
                <input 
                  type="email"
                  placeholder="Digite seu email: "
                  value={user.email}
                  onChange={
                    (event) => setUser({
                      ...user, 
                      email: event.target.value
                    })}
                />
              </Label>
              <Label htmlFor="password">
                Password: 
                <input 
                  type="password"
                  placeholder="Digite sua senha: "
                  value={user.password}
                  onChange={
                    (event) => setUser({
                      ...user, 
                      password: event.target.value
                    })}
                />
              </Label>
              <ContainerSupport>
                <li>
                  <input type="checkbox" name="Remember me" id=""/>
                  <span>Lembrar de mim</span>
                </li>
                <li><Link to="/">Esqueci minha senha.</Link></li>
              </ContainerSupport>
              <Button>Confirmar</Button>
            </Form>
        </ContainerFormLogin>
      </Container>
    </Content>
  );
};

export default Login;
