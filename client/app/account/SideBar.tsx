import SignOutButton from "../_components/SignOutButton";

export default function SideBar() {
  return (
    <div className="bg-neutral-950 h-[90vh] w-[20vw] flex justify-center items-center px-10 py-20">
      <ul>
        <li className="text-lg mt-4 text-white">Profile</li>
        <li className="text-lg mt-4 text-white">Settings</li>
        <li className="text-lg mt-4 text-white">
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
}
