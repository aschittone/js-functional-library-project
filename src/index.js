  fi = (function() {
    return {
      each: function (data, callback) {
        if (Array.isArray(data)) {
          for (let i = 0; i < data.length; i++) {
            callback(data[i], i, data)
          }
        } else if (typeof data === 'object' ){
            for (key in data) {
              callback(data[key])
            }
          }
          return data
      },
      map: function (data, callback) {
        if (Array.isArray(data)) {
          newArray = []
          for (let i = 0; i < data.length; i++) {
            newArray.push(callback(data[i], i, data))
          }
          return newArray;
        } else if (typeof data === 'object' ){
            newObj = {}
            for (key in data) {
              newObj[key] = undefined;
              newObj[key] = callback(data[key]);
            }
            return newObj;
        }
      },
      reduce: function (data, callback, accumulator) {
        fi.each(data, function(element) {
          if (accumulator === undefined) {
            return accumulator = element;
          } else {
            return accumulator = callback(accumulator, element);
          }
        });
        return accumulator;
      },
      find: function (data, callback) {
        let result = [];
        fi.each(data, function(element){
          if (callback(element)) {
            result.push(element);
            return;
          }
        });
        return result[0];
      },
      filter: function (data, callback) {
        let result = [];
        fi.each(data, function(element){
          if (callback(element)) {
            result.push(element);
          }
        });
        return result;
      },
      sortBy: function (data, callback) {
        if (typeof(callback) === "function") {
          let newArray = [];
          fi.each(data, function(element) {
            newArray.push([element, callback(element)]);
          });
          newArray.sort(function (a, b) {return a[1] - b[1]})
          let result = fi.map(newArray, function(element) {
              return element[0]
            })
            return result;

        } else if (typeof(callback) === "string") {
          let newArray = data.slice(0);
          let result = newArray.sort(function(a, b) {
            let x = a[callback].toLowerCase()
            let y = b[callback].toLowerCase()
            return x < y ? -1 : x > y ? 1 : 0;
          })
          return result;
        }
      },
      size: function (data) {
        let counter = 0;
        fi.each(data, function(element) {
          counter += 1
        })
        return counter;
      },
      first: function (array, n) {
        if (n === undefined) {
          return array[0];
        } else {
          return array.slice(0, n)
        }
      },
      compact: function (array) {
        let newArray = [];
        fi.each(array, function(element) {
          if (element !== false && element !== null && element !== 0 && element !== "") {
            newArray.push(element)
          }
        })
        return newArray;
      },
      flatten: function (array, shallow) {
        
      }





    }
  })()
