import { Container, Input, Text, Button, Break } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>
    {children}
  </Container>
}

OptForm.Input = props => <Input {...props} />;
OptForm.Text = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>;
OptForm.Break = props => <Break {...props} />;

OptForm.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>
    {children}
    <img src="/images/icons/chevron-right.png" alt="Try now" />
  </Button>
}
