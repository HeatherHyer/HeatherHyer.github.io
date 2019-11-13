class storageService {
    constructor(data, key)
    {
        this.origModel = data;        //original data, should never change
        this.model = _.cloneDeep(data);    //lodash, deep copy of data
        this.key = key;  //localstorage key for data,  use localStorage[this.key]
    }
    size() {
      //should return the number of items in model.data
      return (this.model.data.length)-1;
    }
    reset() {
       //should clear local storage
       window.localStorage.clear();
       //should restore model from origModel (clone)
       this.model = this.origModel;
    }
    clear() {
     //should clear local storage
     window.localStorage.clear();
    }
    store() {
        //should store your model in localStorage
        window.localStorage.setItem('data', this.model);
    }
    retrieve() {
       //should retrieve your model from localStorage.
       let local = window.localStorage.getItem('data');
       //updates local model if not null
       if (local) {
         this.model = local;
       }
    }
    list() {
       //return the list of data items as is
       return this.model.data;
    }
    sort(cols, sorts, perm=false) {
       //returns a copy of the model, sorted using the 'cols' and 'sort' specifications (see index.html for example)
       // storageSvc.sort(['name'],['asc'])
       // if 'perm' param is set to true, you should update the internal model.data with the sorted list
       let sortedList = [];

       if (sorts = 'asc') {
         sortedList = _.sortBy(this.model.data, cols);
       }
       else {
         sortedList = _.sortBy(this.model.data, cols).reverse();
       }

       if (perm) {
         this.model.data = sortedList;
       }

       return sortedList;

    }
    filter(filterObj){
       //returns a copy of the filtered array
       return _.filter(this.model.data, filterObj);
       //e.g., storageSvc.filter({coachLicenseLevel:1});
    }
    getItem(getId) {
      //returns the item in the array with id=getId, null if it is not found
      for (let i = 1; i < this.model.data.length; i++) {
        if (this.model.data[i].id === getId) {
          return this.model.data[i];
        }
      }
      return null;
    }
    create(obj) {
       //append new object to data store
       this.model.data.push(obj);
       // persist in local storage by calling store()
       this.store();
    }
    update(obj) {
      let index = 0;
      //find index of object in array
      for (let i = 1; i < this.model.data.length; i++) {
        if (this.model.data[i].id === obj.id) {
          index = i;
        }
      }
      console.log(this.model.data[index]);
      //update object with new contents
      this.model.data[index] = obj;
      console.log(this.model.data[index]);
      // persist in local storage by calling this.store()
      this.store();
    }
    remove(removeId) {
        //remove object with specified id from model.data
        for (let i = 0; i < this.model.data.length; i++) {
          if (this.model.data[i].id === removeId) {
            delete this.model.data[i];
          }
        }
      // persist in local storage by calling this.store()
      this.store();
    }
    getLookup(name) {
        //returns the requested lookup data
        return this.model.lookups[name];
    }
};
