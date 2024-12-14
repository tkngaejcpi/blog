export interface Config {
	name: string;

	locale: Intl.Locale;
}

export const config: Config = {
	name: '失聯電台',

	locale: new Intl.Locale('zh-TW'),
};
