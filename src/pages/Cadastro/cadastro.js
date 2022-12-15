
import React from 'react';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Cadastro = () => {
  return (
    <>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Nome">
                Nome Completo
              </Label>
              <Input
                id="Nome"
                name="Nome"
                placeholder="with a placeholder"
                type="Nome"
              />
              <InputGroup>
                <InputGroupText>
                  @
                </InputGroupText>
                <Input placeholder="username" />
              </InputGroup>
              <br />
            </FormGroup>
            <FormGroup>
              <Label for="exemploemail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">
                Senha
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Senha"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="endereco">
            Endereço
          </Label>
          <Input
            id="examplendereco"
            name="endereco"

          />
        </FormGroup>


        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="examplecidade">
                Cidade
              </Label>
              <Input
                id="examplecidade"
                name="cidade"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="examplestado">
                Estado
              </Label>
              <Input
                id="exampleState"
                name="state"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="examplecep">
                CEP
              </Label>
              <Input
                id="examplecep"
                name="cep"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup
          check
          inline
        >
          Marque abaixo seus gêneros favoritos
          <Input type="checkbox" />
          <Label check>
            Drama
          </Label>
        </FormGroup>
        <FormGroup
          check
          inline
        >
          <Input type="checkbox" />
          <Label check>
            Ação
          </Label>
        </FormGroup>
        <FormGroup
          check
          inline
        >
          <Input type="checkbox" />
          <Label check>
            Infanto-Juvenil
          </Label>
        </FormGroup>
        <FormGroup
          check
          inline
        >
          <Input type="checkbox" />
          <Label check>
            Religiosos
          </Label>
        </FormGroup>
        <FormGroup
          check
          inline
        >
          <Input type="checkbox" />
          <Label check>
            Auto ajuda
          </Label>
        </FormGroup>
        <FormGroup
          check
          inline
        >
          <Input type="checkbox" />
          <Label check>
            Romance
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="exampleCheck"
            name="check"
            type="checkbox"
          />
          <Label
            check
            for="exampleCheck"
          >
            Gostaria de receber indicações de novos livros e autores por e-mail
          </Label>
        </FormGroup>
        <Button>
          Cadastrar
        </Button>
      </Form>
    </>
  )
};

export default Cadastro;