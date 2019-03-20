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
    return my_engine('nextLevel', None)


def get_x_map_size
    return my_engine('getXMapSize', None)


def get_y_map_size
    return my_engine('getYMapSize', None)

def get_pos_x
    return my_engine('getPosX', None)

def get_pos_y
    return my_engine('getPosY', None)

def open_door
    return my_engine('openDoor', None)

def close_door
    return my_engine('closeDoor', None)

def is_door_open
    return my_engine('isDoorOpen', None)

def get_objectives
    return my_engine('getObjectives', None)

def take_objective
    return my_engine('takeObjective', None)

def wait_until_key_pressed
    return my_engine('waitUntilKeyPressed', None)

def get_current_level_name
    return my_engine('getCurrentLevelName', None)

def get_level_name(level)
    return my_engine('getLevelName', level)

def get_current_music
    return my_engine('getCurrentMusic', None)

def get_music_index
    return my_engine('getMusicIndex', None)

def set_music(musicName)
    return my_engine('setMusic', musicName)



