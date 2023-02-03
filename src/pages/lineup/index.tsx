import axios from "axios";
import styles from "./style.module.css";
import Link from "next/link";
import { TUsers } from "../../common/types/type";
import LineupMeta from "./LineupMeta";

type Props = {
  artists: TUsers[];
};

export const getStaticProps = async () => {
  // отдает все пропы перед рендером. Можно делать запросы. Срабатывает на сервере
  const req = await axios("https://jsonplaceholder.typicode.com/users");
  const artists = await req.data;

  console.log();

  if (!artists)
    return {
      notFound: true,
    };

  return {
    props: {
      artists,
    },
  };
};

const Lineup = ({ artists }: Props) => {
  return (
    <>
      <LineupMeta />
      <h1>Lineup:</h1>
      <div className={styles.artist}>
        {artists ? (
          artists.map((artist) => {
            return (
              <div key={artist.id} className={styles.profile}>
                <Link href={`/lineup/${artist.id}`}>
                  <h3 className={styles.name}>{artist.name}</h3>
                </Link>
                <span className={styles.email}>{artist.email}</span>
              </div>
            );
          })
        ) : (
          <span>Artists uploading</span>
        )}
      </div>
    </>
  );
};

export default Lineup;
