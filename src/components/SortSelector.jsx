import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector({ onSelectSortOrder }) {
  const sortOrders = [
    // here, not fetching raw data from API endpoint
    { value: "", label: "Relevance" }, // no value is passed as query string
    { value: "-added", label: "Date Added" }, // '-' is added to reverse order that is from high(recent) to low(old), by default it is low to high
    { value: "name", label: "Name" }, // order is fetched as it is, low (A) to high (Z)
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort By : Relevance
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.label}
              value={order.value}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default SortSelector;
