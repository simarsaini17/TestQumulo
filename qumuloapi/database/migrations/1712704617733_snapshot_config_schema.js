"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SnapshotConfigSchema extends Schema {
  up() {
    this.create("snapshot_configs", (table) => {
      table.increments();
      table.string("policy_name").notNullable();
      table.string("policy_directory").notNullable();
      table.string("schedule").notNullable();
      table.string("timezone");
      table.string("snapshot_days").notNullable();
      table.string("deletion_time").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("snapshot_configs");
  }
}

module.exports = SnapshotConfigSchema;
