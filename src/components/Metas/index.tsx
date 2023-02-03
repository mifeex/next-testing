import Head from "next/head";
// import promo from "@/images/promo.jpg";

type Metas = {
  name: string;
  content: string;
  property?: string;
};

type Props = {
  pageUrl: string;
  title: string;
  description: string;
  extra?: Metas[];
};

const Metas = ({ extra = [], pageUrl, title, description }: Props) => {
  const supplementedMeta = [
    ...extra,
    { name: "title", content: title },
    { name: "description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:url", content: pageUrl },
  ];

  return (
    <Head>
      <>
        <title>{title}</title>
        {supplementedMeta.map((meta: Metas, index) => {
          return (
            <meta
              name={meta.name}
              content={meta.content}
              key={`${meta.name}_${index}`}
            />
          );
        })}
        <link rel="canonical" href={pageUrl}></link>
      </>
    </Head>
  );
};

export default Metas;
