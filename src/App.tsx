import {
  Box,
  Text,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Collapse,
  Icon,
  Button,
  Grid,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Portal,
  Tooltip,
  Slide,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  InputGroup
} from "@chakra-ui/react";
import Draggable from "react-draggable";
import { motion } from "framer-motion";
import EditableMenu from "./EditableMenu";
import { useCallback, useState, useRef, useEffect } from "react";
import { useSize } from "@chakra-ui/react-use-size";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useWhyDidYouUpdate } from "./useWhyDidYouUpdate";
import { Resizable } from "re-resizable";
import MyTable from "./Table";
const MiniDrawer = ({ children }: { children: React.ReactNode }) => {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();

  const btnRef = useRef(null);

  const hidden = getDisclosureProps()?.hidden;

  console.log("getDisclosureProps()", getDisclosureProps());

  return (
    <Box h="100px" position="relative" overflow="visible">
      <motion.div
        {...getDisclosureProps()}
        hidden={false}
        initial={true}
        animate={{ width: isOpen ? "auto" : 0 }}
        transition={{ ease: "linear", duration: 0.1 }}
        style={{
          overflow: "visible",
          position: "absolute",
          left: "0",
          top: "0",
          maxHeight: "100%"
        }}
      >
        <Card overflow="hidden" maxH="100%" whiteSpace="nowrap">
          <CardBody>{children}</CardBody>
        </Card>

        <IconButton
          ref={btnRef}
          aria-label="back"
          icon={<ArrowForwardIosIcon fontSize="small" />}
          size="xs"
          position="absolute"
          borderStartRadius={0}
          left="calc(100% - 1px)"
          top={0}
          variant="outline"
          {...getButtonProps()}
        />
      </motion.div>
    </Box>
  );
};

const Temp = ({ num }: { num: number }) => {
  useWhyDidYouUpdate("hej", {
    num
  });
  return <p>{num}</p>;
};

const ResizableComp = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const dimensions = useSize(elementRef);
  const handleRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e) => {
      if (isResizing) {
        // Calculate the new width based on the cursor position
        const newWidth = e.clientX - e.target.getBoundingClientRect().left;
        const newHeight = e.clientY - e.target.getBoundingClientRect().top;
        console.log("newWidth", newWidth);
        setWidth(newWidth);
        setHeight(newHeight);
      }
    },
    [isResizing]
  );

  console.log("isResizing", isResizing);
  return (
    <Card
      ref={elementRef}
      position="relative"
      overflow="hidden"
      display="flex"
      onMouseUp={() => {
        console.log("mouse up");
        stopResizing();
      }}
      width={width}
      height={height}
    >
      <Text>{dimensions?.width}</Text>
      <Text>{dimensions?.height}</Text>
      <Box
        width="10px"
        cursor="ew-resize"
        /* Style your handle to make it visible as needed */
        backgroundColor="#ccc"
        user-select="none"
        ref={handleRef}
        onMouseMove={resize}
        onMouseDown={startResizing}
      >
        h
      </Box>
    </Card>
  );
};

const Res = ({ children }: { children: React.ReactNode }) => {
  return (
    <Draggable handle=".handle">
      <Resizable
        defaultSize={{
          width: 320,
          height: 200
        }}
      >
        <Card w="100%" h="100%" p={4} className="asdf">
          <Box w="100%" h="100%" className="handle">
            {children}
          </Box>
        </Card>
      </Resizable>
    </Draggable>
  );
};

export default function App() {
  const [num, setNum] = useState<number>(0);
  return (
    <Box padding={10}>
      {/* 
      <EditableMenu />
      <button onClick={() => setNum(Math.random())}>random number</button>
      <Temp num={num} />

      <Tooltip label="hejhej">
        <span>hejhej</span>
      </Tooltip>

      
      */}
      <p>hejhej</p>
      <MyTable />
      <Resizable />

      <Res>
        <Button onClick={({ altKey }) => console.log("e", altKey)}>
          click
        </Button>
      </Res>

      {/*  <Box border="1px solid black" height="50vh" width="50vw">
        <Button onClick={() => setArr([...arr, 1])}>click</Button>
        <Text>{arr?.length}</Text>
      </Box> */}
    </Box>
  );
}

/* 
<InputGroup>
          <Input type="text" value="hej" />
          <Button onClick={() => console.log("asdf")} />
        </InputGroup>
        <MiniDrawer>
          <Text>welcome home</Text>
          <Text>welcome home</Text>
          <Text>welcome home</Text>
          <Text>welcome home</Text>
          <Text>welcome home</Text>
          <Text>welcome home</Text>
        </MiniDrawer> 
*/
