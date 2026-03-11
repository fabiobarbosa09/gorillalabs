import { NextResponse } from "next/server";

import { persistLead } from "@/lib/lead-provider";
import { leadSchema } from "@/lib/lead-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    await persistLead(parsed.data);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Failed to capture lead", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
