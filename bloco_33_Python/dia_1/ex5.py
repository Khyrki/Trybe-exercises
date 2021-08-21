import math


def calculate__amount_of_ink(footage):
    paint_cans = footage / 54
    print(math.ceil(paint_cans))
    return (math.ceil(paint_cans), 80 * math.ceil(paint_cans))


calculate__amount_of_ink(55)
