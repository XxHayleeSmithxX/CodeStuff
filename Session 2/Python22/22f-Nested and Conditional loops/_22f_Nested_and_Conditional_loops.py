initialSalesGoal = 20000
multiplier = 100
offMonth = True

for monthlyGoal in range(1,13):
    if monthlyGoal == 6 and offMonth:
        print("No goal for month 6")
        continue
    monthlySalesGoal = initialSalesGoal + (monthlyGoal * multiplier)

    print("Your sales goal for month " + str(monthlyGoal) + " is " + str(monthlySalesGoal))
    for weeklyGoal in range(1,5):
        print("Your goal for week " + str(weeklyGoal) + " is " + str(monthlySalesGoal/4))
print("Good luck with your goals.")
