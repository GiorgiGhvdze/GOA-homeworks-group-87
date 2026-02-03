nums = [i for i in range(201)]

new_nums = [x for x in nums if x % 3 == 0 and x % 5 == 0]

print(new_nums)