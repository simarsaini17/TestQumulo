"use strict";
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Route.get("api/iops-real-timedata", () => {
//   return { greeting: "Hello world in JSON" };
// });
Route.get("api/iops", "IopsMetricController.index");
Route.get("api/throughput", "ThroughputMetricController.index");
Route.put("api/snapshot-config", "SnapshotConfigController.update");
Route.get("api/get-snapshot-config", "SnapshotConfigController.index");
