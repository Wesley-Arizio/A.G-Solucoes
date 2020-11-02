import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom'

import { useAuthContext, useDispatchContext } from '../../Context/context';

import history from '../../history';

import { AxiosResponse } from 'axios';
import api from '../../services/api';

import { 
  Content,
  Container,
  ContainerImage,
  ContainerFormLogin,
  Form,
  Label,
  ContainerSupport,
  Button
} from './styles';

import logo from '../../assets/logo_white.svg';
import { FiArrowLeft } from 'react-icons/fi';

interface DataLoginResponse extends AxiosResponse {
  data: {
      token: string,
      user: {
        name: string
        email: string,
        id: string,
      }
  }
}

const CreateUserAccount = () => {
  const  state = useAuthContext();
  const dispatch = useDispatchContext();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    state.user.name = name;
    state.user.email = email;
    state.user.password = password;
  }, [name, email, password])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = 
      await api.post('/user', {
          name: state.user.name,
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
              <Label htmlFor="name">
                  Nome: 
                  <input 
                    type="text"
                    placeholder="Digite seu nome: "
                    value={name}
                    onChange={
                      (event) => setName( event.target.value)}
                  />
                </Label>
                <Label htmlFor="email">
                  Email: 
                  <input 
                    type="email"
                    placeholder="Digite seu email: "
                    value={email}
                    onChange={
                      (event) => setEmail(event.target.value)}
                  />
                </Label>
                <Label htmlFor="password">
                  Password: 
                  <input 
                    type="password"
                    placeholder="Digite sua senha: "
                    value={password}
                    onChange={
                      (event) => setPassword( event.target.value )}
                  />
                </Label>
              <ContainerSupport>
                <li>
                  <span>Já tem conta? </span>
                  <Link to="/auth">Faça login aqui</Link>
                  </li>
              </ContainerSupport>
              <Button>Confirmar</Button>
            </Form>
        </ContainerFormLogin>
      </Container>
    </Content>
  );
};

export default CreateUserAccount;
