import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/Firebase';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const signUpHandler = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(res => {
        res.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      })
      .catch((e) => {
        setFirstName("");
        setPassword("");
        setEmailAddress("");
        setError(e.message);
      })
  }

  return <>
    <HeaderContainer>
      <Form>
        <Form.Title>Sign up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={signUpHandler} method="POST">
          <Form.Input
            placeholder="First name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)} />
          <Form.Input
            placeholder="Email address"
            value={emailAddress}
            onChange={e => setEmailAddress(e.target.value)} />
          <Form.Input
            placeholder="Password"
            autoComplete="off"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign in
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    </HeaderContainer>
    <FooterContainer />
  </>
}