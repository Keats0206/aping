import styled from "@emotion/styled";
import Head from "../components/head";
import Image from "next/image";
import { PageWrapper } from "../styles/components";
import { GetStaticProps } from "next";

import { AuctionsList } from "../components/AuctionsList";

import {
  FetchStaticData,
  MediaFetchAgent,
  NetworkIDs,
} from "@zoralabs/nft-hooks";

export default function Home({ tokens }: { tokens: any }) {
  return (
    <IndexWrapper>
      <Head />
      <div style={{
            margin: "auto",
            textAlign: "center",
        }}>
                <Image 
        src={"/bayc-logo.png"}
        width={460} 
        height={120} 
        alt="BAYC"
      />
      <h3>{process.env.NEXT_PUBLIC_APP_TITLE}: {process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION}</h3>
      </div>
      <AuctionsList tokens={tokens} />
    </IndexWrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchAgent = new MediaFetchAgent(
    process.env.NEXT_PUBLIC_NETWORK_ID as NetworkIDs
  );
  const tokens = await FetchStaticData.fetchZoraIndexerList(fetchAgent, {
    curatorAddress: process.env.NEXT_PUBLIC_CURATORS_ID as string,
    collectionAddress: process.env
      .NEXT_PUBLIC_TARGET_CONTRACT_ADDRESS as string,
    limit: 40,
    offset: 0,
  });

  return {
    props: {
      tokens,
    },
    revalidate: 60,
  };
};

const IndexWrapper = styled(PageWrapper)`
  max-width: var(--content-width-xl);
`;
