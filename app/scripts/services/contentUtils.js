angular.module('webApp')
  .factory('ContentUtils',function($q, $http, APP) {

  var contentType = '';

  return {
    getProcessedData: processData,
    setType : setType
  }

  function setType(type){
    contentType = type;
  }

  function processData(data){ console.log(data)
    var content = [];
    if((contentType != 'demoCatalog')){
      for(var att in data){
        content.push(groupContent(data[att]))
      }
    } else {
      content.push(groupDemoCatalogContent(data))
    }
    return content;
  }

  function getType(){
    return contentType;
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
    return partial;
  }
  /* Grouping mini Catalog content */
  function groupDemoCatalogContent(columns){
    var partial = {
      class: '',
      title: null,
      description : null,
      columns : getCatalogColumnsContent(columns),
      bottom: null //getBottomContent(att)
    };
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

  function getCatalogColumnsContent(columns){
    var columnsContent = [];
    for(var c in columns){
          columnsContent.push({
              title: '',
              class: 'content-column',
              centered: true,
              content: [{
                         elementType: 'img',
                         src: columns[c].image,
                         class: 'main-img'
                       },
                       {
                         elementType: 'p',
                         class: 'justified',
                         text:  '<div class="homeCatalog-content"><span class="product-attr">' + columns[c].code + '</span></div>' +
                                '<div class="homeCatalog-content home-catalog-description">' + columns[c].description + '</div>'
                       }]
            })
      }

      return columnsContent;
  }

});
