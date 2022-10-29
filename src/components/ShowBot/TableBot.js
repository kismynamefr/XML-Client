import {
    Flex, IconButton, Table, TableCaption,
    TableContainer, Tbody, Td, Text, Th, Thead, Tr
} from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import actionGetBot from '../../redux/action/actionGetBot';
import actionDeleteBot from '../../redux/action/actionDeleteBot';

const TableBot = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.getBot?.data);

    const getBotHasUploaded = () => {
        dispatch(actionGetBot());
    }

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
    }, [data])

    const handleDeleteBot = (idbot) => {
        dispatch(actionDeleteBot(idbot, getBotHasUploaded))
    }

    useEffect(() => {
        getBotHasUploaded();
    }, [])

    return (
        <TableContainer>
            {
                data?.length ? (
                    <Table variant='variant'>
                        <TableCaption>YOUR BOT HAS UPLOADED</TableCaption>
                        <Thead>
                            <Tr
                                borderBottomWidth="1px"
                                borderBottomColor="cyan.400"
                            >
                                <Th isNumeric>Name</Th>
                                <Th isNumeric>Last Upload</Th>
                                <Th isNumeric>Delete Bot</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data && handleSort(data)?.map((res, index) => (
                                    <Tr key={`${index}: ${res.name}`}
                                        borderBottomWidth="1px"
                                        borderBottomColor='cyan.400'
                                    >
                                        <Td isNumeric>{res.NameBot}</Td>
                                        <Td isNumeric>{handleConvertDay(res.createdAt)}</Td>
                                        <Td isNumeric>
                                            <IconButton
                                                bg='cyan.400'
                                                colorScheme='teal'
                                                aria-label='Call Segun'
                                                icon={<FiTrash />}
                                                onClick={() => { handleDeleteBot(res._id) }}
                                            />
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>) : (
                    <Flex justifyContent='center'>
                        <Text
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                            as={'span'}
                            bg="cyan.400"
                            bgClip="text"
                            fontWeight='bold'
                        >
                            NO DATA
                        </Text>
                    </Flex>
                )
            }

        </TableContainer>
    )
}

export default TableBot;
