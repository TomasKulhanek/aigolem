import sys
import re

def find_string_in_apostrophes(text):
    # This regex will match a string enclosed in apostrophes
    match = re.search(r"'(.*?)'", text)
    return match.group(1) if match else None


# Check if at least one argument is provided
if len(sys.argv) > 1:
    first_argument = sys.argv[1]    
    with open(first_argument, 'r') as file:
        for current_line_number, line in enumerate(file, start=1):
            line_content = find_string_in_apostrophes(line.strip())
            print(line_content)
else:
    print("No argument provided.")



