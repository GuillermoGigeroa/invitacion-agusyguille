def execute(command):
    import os
    os.system(command)

def clear(): 
    execute('clear | cls')

def build():
    execute('npm run build')

def addAll():
    execute('git add .')

def commit():
    execute('git ci -m "Se agrega nueva versión con cambios"')

def push():
    execute('git push')

def __init__():
    build()
    addAll()
    commit()
    push()

__init__()