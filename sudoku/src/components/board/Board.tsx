import { SimpleGrid } from "@chakra-ui/react";
import Cell from "../cell/Cell";

const cellsArray = () => {
  return new Array(3).fill(0).map(() => new Array(3).fill(0));
};

const Board = () => (
  <SimpleGrid columns={9} spacing={1}>
    <Cell />
  </SimpleGrid>
);
export default Board;
