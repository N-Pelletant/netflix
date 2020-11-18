import { createContext, useContext, useState } from 'react';
import { Container, Title, Item, Inner, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restPros }) {
  return <Container {...restPros}>
    <Inner>{children}</Inner>
  </Container>
}

Accordion.Title = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
    <Item {...restProps}>{children}</Item>
  </ToggleContext.Provider>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow(prevToggleState => !prevToggleState)}
      {...restProps}
    >
      {children}
      {
        toggleShow
          ? <img src="/images/icons/close-slim.png" alt="Close" />
          : <img src="/images/icons/add.png" alt="Close" />
      }
    </Header>
  );
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && <Body {...restProps} >{children}</Body>
}