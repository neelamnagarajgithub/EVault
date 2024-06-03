import SignOutButton from "../_components/SignOutButton";
import { sendUserDetails } from "../_lib/actions";
import { auth } from "../_lib/auth";

export default async function Page() {
  const session = await auth();
  sendUserDetails();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-3xl font-semibold text-white">Welcome to EVault</h1>
      <p className="text-lg mt-4 text-white">{session?.user?.name}</p>
      <p className="text-lg mt-4 text-white">{session?.user?.email}</p>
      <SignOutButton />
    </div>
  );
}
