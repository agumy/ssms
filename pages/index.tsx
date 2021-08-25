import { Box, Flex } from "@chakra-ui/react";
import { Summoner } from "../components/summoner";

const Positions = ["top", "jungle", "mid", "bot", "support"] as const;

export default function Home() {
  return (
    <Box p="2" bg="background.base" color="white">
      <Flex direction="column" h="full" align="flex-start" justify="flex-start">
        {Positions.map((pos) => (
          <>
            <Summoner key={pos} position={pos} />
            <div style={{ height: "8px" }} />
          </>
        ))}
      </Flex>
    </Box>
  );
}
