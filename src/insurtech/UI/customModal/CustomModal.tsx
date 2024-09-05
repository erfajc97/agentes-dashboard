import { Modal } from "antd";
import React, { ReactNode } from "react";

// Definición de la interfaz para las props del componente
interface CustomModalProps {
  width?: number;
  centered?: boolean;
  isOpenModal: boolean;
  onCancel: () => void;
  children: ReactNode;
  destroyOnClose?: boolean;
  title?: ReactNode;
  className?: string;
  zIndex?: number;
  confirmLoading?: boolean;
  footer?: ReactNode | null;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  width = 600,
  centered = true,
  isOpenModal,
  onCancel,
  children,
  destroyOnClose,
  title,
  className = "",
  zIndex = 1000,
  confirmLoading = false,
  footer = null,
}) => (
  <Modal
    confirmLoading={confirmLoading}
    centered={centered}
    className={className}
    open={isOpenModal}
    onCancel={onCancel}
    footer={footer}
    width={width}
    destroyOnClose={destroyOnClose}
    title={title}
    zIndex={zIndex}
  >
    {children}
  </Modal>
);

export default CustomModal;
