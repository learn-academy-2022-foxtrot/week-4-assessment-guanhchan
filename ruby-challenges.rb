# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def num_check_eve_or_odd num
    if(num.even?)
        p "#{num} is even"
    elsif(num.odd?)
        p "#{num} is odd"
    end
end

num_check_eve_or_odd num1

num_check_eve_or_odd num2

num_check_eve_or_odd num3

# Great it worked as expected

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_remover string
    string.delete "aeiouAEIOU"
end

p vowel_remover beatles_album1

p vowel_remover beatles_album2

p vowel_remover beatles_album3

# Great!, The link was helpful thank you. =)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_checker string
    if string == string.reverse
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end

palindrome_checker(palindrome_tester1)

palindrome_checker palindrome_tester2

palindrome_checker (palindrome_tester3)

# Yay done with ruby challenges.