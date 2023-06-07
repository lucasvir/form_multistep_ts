import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { Form } from "../../components/Form";
import { FormHeader } from "../../components/FormHeader";
import { Step } from "../../components/Steps";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";

import arrowLeft from "../../assets/icon/arrow-left.svg";

export const Projeto = () => {
  const navigate = useNavigate();

  function handleSteps() {
    navigate("/projeto");
  }

  function handleBack() {
    navigate("/empresa");
  }

  return (
    <Container>
      <Form>
        <FormHeader>
          <Step step="1" text="Contato" className="active" />
          <img src={arrowLeft} alt="" />
          <Step step="2" text="Empresa" className="active" />
          <img src={arrowLeft} alt="" />
          <Step step="3" text="Projeto" />
        </FormHeader>

        <TextArea
          title="Objetivos do projeto"
          placeholder="Descreva quais os objetivos desse projeto"
        />
        <div id="button-wrapper">
          <Button
            title="voltar"
            className="ghost"
            onClick={() => handleBack()}
          />
          <Button title="eviar" onClick={() => handleSteps()} />
        </div>
      </Form>
    </Container>
  );
};
