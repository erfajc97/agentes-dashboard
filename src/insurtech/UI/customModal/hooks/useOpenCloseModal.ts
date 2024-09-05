import { useState } from "react";
import { Form } from "antd";

// Definición del tipo para el resultado de la función `onFinish`
type OnFinish = (isSuccessfull: boolean) => void;

const useOpenCloseModal = () => {
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenCloseModal = () => setIsOpenModal((state) => !state);

  const onReset = () => form.resetFields();

  const onCancel = () => {
    onReset();
    handleOpenCloseModal();
  };

  const onFinish: OnFinish = (isSuccessfull) => {
    if (isSuccessfull) {
      onReset();
      handleOpenCloseModal();
      return;
    }
    return null;
  };

  return {
    form,
    isOpenModal,
    onReset,
    onCancel,
    onFinish,
    handleOpenCloseModal,
  };
};

export default useOpenCloseModal;
