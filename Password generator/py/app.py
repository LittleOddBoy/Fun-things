import random

def generate_random_range(start, end, count):
  for _ in range(count):
    yield random.randint(start, end)

def generate_password_codes():
  # Special chars
  yield from generate_random_range(33, 47, 4)

  # Numbers
  yield from generate_random_range(48, 57, 4)

  # Uppercase Letters
  yield from generate_random_range(65, 90, 4)

  # Lowercase Letters 
  yield from generate_random_range(97, 122, 4)

def randomize_string(str):
  str_list = list(str)
  random.shuffle(str_list)
  return "".join(str_list)

# Generate the password
password_codes = generate_password_codes()
password = ''.join(chr(code) for code in password_codes)
password = randomize_string(password)

print(password)