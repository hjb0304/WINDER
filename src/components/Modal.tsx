import Button from '@/components/Button';
import { X } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  message: string;
  handleCancel: () => void;
  handleConfirm: () => void;
  hideCancelButton?: boolean;
  children?: ReactNode;
}

function Modal({
  isOpen,
  message,
  handleCancel,
  handleConfirm,
  hideCancelButton,
  children,
}: ModalProps) {
  if (!isOpen) {
    document.body.style.overflow = 'auto';
    return null;
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {' '}
      <motion.div
        className="fixed inset-0 z-10 flex items-center justify-center w-full h-full bg-black/70"
        onClick={() => {
          handleCancel();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg w-96 min-h-40"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute cursor-pointer top-4 right-4"
            type="button"
            aria-label="닫기"
            onClick={() => {
              handleCancel();
            }}
          >
            <X />
          </button>
          <p className="mb-8">{message}</p>
          {children}
          <div className={`flex gap-2 w-full ${children ? 'justify-end' : 'justify-center'}`}>
            {!hideCancelButton && (
              <Button
                outlined
                onClick={() => {
                  handleCancel();
                }}
                size="sm"
              >
                취소
              </Button>
            )}
            <Button onClick={handleConfirm} size="sm">
              확인
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
