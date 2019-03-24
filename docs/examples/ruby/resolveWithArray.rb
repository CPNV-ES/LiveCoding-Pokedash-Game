=begin
Author : Julien Richoz
Date: 20.03.2019

Description: A php file solution to have a playable Pokedash Game with the arrows keys.

Be careful of :
    - The functions from PokedashGame are send to a server, which return only string.
    - Don't forget to convert some response from string to the appropriate type (string to int for example).
    - Take care of boolean response ! If you need to check if it's true or false in a Pokedash function, stringify the boolean ! -> if($test == 'true')  
=end

#Get the size of the map
lim_x = get_map_size_x
lim_y = get_map_size_y

# Set a distance to do an action from the protagonist (example: move 1 case)
dist = 1

# Infinite loop to handle arroy key event
while true do
    # Get the direction from the key pressed
    dir = wait_until_key_pressed.to_i ## Don't forget to convert to int
    
    # Get the current position of the protagonist
    x = get_pos_x
    y = get_pos_y

    # Check if the action we are going to perform will happen in the map array
    if is_in_map(x, y, lim_x, lim_y, dir, dist) == 'true' # The boolean has to be in string (server response)
        
        # Checking the element next to the protagonist to do a specific action :
        element = get_element(dir, dist)
        
        case element
        # Moving Pikachu 1 case
        when 'Road'
            swap_sprite(dir, 0, dist)

        #If we can push boulder, move boulder and pikachu one case further 
        when 'Boulder'
            if is_in_map(x, y, lim_x, lim_y, dir, dist+1) == 'true'
                if get_element(dir, dist + 1) == 'Road' 
                    swap_sprite(dir, dist, dist + 1) # Swapping the boulder with the road
                    swap_sprite(dir, 0, dist) # Swapping the protagonist with the road
                else
                end
            end
            
        # Take the objective
        when 'Objective'
            take_objective
            swap_sprite(dir, 0, dist)
            # Open the door is no objective left
            write_console(get_objectives)
            if get_objectives.to_i == 0 # Again, dont forget to convert to int
                open_door
            end
            
        # If the door is open, access to the next level
        when 'Door'
            if is_door_open
                next_level
            end
        end
    end
end