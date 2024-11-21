import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import useChuck from './useChuck'

export default function Hero() {
  const navigate = useNavigate()
  const {data, isLoading} = useChuck()
  return (
    <Flex
        background={`linear-gradient(
              rgba(0,0,0,0.7),
              rgba(0,0,0,0.7)
            ), url(https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}
        w="full"
        backgroundSize={"cover"}
        h={"calc(100vh - 64px)"}
    >
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: "100px" }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={"white"}
          >
            Bienvenidos a <br />
            <Text as={'span'} color={'green.400'}>
              Game Sale
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Una web para encontrar ofertas, además contamos chistes: { isLoading ? 'Cargando...' : data?.value}
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              onClick={() => navigate("/games")}
              >
              Empieza Ahora
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  )
}