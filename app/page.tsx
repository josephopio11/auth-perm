import { authOptions } from "@/authOptions";
import UserCard from "@/components/UserCard";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      {session ? (
        <UserCard user={session.user} pagetype="Home" />
      ) : (
        <h1 className="text-5xl">Not Logged In</h1>
      )}
    </>
  );
}
