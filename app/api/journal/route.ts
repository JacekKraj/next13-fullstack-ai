import { getUserByClerkId } from "../../../utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/dist/server/web/exports";

export const POST = async () => {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "Write about your dayyy!",
    },
  });

  return NextResponse.json({ data: entry });
};
