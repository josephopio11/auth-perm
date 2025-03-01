import { authOptions } from "@/authOptions";
import UserCard from "@/components/UserCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Serverpage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session.user} pagetype="Server" />
    </section>
  );
}
