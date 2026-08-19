regions = ["North", "South", "East", "West"]
sales = [30000, 20000, 40000, 35000]
employees = ["Alice", "Vera", "Flo", "Mel"]
locations = []

for employee in employees:
    print(employee)

employees.append("Belle")
employees.remove("Flo")
employees.sort()

for employee in employees:
    print(employee)