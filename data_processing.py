from pathlib import Path
import json
import string

ROOT_DIR = Path.cwd()
DATA_DIR = f"{ROOT_DIR}/data"
ANIMAL_DIR = f"{DATA_DIR}/animals"

def loadJSON(data_path: str):
    with open(data_path) as json_data:
        data = json.load(json_data)
        return data

def saveJSON(save_path: str, dictJSON: dict) -> None:
    with open(save_path, 'w+') as json_file:
        json.dump(dictJSON, json_file, indent=4)

def createMassiveAnimalList():
    dinosaurs = loadJSON(f"{ANIMAL_DIR}/dinosaurs.json")['dinosaurs']
    dogs = loadJSON(f"{ANIMAL_DIR}/dogs.json")['dogs']
    donkeys = loadJSON(f"{ANIMAL_DIR}/donkeys.json")['donkeys']
    horses = loadJSON(f"{ANIMAL_DIR}/horses.json")['horses']
    ponies = loadJSON(f"{ANIMAL_DIR}/ponies.json")['ponies']
    rabbits = loadJSON(f"{ANIMAL_DIR}/rabbits.json")['rabbits']

    bird_data = loadJSON(f"{ANIMAL_DIR}/birds_antarctica.json")['birds'] + loadJSON(f"{ANIMAL_DIR}/birds_north_america.json")['birds']

    birds = []
    for family in bird_data:
        birds = birds + family['members']

    data = {
        "animals" : []
    }
    data["animals"] = dinosaurs + dogs + donkeys + horses + ponies + rabbits + birds
    saveJSON(f"{DATA_DIR}/animals.json", data)

createMassiveAnimalList()



