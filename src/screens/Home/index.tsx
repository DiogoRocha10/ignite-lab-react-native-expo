import { useState } from "react";
import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center,
} from "native-base";

import { SignOut, ChatTeardropText } from "phosphor-react-native";

import { Filter } from "../../components/Filter";
import { Order } from "../../components/Order";

import type { OrderProps } from "../../components/Order";
import { Button } from "../../components/Button";

export function Home() {
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: "1",
      patrimony: "12345",
      when: "12:00",
      status: "open",
    },
  ]);

  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.900">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.800"
        pt={12}
        pb={5}
        px={6}
      >
        <Text color="gray.100">Home</Text>
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      <VStack flex={1} px={6}>
        <HStack
          w="full"
          justifyContent="space-between"
          alignItems="center"
          mt={8}
          mb={4}
        >
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter
            title="em andamento"
            type="open"
            onPress={() => setStatusSelected("open")}
            isActive={statusSelected === "open"}
          />
          <Filter
            title="finalizados"
            type="closed"
            onPress={() => setStatusSelected("closed")}
            isActive={statusSelected === "closed"}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" textAlign="center">
                Você ainda não possui chamados
                {statusSelected === "open" ? " em andamento" : " finalizados"}
              </Text>
            </Center>
          )}
        />
        <Button title="Novo chamado" />
      </VStack>
    </VStack>
  );
}
