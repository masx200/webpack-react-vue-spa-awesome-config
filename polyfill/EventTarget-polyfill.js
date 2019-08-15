import { EventTarget } from "event-target-shim/dist/event-target-shim.umd";
if ("function" != typeof window.EventTarget) {
  window.EventTarget = EventTarget;
}
