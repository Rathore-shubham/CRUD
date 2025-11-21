# d = { 
#     "name": "shubham",
#     "age": 22
# }

# d["city"] = "Indore" #add
# d["age"] = 23 #update
# # d.pop("city") #delete
# # d.get("name") #safe access
# d.keys(), #d.values(), d.items()

# # reverse string
# s = "shubham"
# rev = ""

# for char in s:
#     rev = char + rev

# print(rev)


# s = "shubhamRathore"
# vowels = "aeiouAEOIU"
# count = 0

# for ch in s: 
#     if ch in vowels:
#         count += 1
        
# print(count)



nums = [10,2,5,2,3,3]

# largest = nums[0]

# for n in nums: 
#     if n > largest: 
#         largest = n
        
        
        
        
# print(largest)
unique = []

for n in nums:
    if n not in unique:
        unique.append(n)
            
print(unique)



s = "level"
is_palin = True

i = 0
j = len(s) - 1

while i < j:
    if s[i] != s[j]:
        is_palin = False
        break
    i += 1
    j -= 1
    
print(is_palin)


nums = [1, 2, 3, 4, 5, 6]
total = 0

for n in nums:
    if n % 2 == 0:
        total += n

print(total)



n = 12
is_prime = True

if n < 2:
    is_prime = False
else: 
    i = 2
    while i * i <= n:
        if n % i == 0:
            is_prime = False
            break
        i += 1
        
        
print(is_prime)