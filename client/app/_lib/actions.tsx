"use server";
import { auth, signIn, signOut } from "./auth";

export async function submitLogin() {
  await signIn("google", { redirectTo: "/account" });
}

export async function submitLogout() {
  await signOut({ redirectTo: "/" });
}

export async function submitSigninEmailandPassword(formdata: FormData) {
  console.log(formdata);
}

export async function getUser() {
  const session = await auth();
  return {
    name: session?.user?.name,
    email: session?.user?.email,
  };
}

export async function sendUserDetails() {
  const session = await auth();
  // const response = await fetch("http://localhost:7500/api/v1/user", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: {
  //     name: session?.user?.name,
  //     email: session?.user?.email,
  //   },
  // });

  const response = await fetch("http://localhost:7500/api/v1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(session),
  });

  if (response.ok) {
    console.log("User details sent");
  } else {
    console.log("User details not sent");
  }

  // return await response.json();
  console.log(typeof session);
}
