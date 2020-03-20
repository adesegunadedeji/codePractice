# Hash Tables in Ruby
BUCKETS = 32

def hash(input)
  input.to_s.chars.inject(0) { |sum, ch| sum + ch.ord } % BUCKETS
end





#Misc
puts 'a'.ord;
puts 'a'.chars.inject(0) { |sum, ch| sum + ch.ord },  "with inject Method"