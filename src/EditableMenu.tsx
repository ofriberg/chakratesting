import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  useEditableControls,
  Input,
  Flex,
  ButtonGroup,
  IconButton,
  useDisclosure,
  Box,
  Text,
  useStyleConfig,
  useTheme
} from "@chakra-ui/react";
import {
  CheckIcon,
  CloseIcon,
  EditIcon,
  ChevronDownIcon
} from "@chakra-ui/icons";
import { useState, useEffect, useRef } from "react";

const EditableMenu = () => {
  const [str, setStr] = useState<string>("My thing");
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const listItemStyles = useStyleConfig("List");
  const theme = useTheme();
  console.log("asd", listItemStyles);
  const itemStyle = theme.components.Menu.baseStyle.item;
  console.log(theme.components.Menu.baseStyle);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isEditing]);

  return (
    <Box>
      <Text>{str}</Text>
      <Menu closeOnSelect={false}>
        {({ isOpen, onOpen, onClose }) => (
          <>
            <MenuButton
              as={Button}
              onClick={onOpen}
              rightIcon={<ChevronDownIcon />}
            >
              Actions
            </MenuButton>
            <MenuList>
              {!isEditing && (
                <MenuItem
                  onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    setIsEditing(true);
                  }}
                >
                  Change Name
                </MenuItem>
              )}
              {isEditing && (
                <Input
                  value={str}
                  style={itemStyle}
                  borderRadius="none"
                  ref={inputRef}
                  _focus={{ borderColor: "transparent", outline: "none" }}
                  _focusVisible={{ borderColor: "inherit" }}
                  _hover={{ borderColor: "inherit" }}
                  onChange={(e) => setStr(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setIsEditing(false);
                    }
                  }}
                />
              )}

              <MenuItem isDisabled={isEditing} onClick={onClose}>
                Other action
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Input
        value={str}
        style={itemStyle}
        borderRadius="none"
        onChange={(e) => setStr(e.target.value)}
        _focus={{ borderColor: "transparent", outline: "none" }}
        _focusVisible={{ borderColor: "inherit" }}
        _hover={{ borderColor: "inherit" }}
      />
    </Box>
  );
};

const MyMenu = () => {
  const [str, setStr] = useState("hejhej");
  const listItemStyles = useStyleConfig("List");
  const theme = useTheme();
  console.log("asd", listItemStyles);
  const itemStyle = theme.components.Menu.baseStyle.item;
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>

        <MenuItem>Other action</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default EditableMenu;
