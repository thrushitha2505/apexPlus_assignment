import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../App";

const ResponseModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const appContext = useContext(AppContext);
  const { modalPopup, setModalPopup } = appContext;

  const handleClose = () => {
    setModalPopup(null);
  };

  return (
    <>
      <Modal isOpen={modalPopup}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>Hi I am Modal {modalPopup}</ModalBody>
          <Button onClick={handleClose}>Ok</Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResponseModal;
