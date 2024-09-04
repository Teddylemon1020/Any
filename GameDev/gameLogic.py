import random
import time

# Initialize game state
gameStart = False  # Simulate that the game has started
winningChar = None
rouletteRange = None
Loser = False 
color = None
Ingame = False

# Initialize players
# players = {
#     "player1": {"startingpoints": None, "selectedCharRoulette": None, "bettedAmount" : None, "characterStatus" : None},
#     "player2": {"startingpoints": None, "selectedCharRoulette": None, "bettedAmount" : None, "characterStatus" : None},
#     "player3": {"startingpoints": None, "selectedCharRoulette": None, "bettedAmount" : None, "characterStatus" : None},
#     "player4": {"startingpoints": None, "selectedCharRoulette": None, "bettedAmount" : None, "characterStatus" : None},
#     "player5": {"startingpoints": None, "selectedCharRoulette": None, "bettedAmount" : None, "characterStatus" : None},
# }



################################

players = [
   {"playerId": 9123, "startingpoints": 100, "bettedAmount": 50, "characterStatus": "active"},
   {"playerId": 123, "startingpoints": 50, "bettedAmount": 50, "characterStatus": "active"},
   {"playerId": 345, "startingpoints": 22, "bettedAmount": 50, "characterStatus": "active"},
]

#Function takes the argument of old and new banker data
def assignBanker(oldBanker, newBanker):
   newBankerIndex = players.index(newBanker)
   players.pop(0)
   players.insert(0, newBanker)
   #insert the old banker to the index of new banker
   players.insert(newBankerIndex, oldBanker)

################################

# Example mapping of numbers to characters
character_map = {0: ["Q", "green"], 1: ["A", "black"], 2: ["B", "red"], 3: ["C", "black"], 4: ["D", "red"], 5: ["E", "black"], 
                 6: ["F", "red"], 7 : ["G", "black"], 8 : ["H", "red"], 9 : ["I", "black"], 10: ["J", "red"], 11 : ["K", "black"], 
                 12 : ["L", "red"],13: ["M", "black"], 14 : ["N", "red"], 15: ["O", "black"], 16: ["P", "red"]}
color = character_map[0][1]
#create a call for color and associate with the values of map characters from 0 to 16 
#so that it intakes the multiplier

#zero is green, 1 is black, 2 is red and so on
# zero is x8 of bettedamount, black and red is x2, if number x15
# Simulate button press to start the game
# press start to turn to true 
def functionofthegame():
    global Ingame, rouletteRange, winningChar
    if gameStart:
        Ingame = True
        print("Spinning the roulette...")
        time.sleep(5)  # Delay for 5 seconds

    # Generate the roulette result
        rouletteRange = random.randrange(0, 17) # this is equivalent to 0 to 16 
        winningChar = character_map.get(rouletteRange, "Unknown")

    # Output the result
        print(f"The winning number is {rouletteRange}")
        print(f"The winning character is {winningChar[0]} and color is {winningChar[1]}")


    # Check each player
        for player, items in players.items():
          if items["selectedCharRoulette"] == winningChar[0]:# Update and print the starting points for the winning player
            items["startingpoints"] += items["bettedAmount"] * 15
            print(f"{player} wins! New points: {items['startingpoints']}")
       
          elif items["selectedCharRoulette"] == winningChar[1]:
            items["startingpoints"] += items["bettedAmount"] * 2
            print(f"{player} wins! New points: {items['startingpoints']}")
          elif items["selectedCharRoulette"] == "Q":
            items["startingpoints"] += items["bettedAmount"] * 8
            print(f"{player} wins! New points: {items['startingpoints']}")
          else :
            items["startingpoints"] -= items["bettedAmount"]
            print(f"{player} loses! New points: {items['startingpoints']}")
    

    else:
        print("No game has started")
        Ingame = False


#button to start the game 
gameStart = True
functionofthegame()
