import { Box, Icon, Input, Pressable, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { useAtom } from "jotai";
import { queryAtom } from "../atoms/QueryAtom";
import { useRef } from "react";

const SearchBar = () => {
  const [query, setQuery] = useAtom(queryAtom);
  const inputElement = useRef(null);

  return (
    <Box w="4/5">
      <Input
        type="text"
        ref={inputElement}
        variant="unstyled"
        bgColor="light.100"
        placeholder="Search for passwords..."
        p={3}
        InputLeftElement={<Icon as={Ionicons} name="search" ml={3} />}
        InputRightElement={
          <Pressable
            onPress={() => {
              if (inputElement && inputElement.current) inputElement.current.clear();
              setQuery("");
            }}
          >
            <Icon as={Entypo} name="cross" mr={3} />
          </Pressable>
        }
        onChangeText={(text) => setQuery(text)}
      />
    </Box>
  );
};

export default SearchBar;
