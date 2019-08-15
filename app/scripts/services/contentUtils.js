angular.module('webApp')
  .factory('ContentUtils',function($q, $http, APP) {


  return {
    getProcessedData: processData

  }



  function processData(data){
    var content = [];
    for(var att in data){
      content.push(groupContent(data[att]))
    }
    return content;
  }

  /* Grouping chunks content */
  function groupContent(obj){
    var partial = {
      class: obj.class,
      title : {
        text : obj.title.text,
        class: obj.title.class
      },
      description : {
        text : obj.description.text,
        class: obj.description.class
      },
      columns : getColumnsContent(obj.columns),
      bottom: null //getBottomContent(att)
    };
    console.log(partial)
    return partial;
  }
  /* Formatting bottom content*/
  function getBottomContent(index){
    var bottom = null;
  }

  /* Formatting common columns content*/
  function getColumnsContent(columns){
    var columnsContent = [];
    for(var c in columns)
    columnsContent.push({
                  title: columns[c].title,
                  class: 'content-column',
                  centered: false,
                  content: [{
                         elementType: columns[c].elementType,
                         src: columns[c].src,
                         class: columns[c].class,
                         text: columns[c].text
                       }]
                     });

      return columnsContent;
  }

});
