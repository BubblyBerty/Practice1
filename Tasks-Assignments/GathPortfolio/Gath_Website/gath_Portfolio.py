from flask import Flask
#import xlwings as xw
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello me old mucker!"


#@app.route("/home")


    
#    return src=".\gath_Home.html"
#    return noteStates

# https://stackoverflow.com/questions/29987323/how-do-i-send-data-from-js-to-python-with-flask
# https://www.youtube.com/watch?v=6M3LzGmIAso

#def gath_Scales_Modes(noteStates):
#    Ab = noteStates[1]
#    A = noteStates[2]


#    wb = xw.Book.caller()
#    sheet = wb.sheets[0]
#    if sheet["A1"].value == "Hello xlwings!":
#        sheet["A1"].value = "Bye xlwings!"
#    else:
#        sheet["A1"].value = "Hello xlwings!"

#    wb = xw.Book.caller()
#    sheet = wb.sheets[0]
#    if sheet["D3"].value == 0:
#        sheet["D3"].value = 1
#    else:
#        sheet["D3"].value = 0


#@xw.func
#def hello(name):
#    return f"Hello {name}!"


#if __name__ == "__main__":
#    xw.Book("Tasks-Assignments\GathPortfolio\Gath_Website\gath_Scales_Modes.xlsm").set_mock_caller()
#    main()