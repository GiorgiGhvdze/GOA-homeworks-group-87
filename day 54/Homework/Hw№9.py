products = [{"name": "პური", "price": 1.2}, {"name": "რძე", "price": 4.5}, {"name": "ყველი", "price": 12.0}]

products.sort(key=lambda product: product["price"])

print(products)