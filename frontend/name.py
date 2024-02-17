import os

# 指定你想列出文件的目录
directory = "C:\\Users\\ICE Terminal Tech\\Desktop\\git\\TFT_recorder\\frontend\\portal_icon"

# 遍历该目录
for filename in os.listdir(directory):
    if os.path.isfile(os.path.join(directory, filename)):
        print(filename)
