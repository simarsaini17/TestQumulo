"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ThroughputMetricsSchema extends Schema {
  async up() {
    const tableExists = await this.hasTable("throughput_metrics_data");

    if (!tableExists) {
      this.create("throughput_metrics_data", (table) => {
        table.increments();
        table.datetime("date");
        table.float("throughput_read_speed").notNullable();
        table.float("throughput_write_speed").notNullable();
      });
    }
  }

  down() {
    this.drop("throughput_metrics_data");
  }
}

module.exports = ThroughputMetricsSchema;
