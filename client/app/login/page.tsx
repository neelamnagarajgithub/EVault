import { FaGoogle } from "react-icons/fa";
import { submitLogin } from "../_lib/actions";

export default function Page() {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <form action={submitLogin}>
        <button className="flex justify-center items-center gap-8 border border-white px-4 py-2 rounded-lg">
          <span>
            <FaGoogle className="text-xl text-white" />
          </span>
          <span className="text-xl text-white">Sign in with Google</span>
        </button>
      </form>
    </div>
  );
}
