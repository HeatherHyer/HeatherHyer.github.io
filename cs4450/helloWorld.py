
def squareRoot(a):
    init = a/2
    prev = init
    cur = init
    while (cur - prev) is not machineEpsilon():
        total = (prev + (a/prev)) / 2
        prev = cur
        cur = total
    print(total)

def machineEpsilon(func=float):
    machine_epsilon = func(1)
    while func(1)+func(machine_epsilon) != func(1):
        machine_epsilon_last = machine_epsilon
        machine_epsilon = func(machine_epsilon) / func(2)
    return machine_epsilon_last

print(squareRoot(4))
print(sqrt(4))

input()
