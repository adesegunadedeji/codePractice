
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

#   write a method which takes a strings 
#   (containing secret enemy message bits!) and decodes its elements 
#   using ROT13 cipher system; returning an array containing the final messages.

  def rot13(secret_messages)
    # your code here
      arr = Array.new
      secret_messages.split(" ").map{|string| arr<<string.tr("a-z", "n-za-m")}
      return arr
  end
  secret_messages = "The world is Mine"
  puts rot13(secret_messages)


  #def rot13(secret_messages)
  # your code here
  def rot132(secret_messages)
  secret_messages.split(" ").collect{|string| string.tr("a-z", "n-za-m")}
end

puts rot132(secret_messages)


# Consider an arithmetico-geometric sequence where the  term of the
#  sequence is denoted by . In this challenge, your task is to complete the sum method 
# which takes an integer n and returns the sum to the n terms of the series.
def sum_terms(n)
    # your code here
      if n >= 0
        ans = (0..n).inject {|sum,val| sum += val**2 + 1}
        return ans
      else 
          return
      end
  end

  puts sum_terms(25)

  puts #n

  h = {"a" => 1, "b" => 2, "c" => 3}
  puts h
  puts h.none? {|key, value| key == "b"}