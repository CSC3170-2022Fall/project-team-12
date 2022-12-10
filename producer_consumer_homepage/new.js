function JsonDelItem(JSONArray, index){
    for(var key in JSONArray){
        if(key == index || JSONArray[key] == index){
            delete JSONArray[key];
            break;
        }
    }
}