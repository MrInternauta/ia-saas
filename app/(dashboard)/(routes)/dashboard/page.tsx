import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>Protected</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
