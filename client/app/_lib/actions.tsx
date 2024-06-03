"use server";

import { signIn, signOut } from "./auth";

export async function submitContactForm(formData: FormData) {
  const response = await fetch("http://localhost:7500/api/send/email", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to submit contact form");
  }
}

export async function submitLogin() {
  await signIn("google", { redirectTo: "/account" });
}

export async function submitLogout() {
  await signOut({ redirectTo: "/" });
}

export async function submitSigninEmailandPassword(formdata: FormData) {
  console.log(formdata);
}
