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
  Text,
  Portal
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { project } from "./project";

// todo, när man klickar på en .steps.map(el => ({value, id})) för options
// keep initial state för onclose / backa bakåt

// skapa hook med initial state project -> steps -> column pping
// o uppdatera options utifrån det
export const MenuSingle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<string>();
  const [mockData, setMockData] = useState(project.pipelineSteps);

  console.log("project", project);
  console.log("mockData", mockData);
  useEffect(() => {
    const getMockData = async () => {
      const res = await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );

      setMockData(res);
    };

    getMockData();
  }, []);

  const handleMenuSelect = (id: string) => {
    console.log("id", id.toString());
    setSelectedOption(id.toString());
  };

  return (
    <ChakraMenu closeOnSelect={false} isLazy>
      {({ onClose }) => (
        <>
          <MenuButton type="button">single menu</MenuButton>
          <Portal>
            <MenuList width="100px">
              <MenuGroup title="Profile">
                <MenuItem>Tjena tjena</MenuItem>
                <MenuDivider />
              </MenuGroup>
              <MenuOptionGroup
                title={undefined}
                value={selectedOption}
                type="checkbox"
              >
                {mockData.map((option) => {
                  return (
                    // Use 'type'='button' to make sure it doesn't default to 'type'='submit'.
                    <MenuItemOption
                      type="checkbox"
                      key={option.id}
                      onClick={() => handleMenuSelect(option.id)}
                      value={option.id}
                    >
                      <Text noOfLines={1}>{option.title}</Text>
                    </MenuItemOption>
                  );
                })}
              </MenuOptionGroup>
            </MenuList>
          </Portal>
        </>
      )}
    </ChakraMenu>
  );
};
