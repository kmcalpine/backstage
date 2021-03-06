/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AppConfig, Config } from '@backstage/config';
import { BundlingPathsOptions } from './paths';

export type BundlingOptions = {
  checksEnabled: boolean;
  isDev: boolean;
  config: Config;
  appConfigs: AppConfig[];
  baseUrl: URL;
};

export type BackendBundlingOptions = Omit<BundlingOptions, 'baseUrl'> & {
  inspectEnabled: boolean;
};

export type ServeOptions = BundlingPathsOptions & {
  checksEnabled: boolean;
  config: Config;
  appConfigs: AppConfig[];
};

export type BuildOptions = BundlingPathsOptions & {
  statsJsonEnabled: boolean;
  config: Config;
  appConfigs: AppConfig[];
};
