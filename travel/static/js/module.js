const stringHelper = {
  isEmpty: (str) => {
    return str === "";
  }
};

const htmlHelper = {
  makeIdSelector: (idName) => {
    return `#${idName}`;
  },
  makeClassSelector: (idName) => {
    return `.${idName}`;
  },
  makeAllIdSelector: (idName) => {
    return `[id=${idName}]`;
  }
};

const jQueryHelper = {
  getSelector: (element) => {
    return $(element);
  },
  getIdSelector: (idName) => {
    return $(htmlHelper.makeIdSelector(idName));
  },
  getAllIdSelector: (idName) => {
    return $(htmlHelper.makeAllIdSelector(idName));
  },
  getClassSelector: (idName) => {
    return $(htmlHelper.makeClassSelector(idName));
  },
  addClickEvent: (idName, event) => {
    const selector = jQueryHelper.getIdSelector(idName);
    selector.off();
    selector.click(event);
  },
  addEvent: (eventAry, idName, eventFn) => {
    const eventNames = eventAry.join(" ");
    const selector = jQueryHelper.getIdSelector(idName);
    selector.bind(eventNames, eventFn);
  },
  toggleClass: (idName, className, state) => {
    const selector = jQueryHelper.getIdSelector(idName);
    selector.toggleClass(className, state);
  },
  setAttr: (idName, attrName, attrValue) => {
    const selector = jQueryHelper.getIdSelector(idName);
    selector.attr(attrName, attrValue);
  },
  removeClass: (idName, className) => {
    const selector = jQueryHelper.getIdSelector(idName);
    selector.removeClass(className);
  },
  append: (idName, item) => {
    const selector = jQueryHelper.getIdSelector(idName);
    selector.append(item);
  },
  remove: (idName) => {
    const selector = jQueryHelper.getIdSelector(idName);
    selector.remove();
  },
  getValue: (idName) => {
    const selector = jQueryHelper.getIdSelector(idName);
    return selector.val();
  },
  setValue: (idName, data) => {
    const selector = jQueryHelper.getIdSelector(idName);
    selector.val(data);
  }
};

const promiseHelper = {
  rejectRequest: (error) => {
    return new Promise((resolve, reject) => {
      jQueryHelper.setValue(HtmlId.responseArea, TextKey.wrongRequest);
      resolve();
    })
  }
};

const ajaxHelper = {
  getAPIPromise: (url, param) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        type: API.GET,
        data: param,
        dataType: API.json,
      }).done(function (response) {
        resolve(response);
      }).fail(function (error) {
        console.warn(error);
        reject(error);
      }).always(function (response) {
        resolve(response);
      })
    })
  }
  ,
  postAPIPromise: (url, param) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        type: API.POST,
        data: param,
        dataType: API.json,
      }).done(function (response) {
        resolve(response);
      }).fail(function (error) {
        console.warn(error);
        reject(error);
      }).always(function (response) {
        resolve(response);
      })
    })
  }
};