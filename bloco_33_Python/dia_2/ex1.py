class TV():
    def __init__(self):
        self.volume = 50
        self.canal = 1
        self.tamanho = 29
        self.ligada = False

    def aumenta_volume(self):
        if self.volume <= 99:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume >= 0:
            self.volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            self.canal = canal
        raise ValueError('Canal indisponível')

    def ligar_desligar(self):
        self.ligada = not self.ligada
