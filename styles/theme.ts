import { css } from "@emotion/react";
import * as mixins from "./mixins";

export const mediaConfigurationStyles = {
  theme: {
    lineSpacing: 20,
    linkColor: "var(--black)",
    borderStyle: "2px solid var(--yellow)",
    defaultBorderRadius: 5,
    maximumPricingDecimals: 2,
  },
  styles: {
    // cardOuter: () => css`
    //   background: #333333;
    //   color: white;
    //   overflow: hidden;
    //   border-radius: 5px;
    //   border: 2px solid var(--yellow);
    //   margin: 15px;
    //   width: 330px;
    //   line-height: 20px;
    //   font-family: Inter, Helvetica;
    //   font-weight: 400;
    //   -webkit-transition: -webkit-transform 0.1s ease-in-out;
    //   transition: transform 0.1s ease-in-out;
    //   position: relative;
    // `,
    // cardAuctionPricing: () => css`
    //   display: grid;
    //   grid-auto-flow: column;
    //   grid-template-rows: auto auto;
    //   grid-auto-column: 1fr;
    //   padding: 10px 15px;
    //   border-top: 2px
    //   solid var(--yellow);
    //   background: #161616;
    // }
    // `,
    fullMediaWrapper: () => css`
      margin: 0;
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      overflow-y: visible;
      img {
        object-fit: contain;
        ${mixins.absoluteFullCentered};
      }
      ${mixins.media.laptop`
        height: 50vh;
        min-height: 35rem;
        max-height: 65rem;
        padding-bottom: 0;
      `}
    `,
    mediaObject: () => css`
      z-index: 1;
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: contain;
    `,
    mediaLoader: () => css`
      ${mixins.absoluteFullCentered};
      z-index: 0;
    `,
    fullPageDataGrid: () => css`
      display: grid;
      grid-gap: var(--space-md);
    `,
    fullCreatorOwnerSection: () => css`
      color: white;
      padding: 0;
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: auto auto;
      padding: var(--base-unit);
      border: 2px solid var(--yellow);
      * {
        text-align: center;
      }
    `,
    fullOwnerAddress: () => css`
      padding-top: var(--space-sm);
      font-size: var(--text-02);
    `,
    fullDescription: () => css`
      margin: var(--space-sm) 0;
      font-size: var(--text-02);
      line-height: 1.25;
    `,
    fullTitle: () => css`
      font-size: var(--text-04);
      padding: var(--base-unit) 0;
    `,
    fullLabel: () => css`
      color: var(--white);
      opacity: 0.3;
      font-family: var(--font-) !important;
      text-transform: uppercase;
      font-size: var(--text-02);
    `,
    infoContainer: () => css`
      padding: var(--space-sm);
      border: 2px solid var(--yellow);
      margin: 0 auto var(--space-sm);
      width: 100%;
      color: var(--white);
    `,
    fullInfoProofAuthenticityContainer: () => css`
      padding: var(--space-sm) 0 0;
      display: grid;
      grid-template-columns: 1fr;
    `,
    fullPageHistoryTxnLink: () => css`
      font-size: var(--text-01);
      padding-top: 5px;
    `,
    fullPageHistoryItemDatestamp: () => css`
      color: var(--black);
      font-size: var(--text-01);
      padding-top: 5px;
      color: var(--white);
      opacity: 0.3;
    `,
    fullPageHistoryItemMeta: () => css`
      padding-top: 10px;
    `,
    fullProofLink: () => css`
      ${mixins.buttonStyle};
      display: inline-block;
      padding: var(--base-unit);
      margin-bottom: var(--space-sm);
      font-size: var(--text-02);
    `,
    fullPageHistoryItem: () => css`
      padding: 0 0 10px;
      padding-top: 10px;
      color: var(--white);
      margin-bottom: var(--space-sm);
      border-bottom: 1px dotted var(--white);
      &:last-of-type {
        border-bottom: 0;
      }
      > div {
        width: 100%;
        display: flex;
        padding-bottom: 1px;
        font-size: var(--text-02);
        line-height: 1.2;
        * {
          margin: 0;
          text-align: center;
        }
        span {
          margin-right: 3px;
        }
        ${mixins.media.tablet`
          padding: 5px;
          flex-direction: row;
        `}
        ${mixins.media.laptop`
          font-size: var(--text-01);
        `}
      }
    `,
    fullInfoCreatorEquityContainer: () => css`
      margin: 0 0 var(--space-md);
    `,
    cardItemInfo: () => css`
      padding: var(--space-sm) var(--space-sm) 0;
      display: flex;
      justify-content: center;
      font-size: 0.9em;
      * {
        text-align: center;
      }
    `,
    fullPageHistoryItemDescription: () => css`
      font-size: var(--text-01);
    `,
    cardMediaWrapper: () => css`
      width: 100%;
      position: relative;
      height: 0;
      padding-bottom: 133%;
      overflow-y: visible;
      img {
        ${mixins.absoluteFullCentered};
        object-fit: cover;
      }
    `,
  },
};
