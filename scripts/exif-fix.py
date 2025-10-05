import os
from pathlib import Path
from PIL import Image, ImageOps

def fix_image_orientation(root_dir: str, output_dir: str, extensions=None):
    """
    Recursively fix EXIF orientation for images in a directory.
    Saves into a parallel 'fixed' folder with the same subdirectory structure.

    Args:
        root_dir (str): Path to the root directory to scan.
        output_dir (str): Path where fixed images will be saved.
        extensions (list[str]): File extensions to process.
    """
    if extensions is None:
        extensions = [".jpg", ".jpeg", ".png", ".webp"]

    root_path = Path(root_dir).resolve()  # Make paths absolute
    output_path = Path(output_dir).resolve()  # Make paths absolute

    # Ensure output directory exists
    output_path.mkdir(parents=True, exist_ok=True)

    for file_path in root_path.rglob("*"):
        # Skip the output directory
        if file_path.is_relative_to(output_path):
            continue

        if file_path.suffix.lower() in extensions and file_path.is_file():
            try:
                with Image.open(file_path) as img:
                    # Rotate/transpose based on EXIF, then strip EXIF orientation
                    img = ImageOps.exif_transpose(img)

                    # Build output path with same structure
                    relative_path = file_path.relative_to(root_path)
                    save_path = output_path / relative_path

                    # Make sure the output directory exists
                    save_path.parent.mkdir(parents=True, exist_ok=True)

                    # Save image with same filename
                    img.save(save_path, quality=95)
                    print(f"✅ Fixed: {save_path}")
            except Exception as e:
                print(f"❌ Could not process {file_path}: {e}")

if __name__ == "__main__":
    source_dir = "./src/assets"        # change this to your input folder
    fixed_dir = "./src/assets/fixed"   # output folder

    fix_image_orientation(source_dir, fixed_dir)