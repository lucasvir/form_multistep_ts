import { Container } from "./styles";

type StepProps = {
  step: string;
  text: string;
  className?: string;
};

export const Step = ({ step, text, className }: StepProps) => {
  return (
    <Container className={className}>
      <span>{step}</span>
      <p>{text}</p>
    </Container>
  );
};
