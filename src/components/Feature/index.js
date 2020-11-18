import { Container, Title, SubTitle } from './styles/feature';

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Feature.Title = ({children, ...restProps}) => <Title {...restProps}>{children}</Title>
Feature.SubTitle = ({children, ...restProps}) => <SubTitle {...restProps}>{children}</SubTitle>