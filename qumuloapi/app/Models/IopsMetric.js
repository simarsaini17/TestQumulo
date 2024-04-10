"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class IopsMetric extends Model {
  static get table() {
    return "iops_metrics_data";
  }
}

module.exports = IopsMetric;
