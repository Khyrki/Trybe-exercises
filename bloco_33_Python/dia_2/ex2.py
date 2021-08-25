class Estatistica:

    def media(list):
        soma = 0
        for numero in list:
            soma = soma + numero
        media = soma / len(list)
        return media

    def mediana(list):
        list.sort()
        ponto_medio = len(list)//2
        if len(list) % 2 == 0:
            sum = list[ponto_medio] + list[ponto_medio - 1]
            return (sum/2)
        return list[ponto_medio + 0.5]

    def moda(list):
        moda = list[0]
        contador_1 = 0
        contador_2 = 0
        for numero in list:
            for index in range(len(list)):
                if numero == list[index]:
                    contador_1 += 1
            if contador_1 > contador_2:
                moda = numero
                contador_2 = contador_1
                contador_1 = 0
        return moda


moda = Estatistica.moda([1, 2, 3, 4, 5, 5, 5, 8, 9, 10])
print(moda)
