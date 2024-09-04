"""assign user to different table and have simple structure of internal names as 
p1, p2, p3, p4 """ 
import gameLogic 

firstPlayer = False
maxPlayers = 5
amountofPlayers = 0
def joinlobby(): 
    amountofPlayers += 1
    if amountofPlayers == maxPlayers:
        print("Server MAX!!!")
    
    else:
        print("Joining Lobby")
def assignmentname():
    # create list to which players are assign and track the number of assignment of numbers in players
    pass
    


#containment for amount of players
