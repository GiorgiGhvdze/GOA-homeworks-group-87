numbers = [1, 4, 7, 10, 13, 16, 19]

new_list1 = []

for i in numbers:
    if i % 2 != 0:
        new_list1.append(i*2)
        
        
new_list2 = [i*2 for i in numbers if i % 2 != 0]

print(new_list1)
print(new_list2)