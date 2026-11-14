"use client";

import { useEffect } from "react";

const legacyEvents = [
  "click", "dblclick", "contextmenu", "input", "change", "submit", "load", "error", "mouseover", "mouseout",
  "mouseenter", "mouseleave", "focus", "blur", "keydown", "keyup", "keypress", "scroll",
  "transitionend", "animationend",
];

export default function LegacyPageContent({ children }) {
  useEffect(() => {
    const cleanups = [];
    const selector = legacyEvents.map((eventName) => `[data-legacy-on${eventName}]`).join(",");
    for (const element of document.querySelectorAll(selector)) {
      for (const eventName of legacyEvents) {
        const attribute = `data-legacy-on${eventName}`;
        const code = element.getAttribute(attribute);
        if (code === null) continue;
        const handler = (event) => {
          try {
            const result = new Function("event", code).call(element, event);
            if (result === false) event.preventDefault();
            return result;
          }
          catch (error) { console.error(`Legacy ${eventName} handler failed`, error); }
        };
        element.addEventListener(eventName, handler);
        cleanups.push(() => element.removeEventListener(eventName, handler));
      }
    }
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return <main className="legacy-page-content">{children}</main>;
}
