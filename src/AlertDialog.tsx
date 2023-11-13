import {
  useDisclosure,
  Button,
  AlertDialogOverlay,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Box
} from "@chakra-ui/react";
import { useRef, MutableRefObject } from "react";

export const AlertDialogExample = ({
  header,
  body,
  onConfirm,
  children
}: {
  header: string;
  body: string;
  onConfirm: () => void;
  children: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <>
      <Box onClick={onOpen}>{children}</Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {header}
            </AlertDialogHeader>

            <AlertDialogBody>{body}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleConfirm} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
