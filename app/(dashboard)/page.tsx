"use client";

import Loading from "@/components/auth/loading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/clerk-react";

export default function DashboardPage () {
  return (
    <main>
      <Button variant={"destructive"} size={"lg"}>
        Dash
      </Button>
      {/* <div>
        <UserButton/>
      </div> */}
    </main>
  );
}
