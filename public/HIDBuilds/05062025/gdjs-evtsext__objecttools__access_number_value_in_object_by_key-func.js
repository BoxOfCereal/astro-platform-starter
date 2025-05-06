
if (typeof gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key !== "undefined") {
  gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key = {};


gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key.userFunc0x8eeb58 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
// console.dir("== Access object at key ==")

const structure = eventsFunctionContext.getArgument("Structure");
const key = eventsFunctionContext.getArgument("Key");

const target = eventsFunctionContext.getArgument("Target");


const item = structure
// console.dir(item)
const s = item._children[key]
// console.log(s)


gdjs.Variable.copy(s, target, false);
};
gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key.userFunc0x8eeb58(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key.func = function(runtimeScene, Structure, Key, Target, parentEventsFunctionContext) {
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
if (argName === "Target") return Target;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ObjectTools__Access_number_value_in_object_by_key.registeredGdjsCallbacks = [];