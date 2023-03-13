import { modalService } from "@/services/modal.service";
import { useEffect } from "react";
import useToggle from "./useToggle";

function useModal() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value, _, setValue] = useToggle(true)
    const suscription = modalService.getSubject();
    const activeModal = (active: boolean) => {
        console.log(active);
        modalService.setSubject(active)
    }
    useEffect(() => {
        suscription.subscribe((data) => {
            setValue(data);
        });
    }, [suscription]);
    return { showModal: value, activeModal }
}

export default useModal;