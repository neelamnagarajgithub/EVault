import { submitLogout } from "../_lib/actions";

export default function SignOutButton() {
  return (
    <form action={submitLogout}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
