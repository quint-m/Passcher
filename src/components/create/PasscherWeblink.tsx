import React, { useState } from "react";
import { FormControl, Input, InputGroup, InputLeftAddon, Stack, Text, WarningOutlineIcon } from "native-base";
import validator from "validator";

const PasscherWeblink = () => {
  const [error, setError] = useState(false);

  const validateURL = (link: string) => {
    if (validator.isURL("https://" + link)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Stack>
      <Text fontWeight="semibold" color="amber.500" mb={2}>
        Website
      </Text>
      <FormControl isInvalid={error} w="full">
        <InputGroup w="full">
          <InputLeftAddon children={"https://"} />
          <Input w="80%" onSubmitEditing={(e) => validateURL(e.nativeEvent.text)} />
        </InputGroup>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          This isn't a website url!
        </FormControl.ErrorMessage>
      </FormControl>
    </Stack>
  );
};

export default PasscherWeblink;
