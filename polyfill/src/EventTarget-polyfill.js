import { EventTarget } from "event-target-shim";
export default () => {
    if ("function" != typeof window.EventTarget) {
        window.EventTarget = EventTarget;
    }
};
