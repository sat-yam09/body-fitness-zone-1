"use client";
// App.tsx
import { useEffect } from 'react';
import '@n8n/chat/style.css';   
import { createChat } from '@n8n/chat';

export const App = () => {
	useEffect(() => {
		
createChat({
	webhookUrl: 'https://n8n-render-free-p7yb.onrender.com/webhook/be829f20-e524-499c-97d8-49eb3f139a9c/chat',
	webhookConfig: {
		method: 'POST',
		headers: {}
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	loadPreviousSession: true,
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		'Hi there! 👋',
		'I ma Steeven Assistant. Ask me doubt?'
	],
	i18n: {
		en: {
			title: 'Hi there! 👋',
			subtitle: "Start a chat. We're here to help you 24/7.",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Type your question..',
			closeButtonTooltip: 'Close chat', // Added required property
		},
	},
	enableStreaming: false,
});
	}, []);

	return (
		<div>
			<link
				href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
				rel="stylesheet"
			/>
			<style>{`
:root {
	--chat--color-primary:  oklch(0.3 0.15 15); /* Emerald green */
	--chat--color-primary-shade-50: #3b82f6; /* Hover blue */
	--chat--color-primary-shade-100: #2563eb; /* Deep blue */
	--chat--color-secondary: #2563eb; /* Replaces sea green with deep blue */
	--chat--color-secondary-shade-50: #1e40af; /* Deeper blue */
	--chat--color-white: #ffffff;
	--chat--color-light: #f9fafb; /* Light gray */
	--chat--color-light-shade-50: #e5e7eb; 
	--chat--color-light-shade-100: #d1d5db;
	--chat--color-medium: #9ca3af; 
	--chat--color-dark: oklch(0.7 0.15 85); /* Chat header golden */
	--chat--color-disabled: #6b7280;
	--chat--color-typing: #1f2937;

	--chat--spacing: 1rem;
	--chat--border-radius: 0.8rem;
	--chat--transition-duration: 0.5s;

	--chat--window--width: 320px;
	--chat--window--height: 500px;
	--chat--header-height: auto;
	--chat--header--padding: var(--chat--spacing);
	--chat--header--background: var(--chat--color-dark);
	--chat--header--color: var(--chat--color-white);
	--chat--header--border-top: none;
	--chat--header--border-bottom: none;
	--chat--heading--font-size: 1em;
	--chat--subtitle--font-size: inherit;
	--chat--subtitle--line-height: 1.8;

	--chat--textarea--height: 100px;

	--chat--message--font-size: 1rem;
	--chat--message--padding: var(--chat--spacing);
	--chat--message--border-radius: var(--chat--border-radius);
	--chat--message-line-height: 1.8;
	--chat--message--bot--background: #ffffff;
	--chat--message--bot--color: #1f2937;
	--chat--message--bot--border: none;
	--chat--message--user--background: var(--chat--color-primary);
	--chat--message--user--color: var(--chat--color-white);
	--chat--message--user--border: none;
	--chat--message--pre--background: rgba(0, 0, 0, 0.05);

	--chat--toggle--background: var(--chat--color-primary);
	--chat--toggle--hover--background: var(--chat--color-primary-shade-50);
	--chat--toggle--active--background: var(--chat--color-primary-shade-100);
	--chat--toggle--color: var(--chat--color-white);
	--chat--toggle--size: 78px;
}
			`}</style>
			<div id="n8n-chat"></div>
		</div>
	);
};