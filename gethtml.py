from bs4 import BeautifulSoup

with open('input.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

soup = BeautifulSoup(html_content, 'html.parser')

for tag in soup.find_all(True):
    tag.attrs = {}

with open('output.html', 'w', encoding='utf-8') as file:
    file.write(str(soup))

print("Đã loại bỏ tất cả thuộc tính khỏi các thẻ HTML và lưu vào file 'output.html'.")
