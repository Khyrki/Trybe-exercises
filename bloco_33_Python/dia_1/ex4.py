names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def find_bigger_name(names):
    bigger_name = names[0]
    for name in names:
        if len(name) > len(bigger_name):
            bigger_name = name
    print(bigger_name)


find_bigger_name(names)
