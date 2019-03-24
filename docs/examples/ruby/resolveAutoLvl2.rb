LIM_X = get_map_size_x.to_i
LIM_Y = get_map_size_y.to_i
DIST = 1
dir = 37 # Start direction = left
element = nil
out = false

while !out do
    if is_in_map(get_pos_x.to_i, get_pos_y.to_i, LIM_X, LIM_Y, dir, DIST) == 'true'
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
    else
        dir += 1
        if dir > 40 
            dir = 37
        end
    end
end
