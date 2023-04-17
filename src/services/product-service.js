import apiFetch from "./api-fetch";

export async function getAllProducts() {
  const products = await apiFetch("products");
  return products;
}

export async function getProduct(id) {
  const product = await apiFetch(`products/${id}`);
  return product;
}

export async function createProduct(newDish) {
  const product = await apiFetch("products", {
    body: newDish,
  });
  return product;
}

export async function editProduct(id, updatedDish) {
  const product = await apiFetch(`products/${id}`, {
    method: "PUT",
    body: updatedDish,
  });
  return product;
}

export async function deleteProduct(id) {
  const product = await apiFetch(`products/${id}`, {
    method: "DELETE",
  });
  return product;
}


