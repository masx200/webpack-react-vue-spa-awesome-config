import EventTarget from "event-target-shim/dist/event-target-shim.mjs";
if ("function" != typeof window.EventTarget) {
  window.EventTarget = EventTarget;
}
