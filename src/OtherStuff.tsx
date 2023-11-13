const myDelay = (ms: number) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, ms);
  });

const TimedToast = ({ ms = 1000 }) => {
  const toast = useToast();
  const toastIdRef = useRef();

  function addToast() {
    if (toastIdRef.current) {
      toastIdRef.current = toast({
        description: "some text",
        duration: null,
        isClosable: true
      });
    }
  }

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  const [isFetching, setIsFetching] = useState(false);
  return (
    <Box>
      <Button
        onClick={() => {
          addToast();
          setIsFetching(true);
        }}
      >
        fetch
      </Button>
      <Button
        onClick={() => {
          setIsFetching(false);
          close();
        }}
      >
        done fetching
      </Button>
    </Box>
  );
};

const ClickComponent = () => {
  const handleClick = (event) => {
    if (event.detail === 2) {
      console.log("double click");
    }
  };

  return <Button onClick={handleClick}>click me </Button>;
};

const Container = ({ items }) => {
  return (
    <Box>
      <p>här är items</p>
      {items}
    </Box>
  );
};
