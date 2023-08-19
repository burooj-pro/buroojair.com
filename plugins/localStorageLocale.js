export default function ({ app }) {
	const language = localStorage.getItem('language')
	if (language && app.i18n.locales.find((l) => l.code === language)) {
		app.i18n.locale = language
	}
}
