const mainPage = {
  typeBtnAry: [HtmlId.getBtn, HtmlId.postBtn],
  show: () => {
    mainPage.addClickTypeEvent();
    mainPage.addParamEvent();
    mainPage.addSubmitEvent();
    mainPage.addUrlEvent();
  },
  addUrlEvent: () => {
    const eventAry = [EventName.input];
    mainPage.submitActiveEvent();
    jQueryHelper.addEvent(eventAry, HtmlId.urlText, mainPage.submitActiveEvent);
  },
  submitActiveEvent: ()=>{
    const isUrlEmpty = stringHelper.isEmpty(jQueryHelper.getValue(HtmlId.urlText));
    jQueryHelper.setAttr(HtmlId.submitBtn, HtmlAttr.disabled, isUrlEmpty);
  },
  addClickTypeEvent: () => {
    const btnAry = mainPage.typeBtnAry;
    for (let idx = 0; idx < btnAry.length; idx++) {
      jQueryHelper.addClickEvent(btnAry[idx], mainPage.onClickTypeBtn);
    }
  },
  onClickTypeBtn: (event) => {
    const btnAry = mainPage.typeBtnAry;
    for (let idx = 0; idx < btnAry.length; idx++) {
      jQueryHelper.removeClass(btnAry[idx], HtmlClass.active);
    }
    $(event.target).addClass(HtmlClass.active);
  },
  addParamEvent: () => {
    jQueryHelper.addClickEvent(HtmlId.addParamBtn, mainPage.onClickAddParamBtn);
  },
  onClickAddParamBtn: (event) => {
    const target = jQueryHelper.getSelector(event.target);
    const parent = target.parent();

    jQueryHelper.append(HtmlId.paramRowBox, HtmlRaw.paramBox);
    jQueryHelper.remove(HtmlId.submitRow);
    jQueryHelper.append(HtmlId.paramRowBox, HtmlRaw.submitRow);
    parent.append(HtmlRaw.rmParamBtn);
    target.remove();
    mainPage.addParamEvent();
    mainPage.onClickRmParamBtn();
    mainPage.addSubmitEvent();
  },
  onClickRmParamBtn: () => {
    const allRmBtn = jQueryHelper.getAllIdSelector(HtmlId.rmParamBtn);
    allRmBtn.off();
    allRmBtn.click(mainPage.rmParamEvent);
  },
  rmParamEvent: (event) => {
    const target = jQueryHelper.getSelector(event.target);
    target.parent().parent().remove();
  },
  addSubmitEvent: () => {
    jQueryHelper.addClickEvent(HtmlId.submitBtn, mainPage.onClickSubmitBtn);
  },
  onClickSubmitBtn: () => {
    const url = jQueryHelper.getValue(HtmlId.urlText);
    const params = mainPage.getParams();
    const isGetBtnActive = jQueryHelper.getIdSelector(HtmlId.getBtn).hasClass(HtmlClass.active);

    if (isGetBtnActive) {
      ajaxHelper.getAPIPromise(url, params).then(
        mainPage.setResponseData,
        promiseHelper.rejectRequest
      )
    } else {
      ajaxHelper.postAPIPromise(url, params).then(
        mainPage.setResponseData,
        promiseHelper.rejectRequest
      )
    }
  },
  getParams: () => {
    let params = {};
    const keys = jQueryHelper.getAllIdSelector(HtmlId.paramKey);
    const values = jQueryHelper.getAllIdSelector(HtmlId.paramValue);
    for (let idx = 0; idx < keys.length; idx++) {
      const key = keys[idx].value;
      params[key] = values[idx].value;
    }
    return params;
  },
  setResponseData: (resData) => {
    return new Promise((resolve, reject) => {
      const dataStr = JSON.stringify(resData);
      jQueryHelper.setValue(HtmlId.responseArea, dataStr);
      resolve();
    })
  }
};

mainPage.show();