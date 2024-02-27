import { Flex, Spacer } from "@chakra-ui/react";
import { Previous, Paginator, PageGroup, Next } from "chakra-paginator";

const normalStyles = {
  bg: "white",
  w: "30px",
};

const activeStyles = {
  bg: "cyan.300",
  w: "30px",
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
  if (!pagesQuantity) {
    return;
  } else
    return (
      <Flex alignItems="center" justifyContent="center">
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
      </Flex>
    );
}

export default Paginations;
