import db from "@/common/firebase/api";
import { collection, getDocs, query } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

type Props = {
  artistData: string[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: (
    | string
    | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
      }
  )[] = [];
  const paramsCol = query(collection(db, "params"));
  await getDocs(paramsCol).then((res) => {
    paths = res.docs.map((doc) => ({
      params: {
        artist: doc.data().value,
      },
    }));
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let req: any = {};
  const paramsCol = query(collection(db, "params"));
  await getDocs(paramsCol).then((res) => {
    req = res.docs.map((doc) => doc.data().value);
  });
  return {
    props: {
      artistData: req,
    },
  };
};

const ScheduleDates = ({ artistData }: Props) => {
  return (
    <div>
      {artistData.map((artist) => (
        <p key={artist}>{artist}</p>
      ))}
    </div>
  );
};

export default ScheduleDates;
