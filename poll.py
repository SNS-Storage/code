from polling import TimeoutException, poll

file_handle = poll(
    lambda: open('/main.py'),
    ignore_exceptions=(IOError,),
    timeout=3,
    step=0.1)

file_handle.close()