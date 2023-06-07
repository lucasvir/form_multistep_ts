import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import { Form } from "../../components/Form";
import { FormHeader } from "../../components/FormHeader";
import { Step } from "../../components/Steps";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import arrowLeft from "../../assets/icon/arrow-left.svg";

export const Home = () => {
  const navigate = useNavigate();

  function handleSteps() {
    navigate("/empresa");
  }

  return (
    <Container>
      <Form>
        <FormHeader>
          <Step step="1" text="Contato" />
          <img src={arrowLeft} alt="" />
          <Step step="2" text="Empresa" className="disable" />
          <img src={arrowLeft} alt="" />
          <Step step="3" text="Projeto" className="disable" />
        </FormHeader>

        <Input title="Nome" placeholder="Como prefere ser chamado" />
        <Input title="Telefone" placeholder="Digite seu número de WhatsApp" />
        <Input title="E-mail" placeholder="Digite seu e-mail" />
        <div id="button-wrapper">
          <Button title="continuar" onClick={() => handleSteps()} />
        </div>
      </Form>
    </Container>
  );
};
