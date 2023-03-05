import { createApolloURL } from '@edgio/apollo'
import { apolloClient, getSettings } from '@vue-storefront/commercetools-api'
import defaultQuery from '@vue-storefront/commercetools-api/src/api/getCategory/defaultQuery'

// This was just copied from commercetools-api. It was not exported.
// Simply a an apollo filter for categories
const buildCategoryWhere = (search, acceptLanguage) => {
  if (search?.catId) {
    return `id="${search.catId}"`
  }

  if (search?.slug) {
    const predicate = acceptLanguage.map(locale => `${locale}="${search.slug}"`).join(' or ')
    return `slug(${predicate})`
  }

  return undefined
}

/*

Builds a query URL for apollo to obtain category data during prefetching.

You can wrap category links to prefetch with the @edgio/vue `Prefetch` component.

e.g.

<Prefetch :url="createCategoryURL(category)">
  <nuxt-link />
</Prefetch>

*/

export default function createCategoryURL(category) {
  const { acceptLanguage } = getSettings()
  const variables = category
    ? {
        where: buildCategoryWhere(category, acceptLanguage),
        limit: category.limit,
        offset: category.offset,
        acceptLanguage,
      }
    : { acceptLanguage }
  return createApolloURL(apolloClient, defaultQuery, variables)
}
