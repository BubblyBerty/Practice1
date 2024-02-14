cardValue = "Kings"
suitOfCards = "Hearts"

"Predict, then Run, and then Investigate"
chkCardValue = input("Enter card value: ").title()

chkCardSuit = input("Enter card suit: ").title()


if cardValue == chkCardValue and suitOfCards == chkCardSuit:
    print("Winner!")
    if cardValue == "Kings":
        print("The value is Kings")
else:
    print("Try Again")


"Modify"
"To Do: Exercise"
# Modify the code above to use the "or" operator, or the "not" operator with the and operator

if cardValue == chkCardValue or suitOfCards == chkCardSuit:
    print("Halfway there!")
    if cardValue == "Kings":
        print("The value is Kings")
        if cardValue == "Hearts":
            print("The value is Hearts")
else:
    print("Try Again")

# not(x < 5 and x < 10)
if not(cardValue == chkCardValue and suitOfCards == chkCardSuit):
    print("Haha! I have cunningly taking you down a misleading path 1")
    if cardValue == "Kings":
        print("Haha! I have cunningly taking you down a misleading path 2")
        if cardValue == "Hearts":
            print("Haha! I have cunningly taking you down a misleading path 3")
else:
    print("Winner!")