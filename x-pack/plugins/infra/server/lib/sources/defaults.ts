/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import {
  METRICS_INDEX_PATTERN,
  LOGS_INDEX_PATTERN,
  TIMESTAMP_FIELD,
} from '../../../common/constants';
import { InfraSourceConfiguration } from '../../../common/http_api/source_api';

export const defaultSourceConfiguration: InfraSourceConfiguration = {
  name: 'Default',
  description: '',
  metricAlias: METRICS_INDEX_PATTERN,
  logAlias: LOGS_INDEX_PATTERN,
  fields: {
    container: 'container.id',
    host: 'host.name',
    message: ['message', '@message'],
    pod: 'kubernetes.pod.uid',
    tiebreaker: '_doc',
    timestamp: TIMESTAMP_FIELD,
  },
  inventoryDefaultView: '0',
  metricsExplorerDefaultView: '0',
  logColumns: [
    {
      timestampColumn: {
        id: '5e7f964a-be8a-40d8-88d2-fbcfbdca0e2f',
      },
    },
    {
      fieldColumn: {
        id: ' eb9777a8-fcd3-420e-ba7d-172fff6da7a2',
        field: 'event.dataset',
      },
    },
    {
      messageColumn: {
        id: 'b645d6da-824b-4723-9a2a-e8cece1645c0',
      },
    },
  ],
};
