

export async function getAllProducts() {
    const ProductsRes = await fetch('https://fakestoreapiserver.reactbd.com/tech')
    return ProductsRes.json()
}


