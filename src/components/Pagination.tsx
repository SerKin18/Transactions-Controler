import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Previous, Paginator, PageGroup, Next } from "chakra-paginator";

const normalStyles = {
  bg: "white",
};

const activeStyles = {
  bg: "blue.300",
};

function Paginations({
  curPage,
  setCurPage,
  pagesQuantity,
}: {
  curPage: number;
  setCurPage: (value: number) => void;
  pagesQuantity: number;
}) {
  return (
    <Box>
      <Flex p={2}>
        <Spacer />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Paginator
          pagesQuantity={pagesQuantity}
          currentPage={curPage}
          onPageChange={(value: number) => setCurPage(value)}
          activeStyles={activeStyles}
          normalStyles={normalStyles}
        >
          <Previous bg="white">prev</Previous>
          <PageGroup align="center" />
          <Next bg="white">next</Next>
        </Paginator>
      </Flex>
    </Box>
  );
}

export default Paginations;
