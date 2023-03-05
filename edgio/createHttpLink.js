import { createHttpLink as edgioCreateHttpLink } from '@edgio/apollo'
import { createHttpLink as ogCreateHttpLink } from 'original-apollo-link-http'

/*

This createHttpLink wrapper replaces all imports of the apollo-link-http
createHttpLink module by way of the @edgio/vue-storefront/module webpack
transform.

The purpose of this module is to predefine which graphql operations to
convert to HTTP GET. By changing the requests to GET, we can cache them
for quicker responses later.

If you need to change or expand which operations to cache, you only need to
modify the `convertOperationsToGet` array property below.

*/
export function createHttpLink(config) {
  return edgioCreateHttpLink(
    {
      ...config,
      convertOperationsToGet: ['products', 'categories'],
    },
    ogCreateHttpLink
  )
}
