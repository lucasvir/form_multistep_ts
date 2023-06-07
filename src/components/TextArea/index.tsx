import { Container } from "./styles";

type TextAreaProps = {
  title: string;
  placeholder: string;
};

export const TextArea = ({ title, placeholder }: TextAreaProps) => {
  return (
    <Container>
      <label htmlFor="about">{title}</label>
      <textarea id="about" placeholder={placeholder} />
    </Container>
  );
};
