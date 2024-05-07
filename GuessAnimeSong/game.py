import os
import random
import pygame

# Initialize Pygame
pygame.init()
pygame.mixer.init()

def play_song(song_path):
    pygame.mixer.music.load(song_path)
    pygame.mixer.music.play()

def get_songs(songs_folder):
    songs = [song for song in os.listdir(songs_folder) if song.endswith(('.mp3', '.wav'))]
    return songs

def display_question(options):
    print("Guess the anime song! Which anime is this song from?")
    for i, option in enumerate(options, start=1):
        print(f"{i}. {option}")

def main():
    songs_folder = 'songs'
    anime_songs = get_songs(songs_folder)
    correct_answers = 0

    try:
        while True:
            # Select a random song
            selected_song = random.choice(anime_songs)
            play_song(os.path.join(songs_folder, selected_song))

            # Create fake options
            options = ['Naruto', 'Bleach', 'One Piece', 'Attack on Titan']
            correct_answer = random.choice(options)  # You should match the correct answer to your songs

            display_question(options)
            user_answer = input("Enter your answer (1-4): ")
            if options[int(user_answer) - 1] == correct_answer:
                print("Correct!")
                correct_answers += 1
            else:
                print("Wrong! The correct answer was:", correct_answer)

            if input("Play again? (yes/no): ") == 'no':
                break
    except KeyboardInterrupt:
        print("Game interrupted.")
    finally:
        pygame.quit()
        print(f"Your score: {correct_answers}")

if __name__ == "__main__":
    main()