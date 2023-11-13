import { useRef, useEffect, useMemo } from "react";
import { Grid, Box } from "@chakra-ui/react";
import withParentSize, {
  WithParentSizeProps,
  WithParentSizeProvidedProps
} from "@visx/responsive/lib/enhancers/withParentSize";

const TestComp = ({ parentHeight, parentWidth }) => {
  const leftAxisRef = useRef(null);
  const bottomAxisRef = useRef(null);

  const bottomAxis = useMemo(() => {
    return bottomAxisRef?.current?.offsetHeight;
  }, [parentWidth]);
  useEffect(() => {
    console.log(bottomAxisRef?.current?.offsetWidth);
  }, [parentWidth]);

  return (
    <>
      {bottomAxis}
      <Grid
        width={parentWidth}
        height={parentHeight}
        templateAreas={`"chart axisleft" ". axisbottom"`}
        gridTemplateRows="10fr 1fr"
        gridTemplateColumns="auto 1fr"
      >
        <Box ref={leftAxisRef} gridArea="axisleft">
          <svg
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%", objectFit: "fill" }}
          >
            <rect width="100%" height="100%" x={0} y={0} fill="red" />
          </svg>
        </Box>

        <Box gridArea="chart">
          <svg
            style={{ height: "100%", width: "100%", objectFit: "fill" }}
            preserveAspectRatio="none"
          >
            <rect x={0} y={0} width="100%" height="100%" fill="yellow" />
          </svg>
        </Box>

        <Box
          gridArea="axisbottom"
          ref={bottomAxisRef}
          gridColumn="2 / span 1"
          flexGrow={0}
        >
          <svg
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%", objectFit: "fill" }}
          >
            <rect x={0} y={0} width="100%" height="100%" fill="blue" />
          </svg>
        </Box>
      </Grid>
    </>
  );
};

export default withParentSize(TestComp);
/* 
 <svg width="100%" height="100%">
          <rect x={0} y={0} width="100%" height="100%" fill="yellow" />
        </svg>
*/
