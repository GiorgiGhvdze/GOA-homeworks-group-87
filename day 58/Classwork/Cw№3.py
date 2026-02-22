nums = [i for i in range(1,101)]
nums1 = [i for i in range(1,51)]

new = list(filter(lambda x: x in nums1, nums))

print(new)