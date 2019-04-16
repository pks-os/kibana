/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */


let upgradeInProgress = false;

export function setUpgradeInProgress(show) {
  upgradeInProgress = show;
}

export function isUpgradeInProgress() {
  return upgradeInProgress;
}
