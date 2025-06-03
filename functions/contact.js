export const onRequestPost = async ({ request }) => {
  const body = await request.json();

  const message = {
    text: `📬 *New Contact Form Submission:*
*Name:* ${body.name}
*Email:* ${body.email}
*Role:* ${body.role?.join(", ")}
*Message:* ${body.message}`
  };

  const slackWebhook = env.SLACK_WEBHOOK;

  const response = await fetch(slackWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });

  return response.ok
    ? new Response("Message sent to Slack", { status: 200 })
    : new Response("Failed to send to Slack", { status: 500 });
};
