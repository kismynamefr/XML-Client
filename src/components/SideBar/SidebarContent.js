import {
    Box,
    CloseButton,
    Flex, Text, useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import { FiActivity, FiHome, FiSearch, FiUpload } from 'react-icons/fi';
import NavItem from './NavItem';

const LinkItems = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Active Bot', href: '/ActiveBot', icon: FiActivity },
    { name: 'Upload Bot', href: '/UploadFile', icon: FiUpload },
    { name: 'Bot Has Uploaded', href: '/BotHasUploaded', icon: FiSearch },
];

const SidebarContent = ({ onClose, ...rest }) => {

    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    ServerXML
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} link={link.href} linkHref={link.linkHref}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

export default SidebarContent;