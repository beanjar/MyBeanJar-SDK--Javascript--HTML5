var categories = [];
var categoriesArray = [];
var numberOfCategories;

function parse_categories(categories) {
    for (var i = 0; i < numberOfCategories; i++) {
        push_to_categories(categories, i);
    }

    return categories;
}

function push_to_categories(categories, i) {
    categories.push({
        categorykey: categoriesArray[i].categorykey,
        name: categoriesArray[i].name,
    });
}

function parse_categories_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,categories);
        return;
    }
    
    categories = [];
    categoriesArray = [];
    var json = JSON.parse(data);
    var status = json.status;
    
    var result;
    if (status === 1) {
        categoriesArray = json.response.categories;
        numberOfCategories = categoriesArray.length;
        parse_categories(categories);
        result = STATUS_SUCCESS;
        callback(result,categories);
    } else {
        result = STATUS_FAIL;
        callback(result,categories);
    }
}