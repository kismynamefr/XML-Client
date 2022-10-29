import {
    Table, TableCaption,
    TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

const TableIndex = () => {
    return (
        <TableContainer>
            <Table variant='variant'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr
                        borderBottomWidth="1px"
                        borderBottomColor={useColorModeValue('cyan.400', 'cyan.700')}
                    >
                        <Th>BBot ID</Th>
                        <Th>Active</Th>
                        <Th isNumeric>Bot</Th>
                        <Th isNumeric>Name</Th>
                        <Th isNumeric>Last Modified</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr
                        cursor="pointer"
                        _hover={{
                            bg: 'cyan.400',
                            color: 'white',
                        }}>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                        <Td isNumeric>30.48</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TableIndex;
