import { EventTarget } from "event-target-shim";
if ("function" != typeof window.EventTarget) {
  window.EventTarget = EventTarget;
}
