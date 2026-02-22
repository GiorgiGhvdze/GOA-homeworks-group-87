animals = ["cat", "dog", "elephant", "ant"]

new = list(filter(lambda x: len(x)>3, animals))

print(new)