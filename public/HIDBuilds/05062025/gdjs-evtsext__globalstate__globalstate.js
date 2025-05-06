
gdjs.evtsExt__GlobalState__GlobalState = gdjs.evtsExt__GlobalState__GlobalState || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__GlobalState__GlobalState.GlobalState = class GlobalState extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.toggleVariableBoolean(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0));
}}

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_open = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.toggle_menu_openContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_open = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.is_player_menu_openContext.GDGLOBAL_9595STATEObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("arr", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.evtTools.debuggerTools.log("FUCK" + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Inventory").getChild(0).getChild("name").getAsString(), "info", "");
}{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Inventory"), eventsFunctionContext.getArgument("Array"), false);
}
}}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventory = function(Array, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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
if (argName === "Array") return Array;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_inventoryContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.getArgument("Structure"), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Inventory"), false);
}
}}

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventory = function(Structure, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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
if (argName === "Structure") return Structure;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_inventoryContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Stats"), eventsFunctionContext.getArgument("Structure"), false);
}
}}

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_stats = function(Structure, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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
if (argName === "Structure") return Structure;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Get_player_statsContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.getArgument("Structure"), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Stats"), false);
}
}}

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_stats = function(Structure, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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
if (argName === "Structure") return Structure;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Set_player_statsContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("GLOBAL_STATE"), gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects1);
{gdjs.evtTools.storage.writeStringInJSONFile("Player_State", "state", gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects1.length !== 0 ? gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects1[0] : null), ((gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects1[0].getVariables()).get("Player_State")));
}}

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_state = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Save_stateContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__ArrayTools__InsertAt.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Inventory"), eventsFunctionContext.getArgument("Index"), runtimeScene.getScene().getVariables().get("item"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventory = function(Item, Index, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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
if (argName === "Item") return Item;
if (argName === "Index") return Index;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Add_item_to_inventoryContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("item_to_equip", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.getArgument("Item"), eventsFunctionContext.localVariables[0].getFromIndex(0), false);
}
}{gdjs.evtsExt__ObjectTools__UpsertAtKey.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Equipped_Items"), eventsFunctionContext.getArgument("Key"), eventsFunctionContext.localVariables[0].getFromIndex(0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_item = function(Item, Key, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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
if (argName === "Item") return Item;
if (argName === "Key") return Key;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Equip_itemContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setString("null");
variable.addChild("name", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(-1);
variable.addChild("qty", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setString("empty");
variable.addChild("type", variable1);
}
variables._declare("empty_item", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.evtsExt__ArrayTools__InsertAt.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Inventory"), eventsFunctionContext.getArgument("Index"), runtimeScene.getScene().getVariables().get("empty_item"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventory = function(Index, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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
if (argName === "Index") return Index;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Remove_item_from_inventoryContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext = {};
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDObjectObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDObjectObjects2= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDGLOBAL_9595STATEObjects1= [];
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDGLOBAL_9595STATEObjects2= [];


gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.Function = function(Parameter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGLOBAL_9595STATEObjectsList = [...runtimeScene.getObjects("GLOBAL_STATE")];
var GDGLOBAL_9595STATEObjects = Hashtable.newFrom({"GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GLOBAL_STATE": GDGLOBAL_9595STATEObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GLOBAL_STATE": thisGDGLOBAL_9595STATEObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GlobalState"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GlobalState"),
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
if (argName === "Parameter") return Parameter;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDGLOBAL_9595STATEObjects2.length = 0;

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDGLOBAL_9595STATEObjects1.length = 0;
gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.FunctionContext.GDGLOBAL_9595STATEObjects2.length = 0;


return;
}

gdjs.evtsExt__GlobalState__GlobalState.GlobalState.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("GlobalState::GlobalState", gdjs.evtsExt__GlobalState__GlobalState.GlobalState);
