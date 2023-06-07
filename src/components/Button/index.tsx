import { Container } from "./styles";

type ButtonProps = {
  title: string;
  className?: string,
  onClick?: () => void;
};

export const Button = ({ title, className, onClick }: ButtonProps) => {
  return <Container className={className} onClick={onClick}>{title}</Container>;
};
