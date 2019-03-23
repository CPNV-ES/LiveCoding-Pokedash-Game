require 'json'

def my_engine (method, param)
    response = Engine.send({action: method, params: param}.to_json)
    return response;
end

# MAP POSITIONS AND LIMIT
def get_x_map_size
    return my_engine('getXMapSize', nil)
end

def get_y_map_size
    return my_engine('getYMapSize', nil)
end

def get_pos_x
    return my_engine('getPosX', nil)
end

def get_pos_y
    return my_engine('getPosY', nil)
end

def is_in_map(pos_x, pos_y, get_x_map_size, get_y_map_size, direction, distance)
    return my_engine('isInMap', [pos_x, pos_y, get_x_map_size, get_y_map_size, direction, distance])
end

# MOVEMENT
def get_element(direction, distance)
    return my_engine('getElement', [direction, distance])
end

def swap_sprite (dir, from, to)
    return my_engine('swapSprite', [dir, from, to])
end

def wait_until_key_pressed
    return my_engine('waitUntilKeyPressed', nil)
end

# OBJECTIVES
def get_objectives
    return my_engine('getObjectives', nil)
end

def take_objective
    return my_engine('takeObjective', nil)
end

# DOOR
def open_door
    return my_engine('openDoor', nil)
end

def close_door
    return my_engine('closeDoor', nil)
end

def is_door_open
    return my_engine('isDoorOpen', nil)
end

# LEVEL
def load_level(level)
    return my_engine('loadLevel', level)
end

def next_level
    return my_engine('nextLevel', nil)
end

def get_current_level_name
    return my_engine('getCurrentLevelName', nil)
end

def get_current_level_index
    return my_engine('getCurrentLevelIndex', nil)
end

def get_level_name(level)
    return my_engine('getLevelName', level)
end

# CONSOLE
def write_console(value)
    return my_engine('writeConsole', value)
end

# MUSIC
def get_current_music_name
    return my_engine('getCurrentMusicName', nil)
end

def get_current_music_index
    return my_engine('getMusicCurrentIndex', nil)
end

def get_music_index(index)
    return my_engine('getMusicIndex', index)
end

def get_music_name(music_name)
    return my_engine('getMusicName', music_name)
end

def play_music_named(music_name)
    return my_engine('playMusicNamed', music_name)
end

def play_music_index(index)
    return my_engine('playMusicIndex', index)
end
