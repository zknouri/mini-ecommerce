import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import type { ModalProps } from "../utils/types";

export default function Modal({ open, children, onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal?.showModal();
    } else {
      modal?.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="relative">
      {open ? children: null}
    </dialog>,
    document.getElementById("modal") as HTMLElement,
  );
}
