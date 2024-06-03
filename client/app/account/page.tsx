import SignOutButton from "../_components/SignOutButton";
import { sendUserDetails } from "../_lib/actions";
import { auth } from "../_lib/auth";

export default async function Page() {
  const session = await auth();
  sendUserDetails();
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-neutral-950 w-full">
      <div className="top-0 left-0 absolute h-screen w-full bg-black z-[-10]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff16_1px,transparent_1px),linear-gradient(to_bottom,#ffffff16_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <h1 className="text-3xl font-semibold text-white">Welcome to EVault</h1>
      <p className="text-lg mt-4 text-white">{session?.user?.name}</p>
      <p className="text-lg mt-4 text-white">{session?.user?.email}</p>
    </div>
  );
}
