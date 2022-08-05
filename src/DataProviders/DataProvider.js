export class EcommerceDataProvider {
  getAllCategoriesData = async () => {
    return await fetch("https://fakestoreapi.com/products/categories");
  };

  getAllProductsCategoryWise = async (product) => {
    return await fetch("https://fakestoreapi.com/products/category/" + product);
  };
  getAllProducts = async () => {
    return await fetch("https://fakestoreapi.com/products");
  };

  getSingleProductDetails = async (id) => {
    return await fetch("https://fakestoreapi.com/products/" + id);
  };
}
