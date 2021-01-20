import { productsFragment } from "../fragments/products";

export const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts(
    $search: String
    $filter: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    products(
      search: $search
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
    ) {
      ...products
    }
  }
  ${productsFragment}
`;
