from abc import ABC, abstractmethod


class ManipuladorDeLog(ABC):

    @abstractmethod
    def log():
        return ValueError('errou!')

