import { submitContactForm } from "../_lib/actions";

export default function ContactusForm() {
  return (
    <form
      action={submitContactForm}
      className="flex justify-center items-center flex-col gap-8"
    >
      <input
        type="text"
        placeholder="Name"
        name="fulname"
        className="text-xl p-2 bg-blue-100 rounded-lg "
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="text-xl p-2 bg-blue-100 rounded-lg "
        required
      />
      <textarea
        name="message"
        id=""
        cols={30}
        rows={10}
        placeholder="Message"
        className="text-xl p-2 bg-blue-100 rounded-lg "
        required
      ></textarea>
      <input
        type="submit"
        value="submit"
        className=" bg-blue-500 font-mono text-xl px-4 py-2 rounded-lg hover:bg-blue-950 hover:text-white transition-all duration-500"
      />
    </form>
  );
}
