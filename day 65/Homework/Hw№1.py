import random

player_score = 0
AI_score = 0

choises = ["rock","paper","scissors"]

running = True
    
while running:
    print("\n   1. rock\n   2. paper\n   3. scissors\n   4. end the game\n")

    player_choice = input("   Enter here: ").lower()
    AI_choice = random.choice(choises)

    if player_choice == "4":
        print("\n  Thanks for playing\n")
        break

    if (player_choice == "1" and AI_choice == "rock") or (player_choice == "2" and AI_choice == "paper") or (player_choice == "3" and AI_choice == "scissors"):
        print("------------------------------------------------------------------------------------------------\n\n   Its a tie! \n")
        print(f"  your choice: {"rock" if player_choice == "1" else "paper" if player_choice == "2" else "scissors"}                       AI choice: {AI_choice}")
        print(f"  Your score: {player_score}                            AI score: {AI_score}\n")
        
    elif (player_choice == "1" and AI_choice == "scissors") or (player_choice == "2" and AI_choice == "rock") or (player_choice == "3" and AI_choice == "paper"):
        print("------------------------------------------------------------------------------------------------\n\n   You won!! \n")
        player_score += 1
        print(f"  your choice: {"rock" if player_choice == "1" else "paper" if player_choice == "2" else "scissors"}                       AI choice: {AI_choice}")
        print(f"  Your score: {player_score}                            AI score: {AI_score}\n")
        
    else:
        print("------------------------------------------------------------------------------------------------\n\n   You lost :( \n")
        AI_score += 1
        print(f"  your choice: {"rock" if player_choice == "1" else "paper" if player_choice == "2" else "scissors"}                       AI choice: {AI_choice}")
        print(f"  Your score: {player_score}                            AI score: {AI_score}\n")
        