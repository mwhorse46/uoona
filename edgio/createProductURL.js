import { createApolloURL } from '@edgio/apollo'
import { apolloClient, getSettings } from '@vue-storefront/commercetools-api'
import { buildProductWhere } from '@vue-storefront/commercetools-api/src/helpers/search'
import defaultQuery from '@vue-storefront/commercetools-api/src/api/getProduct/defaultQuery'

/*

Builds a query URL for apollo to obtain product data during prefetching

You can wrap product links to prefetch with the @edgio/vue `Prefetch` component.

e.g.

<Prefetch :url="createProductURL(product)">
  <nuxt-link />
</Prefetch>

*/
export default function createProductURL({ _id }) {
  const { locale, acceptLanguage, currency, country } = getSettings()
  const variables = {
    where: buildProductWhere({ id: _id }),
    locale,
    acceptLanguage,
    currency,
    country,
  }
  return createApolloURL(apolloClient, defaultQuery, variables)
}
