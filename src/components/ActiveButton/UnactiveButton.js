import {
  Box, Flex, Tooltip
} from "@chakra-ui/react";
import React from "react";

const UnactiveButton = () => {
  const inactiveColor = "gray.400";

  return (
    <Flex>
      <Tooltip label={`Status: Offline`} textTransform="capitalize">
        <Box
          as="div"
          h="24px"
          w="24px"
          position="relative"
          bgColor={inactiveColor}
          borderRadius="50%"
        />
      </Tooltip>
    </Flex>
  );
};

export default UnactiveButton;
