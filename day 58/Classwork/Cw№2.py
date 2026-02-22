nums = [i for i in range(1,101)]

new = list(filter(lambda x: x % 2 == 0, nums))

print(new)