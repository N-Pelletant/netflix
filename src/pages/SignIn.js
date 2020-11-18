import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/Firebase';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const signInHandler = (e) => {
    e.preventDefault();

    firebase.auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  }

  return <>
    <HeaderContainer>
      <Form>
        <Form.Title>Sign in</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={signInHandler} method="POST">
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
          New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    </HeaderContainer>
    <FooterContainer />
  </>
}