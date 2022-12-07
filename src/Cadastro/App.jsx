import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <>
    <Box h="100vh"></Box>
      <Center
        as="header"
        h={150}
        bg="teal.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
      
        Cadastro de Usuários
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      ></Flex>
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        ></Center>
          <FormControl display="flex" flexDir="column" gap="4"></FormControl>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome" />
              </Box>
            <HStack spacing="4">
            <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue="Masculino">
                  <HStack spacing="24px">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                  
              <Box w="100%">
                <FormLabel htmlFor="usuario">Nome de usuário</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input id="email" type="email" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="senha"><Password>Senha</Password></FormLabel>
                <Input id="Senha" />
              </Box>
            </HStack>   
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel"><Telefone></Telefone><Telefone></Telefone></FormLabel>
                <Input id="cel" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="numero">Número</FormLabel>
                <Input id="numero" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="Estado">Estado</FormLabel>
                <Input id="estado" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="pais">País</FormLabel>
                <Input id="pais" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                        {/* function MyForm() {
            const [myCar, setMyCar] = useState("Drama");

            const handleChange = (event) => {
              setMygender(event.target.value)
            }

            return (
              <form>
                <select value={setMygender} onChange={handleChange}>
                  <option value="Drama">Drama</option>
                  <option value="Ação">Ação</option>
                  <option value="Suspense">Suspense</option>
                  <option value="Scifi">Ficção Científica</option>
                  <option value="Autoajuda">Auto Ajuda</option>
                </select>
              </form>
            )
          } */}
              </Box>
            </HStack>
            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="teal.600"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "teal.800" }}
              >
                Enviar
              </Button>
            </HStack>
          </RadioGroup>  
        </Box>
      </HStack>
    </HStack>
    </>
  );
}

export default App;