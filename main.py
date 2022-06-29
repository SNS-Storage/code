
import os
import matplotlib.pyplot as plt
import json



# os.system("split -l 74 sample.txt")
# os.system('sshpass -p "biG^rUN382%5" scp /home/ubuntu/code/xaa Administrator@99.90.189.7:/C:/Users/Administrator.WIN-E38NG63RP29/Desktop')
# os.system("biG^rUN382%5")
# os.system("scp /home/ubuntu/code/xab Administrator@99.90.189.7:/C:/Users/Administrator.WIN-E38NG63RP29/Desktop")

# RUN PYTHON SCRIPT ON SNS MACHINE FOR CALCULATING SPACE IN THAT SYSTEM
os.system('sshpass -p "biG^rUN382%5" ssh Administrator@99.90.189.7 python Desktop/space.py')

# TRANSFER JSON FILE FROM SNS TO UBUNTU
os.system('sshpass -p "biG^rUN382%5" scp Administrator@99.90.189.7:/C:/Users/Administrator.WIN-E38NG63RP29/Desktop/sample_json.json /home/ubuntu/code')

dictionary = json.load(open('sample_json.json', 'r'))

# Pie chart, where the slices will be ordered and plotted counter-clockwise:
labels = [key for key,value in dictionary.items()]
sizes = [value for key,value in dictionary.items()]
explode = (0, 0)  # only "explode" the 2nd slice (i.e. 'Hogs')

fig1, ax1 = plt.subplots()
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%')
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.show()
plt.savefig('pie3.png')


# import os

# os.system("python3 main-copy.py")
# os.system('python3 -m http.server 8000')


