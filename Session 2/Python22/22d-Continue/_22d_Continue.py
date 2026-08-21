initialSalesGoal = 20000
multiplier = 100

for monthlyGoal in range(1,13):
    if monthlyGoal == 6:
        print("No goal for month 6")
        continue
        
    monthlySalesGoal = initialSalesGoal + (monthlyGoal * multiplier)

    print("Your sales goal for month " + str(monthlyGoal) + " is " + str(monthlySalesGoal))

print("Good luck with your goals.")
