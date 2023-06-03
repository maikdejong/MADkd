import React from 'react';
import { NativeBaseProvider, Box, Select, Center, CheckIcon, Input } from "native-base";

const convert = require('convert-units');

const UnitSelect = (unit) => {
    const units = [];
    for (let i = 0; i < unit.unitList.length; i++ ) {
        units.push(<Select.Item label={unit.unitList[i].plural} key={i} value={unit.unitList[i].abbr}/>)        
    }
    return (units);
}

const SelectList = () => {
    const [service, setService] = React.useState("");
    return <Center>
        <Box maxW="300">
            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setService(itemValue)}>

            <UnitSelect unitList={convert().list('mass')}/>

            </Select>
        </Box>
    </Center>;
};

export default SelectList;