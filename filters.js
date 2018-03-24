function RecordFilter(sourceRecords) {
  this.sourceRecords = sourceRecords;
  this.filters = [];
};

RecordFilter.prototype.addNumberRangeFilter = function(key, min, max) {

  var func = function(obj) {

    var value = Number(obj[key]);

    if (value >= min && value <= max) {
      return true;
    } else {
      return false;
    }
  };

  this.filters.push(func);

};

RecordFilter.prototype.addValueListFilter = function(key, list) {

  if (list.length > 0) {
    var func = function(obj) {

      var values = obj[key];

      if (!(values instanceof Array)) {
        values = new Array(values);
      }

      for(var i = 0; i < values.length; i++) {
        if (list.indexOf(values[i]) > -1) {
          return true;
        }
      }

      return false;
    };

    this.filters.push(func);
  }

};

RecordFilter.prototype.addTimeFrameFilter = function(key, start, end) {


  var startTs = new Date(start);
  var endTs = new Date(end);

  var func = function(obj) {
    var recordDate = obj[key]
    var recordTs = new Date(recordDate);

    if (recordTs >= startTs && recordTs <= endTs) {
      return true;
    } else {
      return false;
    }
  };

  this.filters.push(func);
};

RecordFilter.prototype.applyFilters = function() {

  var returnRecords = this.sourceRecords;
  for(var i = 0; i < this.filters.length; i++) {
    var func = this.filters[i];

    returnRecords = returnRecords.filter(func);
  }

  //console.log(returnRecords);

  return returnRecords;
};

setupNaloxoneFilters = function(filterInputs,recordFilter) {

  if (filterInputs.startDate != undefined && filterInputs.endDate != undefined) {
    recordFilter.addTimeFrameFilter("date",filterInputs.startDate,filterInputs.endDate);
  }

  if (filterInputs.administrationType != undefined) {
    recordFilter.addValueListFilter("administrationType",filterInputs.administrationType);
  }

  if (filterInputs.drugType != undefined) {
    recordFilter.addValueListFilter("drugType",filterInputs.drugType);
  }

  if (filterInputs.source != undefined) {
    recordFilter.addValueListFilter("source",filterInputs.source);
  }

};

setupFentanylFilters = function(filterInputs,recordFilter) {

  if (filterInputs.startDate != undefined && filterInputs.endDate != undefined) {
    recordFilter.addTimeFrameFilter("date",filterInputs.startDate,filterInputs.endDate);
  }

  if (filterInputs.drugType != undefined) {
    recordFilter.addValueListFilter("drugType",filterInputs.drugType);
  }

  if (filterInputs.beforeOrAfter != undefined) {
    recordFilter.addValueListFilter("beforeOrAfter",filterInputs.beforeOrAfter);
  }

  if (filterInputs.result != undefined) {
    recordFilter.addValueListFilter("result",filterInputs.result);
  }

  if (filterInputs.actions != undefined) {
    recordFilter.addValueListFilter("actions",filterInputs.actions);
  }

  if (filterInputs.method != undefined) {
    recordFilter.addValueListFilter("method",filterInputs.method);
  }

  if (filterInputs.under30 != undefined) {
    recordFilter.addValueListFilter("under30",filterInputs.under30);
  }
};
