def execute(command):
    import os
    os.system(command)

def clear():
    execute('cls')

def clean():
    clear()
    print('Se deben limpiar archivos del proyecto. Presione S para continuar...')
    execute('rmdir /s .angular')

def __init__():
    clean()

__init__()