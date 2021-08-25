from abc4 import ManipuladorDeLog


class LogEmArquivo(ManipuladorDeLog):
    def log(msg):
        print(f"em arquivo {msg}")


class LogEmTela(ManipuladorDeLog):
    def log(msg):
        print(f"em tela {msg}")


class Log:
    def __init__(self, manipuladores):
        self.manipuladores = manipuladores

    def __formatar(self, severidade, msg):
        return f"{severidade} - {msg}"

    def __log(self, severidade, msg):
        for manipulador in self.manipuladores:
            manipulador.log(self.__formatar(severidade, msg))

    def info(self, msg):
        self.__log("INFO", msg)

    def alerta(self, msg):
        self.__log("ALERTA", msg)

    def erro(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)


logs = Log([LogEmArquivo, LogEmTela])

logs.info('deu ruim aqui')