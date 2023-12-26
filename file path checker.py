import os
import pandas as pd

# Get the user's home directory
user_home = os.path.expanduser("~")

# Specify the file name
file_name = 'ebay-to-shopify-database edited_nov5.xlsx'

# Construct the full file path
file_path = os.path.join(user_home, 'Desktop', file_name)

# Check if the file exists
if os.path.exists(file_path):
    # File exists, so read it using pandas
    df = pd.read_excel(file_path)
    print("File read successfully.")
else:
    # File does not exist
    print(f"File not found: {file_path}")

