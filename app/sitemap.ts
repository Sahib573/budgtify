import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://expense.fyi',
			lastModified: new Date(),
		},
		{
			url: 'https://app.expense.fyi',
			lastModified: new Date(),
		},
		{
			url: 'http://app.localhost:3000/signin',
			lastModified: new Date(),
		},
		{
			url: 'http://app.localhost:3000/siginup',
			lastModified: new Date(),
		},
		{
			url: 'http://app.localhost:3000/expenses',
			lastModified: new Date(),
		},
		{
			url: 'http://app.localhost:3000/income',
			lastModified: new Date(),
		},
		{
			url: 'http://app.localhost:3000/investments',
			lastModified: new Date(),
		},
		{
			url: 'http://app.localhost:3000/settings',
			lastModified: new Date(),
		},
	];
}
