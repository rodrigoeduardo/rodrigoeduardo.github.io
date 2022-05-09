import { Box, Image, Link, Text } from "@chakra-ui/react";

export function RepoCard() {
  return (
    <Link href="https://github.com/rodrigoeduardo/espiaozinho" target="_blank">
      <Box display="inline-block" overflow="hidden" borderRadius="20px">
        <Image
          src="assets/espiaozinho.png"
          display="block"
          transition="all 0.2s"
          _hover={{
            cursor: "pointer",
            transform: "scale(1.2)",
          }}
        />
      </Box>
      <Text>Espiãozinho</Text>
    </Link>
  );
}
