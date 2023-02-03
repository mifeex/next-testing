import Metas from "@/components/Metas";
import { useRouter } from "next/router";

const LineupMeta = () => {
  const router = useRouter();
  return (
    <Metas
      title="Lineup"
      description="Grab your tickets now! We provide a variety of options to choose from for any budget, so feel free to get your pass for ${SEO_FRIENDLY_SHORTED_FEST_NAME}!"
      pageUrl={router.pathname}
    />
  );
};

export default LineupMeta;
