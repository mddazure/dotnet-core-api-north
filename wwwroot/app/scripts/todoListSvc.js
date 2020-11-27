'use strict';
angular.module('todoApp')
.factory('todoListSvc', ['$http', function ($http) {

    $http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With']; 

    return {
        getItems : function(){
            return $http.get(apiEndpoint + 'north/api/Todo');
        },
        getItem : function(id){
            return $http.get(apiEndpoint + 'north/api/Todo/' + id);
        },
        postItem : function(item){
            return $http.post(apiEndpoint + 'north/api/Todo', item);
        },
        putItem : function(item){
            return $http.put(apiEndpoint + 'north/api/Todo/' + item.id, item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: apiEndpoint + 'north/api/Todo/' + id
            });
        }
    };
}]);