import type { RequestHandler } from '@sveltejs/kit';
import { DISCORD_WEBHOOK_URL } from '$env/static/private';

// Health check for the webhook
export const GET: RequestHandler = async () => {
	return new Response(JSON.stringify('Netlify webhook is working!'), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};

// Handle Netlify webhook
export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();

	console.log('Received Netlify webhook payload:', [...formData.entries()]);

	const deploy_url = formData.get('deploy_url') as string;
	const name = formData.get('name') as string;
	const branch = formData.get('branch') as string;

	if (!deploy_url || !name || !branch) {
		return new Response('Invalid payload', { status: 400 });
	}

	const message = {
		content: `✅ **Netlify Deploy Succeeded**\n🔗 ${deploy_url}\n📦 Site: ${name}\n🌿 Branch: ${branch}`
	};

	const res = await fetch(DISCORD_WEBHOOK_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(message)
	});

	if (!res.ok) {
		console.error('Failed to send to Discord', await res.text());
		return new Response('Failed to notify Discord', { status: 500 });
	}

	return new Response('Notification sent to Discord!', { status: 200 });
};
