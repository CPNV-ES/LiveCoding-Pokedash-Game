LIM_X = get_map_size_x
LIM_Y = get_map_size_y
DIST = 1
dir = 37 # Start direction = left
element = nil
out = false

while !out do
    # If next move is in the map
    if is_in_map(get_pos_x, get_pos_y, LIM_X, LIM_Y, dir, DIST) == 'true'
        element = get_element(dir, DIST)
        case element
        when 'Road'
            swap_sprite(dir, 0, DIST)
        when 'Objective'
            take_objective
            swap_sprite(dir, 0, DIST)
            if get_objectives.to_i == 0 # Again, dont forget to convert to int
                open_door
            end
        when 'Door'
            if is_door_open
                next_level
                out = true
            end
        else
            dir +=1
            if dir > 40
                dir = 37
            end
        end
    # If next move is out the map, change direction
    else
        dir += 1
        if dir > 40 
            dir = 37
        end
    end
end
