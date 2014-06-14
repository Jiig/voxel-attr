voxel-attr
==========

Simple attribute (think DnD) module for voxel.js

## How-to
* Load with voxel-plugins

##Options
* roll('attr') (sets to 1)
* mod('attr') (sets to Math.max(1, current value/10))

##Usage
* Attributes are stored as a list of ints in a dictionary
    * Default dictionary for exaple:
    ```javascript
        default_d={
            //[current, min, max, mod]
            "str":[1, 0, 99, 0],
            "dex":[1, 0, 99, 0],
            "con":[1, 0, 99, 0],
            "int":[1, 0, 99, 0],
            "wis":[1, 0, 99, 0],
            "cha":[1, 0, 99, 0]
        }
    ```
####Methods
* get('attr') -- Returns list of values for given attribute from dictionart
    * You can also use getMin, getMax, etc. These return a int
* set('attr', [current, min, max, mod]) -- Sets the values for given attribute to given list
    * You can also use setMin, setMax, etc. These take attribute name and single value
* mod('attr') -- sets the mod value of given attr, you can change this by passing it into the options
* inc('attr', value) -- Increases the current value of given attribute by value
* dec('attr', value) -- Decreases the current value of given attribute by value
####Events
* attrchange (attr, oldvalue, currentvalue, difference)
* attrinc (attr, newvalue)
* attrdec (attr, oldvalue)
