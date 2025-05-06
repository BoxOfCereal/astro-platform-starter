
if (typeof gdjs.evtsExt__ObjectTools__UpsertAtKey !== "undefined") {
  gdjs.evtsExt__ObjectTools__UpsertAtKey.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectTools__UpsertAtKey = {};


gdjs.evtsExt__ObjectTools__UpsertAtKey.userFunc0x18f3978 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const structure = eventsFunctionContext.getArgument("Structure");
/** @type {gdjs.Variable} */
const key = eventsFunctionContext.getArgument("Key");
/** @type {gdjs.Variable} */
const value = eventsFunctionContext.getArgument("Value");
console.log(structure)

// gdjs.Variable.copy(idx, target, false);
};
gdjs.evtsExt__ObjectTools__UpsertAtKey.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectTools__UpsertAtKey.userFunc0x18f3978(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectTools__UpsertAtKey.func = function(runtimeScene, Structure, Key, Value, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectTools"),
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
if (argName === "Key") return Key;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ObjectTools__UpsertAtKey.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ObjectTools__UpsertAtKey.registeredGdjsCallbacks = [];