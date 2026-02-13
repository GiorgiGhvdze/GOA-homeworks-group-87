#1

fruits = ["apple", "banana", "cherry", "kiwi"]

fruits.sort(key=len)

print(fruits)

#2

fruits = ["apple", "banana", "cherry", "kiwi"]

fruits.sort(key=lambda items: len(items))

print(fruits)