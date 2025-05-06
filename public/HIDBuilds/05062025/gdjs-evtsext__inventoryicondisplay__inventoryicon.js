
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon = gdjs.evtsExt__InventoryIconDisplay__InventoryIcon || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon = class InventoryIcon extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Name = objectData.content.Name !== undefined ? objectData.content.Name : "";
    this._objectData.Quantity = objectData.content.Quantity !== undefined ? objectData.content.Quantity : Number("") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Name !== newObjectData.content.Name)
      this._objectData.Name = newObjectData.content.Name;
    if (oldObjectData.content.Quantity !== newObjectData.content.Quantity)
      this._objectData.Quantity = newObjectData.content.Quantity;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getName() {
    return this._objectData.Name !== undefined ? this._objectData.Name : "";
  }
  _setName(newValue) {
    this._objectData.Name = newValue;
  }
  _getQuantity() {
    return this._objectData.Quantity !== undefined ? this._objectData.Quantity : Number("") || 0;
  }
  _setQuantity(newValue) {
    this._objectData.Quantity = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext = {};
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryTextObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryTextObjects2= [];


gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getName(); }}}

}


};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.Name = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDInventoryIconObjectsList = [...runtimeScene.getObjects("InventoryIcon")];
var GDInventoryIconObjects = Hashtable.newFrom({"InventoryIcon": thisGDInventoryIconObjectsList});
var thisGDInventoryTextObjectsList = [...runtimeScene.getObjects("InventoryText")];
var GDInventoryTextObjects = Hashtable.newFrom({"InventoryText": thisGDInventoryTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "InventoryIcon": GDInventoryIconObjects
, "InventoryText": GDInventoryTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "InventoryIcon": thisGDInventoryIconObjectsList
, "InventoryText": thisGDInventoryTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InventoryIconDisplay"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InventoryIconDisplay"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryTextObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryTextObjects2.length = 0;

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryIconObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryTextObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.NameContext.GDInventoryTextObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext = {};
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryTextObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryTextObjects2= [];


gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("InventoryIcon"), gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setName(eventsFunctionContext.getArgument("Value"))
}{for(var i = 0, len = gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetName = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDInventoryIconObjectsList = [...runtimeScene.getObjects("InventoryIcon")];
var GDInventoryIconObjects = Hashtable.newFrom({"InventoryIcon": thisGDInventoryIconObjectsList});
var thisGDInventoryTextObjectsList = [...runtimeScene.getObjects("InventoryText")];
var GDInventoryTextObjects = Hashtable.newFrom({"InventoryText": thisGDInventoryTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "InventoryIcon": GDInventoryIconObjects
, "InventoryText": GDInventoryTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "InventoryIcon": thisGDInventoryIconObjectsList
, "InventoryText": thisGDInventoryTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InventoryIconDisplay"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InventoryIconDisplay"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryTextObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryTextObjects2.length = 0;

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryIconObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryTextObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetNameContext.GDInventoryTextObjects2.length = 0;


return;
}
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext = {};
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDObjectObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryIconObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryIconObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryTextObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryTextObjects2= [];


gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getQuantity(); }}}

}


};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.Quantity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDInventoryIconObjectsList = [...runtimeScene.getObjects("InventoryIcon")];
var GDInventoryIconObjects = Hashtable.newFrom({"InventoryIcon": thisGDInventoryIconObjectsList});
var thisGDInventoryTextObjectsList = [...runtimeScene.getObjects("InventoryText")];
var GDInventoryTextObjects = Hashtable.newFrom({"InventoryText": thisGDInventoryTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "InventoryIcon": GDInventoryIconObjects
, "InventoryText": GDInventoryTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "InventoryIcon": thisGDInventoryIconObjectsList
, "InventoryText": thisGDInventoryTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InventoryIconDisplay"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InventoryIconDisplay"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryIconObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryTextObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryTextObjects2.length = 0;

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryIconObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryTextObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.QuantityContext.GDInventoryTextObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext = {};
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDObjectObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryIconObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryIconObjects2= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects1= [];
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects2= [];


gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("InventoryText"), gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setQuantity(eventsFunctionContext.getArgument("Value"))
}{for(var i = 0, len = gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(("" + eventsFunctionContext.getArgument("Value")));
}
}}

}


};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDInventoryIconObjectsList = [...runtimeScene.getObjects("InventoryIcon")];
var GDInventoryIconObjects = Hashtable.newFrom({"InventoryIcon": thisGDInventoryIconObjectsList});
var thisGDInventoryTextObjectsList = [...runtimeScene.getObjects("InventoryText")];
var GDInventoryTextObjects = Hashtable.newFrom({"InventoryText": thisGDInventoryTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "InventoryIcon": GDInventoryIconObjects
, "InventoryText": GDInventoryTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "InventoryIcon": thisGDInventoryIconObjectsList
, "InventoryText": thisGDInventoryTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InventoryIconDisplay"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InventoryIconDisplay"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryIconObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects2.length = 0;

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryIconObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryIconObjects2.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects1.length = 0;
gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.SetQuantityContext.GDInventoryTextObjects2.length = 0;


return;
}

gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("InventoryIconDisplay::InventoryIcon", gdjs.evtsExt__InventoryIconDisplay__InventoryIcon.InventoryIcon);
