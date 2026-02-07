prices = {"apple": 2, "banana": 3}

try:
    product = input("Enter a name of a product: ")
    print(prices[product])
except KeyError:
    print("ასეთი პროდუქტი ვერ მოიძებნა")