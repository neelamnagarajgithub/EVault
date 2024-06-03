import SideBar from "./SideBar";

export default function AccoutnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="flex justify-between items-center gap-8 px-20 h-screen w-full">
        <SideBar />
        {children}
      </div>
    </section>
  );
}
