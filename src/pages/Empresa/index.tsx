import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import { Form } from "../../components/Form";
import { FormHeader } from "../../components/FormHeader";
import { Step } from "../../components/Steps";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";

import arrowLeft from "../../assets/icon/arrow-left.svg";

export const Empresa = () => {
  const navigate = useNavigate();

  function handleSteps() {
    navigate("/projeto");
  }

  function handleBack() {
    navigate('/');
  }

  return (
    <Container>
      <Form>
        <FormHeader>
          <Step step="1" text="Contato" className="active" />
          <img src={arrowLeft} alt="" />
          <Step step="2" text="Empresa" />
          <img src={arrowLeft} alt="" />
          <Step step="3" text="Projeto" className="disable" />
        </FormHeader>

        <Input title="Nome da empresa" placeholder="Qual é o nome da empresa" />
        <Input
          title="Numero de funcionario"
          placeholder="Digite o número de colaboradores"
        />
        <TextArea
          title="Sobre seu negócio"
          placeholder="Fale um pouco sobre seus produtos ou serviços"
        />
        <div id="button-wrapper">
          <Button
            title="voltar"
            className="ghost"
            onClick={() => handleBack()}
          />
          <Button title="continuar" onClick={() => handleSteps()} />
        </div>
      </Form>
    </Container>
  );
};
