# def sum(num)
#     if (num <= 0)
#         return 0
#     end
#     return num + sum(num-1)
# end
# puts sum(4)


# findMax

# function findMax(arr){
#     let max = 0;
#     for (let i = 0; i< arr.length;i++){
#         if (arr[i]> max){
#             max = arr[i]
#         };
#     }
#     return max;
# }
# console.log("FINDMAX",findMax([10,8,6,30]))



# x = [1,2]

# #puts x


# puts x.shift(1) 

# h = Hash.new
# #h.default = 0
# #h.store(key,val)
# #h.store("Name","Adesegn")
# h["name"]="Adesegun"

# puts h

# hash_val = Hash.new
# hash_val.store(543121, 100)
# puts hash_val
# hash = hash_val.keep_if {|key,val| key is_a? Integer}
# puts hash


# def plus_1(y)
#     x = 100
#     y.call       #remembers the value of x = 1
#  end

#  x = 1
#  y = -> { x + 1 }
#  puts plus_1(y)  #2

colors = ["red", "blue", "green"]
def iterate_colors(colors)
  # Your code here
    arr = Array.new 
    colors.each {|index| arr<< index}
        return arr
end

# def iterate_colors(colors)
#     return colors.to_a
# end


puts iterate_colors colors
