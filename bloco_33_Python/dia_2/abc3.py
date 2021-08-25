from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):

    @abstractmethod
    def calcular_area():
        raise ValueError('errou!')

    @abstractmethod
    def calcular_perimetro():
        raise ValueError('errou!')
