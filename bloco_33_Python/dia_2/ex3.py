from abc3 import FiguraGeometrica


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def calcular_area(self):
        return self.lado ** 2

    def calcular_perimetro(self):
        return self.lado * 4


novo_quadrado = Quadrado(12)

""" print(novo_quadrado.calcular_area())
print(novo_quadrado.calcular_perimetro())
 """


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return 3.14 * self.raio ** 2

    def calcular_perimetro(self):
        return 2 * 3.14 * self.raio


novo_circulo = Circulo(5)
print(novo_circulo.calcular_area())
print(novo_circulo.calcular_perimetro())