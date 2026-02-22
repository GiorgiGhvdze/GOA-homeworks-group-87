lst = [5,6,8,7,10,10,9,10,7,8,5]

new = list(map(lambda x: x, lst))
sashualo = sum(new) / len(new)
even =  list(filter(lambda x: x % 2 == 0,lst))
odd = list(filter(lambda x: x % 2 != 0,lst))
print("ლუწუა: ", even)
print("კენტია: ", odd)

