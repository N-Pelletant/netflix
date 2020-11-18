import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  ButtonLink,
  Container,
  Group,
  Logo,
  Feature,
  FeatureCallOut,
  Text,
  Link,
  Profile,
  Picture,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.ButtonLink = ({ to, children, ...restProps }) => <ButtonLink to={to} {...restProps}>{children}</ButtonLink>
Header.Frame = ({ children, ...restProps }) => <Container {...restProps}>{children}</Container>
Header.Group = ({ children, ...restProps }) => <Group {...restProps}>{children}</Group>
Header.Feature = ({ children, ...restProps }) => <Feature {...restProps}>{children}</Feature>
Header.FeatureCallOut = ({ children, ...restProps }) => <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
Header.Text = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>
Header.TextLink = ({ children, ...restProps }) => <Link {...restProps}>{children}</Link>
Header.Profile = ({ children, ...restProps }) => <Profile {...restProps}>{children}</Profile>
Header.Dropdown = ({ children, ...restProps }) => <Dropdown {...restProps}>{children}</Dropdown>
Header.PlayButton = ({ children, ...restProps }) => <PlayButton {...restProps}>{children}</PlayButton>
Header.Picture = props => <Picture {...props} />

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);
  
  return <Search {...restProps}>
    <SearchIcon onClick={() => setSearchActive(prevSearchActive => !prevSearchActive)}>
      <img src="/images/icons/search.png" alt="Search"/>
    </SearchIcon>
    <SearchInput
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search films and series"
      active={searchActive} />
  </Search>
}

Header.Logo = ({ to, ...restProps }) => (
  <ReactRouterLink to={to}>
    <Logo {...restProps} />
  </ReactRouterLink>
);