import { Flex, Image, Link } from '@chakra-ui/react';

interface ContactLinkProps {
  href: string;
  imageUrl: string;
  alt: string;
}

export function ContactLink({
  href,
  alt,
  imageUrl,
  ...rest
}: ContactLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      transition="all 0.2s"
      _hover={{ transform: 'scale(1.1)' }}
      {...rest}
    >
      <Flex
        borderRadius="50%"
        bgColor="white"
        w="10rem"
        h="10rem"
        justify="center"
        align="center"
      >
        <Image alt={alt} src={imageUrl} minW="60px" />
      </Flex>
    </Link>
  );
}
