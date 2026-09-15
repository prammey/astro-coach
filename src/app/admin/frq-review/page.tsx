import PageContainer from "@/components/PageContainer";
import FrqReviewScreen from "@/components/admin/screens/FrqReviewScreen";

// No `metadata` export on purpose: a title would appear in the document of
// an unauthorised visitor and reveal that this route exists. The page
// inherits the site's default title instead, and everything else is decided
// inside the client boundary — see AdminGate.
export default function Page() {
  return (
    <PageContainer>
      <FrqReviewScreen />
    </PageContainer>
  );
}
