
if (typeof gdjs.evtsExt__Inventories__SetItemCount !== "undefined") {
  gdjs.evtsExt__Inventories__SetItemCount.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Inventories__SetItemCount = {};


gdjs.evtsExt__Inventories__SetItemCount.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Inventories__IsLimitedItemCapacity.func(runtimeScene, eventsFunctionContext.getArgument("InventoryName"), eventsFunctionContext.getArgument("ItemName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("InventoryName")).getChild(eventsFunctionContext.getArgument("ItemName")).getChild("Count").setNumber(Math.max(0, eventsFunctionContext.getArgument("Value")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Inventories__IsLimitedItemCapacity.func(runtimeScene, eventsFunctionContext.getArgument("InventoryName"), eventsFunctionContext.getArgument("ItemName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("InventoryName")).getChild(eventsFunctionContext.getArgument("ItemName")).getChild("Count").setNumber(gdjs.evtTools.common.clamp(0, gdjs.evtsExt__Inventories__ItemCapacity.func(runtimeScene, eventsFunctionContext.getArgument("InventoryName"), eventsFunctionContext.getArgument("ItemName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), eventsFunctionContext.getArgument("Value")));
}}

}


};

gdjs.evtsExt__Inventories__SetItemCount.func = function(runtimeScene, Value, InventoryName, ItemName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Inventories"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Inventories"),
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
if (argName === "InventoryName") return InventoryName;
if (argName === "ItemName") return ItemName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Inventories__SetItemCount.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Inventories__SetItemCount.registeredGdjsCallbacks = [];