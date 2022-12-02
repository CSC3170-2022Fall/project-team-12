## Settings

Option 1, Normal 



## Function Points

Consumer login

Producer login 

Consumer purchase request register

Consumer request modifications 

Producer package information register 

Machine operation assignment 

Information look up (with visualization)



## Relationship schema 



## ER

#### Consumer

id

user_name

password

infiltration 

processing_records 



#### Producer

id

user_name

password

plants 



#### Package 

id 

consumer_id

producer_id

bundle_id

time_budget

cost 



#### Plant 

id

owner

machine_id



#### Machine type

id

operation_type_id

time

expense 



#### Machine

<!-- A machine can only do one type of operation-->

id

machine_type_id



#### Chip type

id

production_process



#### Chip

id

chip_type_id

plant_id



#### bundle 

id

chip_id



#### Operation type

id

name



#### Operation 

id

plant_id



#### Processing record

id 

consumer_id

start_time

end_time

expense

chip_id

status 

