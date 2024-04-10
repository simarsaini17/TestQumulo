"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ThroughputMetric extends Model {
  static get table() {
    return "throughput_metrics_data";
  }
}

module.exports = ThroughputMetric;
