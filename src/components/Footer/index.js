import { Container, Row, Column, Title, Text, Link, Break } from './styles/Footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>
    {children}
  </Container>
}

Footer.Row = ({ children, ...restProps }) => <Row {...restProps}>{children}</Row>
Footer.Column = ({ children, ...restProps }) => <Column {...restProps}>{children}</Column>
Footer.Title = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>
Footer.Text = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>
Footer.Link = ({ children, ...restProps }) => <Link {...restProps}>{children}</Link>
Footer.Break = ({ children, ...restProps }) => <Break {...restProps}>{children}</Break>
