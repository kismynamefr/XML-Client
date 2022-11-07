import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActiveButton from "../ActiveButton/ActiveButton";
import ButtonOption from "./ButtonOption";
import getActivatedBotAction from "../../redux/action/actionGetActivatedBot";
import UnactiveButton from '../ActiveButton/UnactiveButton';

const TableIndex = () => {
  const dispatch = useDispatch();
  const activatedBot = useSelector((state) => state.getActivatedBot?.data);

  const getActivatedBot = useCallback(() => {
    dispatch(getActivatedBotAction());
  }, [getActivatedBotAction]);

  console.log(activatedBot);

  useEffect(() => {
    getActivatedBot();
  }, []);

  const handleConvertDay = (createdAt) => {
    const day = new Date(createdAt).toLocaleDateString("en-US");
    const hour = new Date(createdAt).toLocaleTimeString("en-US");
    return `${day} ${hour}`;
  };

  const handleSort = useCallback(
    (data) => {
      const result = [...data].sort((a, b) => {
        const d = new Date(a.updatedAt);
        const c = new Date(b.updatedAt);
        return c - d;
      });
      return result;
    },
    [activatedBot]
  );

  return (
    <TableContainer>
      <Table variant="variant">
        <Thead>
          <Tr
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("cyan.400", "cyan.700")}
          >
            <Th>BBot ID</Th>
            <Th>Active</Th>
            <Th textAlign="center">Bot</Th>
            <Th isNumeric>Name</Th>
            <Th isNumeric>Expired Days</Th>
            <Th isNumeric>Last Modified</Th>
          </Tr>
        </Thead>
        <Tbody>
          {activatedBot &&
            handleSort(activatedBot)?.map((res, index) => (
              <Tr
                key={index}
                borderBottomWidth="1px"
                borderBottomColor="cyan.400"
              >
                <Td>{res.BBotID}</Td>
                <Td isNumeric>
                  {res.Active ? <ActiveButton /> : <UnactiveButton />}
                </Td>
                <Td>{res.ValueBot.map((result) => result + `, `)}</Td>
                <Td>{res.Name}</Td>
                <Td>{res.ExpiredDay === 'NERVER' ? 'NERVER' : handleConvertDay(res.ExpiredDay * 1000)}</Td>
                <Td>{handleConvertDay(res.updatedAt)}</Td>
                <Td>
                  <ButtonOption idBot={res._id} botValue={res} getActivatedBot={getActivatedBot} />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default memo(TableIndex);
