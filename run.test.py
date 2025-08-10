import os
import re
import pyttsx3
import markdown
from bs4 import BeautifulSoup

SOURCE_DIR = "content/docs"
OUTPUT_DIR = "public/audio/markdown"

def mdx_to_text(mdx_content):
    mdx_content = re.sub(r"<[^>]+>", "", mdx_content)
    html_content = markdown.markdown(mdx_content)
    soup = BeautifulSoup(html_content, "html.parser")
    return soup.get_text(separator=" ")

def extract_title(mdx_content):
    match = re.search(r"title:\s*(.+)", mdx_content)
    if match:
        title = match.group(1).strip()
        return title.strip('"').strip("'")
    return "untitled"

def slugify_title(title):
    words = title.split()
    if len(words) > 2:
        return "-".join(word.lower() for word in words)
    return title.lower()

def process_mdx_file(file_path, output_path, engine):
    with open(file_path, "r", encoding="utf-8") as f:
        mdx_content = f.read()

    title = extract_title(mdx_content)
    file_name = slugify_title(title) + ".mp3"

    text = mdx_to_text(mdx_content)
    os.makedirs(output_path, exist_ok=True)
    audio_path = os.path.join(output_path, file_name)

    engine.save_to_file(text, audio_path)
    print(f"✅ Đã tạo: {audio_path}")

def main():
    engine = pyttsx3.init()  # 🔹 Chỉ khởi tạo 1 lần
    for root, _, files in os.walk(SOURCE_DIR):
        for file in files:
            if file.endswith(".mdx"):
                relative_dir = os.path.relpath(root, SOURCE_DIR)
                output_path = os.path.join(OUTPUT_DIR, relative_dir)
                process_mdx_file(os.path.join(root, file), output_path, engine)

    engine.runAndWait()  # 🔹 Chạy tất cả queue 1 lần
    engine.stop()  # 🔹 Đảm bảo giải phóng bộ nhớ

if __name__ == "__main__":
    main()
