export async function POST(req: Request) {
  try {
    const form = await req.formData();
    // Honeypot check
    const hp = (form.get("company") as string) || "";
    if (hp.trim()) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json" } });
    }

    const params = new URLSearchParams();
    for (const [k, v] of form.entries()) {
      if (typeof v === "string") params.append(k, v);
    }

    // Forward to FabForm
    const res = await fetch("https://fabform.io/f/aS8J1zs", {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ ok: false }), { status: 502, headers: { "content-type": "application/json" } });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 500, headers: { "content-type": "application/json" } });
  }
}
