import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../store";
// import authentication

const UserProfile = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Section>
        <TextWrapper>
        <ImageWrapper src='logo.png'/>
          <h1>Hi, {auth.username}</h1>
          <Paragraph>
            From your account dashboard, you can view and manage your posts, and
            edit your password and account details.
          </Paragraph>
        </TextWrapper>
        <ButtonWrapper>
        <Button to={`/information`}>Information</Button>
        <Button to={`/myposts`}>Posts</Button>
        </ButtonWrapper>
      </Section>
    </>
  );
};

export default UserProfile;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ceebec;
  padding: 2rem;
  height: 100vh;
  width: 100%;
`;

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 70%
font-size: small;
h1{
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  padding: 10px;
}
`;

const ImageWrapper = styled.img`
  height: 8rem;
  width: 8rem;

  @media (min-width: 425px) {
    height: 10rem;
    width: 10rem;
  }
  @media (min-width: 800px) {
    height: 12rem;
    width: 12rem;
  }
  @media (min-width: 1100px) {
    height: 14rem;
    width: 14rem;
  }
`;

const Button = styled(Link)`
  background-color: #739cf0;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  padding: 5px;
  margin: 10px 2rem 5px 2rem;
  width: 13rem;
  text-decoration: none;
  text-align: center;
  color: whitesmoke;
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 5px;
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;

  @media (min-width: 425px) {
    font-size: 20px;
    width: 70%;
    padding: 10px;
  }
  @media (min-width: 800px) {
    font-size: 30px;
    width: 70%;
    padding: 10px;
  }
`;

const ButtonWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
