export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { url } = req.body;
    const parsedUrl = new URL(url);
    if (
      parsedUrl.hostname.endsWith("google.com") &&
      parsedUrl.pathname.startsWith("/store/apps")
    ) {
      const response = await fetch(url, { method: "HEAD" });
      return res.json({
        ok: response.ok,
      });
    } else {
      return res.json({ ok: false });
    }
  } catch (error) {
    return res.json({ ok: false });
  }
}
