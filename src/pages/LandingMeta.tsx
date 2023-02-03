import Metas from "@/components/Metas";
import { useRouter } from "next/router";

const LandingMeta = () => {
    const router = useRouter();
    return (
      <Metas
        title="Beon1x"
        description="Bla-bla-bla"
        pageUrl={router.pathname}
      />
    );
}

export default LandingMeta;
