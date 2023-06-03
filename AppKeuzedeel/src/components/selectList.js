import React from 'react';
import { Box, Select, Center, CheckIcon } from "native-base";

const convert = require('convert-units');

const UnitSelect = (data) => {
    const units = [];
    for (let i = 0; i < data.loopData.length; i++ ) {
        const unit = data.loopData[i];
        units.push(<Select.Item key={unit.abbr} label={unit.plural} value={unit.abbr}/>);
        // units.push(<Select.Item label={unit.unitList[i].plural} key={i} value={unit.unitList[i].abbr}/>)        
    }
    return (units);
}

const SelectList = (data) => {
    const [service, setService] = React.useState("");
    return <Center>
        <Box maxW="300">
            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                
                <UnitSelect loopData={data.unitData}/>
            </Select>
        </Box>
    </Center>;
};

export default SelectList;