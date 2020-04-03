h = {"a" => 1, "b" => 2, "c" => "TEST"}
puts h
puts h.find {|key, value| key == "b"}
puts h.any? {|key, value| value.is_a? String}

def func_all(hash)
    # Check and return true if all the values within the hash are Integers and are < 10
    # If not all values satisfy this, return false.
    hash.all? {|key,val| val.is_a? Integer}
end

hash = {"a" => 1, "b"=> 2, "c" => "TEST"}
puts func_all hash


def func_any(hash)
    # Check and return true if any key object within the hash is of the type Integer
    # If not found, return false.
    hash.any? {|key,val| key.is_a? Integer}
end

def func_all(hash)
    # Check and return true if all the values within the hash are Integers and are < 10
    # If not all values satisfy this, return false.
    hash.all? {|key, val| val.is_a?(Integer) && val < 10}
end

def func_none(hash)
    # Check and return true if none of the values within the hash are nil
    # If any value contains nil, return false.
    hash.none? {|key,val| val.nil?}
end

def func_find(hash)
    # Check and return the first object that satisfies either of the following properties:
    #   1. There is a [key, value] pair where the key and value are both Integers and the value is < 20 
    hash.find {|key,val| ([key,val].all?(Integer) && val < 20) || ([key,val].all?(String) && val.start_with?('a'))}
    #   2. There is a [key, value] pair where the key and value are both Strings and the value starts with `a`.
end


def group_by_marks(marks, pass_marks)
    
    # your code here
      marks.group_by {|key, val| val >= pass_marks ? 
    
"Passed" : "Failed" }
  end
  marks = {"Ramesh":23, "Vivek":40, "Harsh":88, "Mohammad":60}

  puts group_by_marks(marks, 30)
