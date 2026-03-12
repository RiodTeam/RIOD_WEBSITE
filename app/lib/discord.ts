/**
 * Send a notification to the configured Discord webhook.
 * Silently no-ops if DISCORD_WEBHOOK_URL is not set.
 */
export async function sendDiscordNotification({
  formTitle,
  page,
  data,
}: {
  formTitle: string;
  page: string;
  data: Record<string, string | undefined>;
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  const fields = Object.entries(data)
    .filter(([, value]) => value)
    .map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value: String(value),
      inline: true,
    }));

  const embed = {
    title: `📩 ${formTitle}`,
    color: 0xcdf80a,
    fields: [
      { name: "Page", value: page, inline: false },
      ...fields,
    ],
    timestamp: new Date().toISOString(),
    footer: { text: "RIOD Website" },
  };

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });
  } catch (err) {
    console.error("Discord webhook error:", err);
  }
}
