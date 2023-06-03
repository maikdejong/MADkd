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
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Box>
      </Center>;
  };

  export default SelectList;