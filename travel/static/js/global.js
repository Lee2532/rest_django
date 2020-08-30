class HtmlId {}

HtmlId.postBtn = "postBtn";
HtmlId.getBtn = "getBtn";
HtmlId.addParamBtn = "addParamBtn";
HtmlId.rmParamBtn = "rmParamBtn";
HtmlId.submitRow = "submitRow";
HtmlId.submitBtn = "submitBtn";
HtmlId.paramRowBox = "paramRowBox";
HtmlId.urlText = "urlText";
HtmlId.responseArea = "responseArea";
HtmlId.paramKey = "paramKey";
HtmlId.paramValue = "paramValue";

class HtmlClass {}

HtmlClass.active = "active";

class HtmlAttr {}

HtmlAttr.disabled = "disabled";

class EventName {}

EventName.change = "change";
EventName.input = "input";

class ConstValue {}


class HtmlRaw {}

HtmlRaw.paramBox = `
                <div class="row">
                    <div class="col-2 p-1">
                        <button id="addParamBtn" class="btn btn-dark">+</button>
                    </div>
                    <div class="col p-1">
                        <input id="paramKey" type="text" class="form-control border border-dark" placeholder="KEY"/>
                    </div>
                    <div class="col p-1">
                        <input id="paramValue" type="text" class="form-control border border-dark" placeholder="VALUE"/>
                    </div>
                </div>`;
HtmlRaw.submitRow = `
                <div id="submitRow" class="row">
                    <div class="col p-2 text-right">
                        <button id="submitBtn" class="btn btn-dark">Submit</button>
                    </div>
                </div>`;
HtmlRaw.rmParamBtn = `<button id="rmParamBtn" class="btn btn-dark">-</button>`;

class API {}

API.GET = "GET";
API.POST = "POST";
API.json = "json";