// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Banner documents
 */
interface BannerDocumentData {
  /**
   * banner field in *Banner*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;
}

/**
 * Banner document from Prismic
 *
 * - **API ID**: `banner`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BannerDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BannerDocumentData>,
    "banner",
    Lang
  >;

type FallbrosDocumentDataSlicesSlice = FallBrosSlice;

/**
 * Content for Fallbros documents
 */
interface FallbrosDocumentData {
  /**
   * Slice Zone field in *Fallbros*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: fallbros.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FallbrosDocumentDataSlicesSlice>;
}

/**
 * Fallbros document from Prismic
 *
 * - **API ID**: `fallbros`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FallbrosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FallbrosDocumentData>,
    "fallbros",
    Lang
  >;

export type AllDocumentTypes = BannerDocument | FallbrosDocument;

/**
 * Primary content in *FallBros → Default → Primary*
 */
export interface FallBrosSliceDefaultPrimary {
  /**
   * image field in *FallBros → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fall_bros.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * alt field in *FallBros → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fall_bros.default.primary.alt
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  alt: prismic.KeyTextField;

  /**
   * title field in *FallBros → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fall_bros.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *FallBros → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fall_bros.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for FallBros Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FallBrosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FallBrosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FallBros*
 */
type FallBrosSliceVariation = FallBrosSliceDefault;

/**
 * FallBros Shared Slice
 *
 * - **API ID**: `fall_bros`
 * - **Description**: FallBros
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FallBrosSlice = prismic.SharedSlice<
  "fall_bros",
  FallBrosSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * alt field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.alt
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  alt: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BannerDocument,
      BannerDocumentData,
      FallbrosDocument,
      FallbrosDocumentData,
      FallbrosDocumentDataSlicesSlice,
      AllDocumentTypes,
      FallBrosSlice,
      FallBrosSliceDefaultPrimary,
      FallBrosSliceVariation,
      FallBrosSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}
