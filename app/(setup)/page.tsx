import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
// import { initialProfile } from "@/lib/initial-profile";
// import { InitialModal } from "@/components/modals/initial-modal";
import Heros from "@/components/publicroutes/Heros";
import Header from "@/components/layout/Header";
const SetupPage = async () => {
  // const profile = await initialProfile();

  // const server = await db.server.findFirst({
  //   where: {
  //     members: {
  //       some: {
  //         profileId: profile.id,
  //       },
  //     },
  //   },
  // });

  // if (server) {
  //   return redirect(`/servers/${server.id}`);
  // }

  // return <InitialModal />;
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Heros />
    </div>
  );
};

export default SetupPage;
