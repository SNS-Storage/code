import shutil
import schedule
import time

def convert_bytes(bytes_number):
    tags = [ "Byte", "Kilobyte", "Megabyte", "Gigabyte", "Terabyte" ]
    i = 0
    double_bytes = bytes_number
 
    while (i < len(tags) and  bytes_number >= 1024):
            double_bytes = bytes_number / 1024.0
            i = i + 1
            bytes_number = bytes_number / 1024

    return str(round(double_bytes, 2)) + " " + tags[i]

def func():
    total, used, free = shutil.disk_usage(__file__)
    total = convert_bytes(total)
    used = convert_bytes(used)
    free = convert_bytes(free)
    

# import ctypes
# import os
# import platform
# import sys

# sshpass -p "biG^rUN382%5" ssh Administrator@99.90.189.7

# def get_free_space_mb(dirname):
#     """Return folder/drive free space (in megabytes)."""
#     if platform.system() == 'Windows':
#         free_bytes = ctypes.c_ulonglong(0)
#         ctypes.windll.kernel32.GetDiskFreeSpaceExW(ctypes.c_wchar_p(dirname), None, None, ctypes.pointer(free_bytes))
#         return free_bytes.value / 1024 / 1024
#     else:00
#         st = os.statvfs(dirname)
#         return st.f_bavail * st.f_frsize / 1024 / 1024

# get_free_space_mb("/home/ubuntu/")

schedule.every(5).seconds.do(func)

while True:
	schedule.run_pending()
	time.sleep(1)   