import { VFC } from "../assessment/types";

interface ModalProps {
  title: string | null;
  onClose: () => void;
  show: boolean;
  children: React.ReactNode;
  size: "sm" | "lg" | "xl";
}

const Modal: VFC<ModalProps> = ({ show, title, size, onClose, children }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={show ? "modal open" : "modal"}>
      <span className="modal__backdrop"></span>
      <div className={`modal__container modal__container--${size}`}>
        <span className="modal__close" onClick={() => onClose()}>
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </span>
        {title && <div className="modal__title">{title}</div>}
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
