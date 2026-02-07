nums = [10, 20, 30, 40]

try:
    indx = int(input("Enter a number: "))
    print(nums[indx])
except IndexError:
    print("ასეთი ინდექსი არ არსებობს")