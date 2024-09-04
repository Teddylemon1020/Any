import gameLogic
import enableUserRandom
allowBangkero = False
#create button to be selected as bangkero 
yes = True
No = False
requestSwitchRoles = False
#create button to request switch roles

def paBangkero():

   if enableUserRandom.firstPlayer == True: #first player in the server automatic bangkero
     allowBangkero = True
   elif requestSwitchRoles == True & gameLogic.Ingame == False:
     print("Do you want to switch")
     if yes: #create button for yes and No 
       print("You are now the Bangkero")
       allowBangkero = True
     elif No:
       allowBangkero = False
     else:
       allowBangkero = False
   else:
     allowBangkero = False

def Power():
  pass

