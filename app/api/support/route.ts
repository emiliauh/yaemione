import { NextResponse } from "next/server";

const FABFORM_ENDPOINT = "https://fabform.io/f/aS8J1zs";

export async function POST(req: Request) {
  try {
    // Accept both JSON and multipart payloads
    let name = "";
    let email = "";
    let message = "";
    let company = "";
    try {
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const body = await req.json();
        name = (body.name || "").toString();
        email = (body.email || "").toString();
        message = (body.message || "").toString();
        company = (body.company || "").toString();
      } else {
        const fd = await req.formData();
        name = String(fd.get("name") || "");
        email = String(fd.get("email") || "");
        message = String(fd.get("message") || "");
        company = String(fd.get("company") || "");
      }
    } catch {}

    // Honeypot and tiny validation
    if (company.trim().length > 0) {
      return NextResponse.json({ ok: true }); // pretend success
    }
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Construct a form-encoded body for FabForm
    const body = new URLSearchParams();
    body.set("name", name);
    body.set("email", email);
    body.set("message", message);

    const res = await fetch(FABFORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: body.toString(),
      // Using server-side fetch avoids their browser anti-spam interstitial
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("FabForm error:", res.status, text);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
