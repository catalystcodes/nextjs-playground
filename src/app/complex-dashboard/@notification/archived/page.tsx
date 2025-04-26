import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotification = () => {
  return (
    <Card>
      <h1> Archived Notification</h1>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotification;
