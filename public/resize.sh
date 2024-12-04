#!/bin/bash

# Directory containing images (default to current directory)
DIR=${1:-.}

# Delete all existing .webp files
echo "Deleting existing .webp files in $DIR..."
find "$DIR" -type f -name "*.webp" -exec rm {} \;

# Process .jpg and .png images
echo "Processing .jpg and .png images in $DIR..."
find "$DIR" -type f \( -name "*.jpg" -o -name "*.png" \) | while read -r FILE; do
    echo "Resizing $FILE..."
    # Create a resized version with sips
    sips --resampleHeight 800 "$FILE" >/dev/null 2>&1

    # Convert the resized file to .webp
    WEBP_FILE="${FILE%.*}.webp"
    echo "Converting $FILE to $WEBP_FILE..."
    cwebp -q 80 "$FILE" -o "$WEBP_FILE"
done

echo "All tasks completed."