import sanityClient, { SanityClient } from '@sanity/client'

export const client = SanityClient({
  projectId: 'soi999pz',
  dataset: 'production',
  apiVersion: '2024-03-27', // use current UTC date - see "specifying API version"!
  token:
    'sk3LIutGiL6XrrpOrWv43IWMORYejfzxHy2bLA5udXtp44ncIEHoINeIF5yFtDxAS0GreQTGC1imeXs53aOXdOFq232t7Os02Ie1xcZvN8SvJhvcOa0opXvEWEi0gE02UuAa4hKcciFceopdk6NRSD0lGBzpYSp5knwtYq6R7jWNiacgYJwB', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})




