import os
import matplotlib.pyplot as plt
import json
import schedule
import time

def func():
    # os.system("split -l 74 sample.txt")
    # os.system('dirpass -p "biG^rUN382%5" scp /home/ubuntu/code/xaa Administrator@99.90.189.7:/C:/Users/Administrator.WIN-E38NG63RP29/Desktop')
    # os.system("biG^rUN382%5")
    # os.system("scp /home/ubuntu/code/xab Administrator@99.90.189.7:/C:/Users/Administrator.WIN-E38NG63RP29/Desktop")
    
    # RUN HTTP SERVER FOR LOGS
    # os.system('python3 -m http.server 8000')
    
    # RUN HTTP SERVER FOR LOGS
    # os.system('sshpass -p "biG^rUN382%5" ssh Administrator@99.90.189.7 cd C:/Users/Administrator.WIN-E38NG63RP29/Downloads/inotify-win-master/inotify-win-master && .\inotifywait.exe -e create,delete,modify,move -mrq C:\Files >> create.txt')

    # DISPLAY PIE CHART
    os.system('cd frontend && python3 -m http.server 9999')
    
    # RUN PYTHON FILE ON SNS MACHINE
    os.system('sshpass -p "biG^rUN382%5" ssh Administrator@99.90.189.7 python Desktop/space.py')

    # GET SAMPLE.JSON FILE FROM SNS WINDOWS TO UBUNTU
    os.system('sshpass -p "biG^rUN382%5" scp Administrator@99.90.189.7:/C:/Users/Administrator.WIN-E38NG63RP29/Desktop/sample_json.json /home/ubuntu/code/frontend')
    
    # GET LOGS FROM SNS MACHINE TO UBUNTU i.e. GET CREATE.TXT
    os.system('sshpass -p "biG^rUN382%5" scp Administrator@99.90.189.7:/C:/Users/Administrator.WIN-E38NG63RP29/Downloads/inotify-win-master/inotify-win-master/create.txt /home/ubuntu/code')

    # C:\Users\Administrator.WIN-E38NG63RP29\Downloads\inotify-win-master\inotify-win-master\create.log
    dictionary = json.load(open('./frontend/sample_json.json', 'r'))

    # Pie chart, where the slices will be ordered and plotted counter-clockwise:
    labels = [key for key,value in dictionary.items()]
    sizes = [value for key,value in dictionary.items()]
    explode = (0, 0)  # only "explode" the 2nd slice (i.e. 'Hogs')

    fig1, ax1 = plt.subplots()
    ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%')
    ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

    plt.show()

    plt.savefig('./frontend/graph.png')
    print("  used= ",sizes[0], "free= ",sizes[1])

    # STORE FILE CREATE.TXT TO VEDANT
    os.system('cat /home/ubuntu/code/create.txt >> vedant')
    with open('vedant', 'r', encoding='utf-8', errors='ignore') as fdata:
        print(fdata.read())

schedule.every(2).seconds.do(func)

while True:
	schedule.run_pending()
	time.sleep(1)

