import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FallBros`.
 */
export type FallBrosProps = SliceComponentProps<Content.FallBrosSlice>;

/**
 * Component for "FallBros" Slices.
 */
const FallBros = ({ slice }: FallBrosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fall_bros (variation: {slice.variation}) Slices
    </section>
  );
};

export default FallBros;
