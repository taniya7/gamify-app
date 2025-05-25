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
  const searchRef = useRef(null); // using 'useRef' to track 'searchText' value

  function handleSearch(event) {
    event.preventDefault();
    if (searchRef.current) onSearch(searchRef.current.value); // 3. passing current user input as 'searchText' to 'App' component via 'Prop Wiring'
  }
  return (
    <>
      <form
        onSubmit={handleSearch} // when pressed 'Enter', user input is submitted and passed to 'handleSearch' for further operation
        style={{ width: "100%", margin: "20px" }}
      >
        <InputGroup>
          <InputLeftElement
            children={<BsSearch />}
            as={Button}
            variant="unstyled"
            onClick={handleSearch} // when 'BsSearch' icon is clicked, user input is submitted and passed to 'handleSearch' for further operation
          />

          <Input
            variant="filled"
            placeholder="Search Games..."
            borderRadius={20}
            ref={searchRef} // assigning user input value to 'searchRef'
          />
        </InputGroup>
      </form>
    </>
  );
}

export default SearchBar;
