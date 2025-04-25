import type { RequestHandler } from '@sveltejs/kit';
import { DISCORD_WEBHOOK_URL } from '$env/static/private';

// health check
export const GET: RequestHandler = async () => {
	return new Response(JSON.stringify('Netlify webhook is working!'), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

export const POST: RequestHandler = async ({ request }) => {
	const payload = await request.json();

	if (!payload || !payload.deploy_url || !payload.name || !payload.branch) {
		return new Response('Invalid payload', { status: 400 });
	}

	// https://discordapp.com/api/webhooks/<your_webhook_here>
	const discordWebhook = DISCORD_WEBHOOK_URL

	const message = {
		content: `✅ **Netlify Deploy Succeeded**\n🔗 ${payload.deploy_url}\n📦 Site: ${payload.name}\n🌿 Branch: ${payload.branch}`
	};

	const res = await fetch(discordWebhook, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(message)
	});

	if (!res.ok) {
		return new Response('Failed to notify Discord', { status: 500 });
	}

	return new Response('Notification sent to Discord!', { status: 200 });
};
