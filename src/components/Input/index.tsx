import { Container } from "./styles";

type InputProps = {
  title: string;
  placeholder?: string;
};

export const Input = ({ title, placeholder }: InputProps) => {
  return (
    <Container>
      <label htmlFor="input-text">{title}</label>
      <input type="text" placeholder={placeholder} />
    </Container>
  );
};
