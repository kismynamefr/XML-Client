import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import EditActive from "./EditActive";

const Drawers = ({ onClose, isOpen, botValue }) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <EditActive botValue={botValue} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Drawers;
