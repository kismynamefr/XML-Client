import {
    Button, Flex, IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Stack
} from '@chakra-ui/react';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBack2Fill, RiEditBoxFill } from 'react-icons/ri';
import { useDispatch } from "react-redux";
import delActivatedBotAction from '../../redux/action/actionDelActivatedBot';

const ButtonOption = ({ getActivatedBot, idBot }) => {
    const dispatch = useDispatch();

    const handleDelActivatedBot = () => {
        dispatch(delActivatedBotAction(idBot, getActivatedBot))
    }

    return (
        <Flex justifyContent="center" mt={4}>
            <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                    <IconButton
                        aria-label="More server options"
                        icon={<BsThreeDotsVertical />}
                        variant="solid"
                        w="fit-content"
                    />
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                    <PopoverArrow />
                    <PopoverBody>
                        <Stack>
                            <Button
                                w="194px"
                                variant="ghost"
                                rightIcon={<RiEditBoxFill />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                colorScheme="cyan"
                                fontSize="sm">
                                Edit Active
                            </Button>
                            <Button
                                w="194px"
                                variant="ghost"
                                rightIcon={<RiDeleteBack2Fill />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                colorScheme="red"
                                fontSize="sm"
                                onClick={handleDelActivatedBot}
                            >
                                Delete Active
                            </Button>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}

export default ButtonOption;