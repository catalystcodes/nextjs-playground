import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const NotificationPage = () => {
  return (
    <Card>
      <h1>Notification</h1>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default NotificationPage;
