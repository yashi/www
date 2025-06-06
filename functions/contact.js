export const onRequestPost = async ({ request, env }) => {
  try {
    const body = await request.json();

    const { name, email, role, message, website } = body;

    if (website && website.trim() !== "") {
      return new Response("Bot detected (honeypot)", { status: 400 });
    }

    if (!name || !email || !role || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    const slackMessage = {
      text: `*New Contact Form Submission:*
*Name:* ${name}
*Email:* ${email}
*Role:* ${Array.isArray(role) ? role.join(", ") : role}
*Message:* ${message}`
    };

    const webhookUrl = env.SLACK_WEBHOOK;
    if (!webhookUrl) {
      return new Response("Missing Slack webhook", { status: 500 });
    }

    const slackResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      const errText = await slackResponse.text();
      return new Response(`Slack error: ${errText}`, { status: 500 });
    }

    return new Response("Message sent to Slack", { status: 200 });
  } catch (error) {
    return new Response(`Server error: ${error.message}`, { status: 500 });
  }
};
