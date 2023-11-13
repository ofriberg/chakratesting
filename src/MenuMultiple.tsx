import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const MenuMultiple = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    const getMockData = async () => {
      const res = await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );

      setMockData(res);
    };

    getMockData();
  }, []);
  return (
    <ChakraMenu closeOnSelect={false} isLazy>
      {({ onClose }) => (
        <>
          <MenuButton type="button">asdf</MenuButton>
          <MenuList width="100px">
            <MenuGroup title={undefined}>
              <MenuItem
                onClick={() => {
                  setSelectedOptions([]);
                }}
              >
                Clear all
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuOptionGroup
              title={undefined}
              value={selectedOptions}
              type="checkbox"
              /* eslint-disable @typescript-eslint/ban-ts-comment */
              // @ts-ignore Arguments type is just wrong upstream.
              onChange={(values: string[]) => {
                // Filter out empty strings, because, well, this component seems to add
                // an empty string out of nowhere.
                setSelectedOptions(values.filter((_) => _.length));
                // props.onChange?.(values);
                console.log("values", values);
              }}
              /* eslint-enable @typescript-eslint/ban-ts-comment */
            >
              {mockData.map((option) => {
                return (
                  // Use 'type'='button' to make sure it doesn't default to 'type'='submit'.
                  <MenuItemOption
                    key={option.id}
                    /* eslint-disable @typescript-eslint/ban-ts-comment */
                    // @ts-ignore <MenuItemOption> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
                    type="button"
                    /* eslint-enable @typescript-eslint/ban-ts-comment */
                    value={option.title}
                  >
                    <Text noOfLines={1}>{option.title}</Text>
                  </MenuItemOption>
                );
              })}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </ChakraMenu>
  );
};
