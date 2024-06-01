import SignOutButton from "../_components/SignOutButton";
import { auth } from "../_lib/auth";

export default async function Page() {
  const session = await auth();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold">Welcome to EVault</h1>
      <p className="text-lg mt-4">{session?.user?.name}</p>
      <p className="text-lg mt-4">{session?.user?.email}</p>
      <SignOutButton />
    </div>
  );
}
