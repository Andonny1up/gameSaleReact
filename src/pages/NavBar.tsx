'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink as RouterLink } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}

type Link = {
  uri: string;
  labbel: string;
}

const Links = [
  { uri: "/", label: "Inicio"},
  { uri: "/games", label: "Juegos"}
]

const NavLink = (
  { children, to }
  : {children: ReactNode, to: string}
) => {

  return (
    <Text
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      <RouterLink to={to}>
        {children}
      </RouterLink>
    </Text>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Game Sale</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                  <NavLink 
                  to={link.uri}
                  key={link.uri}
                >
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink 
                  to={link.uri}
                  key={link.uri}
                >
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}