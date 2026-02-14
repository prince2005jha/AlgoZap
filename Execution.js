const mongoose = require('mongoose');

const executionSchema = new mongoose.Schema({
  workflowId: { type: mongoose.Schema.Types.ObjectId, ref: 'Workflow' },
  status: { type: String, default: 'queued' },
  input: Object,
  output: Object,
  error: String,
  algorandTxId: String,
}, { timestamps: true });

module.exports = mongoose.model('Execution', executionSchema);
