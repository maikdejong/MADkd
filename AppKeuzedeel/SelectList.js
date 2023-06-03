import React from 'react';
import { NativeBaseProvider, Box, Select, Center, CheckIcon } from "native-base";

const SelectList = () => {
    const [service, setService] = React.useState("");
    return <Center>
        <Box maxW="300">
          <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Gram" value="ux" />
            <Select.Item label="Ons" value="web" />
            <Select.Item label="Pond" value="cross" />
            <Select.Item label="Kilo" value="ui" />
            <Select.Item label="Ton" value="backend" />
          </Select>
        </Box>
      </Center>;
  };

  export default SelectList;