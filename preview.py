import os
html = """
<html>
<body>
<h1>Images</h1>
"""

images = {
  "1708542342224": "https://backup.kutehospital.com/wp-content/uploads/2024/02/1708542342224.jpg",
  "exterior (im-1536x864)": "https://backup.kutehospital.com/wp-content/uploads/2024/02/im-1536x864.jpg",
  "IMG_9901": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9901-1024x683.jpg",
  "IMG_9643": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9643-1024x683.jpg",
  "IMG_9680": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9680-1024x683.jpg",
  "IMG_9858": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9858-768x512.jpg",
  "IMG_9877": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9877-768x512.jpg",
  "IMG_9865": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9865-768x512.jpg",
  "IMG_9927": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9927-768x512.jpg",
  "IMG_9726": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9726-768x512.jpg",
  "IMG_9870": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9870-768x512.jpg",
  "IMG_9717": "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9717-768x512.jpg",
}

for name, url in images.items():
    html += f"<h3>{name}</h3><img src='{url}' width='400'><br>"

html += "</body></html>"
with open("test-images.html", "w") as f:
    f.write(html)

