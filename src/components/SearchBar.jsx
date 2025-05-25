import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          variant="filled"
          placeholder="Search Games..."
          borderRadius={20}
        />
      </InputGroup>
    </>
  );
}

export default SearchBar;
