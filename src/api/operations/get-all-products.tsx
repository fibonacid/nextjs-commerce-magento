import { GetAllProductsQueryVariables, ProductsFragment } from "src/schema";
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

async function getAllProducts({
  query = getAllProductsQuery,
  variables,
}: {
  query?: String;
  variables?: GetAllProductsQueryVariables;
}): Promise<ProductsFragment> {
  // Return mocked data until we figure out a fetch strategy
  return {
    __typename: "Products",
    items: [{ __typename: "VirtualProduct", name: "test" }],
  };
}

export default getAllProducts;
