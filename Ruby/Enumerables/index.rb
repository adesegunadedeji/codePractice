
# In this challenge, you have been provided with a custom object 
# called colors that defines its own each method. 
# You need to iterate over the items and return an Array containing the values.

colors = ["red", "blue", "green"]
def iterate_colors(colors)
  # Your code here
    arr = Array.new 
    colors.each {|index| arr<< index}
        return arr
end

# def iterate_colors(colors)s
#     return colors.to_a
# end


puts iterate_colors colors
# In this challenge, your task is to complete the skip_animals method that takes an animals array and a skip integer 
# and returns an array of all elements except first skip number of items as shown in the example below.
def skip_animals(animals, skip)
    # Your code here
      arr = Array.new
      animals.each_with_index {|item, index| arr<<"#{index}:#{item}" if index >= skip}
      return arr
      
  end