import Link from "next/link";
import SignOutButton from "../_components/SignOutButton";

export default function SideBar() {
  return (
    <div className="bg-neutral-950 h-[90vh] w-[20vw] flex justify-center items-center px-10 py-20">
      <ul>
        <li className="text-lg mt-4 text-white">
          <Link href="/account/documents">Documents</Link>
        </li>
        <li className="text-lg mt-4 text-white">
          <Link href="/account/profile">Profile</Link>
        </li>

        <li className="text-lg mt-4 text-white">
          <Link href="/account/settings">Settings</Link>
        </li>
        <li className="text-lg mt-4 text-white">
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
}
