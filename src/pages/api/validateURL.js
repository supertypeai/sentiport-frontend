export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { url, type } = req.body;
    const parsedUrl = new URL(url);
    const applePattern = /^\/[a-zA-Z]{2}\/(app|store)\//;
    if (
      type === "PlayStore" && 
      parsedUrl.hostname.endsWith("google.com") &&
      parsedUrl.pathname.startsWith("/store/apps")
    ) {
      const response = await fetch(url, { method: "HEAD" });
      return res.json({
        ok: response.ok,
      });
    } else if (
      type === "AppStore" && 
      (parsedUrl.hostname.endsWith("itunes.apple.com") || parsedUrl.hostname.endsWith("apps.apple.com")) &&
      applePattern.test(parsedUrl.pathname)
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
