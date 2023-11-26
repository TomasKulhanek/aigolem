import random
import sys

# Check if at least one argument is provided
if len(sys.argv) > 1:
    first_argument = sys.argv[1]    
    for i in range(1,26):
        random_number = random.randint(4, 55644)        
        with open(first_argument, 'r') as file:
            for current_line_number, line in enumerate(file, start=1):
                if current_line_number == random_number:
                    line_content = line.strip()
                    print(line_content)
                    break


else:
    print("No argument provided.")



