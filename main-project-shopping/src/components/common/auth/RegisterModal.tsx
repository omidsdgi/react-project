import {Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";

interface Props {

}

interface Props {
    onClose: () => void
}

export function RegisterModal({onClose}: Props) {
    return (
        <Modal title={'register'} closeModal={onClose}
        >
            <form>

            </form>
        </Modal>

    );
}