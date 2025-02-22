import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'iva4x2k4',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-02-22'
});
