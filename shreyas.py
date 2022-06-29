import os
##os.system('cat /home/ubuntu/code/create.txt > vedant')


with open('vedant', 'r', encoding='utf-8', errors='ignore') as fdata:
    print(fdata.read())