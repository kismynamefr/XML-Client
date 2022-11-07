import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import activeBotAction from "../../redux/action/actionActiveBot";
import actionGetBot from "../../redux/action/actionGetBot";

const InsideActive = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getBot?.data);
  const [dataProcessed, setDataProcessed] = useState(data);
  const [formValue, setFormValue] = useState({
    BBotID: "",
    Active: true,
    ValueBot: [],
    Name: "",
    ExpiredDay: "",
  });

  console.log(formValue);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleActive = (e) => {
    e.preventDefault();
    let newdataProcessed = [];
    dataProcessed.map((res) => {
      const { NameBot } = res;
      newdataProcessed.push(NameBot);
    });
    dispatch(
      activeBotAction({
        formValue: {
          ...formValue,
          ValueBot: newdataProcessed,
        },
      })
    );
  };

  const getBotHasUploaded = () => {
    dispatch(actionGetBot());
  };

  const handleDisableBot = useCallback(
    (idbot) => {
      dataProcessed.map((val, index) => {
        if (val._id === idbot) {
          dataProcessed.splice(index, 1);
          setDataProcessed([...dataProcessed]);
        }
      });
    },
    [dataProcessed]
  );

  useEffect(() => {
    getBotHasUploaded();
  }, []);

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"5xl"} py={12} px={6} w={"full"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Active Your Bot</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>BBot ID</FormLabel>
              <Input name="BBotID" type="text" onChange={handleForm} />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="Name" type="text" onChange={handleForm} />
            </FormControl>
            <FormControl>
              <FormLabel>Expired Days</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                name="ExpiredDay"
                onChange={handleForm}
              />
            </FormControl>
            <FormLabel>Your Bot</FormLabel>
            <Flex flexWrap="wrap" gap="5">
              {dataProcessed?.map((res) => (
                <HStack h="10" spacing={4} key={res._id}>
                  <Tag
                    size="lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="cyan"
                  >
                    <TagLabel>{res.NameBot}</TagLabel>
                    <TagCloseButton
                      onClick={() => {
                        return formValue.BBotID.length && formValue.Name.length
                          ? handleDisableBot(res._id)
                          : null;
                      }}
                    />
                  </Tag>
                </HStack>
              ))}
            </Flex>
            <Stack spacing={10}>
              <Button
                bg={"cyan.400"}
                color={"white"}
                _hover={{
                  bg: "cyan.500",
                }}
                onClick={handleActive}
              >
                Activate
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default InsideActive;
