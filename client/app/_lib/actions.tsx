"use server";

export async function submitContactForm(formData: FormData) {
  const response = await fetch("http://localhost:7500/api/send/email", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to submit contact form");
  }
}
