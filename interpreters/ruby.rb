'require json'

def my_engine (method, param)
    response = Engine.send({action: method, params: param}.to_json)
    return response;

def swap_sprite (dir, from, to)
    return my_engine('swapSprite', [dir, from, to])


def get_element(direction, distance)
    return my_engine('getElement', [direction, distance])



def load_level(level)
    return my_engine('loadLevel', level)


def next_level
    return Engine.send('nextLevel')


def get_x_map_size
    return Engine.send('getXMapSize')


def get_y_map_size
    return Engine.send('getYMapSize')

def get_pos_x
    return Engine.send('getPosX')

def get_pos_y
    return Engine.send('getPosY')

def open_door
    return Engine.send('openDoor')

def close_door
    return Engine.send('closeDoor')

def is_door_open
    return Engine.send('isDoorOpen')

def get_objectives
    return Engine.send('getObjectives')

def take_objective
    return Engine.send('takeObjective')

def wait_until_key_pressed
    return Engine.send('waitUntilKeyPressed')

def get_current_level_name
    return Engine.send('getCurrentLevelName')

def get_level_name(level)
    return my_engine('getLevelName', level)

def get_current_music
    return Engine.send('getCurrentMusic')

def get_music_index
    return Engine.send('getMusicIndex')

def set_music(musicName)
    return my_engine('setMusic', musicName)



