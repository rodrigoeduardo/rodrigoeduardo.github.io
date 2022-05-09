import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { RepoCard } from "./RepoCard";

export function PortfolioSection() {
  return (
    <Flex
      id="portfolio"
      flexDir="column"
      bgGradient="linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(26,54,93,1) 70%, rgba(26,54,93,1) 100%)"
      w="100%"
      minH="100vh"
      py="6rem"
    >
      <Flex flexDir="column" align="center" margin="0 auto" maxW="80%">
        <Text textAlign="center" fontSize="2rem" fontWeight="700">
          Portfolio
        </Text>
        <Text textAlign="center" maxW="70%" mt="1rem">
          Repositories that I would like you to check it out
        </Text>

        <SimpleGrid columns={3} spacing={10} w="100%" mt="4rem">
          <RepoCard />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
