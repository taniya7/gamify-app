import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar({ onSearch }) {
  const searchRef = useRef(null);

  function handleSearch(event) {
    event.preventDefault();
    if (searchRef.current) onSearch(searchRef.current.value);
  }
  return (
    <>
      <form onSubmit={handleSearch} style={{ width: "100%", margin: "20px" }}>
        <InputGroup>
          <InputLeftElement
            children={<BsSearch />}
            as={Button}
            variant="unstyled"
            onClick={handleSearch}
          />

          <Input
            variant="filled"
            placeholder="Search Games..."
            borderRadius={20}
            ref={searchRef}
          />
        </InputGroup>
      </form>
    </>
  );
}

export default SearchBar;
