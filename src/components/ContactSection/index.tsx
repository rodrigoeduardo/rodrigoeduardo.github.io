import { Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { ContactLink } from './ContactLink';

export function ContactSection() {
  return (
    <Flex id="contact" w="100%" minH="100vh" pt="6rem" h="100%">
      <Flex flexDir="column" align="center" margin="0 auto" maxW="80%" h="100%">
        <Text textAlign="center" fontSize="2rem" fontWeight="700">
          Contact me
        </Text>

        <Text textAlign="center" maxW="70%" mt="1rem">
          I would love to hear what you have in mind
        </Text>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={10} mt="4rem">
          <ContactLink
            href="mailto:rodrigoeduardodb1@gmail.com"
            alt="Gmail"
            imageUrl="assets/gmail.svg"
          />
          <ContactLink
            href="https://github.com/rodrigoeduardo"
            alt="GitHub"
            imageUrl="assets/github.svg"
          />
          <ContactLink
            href="https://linkedin.com/in/rodrigoedb"
            alt="LinkedIn"
            imageUrl="assets/linkedin.svg"
          />
          <ContactLink
            href="assets/rodrigocv.pdf"
            alt="View my CV"
            imageUrl="assets/cv.svg"
          />
        </Stack>

        <Image
          alt="Web Development"
          src="assets/webdev.svg"
          maxW="30rem"
          mt="2rem"
        />
      </Flex>
    </Flex>
  );
}
