import Metas from "@/components/Metas";
import { useRouter } from "next/router";

const LineupMeta = () => {
    const router = useRouter();
    return (
      <Metas
        title="Lineup"
        description="You can find the line-up of the ${SEO_FRIENDLY_FULL_FEST_NAME} on this page. For more information, please contact us by e-mail ${emails.support}."
        pageUrl={router.pathname}
      />
    );
}

export default LineupMeta;
