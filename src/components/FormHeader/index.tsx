import { ReactNode } from "react";
import { Container } from "./styles";

type FormHeaderProps = {
  children: ReactNode;
};

export const FormHeader = ({ children }: FormHeaderProps) => {
  return <Container>{children}</Container>;
};
