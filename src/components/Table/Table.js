import {
    Table, TableCaption,
    TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue
} from '@chakra-ui/react';
import React, { useCallback } from 'react';
import ActiveButton from '../ActiveButton/ActiveButton';
import ButtonOption from './ButtonOption';

const TableIndex = ({ activatedBot, getActivatedBot }) => {

    const handleConvertDay = (createdAt) => {
        const day = new Date(createdAt).toLocaleDateString("en-US");
        const hour = new Date(createdAt).toLocaleTimeString("en-US");
        return `${day} ${hour}`;
    }

    const handleSort = useCallback((data) => {
        const result = [...data].sort((a, b) => {
            const d = new Date(a.createdAt);
            const c = new Date(b.createdAt);
            return c - d;
        });
        return result;
    }, [activatedBot])

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
                        <Th textAlign='center'>Bot</Th>
                        <Th isNumeric>Name</Th>
                        <Th isNumeric>Last Modified</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        activatedBot && handleSort(activatedBot)?.map((res, index) => (
                            <Tr key={index}
                                borderBottomWidth="1px"
                                borderBottomColor='cyan.400'
                            >
                                <Td>{res.BBotID}</Td>
                                <Td isNumeric><ActiveButton /></Td>
                                <Td>
                                    {
                                        res.ValueBot.map(result => result + `, `)
                                    }
                                </Td>
                                <Td>{res.Name}</Td>
                                <Td>{handleConvertDay(res.createdAt)}</Td>
                                <Td><ButtonOption getActivatedBot={getActivatedBot} idBot={res._id} /></Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TableIndex;
