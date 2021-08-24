class TV():
    def __init__(self):
        self.volume = 50
        self.canal = 1
        self.tamanho = 29
        self.ligada = False

    def aumenta_volume(self):
        self.volume += 1

    def diminuir_volume(self):
        self.volume -= 1

    def modificar_canal(self, canal):
        self.canal = canal

    def ligar_desligar(self):
        self.ligada = not self.ligada
