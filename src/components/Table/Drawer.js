import {
    Button, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay
} from '@chakra-ui/react';
import EditActive from './EditActive';

const Drawers = ({ onClose, isOpen, botValue }) => {

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <EditActive botValue={botValue}/>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Drawers;