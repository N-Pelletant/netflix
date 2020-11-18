import { Header, Profiles } from '../components';
import * as ROUTES from "../constants/routes";
import logo from '../logo.svg';

export function SelectProfileContainer({ user, setProfile }) {
  const updateProfile = () => {
    setProfile({
      displayName: user.displayName,
      photoURL: user.photoURL,
    })
  }

  return <>
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netlfix" />
      </Header.Frame>
    </Header>

    <Profiles>
      <Profiles.Title>
        Who's watching?
      </Profiles.Title>
      <Profiles.List>
        <Profiles.User onClick={updateProfile}>
          <Profiles.Picture src={user.photoURL} />
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>

  </>
}