import styled from "styled-components";

const SearchBar: React.FC = () => {

    const [searchInput, setSearchInput] = useState("");

  // helper function
  const handleSearch = (event: any) => {
    console.log()
  }

  return (
    <SearchBarContainer>
      <SearchBarField type="text"></SearchBarField>
      <SearchButton type="button" onClick={() => handleSearch(event)}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer =styled.form`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const SearchBarField = styled.input`
    width: 90%;
    border-radius: 20px;
    margin: 1rem;
    font-size: 2rem;
    font: monsterrat;
`;

const SearchButton = styled.button`
    border-radius: 5px;
    padding: 1rem;
    font-size: 20px;
    font: monsterrat;
`;
