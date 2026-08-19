regions = ["north", "south", "east", "west"]
sales = [30000, 20000, 40000, 35000]
employees = ["Alice", "Vera", "Flow", "Mel"]

print("Region: ", regions[0], " Sales: ", sales[0])
print("Region: ", regions[-1], " Sales: ", sales[-1])

employees[2] = "Belle"

for employee in employees:
    print(employee)