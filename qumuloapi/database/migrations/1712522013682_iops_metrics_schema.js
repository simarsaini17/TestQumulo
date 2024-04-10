"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IopsMetricsSchema extends Schema {
  async up() {
    const tableExists = await this.hasTable("iops_metrics_data");

    if (!tableExists) {
      this.create("iops_metrics_data", (table) => {
        table.increments();
        table.datetime("date");
        table.float("iops_read_speed").notNullable();
        table.float("iops_write_speed").notNullable();
      });
    }
  }

  down() {
    this.drop("iops_metrics_data");
  }
}

module.exports = IopsMetricsSchema;
