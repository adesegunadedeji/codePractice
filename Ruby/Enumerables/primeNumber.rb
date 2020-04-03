
# def prime?(number)
    
#     return false if number <=1
#     return true if number <= 3
#     return false if number % 2 == 0 || number % 3 == 0 
    
#     i = 5
#     j = 2
#     while i*i <= number
#         return false if number % i == 0
#         i += j
#         j = 6 - j
#     end
#     return true
# end

# puts prime?(30)


def take(arr, len)
    arr.shift(len)
    return arr
end
arr = [1,2,3]