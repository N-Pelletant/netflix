import { useState, useContext, createContext } from "react"
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
    <Container {...restProps}>
      {children}
    </Container>
  </FeatureContext.Provider>
}

Card.Group = ({ children, ...restProps }) => <Group {...restProps}>{children}</Group>
Card.Title = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>
Card.SubTitle = ({ children, ...restProps }) => <SubTitle {...restProps}>{children}</SubTitle>
Card.Text = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>
Card.Meta = ({ children, ...restProps }) => <Meta {...restProps}>{children}</Meta>
Card.Entities = ({ children, ...restProps }) => <Entities {...restProps}>{children}</Entities>

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showFeature, setShowFeature, itemFeature } = useContext(FeatureContext);

  return showFeature
    ? (
      <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
        <Content>
          <FeatureTitle>{itemFeature.title}</FeatureTitle>
          <FeatureText>{itemFeature.description}</FeatureText>
          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="Close" />
          </FeatureClose>
          <Group margin="30px 0" flexDirection="row" alignItems="center">
            <Maturity rating={itemFeature.maturity}>
              {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
            </Maturity>
            <FeatureText fontWeight="bold" textTransform="capitalize">
              {itemFeature.genre}
            </FeatureText>
          </Group>
          {children}
        </Content>
      </Feature>
    ) : null
}

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}>
      {children}
    </Item>
  );
}

Card.Image = props => <Image {...props} />