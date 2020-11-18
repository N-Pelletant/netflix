import { Container, Title, List, Item, Name, Picture } from './styles/profiles';

export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Profiles.Title = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>
Profiles.List = ({ children, ...restProps }) => <List {...restProps}>{children}</List>
Profiles.User = ({ children, ...restProps }) => <Item {...restProps}>{children}</Item>
Profiles.Name = ({ children, ...restProps }) => <Name {...restProps}>{children}</Name>
Profiles.Picture = ({ src, ...restProps }) => {
  return <Picture
    {...restProps}
    src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} />
}