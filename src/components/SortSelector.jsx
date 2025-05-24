import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector({ onSelectSortOrder, selectedSortOrder }) {
  const sortOrders = [
    // here, not fetching raw data from API endpoint
    { value: "", label: "Relevance" }, // no value is passed as query string
    { value: "-added", label: "Date Added" }, // '-' is added to reverse order that is from high(recent) to low(old), by default it is low to high
    { value: "name", label: "Name" }, // order is fetched as it is, low (A) to high (Z)
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    // 5. using 'selectedSortOrder' for logical operations
    // 'find' method checks for every element and returns the element which is true with matching condition
    (order) => order.value === selectedSortOrder // if 'name' is the value of 'selectedSortOrder' then currentSortOrder = { value: "name", label: "Name" }
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort By :{" "}
          {
            currentSortOrder?.label || "Relevance" // conditional chaining is used because 'currentSortOrder' can be null in case of 'Relevance'
          }
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.label}
              value={order.value}
              onClick={() => onSelectSortOrder(order.value)} // 2. Sending selected value of 'sortOrder' back to 'App' component for updating its current value in 'queryString' object
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
