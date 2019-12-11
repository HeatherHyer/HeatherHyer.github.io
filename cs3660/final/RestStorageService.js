class RestStorageService {
    constructor(apiHostUrl, apiType, sortCol, sortDir, filterCol, filterStr)
    {
      this.apiHostUrl = apiHostUrl;
      this.apiType = apiType;
      this.sortCol = sortCol;
      this.sortDir = sortDir;
      this.filterCol = filterCol;
      this.filterStr = filterStr;
      this.data = [];
    }
    list() {
      return $.ajax({
        method: "GET",
        url: this.apiHostUrl + this.apiType,
        dataType: 'json'
      });
    }
    get(id) {
      return $.ajax({
        method: "GET",
        url: this.apiHostUrl + this.apiType + "/" + id,
        dataType: 'json'
      })
    }
    update(id, postData) {
      $.ajax({
        method: "PUT",
        url: this.apiHostUrl + this.apiType + "/" + id,
        data: postData,
        contentType: "application/json",
        dataType: 'json'
      })
    }
    create(id, postData) {
      $.ajax({
        method: "POST",
        url: this.apiHostUrl + this.apiType,
        data: postData,
        contentType: "application/json",
        dataType: 'json'
      })
    }
    delete(id) {
      $.ajax({
        method: "DELETE",
        url: this.apiHostUrl + this.apiType + "/" + id
      })
    }
    sort(sortCol, sortOrder) {

    }
    filter(filterObj) {

    }
};
