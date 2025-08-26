import Button from '@/components/Button';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  message: string;
  handleCancel: () => void;
  handleConfirm: () => void;
  hideCancelButton?: boolean;
}

function Modal({ isOpen, message, handleCancel, handleConfirm, hideCancelButton }: ModalProps) {
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
    <div
      className="fixed inset-0 flex items-center justify-center w-full h-full bg-black/70"
      onClick={() => {
        handleCancel();
      }}
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
        <div className="flex gap-2">
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
    </div>
  );
}

export default Modal;
