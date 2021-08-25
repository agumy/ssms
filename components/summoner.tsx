import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useSummonerSpellTimer } from "../hooks/useSumonnerSpellTimer";

type Position = "top" | "jungle" | "mid" | "bot" | "support";

type Props = {
  position: Position;
};

export const Summoner = ({ position }: Props) => {
  const { time, reset, start } = useSummonerSpellTimer(300);
  return (
    <Flex align="center">
      <Image
        src={`/lanes/${position}.png`}
        alt={position}
        width="64"
        height="64"
      />
      <Flex direction="column" justify="center">
        <Flex marginBottom="1">
          <Box onClick={start} marginRight="1">
            <Image src="/spells/flash.png" alt="flash" width="32" height="32" />
          </Box>
          <Box marginRight="1" w="9">
            {time}
          </Box>
          <Box onClick={reset}>Reset</Box>
        </Flex>
        <Box>
          <Image src="/spells/ignite.png" alt="ignite" width="32" height="32" />
        </Box>
      </Flex>
    </Flex>
  );
};
