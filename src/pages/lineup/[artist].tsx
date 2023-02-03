import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import axios from "axios";
import { TUsers } from "./type";
import GuyJ from "public/images/artists/boris_brejcha.webp";
import styles from "./style.module.css";
import Link from "next/link";
import { collection, getDocs, query } from "firebase/firestore";
import db from "@/common/firebase/api";
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
    revalidate: 1,
  };
};

const Artist = ({ artistData }: Props) => {
  return (
    <div className={styles.container}>
      <Link href="/lineup">go back</Link>
      <div className={styles['data-from-db']}>
      {artistData.map((data) => {
        return (
          <p key={data}>{data}</p>
        );
      })}
      </div>
      <div className={styles.images}>
        <div className={styles["image-container"]}>
          <Image
            src={GuyJ}
            alt="Guy J"
            placeholder="blur"
            // layout="fill"
            // objectFit="contain"
          />
        </div>
      </div>
      <Link href={`/schedule/${artistData[0]}`}>
        Go to un-revalidated data
      </Link>
    </div>
  );
};

export default Artist;
