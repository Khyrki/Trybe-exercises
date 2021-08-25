from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):

    @abstractmethod
    def calcular_area(self):
        raise ValueError('errou!')

    @abstractmethod
    def calcular_perimetro(self):
        raise ValueError('errou!')
