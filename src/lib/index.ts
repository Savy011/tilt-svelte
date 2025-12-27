import type { Attachment } from "svelte/attachments";
import type { TiltOptions, TiltValues } from "vanilla-tilt";
import VanillaTilt from "./vanilla-tilt.ts";

const defaultOpts: TiltOptions = {
  "reverse": false,
  "max": 15,
  "startX": 0,
  "startY": 0,
  "perspective": 1000,
  "scale": 1,
  "speed": 300,
  "transition": true,
  "axis": null,
  "reset": true,
  "reset-to-start": true,
  "easing": "cubic-bezier(.03,.98,.52,.99)",
  "glare": false,
  "max-glare": 1,
  "glare-prerender": false,
  "mouse-event-element": undefined,
  "full-page-listening": false,
  "gyroscope": true,
  "gyroscopeMinAngleX": -45,
  "gyroscopeMaxAngleX": 45,
  "gyroscopeMinAngleY": -45,
  "gyroscopeMaxAngleY": 45,
  "gyroscopeSamples": 10,
};

interface HTMLElementWithTilt extends HTMLElement {
  vanillaTilt?: InstanceType<typeof VanillaTilt>;
}

export function tilt(opts: Partial<TiltOptions> = {}): Attachment {
  return (el) => {
    if (!(el instanceof HTMLElement)) {
      throw new TypeError("tilt attachment requires an HTMLElement");
    }
    const options = { ...defaultOpts, ...opts };
    VanillaTilt.init(el, options);

    return () => {
      const instance = (el as HTMLElementWithTilt).vanillaTilt;
      if (instance) {
        instance.destroy();
      }
    };
  };
}

export type { TiltOptions, TiltValues };
