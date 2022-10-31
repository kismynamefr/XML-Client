import { AddIcon, SettingsIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex, FormControl,
    FormLabel, Heading, HStack, Input, Stack, Tag, TagCloseButton, TagLabel, TagRightIcon, useColorModeValue
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import activeBotAction from '../../redux/action/actionActiveBot';
import actionGetBot from '../../redux/action/actionGetBot';

const EditActive = ({ botValue }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.getBot?.data);
    const [dataProcessed, setDataProcessed] = useState(data);
    const [formValue, setFormValue] = useState({
        BBotID: botValue.BBotID,
        Active: true,
        HasActivatedTool: 'pending',
        ValueBot: botValue.ValueBot,
        Name: botValue.Name
    });

    console.log("formValue: ", formValue);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const handleActive = async (e) => {
        e.preventDefault();
        let newdataProcessed = [];
        dataProcessed.map(res => {
            const { NameBot } = res;
            return newdataProcessed.push(NameBot);
        })
        console.log("dataProcessed: ", newdataProcessed);
        setFormValue({
            ...formValue,
            ValueBot: newdataProcessed
        })
        dispatch(activeBotAction({
            formValue: {
                ...formValue,
                ValueBot: newdataProcessed
            }
        }));
    };

    const getBotHasUploaded = () => {
        dispatch(actionGetBot());
    }

    const handleAddingBot = useCallback((NameBot) => {
        return dataProcessed.map((val, index) => {
            if (val.NameBot === NameBot) {
                dataProcessed.splice(index, 1);
                setDataProcessed([...dataProcessed]);
                setFormValue({
                    ...formValue,
                    ValueBot: [...formValue.ValueBot, val.NameBot]
                })
            }
            return null;
        })
    }, [dataProcessed])

    const handleDisableBot = useCallback((namebot) => {
        setDataProcessed([...dataProcessed, { NameBot: namebot }]);
        return formValue.ValueBot.map((val, index) => {
            if (val === namebot) {
                formValue.ValueBot.splice(index, 1);
                setFormValue({
                    ...formValue,
                    ValueBot: [...formValue.ValueBot]
                })
            }
            return null;
        })
    }, [dataProcessed, formValue])

    useEffect(() => {
        getBotHasUploaded();
    }, [])

    return (

        <Stack spacing={2} mx={'auto'} maxW={'container.xl'} py={5} w={'full'}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Edit Your Bot</Heading>
            </Stack>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                p={8}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>BBot ID</FormLabel>
                        <Input name='BBotID' type="text" defaultValue={botValue.BBotID} onChange={handleForm} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input name='Name' type="text" onChange={handleForm} defaultValue={botValue.Name} />
                    </FormControl>
                    <FormLabel>Client Bot</FormLabel>
                    <Flex flexWrap='wrap' gap='2' boxShadow='lg' p={5}>
                        {
                            formValue.ValueBot.map((res, index) => (
                                <HStack h='10' spacing={4} key={`${index}:${res}`}>
                                    <Tag
                                        size='md'
                                        borderRadius='full'
                                        variant='solid'
                                        colorScheme='cyan'
                                    >
                                        <TagLabel>{res}</TagLabel>
                                        <TagCloseButton onClick={() => handleDisableBot(res)} />
                                    </Tag>
                                </HStack>
                            ))
                        }
                    </Flex>
                    <FormLabel>Admin Bot</FormLabel>
                    <Flex flexWrap='wrap' gap='2' boxShadow='lg' p={5}>
                        {
                            dataProcessed?.map((res, index) => (
                                <HStack h='10' spacing={4} key={index}>
                                    <Tag
                                        size='md'
                                        borderRadius='full'
                                        variant='solid'
                                        colorScheme='cyan'
                                    >
                                        <TagLabel>{res.NameBot}</TagLabel>
                                        <TagRightIcon size='md' as={AddIcon} cursor='pointer' onClick={() => handleAddingBot(res.NameBot)} />
                                    </Tag>
                                </HStack>
                            ))
                        }
                    </Flex>
                    <Stack spacing={10}>
                        <Button
                            bg={'cyan.400'}
                            color={'white'}
                            _hover={{
                                bg: 'cyan.500',
                            }}
                            onClick={handleActive}
                        >
                            Save Edit
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}

export default EditActive;