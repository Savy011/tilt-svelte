import type { Attachment } from "svelte/attachments";
import type { TiltOptions, TiltValues } from "vanilla-tilt";
import Module from "vanilla-tilt";

const VanillaTilt = Module.default || Module;

/**
 * Default configuration options for the tilt effect.
 *
 * @internal
 */
const defaultOpts: TiltOptions = {
  reverse: false,
  max: 15,
  startX: 0,
  startY: 0,
  perspective: 1000,
  scale: 1,
  speed: 300,
  transition: true,
  axis: null,
  reset: true,
  "reset-to-start": true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  glare: false,
  "max-glare": 1,
  "glare-prerender": false,
  "mouse-event-element": undefined,
  "full-page-listening": false,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
  gyroscopeSamples: 10,
};

/**
 * Extended HTMLElement interface that includes the VanillaTilt instance.
 *
 * @internal
 */
interface HTMLElementWithTilt extends HTMLElement {
  /** The VanillaTilt instance attached to this element, if initialized */
  vanillaTilt?: InstanceType<typeof VanillaTilt>;
}

/**
 * Creates a tilt effect attachment for HTML elements using the VanillaTilt library.
 *
 * @param opts - Partial configuration options merged with defaults.
 * See {@link TiltOptions} for all available configuration properties.
 *
 * @returns A Svelte {@link Attachment}
 *
 * @throws {TypeError} If the attached element is not an instance of `HTMLElement`
 *
 * @example
 * Basic usage with default options:
 * ```svelte
 * <script>
 *   import tilt from '@savy011/tilt-svelte';
 * </script>
 *
 * <div {@attach tilt()}>
 *   Hover over me for a subtle tilt effect!
 * </div>
 * ```
 * @example
 * Vertical-only tilt with custom easing:
 * ```svelte
 * <div {@attach tilt({ axis: 'y', easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', speed: 500 })>
 *   Tilts only on Y axis
 * </div>
 * ```
 *
 * @see {@link TiltOptions} for configuration options
 * @see {@link TiltValues} for runtime tilt state values
 */
export default function tilt(opts: Partial<TiltOptions> = {}): Attachment {
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
