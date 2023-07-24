import  sanityClient from '@sanity/client';
import  imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'vbsk5ojy',
    dataset: 'production',
    apiVersion: '2023-07-24',
    useCdn: true,
    token: 'sklYxdL07XvFMhOUTxqhOgWkwxGkkrjnEToz8LlrEuI2n8kxvatAJRdzA0uYzMEiGZyPsIVhGrLdiDIxeJawwc2kRe73zx3F3xbe2oCoKX6F3pVTvSqzMqykSS4NI68FVgBZfHOBfOZ5LZcgs1QU10mxZKC7WTNUbjANNXRIBEeumeqrcenl',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);