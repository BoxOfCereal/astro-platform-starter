
if (typeof gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare !== "undefined") {
  gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare = {};


gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare.userFunc0xaca8c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");
const key = eventsFunctionContext.getArgument("Key");
const value = eventsFunctionContext.getArgument("Value");
const index = eventsFunctionContext.getArgument("Index");

array.castTo("array");
// console.log(array.getAllChildrenArray()[0])
console.log(array.getAllChildrenArray()[0]._children)
console.log(array.getAllChildrenArray()[0]._children[key]._str)
console.log(array.getAllChildrenArray()[0]._children[key]._str === value)



eventsFunctionContext.returnValue = array.getAllChildrenArray()[0]._children[key]._str === value;

};
gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare.userFunc0xaca8c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare.func = function(runtimeScene, Array, Key, Value, Index, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ArrayTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ArrayTools"),
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
if (argName === "Key") return Key;
if (argName === "Value") return Value;
if (argName === "Index") return Index;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ArrayTools__GlobalIndexKeyValueCompare.registeredGdjsCallbacks = [];