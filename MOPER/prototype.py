from random import randint

def calc(string):
    lista = list()

    for item in string.split():
        if item.isnumeric():
            lista.append(int(item))

        else:
            lista.append(item)

    while len(lista) > 1:
        for index, item in enumerate(lista):
            if '*' in lista or '/' in lista:
                if item == '*':
                    num = lista[index-1] * lista[index+1]
                    
                    nova_lista = lista.copy()

                    for i in range(index+1, index-2, -1):
                        nova_lista.pop(i)

                    nova_lista.insert(index-1, num)
                    lista = nova_lista.copy()

                    break
            
                elif item == '/':
                    if lista[index+1] == 0:
                        return 0.1

                    num = lista[index-1] / lista[index+1]
                    
                    nova_lista = lista.copy()

                    for i in range(index+1, index-2, -1):
                        nova_lista.pop(i)

                    nova_lista.insert(index-1, num)
                    lista = nova_lista.copy()

                    break
            
            else:
                if item == '+':
                    num = lista[index-1] + lista[index+1]
                    
                    nova_lista = lista.copy()

                    for i in range(index+1, index-2, -1):
                        nova_lista.pop(i)

                    nova_lista.insert(index-1, num)
                    lista = nova_lista.copy()

                    break

                elif item == '-':
                    num = lista[index-1] - lista[index+1]
                    
                    nova_lista = lista.copy()

                    for i in range(index+1, index-2, -1):
                        nova_lista.pop(i)

                    nova_lista.insert(index-1, num)
                    lista = nova_lista.copy()

                    break

    
    return lista[0]


def rnumbers(value):
    string = ''

    ope = ['+', '-', '*', '/']

    for index in range(value):
        if value < 5:
            string += str((randint(1, 9)))

        else:
            string += str((randint(6, 13)))
        
        if index != value-1:
            string += f' {(ope[randint(0, 3)])} '


    return string


def check(value):
    if isinstance(value, int) and value > 0 and int(value) < 500000:
        return True

    elif str(value)[len(str(value))-2:] == '.0':
        if int(value) > 0 and int(value) < 500000:
            return True

        else:
            return False

    else:
        return False




while True:
    string = rnumbers(4)
    result = calc(string)
    boo = check(result)

    if boo:
        lista = []
        for item in string.split():
            if item.isnumeric():
                lista.append(int(item))
            

        print(lista)
        print(int(result))

        input()
        print()
        print(string)

        input()