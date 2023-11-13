import {
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  useDisclosure,
  Box
} from "@chakra-ui/react";
import React, { useCallback, useRef } from "react";

const useDebounce = (callbackFn: (...args: any) => any, delay = 10) => {
  const timer = useRef(setTimeout(() => null, 0));

  const debounce = useCallback(
    (data?: any) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => callbackFn(data), delay);
    },
    [callbackFn, delay]
  );

  return debounce;
};

const HoverPopover = ({
  trigger,
  children
}: {
  trigger: React.ReactNode | string;
  children: React.ReactNode;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const toggleOpenDebounce = useDebounce(() => {
    onOpen();
  }, 500);

  return (
    <Popover isOpen={isOpen} placement="bottom-start" isLazy>
      <PopoverTrigger>
        <Box
          onMouseEnter={() => toggleOpenDebounce()}
          onMouseLeave={() => onClose()}
        >
          {trigger}
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent p={4} _focus={{ boxShadow: "none" }}>
          <Box className="fart">{children}</Box>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default HoverPopover;
