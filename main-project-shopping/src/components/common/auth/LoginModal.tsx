import {Modal} from "@/components";
import React from "react";
import {useModal} from "@/store";

interface Props {
    onClose: () => void;
}

export function LoginModal({onClose}: Props) {
    const {openModal} = useModal();
    return (
        <Modal title={'login'} closeModal={onClose}>
            <form>

            </form>
            <span onClick={()=> openModal('register')}> go to register modal</span>
        </Modal>

    );
}